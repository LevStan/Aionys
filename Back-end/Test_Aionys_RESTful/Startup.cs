using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Cors;
using Test_Aionys_RESTful.Models;
namespace Test_Aionys_RESTful
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddMvc();
			services.AddSingleton<IRepository, NotesRepository>();
			services.AddCors(options =>
			{
				options.AddPolicy("CorsPolicy", builder =>
				{
					builder.AllowAnyOrigin();
					builder.WithMethods("GET", "PUT", "POST", "DELETE", "OPTIONS");
					builder.AllowAnyHeader();
				});
			});
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app)
		{
			app.UseDeveloperExceptionPage();
			app.UseCors("CorsPolicy");
			app.UseHttpsRedirection();
			app.UseMvc(routes =>
			{
				routes.MapRoute("GET", "api/{controller=notes}/{action=get}/{id?}");
				routes.MapRoute("DELETE", "api/{controller=notes}/{action=delete}/{id?}");
				routes.MapRoute("PUT", "api/{controller=notes}/{action=put}/{id?}");
				routes.MapRoute("POST", "api/{controller=notes}/{action=post}");
			});

		}

	}
}

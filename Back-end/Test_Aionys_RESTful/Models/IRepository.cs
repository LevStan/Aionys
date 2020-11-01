using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Test_Aionys_RESTful.Models
{
	public interface IRepository
	{
		IEnumerable<Notes> GetAll();
		Notes GetSpecified(int Id);
		void Create(Notes note);
		Notes Delete(int Id);
		void Update(Notes note);
		Notes Find(int Id);
	}
}

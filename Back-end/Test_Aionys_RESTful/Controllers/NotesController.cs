using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Test_Aionys_RESTful.Models;


namespace Test_Aionys_RESTful.Controllers
{
	[Route("api/notes")]
	[EnableCors("CorsPolicy")]
	[ApiController]
	public class NotesController : ControllerBase
	{
		public NotesController(IRepository obj)
		{
			iNotes = obj;
		}
		public IRepository iNotes { get; set; }

		//HTTP Methods
		[HttpGet]
		public IEnumerable<Notes> GetAll()
		{
			return iNotes.GetAll();
		}
		[HttpGet("{id}", Name = "GET")]
		public IActionResult GetSpecified(int Id)
		{
			var simple_note = iNotes.GetSpecified(Id);
			if (simple_note == null) { return NotFound(); }
			return new ObjectResult(simple_note);
		}

		[HttpPost(Name = "POST")]
		public IActionResult Create([FromBody] Notes note)
		{
			if (note == null) { return BadRequest(); }
			return CreatedAtRoute("GetId", new { id = note.Id, note });
		}

		[HttpPut("{id}", Name = "PUT")]
		public IActionResult Update(int Id, [FromBody] Notes note)
		{
			if (note == null || note.Id != Id) { return BadRequest(); }
			var simple_note = iNotes.Find(Id);
			if (simple_note == null) { return BadRequest(); }
			iNotes.Update(note);
			return new NoContentResult();
		}

		[HttpDelete("{id}")]
		public void Delete(int Id)
		{
			iNotes.Delete(Id);
		}
	}
}
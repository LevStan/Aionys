using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Concurrent;
namespace Test_Aionys_RESTful.Models
{
	public class NotesRepository: IRepository 
	{
		private static ConcurrentDictionary<int, Notes> _notesRep =
			new ConcurrentDictionary<int, Notes>();
		public NotesRepository()
		{
			Create(new Notes { Text = "First Note" });
			Create(new Notes { Text = "Hello" });
			Create(new Notes { Text = "What a good day" });
		}
		public IEnumerable<Notes> GetAll()
		{
			return _notesRep.Values;
		}
		public Notes GetSpecified(int Id)
		{
			Notes note;
			_notesRep.TryGetValue(Id, out note);
			return note;
		}
		public void Create(Notes note)
		{
			Random rnd = new Random();
			note.Id = rnd.Next(0, 1000);
			_notesRep[note.Id] = note;
		}
		public Notes Find(int Id)
		{
			Notes note;
			_notesRep.TryGetValue(Id, out note);
			return note;
		}
		public void Update(Notes note)
		{
			_notesRep[note.Id] = note;
		}
		public Notes Delete(int Id)
		{
			Notes note;
			_notesRep.TryGetValue(Id, out note);
			_notesRep.TryRemove(Id, out note);
			return note;
		}	
	}
}

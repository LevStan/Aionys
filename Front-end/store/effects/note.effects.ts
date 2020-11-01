import {Injectable} from '@angular/core';
import {
  NoteActionTypes,
  NotesLoadedSuccess,
  NotesLoadedError,
  AddNoteRequest,
  NoteAddedSuccess,
  NoteAddedError,
  DeleteNoteRequest,
  NoteDeletedSuccess,
  NoteDeletedError,
} from '../actions/note.actions';
import { NoteModel } from '../models/note.models'
import { Actions, ofType, Effect } from '@ngrx/effects';
import { NotesService } from '../../src/app/notes.service';
import {mergeMap, map, catchError} from 'rxjs/operators';
import {of} from 'rxjs/';
import {Notes} from '../../src/app/notes';

@Injectable()
export class NoteEffects {
  @Effect()
  LoadNotes$ = this.actions$.pipe(
      ofType(NoteActionTypes.LoadNotes),
      mergeMap(() =>this.notesService.getAllNotes().pipe(
        map(
          (notemodels: NoteModel[]) =>
            new NotesLoadedSuccess({ notemodels: notemodels })
        ),
        catchError(() => of(new NotesLoadedError()))
      )
    )
  )

/*@Effect()
  AddNote$ = this.actions$.pipe(
    ofType(NoteActionTypes.AddNoteRequest),
    mergeMap((action: AddNoteRequest) =>
      this.notesService.createNote(action.payload.notemodel).pipe(
        map(
          (notemodel: NoteModel) => new NoteAddedSuccess({ notemodel: NoteModel })
        ), 
        catchError(() => of(new NoteAddedError()))
      )
    )
  )
*/
  @Effect()
  DeleteNote$ = this.actions$.pipe(
    ofType(NoteActionTypes.DeleteNoteRequest),
    mergeMap((action: DeleteNoteRequest) =>
      this.notesService.deleteNote(action.payload.id).pipe(
        map(
          (id: number) => new NoteDeletedSuccess({ id: id })
        ),
        catchError(() => of(new NoteDeletedError()))
      )
    )
  )
  constructor(
    private actions$: Actions,
    private notesService: NotesService
  ) {}
}
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity'
import { NoteModel } from '../models/note.models';

export enum NoteActionTypes {
    AddNoteRequest = '[Create/Edit Note] Add Note Request',
    NoteAddedSuccess = '[Create/Edit Note] Note Added Success',
    NoteAddedError = '[Create/Edit Note] Note Added Error',
  
    UpdateNoteRequest = '[Create/Edit Note] Update Note Request',
    NoteUpdatedSuccess = '[Create/Edit Note] Note Updated Success',
    NoteUpdatedError = '[Create/Edit Note] Note Updated Error',
  
    LoadNotes = '[Notes list] Load Notes',
    NotesLoadedSuccess = '[Notes list] Notes Loaded Success',
    NotesLoadedError = '[Notes list] Notes Loaded Error',
  
    DeleteNoteRequest = '[Notes list] Delete Note Request',
    NoteDeletedSuccess = '[Notes list] Note Deleted Success',
    NoteDeletedError = '[Notes list] Note Deleted Error',
  }
  
  export class AddNoteRequest implements Action {
    readonly type = NoteActionTypes.AddNoteRequest
  
    constructor(public payload: { notemodel: NoteModel }) {}
  }
  
  export class NoteAddedSuccess implements Action {
    readonly type = NoteActionTypes.NoteAddedSuccess
  
    constructor(public payload: { notemodel: NoteModel }) {}
  }
  
  export class NoteAddedError implements Action {
    readonly type = NoteActionTypes.NoteAddedError
  }
  
  export class UpdateNoteRequest implements Action {
    readonly type = NoteActionTypes.UpdateNoteRequest
  
    constructor(public payload: { notemodel: NoteModel }) {}
  }
  
  export class NoteUpdatedSuccess implements Action {
    readonly type = NoteActionTypes.NoteUpdatedSuccess
  
    constructor(public payload: { notemodel: Update<NoteModel> }) {}
  }
  
  export class NoteUpdatedError implements Action {
    readonly type = NoteActionTypes.NoteUpdatedError
  }
  
  export class LoadNotes implements Action {
    readonly type = NoteActionTypes.LoadNotes
  }
  
  export class NotesLoadedSuccess implements Action {
    readonly type = NoteActionTypes.NotesLoadedSuccess
  
    constructor(public payload: { notemodels: NoteModel[] }) {}
  }
  
  export class NotesLoadedError implements Action {
    readonly type = NoteActionTypes.NotesLoadedError
  }
  
  export class DeleteNoteRequest implements Action {
    readonly type = NoteActionTypes.DeleteNoteRequest
  
    constructor(public payload: { id: number }) {}
  }
  
  export class NoteDeletedSuccess implements Action {
    readonly type = NoteActionTypes.NoteDeletedSuccess
  
    constructor(public payload: { id: number }) {}
  }
  
  export class NoteDeletedError implements Action {
    readonly type = NoteActionTypes.NoteDeletedError
  }

  export type NoteModelUnion =
  | AddNoteRequest
  | NoteAddedSuccess
  | NoteAddedError
  | UpdateNoteRequest
  | NoteUpdatedSuccess
  | NoteUpdatedError
  | LoadNotes
  | NotesLoadedSuccess
  | NotesLoadedError
  | DeleteNoteRequest
  | NoteDeletedSuccess
  | NoteDeletedError
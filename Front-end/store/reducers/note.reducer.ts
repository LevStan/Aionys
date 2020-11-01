import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

import { NoteModel } from '../models/note.models';
import {
  NoteActionTypes,
  NoteModelUnion,
} from '../actions/note.actions';

export const adapter: EntityAdapter<NoteModel> = createEntityAdapter<NoteModel>(
  {
  selectId: (notemodel: NoteModel) => notemodel.ID,
})

export interface State extends EntityState<NoteModel> {
  pending: boolean
}

export const initialState: State = adapter.getInitialState({
  pending: false,
})

export const reducer = (
  state: State = initialState,
  action: NoteModelUnion
) => {
  switch (action.type) {
    case NoteActionTypes.AddNoteRequest:
      return adapter.addOne(action.payload.notemodel, {
        ...state,
        pending: false,
      })
    case NoteActionTypes.NoteAddedSuccess:
      return { ...state, pending: true }
    case NoteActionTypes.NoteAddedError:
      return { ...state, pending: false }

    case NoteActionTypes.UpdateNoteRequest:
      return { ...state, pending: true }
    case NoteActionTypes.NoteUpdatedSuccess:
      return adapter.updateOne(action.payload.notemodel, {
        ...state,
        pending: false,
      })
    case NoteActionTypes.NoteUpdatedError:
      return { ...state, pending: false }

    case NoteActionTypes.LoadNotes:
      return { ...state, pending: true }
    case NoteActionTypes.NotesLoadedSuccess:
      return adapter.addAll(action.payload.notemodels, {
        ...state,
        pending: false,
      })
    case NoteActionTypes.NotesLoadedError:
      return { ...state, pending: false }

    case NoteActionTypes.DeleteNoteRequest:
      return { ...state, pending: true }
    case NoteActionTypes.NoteDeletedSuccess:
      return adapter.removeOne(action.payload.id, {
        ...state,
        pending: false,
      })
    case NoteActionTypes.NoteDeletedError:
      return { ...state, pending: false }

    default:
      return state
  }
}

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors()

export const selectNotesIds = selectIds
export const selectNoteEntities = selectEntities
export const selectAllNotes = selectAll
export const selectNoteTotal = selectTotal
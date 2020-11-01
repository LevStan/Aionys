import { ActionReducerMap, createFeatureSelector, createSelector,} from '@ngrx/store'
  
  import * as notemodels from './reducers/note.reducer'
  
  export interface State {
    notemodels: notemodels.State
  }
  
  export const reducers: ActionReducerMap<State> = {
    notemodels: notemodels.reducer,
  }
  
  export const selectAdminState = createFeatureSelector<
    State
  >('admin')
  export const selectNotesState = createSelector(
    selectAdminState,
    (state: State) => state.notemodels
  )
  
  export const selectAllNotes = createSelector(
    selectNotesState,
    notemodels.selectAllNotes
  )
  
  export const selectNotesPending = createSelector(
    selectNotesState,
    (state: notemodels.State) => state.pending
  )
 
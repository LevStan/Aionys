import { reducers } from '../../store'
import { NoteEffects } from '../../store/effects/note.effects'
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
@NgModule({
  imports: [
    //...
    EffectsModule.forFeature([NoteEffects]),
    StoreModule.forFeature('catalog', reducers),
  ],
  //...
})
export class NotesModule {}
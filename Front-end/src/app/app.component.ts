import {TemplateRef, ViewChild} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {Notes} from './notes';
import {NotesService} from './notes.service';
import {Observable} from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { first } from 'rxjs/operators';

@Component({ 
    selector: 'my-app', 
    templateUrl: './app.component.html',
    providers: [NotesService]
}) 

    export class AppComponent implements OnInit 
    {
    //Type of templates
    @ViewChild('readOnlyTemplate', {static: false}) readOnlyTemplate: TemplateRef<any>;
    @ViewChild('editTemplate', {static: false}) editTemplate: TemplateRef<any>;
       
    editedNote: Notes;
    notes: Array<Notes>;
    isNewRecord: boolean;
    statusMessage: string;
       

    constructor(private serv: NotesService,  private translateService: TranslateService) {
        this.notes = new Array<Notes>();
        this.translateService.setDefaultLang('en');
    }
    
    ngOnInit() {
        this.loadNotes();
    }

    setLanguage(languageCode: string) {
        // set selected language
        this.translateService.use(languageCode);
        this.translateService.get('info.about').
        pipe(first()).subscribe((value) => console.log(value));
      }
       
    //Load all notes
    private loadNotes() {
        this.serv.getAllNotes().subscribe((data: Notes[]) => {
                this.notes = data; 
            });
    }
    // Add new note
    addNote() {
        this.editedNote= new Notes(0,"");
        this.notes.push(this.editedNote);
        this.isNewRecord = true;
    }
    
    // Update note
    editNote(note: Notes) {
        this.editedNote = new Notes(note.id, note.Text);
    }
    
    loadTemplate(note: Notes) {
        if (this.editedNote && this.editedNote.id === note.id) {
            return this.editTemplate
        } else {
            return this.readOnlyTemplate
        }
    }
    
    saveNote() {
        if (this.isNewRecord) {
            
            this.serv.createNote(this.editedNote).subscribe((data) => {;
                (this.statusMessage = 'Data deleted successfully'),
                this.loadNotes()
            })
            this.isNewRecord = false;
            this.editedNote = null;
        } else {
            
            this.serv.updateNote(this.editedNote.id, this.editedNote).subscribe((data) => {;
                (this.statusMessage = 'Data added successfully'),
                this.loadNotes()
            })
            this.editedNote = null;
        }
    }
    
    cancel() {
        if (this.isNewRecord) {
            this.notes.pop();
            this.isNewRecord = false;
        }
        this.editedNote = null;
    }
    
    deleteNote(note: Notes, id: number) {
        this.serv.deleteNote(note.id).subscribe((data) => { ;
            (this.statusMessage = 'Specified note  was deleted successfully'),
            this.loadNotes()
        })
    }
}

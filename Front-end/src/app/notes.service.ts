import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Notes} from './notes';
    
@Injectable()
export class NotesService{
    
    private url = "http://localhost:44354/api/notes";
    constructor(private http: HttpClient){ }
       
    getAllNotes(){
        return this.http.get(this.url);
    }
    getSpecifiedNote(id: number){
        return this.http.get(this.url + '/' + id);
    }
    createNote(note: Notes){
        return this.http.post(this.url, note);
        //const myHeaders = new HttpHeaders().set('id', "application/json");
        //return this.http.post(this.url, JSON.stringify(note), {headers: myHeaders}); 
    }
    updateNote(id: number, note: Notes) {
        const UrlParams = new HttpParams().set('id', id.toString());
        return this.http.put(this.url, note, {
            params: UrlParams,
          })
        }
       // const myHeaders = new HttpHeaders().set("Content-Type", "application/json");
        //return this.http.put(this.url, JSON.stringify(note), {headers:myHeaders});
    deleteNote(id: number){
        return this.http.delete(this.url + '/' + id)
    }
}
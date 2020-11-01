import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

    @NgModule({
      imports:      [ BrowserModule, FormsModule, HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
        EffectsModule.forRoot([]),
        StoreModule.forRoot({})
      ],
      declarations: [ AppComponent ],
      bootstrap:    [ AppComponent ]
})
export class AppModule { }
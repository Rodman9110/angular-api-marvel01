import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
// import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
import { CharacterComponent } from './characters/character/character.component';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './characters/characters.component';
import { FlexLayoutModule } from "@angular/flex-layout";
// import { MatCardModule  } from "@angular/material";
// import { MatFormFieldModule } from "@angular/material/form-field";
// import { MatFormField } from "@angular/material/form-field";

import { MatCardModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatInput, MatFormField, MatInputModule, MatSpinner, MatProgressSpinnerModule  } from "@angular/material";
import { SearchComponent } from './search/search.component';
import { FormControl } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { SearchCharacterComponent } from './search/search-character/search-character.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharacterComponent,
    CharactersComponent,
    SearchComponent,
    LoadingComponent,
    SearchCharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FlexLayoutModule,
    // MatFormField,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    // MatFormField,
    // FormControl
     MatProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

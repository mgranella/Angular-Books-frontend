import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './pages/book/book.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AppRoutingModule } from './pages/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ConvertToLowerPipe } from './convert-to-lower/convert-to-lower.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ConvertToLowerPipe,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

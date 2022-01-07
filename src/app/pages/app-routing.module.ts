import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { DetailComponent } from './detail/detail.component';

const routes:Routes = [
  {path: 'book', component: BookComponent},
  {path: '', redirectTo: 'book', pathMatch: 'full'},
  {path: 'detail/:id', component: DetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

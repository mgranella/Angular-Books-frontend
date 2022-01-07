import { Component, OnInit } from '@angular/core';
import { ApiService, Book } from 'src/app/providers/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books:Book[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  async ngOnInit() {
    this.apiService.getAll().then(data => {
      return this.books = data;
    });
  }

  async showDetail(bookId:number){
    this.router.navigate(['detail',bookId]);
  }

}

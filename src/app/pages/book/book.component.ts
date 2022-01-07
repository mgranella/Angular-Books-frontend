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
  //ngOnInit(): void {
    //this.books = await this.apiService.get(); --> THIS WORKS
    //this.apiService.get().then<Book[]>(data => { --> <Book[]> NOT needed
    this.apiService.getAll().then(data => {
      //console.log(`Async Inside prromise-1:: ${JSON.stringify(data)}`);  
      //this.books = data.results;
      return this.books = data;
      ////console.log(`this.book:: ${JSON.stringify(this.books)}`);  
    });
    //console.log(`Async/Await:: Outside promise-1:: ${JSON.stringify(temp)}`);
    console.log(`Outside promise-2`);
  }

  async showDetail(bookId:number){
    console.log(`hey::${bookId}`);
    this.router.navigate(['detail',bookId]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, Book } from 'src/app/providers/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public bookId?:number;
  public book:Book = {id:0, title:'', image: ''};

  constructor(private route: ActivatedRoute, private apiservice: ApiService) { }

  //ngOnInit(): void {
    async ngOnInit() {
    this.bookId = parseInt(String(this.route.snapshot.paramMap.get('id')));

    this.book = await this.apiservice.get(this.bookId);
    console.log(`this.book:: ${JSON.stringify(this.book)}`);
  }

}

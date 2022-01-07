import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

export type Book = {
  id: number,
  title: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private url:string = 'https://gutendex.com/books';

  constructor(private httpClient: HttpClient) { } 

  public getAll() {
    
    return new Promise<Book[]>((res, rej) => {
      try {
        this.httpClient.get(this.url).subscribe(
          data => {
            let orderedJson:Book[];
            orderedJson = JSON.parse(JSON.stringify(data)).results.sort((a:any,b:any) => (a.title).localeCompare(b.title)).map((x: { id: number; title: string; formats:any}) => (
            {          
              id: x.id,
              title: x.title,
              image: x.formats['image/jpeg']
            }
            ));
            res(orderedJson);
          }          
        );
      }
      catch (e) {
        rej({message: `Error: ${e}`});
      }
    });
  }

  public get(id:number){
    return new Promise<Book>((res,rej) => {
      try {
        this.httpClient.get<any>(`${this.url}/${id}`).subscribe(
          data => {
            //console.log(`data:: ${JSON.stringify(data)}`);
            let bookArray:Book;
            bookArray = {
              id: data.id,
              title: data.title,
              image: data.formats['image/jpeg'] ?? null,
            }
            res(bookArray);
          }
        );        
      }
      catch (e) {
        rej({message: `Error:: ${e}`});
      }
    })
  }  
}

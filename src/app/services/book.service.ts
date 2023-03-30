import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Book from '../models/book.model';


@Injectable({
  providedIn: 'root'
})

export class BookService {
  //root url api endpoint
  endPointURL = 'http://localhost:8080/api/v1/books';

  constructor(private http: HttpClient) { }

  //header options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  //get book
  getBooks(): Observable<Book> {
    return this.http
      .get<Book>(this.endPointURL)
  }

  //get book by title
  getBookByTitle(bookTitle: string): Observable<Book> {
    let params = new HttpParams().set('bookTitle', bookTitle);
    return this.http
      .get<Book>(
        this.endPointURL + '/search/by/title',
        { params: params }
      )
  }

  //get book by author
  getBookByAuthor(authorName: any): Observable<Book> {
    let params = new HttpParams().set('authorName', authorName);
    return this.http
      .get<Book>(
        this.endPointURL + '/search/by/author',
        { params: params }
      )
  }

  //get book by categorie
  getBookByCategory(categoryName: string): Observable<Book> {
    let params = new HttpParams().set('categoryName', categoryName);
    return this.http
      .get<Book>(
        this.endPointURL + '/search/by/category',
        { params: params }
      )
  }

  //get book
  getBook(id: any): Observable<Book> {
    return this.http
      .get<Book>(this.endPointURL + '/' + id)
  }

  //create book
  createBook(book: any): Observable<Book> {
    return this.http
      .post<Book>(
        this.endPointURL,
        JSON.stringify(book),
        this.httpOptions
      )
  }

  //update book
  updateBook(book: any): Observable<Book> {
    return this.http
      .put<Book>(
        this.endPointURL,
        JSON.stringify(book),
        this.httpOptions
      )
  }

  //delete book
  deleteBook(id: any) {
    return this.http
      .delete<Book>(this.endPointURL + '/' + id, this.httpOptions)
  }
}

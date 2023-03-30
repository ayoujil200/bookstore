import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Book from '../models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: any = [];
  searchDetails: any = { searchText: '', byWhat: '' };

  constructor(public bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe((data: {}) => {
      this.books = data;
    });
  }

  updateBook(tache: Book) {
    this.router.navigate(['/update', tache.id]);
  }

  onSearch(newBookList: any) {
    this.books = newBookList;
  }

  deleteBook(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.bookService.deleteBook(id).subscribe((data) => {
        this.loadBooks();
      });
    }
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {
  @Input() searchDetails: any;
  @Input() books: any;
  @Input() bookService: any;
  @Output() onSearchLunch = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {

  }

  search() {
    if (this.searchDetails.byWhat === "" || this.searchDetails.searchText === "") {
      this.bookService.getBooks().subscribe((data: {}) => {
        this.books = data;
        this.onSearchLunch.emit(this.books);
      });
    }
    else if (this.searchDetails.byWhat === "byTitle") {
      this.bookService.getBookByTitle(this.searchDetails.searchText).subscribe((data: {}) => {
        this.books = data;
        this.onSearchLunch.emit(this.books);
      });
    } else if (this.searchDetails.byWhat === "byAuthor") {
      this.bookService.getBookByAuthor(this.searchDetails.searchText).subscribe((data: {}) => {
        this.books = data;
        this.onSearchLunch.emit(this.books);
      });
    } else if (this.searchDetails.byWhat === "byCategory") {
      this.bookService.getBookByCategory(this.searchDetails.searchText).subscribe((data: {}) => {
        this.books = data;
        this.onSearchLunch.emit(this.books);
      });
    }
  }

}

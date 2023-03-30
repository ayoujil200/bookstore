import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {

  book: any = { id: 0, title: '', description: '', author: '', categories: '' };

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private bookService: BookService) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe(data => {
      this.book = data;
    })
  }

  updateBook() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.bookService.updateBook(this.book).subscribe(data => {
        this.router.navigate(['/list'])
        this.book = { id: 0, title: '', description: '', author: '', categories: '' };
      })
    }


  }
}

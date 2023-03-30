import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})

export class CreateBookComponent implements OnInit {
  book = { title: '', description: '', author: '', categories: '' };
  constructor(private tacheService: BookService, private router: Router) {

  }

  ngOnInit(): void {

  }

  createBook() {
    this.tacheService.createBook(this.book).subscribe((data: {}) => {
      this.router.navigate(['/list']);
    });
  }

}

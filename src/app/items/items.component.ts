import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent implements OnInit {
  items: any[] = [];
  currentPage = 1;
  pageSize = 20;
  totalPages = 0;

  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems(): void {
    this.itemService.getItems(this.currentPage, this.pageSize).subscribe({
      next: (result) => {
        this.items = result.data;
        this.totalPages = result.totalPages;
      },
      error: (err) => console.error('Error fetching items:', err),
    });
  }

  changePage(page: number): void {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
      this.fetchItems();
    }
  }

  goToUpload(): void {
    this.router.navigate(['/upload']);
  }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../services/item.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  selectedFile: File | null = null;
  message: string | null = null;

  constructor(private itemService: ItemService, private router: Router) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.itemService.uploadFile(this.selectedFile).subscribe({
        next: () => {
          alert('File uploaded successfully.');
          // Navigate to the items page after upload
          this.router.navigate(['/items']);
        },
        error: (err) => console.error('Error uploading file:', err),
      });
    } else {
      alert('Please select a file before uploading.');
    }
  }
}
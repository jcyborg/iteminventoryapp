import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PaginatedResult<T> {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  data: T[];
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  //private apiUrl = 'http://localhost:5051/api/items';
  private apiUrl = 'https://iteminventoryparexcellence-bve3d2fshtdxdvbs.eastus2-01.azurewebsites.net/api/items';

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.apiUrl}/upload`, formData);
  }

    
    getItems(page: number = 1, pageSize: number = 20): Observable<PaginatedResult<any>> {
      return this.http.get<PaginatedResult<any>>(`${this.apiUrl}?page=${page}&pageSize=${pageSize}`);
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  itemDetails(itemId: string): Observable<any> {
    return this.http.get(`http://localhost:3000/itemDetails/${itemId}`);
  }
}

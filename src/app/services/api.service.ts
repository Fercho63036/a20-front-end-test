import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getQueenAttackableSquares(separatedInput: any): Observable<any> {
    const url = `${this.BASE_URL}/problem-1`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(url, separatedInput, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  getMaximumValueFunction(data: any): Observable<any> {
    const url = `${this.BASE_URL}/problem-2`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(url, data, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => error);
  }
}

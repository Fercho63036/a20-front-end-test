import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService  {
  private BASE_URL = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getQueenAttackableSquares(separatedInput: any): Observable<any> {
    const url = `${this.BASE_URL}/chess/square`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(url, separatedInput, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  getMaximunValueFunction(data: any): Observable<any> {
    const url = `${this.BASE_URL}/string/max-value`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(url, data, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('Ocurrió un problema:', error);
    return throwError(() => error);
  }
}

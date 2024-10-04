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

  async getQueenAttackableSquares(separatedInput: any): Promise<any> {
    const url = `${this.BASE_URL}/chess/square`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    try {
      return await this.http.post<any>(url, separatedInput, { headers }).toPromise();
    } catch (error) {
      this.handleError(error);
    }
  }

  async getMaximunValueFunction(data: any): Promise<any> {
    const url = `${this.BASE_URL}/string/max-value`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    try {
      return await this.http.post<any>(url, data, { headers }).toPromise();
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any): void {
    // Aquí puedes personalizar la forma en que se manejan los errores
    console.error('Ocurrió un problema:', error);
    throw error;
  }
}

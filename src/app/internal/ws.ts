import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class CountryService {
    private apiURL = "https://restcountries.com/";
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    constructor(private httpClient: HttpClient) {

    }

    getCountryCatalogs(): Observable<any> {
        return this.httpClient.get<any>(this.apiURL + 'v3.1/all').pipe(catchError(this.errorHandler));
    }

    getCountryByName(name: string): Observable<any> {
        return this.httpClient.get<any>(`${this.apiURL}v3.1/name/${name}`).pipe(catchError(this.errorHandler));
    }

    errorHandler(error: {
        error: {
            message: string;
        }; status: any; message: any;
    }) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }

}
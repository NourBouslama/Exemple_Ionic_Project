import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livre } from '../model/livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  apiURL: string = 'http://192.168.42.216:8080/livres/api';
  constructor(private http : HttpClient) { }


  listeLivre(): Observable<Livre[]>{
    return this.http.get<Livre[]>(this.apiURL);
    } 

}

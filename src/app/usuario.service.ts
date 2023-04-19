import { Injectable } from '@angular/core';
import {Usuario} from "./usuario";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsers(context: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(context)
  }
}

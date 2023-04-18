import { Injectable } from '@angular/core';
import {Usuario} from "./usuario";
import {USERS} from "./usuarios/mock";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  getUsers(): Observable<Usuario[]> {
    const users = of(USERS);
    return users;
  }
}

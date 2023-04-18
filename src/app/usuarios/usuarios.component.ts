import { Component } from '@angular/core';
import { UsuarioService} from "../usuario.service";
import {Usuario} from "../usuario";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.sass']
})
export class UsuariosComponent {
  users: Usuario[] = [];
  tags: string[] = [
    "Nome completo",
    "Nome social",
    "Data de nascimento",
    "Codigo",
    "Sexo",
    "Email",
    "Estado",
    "Municipio",
    "Numero de acessos",
    "Situação",
    "Data de vínculo"
  ]

  constructor(private usuarioService: UsuarioService) {}

  getUsers(): void {
    this.usuarioService.getUsers()
      .subscribe(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }
}

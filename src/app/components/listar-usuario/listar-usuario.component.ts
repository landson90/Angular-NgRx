import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario-model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss'],
})
export class ListarUsuarioComponent implements OnInit {
  usuarios: UsuarioModel[] = [];
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((usuarios: UsuarioModel[]) => {
      this.usuarios = usuarios;
    });
  }
}

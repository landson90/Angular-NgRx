import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario-model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
})
export class CadastroUsuarioComponent implements OnInit {
  model: UsuarioModel = { id: 0, nome: '', idade: 0, perfil: '' };

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {}

  addUsuario() {
    console.log(this.model);
    this.usuarioService.addUsuario(this.model).subscribe();
  }
}

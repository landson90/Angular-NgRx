import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/usuario-model';
import { AppState } from 'src/app/store/app-state';
import * as fromUsuariosAction from '../../../store/usuario.action';
@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
})
export class CadastroUsuarioComponent implements OnInit {
  model: UsuarioModel = { id: 0, nome: '', idade: 0, perfil: '' };

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  addUsuario() {
    if (this.model.id == 0) {
      this.store.dispatch(
        fromUsuariosAction.CreateUsuario({ payload: this.model })
      );
    }
    console.log(this.model);
  }
}

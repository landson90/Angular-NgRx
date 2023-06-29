import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsuarioModel } from 'src/app/models/usuario-model';
import { AppState } from 'src/app/store/app-state';
import * as fromUsuariosAction from '../../store/usuario.action';
import * as fromUsuariosSelector from '../../store/usuario.reducer';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss'],
})
export class ListarUsuarioComponent implements OnInit {
  usuarios$: Observable<UsuarioModel[]> = this.store.select(
    fromUsuariosSelector.getUsuarios
  );

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fromUsuariosAction.LoadUsuarios());
  }
}

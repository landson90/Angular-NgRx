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
  listaUsuariosTipoDois: UsuarioModel[] = [];
  somaDasIdades: number = 0;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fromUsuariosAction.LoadUsuarios());
    this.getCalculoIdade();
    this.getCaluculadorUsandoSelect();
  }

  getCalculoIdade() {
    this.store.select(fromUsuariosSelector.getUsuarioIdades).subscribe((i) => {
      console.log('ANTES DO FOR', i);
      for (var c = 0; c < i.length; c++) {
        this.somaDasIdades += i[c];
      }
      console.log('DEPOIS DO FOR', this.somaDasIdades);
    });
  }
  getCaluculadorUsandoSelect() {
    this.store
      .select(fromUsuariosSelector.getSomaDasIdades)
      .subscribe((resp) =>
        console.log(resp, 'USANDO O MÉTODO getCaluculadorUsandoSelect')
      );
  }
}

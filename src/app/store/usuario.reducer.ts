import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { UsuarioModel } from '../models/usuario-model';

import * as fromUsuariosAction from './usuario.action';
import { state } from '@angular/animations';

export interface UsuariosState {
  usuarios: UsuarioModel[];
  usuario: UsuarioModel | null;
  error: string | '';
  cal: number;
}

export const initialState: UsuariosState = {
  usuarios: [],
  usuario: null,
  error: '',
  cal: 0,
};

// Aqui vamos implementar os nossos REDUCER
const _usuariosReducer = createReducer(
  initialState,
  on(fromUsuariosAction.LoadUsuariosSuccess, (state, { payload }) => ({
    ...state,
    usuarios: payload,
    error: '',
    cal: somar(payload),
  })),

  on(fromUsuariosAction.LoadUsuariosFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromUsuariosAction.LoadUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuario: payload,
    error: '',
  })),

  on(fromUsuariosAction.LoadUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromUsuariosAction.CreateUsuario, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios, payload],
    error: '',
  })),

  on(fromUsuariosAction.CreateUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromUsuariosAction.UpdateUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].map((row) => {
      if (row.id === payload.id) {
        return payload;
      } else {
        return row;
      }
    }),
    error: '',
  })),

  on(fromUsuariosAction.UpdateUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(fromUsuariosAction.DeleteUsuarioSuccess, (state, { payload }) => ({
    ...state,
    usuarios: [...state.usuarios].filter((filter) => {
      filter.id != payload;
    }),
    error: '',
  })),

  on(fromUsuariosAction.UpdateUsuarioFail, (state, { error }) => ({
    ...state,
    error: error,
  }))
);

// Aqui vamos criar uma função do proprio reducer
export function usuarioReduce(state = initialState, action: Action) {
  return _usuariosReducer(state, action);
}

const getUsuariosFeatureState =
  createFeatureSelector<UsuariosState>('usuarios');

export const getUsuarios = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.usuarios
);

export const getUsuario = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.usuario
);

export const getUsuarioError = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.error
);

export const getUsuarioPerfil = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.usuarios.filter((f) => f.perfil == 'adm')
);

export const getUsuarioPerfilComParametro = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState, props: { perfil: string }) =>
    state.usuarios.filter((f) => f.perfil === props.perfil)
);

export const getUsuarioIdades = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.usuarios.map((i) => i.idade)
);

export const getSomaDasIdades = createSelector(
  getUsuariosFeatureState,
  (state: UsuariosState) => state.cal
);

function somar(item: UsuarioModel[]): number {
  const i = item.map((c) => c.idade);
  let somaDasIdades = 0;
  for (var c = 0; c < i.length; c++) {
    somaDasIdades += i[c];
  }
  return somaDasIdades;
}

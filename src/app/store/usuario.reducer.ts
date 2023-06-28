import { Action, createReducer, on } from '@ngrx/store';
import { UsuarioModel } from '../models/usuario-model';

import * as fromUsuariosAction from './usuario.action';

export interface UsuariosState {
  usuarios: UsuarioModel[];
  usuario: UsuarioModel | null;
  error: string | '';
}

export const initialState: UsuariosState = {
  usuarios: [],
  usuario: null,
  error: '',
};

// Aqui vamos implementar os nossos REDUCER
const _usuariosReducer = createReducer(
  initialState,
  on(fromUsuariosAction.LoadUsuariosSuccess, (state, { payload }) => ({
    ...state,
    usuarios: payload,
    error: '',
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

import { createAction, props } from '@ngrx/store';
import { UsuarioModel } from '../models/usuario-model';

export const enum usuariosTypeAction {
  LOAD_USUARIOS = '[LOAD_USUARIOS] LOAD USUARIOS',
  LOAD_USUARIOS_SUCCESS = '[LOAD_USUARIOS_SUCCESS] LOAD USUARIOS SUCCESS',
  LOAD_USUARIOS_FAIL = '[LOAD_USUARIOS_FAIL] LOAD USUARIOS FAIL',

  LOAD_USUARIO = '[LOAD_USUARIO] LOAD USUARIO',
  LOAD_USUARIO_SUCCESS = '[LOAD_USUARIOSSUCCESS] LOAD USUARIO SUCCESS',
  LOAD_USUARIO_FAIL = '[LOAD_USUARIO_FAIL] LOAD USUARIO FAIL',

  CREATE_USUARIOS = '[CREATE_USUARIOS] CREATE USUARIOS',
  CREATE_USUARIOS_SUCCESS = '[CREATE_USUARIOS_SUCCESS] CREATE USUARIOS SUCCESS',
  CREATE_USUARIOS_FAIL = '[CREATE_USUARIOS_FAIL] CREATE USUARIOS FAIL',

  UPDATE_USUARIOS = '[UPDATE_USUARIOS] UPDATE USUARIOS',
  UPDATE_USUARIOS_SUCCESS = '[UPDATE_USUARIOS_SUCCESS] UPDATE USUARIOS SUCCESS',
  UPDATE_USUARIOS_FAIL = '[UPDATE_USUARIOS_FAIL] UPDATE USUARIOS FAIL',

  DELETE_USUARIOS = '[DELETE_USUARIOS] DELETE USUARIOS',
  DELETE_USUARIOS_SUCCESS = '[DELETE_USUARIOS_SUCCESS] DELETE USUARIOS SUCCESS',
  DELETE_USUARIOS_FAIL = '[DELETE_USUARIOS_FAIL] DELETE USUARIOS FAIL',
}

// LISTAR Usuario
export const LoadUsuarios = createAction(usuariosTypeAction.LOAD_USUARIOS);
export const LoadUsuariosSuccess = createAction(
  usuariosTypeAction.LOAD_USUARIOS_SUCCESS,
  props<{ payload: UsuarioModel[] }>()
);
export const LoadUsuariosFail = createAction(
  usuariosTypeAction.LOAD_USUARIOS_FAIL,
  props<{ error: string }>()
);

// EXBIR UM Usuario

export const LoadUsuario = createAction(
  usuariosTypeAction.LOAD_USUARIO,
  props<{ payload: number }>()
);

export const LoadUsuarioSuccess = createAction(
  usuariosTypeAction.LOAD_USUARIO_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const LoadUsuarioFail = createAction(
  usuariosTypeAction.LOAD_USUARIO_FAIL,
  props<{ error: string }>()
);

// CREATE Usuario
export const CreateUsuario = createAction(
  usuariosTypeAction.CREATE_USUARIOS,
  props<{ payload: UsuarioModel }>()
);

export const CreateUsuarioSuccess = createAction(
  usuariosTypeAction.CREATE_USUARIOS_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const CreateUsuarioFail = createAction(
  usuariosTypeAction.CREATE_USUARIOS_FAIL,
  props<{ error: string }>()
);

// UPDATE Usuario
export const UpdateUsuario = createAction(
  usuariosTypeAction.UPDATE_USUARIOS,
  props<{ payload: UsuarioModel }>()
);

export const UpdateUsuarioSuccess = createAction(
  usuariosTypeAction.UPDATE_USUARIOS_SUCCESS,
  props<{ payload: UsuarioModel }>()
);

export const UpdateUsuarioFail = createAction(
  usuariosTypeAction.UPDATE_USUARIOS_FAIL,
  props<{ error: string }>()
);

// DELETE Usuario
export const DeleteUsuario = createAction(
  usuariosTypeAction.DELETE_USUARIOS,
  props<{ payload: number }>()
);

export const DeleteUsuarioSuccess = createAction(
  usuariosTypeAction.DELETE_USUARIOS_SUCCESS,
  props<{ payload: number }>()
);

export const DeleteUsuarioFail = createAction(
  usuariosTypeAction.DELETE_USUARIOS_FAIL,
  props<{ error: string }>()
);

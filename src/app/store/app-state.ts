import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { UsuariosState, usuarioReduce } from './usuario.reducer';
import { UsuarioEffects } from './usuarios.effects';

export interface AppState {
  usuarios: UsuariosState;
}

export const appReducer: ActionReducerMap<AppState> = {
  usuarios: usuarioReduce,
};

export const appEffect = [UsuarioEffects];

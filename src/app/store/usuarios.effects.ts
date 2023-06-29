import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsuarioService } from '../services/usuario.service';
import * as fromUsuariosAction from './usuario.action';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class UsuarioEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  loadUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.usuariosTypeAction.LOAD_USUARIOS),
      exhaustMap(() =>
        this.usuarioService.getUsuarios().pipe(
          map((payload) => fromUsuariosAction.LoadUsuariosSuccess({ payload })),
          catchError((error) =>
            of(fromUsuariosAction.LoadUsuariosFail({ error }))
          )
        )
      )
    )
  );

  loadUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.usuariosTypeAction.LOAD_USUARIO),
      exhaustMap((record: any) =>
        this.usuarioService.getUsuario(record.payload).pipe(
          map((payload) => fromUsuariosAction.LoadUsuarioSuccess({ payload })),
          catchError((error) =>
            of(fromUsuariosAction.LoadUsuarioFail({ error }))
          )
        )
      )
    )
  );
  createUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.usuariosTypeAction.CREATE_USUARIOS),
      exhaustMap((record: any) =>
        this.usuarioService.addUsuario(record.payload).pipe(
          map((payload) =>
            fromUsuariosAction.CreateUsuarioSuccess({ payload })
          ),
          catchError((error) =>
            of(fromUsuariosAction.CreateUsuarioFail({ error }))
          )
        )
      )
    )
  );

  updateUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.usuariosTypeAction.UPDATE_USUARIOS),
      exhaustMap((record: any) =>
        this.usuarioService.updateUsuario(record.payload).pipe(
          map((payload) =>
            fromUsuariosAction.UpdateUsuarioSuccess({ payload })
          ),
          catchError((error) =>
            of(fromUsuariosAction.UpdateUsuarioFail({ error }))
          )
        )
      )
    )
  );

  deleteUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUsuariosAction.usuariosTypeAction.DELETE_USUARIOS),
      exhaustMap((record: any) =>
        this.usuarioService.deleteUsuario(record.payload).pipe(
          map(() =>
            fromUsuariosAction.DeleteUsuarioSuccess({ payload: record.payload })
          ),
          catchError((error) =>
            of(fromUsuariosAction.DeleteUsuarioFail({ error }))
          )
        )
      )
    )
  );
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';
import { CadastroUsuarioComponent } from './components/components/cadastro-usuario/cadastro-usuario.component';
import { StoreModule } from '@ngrx/store';
import { appEffect, appReducer } from './store/app-state';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListarUsuarioComponent,
    CadastroUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot(appEffect),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

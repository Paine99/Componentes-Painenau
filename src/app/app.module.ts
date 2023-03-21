import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { ContenedorComponent } from './contenedor/contenedor.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AsideComponent,
    MainComponent,
    ContenedorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

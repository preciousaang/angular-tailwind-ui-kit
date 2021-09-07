import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivezComponent } from './directivez/directivez.component';
import { ButtonComponent } from './components/button/button.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogizeDirective } from './directives/dialogize.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivezComponent,
    ButtonComponent,
    DialogComponent,
    DialogizeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

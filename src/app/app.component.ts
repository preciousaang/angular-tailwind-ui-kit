import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dialog: boolean=false;
  title = 'PlayGround';

  onButtonClicked(){
    this.dialog = !this.dialog;
  }
}

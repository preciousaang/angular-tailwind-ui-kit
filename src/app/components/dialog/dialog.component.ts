import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'agz-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input()active: boolean=false;
  @Output() activeChange= new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeactivate(){
    this.active=false;
    this.activeChange.emit(this.active);
  }

  

}

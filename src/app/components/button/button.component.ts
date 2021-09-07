import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'agz-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClicked(){
    this.onClick.emit();
  }

}

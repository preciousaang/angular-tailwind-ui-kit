import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDialogize]'
})
export class DialogizeDirective {
  constructor(private el: ElementRef) {}

  @Output() onClose=new EventEmitter<void>();

  @HostListener('click', ['$event.target']) onClick(event: ElementRef){
    if(event === this.el.nativeElement){
      this.onClose.emit();
    }
    
  }

}

import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'widget-multi-error',
  templateUrl: './multi-error.component.html',
  styles: [
  ]
})
export class MultiErrorComponent {

  @Input()
  message!:Messages

  @Input()
  textcolor?:string

  @Input()
  control!:NgModel

  get errorMessage() {
    let errors = this.control.errors
    if(errors) {
      return Object.keys(errors)
                  .map(key => this.message[key])
                  .pop()
    }
    return ""
  }
}

export type Messages = {[name:string]:string}

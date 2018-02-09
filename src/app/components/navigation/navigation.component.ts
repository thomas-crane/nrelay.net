import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nr-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Output()
  buttonClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitEvent() {
    setTimeout(() => {
      this.buttonClicked.emit();
    }, 150);
  }

}

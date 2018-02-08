import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nr-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output()
  menuClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onMenuClick() {
    this.menuClick.emit();
  }

}

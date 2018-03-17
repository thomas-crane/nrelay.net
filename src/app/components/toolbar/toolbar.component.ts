import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'nr-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output()
  menuClick: EventEmitter<any> = new EventEmitter();

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onMenuClick() {
    this.menuClick.emit();
  }

  logout(): void {
    this.authService.logout();
  }
}

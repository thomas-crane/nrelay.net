import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'nr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sideMode = 'side';
  opened = true;

  @ViewChild(MatDrawer)
  drawer: MatDrawer;

  @HostListener('window:resize', ['$event'])
  windowResize(event: any) {
    if (window.innerWidth < 600) {
      if (this.sideMode !== 'over') {
        this.sideMode = 'over';
      }
      if (this.opened) {
        this.opened = false;
      }
    } else {
      if (this.sideMode !== 'side') {
        this.sideMode = 'side';
      }
      if (!this.opened) {
        this.opened = true;
      }
    }
  }

  ngOnInit() {
    if (window.innerWidth < 600) {
      this.sideMode = 'over';
      this.opened = false;
    }
  }

  openDrawer(): void {
    this.opened = true;
  }

  buttonClicked(): void {
    if (this.sideMode === 'over') {
      this.opened = false;
      this.drawer.close();
    }
  }
}

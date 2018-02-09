import { Component, OnInit, Inject, HostListener, Output, EventEmitter, Input, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'nr-download-dialog',
  templateUrl: './download-dialog.component.html',
  styleUrls: ['./download-dialog.component.scss']
})
export class DownloadDialogComponent {
  constructor(elementRef: ElementRef) {
    setTimeout(() => {
      elementRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }

  @Input()
  text: string;

  @Input()
  link: string;

  @Input()
  maxWidth: number;

  @Output()
  shouldClose: EventEmitter<any> = new EventEmitter();

  @HostListener('window:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    // this.shouldClose.emit();
  }

  @HostListener('mousedown', ['$event'])
  onClientMouseDown(event: MouseEvent) {
    // event.stopPropagation();
    return true;
  }

  close(): void {
    this.shouldClose.emit();
  }
}

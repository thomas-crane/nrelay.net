import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DownloadDialogComponent } from './download-dialog/download-dialog.component';
import { fadeUp, growDown } from '../../../animations';
import { GithubService } from '../../services/github.service';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';

@Component({
  selector: 'nr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeUp, growDown]
})
export class HomeComponent implements OnInit, OnDestroy {

  showDialog = false;
  dialogText: string;
  dialogWidth = 500;
  link = '//github.com/thomas-crane/nrelay/archive/master.zip';
  masterVersion: string;
  devVersion: string;
  isDestroyed: Subject<any> = new Subject();

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.githubService.getPackageJSON(false).pipe(takeUntil(this.isDestroyed)).subscribe((res) => {
      this.masterVersion = res.version;
    });
    this.githubService.getPackageJSON(true).pipe(takeUntil(this.isDestroyed)).subscribe((res) => {
      this.devVersion = res.version;
    });
  }

  ngOnDestroy() {
    this.isDestroyed.next();
    this.isDestroyed.complete();
  }

  openDialog(stable: boolean) {
    if (stable) {
      this.dialogWidth = 500;
      this.dialogText = 'git clone https://github.com/thomas-crane/nrelay.git';
      this.link = '//github.com/thomas-crane/nrelay/archive/master.zip';
    } else {
      this.dialogWidth = 600;
      this.dialogText = 'git clone -b dev git clone https://github.com/thomas-crane/nrelay.git';
      this.link = '//github.com/thomas-crane/nrelay/archive/dev.zip';
    }
    this.showDialog = true;
  }
}


import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService, GITHUB_ROOT } from '../../services/github.service';
import { GithubResponse } from '../../models/github-response';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';

@Component({
  selector: 'nr-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit, OnDestroy {

  folders: GithubResponse[];
  docs: GithubResponse[];
  currentDoc: GithubResponse;
  isDestroyed: Subject<any> = new Subject();

  back: GithubResponse | GithubResponse[];
  pathHistory: string[];

  constructor(private gitService: GithubService, private route: ActivatedRoute, private router: Router) {
    this.pathHistory = [];
  }

  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this.isDestroyed)).subscribe((map) => {
      this.folders = [];
      this.docs = [];
      this.currentDoc = null;
      const path = map.get('path');
      if (this.pathHistory.length === 0 && path) {
        this.pathHistory = path.split('/');
      }
      if (!path) {
        this.router.navigate(['/docs', { path: 'docs' }]);
        return;
      }
      this.gitService.getPath(GITHUB_ROOT + path, { ref: 'dev' }).pipe(takeUntil(this.isDestroyed)).subscribe((response) => {
        if (Array.isArray(response)) {
          response.map((resp) => {
            if (resp.type === 'dir') {
              this.folders.push(resp);
            } else {
              this.docs.push(resp);
            }
          });
        } else {
          if (response.encoding && response.encoding === 'base64') {
            response.content = atob(response.content);
          }
          this.currentDoc = response;
        }
      });
    });
  }

  ngOnDestroy() {
    this.isDestroyed.next();
    this.isDestroyed.complete();
  }

  followPath(item: GithubResponse): void {
    this.pathHistory = item.path.split('/');
    this.router.navigate(['/docs', { path: item.path }]);
  }

  goBack(): void {
    this.pathHistory.pop();
    this.router.navigate(['/docs', { path: this.pathHistory.join('/') }]);
  }
}


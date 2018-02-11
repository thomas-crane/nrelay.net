import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators/take';
import 'rxjs/add/operator/map';
import { GithubResponse } from '../models/github-response';
import { Observable } from 'rxjs/Observable';

const DOC_PATHS_URL = 'assets/paths.json';
export const GITHUB_ROOT = 'https://api.github.com/repos/thomas-crane/nrelay/contents/';

@Injectable()
export class GithubService {

  docPaths: string[];

  constructor(private httpClient: HttpClient) { }

  getPath(path: string, params?: { [id: string]: string }): Observable<GithubResponse | GithubResponse[]> {
    return this.httpClient.get<GithubResponse | GithubResponse[]>(path, { params: params }).pipe(take(1));
  }

  getPackageJSON(dev: boolean): Observable<any> {
    return this.httpClient.get<GithubResponse>(GITHUB_ROOT + 'package.json',
      { params: { ref: dev ? 'dev' : 'master' } }).pipe(take(1)).map((res) => {
        const pkg = JSON.parse(atob(res.content.replace(/\s/g, '')));
        return pkg;
      });
  }

}

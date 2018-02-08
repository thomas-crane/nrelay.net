export interface GithubResponse {
  name: string;
  path: string;
  url: string;
  html_url: string;
  type: 'file' | 'dir';
  content?: string;
  encoding?: string;
}

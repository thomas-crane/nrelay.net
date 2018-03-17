import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { DocsComponent } from './components/docs/docs.component';
import { GithubService } from './services/github.service';
import { DownloadDialogComponent } from './components/home/download-dialog/download-dialog.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MdRendererDirective } from './directives/md-renderer.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DbService } from './services/db.service';
import { environment } from '../environments/environment';
import { MessageLogComponent } from './components/message-log/message-log.component';
import { AboutComponent } from './components/about/about.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AccountComponent } from './components/account/account.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavigationComponent,
    HomeComponent,
    DocsComponent,
    DownloadDialogComponent,
    MdRendererDirective,
    NotFoundComponent,
    MessageLogComponent,
    AboutComponent,
    LoginComponent,
    AccountComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [GithubService, DbService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

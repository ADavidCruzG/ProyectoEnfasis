import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToasterModule } from 'angular2-toaster';
import { RouterModule } from '@angular/router';
import { UsersModule} from './users/users.module';
import { MissingDocsModule} from './missingdocs/missingdocs.module';

import { UsersService} from './users/users.service';
import { MissingDocsService} from './missingdocs/missingdocs.service';
import { AppComponent } from './app.component';
import { varGlobalsService } from './globals';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToasterModule,
    RouterModule,
    UsersModule,
    MissingDocsModule
  ],
  providers: [
    UsersService,
    MissingDocsService,
    varGlobalsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

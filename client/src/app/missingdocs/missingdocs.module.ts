import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {MissingDocsService} from './missingdocs.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import { MissingdocRegisterComponent } from './missingdoc-register/missingdoc-register.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    MissingdocRegisterComponent
  ],
  providers: [
    MissingDocsService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  exports: [MissingdocRegisterComponent]
})

export class MissingDocsModule { }

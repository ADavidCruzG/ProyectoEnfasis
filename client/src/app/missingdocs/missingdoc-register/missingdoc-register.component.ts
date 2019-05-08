import { Component, OnInit } from '@angular/core';
import {ToasterService} from 'angular2-toaster';
import {Router} from '@angular/router';
import {MissingDocsService} from '../missingdocs.service';

@Component({
  selector: 'app-missingdoc-register.container-form',
  templateUrl: './missingdoc-register.component.html',
  styleUrls: ['./missingdoc-register.component.css']
})
export class MissingdocRegisterComponent implements OnInit {

  missingDoc = {docId: ''};

  constructor(private missingDocsService: MissingDocsService, private router: Router, private toasterService: ToasterService) {
  }

  ngOnInit() {
  }

  createMissingDoc() {
    this.missingDocsService.getMissingDocById(this.missingDoc.docId)
      .then((missingDocReturned) => {
        console.log(missingDocReturned);
        if (typeof missingDocReturned === 'undefined' || missingDocReturned === null) {
          this.missingDocsService.createMissingDoc(this.missingDoc)
            .then(() => {
              this.toasterService.pop('success', 'Proceso exitoso', 'El documento se creó exitosamente');
              this.router.navigate(['missingdocs/search']);
            }, (err) => {
              console.log(err);
            });
        } else {
          this.toasterService.pop('warning', 'AVISO', 'Ya existe un documento con ese ID: ' + this.missingDoc.docId);
        }
      }, (err) => {
        console.log(err);
      });
  }

}

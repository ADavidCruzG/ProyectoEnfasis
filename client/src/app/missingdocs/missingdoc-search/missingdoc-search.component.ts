import { Component, OnInit } from '@angular/core';
import {ToasterService} from 'angular2-toaster';
import {Router} from '@angular/router';
import {MissingDocsService} from '../missingdocs.service';

@Component({
  selector: 'app-missingdoc-search',
  templateUrl: './missingdoc-search.component.html',
  styleUrls: ['./missingdoc-search.component.css']
})

export class MissingdocSearchComponent implements OnInit {

  missingDoc = {searchTerm: ''};
  missingDocRes = [];
  showResponseDiv = false;
  constructor(private missingDocsService: MissingDocsService, private router: Router, private toasterService: ToasterService) {
  }

  ngOnInit() {
  }

  searchMissingDoc() {
    
    this.missingDocRes = [];
    this.showResponseDiv = false;

    this.missingDocsService.getMissingDocById(this.missingDoc.searchTerm)
      .then((missingDocReturned) => {
        if (typeof missingDocReturned === 'undefined' || missingDocReturned === null) {
        	this.toasterService.pop('warning', 'No existe', 'No se encontró ningún documento con ' + this.missingDoc.searchTerm);
        }else {
            this.toasterService.pop('success', 'Encontrado', 'Si existe un documento con ese ID: ' + this.missingDoc.searchTerm);
            this.showResponseDiv = true;
            this.missingDocRes.push(missingDocReturned);
        }
      }, (err) => {
        console.log(err);
    });
  }

}



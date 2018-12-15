import {Component, OnInit} from '@angular/core';
import { ToasterConfig} from 'angular2-toaster';
import {varGlobalsService} from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {


	
	constructor(private varGlobalsService: varGlobalsService) {
  	}

  	ngOnInit() {
  		
	}

	

  public toasterConfig: ToasterConfig = new ToasterConfig({
    animation: 'fade',
    limit: 5,
    showCloseButton: true,
    timeout: 4000
  });


}

import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MissingDocsService {

	constructor(private http: Http) {
	}

	getMissingDocById(id) {
		return new Promise((resolve, reject) => {
			this.http.get('http://localhost:3003/api/missingdocs/' + id)
				.map(res => res.json())
				.subscribe(res => {
				resolve(res);
			}, (err) => {
				reject(err);
			});
		});
	}


	createMissingDoc(missingDocToCreate) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3003/api/missingdocs', missingDocToCreate)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
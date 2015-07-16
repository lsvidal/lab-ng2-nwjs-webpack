
import {Component, View} from 'angular2/angular2';

import {NameService} from './service/name';

@Component({
	selector: 'my-app'
})
@View({
	template: '<h1>Hello my {{name}}</h1>'
})
export class MyAppComponent {
	name: string;

	constructor() {
		var nameService = new NameService();
		this.name = nameService.name();
	}
}

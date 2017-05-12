import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PhyreService} from '../../app/services/phyre.service';

@Component({
  selector: 'phyre',
  templateUrl: 'phyre.html',
})
export class PhyrePage {
	items: any;
	constructor(public navCtrl: NavController, private phyreService: PhyreService) {
	}

	ngOnInit() {
		this.getPosts('sports', 1);
	}

	getPosts(category, limit) {
		this.phyreService.getPosts(category, limit).subscribe(response => {this.items = response.data.children})
	}
}

import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { PhyrePage } from '../phyre/phyre';
import { HistoryPage } from '../history/history';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PhyrePage;
  tab2Root = AboutPage;
  tab3Root = HistoryPage;

  constructor() {

  }
}

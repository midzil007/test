import { Component } from '@angular/core';


import { LoginPage } from '../login/login';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = LoginPage;
  tab3Root = LoginPage;

  constructor() {

  }
}

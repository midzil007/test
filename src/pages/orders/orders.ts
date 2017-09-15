import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { OrderDetailPage } from '../order-detail/order-detail';
import { CustomerPage} from '../customer/customer'
/**
 * Generated class for the OrdersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

	private listOrders = [];

  constructor(public navCtrl: NavController, private http: Http, public navParams: NavParams) {
  	 this.http.get('https://www.shop-jura.cz/?getorders=1&email=michal.nosil@gmail.com').map(res => res.json()).subscribe(data => {
    	if(data.orders)
    	{ 
    		this.listOrders = data.orders;
    	}
    });
  }

  backTo(): void
  {
  	this.navCtrl.push(CustomerPage);
  }	

  showOrder(order): void
  { 
  	this.navCtrl.push(OrderDetailPage,{
        order : order});  
 	}
}

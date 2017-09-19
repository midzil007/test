import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
import { ModalWindowPage } from '../../pages/modal-window/modal-window';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { CustomerPage } from '../../pages/customer/customer'; 
import { DataProvider } from '../../providers/data/data';
  

/** 
 * Generated class for the CustomerDataPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */ 
@IonicPage()
@Component({
  selector: 'page-customer-data',
  templateUrl: 'customer-data.html',  
})
export class CustomerDataPage {

   lastData = [];
   getMachinesList = [];  
   fu_jmeno : string; 
   formValidatorUser: FormGroup;

    constructor(public modalCtrl: ModalController, private navCtrl : NavController, public navParams: NavParams, public dataService: DataProvider,  public formBuilder: FormBuilder) {
      this.formValidatorUser = formBuilder.group({
          fu_jmeno: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
      }); 

      if(this.navParams.get('data'))
      {
        this.lastData = this.navParams.get('data');  
      }
      else{
        this.dataService.getData().then((userdata) => {
 
      if(userdata){
        this.lastData = JSON.parse(userdata); 
        console.log(this.lastData);
         this.fu_jmeno ='dsds';
        
      }

    }); 
      }  
  }   

  saveCustomer()
  {   
    if(this.formValidatorUser.valid)
    {
      this.dataService.save(this.lastData);
      let profileModal = this.modalCtrl.create(ModalWindowPage, {});
      profileModal.present();
      this.navCtrl.push(CustomerPage);
    }
    else{
      console.log('fuck'); 
    }
  } 
}

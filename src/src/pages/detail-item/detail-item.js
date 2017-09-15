var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the DetailItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DetailItemPage = (function () {
    function DetailItemPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetailItemPage.prototype.ionViewDidLoad = function () {
        this.item = this.navParams.get('selectedItem');
        console.log(this.item);
    };
    return DetailItemPage;
}());
DetailItemPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-detail-item',
        templateUrl: 'detail-item.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], DetailItemPage);
export { DetailItemPage };
//# sourceMappingURL=detail-item.js.map
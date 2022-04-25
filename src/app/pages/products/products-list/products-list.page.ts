import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';
import { ProductsFormPage } from '../products-form/products-form.page';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
})
export class ProductsListPage implements OnInit {


  products : Product[] = [];

  constructor(private router: Router, private dataService: DataService, 
    private alertCtrl: AlertController, private modalCtrl: ModalController) { 
    this.dataService.getProducts().subscribe(res => {
      this.products = res;
    });
  }

  ngOnInit() {
  }

  // public GoToForm():void{
  //   this.router.navigate(['products', 'form']);
  // }

  public async openProduct(product: Product){
    const modal = await this.modalCtrl.create({
      component: ProductsFormPage,
      componentProps: { id: product.Id },
      breakpoints: [0, 0.5,0.7, 0.8 ],
      initialBreakpoint: 0.7
    });
    modal.present();
  }

  public async addProduct(){
    const alert = await this.alertCtrl.create({
      header: 'Add Product',
      inputs: [
        {
          name: 'code',
          placeholder: 'Code',
          type: 'text',
        },
        {
          name: 'name',
          placeholder: 'Name',
          type: 'textarea',
        },
        {
          name: 'unitPrice',
          placeholder: 'Unit Price',
          type: 'number',
        },
        {
          name: 'codeCategory',
          placeholder: 'Category Code',
          type: 'number',
        },
        {
          name: 'codeUnit',
          placeholder: 'Unit Price',
          type: 'number',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Add',
          handler: (res) => {
            var product: Product = {
              Code: res.code, 
              Name: res.name,
              UnitPrice: res.unitPrice,
              CodeCategory: res.codeCategory,
              CodeUnit: res.codeUnit,
              Id: null,
            };
            console.log(res);
            this.dataService.addProduct(product);
          }
        },
      ]
    });
    await alert.present();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Product } from 'src/app/models/Product';
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
    const modal = await this.modalCtrl.create({
      component: ProductsFormPage,
      componentProps: { id: null },
      breakpoints: [0, 0.5,0.7, 0.8 ],
      initialBreakpoint: 0.7
    });
    modal.present();
  }

}

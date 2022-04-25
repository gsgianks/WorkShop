import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.page.html',
  styleUrls: ['./products-form.page.scss'],
})
export class ProductsFormPage implements OnInit {

  @Input() id: string;
  product: Product = null;

  constructor(private dataService: DataService, private modalCtrl: ModalController,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    this.dataService.getProductById(this.id).subscribe(res=>{
      this.product = res;
    });
  }

  public async updateProduct(){
    this.dataService.updateProduct(this.product);
    const toast = await this.toastCtrl.create({
      message: 'Product Updated',
      duration: 1000
    });
    toast.present();
  }

  public async deleteProduct(){
    await this.dataService.deleteProduct(this.product);
    this.modalCtrl.dismiss();
  }

}

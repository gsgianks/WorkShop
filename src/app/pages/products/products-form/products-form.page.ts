import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { Product } from 'src/app/models/Product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.page.html',
  styleUrls: ['./products-form.page.scss'],
})
export class ProductsFormPage implements OnInit {

  @Input() id: string;
  product: Product = new Product();

  constructor(private dataService: DataService, private modalCtrl: ModalController,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    if(this.id != null){
      this.dataService.getById<Product>('products', this.id).subscribe(res=>{
        this.product = res;
      });
    }
  }

  public async updateProduct(){
    var msj = '';
    if(this.id == null){
      this.dataService.addProduct(this.product);
      msj = 'Product Saved';
      this.modalCtrl.dismiss();
    }else{
      this.dataService.updateProduct(this.product);
      msj = 'Product Updated';
    }
    const toast = await this.toastCtrl.create({
      message: msj,
      duration: 1000
    });
    
    toast.present();
  }

  public async deleteProduct(){
    await this.dataService.delete('products', this.product.Id);
    this.modalCtrl.dismiss();
  }

}

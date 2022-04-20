import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DescriptionPage } from './description/description.page';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.showRequirements();
  }

  loadImageFromDevice(event) {

    const file = event.target.files[0];
  
    const reader = new FileReader();
  
    reader.readAsArrayBuffer(file);
  
    reader.onload = () => {
  
      // get the blob of the image:
      let blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);
  
      // create blobURL, such that we could use it in an image element:
      let blobURL: string = URL.createObjectURL(blob);
  
    };
  
    reader.onerror = (error) => {
  
      //handle errors
  
    };
  };

  public async showRequirements() {
    const modal = await this.modalCtrl.create({
      component: DescriptionPage,
      componentProps: { id: null },
      breakpoints: [0, 0.5,0.7, 0.8 ],
      initialBreakpoint: 0.7
    });
    modal.present();
  }
}

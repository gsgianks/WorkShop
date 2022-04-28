import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    speed: 1000
   };

  images: { img: string, title: string, desc:string}[] = 
  [
    {
      img:'assets/images/lote.jpg',
      title: 'Lote',
      desc: 'Lote de 300m2'
    },
    {
      img:'assets/images/1raetapa.jpg',
      title: 'Primera etapa',
      desc: 'Obra gris terminada'
    },
    {
      img:'assets/images/modelo.jpg',
      title: 'Terminada',
      desc: 'Casa totalmente finalizada'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}

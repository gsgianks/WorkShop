import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    speed: 1000
   };

  slides: { img: string, title: string, desc:string}[] = 
  [
    {
      img:'assets/images/casabono.jpeg',
      title: 'Proyecto 1',
      desc: 'Breve descripcion del proyecto 1'
    },
    {
      img:'assets/images/bono2.jpg',
      title: 'Proyecto 2',
      desc: 'Breve descripcion del proyecto 2'
    },
    {
      img:'assets/images/bono3.jpg',
      title: 'Proyecto 3',
      desc: 'Breve descripcion del proyecto 3'
    },
  ]


  models: { img: string, title: string, desc:string}[] = 
  [
    {
      img:'assets/images/modelo.jpg',
      title: 'Modelo 1',
      desc: 'Casa de 2 cuartos'
    },
    {
      img:'assets/images/modelo2.jpg',
      title: 'Modelo 2',
      desc: 'Casa con terraza'
    },
    {
      img:'assets/images/modelo3.jpg',
      title: 'Modelo 3',
      desc: 'Casa con 3 habitaciones y dos baños'
    },
  ]

  constructor(private router: Router) {}

  goToRequirements(): void{
    this.router.navigate(['/requirements', 'form']);
  }

  goToProjectDetails(): void{
    this.router.navigate(['/details-project', 'details']);
  }

}

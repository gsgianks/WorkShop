import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slides: { img: string, title: string, desc:string}[] = 
  [
    {
      img:'assets/images/casabono.jpeg',
      title: 'Proyectos Realizados',
      desc: 'Descripcion de la casa'
    },
    {
      img:'assets/images/bono2.jpg',
      title: 'Proyectos Realizados',
      desc: 'Descripcion de la casa'
    },
    {
      img:'assets/images/bono3.jpg',
      title: 'Proyectos Realizados',
      desc: 'Descripcion de la casa'
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

}

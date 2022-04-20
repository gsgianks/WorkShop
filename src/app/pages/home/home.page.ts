import { Component } from '@angular/core';

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
      img:'assets/images/casabono.jpeg',
      title: 'Proyectos Realizados',
      desc: 'Descripcion de la casa'
    },
    {
      img:'assets/images/casabono.jpeg',
      title: 'Proyectos Realizados',
      desc: 'Descripcion de la casa'
    },
    {
      img:'assets/images/casabono.jpeg',
      title: 'Proyectos Realizados',
      desc: 'Descripcion de la casa'
    },
    {
      img:'assets/images/casabono.jpeg',
      title: 'Proyectos Realizados',
      desc: 'Descripcion de la casa'
    }
  ]
  constructor() {}

}

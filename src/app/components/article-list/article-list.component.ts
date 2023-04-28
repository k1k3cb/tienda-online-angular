import { Component } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent {

  

  products: {
    cod: string;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
  }[] = [
    {
      cod: 'TOB22O0D8-A11',
      title: 'Camiseta ',
      description: 'ESSENTIAL FLAG TEE - Camiseta estampada',
      image: 'src/assets/img/ESSENTIAL_FLAG_TEE.webp',
      price: 29.95,
      category: 'ropa',
    },
    {
      cod: '10K42E02M-Q11',
      title: 'Pantalón deportivo ',
      description: 'Kappa Pantalones deportivos',
      image: '/src/assets/img/Kappa.webp',
      price: 20.95,
      category: 'ropa',
    },

    {
      cod: 'NE215O04G-A23',
      title: 'MR530 UNISEX - Zapatillas ',
      description: 'New Balance MR530 UNISEX - Zapatillas',
      image: '../assets/img/New_Balance.jpg',
      price: 94.95,
      category: 'calzado',
    },
  ];



  
}

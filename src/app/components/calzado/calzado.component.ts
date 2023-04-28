import { Component,OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-calzado',
  templateUrl: './calzado.component.html',
  styleUrls: ['./calzado.component.css']
})
export class CalzadoComponent {


  calzadoProducts!: { 
    cod: string; 
    title: string; 
    description: string; 
    image: string; 
    price: number; 
    category: string; 
  }[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.calzadoProducts = this.productsService.getProductsByCategory('calzado');
  }

}

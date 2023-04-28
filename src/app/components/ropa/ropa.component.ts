import { Component,OnInit  } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})
export class RopaComponent implements OnInit {

  ropaProducts!: { 
    cod: string; 
    title: string; 
    description: string; 
    image: string; 
    price: number; 
    category: string; 
  }[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.ropaProducts = this.productsService.getProductsByCategory('ropa');
  }


}

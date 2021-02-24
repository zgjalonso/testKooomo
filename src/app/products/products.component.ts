import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {ConfigService} from '../config/config.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products = [];
  public parsedSellPrice: string;
  constructor(private productService: ConfigService) { }

  faChevronDown = faChevronDown;

  ngOnInit(): void {
   this.productService.getProducts()
     .subscribe(data => this.products = data);
   this.parseNum();
   console.log(parseFloat('119').toFixed(2));
  }

  // tslint:disable-next-line:typedef
  parseNum() {
    for (let i = 0; i < this.products.length; i++) {
      this.parsedSellPrice = parseFloat(this.products[i].price.sell.toString()).toFixed(2);
    }
    return this.parsedSellPrice;
  }
}

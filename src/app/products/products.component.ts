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
  public parsedSellPrices = [];
  public parsedDiscountPrices = [];
  public discountPercentages = [];
  constructor(private productService: ConfigService) { }

  faChevronDown = faChevronDown;

  ngOnInit(): void {
   this.productService.getProducts()
     .subscribe(data => this.products = data);
   this.productService.getProducts()
      .subscribe(data => this.parseSellPrices());
   this.productService.getProducts()
      .subscribe(data => this.parseDiscountPrices());
   this.productService.getProducts()
      .subscribe(data => this.percentageCalc());
  }

  // tslint:disable-next-line:typedef
  parseSellPrices(){
  // tslint:disable-next-line:typedef
    let parsedSellPrice;
    let parsedSellPriceArr;
      // tslint:disable-next-line:typedef
      for (let i = 0; i < this.products.length; i++) {
      parsedSellPrice = this.products[i].price.sell.toString();
      parsedSellPriceArr = parseFloat(parsedSellPrice).toFixed(2);
      this.parsedSellPrices.push(parsedSellPriceArr);
      this.products[i].price.sell = this.parsedSellPrices[i];
    }
  }

  // tslint:disable-next-line:typedef
  parseDiscountPrices(){
    // tslint:disable-next-line:typedef
    let parsedDiscountPrice;
    let parsedDiscountPriceArr;
    // tslint:disable-next-line:typedef
    for (let i = 0; i < this.products.length; i++) {
      parsedDiscountPrice = this.products[i].price.to_discount.toString();
      parsedDiscountPriceArr = parseFloat(parsedDiscountPrice).toFixed(2);
      this.parsedDiscountPrices.push(parsedDiscountPriceArr);
      this.products[i].price.to_discount = this.parsedDiscountPrices[i];
    }
  }

  // tslint:disable-next-line:typedef
  percentageCalc(){
    let discountPrice;
    let discountPercArr;
    // tslint:disable-next-line:typedef
    for (let i = 0; i < this.products.length; i++) {
      discountPrice = this.products[i].promotions.discount * 100;
      discountPercArr = Math.round(discountPrice / this.products[i].price.to_discount);
      this.discountPercentages.push(discountPercArr);
      this.products[i].promotions.discountPercentage = this.discountPercentages[i];
    }
  }
}

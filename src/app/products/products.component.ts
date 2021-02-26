import { Component, OnInit, Input, OnChanges } from '@angular/core';
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
  public searchValue: string;
  public searchResults = [];
  @Input('search') search: string;
  constructor(private productService: ConfigService) { }

  faChevronDown = faChevronDown;

  ngOnInit(): void {
   this.productService.getProducts()
     .subscribe(data => this.products = data);
   this.productService.getProducts()
      .subscribe(() => this.parseProducts());
  }

  // tslint:disable-next-line:typedef
  ngOnChanges() {
    this.productService.getSearch(this.search)
      .subscribe(data => this.searchResults = data);
    this.productService.getSearch(this.search)
      .subscribe(() => this.parseResults());
  }
  // tslint:disable-next-line:typedef
  parseProducts() {
    this.parseSellPrices();
    this.parseDiscountPrices();
    this.percentageCalc();
  }

  parseResults() {
    this.parsedSellPrices = [];
    this.parsedDiscountPrices = [];
    this.discountPercentages = [];
    this.parseSearchSellPrices();
    this.parseSearchDiscountPrices();
    this.percentageSearchCalc();
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

  // tslint:disable-next-line:typedef
  parseSearchSellPrices(){
    // tslint:disable-next-line:typedef
    let parsedSellPrice;
    let parsedSellPriceArr;
    // tslint:disable-next-line:typedef
    for (let i = 0; i < this.searchResults.length; i++) {
      parsedSellPrice = this.searchResults[i].price.sell.toString();
      parsedSellPriceArr = parseFloat(parsedSellPrice).toFixed(2);
      this.parsedSellPrices.push(parsedSellPriceArr);
      this.searchResults[i].price.sell = this.parsedSellPrices[i];
    }
  }

  // tslint:disable-next-line:typedef
  parseSearchDiscountPrices(){
    // tslint:disable-next-line:typedef
    let parsedDiscountPrice;
    let parsedDiscountPriceArr;
    // tslint:disable-next-line:typedef
    for (let i = 0; i < this.searchResults.length; i++) {
      parsedDiscountPrice = this.searchResults[i].price.to_discount.toString();
      parsedDiscountPriceArr = parseFloat(parsedDiscountPrice).toFixed(2);
      this.parsedDiscountPrices.push(parsedDiscountPriceArr);
      this.searchResults[i].price.to_discount = this.parsedDiscountPrices[i];
    }
  }

  // tslint:disable-next-line:typedef
  percentageSearchCalc(){
    let discountPrice;
    let discountPercArr;
    // tslint:disable-next-line:typedef
    for (let i = 0; i < this.searchResults.length; i++) {
      discountPrice = this.searchResults[i].promotions.discount * 100;
      discountPercArr = Math.round(discountPrice / this.searchResults[i].price.to_discount);
      this.discountPercentages.push(discountPercArr);
      this.searchResults[i].promotions.discountPercentage = this.discountPercentages[i];
    }
  }
}

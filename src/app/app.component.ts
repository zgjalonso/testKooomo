import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testKooomo';
  search: any;
  // tslint:disable-next-line:typedef
  searchValue(e) {
    this.search = e;
  }
}





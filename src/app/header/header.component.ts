import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import {ConfigService} from '../config/config.service';
import { Results } from '../products';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() searchVal = new EventEmitter();
  @ViewChild('search') searchInput;
  show = false;
  public searchValue: string;
  public searchResults = [];
  constructor() { }

  faSortDown = faSortDown;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  showInput() {
    // tslint:disable-next-line:no-unused-expression no-conditional-assignment
    if (this.show === false) {
      document.getElementById('search').style.display = 'block';
    } else {
      document.getElementById('search').style.display = 'none';
    }
    this.show = !this.show;
  }

  // tslint:disable-next-line:typedef
  onEnterSearch(searchTerm: string) {
    this.searchValue = searchTerm;
    this.searchVal.emit(this.searchValue);
  }
}

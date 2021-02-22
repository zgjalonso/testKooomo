import { Component, OnInit } from '@angular/core';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  faSortDown = faSortDown;

  ngOnInit(): void {
  }

}

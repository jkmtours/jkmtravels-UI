import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'busSearch',
  templateUrl: 'busSearch.component.html',
  styleUrls: ['../../css/aboutus.css', '../../css/font-awesome.css']
})

export class BusSearchComponent implements OnInit {

  /**
   *
   * @param router
   */
  constructor(private router : Router) {

  }


  /**
   *
   * Initial method for home
   */
  ngOnInit() {

  }
}

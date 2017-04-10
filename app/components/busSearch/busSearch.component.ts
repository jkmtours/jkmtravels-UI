import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {QuoteResponse} from "../model/quote.response";
import {StorageService} from "../common/storage.service";
import {QuoteRequest} from "../model/quote.request";

@Component({
  moduleId: module.id,
  selector: 'busSearch',
  templateUrl: 'busSearch.component.html',
  styleUrls: ['../../css/bussearch.css', '../../css/font-awesome.css']
})

export class BusSearchComponent implements OnInit {

  quoteResponse: QuoteResponse[];
  quoteRequest:QuoteRequest;

  /**
   *
   * @param router
   */
  constructor(private router : Router, private _cdStorageService:StorageService) {

  }


  /**
   *
   * Initial method for home
   */
  ngOnInit() {
    this.quoteRequest = JSON.parse(this._cdStorageService.getSessionStorageData('quoteRequest'));
    this.quoteResponse = JSON.parse(this._cdStorageService.getSessionStorageData('quote'));
  }

  getBooking() {
    //call logout service.
    console.log("getBooking");
    this.router.navigate(['/bookingConfirmation']);

  }

}

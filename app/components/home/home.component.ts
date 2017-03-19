import {Component, OnInit} from "@angular/core";
import {HomeService} from "./home.service";
import {Router} from "@angular/router";
import {DataSharedService} from "../common/datashared.service";
import {StorageService} from "../common/storage.service";
import {QuoteRequest} from "../model/quote.request";

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    errorMessage: string;
    quoteRequest:QuoteRequest;

    /**
     *
      * @param homeService
     * @param router
     */
    constructor(private homeService: HomeService, private router : Router, private dataSharedService : DataSharedService,
                private _cdStorageService:StorageService) {
      this._cdStorageService.removeSessionStorage('authenticated');
    }


    /**
     *
     * Initial method for home
     */
    ngOnInit() {

    }

    getQuote() {
        //call logout service.
        this.homeService.getQuote(this.quoteRequest).then(
            responseData => {
                console.log('logout success');
                this.router.navigate(['/busSearch']);
            },
            error => {
                console.log('logout failure');
                this.router.navigate(['/busSearch']);
            }
        );
        /*setTimeout(() => {
            this.router.navigate(['/home']);
        }, 10);*/
    }

}

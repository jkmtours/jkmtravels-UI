import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {DataSharedService} from "../common/datashared.service";
import {StorageService} from "../common/storage.service";

@Component({
    moduleId: module.id,
    selector: 'services',
    templateUrl: 'services.component.html',
    styleUrls: ['../../css/services.css', '../../css/font-awesome.css']
})

export class ServicesComponent implements OnInit {

    /**
     *
     * @param router
     * @param dataSharedService
     * @param _cdStorageService
     */
    constructor(private router : Router, private dataSharedService : DataSharedService,
                private _cdStorageService:StorageService) {
      this._cdStorageService.removeSessionStorage('authenticated');
    }


    /**
     *
     * Initial method for home
     */
    ngOnInit() {

    }
}

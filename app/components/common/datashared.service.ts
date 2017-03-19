import {Injectable} from "@angular/core";
import {StorageService} from "./storage.service";


@Injectable()
export class DataSharedService {

    constructor(private _cdStorageService:StorageService) {

    }

    title = { value: '' };

    isAuthenticated(){
        return this._cdStorageService.getSessionStorageData('authenticated');
    }
}

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

declare var URL_CONFIG:any;

@Injectable()
export class ConfigService {
    url_config: any;

    constructor(private http: Http) {
        this.url_config = URL_CONFIG;
        if (!this.url_config) throw new Error("URLCONFIG does not exist");

    }
    getAppVersion() {
        return this.url_config.app_version;
    }

};


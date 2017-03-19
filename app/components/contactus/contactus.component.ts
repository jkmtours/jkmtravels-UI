import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'contactus',
    templateUrl: 'contactus.component.html',
    styleUrls: ['../../css/contactus.css']
})

export class ContactUsComponent implements OnInit {

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

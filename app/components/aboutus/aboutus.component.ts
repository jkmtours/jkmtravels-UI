import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'aboutus',
    templateUrl: 'aboutus.component.html',
    styleUrls: ['../../css/aboutus.css', '../../css/font-awesome.css']
})

export class AboutUsComponent implements OnInit {

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

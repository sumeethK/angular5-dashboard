import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {LoginService} from "../service/login.service";
import {AlertService} from "../service/alert.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    model: any = {};
    loading = false;
    returnUrl: string;

    message: string;




    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: LoginService,
        private alertService: AlertService) {

        // this.alertService.getMessage().subscribe((alert) => {
        //     this.message =alert.text;
        // });
    }


    onLoggedin() {
        this.login();

    }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error.error.message);
                    this.message = error.error.message;
                    this.loading = false;
                });
    }
}

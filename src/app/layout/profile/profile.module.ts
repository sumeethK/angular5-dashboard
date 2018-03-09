import {NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";
import {LoginService} from "../../service/login.service";
import {ProfileRoutingModule} from "./profile.routing.module";
import {AdminGuard} from "./adminguard";

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule
    ],
    declarations: [],
    providers: [AdminGuard],
    exports: []
})
export class ProfileModule implements OnInit {

    public constructor(private router: Router, private auth: LoginService) {
        console.log("con called");
    }

    ngOnInit(): void {
        console.log("init called");
        if (this.auth.getUserInfo() != null && this.auth.getUserInfo().role == "ADMIN") {
            // this.router.navigate(['admin'],{relativeTo: this.router})
        }
    }
}

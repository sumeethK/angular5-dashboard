import {Injectable} from "@angular/core";
import {ActivatedRoute, CanActivate, Router} from "@angular/router";
import {LoginService} from "../../service/login.service";

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private route: ActivatedRoute, private router: Router, private auth: LoginService) {
    }

    canActivate() {
        if (this.auth.getUserInfo().role.indexOf("ADMIN") != -1) {
            return true;
        }

        this.router.navigate(['profile/user'], {relativeTo: this.route});
        return false;
    }
}

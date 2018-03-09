import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Rx";

@Injectable()
export class LoginService {

    private userInfo: UserInfo;

    constructor(private http: HttpClient) {
        var tmpU = localStorage.getItem('currentUser');
        if (null != tmpU && undefined != tmpU)
            this.userInfo = JSON.parse(tmpU);
    }

    login(username: string, password: string) {
        return this.http.post<any>(environment.login_url, {username: username, password: password})
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    user.token = "Token " + user.token;
                    this.userInfo = <UserInfo> user;
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('isLoggedin', 'true');
                    return this.userInfo;
                } else {
                    throw Observable.throw(user);
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    public getUserInfo(): UserInfo {
        return this.userInfo;
    }

}

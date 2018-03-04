class UserInfo {
    private _username: string;

    private _token: string;

    private _role: any

    constructor(username: string, authority: any, token: string, role: any) {
        this._username = username;
        this._token = token;
        this._role = role;
    }

    public get username(): string {
        return this._username;
    }

    public get token(): string {
        return this._token;
    }


    get role(): any {
        return this._role;
    }
}

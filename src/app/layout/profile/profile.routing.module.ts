import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminGuard} from "./adminguard";

const routes: Routes = [

    {path: '', redirectTo: 'admin'},
    {path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AdminGuard]},
    {path: 'user', loadChildren: './user/user.module#UsersModule'}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id:name', component: UserComponent }]
  },
  {
    path: 'servers',
    /* canActivate: [AuthGuard], */
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: {serverData: ServerResolver} },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ]
  },
  /* { path: 'not-found', component: PageNotFoundComponent }, */
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({

  /*
  The server has to be configured in a way that it serves the index.html instead of a 404 page in each case an unknown url
  is requested, so that Angular's router can handle the correct routing.

  We are using fake urls here, unlike in a traditional website, where the urls usually reflect the real places of the subpages.
  In a SPA, when changing the url, we are not really moving to a different place but we only shift some content of the current
  view. Manipulating the urls in this way is only possible in modern browsers which support the History API. In older browsers
  you can mimic a similar behavior by using hashes for internal navigation on a page.

  imports: [RouterModule.forRoot(appRoutes, {useHash: true})]

  */
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

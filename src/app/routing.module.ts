import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InitComponent } from './init/init.component';
import { ViewdbComponent } from './viewdb/viewdb.component';
import { AddentriesComponent } from './addentries/addentries.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'init',
        pathMatch: 'full'
    },
    { path: 'init', component: InitComponent },
    { path: 'viewdb', component: ViewdbComponent },
    { path: 'addentries', component: AddentriesComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

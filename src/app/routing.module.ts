import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InitComponent } from './init/init.component';
import { BuilderComponent } from './builder/builder.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'init',
        pathMatch: 'full'
    },
    { path: 'init', component: InitComponent },
    { path: 'builder#', redirectTo: 'builder' },
    { path: 'builder', component: BuilderComponent },

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

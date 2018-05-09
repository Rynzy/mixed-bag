import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';


@NgModule({
    declarations: [AuthComponent],
    imports: [AuthModule],
    exports: [AuthComponent]
})
export class AuthModule { }

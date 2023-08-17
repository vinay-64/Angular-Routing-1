import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

const routes=[
    { path: 'auth', component: AuthComponent }
]

@NgModule({
    declarations:[
        AuthComponent,
    ],
    imports:[
        FormsModule, CommonModule, RouterModule.forChild(routes), SharedModule
    ]
})
export class AuthModule{}
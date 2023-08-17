import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ShoppingRoutingModule } from "./shopping-routing.module";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent,  
    ],
    imports:[
        FormsModule,SharedModule, ShoppingRoutingModule
    ]
})
export class ShoppingModule{

}
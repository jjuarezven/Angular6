import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { RecipeService } from "./recipes/recipe.service";
import { DataStorageService } from "./shared/data-storage-service";
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth-guard.service";
import { SharedModule } from "./shared/shared-module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { AuthModule } from "./auth/auth.module";
import { CoreModule } from "./core/core-module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    // BrowserModule contiene CommonModule functionalities y otras mas por lo cual solo es necesario en el AppModule, los demas modulos solo necesitan CommonModule
    BrowserModule,
    HttpModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  // la idea es mantener AppModule lo más limpio posible, por eso los providers ahora se referencia en el CoreModule
  bootstrap: [AppComponent]
})
export class AppModule {}

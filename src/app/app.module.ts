import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SvgIconComponent } from "./svg-icon.component";
import { SvgSpriteComponent } from "./svg-sprite/svg-sprite.component";

@NgModule({
  declarations: [AppComponent, SvgIconComponent, SvgSpriteComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, HostBinding } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "svg-sprite-test";
  @HostBinding("attr.theme-variant") theme_variant = "light";
}

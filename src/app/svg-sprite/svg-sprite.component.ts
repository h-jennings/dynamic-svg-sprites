import { Component, OnInit, HostBinding } from "@angular/core";

@Component({
  selector: "[app-svg-sprite]",
  styles: [":host { display: none;}"],
  templateUrl: "./svg-sprite.component.html",
})
export class SvgSpriteComponent implements OnInit {
  constructor() {}
  @HostBinding("attr.aria-hidden") hidden = true;
  ngOnInit(): void {}
}

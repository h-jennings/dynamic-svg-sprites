import {
  Component,
  Input,
  ViewEncapsulation,
  HostBinding,
} from "@angular/core";

@Component({
  selector: "div[svg-icon]",
  styleUrls: ["./svg-icon.component.scss"],
  encapsulation: ViewEncapsulation.None,
  template: `
    <svg class="icon" preserveAspectRatio="xMaxYMin meet">
      <use attr.xlink:href="#{{ icon }}" [attr.id]="variant_id"></use>
    </svg>
  `,
})
export class SvgIconComponent {
  @Input() icon: string;
  @Input() variant_id: string;
  @HostBinding("class.icon__container") class = true;
}

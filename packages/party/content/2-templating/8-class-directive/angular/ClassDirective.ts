import { Component, Input } from "@angular/core";

const defaultProps = {};

@Component({
  selector: "class-directive, ClassDirective",
  template: `
    <input
      [class]="\`form-input \${disabled ? 'disabled' : ''} \${focus ? 'focus' : ''}\`"
    />
  `,
})
export default class ClassDirective {
  @Input() disabled: any;

  focus = true;
}

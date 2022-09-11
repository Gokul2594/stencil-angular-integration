import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: 'my-spinner',
  styleUrl: 'my-spinner.css',
  shadow: true,
})
export class MyComponent {
  @Prop() displaySpinner: boolean;

  render() {
      if(this.displaySpinner === true) {
        return (
          <div class="spinner"></div>
        );
      } else {
        return (<slot name="loaded-data"/>);
      }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
    
  `],
  template: `
    <div class="jumbotron text-center">
      <h1>Gerry's HTTP Practice</h1>
      <p>{{ message }}</p>
    </div>
  `
})
export class AppComponent {
  message = 'This is the sample message.';
}

import { Component } from '@angular/core';
@Component({
  selector: 'my-hero',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero }}
      </li>
    </ul>
    <button type="button" (click)="del()">del</button>
  `
})
export class AppComponentHero {
  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];
  del(){
    this.heroes.pop();
  }
}

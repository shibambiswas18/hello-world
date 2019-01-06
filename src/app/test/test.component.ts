import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  template: `<div>
                User Name is {{name}}.
                <h2>{{greetUser()}}</h2>
                <h5> {{siteUrl}} </h5>

                <input [id]="myId" type="text" value="Biswas">
                <input [disabled]="isDisabled" id={{myId}} type="text" value="Biswas">
            </div>`,
  styles: [`
      div{
        color: red;
      }
  `]
})
export class TestComponent implements OnInit {

  public name = "Shibam Biswas";
  public siteUrl = window.location.href;

  public myId = "testId";
  public isDisabled= true;
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }
}

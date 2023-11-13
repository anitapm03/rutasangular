import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menucollatz',
  templateUrl: './menucollatz.component.html',
  styleUrls: ['./menucollatz.component.css']
})
export class MenucollatzComponent implements OnInit{
  public numeros: Array<number>;

  constructor() {
    this.numeros = []
  }

  ngOnInit(): void {
    for (var i=0; i<10; i++){
      this.numeros[i]=Math.floor(Math.random() * 100);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit{

  public num!: number;
  public resultados!: Array<number>;

  constructor(private _activeRoute: ActivatedRoute,
    private _router: Router){
      
  }

  calcular(): void{
    this.resultados = new Array<number>();
    let n = this.num;
    while (n != 1){
      if ( n % 2 == 0){
        n = n/2;
      } else {
        n = n*3 +1;
      }
      this.resultados.push(n);
    }
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.num = parseInt(parametros['num']);
      this.calcular();
    })
  }

}

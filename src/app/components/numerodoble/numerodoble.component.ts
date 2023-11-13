import { Component, OnInit } from '@angular/core';

//clases que necesitamos para recuperar los parámetros de la ruta:
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css']
})

export class NumerodobleComponent implements OnInit {
  public num!: number;
  public doble!: number;

  //este es el obj que viene inyectado deste module
  constructor(private _activeRoute: ActivatedRoute,
    private _router: Router) {}

  ngOnInit(): void {
    //en este metodo es donde debemos subscribirnos a la
    //recepción de los parámetros de routing 
    //se usa el obj activated route
    this._activeRoute.params.subscribe((parametros: Params) =>{

      //dentro de params se recuperan los nombres de parametros con la 
      //siguiente sintaxis: parametros['parameter name']
      //nuestro parametro numero es opcional por lo que vamos a hacer
      //un if para saber si lo recibo o no
      if (parametros["num"] != null){
        //los parametros siempre son string
        this.num = parseInt(parametros['num']);
        this.doble = this.num *2 ;

      }
    })
  }
  
  redirect(number: number): void {
    this._router.navigate(["/numerodoble", number]);
  }

  goToHome(): void{
    this._router.navigate(["/"]);
  }
}

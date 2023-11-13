import { HomeComponent } from "./components/home/home.component";
import { CineComponent } from "./components/cine/cine.component";
import { MusicaComponent } from "./components/musica/musica.component";
import { Error404Component } from "./components/error404/error404.component";
import { NumerodobleComponent } from "./components/numerodoble/numerodoble.component";
import { MenucollatzComponent } from "./components/menucollatz/menucollatz.component";
import { CollatzComponent } from "./components/collatz/collatz.component";

//necesitamos los siguientes modulos para la declaración de navegación
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//definimos un array con nuestras rutas para los components
const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "musica", component: MusicaComponent },
    { path: "cine", component: CineComponent },
    { path: "numerodoble", component: NumerodobleComponent },
    { path: "numerodoble/:num", component: NumerodobleComponent },
    { path: "menucollatz", component: MenucollatzComponent },
    { path: "collatz/:num", component: CollatzComponent },
    { path: "**", component: Error404Component }
]

//desde routing debemos exportar dos caracteristicas 
//para implementarlas dentro del module:

//1- el proveedor de rutas
export const appRoutingProvider: any[]=[];
//2- el módulo routing indicando el array de rutas
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);
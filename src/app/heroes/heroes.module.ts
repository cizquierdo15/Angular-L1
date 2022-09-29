import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ], //componentes que tiene el modulo
    exports: [
        ListadoComponent
    ], //cosas que seran visibles (publicas fuera del modulo)
    imports: [
        CommonModule
    ] // modulos 
})
export class HeroesModule{

}
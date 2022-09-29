import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ["Hulk", "Batman", "Lobezno","Tormenta","Magneto"];

  borrado: string = "..." ;

  seHaborrado = false;

  borrarHeroe(): void{
    if(this.heroes.length != 0){
      this.borrado = this.heroes.pop() || ""; // si va a retornar undefined, en vez de retorna vacio
    }
    else{
      this.borrado = "vacio";
    }

    if(this.borrado != "..."){
      this.seHaborrado = true;
    }
    console.log(`borrando... ${this.borrado}`);
    console.log(typeof(this.borrado));
  }

}

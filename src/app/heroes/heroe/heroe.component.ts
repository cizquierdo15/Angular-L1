import{Component}from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = "Iron-Man";
    edad: number = 32;

    obtenerNombre():string{
        return ` 
            ${this.nombre}  -  ${this.edad}
        `;
    }

    cambiarNombre(): void{
        if(this.nombre == "Iron-Man"){
            this.nombre = "Spiderman";
        }else if(this.nombre == "Spiderman"){
            this.nombre = "Iron-Man";
        }
    }

    cambiarEdad(): void{
        if(this.nombre == "Iron-Man"){
            this.edad = 32;
        }else if(this.nombre == "Spiderman"){
            this.edad = 25;
        }
    }

    get nommbreEnMayusculas(): string{
        return this,this.nombre.toUpperCase();
    }
}
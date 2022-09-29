import{Component}from'@angular/core';

@Component({
    selector: "app-contador",
    template:`
    <h1>{{ titulo }}</h1>

    <button (click)=" acumular( base ) " > +{{base}} </button> 
    <h3>Contador: {{ contador }}</h3>
    <button (click)=" acumular( -(base) ) "> -{{base}} </button>
    
    <br>
    
    <h3> La base es: {{base}}</h3>
    `
})
export class ContadorComponent{
    titulo: string = 'Contador App';
    contador: number = 0;
    base: number = 5;
  
    acumular( valor: number ):void{
      this.contador += valor;
    }
}
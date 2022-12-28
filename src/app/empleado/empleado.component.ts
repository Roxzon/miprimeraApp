import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //Inline
  //template:"<p>Aqui iria un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //Inline
  //styles:["p{background-color:red;}"]  
})
export class EmpleadoComponent{
  nombre = "Caleb";

  apellido = "Robles";

  edad = 20;
  
  empresa = "Google";

  /*cambiaEmpresa(event:Event){
    this.empresa=(<HTMLInputElement>event.target).value;
  }*/
  /*llamaEmpresa(value:String){

  }*/

  habilitacionCuadro = false;

  usuRegistrado = false;

  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }

  setUsuarioRegistrado(event:Event){
    //alert("El usuario se acaba de registrar");
    //this.textoDeRegistro = "El usuario se acaba de registrar";
    if((<HTMLInputElement>event.target).value =="si"){
      this.textoDeRegistro = "El usuario se acaba de registrar";
    }else{
      this.textoDeRegistro="No hay nadie registrado";
    }
  }
  /*getEdad(){
      return this.edad;
  }*/
}

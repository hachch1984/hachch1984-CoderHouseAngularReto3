import { Component, OnInit } from '@angular/core';
import { Cliente, Sexo } from 'src/app/interfaces/cliente';
import {UUID} from 'uuid-generator-ts';

@Component({
  selector: 'app-cliente-mantenimiento',
  templateUrl: './cliente-mantenimiento.component.html',
  styleUrls: ['./cliente-mantenimiento.component.scss']
})
export class ClienteMantenimientoComponent implements OnInit {


  ngOnInit(): void { 
    this.clientes.push({ id: new UUID().getDashFreeUUID(), nombre: 'Juan', apellido: 'Perez', email: 'juan@email.com', sexo: Sexo.Masculino })
  }



 


  clientes: Cliente[] = [


  ]




}

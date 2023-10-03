import { Component, OnInit } from '@angular/core';
import { Cliente, Sexo } from 'src/app/interfaces/cliente';
import { UUID } from 'uuid-generator-ts';

@Component({
  selector: 'app-cliente-mantenimiento',
  templateUrl: './cliente-mantenimiento.component.html',
  styleUrls: ['./cliente-mantenimiento.component.scss']
})
export class ClienteMantenimientoComponent implements OnInit {


  ngOnInit(): void {
    this.onReinicarListadoGeneral()
  }



  clientePorActualizar: Cliente | null = null;


  clientes: Cliente[] = [


  ]



  setClientePorActualizar(cliente: Cliente | null): void {
    this.clientePorActualizar = cliente;
  }


  addCliente(cliente: Cliente): void {
    this.clientes.push(cliente);
  }

  updateCliente(cliente: Cliente | null): void {
    if (cliente) {
      this.clientes = this.clientes.map((c) => c.id === cliente.id ? cliente : c);
    }
    this.clientePorActualizar = null;
  }

  onReinicarListadoGeneral(): void {
    this.clientes = [];
    this.clientes.push({ id: new UUID().getDashFreeUUID(), nombre: 'Juan', apellido: 'Perez', email: 'juan@hotmail.com', sexo: Sexo.Masculino });
    this.clientes.push({ id: new UUID().getDashFreeUUID(), nombre: 'Maria', apellido: 'Gomez', email: 'maria@gmail.com', sexo: Sexo.Femenino });
    this.clientes.push({ id: new UUID().getDashFreeUUID(), nombre: 'Pedro', apellido: 'Gonzalez', email: 'pedro@yahoo.com', sexo: Sexo.Masculino });
    this.clientes.push({ id: new UUID().getDashFreeUUID(), nombre: 'Ana', apellido: 'Gimenez', email: 'ana@macromedia.com', sexo: Sexo.Femenino });
    this.clientes.push({ id: new UUID().getDashFreeUUID(), nombre: 'Lucia', apellido: 'Rodriguez', email: 'lucia@autocad.com', sexo: Sexo.Femenino });
  }

}

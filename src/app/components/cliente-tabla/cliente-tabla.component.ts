import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-cliente-tabla',
  templateUrl: './cliente-tabla.component.html',
  styleUrls: ['./cliente-tabla.component.scss']
})
export class ClienteTablaComponent {


  @Input() clientes: Cliente[] = [];

  @Output() OutClienteActualizar = new EventEmitter<Cliente>();


  onActualizarClick(cliente: Cliente): void {
    this.OutClienteActualizar.emit(cliente);
  }

  onEliminarClick(cliente: Cliente): void {
    this.clientes = this.clientes.filter((c) => c.id !== cliente.id);
  }

}

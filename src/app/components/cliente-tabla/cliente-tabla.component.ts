import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';

@Component({
  selector: 'app-cliente-tabla',
  templateUrl: './cliente-tabla.component.html',
  styleUrls: ['./cliente-tabla.component.scss']
})
export class ClienteTablaComponent {


  @Input() inClientes: Cliente[] = [];
  @Input() inClientePorActualizar: Cliente | null = null;

  @Output() outClienteActualizar = new EventEmitter<Cliente>();


  onActualizarClick(cliente: Cliente): void {
    this.outClienteActualizar.emit(cliente);
  }

  onEliminarClick(cliente: Cliente): void {
    this.inClientes = this.inClientes.filter((c) => c.id !== cliente.id);
  }


  isClientePorActualizar(cliente: Cliente): boolean {
    return this.inClientePorActualizar?.id === cliente.id;
  }


  seEstaActualizandoAlgunCliente(): boolean {
    return this.inClientePorActualizar !== null;
  }



}

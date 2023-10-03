import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Cliente, Sexo } from 'src/app/interfaces/cliente';
import { validator_sexo } from 'src/app/validators/sexo';
import { UUID } from 'uuid-generator-ts';

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.scss']
})
export class ClienteFormularioComponent implements  OnChanges {

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.inClientePorActualizar) {
      this.myForm.patchValue(this.inClientePorActualizar);
    }
  }
 

  myForm = this.fb.group({
    id: [''],
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellido: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    sexo: ['', [Validators.required, validator_sexo]]
  });
  sexoValues = Sexo;
  @Input() inClientePorActualizar: Cliente | null = null;
  @Output() outClienteAgregar = new EventEmitter<Cliente>();
  @Output() outClienteActualizar = new EventEmitter<Cliente|null>();



  isInvalid(controlName: string): boolean {
    const control = this.myForm.get(controlName);
    return control && control.invalid && control.touched ? true : false;
  }

  getErrorMessage(controlName: string): string {
    const control = this.myForm.get(controlName);
    console.log('getErrorMessage', controlName, control?.errors);
    if (control) {
      if (control.hasError('required')) {
        return 'Campo requerido';
      }
      else if (control.hasError('minlength')) {
        return 'El campo debe tener al menos ' + control.getError('minlength').requiredLength + ' caracteres';
      }
      else if (control.hasError('email')) {
        return 'El campo debe ser un email válido';
      }
      else if (control.hasError('sexo')) {
        return control.getError('message');
      }
    }
    return '';
  }


  onGuardar(): void {
    this.myForm.markAllAsTouched()

    if (this.myForm.invalid) { return; }

    let cliente = this.myForm.value as Cliente;
   

    if (this.inClientePorActualizar) { 
      //se actualiza al cliente seleccionado
      this.outClienteActualizar.emit(cliente);
     
    } else {
      //se registra a un nuevo cliente
      cliente.id = new UUID().getDashFreeUUID();
      this.outClienteAgregar.emit(cliente);
    }

    this.myForm.reset();
  }

  onCancelar(): void {
    this.myForm.reset(); 
    this.outClienteActualizar.emit(null); 
  }



}

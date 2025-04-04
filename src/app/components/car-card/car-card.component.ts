import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar el pipe currency

@Component({
  selector: 'app-car-card',
  standalone: true, // Indica que este es un componente independiente
  imports: [CommonModule], // Importa CommonModule para habilitar el pipe currency
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent {
  @Input() car: any; // Recibe los datos del vehículo
  @Output() carSelected = new EventEmitter<any>(); // Emite un evento al seleccionar el vehículo

  selectCar() {
    this.carSelected.emit(this.car); // Emite el vehículo seleccionado
  }
}

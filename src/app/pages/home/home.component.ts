import { Component } from '@angular/core';
import { CarCardComponent } from "../../components/car-card/car-card.component";
import { AddCarComponent } from "../../components/add-car/add-car.component";
import { CreateReservationComponent } from "../../components/create-reservation/create-reservation.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CarCardComponent, AddCarComponent, CreateReservationComponent]
})
export class HomeComponent {
  cars = [
    {
      name: 'Toyota Corolla',
      description: 'Un auto confiable y eficiente.',
      price: 50,
      image: 'assets/images/toyota-corolla.jpg'
    },
    {
      name: 'Ford Mustang',
      description: 'Un auto deportivo y elegante.',
      price: 120,
      image: 'assets/images/ford-mustang.jpg'
    },
    {
      name: 'Chevrolet Tahoe',
      description: 'Un SUV espacioso y cómodo.',
      price: 90,
      image: 'assets/images/chevrolet-tahoe.jpg'
    }
  ];

  onCarSelected(car: any) {
    console.log('Vehículo seleccionado:', car);
  }
}

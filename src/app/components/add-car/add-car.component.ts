import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  car = {
    brand: '',
    model: '',
    year: null,
    category: '',
    pricePerDay: null,
    location: '',
    available: true,
    image: ''
  };

  constructor(private http: HttpClient) {}

  addCar() {
    this.http.post('http://localhost:3000/api/cars/addCar', this.car).subscribe({
      next: (response) => console.log('Auto agregado:', response),
      error: (error) => console.error('Error al agregar auto:', error)
    });
  }
}

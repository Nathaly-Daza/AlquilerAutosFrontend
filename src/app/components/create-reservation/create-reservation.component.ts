import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class CreateReservationComponent {
  reservation = {
    user: '',
    car: '',
    startDate: '',
    endDate: '',
    totalPrice: null,
    account: ''
  };

  constructor(private http: HttpClient) {}

  createReservation() {
    this.http.post('http://localhost:3000/api/reservations/create', this.reservation).subscribe({
      next: (response) => console.log('Reserva creada:', response),
      error: (error) => console.error('Error al crear reserva:', error)
    });
  }
}

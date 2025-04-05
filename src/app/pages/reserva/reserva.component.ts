import { Component } from '@angular/core';
import { CreateReservationComponent } from '../../components/create-reservation/create-reservation.component';

@Component({
  selector: 'app-reserva',
  standalone: true,
  imports: [CreateReservationComponent],
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {}

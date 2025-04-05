import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddCarComponent } from "./components/add-car/add-car.component";
import { CarCardComponent } from "./components/car-card/car-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, AddCarComponent, CarCardComponent], // Solo importa RouterOutlet y componentes globales
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
onCarSelected($event: Event) {
throw new Error('Method not implemented.');
}
  title = 'AlquilerAutosFrontend';
}

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReservaComponent } from './pages/reserva/reserva.component';
import { AddCarComponent } from './components/add-car/add-car.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: 'add-car', component: AddCarComponent } // Nueva ruta para agregar autos
];

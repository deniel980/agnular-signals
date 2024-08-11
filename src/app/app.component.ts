import { CommonModule } from '@angular/common';
import { Component, signal, effect, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-signals-example';

  allProducts: Product[] = [
    {
      id: 1,
      name: 'Milk',
      price: 100,
    },
    {
      id: 2,
      name: 'Bread',
      price: 1203,
    },
    {
      id: 3,
      name: 'Shit',
      price: 123,
    },
  ];
}

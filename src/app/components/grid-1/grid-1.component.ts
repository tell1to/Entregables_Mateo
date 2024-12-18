import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-grid-1',
  standalone: false,
  
  templateUrl: './grid-1.component.html',
  styleUrl: './grid-1.component.css'
})
export class Grid1Component {
  matriz3x3 = this.generateMatrix(3);
  matriz4x4 = this.generateMatrix(4);
  matriz5x5 = this.generateMatrix(5);
  matriz6x6 = this.generateMatrix(6);

  // Función para mostrar las columnas según el número del botón presionado
  generateMatrix(size: number): number[] {
    return Array.from({ length: size * size }, (_, i) => i + 1);
  }
}

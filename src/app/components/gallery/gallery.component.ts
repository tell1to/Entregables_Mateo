import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';  // Importar PrimeNG Carousel
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-gallery',
  standalone: false,
  
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  products = [
    { 
      name: ' Adidas', 
      price: 40, 
      inventoryStatus: 'In Stock', 
      image: 'https://i.pinimg.com/736x/97/8c/f3/978cf38e9ea77f074a2bebef7f8ccb7b.jpg'
    },
    { 
      name: 'New-balance', 
      price: 58, 
      inventoryStatus: 'Out of Stock', 
      image: 'https://i.pinimg.com/736x/e4/44/5e/e4445eefc8414a5ff5af6c6207f6eaba.jpg'
    },
    { 
      name: 'Puma', 
      price: 45, 
      inventoryStatus: 'In Stock', 
      image: 'https://www.sportsdirect.com/images/products/02115503_l_a1.jpg'
    },
    { 
      name: 'Nike', 
      price: 68, 
      inventoryStatus: 'In Stock', 
      image: 'https://media.sivasdescalzo.com/media/catalog/product/5/5/554724-660_sivasdescalzo-Jordan-Air_Jordan_1_Mid_Reverse_Bred_-1650620278-2.jpg'
    },
    { 
      name: 'Converse', 
      price: 55, 
      inventoryStatus: 'In Stock', 
      image: 'https://coliseumstorecl.vteximg.com.br/arquivos/ids/178219-1000-1000/132170C-001.jpg'
    },
    { 
      name: 'Reebok', 
      price: 59, 
      inventoryStatus: 'Out of Stock', 
      image: 'https://i.pinimg.com/originals/9e/ac/2e/9eac2ee436a0a6ab9e3c38858aa17763.jpg'
    },
  ];

  // Configuración del carrusel (responsiveOptions)
  responsiveOptions = [
    {
      breakpoint: '2060px',
      numVisible: 3,   // 4 productos visibles en pantallas grandes
      numScroll: 1
    },
    {
      breakpoint: '980px',
      numVisible: 2,   // 3 productos visibles en pantallas medianas
      numScroll: 1
    },
    {
      breakpoint: '660px',
      numVisible: 1,   // 2 productos visibles en pantallas pequeñas
      numScroll: 1
    },

  ];

  // Método para determinar el severidad de la disponibilidad
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }
}

import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { ProductService } from '../../services/products.service';
import { Router } from '@angular/router';
import { ProductDetailsComponent } from '../../components/components/product-details/product-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductFooterComponent } from '../../components/components/product-footer/product-footer.component';
import { ProductHeaderComponent } from '../../components/components/product-header/product-header.component';

@Component({
  selector: 'agg-products',
  standalone: true,
  imports: [
    CommonModule,
    ProductDetailsComponent,
    MatButtonModule,
    MatIconModule,
    ProductFooterComponent,
    ProductHeaderComponent,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: any[] = [];
  currentIndex: number = 0;
  itemOnCart: number = 0;
  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(event: boolean): void {
    if (event) {
      this.itemOnCart += 1;
    }
  }
  addToFav(event:boolean): void {}
  slideChange(newIndex: number): void {
    if (newIndex >= 0 && newIndex < this.products.length) {
      this.currentIndex = newIndex;
    } else {
      // Handle boundary conditions if necessary
      if (newIndex < 0) {
        this.currentIndex = this.products.length - 1; // Go to last item
      } else if (newIndex >= this.products.length) {
        this.currentIndex = 0; // Go to first item
      }
    }
  }
}

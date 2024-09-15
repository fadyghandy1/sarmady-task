import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'agg-product-header',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './product-header.component.html',
  styleUrl: './product-header.component.scss',
})
export class ProductHeaderComponent {
  @Input() product: any;
  @Input() numberProductInCart: number = 0;
}

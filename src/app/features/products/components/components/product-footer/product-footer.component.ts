import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DialogModule } from 'primeng/dialog';
import { VideoDialogComponent } from '../video-dialog/video-dialog.component';

@Component({
  selector: 'agg-product-footer',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    DialogModule,
    VideoDialogComponent,
  ],
  templateUrl: './product-footer.component.html',
  styleUrl: './product-footer.component.scss',
})
export class ProductFooterComponent {
  isFav: boolean = false;
  @Input() products: any[] = [];
  @Input() currentIndex: number = 1;
  @Input() videoUrl!: string;
  @Output() slideChange = new EventEmitter<number>();
  @Output() addedTocart = new EventEmitter<boolean>();
  @Output() addedToFav = new EventEmitter<boolean>();
  readonly showVideoDialog = signal(false);

  constructor(public dialog: MatDialog) {}
  onTenderClick() {
    this.showVideoDialog.set(true);
  }
  addToCart(): void {
    this.addedTocart.emit(true);
  }
  addToFav(): void {
    this.isFav = !this.isFav;
    this.addedToFav.emit(true);
  }
  onSlideChange(newIndex: number): void {
    this.slideChange.emit(newIndex);
  }
  openVideoDialog(): void {
    this.showVideoDialog.set(true);
  }
}

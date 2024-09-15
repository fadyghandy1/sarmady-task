import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/products.service';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../../pipes/safe-url.pipe';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: any; // Define the 'product' property to hold product details
  activeColor!: string;
  selectedColorIndex: number = 0; // Default to the first color
  allSizes: number[] = [37, 38, 39, 40, 41]; // All possible sizes from 37 to 41
  selectedSize: number | null = null; // Selected size
  starsArray: number[] = Array(5).fill(0); // Array representing the 5 stars
  selectedImageIndex: number = 0; // Default to the first image
  showAnimation = false;
  showAnimation2 = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product']) {
      // Trigger animation when product changes
      this.triggerAnimation2();
    }
  }
  ngOnInit(): void {}
  selectImage(index: number) {
    this.selectedImageIndex = index;
  }
  isSizeAvailable(size: number): boolean {
    // Logic to determine if a size is available
    return true; // Placeholder, replace with actual logic
  }

  selectSize(size: number) {
    if (this.isSizeAvailable(size)) {
      this.selectedSize = size;
    }
  }
  onSelectColor(index: number): void {
    this.selectedColorIndex = index; // Update the selected color index
    this.selectedImageIndex = 0; // Reset image index or adjust as needed
    this.triggerAnimation();
  }
  getActiveImagesOfCurrentColor(product: any): any[] {
    return product?.colors[this.activeColor]?.images;
  }
  getEmbedUrl(url: string): string {
    const videoId = url?.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  triggerAnimation() {
    this.showAnimation = true;
    setTimeout(() => (this.showAnimation = false), 500); // Duration should match the animation duration
  }
  triggerAnimation2() {
    this.showAnimation2 = true;
    setTimeout(() => (this.showAnimation2 = false), 500); // Duration should match the animation duration
  }
}

import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { SafeUrlPipe } from '../../../pipes/safe-url.pipe';

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.scss'],
  standalone: true,
  imports: [CommonModule, SafeUrlPipe, MatDialogModule],
})
export class VideoDialogComponent {
  @Input() videoUrl!: string;

  getEmbedUrl(url: string): string {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }
}

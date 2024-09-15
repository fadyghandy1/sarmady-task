import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'agg-error404',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    RouterLink,
    ButtonModule,
    RippleModule,
  ],
  templateUrl: './error404.component.html',
  styleUrls: ['../errors.component.scss'],
})
export class Error404Component {}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { SvgComponent } from '../../../../shared/components/svg/svg.component';

@Component({
  selector: 'agg-error500',
  standalone: true,
  imports: [
    CommonModule,
    SvgComponent,
    TranslateModule,
    RouterLink,
    ButtonModule,
  ],
  templateUrl: './error500.component.html',
  styleUrls: ['../errors.component.scss'],
})
export class Error500Component {}

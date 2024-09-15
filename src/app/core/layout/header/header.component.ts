import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Renderer2,
  RendererFactory2,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BaseComponent } from '../../../shared/components/base/base.component';

import { ButtonModule } from 'primeng/button';
import { HttpService } from '../../../shared/services/http/http.service';
import { TranslationService } from '../../../shared/services/translation/translation.service';
import { MenuComponent } from '../menu/menu.component';
import { HeaderNavItem } from './models/header.models';

@Component({
  selector: 'agg-header',
  standalone: true,
  imports: [
    CommonModule,
    MenuComponent,
    TranslateModule,
    RouterModule,
    ButtonModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HeaderComponent extends BaseComponent implements AfterViewInit {
  rendererFactory = inject(RendererFactory2);
  translationService = inject(TranslationService);
  httpService = inject(HttpService);
  cdr = inject(ChangeDetectorRef);
  // private readonly _authStore = inject(AuthStore);
  navs = signal<HeaderNavItem[]>([
    { name: 'Products', url: '/products' },
  ]);

  renderer!: Renderer2;
  @ViewChild('headerRef') headerRef!: ElementRef;
  logo!: string;

  ngAfterViewInit(): void {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.cloneHeader();
  }

  cloneHeader() {
    const clonedHeader = this.headerRef.nativeElement.cloneNode(true);
    this.renderer.addClass(clonedHeader, 'header--relative');

    this.renderer.appendChild(
      this.headerRef.nativeElement.parentElement,
      clonedHeader,
    );
  }
  logout() {
    // this._authStore.logout();
  }
  onChangeLang() {
    this.translationService.changeLang();
  }
}

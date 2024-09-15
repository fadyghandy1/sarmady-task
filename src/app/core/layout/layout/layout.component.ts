import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { filter, startWith, takeUntil } from 'rxjs';
import { BaseComponent } from '../../../shared/components/base/base.component';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'agg-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, LoaderComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent extends BaseComponent implements OnInit {
  private readonly _route = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  private readonly hideHeaderRoutes = ['login'];
  readonly showHeader = signal(true);

  ngOnInit(): void {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        startWith(this._route),
        takeUntil(this.destroy$),
      )
      .subscribe(() => {
        this.checkRoute();
      });
  }
  private checkRoute() {
    const currentRoute = this._route;
    this.showHeader.set(!this.isRouteToHideHeader(currentRoute));
  }

  private isRouteToHideHeader(route: ActivatedRoute): boolean {
    // Check if the current route matches the criteria to hide the header
    // For example, you might want to hide the header on the 'login' page
    while (route.firstChild) {
      route = route.firstChild;
    }

    const routePath = route.snapshot.routeConfig?.path;

    return this.hideHeaderRoutes.includes(routePath || '');
  }
}

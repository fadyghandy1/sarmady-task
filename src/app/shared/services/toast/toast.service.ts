import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly _messageService = inject(MessageService);
  readonly messageObserver = this._messageService.messageObserver;
  readonly clearObserver = this._messageService.clearObserver;

  success(message: string) {
    this._messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
    });
  }
  info(message: string) {
    this._messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: message,
    });
  }
  warn(message: string) {
    this._messageService.add({
      severity: 'warn',
      summary: 'Warn',
      detail: message,
    });
  }
  error(message: string) {
    this._messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
    });
  }
}

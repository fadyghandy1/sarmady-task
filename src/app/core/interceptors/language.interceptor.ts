import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TranslationService } from '../../shared/services/translation/translation.service';

export const languageInterceptor: HttpInterceptorFn = (req, next) => {
  const translateService = inject(TranslationService);
  const lang = req.clone({
    setHeaders: {
      'Accept-Language': translateService.currentLang(),
    },
  });
  return next(lang);
};

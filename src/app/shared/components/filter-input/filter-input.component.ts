import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  inject,
  input,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { takeUntil } from 'rxjs';
import { AggDialogService } from '../../services/dialog/agg-dialog.service';
import { BaseComponent } from '../base/base.component';
import { formModules } from '../base/form-modules';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import { FilterDialogData } from './model/filter-dialog-data.model';
@Component({
  selector: 'agg-filter-input',
  standalone: true,
  imports: [...formModules, DialogModule],
  templateUrl: './filter-input.component.html',
  styleUrl: './filter-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilterInputComponent),
      multi: true,
    },
  ],
})
export class FilterInputComponent
  extends BaseComponent
  implements ControlValueAccessor
{
  readonly filterOptions = input.required<{ name: string; value: string }[]>();
  readonly renamedFilterOptions = computed(() =>
    this.filterOptions()
      .map((option) => ({
        [option.value]: option.name,
      }))
      .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
  );

  private _dialogService = inject(AggDialogService);
  readonly form = new FormGroup({
    filter: new FormControl({ value: '', disabled: true }),
  });
  filter = '';

  private onChange: ((value: string) => void) | undefined;
  private onTouched: (() => void) | undefined;
  constructor() {
    super();
    this.onFilterChange();
  }
  writeValue(value: string): void {
    this.filter = value;
    this.form.controls.filter.patchValue(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  onBlur(): void {
    this.onTouched?.();
  }
  onFilterChange(): void {
    this.form
      .get('filter')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        if (value || value === '') {
          this.onChange?.(value);
        }
      });
  }
  onClick() {
    const ref = this._dialogService.open(FilterDialogComponent, {
      header: 'Filter',
      width: '30%',
      data: {
        filterOptions: this.filterOptions(),
        filterQuery: this.filter,
        renameFiltersMap: this.renamedFilterOptions(),
      } as FilterDialogData,
    });
    ref.onClose.pipe(takeUntil(this.destroy$)).subscribe((value) => {
      if (value || value === '') {
        this.writeValue(value);
      }
    });
  }
  setDisabledState?(isDisabled: boolean): void {}
}

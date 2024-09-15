import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { startWith, takeUntil } from 'rxjs';
import { BaseComponent } from '../base/base.component';
import { formModules } from '../base/form-modules';

@Component({
  selector: 'agg-columns-input',
  standalone: true,
  imports: [CommonModule, ...formModules],
  templateUrl: './columns-input.component.html',
  styleUrl: './columns-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColumnsInputComponent),
      multi: true,
    },
  ],
})
export class ColumnsInputComponent
  extends BaseComponent
  implements ControlValueAccessor
{
  readonly columnsOptions = input<{ name: string; value: string }[]>([]);
  readonly nameMap = input<{ [key: string]: string }>({});
  readonly form = new FormGroup({
    columns: new FormControl<string[]>([]),
  });

  private onChange: ((value: any) => void) | undefined;
  private onTouched: (() => void) | undefined;
  constructor() {
    super();
    this.onColumnsChange();
  }
  writeValue(value: string | string[]): void {
    let finalVal;
    if (typeof value === 'string') {
      finalVal = value?.split(',').filter((v) =>
        this.columnsOptions()
          .map((c) => c.value)
          .includes(v),
      );
    } else {
      finalVal = value;
    }
    this.form.controls.columns.setValue(
      finalVal.length > this.columnsOptions().length ? [] : finalVal,
    );

    this.form.updateValueAndValidity();
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
  onColumnsChange(): void {
    this.form.controls.columns?.valueChanges
      .pipe(
        startWith(this.form.controls.columns.value),
        takeUntil(this.destroy$),
      )
      .subscribe((value) => {
        if (value && value?.length > 0) {
          setTimeout(() => {
            this.onChange?.(value?.join(','));
          }, 500);
        } else {
          if (this.nameMap()) {
            this.form.controls.columns.patchValue(Object.keys(this.nameMap()));
          }
        }
      });
  }
}

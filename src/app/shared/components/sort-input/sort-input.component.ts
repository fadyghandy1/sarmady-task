import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  input,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { takeUntil } from 'rxjs';
import { BaseComponent } from '../base/base.component';
import { formModules } from '../base/form-modules';
type Sort = { name: string; sort: 'asc' | 'desc'; value: string };
@Component({
  selector: 'agg-sort-input',
  standalone: true,
  imports: [CommonModule, ...formModules],
  templateUrl: './sort-input.component.html',
  styleUrl: './sort-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SortInputComponent),
      multi: true,
    },
  ],
})
export class SortInputComponent
  extends BaseComponent
  implements ControlValueAccessor
{
  readonly sortOptions = input.required<{ name: string; value: string }[]>();
  readonly SortOptionWithAscDesc = computed(() => {
    return this.sortOptions()
      .map((option) => [
        {
          name: `${option.name} Asc`,
          value: option.value,
          sort: 'asc',
        },
        {
          name: `${option.name} Desc`,
          value: option.value,
          sort: 'desc',
        },
      ])
      .flat();
  });
  readonly SortNameMap = computed<Record<string, string>>(() =>
    this.SortOptionWithAscDesc().reduce((acc, curr) => {
      return { ...acc, [`${curr.value},${curr.sort}`]: curr.name };
    }, {}),
  );
  readonly form = new FormGroup({
    sorts: new FormControl<Sort[] | null>(null),
  });
  private onChange: ((value: any) => void) | undefined;
  private onTouched: (() => void) | undefined;

  constructor() {
    super();
    this.onSortChange();
  }
  writeValue(value: string): void {
    const sorts = value.split(';');
    const val = sorts.map((s) => {
      let value = s.split(',')[0];
      let sort = s.split(',')[1] as 'asc' | 'desc';

      return {
        name: this.SortNameMap()[value + ',' + sort],
        sort,
        value,
      };
    });
    console.log(val, sorts);

    this.form.controls.sorts.setValue(val);
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
  onSortChange(): void {
    this.form.controls.sorts?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        if (value) {
          this.onChange?.(value.map((s) => `${s.value},${s.sort}`).join(';'));
        }
      });
  }
}

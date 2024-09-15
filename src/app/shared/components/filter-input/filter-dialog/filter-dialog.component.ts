import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PanelModule } from 'primeng/panel';
import { startWith, takeUntil } from 'rxjs';
import { RenameValuesPipe } from '../../../pipes/rename-value.pipe';
import { BaseComponent } from '../../base/base.component';
import { formModules } from '../../base/form-modules';
import { FilterDialogData } from '../model/filter-dialog-data.model';

@Component({
  selector: 'agg-filter-dialog',
  standalone: true,
  imports: [CommonModule, ...formModules, RenameValuesPipe, PanelModule],
  templateUrl: './filter-dialog.component.html',
  styleUrl: './filter-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterDialogComponent extends BaseComponent {
  private readonly _dialogRef = inject(DynamicDialogRef);
  private readonly _dialogConfig = inject(DynamicDialogConfig);

  private readonly _data: FilterDialogData;
  filterOptions: FilterDialogData['filterOptions'];
  renameFiltersMap: { [key: string]: string };
  operatorOptions = [
    { name: 'Contains', value: 'lk' },
    { name: 'Equals', value: 'eq' },
    { name: 'Not Equals', value: 'ne' },
    { name: 'Is Empty', value: 'nl' },
    { name: 'Is Not Empty', value: 'nn' },
  ];
  // searchOptions = [
  //   { name: 'Department', value: 'dname' },
  //   { name: 'Class', value: 'cname' },
  //   { name: 'Subclass', value: 'sname' },
  // ];
  readonly form = new FormGroup({
    search: new FormControl(''),
    filters: new FormArray<
      FormGroup<{
        name: FormControl<string | null>;
        value: FormControl<string | null>;
        operator: FormControl<{ name: string; value: string } | null>;
      }>
    >([]),
  });
  constructor() {
    super();
    this.onSearchValueChange();

    this._data = this._dialogConfig.data;
    this.filterOptions = this._data.filterOptions;
    this.renameFiltersMap = this._data.renameFiltersMap;
    this.unparseQuery(this._data?.filterQuery);
  }
  onSearchValueChange() {
    this.form.controls.search.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        if (value) {
          this.addFilter(value);
          this.form.controls.search.patchValue('');
        }
      });
  }
  addFilter(name: string, value = '', operator = { name: '', value: '' }) {
    const formGroup = new FormGroup({
      name: new FormControl(name),
      value: new FormControl(value, [Validators.required]),
      operator: new FormControl(operator, [Validators.required]),
    });
    this.form.controls.filters.push(formGroup);
    formGroup.controls.operator.valueChanges
      .pipe(
        startWith(formGroup.controls.operator.value),
        takeUntil(this.destroy$),
      )
      .subscribe((op) => {
        if (op?.value === 'nl' || op?.value === 'nn') {
          formGroup.controls.value.disable();
          formGroup.controls.value.patchValue('');
        } else {
          formGroup.controls.value.enable();
        }
      });
  }
  removeFilter(index: number) {
    this.form.controls.filters.removeAt(index);
  }
  parseQuery() {
    let query = '';
    for (let i = 0; i < this.form.controls.filters.length; i++) {
      const filter = this.form.controls.filters.at(i).value;
      if (i > 0) {
        query += 'AND';
      }
      if (filter.operator?.value === 'nl' || filter.operator?.value === 'nn') {
        query += `(${filter.name},${filter.operator.value})`;
        continue;
      }
      if (filter.operator?.value === 'ne') {
        query += `(${filter.name},${filter.operator.value},${filter.value})OR(${filter.name},nl)`;
        continue;
      }
      if (filter.operator?.value === 'lk') {
        filter.value = filter.value?.replaceAll('*', '');
        query += `(${filter.name},${filter.operator.value},*${filter.value}*)`;
        continue;
      }
      query += `(${filter.name},${filter.operator!.value},${filter.value})`;
    }
    return query;
  }
  unparseQuery(query?: string) {
    if (!query) return;
    const filters = query.split('AND');
    filters.forEach((filter) => {
      let name: string;
      let operator: string;
      let value: string;
      const filterWithOr = filter.split('OR');
      if (filterWithOr.length > 1) {
        [name, operator, value] = filterWithOr[0]
          .replace('(', '')
          .replace(')', '')
          .split(',');
      } else {
        [name, operator, value] = filter
          .replace('(', '')
          .replace(')', '')
          .split(',');
      }
      this.addFilter(
        name,
        value,
        this.operatorOptions.find((op) => op.value === operator),
      );
    });
  }
  onSubmit() {
    if (this.form.invalid) return;
    console.log(this.parseQuery());
    this._dialogRef.close(this.parseQuery());
  }
  onReset() {
    this.form.controls.filters.clear();
    this.form.reset();
    this._dialogRef.close(this.parseQuery());
  }
}

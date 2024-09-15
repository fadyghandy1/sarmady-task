import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormErrorDirective } from '../form/form-error.directive';
import { FormFieldDirective } from '../form/form-field.directive';
export const formModules = [
  ReactiveFormsModule,
  IconFieldModule,
  InputIconModule,
  InputTextModule,
  InputTextareaModule,
  DropdownModule,
  CheckboxModule,
  PasswordModule,
  InputNumberModule,
  RadioButtonModule,
  FloatLabelModule,
  ButtonModule,
  FormFieldDirective,
  FormErrorDirective,
  MultiSelectModule,
  InputGroupModule,
  InputGroupAddonModule,
];

import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordStrengthService } from '../../services/password-strength/password-strength.service';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  password: string = '';
  passwordStrength: string = '';
  showPassword: boolean = false;
  validationMessage: string = '';

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  handlePasswordChange() {
    this.passwordStrength = this.passwordStrengthService.checkPasswordStrength(this.password);
    this.updateValidationMessage();
    this.onChange(this.passwordStrength);
    this.onTouch();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  updateValidationMessage() {
    if (this.password.length && this.password.length < 8) {
      this.validationMessage = 'Password must be at least 8 characters long.';
    } else {
      this.validationMessage = '';
    }
  }

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any): void {
    this.password = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}

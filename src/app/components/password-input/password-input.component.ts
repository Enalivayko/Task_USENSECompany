import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import { PasswordStrengthService } from '../../services/password-strength/password-strength.service';
import {ControlValueAccessor,NG_VALUE_ACCESSOR} from "@angular/forms";

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
export class PasswordInputComponent {
  password: string = '';
  showPassword: boolean = false;
  validationMessage: string = '';
  @Output() passwordStrengthUpdated: EventEmitter<any> = new EventEmitter();


  constructor(private passwordStrengthService: PasswordStrengthService) {}

  handlePasswordChange() {
    this.passwordStrengthUpdated.emit(this.passwordStrengthService.checkPasswordStrength(this.password));
    this.updateValidationMessage();
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
}


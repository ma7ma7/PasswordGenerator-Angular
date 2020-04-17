import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lenght = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  password = '';

  onChangeLenght(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.lenght = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  onButtonClick() {
    const letters = 'abcdefjhigklmnpqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()_+-';

    let allowedChars = '';

    if (this.useLetters) {
      allowedChars += letters;
    }

    if (this.useNumbers) {
      allowedChars += numbers;
    }

    if (this.useSymbols) {
      allowedChars += symbols;
    }

    console.log(allowedChars);

    let generatedPassword = '';
    for (let i = 0; i < this.lenght; i++) {
      const index = Math.floor(Math.random() * allowedChars.length);
      generatedPassword += allowedChars[index];
    }

    this.password = generatedPassword;
  }
}

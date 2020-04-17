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
    console.log('Use Letters : ', this.useLetters);
    console.log('Use Numbers : ', this.useNumbers);
    console.log('Use Symbols : ', this.useSymbols);
    this.password = 'MY PASSWORD';
  }
}

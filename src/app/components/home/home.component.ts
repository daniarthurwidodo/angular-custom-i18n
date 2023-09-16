import { Component } from '@angular/core';
import { TranslationService } from 'src/app/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  word: any
  constructor(private translation: TranslationService){
    this.word = this.translation.wording
  }
}

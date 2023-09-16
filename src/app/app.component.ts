import { Component } from '@angular/core';
import { TranslationService} from './translation.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-custom-i18n';
  currentLang: string | null;
  word: any
  constructor( private translate: TranslationService){
    console.log(this.translate.wording);
    this.currentLang = this.translate.currentLang
    this.word = this.translate.wording
  }

  setLang(event: any){
    this.translate.setLanguage(event.target.value)
  }
  
}

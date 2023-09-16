import { Injectable } from '@angular/core';
import en from '../assets/en.json'
import id from '../assets/id.json'

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang: string | null
  wording: any

  constructor() {
    this.currentLang = localStorage.getItem('lang')
    // set default translation
    if (!this.currentLang) {
      localStorage.setItem('lang', 'en')
      this.wording = en
    }

    if (this.currentLang === 'en') {
      this.wording = en
    } else if (this.currentLang === 'id') {
      this.wording = id
    }
  }

  setLanguage(lang: string) {
    console.log(lang);
    localStorage.setItem('lang', lang)
    location.reload()
  }
}

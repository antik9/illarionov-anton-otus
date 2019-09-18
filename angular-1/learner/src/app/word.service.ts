import { Injectable, EventEmitter } from '@angular/core';
import { TranslatorService } from './translator.service';
import { SettingsService }  from '../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class WordService {
    constructor(
        private translatorService: TranslatorService,
        private settings: SettingsService) { }
    wordChange: EventEmitter<boolean> = new EventEmitter()

    addBagOfWords(sentence: string) {
        sentence = sentence.toLowerCase();
        sentence.split(/\s+/).forEach(word => {
            this.translatorService
                .translateWord(word)
                .subscribe((res: any) => {
                    let translation = res['text'][0];
                    if ( translation !== undefined ) {
                        this.addWord(word, translation);
                        this.wordChange.emit(true);
                    }
                });
        });
    }

    addWord(word: string, translation: string) {
        let language = this.settings.getSettings()['choosenLanguage'];
        let words = this.getWords();
        words[word] = translation;
        localStorage.setItem(language, JSON.stringify(words));
    }

    getWords() {
        let language = this.settings.getSettings()['choosenLanguage'];
        return JSON.parse(localStorage.getItem(language)) || {};
    }
}

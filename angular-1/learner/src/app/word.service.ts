import { Injectable, EventEmitter } from '@angular/core';
import { TranslatorService } from './translator.service';

@Injectable({
  providedIn: 'root'
})
export class WordService {
    constructor(private translatorService: TranslatorService){ }
    wordChange: EventEmitter<boolean> = new EventEmitter()

    addBagOfWords(sentence: string) {
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
        let words = this.getWords();
        words[word] = translation;
        localStorage.setItem('words', JSON.stringify(words));
    }

    getWords() {
        return JSON.parse(localStorage.getItem('words')) || {};
    }
}

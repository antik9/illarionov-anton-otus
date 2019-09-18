import { Component } from '@angular/core';
import { WordService } from './word.service';
import { TranslatorService } from './translator.service';

function formatDate(date: Date): string {
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [WordService, TranslatorService]
})
export class AppComponent {
    constructor(
        private wordService: WordService,
        private translatorService: TranslatorService
    ) {
        this.getWords();
        this.subscription = this.wordService.wordChange.subscribe(() => this.getWords());
    }

    title = 'learner'
    currentDate = formatDate(new Date())
    newWord = ''
    subscription: any
    words: any

    getWords = () => {
        this.words = this.wordService.getWords();
    }
    addBagOfWords = () => {
        this.wordService.addBagOfWords(this.newWord);
        this.getWords();
        this.newWord = '';
    }
}

import { Component } from '@angular/core';
import { WordService } from '../app/word.service';
import { SettingsService } from '../settings/settings.service';

@Component({
    selector: 'game-root',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css'],
    providers: [WordService, SettingsService]
})
export class GameComponent {
    constructor(
        private wordService: WordService,
        private settings: SettingsService) { this.reset(); }

    title = 'learner'
    word: any
    attempts: number
    buttonText = 'Next'
    rights: number
    wrongs: number
    isOverMessage: string
    translation = ''
    rightAnswer = ''
    colored = 'green'

    next = async () => {
        if ( this.buttonText === 'Play again' ) {
            this.reset();
            return;
        }

        if ( this.rights + this.wrongs < this.attempts ) {
            this.rightAnswer = this.wordService.getWords()[this.word];
            let right = this.rightAnswer === this.translation;
            this.colored = right ? 'green' : 'red';
            right ? this.rights++ : this.wrongs++;
        }

        if ( this.rights + this.wrongs < this.attempts ) {
            await new Promise(done => setTimeout(() => done(), 1200));
            this.translation = '';
            this.nextWord();
            this.rightAnswer = '';
        } else {
            this.isOverMessage = (
                `Your result is ${this.rights} correct answers and ` +
                `${this.wrongs} incorrect`
            );
            this.buttonText = 'Play again';
        }
    }
    nextWord = () => {
        let words = this.wordService.getWords();
        this.word = Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)];
    }
    reset = () => {
        this.buttonText = 'Next';
        this.rights = 0;
        this.wrongs = 0;
        this.isOverMessage = '';
        this.rightAnswer = '';
        this.attempts = this.settings.getSettings()['choosenNumber'];
        this.nextWord();
    }
}

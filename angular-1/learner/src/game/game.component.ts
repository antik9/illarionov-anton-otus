import { Component } from '@angular/core';
import { WordService } from '../app/word.service';

@Component({
    selector: 'game-root',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css'],
    providers: [WordService]
})
export class GameComponent {
    constructor(private service: WordService) { this.nextWord(); }

    title = 'learner'
    word: any
    translation = ''
    rightAnswer = ''
    colored = 'green'

    next = async () => {
        this.rightAnswer = this.service.getWords()[this.word];
        let right = this.rightAnswer === this.translation;
        this.colored =  right ? 'green' : 'red';
        await new Promise(done => setTimeout(() => done(), 1200));
        this.translation = '';
        this.nextWord();
        this.rightAnswer = '';
    }
    nextWord = () => {
        let words = this.service.getWords();
        this.word = Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)];
    }
}

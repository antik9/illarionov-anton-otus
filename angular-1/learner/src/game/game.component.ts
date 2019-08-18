import { Component } from '@angular/core';
import words from '../app/words';

const nextWord = () => Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)];

@Component({
    selector: 'game-root',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent {
    title = 'learner';
    word = nextWord();
    translation = '';
    rightAnswer = '';
    colored = 'green';
    next = async () => {
        this.rightAnswer = words[this.word];
        let right = this.rightAnswer === this.translation;
        this.colored =  right ? 'green' : 'red';
        await new Promise(done => setTimeout(() => done(), 1200));
        this.translation = '';
        this.word = nextWord();
        this.rightAnswer = '';
    };
}

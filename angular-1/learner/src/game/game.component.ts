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
    next = () => {
        if ( this.translation !== words[this.word] )
            alert(`The answer is ${words[this.word]}`);
        this.translation = '';
        this.word = nextWord();
    };
}

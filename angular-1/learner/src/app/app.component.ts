import { Component } from '@angular/core';
import words from './words';

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
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'learner';
    currentDate = formatDate(new Date());
    newWord = '';
    translation = '';
    words = words;
    addWord = () => {
        this.words[this.newWord] = this.translation;
        this.newWord = this.translation = '';
    };
}

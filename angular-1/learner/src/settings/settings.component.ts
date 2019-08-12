import { Component } from '@angular/core';

const languages = ["English", "French", "German", "Russian"];
const numberOfWords = [5, 10, 15, 20];

@Component({
    selector: 'settings-root',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
    title = 'learner';
    languages = languages;
    numberOfWords = numberOfWords;
    choosenLanguage = "English";
    choosenNumber = 5;
    saveSettings = () => { };
    onLanguageChange = (event) => this.choosenLanguage = event.target.value;
    onNumberChange = (event) => this.choosenNumber = event.target.value;
}

import { Component } from '@angular/core';

const languages = ["English", "French", "German", "Russian"];
const numberOfWords = [5, 10, 15, 20];

let settings = {
    choosenLanguage: "English",
    choosenNumber: 5,
};

@Component({
    selector: 'settings-root',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
    title = 'learner';
    languages = languages;
    numberOfWords = numberOfWords;
    choosenLanguage = settings.choosenLanguage;
    choosenNumber = settings.choosenNumber;
    saveSettings = () => {
        settings.choosenLanguage = this.choosenLanguage;
        settings.choosenNumber = this.choosenNumber;
    };
    onLanguageChange = (event) => this.choosenLanguage = event.target.value;
    onNumberChange = (event) => this.choosenNumber = event.target.value;
}

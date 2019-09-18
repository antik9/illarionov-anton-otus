import { Component } from '@angular/core';
import { SettingsService } from './settings.service';

const languages = ["English", "French", "German", "Russian"];
const numberOfWords = [5, 10, 15, 20];

let settings = {
    choosenLanguage: "English",
    choosenNumber: 5,
    apiKey: '',
};

@Component({
    selector: 'settings-root',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css'],
    providers: [SettingsService],
})
export class SettingsComponent {
    constructor(private service: SettingsService) {
        this.resetSettings();
    }

    title = 'learner'
    languages = this.service.languages
    numberOfWords = this.service.numberOfWords
    apiKey: any
    choosenLanguage: any
    choosenNumber: any

    resetSettings = () => {
        let storage = this.service.getSettings();
        this.apiKey = storage['apiKey'];
        this.choosenLanguage = storage['choosenLanguage'];
        this.choosenNumber = storage['choosenNumber'];
    }
    saveSettings = () => {
        this.service.set('choosenLanguage', this.choosenLanguage);
        this.service.set('choosenNumber', this.choosenNumber);
        this.service.set('apiKey', this.apiKey);
    }
    onLanguageChange = (event) => this.choosenLanguage = event.target.value
    onNumberChange = (event) => this.choosenNumber = event.target.value
}

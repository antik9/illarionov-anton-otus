import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
    languages = ["English", "French", "German", "Russian"]
    numberOfWords = [5, 10, 15, 20]
    private storage = { }
    constructor() {
        this.storage = JSON.parse(localStorage.getItem('settings')) || {
            choosenLanguage: "English",
            choosenNumber: 5,
            apiKey: '',
        }
    }

    getSettings = () => {
        return this.storage;
    }
    set = (key: string, value: any) => {
        this.storage[key] = value;
        localStorage['settings'] = JSON.stringify(this.storage);
    }
}

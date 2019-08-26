import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {
    baseUrl: string = 'https://translate.yandex.net/api/v1.5/tr.json/translate?'
    constructor(private httpClient: HttpClient, private settings: SettingsService) { }

    translateWord(word: string) {
        let key = this.settings.getSettings()['apiKey'];
        return this.httpClient.get(this.baseUrl + `key=${key}&text=${word}&lang=ru`)
    }
}

import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WordService } from './word.service';
import { TranslatorService } from './translator.service';
import { SettingsService } from '../settings/settings.service';

class MockTranslator {
    public baseUrl: any
    private httpClient: any
    public settings: any
    public translateWord: any
};

describe('WordService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
            SettingsService,
            WordService,
        ],
    }));
    beforeEach(() => {
        localStorage['English'] = JSON.stringify({
            hill: 'холм',
            car: 'автомобиль',
            steal: 'красть',
        });
    });

    it('#getWords should return for choosen language', () => {
        const service: WordService = TestBed.get(WordService);
        expect(service.getWords()).toEqual({
            hill: 'холм',
            car: 'автомобиль',
            steal: 'красть',
        });
    });

    it('#addWord extends the vocabulary', () => {
        const service: WordService = TestBed.get(WordService);
        service.addWord('will', 'воля');
        expect(service.getWords()).toEqual({
            hill: 'холм',
            car: 'автомобиль',
            steal: 'красть',
            will: 'воля',
        });
    });

    afterEach(() => {
        delete localStorage.settings;
        delete localStorage.English;
    });
});

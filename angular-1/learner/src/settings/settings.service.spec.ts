import { TestBed } from '@angular/core/testing';

import { SettingsService } from './settings.service';

describe('SettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('#getSettings should return object with default configuration', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    expect(service.getSettings()).toEqual({
        choosenLanguage: 'English',
        choosenNumber: 5,
        apiKey: '',
    });
  });

  it('#set should change settings', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    service.set('choosenLanguage', 'French');
    service.set('apiKey', 'someApiKey');
    expect(service.getSettings()).toEqual({
        choosenLanguage: 'French',
        choosenNumber: 5,
        apiKey: 'someApiKey',
    });
  });

  afterEach(() => { delete localStorage.settings });
});

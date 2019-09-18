import { TestBed } from '@angular/core/testing';
import { SettingsComponent } from './settings.component';
import { SettingsService } from './settings.service';

describe('SettingsComponent', () => {
    let component: SettingsComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SettingsComponent],
            providers: [SettingsService],
        })
        .compileComponents();
        component = new SettingsComponent(new SettingsService());
    });

    it('component is created', () => {
        expect(component).toBeTruthy();
    });

    afterEach(() => { delete localStorage.settings; });
});

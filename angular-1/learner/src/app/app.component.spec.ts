import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SettingsService } from '../settings/settings.service';
import { WordService } from './word.service';

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [AppComponent],
            providers: [SettingsService, WordService, HttpClient],
        })
        .compileComponents();
    });

    it('component is created', () => {
        let component = TestBed.createComponent(AppComponent);
        expect(component).toBeTruthy();
    });
});

import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './game.component';
import { SettingsService } from '../settings/settings.service';
import { WordService } from '../app/word.service';

describe('GameComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [GameComponent],
            providers: [SettingsService, WordService, HttpClient],
        })
        .compileComponents();
    });

    it('component is created', () => {
        let component = TestBed.createComponent(GameComponent);
        expect(component).toBeTruthy();
    });
});

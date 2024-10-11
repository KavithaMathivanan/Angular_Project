import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeMovieDetailComponent } from './anime-movie-detail.component';

describe('AnimeMovieDetailComponent', () => {
  let component: AnimeMovieDetailComponent;
  let fixture: ComponentFixture<AnimeMovieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeMovieDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeMovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

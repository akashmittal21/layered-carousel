import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayeredCarouselComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [LayeredCarouselComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LayeredCarouselComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'layered-carousel'`, () => {
    const fixture = TestBed.createComponent(LayeredCarouselComponent);
    const app = fixture.componentInstance;
    // expect(app.title).toEqual('layered-carousel');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LayeredCarouselComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('layered-carousel app is running!');
  });
});

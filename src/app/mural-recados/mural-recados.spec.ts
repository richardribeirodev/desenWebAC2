import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MuralRecadosComponent } from './mural-recados';

describe('MuralRecadosComponent', () => {
  let component: MuralRecadosComponent;
  let fixture: ComponentFixture<MuralRecadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuralRecadosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MuralRecadosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

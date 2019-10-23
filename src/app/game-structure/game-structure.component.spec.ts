import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStructureComponent } from './game-structure.component';

describe('GameStructureComponent', () => {
  let component: GameStructureComponent;
  let fixture: ComponentFixture<GameStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

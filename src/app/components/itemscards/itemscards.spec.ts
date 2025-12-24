import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsCards } from './itemscards';

describe('ItemsCards', () => {
  let component: ItemsCards;
  let fixture: ComponentFixture<ItemsCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsCards],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

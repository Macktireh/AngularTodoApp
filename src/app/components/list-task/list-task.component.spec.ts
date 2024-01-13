import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTodoComponent } from './list-task.component';

describe('ListTodoComponent', () => {
  let component: ListTodoComponent;
  let fixture: ComponentFixture<ListTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTodoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

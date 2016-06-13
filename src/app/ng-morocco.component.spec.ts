import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NgMoroccoAppComponent } from '../app/ng-morocco.component';

beforeEachProviders(() => [NgMoroccoAppComponent]);

describe('App: NgMorocco', () => {
  it('should create the app',
      inject([NgMoroccoAppComponent], (app: NgMoroccoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng-morocco works!\'',
      inject([NgMoroccoAppComponent], (app: NgMoroccoAppComponent) => {
    expect(app.title).toEqual('ng-morocco works!');
  }));
});

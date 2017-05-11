import { ReadyStatePipe } from './ready-state.pipe';

describe('ReadyStatePipe', () => {
  it('create an instance', () => {
    const pipe = new ReadyStatePipe();
    expect(pipe).toBeTruthy();
  });
});

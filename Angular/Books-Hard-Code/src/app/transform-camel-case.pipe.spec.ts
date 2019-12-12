import { TransformCamelCasePipe } from './transform-camel-case.pipe';

describe('TransformCamelCasePipe', () => {
  it('create an instance', () => {
    const pipe = new TransformCamelCasePipe();
    expect(pipe).toBeTruthy();
  });
});

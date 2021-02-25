import {jest} from '@jest/globals';
import * as depInjectionMod from './dep_injection_example.js';

describe('dependency injection example someFn', function() {
  it('should return arg', function() {
    const testString = 'test string';
    expect(depInjectionMod.someFn(testString)).toEqual(testString);
  });
});

describe('dependency injection example testFn', function() {
  let someFnStub;
  let result;
  beforeEach(function() {
    someFnStub = jest.mock().mockReturnValueOnce('not real');
    result = depInjectionMod.testFn(someFnStub);
  });
  it('should call someFn', function() {
    expect(someFnStub).toBeCalled();
  });
  it('should return "not real" string', function() {
    expect(result).toEqual('not real');
  });
});

describe('dependency injection example exTestFn', function() {
  let extDepString;
  let externalDepStub;
  let result;
  beforeEach(function() {
    extDepString = 'not real ext dep';
    externalDepStub = jest.mock().returns(extDepString);
    result = depInjectionMod.exTestFn(externalDepStub);
  });
  it('should call externalDep', function() {
    expect(externalDepStub).toBeCalled();
  });
  it('should return ', function() {
    expect(result).toEqual(extDepString);
  });
});

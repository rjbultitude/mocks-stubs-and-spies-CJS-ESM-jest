import {jest} from '@jest/globals';
import { EXT_DEP_STR } from '../utils/constants.js';

describe('namespace example someFn', function() {
  it('should return arg', function() {
    const testString = 'test string';
    expect(namespaceMethods.someFn(testString)).toEqual(testString);
  });
});

describe('namespace example testFn', function() {
  let someFnStub;
  let result;
  beforeEach(function() {
    someFnStub = jest.mock(namespaceMethods, 'someFn').mockReturnValueOnce('not real');
    result = namespaceMethods.testFn(someFnStub);
  });
  afterEach(function() {
    jest.clearAllMocks();
  });
  it('should call someFn', function() {
    expect(someFnStub).toBeCalled();
  });
  it('should return ', function() {
    expect(result).toEqual('not real');
  });
});

describe('namespace example exTestFn', function() {
  let externalDepSpy;
  beforeEach(function() {
    externalDepSpy = jest.spyOn(modBMethods, 'externalDep');
  });
  afterEach(function() {
    jest.clearAllMocks();
  });
  it('should call externalDep', function() {
    namespaceMethods.exTestFn();
    expect(externalDepSpy).toBeCalled();
  });
  it('should return ', function() {
    const result = namespaceMethods.exTestFn();
    expect(result).toEqual(EXT_DEP_STR);
  });
});

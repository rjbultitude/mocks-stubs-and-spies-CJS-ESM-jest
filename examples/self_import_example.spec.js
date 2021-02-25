import {jest} from '@jest/globals';
import * as selfImportMod from './self_import_example.js';
import * as module_B from './module_B.js';
import { EXT_DEP_STR } from '../utils/constants.js';

describe('self import someFn', function() {
  it('should return arg', function() {
    const testString = 'test string';
    expect(selfImportMod.someFn(testString)).toEqual(testString);
  });
});

describe('self import testFn', function() {
  let someFnStub;
  let result;
  beforeEach(function() {
    someFnStub = jest.mock(selfImportMod, 'someFn').returns('not real');
    result = selfImportMod.testFn();
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

describe('self import example exTestFn', function() {
  let externalDepSpy;
  let result;
  beforeEach(function() {
    externalDepSpy = jest.spyOn(module_B, 'externalDep');
    result = selfImportMod.exTestFn();
  });
  afterEach(function() {
    jest.clearAllMocks();
  });
  it('should call externalDep', function() {
    expect(externalDepSpy).toBeCalled();
  });
  it('should return ', function() {
    expect(result).toEqual(EXT_DEP_STR);
  });
});

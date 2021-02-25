import {jest} from '@jest/globals';
import * as stndExportMod from './standard_export_example.js';
import * as module_B from './module_B.js';
import { EXT_DEP_STR } from '../utils/constants.js';

describe('standard export example someFn', function() {
  it('should return arg', function() {
    const testString = 'test string';
    expect(stndExportMod.someFn(testString)).toEqual(testString);
  });
});

describe('standard export example testFn', function() {
  let someFnSpy;
  let result;
  beforeEach(function() {
    someFnSpy = jest.spyOn(stndExportMod, 'someFn').mockReturnValueOnce('not real');
    result = stndExportMod.testFn(someFnSpy);
  });
  afterEach(function() {
    jest.clearAllMocks();
  });
  it('should call someFn', function() {
    expect(someFnSpy).toBeCalled();
  });
  it('should return ', function() {
    expect(result).toEqual('not real');
  });
});

describe('standard export example exTestFn', function() {
  it('should call externalDep', function() {
    module_B.externalDep = jest.fn();
    stndExportMod.exTestFn();
    expect(module_B.externalDep).toBeCalled();
  });
  it('should return ', function() {
    const result = stndExportMod.exTestFn();
    expect(result).toEqual(EXT_DEP_STR);
  });
});

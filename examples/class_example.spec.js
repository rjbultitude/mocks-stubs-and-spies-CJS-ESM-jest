import {jest} from '@jest/globals';
import * as classMod from './class_example.js';
import { EXT_DEP_STR } from '../utils/constants.js';

describe('class example someFn', function() {
  it('should return arg', function() {
    const classObj = new classMod.ModuleClass();
    const testString = 'test string';
    expect(classObj.someFn(testString)).toEqual(testString);
  });
});

describe('class example testFn', function() {
  beforeEach(function() {
    this.classObj = new classMod.ModuleClass();
    this.someFnStub = jest.mock(this.classObj, 'someFn').mockReturnValueOnce('not real');
    this.result = this.classObj.testFn();
  });
  afterEach(function() {
    jest.clearAllMocks();
  });
  it('should call someFn', function() {
    expect(this.someFnStub).toBeCalled();
  });
  it('should return ', function() {
    expect(this.result).toEqual('not real');
  });
});

describe('class example exTestFn', function() {
  beforeEach(function() {
    const classObj = new classMod.ModuleClass();
    this.exTestFnSpy = jest.spyOn(classObj, 'exTestFn');
    this.result = classObj.exTestFn();
  });
  afterEach(function() {
    jest.clearAllMocks();
  });
  it('should call exTestFn', function() {
    expect(this.exTestFnSpy).toBeCalled();
  });
  it('should return ', function() {
    expect(this.result).toEqual(EXT_DEP_STR);
  });
});

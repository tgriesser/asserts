import { asserts } from '../src/asserts';

describe('@tgriesser/asserts', () => {
  test('asserts.isAssertsError', () => {
    try {
      asserts.isAssertsError('');
      throw new Error();
    } catch (e) {
      expect(e).toBeInstanceOf(asserts.Error);
      expect(e.message).toEqual('Expected AssertsError, saw string');
    }
    try {
      asserts.isAssertsError('', 'Custom message');
    } catch (e) {
      asserts.isAssertsError(e);
      expect(e.message).toEqual('Custom message');
    }
  });
  test('asserts.string', () => {
    asserts.string('');
    try {
      asserts.string(null);
      throw new Error();
    } catch (e) {
      asserts.isAssertsError(e);
      expect(e.message).toEqual('Expected string, saw null');
    }
    try {
      asserts.string(undefined, 'Custom message');
    } catch (e) {
      asserts.isAssertsError(e);
      expect(e.message).toEqual('Custom message');
    }
  });
  test('asserts.boolean', () => {
    asserts.boolean(true);
    try {
      asserts.boolean('');
      throw new Error();
    } catch (e) {
      asserts.isAssertsError(e);
      expect(e.message).toEqual('Expected boolean, saw string');
    }
    try {
      asserts.boolean('', 'Custom message');
    } catch (e) {
      asserts.isAssertsError(e);
      expect(e.message).toEqual('Custom message');
    }
  });
  test('asserts.number', () => {
    asserts.number(1);
    try {
      asserts.number('');
      throw new Error();
    } catch (e) {
      asserts.isAssertsError(e);
      expect(e.message).toEqual('Expected number, saw string');
    }
    try {
      asserts.number('', 'Custom message');
    } catch (e) {
      asserts.isAssertsError(e);
      expect(e.message).toEqual('Custom message');
    }
  });
  test('asserts.undefined', () => {
    asserts.undefined(undefined);
    try {
      asserts.undefined('');
      throw new Error();
    } catch (e) {
      asserts.isAssertsError(e);
      expect(e.message).toEqual('Expected undefined, saw string');
    }
    try {
      asserts.undefined('', 'Custom message');
    } catch (e) {
      asserts.isAssertsError(e);
      expect(e.message).toEqual('Custom message');
    }
  });
  test('asserts.null', () => {
    asserts.null(null);
    try {
      asserts.null('');
      throw new Error();
    } catch (e) {
      asserts.isAssertsError(e);
      expect(e.message).toEqual('Expected null, saw string');
    }
    try {
      asserts.null('', 'Custom message');
    } catch (e) {
      asserts.isAssertsError(e);
      expect(e.message).toEqual('Custom message');
    }
  });
  test('asserts.nullish', () => {
    asserts.nullish(null);
    asserts.nullish(undefined);
    try {
      asserts.nullish('');
      throw new Error();
    } catch (e) {
      asserts.isAssertsError(e);
      expect(e.message).toEqual('Expected nullish, saw string');
    }
    try {
      asserts.nullish('', 'Custom message');
    } catch (e) {
      asserts.isAssertsError(e);
      expect(e.message).toEqual('Custom message');
    }
  });
  test('asserts.instanceof', () => {
    asserts.instanceof(new Error(), Error);
    try {
      asserts.instanceof('', Error);
      throw new Error();
    } catch (e) {
      expect(e).toBeInstanceOf(asserts.Error);
      expect(e.message).toEqual('Expected instanceof Error, saw string');
    }
    try {
      asserts.instanceof('str', Error, 'Expected Error, saw %t "%v"');
    } catch (e) {
      asserts.isAssertsError(e);
      expect(e.message).toEqual(`Expected Error, saw string "str"`);
    }
  });
});

import { isExists } from './predicates';

function assert(target) {
  return ({
    defaultErrorMsgFormatter(expectedType, receivedType) {
      return `Expected ${ expectedType }, received: ${ receivedType }`;
    },

    is(type, errorFormatter = this.defaultErrorMsgFormatter) {
      const actualType = typeof target;

      if(actualType !== type) {
        const msg = errorFormatter(type, actualType);
        throw new TypeError(msg);
      }
    },

    isOptional(type, errorFormatter) {
      isExists(target) && this.is(type, errorFormatter);
    },

  })
};

export default assert;

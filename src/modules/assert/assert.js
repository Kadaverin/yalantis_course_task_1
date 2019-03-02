import { isPresent } from './predicates';

function assert(target) {
  return ({
    defaultErrorMsgFormatter: (expectedType, receivedType) => {
      return `Expected ${ expectedType }, recieved: ${ receivedType }`
    },

    is: function (type, errorFormatter = this.defaultErrorMsgFormatter) {
      const actualType = typeof target;

      if(actualType !== type) {
        const msg = errorFormatter(type, actualType);
        throw new TypeError(msg);
      }
    },

    isOptional: function(type, errorFormatter) {
      isPresent(target) && this.is(type, errorFormatter);
    },

  })
};

export default assert;

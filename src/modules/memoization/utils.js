import assert from './../assert';

export function validateArgs(func, keyFormatter){
  assert(func).is('function');
  assert(keyFormatter).isOptional('function');
};

export function initializeCache(func) {
  if(!func.cache) {
    func.cache = {};
  }
};

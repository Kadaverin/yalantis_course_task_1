import assert from './../assert';

function validateArgs(func, keyFormatter){
  assert(func).is('function');
  assert(keyFormatter).isOptional('function');
}

function initializeCache(func) {
  if(!func.cache) {
    func.cache = {};
  }
}

function memoization(func, cacheKeyFormatter) {

  validateArgs(func, cacheKeyFormatter);
  initializeCache(func);

  return function () {
    const keyFormatterFunc = cacheKeyFormatter || JSON.stringify;
    let argsKey = keyFormatterFunc(arguments);

    if(func.cache.hasOwnProperty(argsKey)){
      console.log('from cache')
      return func.cache[ argsKey ];
    }

    const result = func.apply(this, arguments);
    func.cache[ argsKey ] = result;

    return result;
  }
}

export default memoization;
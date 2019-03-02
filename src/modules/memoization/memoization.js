import { validateArgs, initializeCache } from './utils';

function memoization(func, cacheKeyFormatter = JSON.stringify) {

  validateArgs(func, cacheKeyFormatter);
  initializeCache(func);

  return function () {
    let argsKey = cacheKeyFormatter(arguments);

    if(func.cache.hasOwnProperty(argsKey)){
      console.info('getting result from cache');
      return func.cache[ argsKey ];
    }

    const result = func.apply(this, arguments);
    func.cache[ argsKey ] = result;

    return result;
  }
}

export default memoization;

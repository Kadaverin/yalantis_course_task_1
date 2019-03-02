
export const add = (a, b) => a + b;

export const addAll = (...args) => args.reduce(add, 0);

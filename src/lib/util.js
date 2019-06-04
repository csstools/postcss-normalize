export const assign = (...objects) => Object.assign(...objects);
export const create = (...objects) => assign(Object.create(null), ...objects);

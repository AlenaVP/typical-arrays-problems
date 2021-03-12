function validData (array) {
  return (array === undefined) ? false : ((typeof array == Array) || (array.length > 0) ? true : false);
}

exports.min = function min (array) {
  return validData (array) ? array.reduce((m, a) => !isNaN(m) && !isNaN(a) ? Math.min(m, a) : 0) : 0;
}

exports.max = function max (array) {
  return validData (array) ? array.reduce((m, a) => !isNaN(m) && !isNaN(a) ? Math.max(m, a) : 0) : 0;
}

exports.avg = function avg (array) {
  return validData (array) ? array.reduce((s, a) => !isNaN(s) && !isNaN(a) ? s + a : 0) / array.length : 0;
}

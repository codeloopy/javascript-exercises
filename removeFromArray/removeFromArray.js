const removeFromArray = function(array, ...removes) {
  return array.filter(array => array != removes);
}

module.exports = removeFromArray

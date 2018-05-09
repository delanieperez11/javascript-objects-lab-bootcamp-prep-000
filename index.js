var recipes = {'prop': 1, 'prop2': 2}

function updateObjectWithKeyAndValue(object, key, value) {
  recipes['prop'] = 1;
  recipes['prop2'] = 2
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  Object.assign({'prop': 1, 'prop2': 2})
  return recipes
}


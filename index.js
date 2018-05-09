var recipes = { recipe: 'object'}

function updateObjectWithKeyAndValue(object, key, value) {
  recipes['prop'] = 1;
  recipes['prop2'] = 2
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes.assign({}, recipes, { ['prop']: 1 })
  return recipes.assign({}, recipes, { ['prop2']: 2 })
}


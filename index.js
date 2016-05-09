'use strict'

const units = require('./db/units')
const ingredients = require('./db/ingredients')
const cocktails = require('./db/serious-eats-25')

for (const cocktail of cocktails) {
  console.log(`# ${cocktail.name}`)
  console.log('')
  for (const ingredient of cocktail.ingredients) {
    const info = ingredients.find(i => i.type === ingredient.type)
    const brand = (info.brand ? info.brand : info.type)
    const unit = units[ingredient.unit][ingredient.amount[1] === 1 ? 0 : 1]
    const amount = (ingredient.amount[0] === ingredient.amount[1] ? `${ingredient.amount[0]}` : `${ingredient.amount[0]} to ${ingredient.amount[1]}`)

    console.log(`- ${amount} ${unit} of ${brand}`)
  }
  console.log('')
}

// const unitIds = new Set(cocktails.reduce((mem, item) => {
//   return mem.concat(item.ingredients.reduce((mem, item) => {
//     return mem.concat([item.unit])
//   }, []))
// }, []))
//
// console.log(unitIds)
//
// const ingredientTypes = new Set(cocktails.reduce((mem, item) => {
//   return mem.concat(item.ingredients.reduce((mem, item) => {
//     return mem.concat([item.type])
//   }, []))
// }, []))
//
// console.log(Array.from(ingredientTypes).sort())
//
// const names = cocktails.map(item => item.name)
//
// console.log(names)

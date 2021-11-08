const logger = require('./logger')
const utilHelper = require('./util/helper')
const validateFormatter = require('../validator/Formatter')
//const underScore = require('underscore')
const load = require('lodash')

logger.names();
logger.welcome(); 
console.log(logger.urlG);

utilHelper.date();
utilHelper.month();
utilHelper.BatchInfo();

console.log(validateFormatter.trimStr());
console.log(validateFormatter.lowerCase());
console.log(validateFormatter.upperCase());

console.log("----------------------------------");

console.log(load.first(["apple","orange"]))
console.log(load.first(["apple","orange"],2))
console.log(load.last(["apple","orange"]))
console.log(load.last(["apple","orange","mango"],2))
let a = load.chunk(['jan','feb','mar','apr','may','june','july','aug','sept','oct','nov','dec'],3)
console.log(a)
console.log(load.tail([1,2,3,4,5,6,7,8,9]));
let union = load.union([1,2,3],[5,4,2,3,6],[8,2,3,4,5,6],[1,2,3,6,7,8,11],[4,4,7,3,12,13])
console.log(union)
let pairs = load.fromPairs([["horror","The Titanic"],["drama","Titanic"],["a","1"],["b","2"],["c","3"]])
console.log(pairs)

//all working fine.. but iam having prob  in git push... sit btw i havenot add git clone
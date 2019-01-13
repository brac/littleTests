const concatStrings = (str1, str2) => {
  if (str1 === undefined || str2 === undefined) throw new Error('Please provide two strings')
  return str1 + str2
}

const squareNumber = (num) => {
  if (num === undefined) throw new Error('Please provide a number')
  return num * num
}

module.exports = {
  concatStrings,
  squareNumber
}

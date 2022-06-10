
function sortStringArray(arr) {
   return arr.sort((a,b) => a.localeCompare(b))
}

console.log(sortStringArray(['string', 'abbb', 'aa','b', 'ba']));
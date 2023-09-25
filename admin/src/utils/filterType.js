export function FilterType(array, filter, type) {
  const types=[]

  if(type === 'event'){
    for (let i of array) {
      if (i.locationType === filter) {
        types.push(i)
      }
    }
  }
  else if(type === 'eventStatus'){
    for (let i of array) {
      if (i.status === filter) {
        types.push(i)
      }
    }
  }
  else {
    for (let i of array) {
      if (i.type === filter) {
        types.push(i)
      }
    }
  }
return types
}

var mergeTwoLists = function(l1, l2) {
  let l1Vals = fetchVals([], l1);
  let l2Vals = fetchVals([], l2);
  let sortVals = l1Vals.concat(l2Vals).sort()
  console.log(sortVals)

};
function fetchVals(arr, obj) {
  arr.push(obj.val)
  if (obj.next) {
    return fetchVals(arr, obj.next)
  }
  return(arr)
}

mergeTwoLists(
  {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 4,
        next: null
      }
    }
  },
  {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
)
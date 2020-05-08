let obj = new Object();
obj.name = 'xxx';

(function(obj_p) {
  let copy = JSON.parse(JSON.stringify(obj_p))
  copy.name = 'xxx1';
  copy.age = '10';
  console.log(copy)
  console.log(obj_p)
  console.log(obj)
})(obj)
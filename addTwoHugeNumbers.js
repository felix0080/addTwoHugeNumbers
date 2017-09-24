   function addTwoHugeNumbers(a, b) {
       var x = [];
       var y = [];
       var current;
       var summed;
       var result = [];
     
//Build an array of values for each linked list
//Add in enough zeroes to make value from each node 4 digits long
    function buildArr(list,arr){
        current = list;
    while(current !== null){
             var value = current.value;
        value = value.toString();
        if (value.length == 1) {
          value = '000' + value;
        }
       if (value.length == 2) {
          value = '00' + value;
        }
        if (value.length == 3) {
          value = '0' + value;
        }
        arr.push(value);
        current = current.next; 
    }
    }
    buildArr(a,x);
    buildArr(b,y);
//
var carry = 0;
var summed = [];
     
//join and split arrays to space them one digit at a time
x = x.join('');
y = y.join('');
x = x.split('');
y = y.split('');
x = x.map(Number);
y = y.map(Number);

var lengthX  = x.length;
var lengthY = y.length;
var dif  = Math.abs(lengthX - lengthY);
     
     //Find out which array is shorter and add zeroes to front (reverse, push and reverse again) to make arrays equal length
if (lengthX > lengthY) {
  y = y.reverse();
  for (var index = 0; index < dif;index++){
    y.push(0);
  }
  y = y.reverse();
}
if (lengthX < lengthY) {
  x = x.reverse();
  for (var index = 0; index < dif;index++){
  x.push(0);
  }
  x = x.reverse();
}
x = x.reverse();
y = y.reverse();

//Work through the (reversed) Arrays adding each position of x + y together and carrying the remainder, pushing the resulting gigure to summed.
for (var i = 0; i < y.length; i++) {
  
  if (y[i] + x[i] + carry > 9) {
    summed.push((y[i] + x[i] + carry)-10);
    carry = 1;
  } else {
    summed.push((y[i] + x[i] +  carry));
    carry  = 0;
  }
}
summed.push(carry);

var d = [];

//split array back in to 4 digit chunks same as input and remove leading zeroes
function zeroes(s) {
  while (summed.length !== 0) {
  x = s.splice(0,4).join('');

  if (x === '') {
    return;
  }
if (x[3] == '0' && x.length > 1){
  x = x.slice(0,3);
   }
    
  if (x == '00'|| x == '000') {
    x = '0';
  }
  x = x.split('').reverse();
  x = x.join('');
  d.push(parseInt(x,10));
}
}

zeroes(summed);
     //Finally reverse array and remove zero from front if present
d.reverse();
    if (d[0] == '0' && d != '0') {
      d = d.slice(1);
    }
    return d;
}
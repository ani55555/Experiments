import * as math from 'mathjs'
var x = [1, 2, 3, 4, 5, 6]
var y = [7, 4, 6, 7, 3, 1]
var z = [-2, 5, 3, -100, 0]



function finder(q, n){
  for(var i=0; i<q.length; i++){
    for(var j=0; j<q.length; j++){
      if (q[i] + q[j] == n){
        console.log(q[i], q[j]);
        return 0;
      }
    }
  }
  console.log("kms");
}


//blox = [
//          [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  //        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    //      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]

var blox = math.ones(3, 15);
blox.set([0, 0], 0);
blox.set([2, 5], 0);
blox.set([2, 6], 0);
blox.set([2, 7], 0);

console.log(blox.get([0, 0]));

blox.forEach(function (value, index, matrix){
  if (blox.get(index)){
    console.log(index, value)

  }
})

var matrix = [];
for(var y=0; y<3; y++){
  matrix[y] =[]
  for (var z=0; z<14; z++){
    matrix[y][z] = 1;
  }
}
if(matrix[0][0]){
  console.log(matrix[0][0]);

}


//math.subset(blox, math.index(0, 0), 0)
//math.subset(blox, math.index(1, 7), 0)
//console.log(blox.subset(math.index(0,0)))
//console.log(blox.subset(math.index(5,5)))




//finder(x, 11);
//finder(x, 1);
//finder(x, 3);
//finder(y, 0);
//finder(y, 23);
//finder(y, 8);
//finder(z, -102);
//finder(z, -2);
//tester(blox);

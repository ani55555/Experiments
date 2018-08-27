
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


finder(x, 11);
finder(x, 1);
finder(x, 3);
finder(y, 0);
finder(y, 23);
finder(y, 8);
finder(z, -102);
finder(z, -2);

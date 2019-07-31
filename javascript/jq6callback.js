function disp(){
   var a = document.getElementById("inp").value;
    checkPrime(a,(res)=>{
    document.getElementById("result").innerHTML = res; 
    });
}

function checkPrime(a,callback){ 

  //  console.log(res);
   var p=a%2;
    if(p == 0) 
    callback("Prime");
    else
   callback("Not Prime");
}
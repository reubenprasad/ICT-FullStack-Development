function add(a,b)
{
    var c = a + b;
    return(c);
}
function sub(a,b)
{
    var c = a - b;
    return(c);
}
function mul(a,b)
{
    var c = a * b;
    return(c);
}
function div(a,b)
{
    var c = a / b;
    return(c);
}
function calc()
{
var x = document.getElementById("n1").value;
var y = document.getElementById("n2").value;
var n1 = parseFloat(x);
var n2 = parseFloat(y);
var tmp = document.getElementById("op").value;
if(tmp == '+')
{
    var n3 = add(n1,n2);
    document.getElementById("res").innerHTML = "<b>"+n3+"</b>"; 
}
else if(tmp == '-')
{
var n3 = sub(n1,n2);
document.getElementById("res").innerHTML = "<b>"+n3+"</b>";
}
else if(tmp == '*')
{
var n3 = mul(n1,n2);
document.getElementById("res").innerHTML = "<b>"+n3+"</b>";
}
else if(tmp == '/')
{
var n3 = div(n1,n2);
document.getElementById("res").innerHTML = "<b>"+n3+"</b>";
}
else
alert("Select an operator");
}
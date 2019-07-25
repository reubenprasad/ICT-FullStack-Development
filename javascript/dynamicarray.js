var i=0;
var names = Array();
var tempname = "";
function appendname()
{
    alert("a");
   
    names[i]=document.getElementById("mov").value;
   

    tempname+= names[i]+ "<br>";
    alert(tempname);

    document.getElementById("pr").innerHTML = tempname.toString();
    i++;
}
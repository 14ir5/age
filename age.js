function kl()
{
    var x=document.getElementById("userinput").value;
    var y=x*365;
    document.write("your age in days is :",y);
    /*var k=document.createElement('h1');
    var answer=document.createTextNode('You are '+ y +' days');
    k.setAttribute('id','age');
    k.appendChild(answer);
    document.getElementsByName('body')[0].appendChild(k);*/
}
function rt(){
    
document.getElementById("userinput").value=null;
}

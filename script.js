function calculatelove(){

let name1 = document.getElementById('name1').value;
let name2 = document.getElementById('name2').value;

if(name1!="" && name2!="")
    {
    let percentage = Math.random()*100;
    let lovepercentage = Math.floor(percentage);
    document.getElementById("lovepercentage").textContent =`${lovepercentage}%!`;
}
else
{
    document.getElementById("lovepercentage").textContent ="please enter both name!";
}
}
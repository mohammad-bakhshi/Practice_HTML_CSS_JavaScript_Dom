document.getElementById('box').onmouseover=function()
{
    let element=document.getElementById('box');
    element.innerHTML='onmouseover';
    element.style.backgroundColor='blue';
}


document.getElementById('box').onmouseout=function()
{
    let element=document.getElementById('box');
    element.innerHTML='onmouseout';
    element.style.backgroundColor='red';
}
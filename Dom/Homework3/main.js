function copyParentText() {
    let parentText=document.getElementById('parentText').innerHTML;
    let targetText=document.getElementById('targetText').innerHTML;
    let childText=document.getElementById('childText').innerHTML;
    document.getElementById('targetText').innerHTML=parentText+targetText+childText+targetText;
}


function copyChildText()
{
    let targetText=document.getElementById('targetText').innerHTML;
    let childText=document.getElementById('childText').innerHTML;
    document.getElementById('targetText').innerHTML=childText+targetText;
}
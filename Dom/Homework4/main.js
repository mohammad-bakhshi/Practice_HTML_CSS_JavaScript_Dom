





var text=document.createElement('h1');
text.innerHTML='My Tasks';
text.style.color='red';
text.style.marginLeft='10px';

var ol=document.createElement('ol');
ol.style.color='black';
ol.type='i';
array=['user dashboard','admin dashboard','authentication','about page','contact page'];
for (var i=0; i<array.length; i++){

    var li=document.createElement('li');



    
    li.innerHTML=array[i];
    if (i===2) {
        var ul=document.createElement('ul');
        ul.style.color='black';
        list=['login','register','logout'];
        for (let index = 0; index < list.length; index++) {
            var content=document.createElement('li');
            content.innerHTML=list[index];
            if (index===1) {
                content.style.textDecoration='line-through';
            }
            ul.appendChild(content);
        } 
        li.appendChild(ul)
    }

    if (i===4) {
        li.style.textDecoration='line-through';
    }
    ol.appendChild(li);
}


var div = document.createElement("div");
div.style.border = "4px solid black";
div.style.height = "400px";
div.style.width="400px"
div.style.color = "white";



document.getElementById("main").appendChild(div);
div.appendChild(text);
div.appendChild(ol);
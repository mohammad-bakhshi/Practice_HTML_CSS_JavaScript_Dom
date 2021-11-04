function repeat() {
    let text=document.getElementById('green').innerHTML;
    document.getElementById('green').innerHTML+=text;
}


document.getElementById('green').onclick=repeat;
let personData = [
    {
        uid: 1,
        firstName: "Ali",
        lastName: "Mahdavi"
    },
    {
        uid: 2,
        firstName: "Reza" ,
        lastName: "Shahmardan"
    },
    {
        uid: 3,
        firstName: "Hassan",
        lastName: "Qolami" 
    },
    {
        uid: 4,
        firstName: "Morteza",
        lastName: "Hamedani" 
    },
    {
        uid: 5,
        firstName: "Sina",
        lastName: "Hejazi" 
    },
    {
        uid: 6,
        firstName: "Hadi",
        lastName: "Sadri" 
    }
]

let additionalPersonData = [
    {
        uid: 3,
        position: "UI Designer",
        city: "Biarjmand" 
    },
    {
        uid: 1,
        position: "Back-End Develope",
        city: "Taleqan" 
    },
    {
        uid: 2,
        position: "Front-End Developer",
        city: "Behbahan"
    },
    {
        uid: 4,
        position: "Devops",
        city: "Shiraz"
    },
    {
        uid: 6,
        position: "Server Admin",
        city: "Tehran"  
    },
    {
        uid: 5,
        position: "Product Manager",
        city: "Hamedan" 
    }
]

let result = [];

for(let i=0; i<personData.length; i++) {
    result.push({
   ...personData[i], 
   ...(additionalPersonData.find((itmInner) => itmInner.uid === personData[i].uid))}
  );
}

let myTable = document.querySelector('#table');

let headers=['UID','Firstname','Lastname','position','city'];

let table=document.createElement('table');



let headerRow=document.createElement('tr');

headers.forEach(headerText => {
    let header = document.createElement('th');
    header.style.border='2px solid black';
    header.style.color='white';
    header.style.backgroundColor='black';
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
});

table.appendChild(headerRow);

result.forEach(emp => {
    let row = document.createElement('tr');

    Object.values(emp).forEach(text => {
        let cell = document.createElement('td');
        cell.style.border='2px solid black';
        let textNode = document.createTextNode(text);
        cell.appendChild(textNode);
        row.appendChild(cell);
    })

    table.appendChild(row);
});

table.style.border='2px solid black';

myTable.appendChild(table);


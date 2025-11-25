
const btnAdauga = document.getElementById('btnAdauga');
const inputActivitate = document.getElementById('inputActivitate');
const listaActivitati = document.getElementById('listaActivitati');


const luni = [
    "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
    "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
];


btnAdauga.addEventListener('click', function() {
    
    const textActivitate = inputActivitate.value.trim(); 

   
    if (textActivitate !== "") {
        
       
        const elementNou = document.createElement('li');

        
        const dataCurenta = new Date();
        const ziua = dataCurenta.getDate();
        const lunaText = luni[dataCurenta.getMonth()]; 
        const anul = dataCurenta.getFullYear();

        
        elementNou.textContent = `${textActivitate} – adăugată la: ${ziua} ${lunaText} ${anul}`;

      
        listaActivitati.appendChild(elementNou);

     
        inputActivitate.value = "";
    } else {
        alert("Te rog să introduci o activitate!");
    }
});
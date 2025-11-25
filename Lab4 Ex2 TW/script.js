
window.addEventListener('DOMContentLoaded', () => {
    
   
    const divDetalii = document.getElementById('detalii');
    const spanData = document.getElementById('dataProdus');
    const btnDetalii = document.getElementById('btnDetalii');

   

    
    divDetalii.classList.add('ascuns');


    const dataCurenta = new Date();
    const ziua = dataCurenta.getDate();
    const an = dataCurenta.getFullYear();

  
    const luni = [
        "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
        "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
    ];
    const lunaText = luni[dataCurenta.getMonth()];

  
    spanData.textContent = `${ziua} ${lunaText} ${an}`;


  
    
    btnDetalii.addEventListener('click', () => {
     
        divDetalii.classList.toggle('ascuns');

        if (divDetalii.classList.contains('ascuns')) {
            btnDetalii.textContent = "Afișează detalii";
        } else {
           
            btnDetalii.textContent = "Ascunde detalii";
        }
    });

});
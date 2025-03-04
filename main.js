//get inputs and other elements 
const frontCard = document.getElementById("front"); 
const backCard = document.getElementById("back"); 

const cardNumberInput = document.querySelector("#card-number"); 
const cardHolderInput = document.querySelector("#card-holder"); 
const expMonthInput = document.querySelector("#exp-month"); 
const expYearInput = document.querySelector("#exp-year");
const cvvInput = document.querySelector("#cvv"); 


const cardNumberBox = document.querySelector("#card-number-box"); 
const cardHolderBox = document.querySelector("#card-holder-name"); 
const expMonthBox = document.querySelector("#exp-mm");  
const expYearBox = document.querySelector("#exp-yy");  
const cvvBox = document.querySelector("#cvv-box");

const paymentForm = document.querySelector("#payment-form"); 



//set actions to events 
cardNumberInput.addEventListener("keyup", (e) => {
    let value = e.target.value; 

    
    if(isNaN(Number(value))) {
        cardNumberInput.value = ""; 
        return;
    } else if(String(value).length == 0) {
        cardNumberBox.textContent = "################";
    } else {
        cardNumberBox.textContent = value; 
    }
    

}); 

cardHolderInput.addEventListener("keyup", (e) => {
    let value = e.target.value; 

    if(value && value != "") {
        cardHolderBox.textContent = value; 
    } else {
        cardHolderBox.textContent = "full name"; 
    }
}); 

expMonthInput.addEventListener("change", (e) => {
    let { value } = e.target;

    if(value && String(value).length != 0) {
        expMonthBox.textContent = value; 
    } else {
        expMonthBox.textContent = "mm"
    }
}); 

expYearInput.addEventListener("keyup", (e) => {
    let { value } = e.target;

    if(!value || String(value).length == 0 || String(value).length > 4 || isNaN(Number(value))) {
        expYearBox.textContent = "yyyy"; 
        expYearInput.value = ""; 
    } else {
        expYearBox.textContent = value; 
    }
});

cvvInput.addEventListener("focus", (e) => {
    frontCard.style.transform = "perspective(1000px) rotateY(180deg)"; 
    backCard.style.transform = "perspective(1000px) rotateY(0deg)"; 
});

cvvInput.addEventListener("blur", (e) => {
    frontCard.style.transform = "perspective(1000px) rotateY(0)"; 
    backCard.style.transform = "perspective(1000px) rotateY(180deg)"; 
}); 

cvvInput.addEventListener("keyup", (e) => {
    let { value } = e.target; 

    if(!value || String(value).length == 0 || isNaN(Number(value)) || String(value).length > 4) {
        cvvBox.textContent = ""; 
        cvvInput.value = ""; 
    } else {
        cvvBox.textContent = value; 
    }
}); 

paymentForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const paymentFormData = new FormData(paymentForm);
    
    console.log(paymentFormData.get("card-number")); 
    console.log(paymentFormData.get("card-holder")); 
    console.log(paymentFormData.get("exp-month")); 
    console.log(paymentFormData.get("exp-year")); 
    console.log(paymentFormData.get("cvv")); 
    
    cardNumberInput.value = ""; 
    cardHolderInput.value = "";
    expMonthInput.value = "month";
    expYearInput.value = ""; 
    cvvInput.value = ""; 

    cardNumberBox.textContent = "################";
    cardHolderBox.textContent = "full name"; 
    expMonthBox.textContent = "mm";
    expYearBox.textContent = "yyyy";  
});



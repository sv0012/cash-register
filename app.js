const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-btn");
const cashGiven = document.querySelector("#cash");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000,500,100,20,10,5,1]

checkButton.addEventListener("click", function validate(){
    hideMessage();
    console.log(typeof(parseInt(billAmount.value)));
    if(billAmount.value > 0){
        if(parseInt(cashGiven.value) >= parseInt(billAmount.value)){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }
        else {
            showMessage("The cash provided should be equal to or more than the bill amount.");
        }
    }
    else{
        showMessage("Invalid bill amount")
        
    }})

    function hideMessage(){
        message.style.display = "none";
    }

    function  showMessage(msg){
        message.style.display = "block";
        message.innerText = msg;
    }

    function calculateChange(amount){
        for(let i = 0; i < availableNotes.length; i++){
            const numberOfNotes = Math.trunc(amount/ availableNotes[i]);
            amount %= availableNotes[i];
            noOfNotes[i].innerText = numberOfNotes;
        }
    }
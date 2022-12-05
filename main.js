let  hamButton = document.querySelector(".hamNav")
let  navLinks = document.querySelector('.navLinks')
let  subNews = document.querySelector('.containerNews')

hamButton.addEventListener("click", dropDownHam);

function dropDownHam(){
    hamButton.classList.toggle("actHamNav")
    navLinks.classList.toggle("actNavLinks")
    subNews.classList.toggle("actContainerNews")
}

/* ------------------------------------------------------------- */

let firstName = document.querySelector("#inFirstName")
let lastName = document.querySelector("#inLastName")
let mobileNumber = document.querySelector("#inNumber")
let email = document.querySelector("#inEmail")
let ticketsNumber = document.querySelector("#inNumTic")
let errorMsg = document.querySelector(".errorMsg")
let checkBtn = document.querySelector("#check")

let handicapSelected = document.querySelector("#handicap")
let vipSelected = document.querySelector("#vip")
let floorSelected = document.querySelector("#floor")
let seatedSelected = document.querySelector("#seated")

let ticket = ""

document.querySelectorAll('.ticketType button').forEach(item => {
    item.addEventListener('click', ticketType => {
    ticket = item.value
    console.log(item.value)
    })
 })

function checkInput(){
    if (firstName.value == "" || lastName.value == "" || mobileNumber.value == "" || email.value == "" || handicapSelected.value == "" || vipSelected.value == "" || floorSelected.value == "" || seatedSelected.value == ""){
        errorMsg.innerHTML = "One or multiple fields has missing data, please check again."

    }else{
        errorMsg.innerHTML = ""
        const data = {
            firstName:firstName.value,
            lastName:lastName.value,
            mobileNumber:mobileNumber.value,
            email:email.value,
            ticketsNumber:ticketsNumber.value,

            ticketType:ticket
        }
        
        // JSON.stringify needed to tell the browser what kind of object the data is
        localStorage.setItem("userData", JSON.stringify(data))
        window.location.href = 'payment.html'
    }
}

checkBtn.addEventListener("click",checkInput)
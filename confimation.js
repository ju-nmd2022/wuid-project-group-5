let fullName = document.querySelector(".fullName")
let phone = document.querySelector(".phone")
let gmail = document.querySelector(".gmail")
let ticketsNum = document.querySelector(".ticketsNum")
let ticketType = document.querySelector(".ticketTypeSelected")




const data = JSON.parse(localStorage.getItem("userData"))

function addUserData (){
    ticketsNum.innerHTML = data.ticketsNumber
    fullName.innerHTML = `${data.firstName} ${data.lastName}`
    gmail.innerHTML = data.email
    phone.innerHTML = data.mobileNumber
    ticketType.innerHTML = data.ticketType
    


}
addUserData()
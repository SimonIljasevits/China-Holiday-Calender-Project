
async function ShowHolidays(){
    await LoadHolidays();
}

async function LoadHolidays(){
    var response = await fetch("https://raw.githubusercontent.com/SimonIljasevits/China-Holiday-Calender-Project/refs/heads/main/China%20Holiday%20Calender%20Database.json");
    const holidayArray = await response.json();

    var holidayContainer = GetHolidayContainer();
    for (const holidayDate in holidayArray){
        const holiday = holidayArray[holidayDate]
        AddHoliday(holidayContainer, holiday)
    }
}
// Holiday: date, name, isOffDay

function GetHolidayContainer() { return document.getElementsByClassName("holiday-container")[0]}

function AddHoliday(holidayContainer, holiday) {
    let isOffDay;
    if (holiday["isOffDay"]){
        isOffDay = "It is an off day!"
    }
    else {
        isOffDay = "It is NOT an off day :("
    }

    var holidayElement = document.createElement("div");
    holidayElement.className = "holiday";
    holidayElement.innerHTML = `
    <div class="holiday"
    <p>${holiday["date"]}</p>
    <p>${holiday["name"]}</p>
    <p>Is Off Day: ${holiday["isOffDay"]}</p>
    </div>
    `

    holidayContainer.appendChild(holidayElement);

}

function OnAddSocialCredit() {
    console.log("OnAddSocialCredit")
    const socialCreditDiv = document.getElementsByClassName("social-credit")[1];
    if (socialCreditDiv.hasChildNodes())
        return;
    const chinaGif = document.createElement("img");
    chinaGif.setAttribute("src", "https://media1.tenor.com/m/KjyDoVIomkcAAAAC/social-credit-social-credit-score.gif")
    socialCreditDiv.appendChild(chinaGif);
    setTimeout(() => {window.scrollTo(0,document.body.scrollHeight)}, 100)
    setTimeout(() => {socialCreditDiv.removeChild(chinaGif)}, 2600)
}

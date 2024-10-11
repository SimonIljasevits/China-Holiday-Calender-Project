
async function ShowHolidays(){
    await LoadHolidays();
}

async function LoadHolidays(){
    /*var response = await fetch("https://api.sampleapis.com/coffee/iced");
    var json = await response.json();
    console.log(JSON.stringify(json));*/
    //Because of the non-cors API I had to hardcode my JSON
    
    const holidayArray = JSON.parse('{"2024-01-01":{"date":"2024-01-01","name":"元旦","isOffDay":true},"2024-02-04":{"date":"2024-02-04","name":"春节","isOffDay":false},"2024-02-10":{"date":"2024-02-10","name":"春节","isOffDay":true},"2024-02-11":{"date":"2024-02-11","name":"春节","isOffDay":true},"2024-02-12":{"date":"2024-02-12","name":"春节","isOffDay":true},"2024-02-13":{"date":"2024-02-13","name":"春节","isOffDay":true},"2024-02-14":{"date":"2024-02-14","name":"春节","isOffDay":true},"2024-02-15":{"date":"2024-02-15","name":"春节","isOffDay":true},"2024-02-16":{"date":"2024-02-16","name":"春节","isOffDay":true},"2024-02-17":{"date":"2024-02-17","name":"春节","isOffDay":true},"2024-02-18":{"date":"2024-02-18","name":"春节","isOffDay":false},"2024-04-04":{"date":"2024-04-04","name":"清明节","isOffDay":true},"2024-04-05":{"date":"2024-04-05","name":"清明节","isOffDay":true},"2024-04-06":{"date":"2024-04-06","name":"清明节","isOffDay":true},"2024-04-07":{"date":"2024-04-07","name":"清明节","isOffDay":false},"2024-04-28":{"date":"2024-04-28","name":"劳动节","isOffDay":false},"2024-05-01":{"date":"2024-05-01","name":"劳动节","isOffDay":true},"2024-05-02":{"date":"2024-05-02","name":"劳动节","isOffDay":true},"2024-05-03":{"date":"2024-05-03","name":"劳动节","isOffDay":true},"2024-05-04":{"date":"2024-05-04","name":"劳动节","isOffDay":true},"2024-05-05":{"date":"2024-05-05","name":"劳动节","isOffDay":true},"2024-05-11":{"date":"2024-05-11","name":"劳动节","isOffDay":false},"2024-06-10":{"date":"2024-06-10","name":"端午节","isOffDay":true},"2024-09-14":{"date":"2024-09-14","name":"中秋节","isOffDay":false},"2024-09-15":{"date":"2024-09-15","name":"中秋节","isOffDay":true},"2024-09-16":{"date":"2024-09-16","name":"中秋节","isOffDay":true},"2024-09-17":{"date":"2024-09-17","name":"中秋节","isOffDay":true},"2024-09-29":{"date":"2024-09-29","name":"国庆节","isOffDay":false},"2024-10-01":{"date":"2024-10-01","name":"国庆节","isOffDay":true},"2024-10-02":{"date":"2024-10-02","name":"国庆节","isOffDay":true},"2024-10-03":{"date":"2024-10-03","name":"国庆节","isOffDay":true},"2024-10-04":{"date":"2024-10-04","name":"国庆节","isOffDay":true},"2024-10-05":{"date":"2024-10-05","name":"国庆节","isOffDay":true},"2024-10-06":{"date":"2024-10-06","name":"国庆节","isOffDay":true},"2024-10-07":{"date":"2024-10-07","name":"国庆节","isOffDay":true},"2024-10-12":{"date":"2024-10-12","name":"国庆节","isOffDay":false}}');
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
    <p>IsOffDay: ${holiday["isOffDay"]}</p>
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

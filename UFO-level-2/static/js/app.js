// Starter Code
let tableData = data;

// Create Variables
let tableBody = d3.select("tbody");
let button = d3.select("#filter-btn");
let inputFieldDate = d3.select("#datetime");
let inputFieldCity = d3.select("#city");
let inputFieldState = d3.select("#state");
let inputFieldShape = d3.select("#shape");
let inputFieldCountry = d3.select("#country");

let columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Assign Function to Render Table
let dataRender = (dataValue) => {
    dataValue.forEach(ufoSightings => {
        let row = tableBody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column]))
    });
}

//Render Table
dataRender(tableData);

// Create Button & Event Listener
button.on("click", () => {

    d3.event.preventDefault();

    let inputDate = inputFieldDate.property("value").trim();
    let inputCity = inputFieldCity.property("value").toLowerCase().trim();
    let inputState = inputFieldState.property("value").toLowerCase().trim();
    let inputShape = inputFieldShape.property("value").toLowerCase().trim();
    let inputCountry = inputFieldCountry.property("value").toLowerCase().trim();

    let filterData = tableData;
    if (inputDate) {
        filterData = filterData.filter(tableData => tableData.datetime === inputDate);
    }
    if (inputCity) {
        filterData = filterData.filter(tableData => tableData.city === inputCity);
    }
    if (inputState) {
        filterData = filterData.filter(tableData => tableData.state === inputState);
    }
    if (inputShape) {
        filterData = filterData.filter(tableData => tableData.shape === inputShape);
    }
    if (inputCountry) {
        filterData = filterData.filter(tableData => tableData.country === inputCountry);
    }

    tableBody.html("");

    dataRender(filterData);

})
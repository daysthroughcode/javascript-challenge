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
    let filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    let filterCity = tableData.filter(tableData => tableData.city === inputCity);
    let filterState = tableData.filter(tableData => tableData.state === inputState);
    let filterShape = tableData.filter(tableData => tableData.shape === inputShape);
    let filterCountry = tableData.filter(tableData => tableData.country === inputCountry);
    let filterCombined = tableData.filter(tableData => tableData.datetime === inputDate 
      && tableData.city === inputCity 
      && tableData.state === inputState 
      && tableData.shape === inputShape 
      && tableData.country === inputCountry);

    tableBody.html("");

    let response = {
        filterDate,
        filterCity,
        filterState,
        filterShape,
        filterCountry,
        filterCombined
    }

    if (response.filterCombined.length !== 0) {
        dataRender(filterCombined);

    } else if (response.filterCombined.length === 0 && (
        response.filterDate.length !== 0 || 
        response.filterCity.length !== 0 || 
        response.filterState.length !== 0 || 
        response.filterShape.length !== 0 || 
        response.filterCountry.length !== 0)) {
        dataRender(filterDate),
        dataRender(filterCity), 
        dataRender(filterState),
        dataRender(filterShape),
        dataRender(filterCountry);

    } else {
        tableBody.append("tr").append("td").text("No Entries Found");
    }
})
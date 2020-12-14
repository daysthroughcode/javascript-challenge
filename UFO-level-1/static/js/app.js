// Starter Code
let tableData = data;


// Create Variables
let tableBody = d3.select("tbody");
let button = d3.select("#filter-btn");
let inputFieldDate = d3.select("#datetime");
let inputFieldCity = d3.select("#city");
let columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Assign Function to Render Table
let dataRender = (dataValue) => {
    dataValue.forEach(ufoSightings => {
        let row = tableBody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column]))
    });
}

// Render Table
dataRender(tableData);

//Create Button & Event Listener
button.on("click", () => {

    d3.event.preventDefault();

    let inputDate = inputFieldDate.property("value").trim();
    let filterDate = tableData.filter(tableData => tableData.datetime === inputDate);

    tableBody.html("");

    let response = {
        filterDate
    }

    if (response.filterDate.length !== 0) {
        dataRender(filterDate);
    }
    
    else {
        tableBody.append("tr").append("td").text("No Entry Found");
    }
})
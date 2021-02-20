// from data.js
var tableData = data;
console.log(data);

// YOUR CODE HERE!
//create reference of table body
var tbody = d3.select("tbody");
//create reference for the filter button
var button =d3.select("#filter-btn")

//create variable for the date input into the filter field
var inputDate = d3.select("#datetime")
//log data to console
console.log(data);
//write data to console for each item in data object
data.forEach(function(logdata){
    console.log(logdata);
});

//create a function to append new data to table rows
data.forEach(function(logdata){
    console.log(logdata);
    var row = tbody.append("tr");
});

data.forEach(function(logdata){
    console.log(logdata);
    var row = tbody.append("tr");

    Object.entries(logdata).forEach(function([key,value]){
        console.log(key,value);
    });
});


data.forEach(function(logdata){
    console.log(logdata);
    var row = tbody.append("tr");
    Object.entries(logdata).forEach(function([key, value]){
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
});

// from data.js
var tableData = data;
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");



var button = d3.select("#filter-btn");
button.on("click",function()
{
    tbody.html("");

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(sighting=>sighting.datetime === inputValue);
    console.log(filteredData)

    filteredData.forEach(function(selections){
        console.log(selections);
        var row =tbody.append("tr");
        Object.entries(selections).forEach(function([key, value]){
            console.log(key, value);

            var cell = row.append("td");
            cell.text(value);
        });
    });
});

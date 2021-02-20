// from data.js
var tableData = data;
console.log(data);

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button =d3.select("#filter-btn")
var inputDate = d3.select("#datetime")
var inputCity = d3.select("#city")
console.log(data);

data.forEach(function(logdata){
    console.log(logdata);
});

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

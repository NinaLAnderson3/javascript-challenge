// from data.js
var tableData = data;
console.log(data);

// YOUR CODE HERE!
var tbody = d3.select("tbody");
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
    Object.entries(logdata).forEach(function([key,value]){
        console.log(key, value);

        var cell = row.append("td");
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
// var table = d3.select("ufo-table");

// table.attr("class","table table-striped")

// var tbody = d3.select("tbody")

// var row = tbody.append("tr");
// row.append("td").text(tableData);


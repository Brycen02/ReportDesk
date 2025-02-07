function yearlyChart(questionsPerHour)
{
    const xValues = ["8:00AM","9:00AM","10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM", "6:00PM", "7:00PM", "8:00PM"] 
    const yValues = questionsPerHour
    
    new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          backgroundColor:"rgba(0,0,255,1.0)",
          borderColor: "Black",
          data: yValues
        }]
      },
      options:
      { 
        legend: {display: false},
        elements: {point: {radius: 6}}
      }
    });
    var table ="<table><tr><th>Hour</th><th>Total Traffic<th></tr>"+
    "<tr>"+ "<td>" +xValues[0] + "</td><td>" + yValues[0] + "</td></tr>" +
    "<tr>"+ "<td>" +xValues[1] + "</td><td>" + yValues[1] + "</td></tr>" +
    "<tr>"+ "<td>" +xValues[2] + "</td><td>" + yValues[2] + "</td></tr>" +
    "<tr>"+ "<td>" +xValues[3] + "</td><td>" + yValues[3] + "</td></tr>" +
    "<tr>"+ "<td>" +xValues[4] + "</td><td>" + yValues[4] + "</td></tr>" +
    "<tr>"+ "<td>" +xValues[5] + "</td><td>" + yValues[5] + "</td></tr>" +
    "<tr>"+ "<td>" +xValues[6] + "</td><td>" + yValues[6] + "</td></tr>" +
    "<tr>"+ "<td>" +xValues[7] + "</td><td>" + yValues[7] + "</td></tr>" +
    "<tr>"+ "<td>" +xValues[8] + "</td><td>" + yValues[8] + "</td></tr>" +
    "<tr>"+ "<td>" +xValues[9] + "</td><td>" + yValues[9] + "</td></tr>" +
    "<tr>"+ "<td>" +xValues[10] + "</td><td>" + yValues[10] + "</td></tr>" +
    "<tr>"+ "<td>" +xValues[11] + "</td><td>" + yValues[11] + "</td></tr>" +
    "<tr>"+ "<td>" +xValues[12] + "</td><td>" + yValues[12] + "</td></tr>"
    + "</table>";
    document.querySelector('[title="Table"]').innerHTML = table; 
}
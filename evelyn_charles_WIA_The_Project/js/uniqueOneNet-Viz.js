// Modernizr script for www.uniqueOne2000.net

/*if(){

}
*/

// Utilization of Google Charts

google.load("visualization", "1", {packages:["corechart"]});

google.setOnLoadCallback(vendorChart);

// vendorChart function
function vendorChart(){
	
	// data table with an array
	var data = google.visualization.arrayToDataTable([
		["Vendors", "Type"],
		["Computers", 4],
		["Car Parts", 2],
		["Appliances", 8],
		["Furnishings", 19],
		["Mobile", 9],
		["Clothing",3]
		]);

	// optional data
	var chartOptions = {
		is3D:true,
		pieStartAngle: 115,
		pieSliceText: "value",
		width: 425
		//legend:{position:"labeled"},
		//tooltip:{trigger:"none"}
		
	}

	// chart variable
	var chart = new google.visualization.PieChart(document.getElementById("vendorTypeChart"));

	// drawing the chart
	chart.draw(data, chartOptions);
}








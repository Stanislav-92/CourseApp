export const col1 = 'col1';
export const col2 = 'col2';
export const line1 = 'line1';
export const line2 = 'line2';

export const dataCol1 = {
	"title": {
		"text": "Monthly Average Rainfall"
	},
	"subtitle": {
		"text": "Source: WorldClimate.com"
	},
	"exporting": {},
	"chart": {
		"type": "column"
	},
	"chartID": {
		"value" : "col1"
	},
	"xAxis": {
		"categories": [],
		"crosshair": true
	},
	"yAxis": {
		"min": 0,
		"title": {
			"text": "Rainfall (mm)"
		}
	},
	"tooltip": {
		"headerFormat": "<span style=\"font-size:10px\">{point.key}</span><table>",
		"pointFormat": "<tr><td style=\"color:{series.color};padding:0\">{series.name}: </td><td style=\"padding:0\"><b>{point.y:.1f} mm</b></td></tr>",
		"footerFormat": "</table>",
		"shared": true,
		"useHTML": true
	},
	"plotOptions": {
		"column": {
			"pointPadding": 0.2,
			"borderWidth": 0
		},
		"series": {
			"animation": false,
			"pointStart": 1
		}
	},
	"category": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	"series": [{
		"name": "Ivano-Frankivsk",
		"data": [37.7, 34.4, 38.9, 44.8, 51.8, 69.1, 77.1, 64.4, 46.7, 43.3, 45.4, 43.5]
	},
	{
		"name": "Tokyo",
		"data": [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
		"visible": false
	}, {
		"name": "New York",
		"data": [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3],
		"visible": false
	}, {
		"name": "London",
		"data": [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2],
		"visible": false
		
	}, {
		"name": "Berlin",
		"data": [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1],
		"visible": false
		
	}],
	"data": {
		"csv": "\"Category\";\"Ivano-Frankivsk\";\"Tokyo\";\"New York\";\"London\";\"Berlin\"\n\"Jan\";37.7;49.9;83.6;48.9;42.4\n\"Feb\";34.4;71.5;78.8;38.8;33.2\n\"Mar\";38.9;106.4;98.5;39.3;34.5\n\"Apr\";44.8;129.2;93.4;41.4;39.7\n\"May\";51.8;144;106;47;52.6\n\"Jun\";69.1;176;84.5;48.3;75.5\n\"Jul\";77.1;135.6;105;59;57.4\n\"Aug\";64.4;148.5;104.3;59.6;60.4\n\"Sep\";46.7;216.4;91.2;52.4;47.6\n\"Oct\";43.3;194.1;83.5;65.2;39.1\n\"Nov\";45.4;95.6;106.6;59.3;46.8\n\"Dec\";43.5;54.4;92.3;51.2;51.1",
		"googleSpreadsheetKey": false,
		"googleSpreadsheetWorksheet": false
	}
};

export const dataCol2 = {
	"title": {
		"text": "World's largest cities per 2017"
	},
	"subtitle": {
		"text": "Source: <a href=\"http://en.wikipedia.org/wiki/List_of_cities_proper_by_population\">Wikipedia</a>"
	},
	"exporting": {},
	"chart": {
		"type": "column"
	},
	"chartID": {
		"value" : "col2"
	},
	"xAxis": {
		"type": "category",
		"labels": {
			"rotation": -45,
			"style": {
				"fontSize": "13px",
				"fontFamily": "Verdana, sans-serif"
			}
		}
	},
	"yAxis": {
		"min": 0,
		"title": {
			"text": "Population (millions)"
		}
	},
	"legend": {
		"enabled": false
	},
	"tooltip": {
		"pointFormat": "Population in 2017: <b>{point.y:.1f} millions</b>"
	},
	"series": [{
		"name": "Population",
		"data": [
			["Shanghai", 24.2],
			["Beijing", 20.8],
			["Karachi", 14.9],
			["Shenzhen", 13.7],
			["Guangzhou", 13.1],
			["Istanbul", 12.7],
			["Mumbai", 12.4],
			["Moscow", 12.2],
			["São Paulo", 12.0],
			["Delhi", 11.7],
			["Kinshasa", 11.5],
			["Tianjin", 11.2],
			["Lahore", 11.1],
			["Jakarta", 10.6],
			["Dongguan", 10.6],
			["Lagos", 10.6],
			["Bengaluru", 10.3],
			["Seoul", 9.8],
			["Foshan", 9.3],
			["Tokyo", 9.3]
	],
		"dataLabels": {
			"enabled": true,
			"rotation": -90,
			"color": "#FFFFFF",
			"align": "right",
			"format": "{point.y:.1f}",
			"y": 10,
			"style": {
				"fontSize": "13px",
				"fontFamily": "Verdana, sans-serif"
			}
		}
	}],
	"plotOptions": {
		"series": {
			"animation": false
		}
	},
	"data": {
		"csv": "\"Category\";\"Population\"\n\"Shanghai\";24.2\n\"Beijing\";20.8\n\"Karachi\";14.9\n\"Shenzhen\";13.7\n\"Guangzhou\";13.1\n\"Istanbul\";12.7\n\"Mumbai\";12.4\n\"Moscow\";12.2\n\"São Paulo\";12\n\"Delhi\";11.7\n\"Kinshasa\";11.5\n\"Tianjin\";11.2\n\"Lahore\";11.1\n\"Jakarta\";10.6\n\"Dongguan\";10.6\n\"Lagos\";10.6\n\"Bengaluru\";10.3\n\"Seoul\";9.8\n\"Foshan\";9.3\n\"Tokyo\";9.3",
		"googleSpreadsheetKey": false,
		"googleSpreadsheetWorksheet": false
	}
};

export const dataLine1 = {
	"title": {
		"text": "Monthly Average Temperature"
	},
	"subtitle": {
		"text": "Source: WorldClimate.com"
	},
	"exporting": {},
	"chart": {
		"type": "line"
	},
	"chartID": {
		"value" : "line1"
	},
	"xAxis": {
		"categories": []
	},
	"yAxis": {
		"title": {
			"text": "Temperature (°C)"
		}
	},
	"plotOptions": {
		"line": {
			"dataLabels": {
				"enabled": true
			}
		},
		"series": {
			"animation": false,
			"pointStart": 1
		}
	},
	"category": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	"series": [{
		"name": "Tokyo",
		"data": [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
	}, {
		"name": "London",
		"data": [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
	}],
	"data": {
		"csv": "\"Category\";\"Tokyo\";\"London\"\n\"Jan\";7;3.9\n\"Feb\";6.9;4.2\n\"Mar\";9.5;5.7\n\"Apr\";14.5;8.5\n\"May\";18.4;11.9\n\"Jun\";21.5;15.2\n\"Jul\";25.2;17\n\"Aug\";26.5;16.6\n\"Sep\";23.3;14.2\n\"Oct\";18.3;10.3\n\"Nov\";13.9;6.6\n\"Dec\";9.6;4.8",
		"googleSpreadsheetKey": false,
		"googleSpreadsheetWorksheet": false
	},
	"responsive": {
		"rules": [{
			"condition": {
				"maxWidth": 500
			},
			"chartOptions": {
				"legend": {
					"layout": "horizontal",
					"align": "center",
					"verticalAlign": "bottom"
				}
			},
			"_id": "highcharts-u34376y-44"
		}]
	}
};

export const dataLine2 = {
	"title": {
		"text": "Solar Employment Growth by Sector, 2010-2016"
	},
	"subtitle": {
		"text": "Source: thesolarfoundation.com"
	},
	"exporting": {},
	"chartID": {
		"value" : "line2"
	},
	"yAxis": {
		"title": {
			"text": "Number of Employees"
		}
	},
	"legend": {
		"layout": "vertical",
		"align": "right",
		"verticalAlign": "middle"
	},
	"plotOptions": {
		"series": {
			"label": {
				"connectorAllowed": false
			},
			"pointStart": 2010,
			"animation": false
		}
	},
	"category": [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
	"series": [{
		"name": "Installation",
		"data": [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
	}, {
		"name": "Manufacturing",
		"data": [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
	}, {
		"name": "Sales & Distribution",
		"data": [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
	}, {
		"name": "Project Development",
		"data": [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
	}, {
		"name": "Other",
		"data": [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
	}],
	"responsive": {
		"rules": [{
			"condition": {
				"maxWidth": 500
			},
			"chartOptions": {
				"legend": {
					"layout": "horizontal",
					"align": "center",
					"verticalAlign": "bottom"
				}
			},
			"_id": "highcharts-u34376y-44"
		}]
	}
};

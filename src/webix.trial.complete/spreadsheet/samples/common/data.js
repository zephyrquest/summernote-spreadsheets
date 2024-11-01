var base_data = {
  "styles": [
	["top","#FFEFEF;#6E6EFF;center;'PT Sans', Tahoma;17px;;;;middle;;"],						
	["subtop","#818181;#EAEAEA;center;'PT Sans', Tahoma;15px;;;bold;middle;;"],
	["sales","#818181;;center;'PT Sans', Tahoma;15px;;;bold;middle;;"],
	["total","#818181;;right;'PT Sans', Tahoma;15px;;;bold;middle;;"],
	["count","#818181;#EAEAEA;center;'PT Sans', Tahoma;15px;;;;middle;;"],
	["values","#000;#fff;right;'PT Sans', Tahoma;15px;;;;middle;;;price"]
  ],
  "sizes": [
	[0,1,125],
	[0,3,137],
	[0,4,137],
	[0,5,137]
  ],
  "data": [
	[1,1,"Report - July 2016","top"],
	[2,1,"Region","subtop"],
	[2,2,"Country","subtop"],
	[2,3,"Sales - Group A","sales"],
	[2,4,"Sales - Group B","sales"],
	[2,5,"Total","total"],
	[3,1,"Europe","count"],
	[3,2,"Germany","count"],
	[3,3,"188400","values"],
	[3,4,"52000","values"],
	[3,5,"=C3+D3","values"],
	[4,1,"Europe","count"],
	[4,2,"France","count"],
	[4,3,"192200","values"],
	[4,4,"12000","values"],
	[4,5,"=C4+D4","values"],
	[5,1,"Europe","count"],
	[5,2,"Poland","count"],
	[5,3,"68900","values"],
	[5,4,"8000","values"],
	[5,5,"=C5+D5","values"],
	[6,1,"Asia","count"],
	[6,2,"Japan","count"],
	[6,3,"140000","values"],
	[6,4,"14000","values"],
	[6,5,"=C6+D6","values"],
	[7,1,"Asia","count"],
	[7,2,"China","count"],
	[7,3,"50000","values"],
	[7,4,"4800","values"],
	[7,5,"=C7+D7","values"]
  ],
  "spans": [
	[1,1,5,1]
  ]
};

var math_data_simple = {
	"conditions": [],
	"styles": [
		[
			"top",
			"#FFEFEF;#6E6EFF;center;'PT Sans', Tahoma;17px;;;;middle;;"
		],
		[
			"subtop",
			"#818181;#EAEAEA;center;'PT Sans', Tahoma;15px;;;bold;middle;;"
		],
		[
			"count",
			"#818181;#EAEAEA;center;'PT Sans', Tahoma;15px;;;;middle;;"
		],
		[
			"calc-top",
			"#818181;#EAEAEA;;'PT Sans', Tahoma;15px;;;bold;middle;;"
		],
		[
			"values",
			"#000;;right;'PT Sans', Tahoma;15px;;;;middle;;;price"
		],
		[
			"wss_load_date",
			";;;;;;;;;;;date;;;;;;"
		]
	],
	"formats": [],
	"spans": [],
	"sizes": [
		[
			0,
			1,
			150
		],
		[
			0,
			2,
			130
		],
		[
			0,
			6,
			110
		],
		[
			0,
			7,
			130
		],
		[
			0,
			8,
			200
		]
	],
	"data": [
		[
			1,
			1,
			"Countries:",
			"subtop",
			"string"
		],
		[
			1,
			2,
			"April",
			"count",
			"string"
		],
		[
			1,
			3,
			"May",
			"count",
			"string"
		],
		[
			1,
			4,
			"June",
			"count",
			"string"
		],
		[
			1,
			5,
			"July",
			"count",
			"string"
		],
		[
			1,
			6,
			"Total:",
			"calc-top",
			"string"
		],
		[
			1,
			7,
			"Std Deviation:",
			"calc-top",
			"string"
		],
		[
			2,
			1,
			"France",
			"count",
			"string"
		],
		[
			2,
			2,
			1366,
			"values",
			"number"
		],
		[
			2,
			3,
			842,
			"values",
			"number"
		],
		[
			2,
			4,
			903,
			"values",
			"number"
		],
		[
			2,
			5,
			806,
			"values",
			"number"
		],
		[
			2,
			6,
			"=SUM(B2:E2)",
			"values",
			"number"
		],
		[
			2,
			7,
			"=STDEVP(B2:E2)",
			"values",
			"number"
		],
		[
			3,
			1,
			"Poland",
			"count",
			"string"
		],
		[
			3,
			2,
			684,
			"values",
			"number"
		],
		[
			3,
			3,
			781,
			"values",
			"number"
		],
		[
			3,
			4,
			549,
			"values",
			"number"
		],
		[
			3,
			5,
			978,
			"values",
			"number"
		],
		[
			3,
			6,
			"=SUM(B3:E3)",
			"values",
			"number"
		],
		[
			3,
			7,
			"=STDEVP(B3:E3)",
			"values",
			"number"
		],
		[
			4,
			1,
			"China",
			"count",
			"string"
		],
		[
			4,
			2,
			8142,
			"values",
			"number"
		],
		[
			4,
			3,
			7813,
			"values",
			"number"
		],
		[
			4,
			4,
			7754,
			"values",
			"number"
		],
		[
			4,
			5,
			8199,
			"values",
			"number"
		],
		[
			4,
			6,
			"=SUM(B4:E4)",
			"values",
			"number"
		],
		[
			4,
			7,
			"=STDEVP(B4:E4)",
			"values",
			"number"
		],
		[
			6,
			1,
			"Start date:",
			"count",
			"string"
		],
		[
			6,
			2,
			40179,
			"wss_load_date",
			"date"
		],
		[
			7,
			1,
			"End date:",
			"count",
			"string"
		],
		[
			7,
			2,
			42053,
			"wss_load_date",
			"date"
		],
		[
			8,
			1,
			"Date diff, months:",
			"calc-top",
			"string"
		],
		[
			8,
			2,
			"=DATEDIF(B6,B7,\"M\")",
			"",
			"number"
		]
	],
	"table": {
		"frozenColumns": 0,
		"frozenRows": 0,
		"gridlines": 1,
		"headers": 1,
		"showFormulas": 0
	},
	"ranges": [],
	"locked": [],
	"editors": [
		[
			"6",
			"2",
			{
				"editor": "excel_date"
			}
		],
		[
			"7",
			"2",
			{
				"editor": "excel_date"
			}
		]
	],
	"filters": [],
	"comments": [],
	"views": []
};

var sheet1_data = {"data":[["1","1","","wss8"],["1","2","","wss6"],["1","3","Sales","wss7"],["1","4","","wss6"],["1","5","Prediction","wss4"],["2","1","Department","wss1"],["2","2","2013","wss3"],["2","3","2014","wss3"],["2","4","2015","wss3"],["2","5","2016","wss3"],["3","1","Sport gears",""],["3","2","4550","wss5"],["3","3","4780","wss5"],["3","4","4920","wss5"],["3","5","5904","wss5"],["4","1","Gadgets",""],["4","2","2245","wss5"],["4","3","4483","wss5"],["4","4","7460","wss5"],["4","5","8952","wss14"],["5","1","Beverage",""],["5","2","750","wss5"],["5","3","640","wss5"],["5","4","755","wss5"],["5","5","830.5","wss5"],["6","1","Total","wss11"],["6","2","=SUM(B3:B5)","wss12"],["6","3","=SUM(C3:C5)","wss12"],["6","4","=SUM(D3:D5)","wss12"],["6","5","=SUM(E3:E5)","wss12"]],"styles":[["wss1",";#CEFEFE;"],["wss2",";#CEE6FE;"],["wss3","#000000;#CEE6FE;center"],["wss4","#000000;#CEFEFE;center"],["wss5",";;center"],["wss6","#000000;#CEFEE6;left"],["wss7","#000000;#CEFEE6;center"],["wss8","#000000;#FFFFFF;left"],["wss9","#FFFFFF;;"],["wss10","#FFFFFF;#424242;"],["wss11","#FFFFFF;#424242;right"],["wss12","#FFFFFF;#424242;center"],["wss13","#000000;#ffffff;left"],["wss14","#000000;#ffffff;center"]],"sizes":[["0","1","169"]],"spans":[]};
var sheet2_data = {"data":[["2","2","-","wss1"],["2","3","Page 1","wss2"],["2","4","-",""],["3","2","","wss3"],["3","3","","wss3"],["3","4","","wss3"]],"styles":[["wss1",";;right"],["wss2",";;center"],["wss3",";#f6b26b;"]],"sizes":[],"spans":[]};
var sheet3_data = {"data":[["2","2","-","wss1"],["2","3","Page 2","wss5"],["2","4","-",""],["3","2","","wss6"],["3","3","","wss6"],["3","4","","wss6"]],"styles":[["wss1",";;right"],["wss2",";;center"],["wss3",";#9E3EFF;"],["wss4","#000000;#ffffff;right"],["wss5","#000000;#ffffff;center"],["wss6","#000000;#6d9eeb;left"]],"sizes":[],"spans":[]};

var math_data = [{"name":"Report","content":{"conditions":[],"sizes":[[0,2,407],[0,3,112],[0,4,207],[4,0,115]],"styles":[["wss1",";;;;;;;;;wrap;;;;;;"],["wss2",";;;;;;;;;nowrap;;;;;;"],["wss3",";;;;;;;;;;;percent;;;;"]],"spans":[],"ranges":[],"table":{"frozenColumns":0,"frozenRows":0,"gridlines":1,"headers":1},"data":[[2,2,"You can fill charts and dropdowns from a different sheet","wss2"],[2,3,"","wss2"],[2,4,"Germany",""],[2,5,"","wss2"],[2,6,"","wss2"],[2,7,"","wss2"],[2,8,"","wss2"],[2,9,"","wss2"],[2,10,"","wss2"],[4,2,"=SPARKLINE(Countries!DATA,\"splineArea\",\"#6666FF\")",""],[7,2,"You can use values and ranges from different sheets",""],[8,3,"value",""],[8,4,"=Countries!A4 & \" \" &  Countries!B4 & \"mil\"",""],[9,3,"range",""],[9,4,"=SUM(Countries!B2:B3)",""],[10,3,"named range",""],[10,4,"=SUM(Countries!DATA)",""],[13,2,"You can reference formula results from different sheets",""],[13,3,"base",""],[13,4,"2",""],[14,3,"result",""],[14,4,"=Data!B8*D13","wss3"]],"locked":[],"editors":[["2","4",{"editor":"richselect","options":"Countries!NAMES"}]],"filters":[],"formats":[]}},{"name":"Data","content":{"conditions":[],"sizes":[],"styles":[["wss1",";;;;;;;;;wrap;;;;;;"],["wss2",";;;;;;;;;nowrap;;;;;;"]],"spans":[[8,3,4,1]],"ranges":[],"table":{"frozenColumns":0,"frozenRows":0,"gridlines":1,"headers":1},"data":[[2,2,"1",""],[2,3,"=B2*2+1",""],[3,2,"=C2*3-2",""],[3,3,"=B3*2+1",""],[4,2,"=C3*3-2",""],[4,3,"=B4*2+1",""],[5,2,"=C4*3-2",""],[5,3,"=B5*2+1",""],[6,2,"=C5*3-2",""],[6,3,"=B6*2+1",""],[7,2,"=C6*3-2",""],[7,3,"=B7*2+1",""],[8,2,"=SUM(Countries!DATA)  / C7",""],[8,3,"<- uses math from this and from Countries sheet","wss2"],[8,4,"","wss2"],[8,5,"","wss2"],[8,6,"","wss2"]],"locked":[],"editors":[],"filters":[],"formats":[]}},{"name":"Countries","content":{"conditions":[],"sizes":[],"styles":[["wss1",";;right;;;;;;;;;;;;;"],["wss2",";#4a86e8;;;;;;;;;;;;;;"],["wss3","#ffffff;#4a86e8;;;;;;;;;;;;;;"]],"spans":[],"ranges":[["DATA","B2:B7"],["NAMES","A2:A7"]],"table":{"frozenColumns":0,"frozenRows":0,"gridlines":1,"headers":1},"data":[[1,1,"Name","wss3"],[1,2,"Population","wss3"],[2,1,"Belarus",""],[2,2,"9","wss1"],[3,1,"Russia",""],[3,2,"146","wss1"],[4,1,"USA",""],[4,2,"324","wss1"],[5,1,"Germany",""],[5,2,"82","wss1"],[6,1,"China",""],[6,2,"1381","wss1"],[7,1,"India",""],[7,2,"1311","wss1"]],"locked":[],"editors":[],"filters":[],"formats":[]}}];

var base_data_contrast = {
	"styles": [
		["top","#FFEFEF;#6868d8;center;'PT Sans', Tahoma;17px;;;;middle;;"],
		["subtop",";#5d5b5b;center;'PT Sans', Tahoma;15px;;;bold;middle;;"],
		["sales",";;center;'PT Sans', Tahoma;15px;;;bold;middle;;"],
		["total",";;right;'PT Sans', Tahoma;15px;;;bold;middle;;"],
		["count",";#5d5b5b;center;'PT Sans', Tahoma;15px;;;;middle;;"],
		["values",";;right;'PT Sans', Tahoma;15px;;;;middle;;;price"]
	],
	"sizes": [
		[0,1,125],
		[0,3,137],
		[0,4,137],
		[0,5,137]
	],
	"data": [
		[1,1,"Report - July 2016","top"],
		[2,1,"Region","subtop"], [2,2,"Country","subtop"], [2,3,"Sales - Group A","sales"], [2,4,"Sales - Group B","sales"], [2,5,"Total","total"],
		[3,1,"Europe","count"], [3,2,"Germany","count"], [3,3,"188400","values"], [3,4,"52000","values"], [3,5,"=C3+D3","values"],
		[4,1,"Europe","count"], [4,2,"France","count"], [4,3,"192200","values"], [4,4,"12000","values"], [4,5,"=C4+D4","values"],
		[5,1,"Europe","count"], [5,2,"Poland","count"], [5,3,"68900","values"], [5,4,"8000","values"], [5,5,"=C5+D5","values"],
		[6,1,"Asia","count"], [6,2,"Japan","count"], [6,3,"140000","values"], [6,4,"14000","values"], [6,5,"=C6+D6","values"],
		[7,1,"Asia","count"], [7,2,"China","count"], [7,3,"50000","values"], [7,4,"4800","values"], [7,5,"=C7+D7","values"]
	],
	"spans": [
		[1,1,5,1]
	]
};

var nav_data = {
    "conditions": [],
    "styles": [
        [
            "wss1",
            ";;;;;;;bold;;;;;;;;;;"
        ],
        [
            "wss4",
            "#ffffff;#666666;center;;;;;;;;;;;;;;;"
        ],
        [
            "wss23",
            "#ffffff;#666666;center;;;;;bold;;;;;;;;;;"
        ],
        [
            "wss24",
            ";#d9d9d9;center;;;;;;;;;price;;;;;;"
        ],
        [
            "wss25",
            "#ffffff;#666666;center;;;;;;;;;price;;;;;;"
        ],
        [
            "wss26",
            ";#b7b7b7;center;;;;;;;;;price;;;;;;"
        ],
        [
            "wss3",
            "#0000ff;;;;;;underline;;;;;;;;;;;"
        ]
    ],
    "formats": [],
    "spans": [
        [
            9,
            1,
            5,
            1
        ],
        [
            10,
            1,
            5,
            1
        ],
        [
            19,
            1,
            5,
            1
        ],
        [
            20,
            1,
            5,
            1
        ],
        [
            29,
            1,
            5,
            1
        ],
        [
            30,
            1,
            5,
            1
        ],
        [
            39,
            1,
            5,
            1
        ],
        [
            40,
            1,
            5,
            1
        ],
        [
            49,
            1,
            5,
            1
        ],
        [
            50,
            1,
            5,
            1
        ]
    ],
    "sizes": [
        [
            0,
            1,
            105
        ]
    ],
    "data": [
        [
            1,
            1,
            "Navigation:",
            "wss1",
            "string"
        ],
        [
            2,
            1,
            "=HYPERLINK(\"#A9:E15\",\"Table 1\")",
            "wss3",
            "number"
        ],
        [
            3,
            1,
            "=HYPERLINK(\"#A19:E25\",\"Table 2\")",
            "wss3",
            "number"
        ],
        [
            4,
            1,
            "=HYPERLINK(\"#A29:E35\",\"Table 3\")",
            "wss3",
            "number"
        ],
        [
            5,
            1,
            "=HYPERLINK(\"#A39:E45\",\"Table 4\")",
            "wss3",
            "number"
        ],
        [
            6,
            1,
            "=HYPERLINK(\"#A49:E55\",\"Table 5\")",
            "wss3",
            "number"
        ],
        [
            9,
            1,
            "=HYPERLINK(\"#A1\",\"To the navigation\")",
            "wss3",
            "number"
        ],
        [
            10,
            1,
            "Table 1",
            "wss4",
            "string"
        ],
        [
            11,
            1,
            1,
            "wss23",
            "number"
        ],
        [
            11,
            2,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            11,
            3,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            11,
            4,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            11,
            5,
            "=SUM(B11:D11)",
            "wss25",
            "number"
        ],
        [
            12,
            1,
            2,
            "wss23",
            "number"
        ],
        [
            12,
            2,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            12,
            3,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            12,
            4,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            12,
            5,
            "=SUM(B12:D12)",
            "wss25",
            "number"
        ],
        [
            13,
            1,
            3,
            "wss23",
            "number"
        ],
        [
            13,
            2,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            13,
            3,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            13,
            4,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            13,
            5,
            "=SUM(B13:D13)",
            "wss25",
            "number"
        ],
        [
            14,
            1,
            4,
            "wss23",
            "number"
        ],
        [
            14,
            2,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            14,
            3,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            14,
            4,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            14,
            5,
            "=SUM(B14:D14)",
            "wss25",
            "number"
        ],
        [
            15,
            1,
            5,
            "wss23",
            "number"
        ],
        [
            15,
            2,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            15,
            3,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            15,
            4,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            15,
            5,
            "=SUM(B15:D15)",
            "wss25",
            "number"
        ],
        [
            19,
            1,
            "=HYPERLINK(\"#A1\",\"To the navigation\")",
            "wss3",
            "number"
        ],
        [
            20,
            1,
            "Table 2",
            "wss4",
            "string"
        ],
        [
            21,
            1,
            1,
            "wss23",
            "number"
        ],
        [
            21,
            2,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            21,
            3,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            21,
            4,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            21,
            5,
            "=SUM(B21:D21)",
            "wss25",
            "number"
        ],
        [
            22,
            1,
            2,
            "wss23",
            "number"
        ],
        [
            22,
            2,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            22,
            3,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            22,
            4,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            22,
            5,
            "=SUM(B22:D22)",
            "wss25",
            "number"
        ],
        [
            23,
            1,
            3,
            "wss23",
            "number"
        ],
        [
            23,
            2,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            23,
            3,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            23,
            4,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            23,
            5,
            "=SUM(B23:D23)",
            "wss25",
            "number"
        ],
        [
            24,
            1,
            4,
            "wss23",
            "number"
        ],
        [
            24,
            2,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            24,
            3,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            24,
            4,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            24,
            5,
            "=SUM(B24:D24)",
            "wss25",
            "number"
        ],
        [
            25,
            1,
            5,
            "wss23",
            "number"
        ],
        [
            25,
            2,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            25,
            3,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            25,
            4,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            25,
            5,
            "=SUM(B25:D25)",
            "wss25",
            "number"
        ],
        [
            29,
            1,
            "=HYPERLINK(\"#A1\",\"To the navigation\")",
            "wss3",
            "number"
        ],
        [
            30,
            1,
            "Table 3",
            "wss4",
            "string"
        ],
        [
            31,
            1,
            1,
            "wss23",
            "number"
        ],
        [
            31,
            2,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            31,
            3,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            31,
            4,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            31,
            5,
            "=SUM(B31:D31)",
            "wss25",
            "number"
        ],
        [
            32,
            1,
            2,
            "wss23",
            "number"
        ],
        [
            32,
            2,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            32,
            3,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            32,
            4,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            32,
            5,
            "=SUM(B32:D32)",
            "wss25",
            "number"
        ],
        [
            33,
            1,
            3,
            "wss23",
            "number"
        ],
        [
            33,
            2,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            33,
            3,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            33,
            4,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            33,
            5,
            "=SUM(B33:D33)",
            "wss25",
            "number"
        ],
        [
            34,
            1,
            4,
            "wss23",
            "number"
        ],
        [
            34,
            2,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            34,
            3,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            34,
            4,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            34,
            5,
            "=SUM(B34:D34)",
            "wss25",
            "number"
        ],
        [
            35,
            1,
            5,
            "wss23",
            "number"
        ],
        [
            35,
            2,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            35,
            3,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            35,
            4,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            35,
            5,
            "=SUM(B35:D35)",
            "wss25",
            "number"
        ],
        [
            39,
            1,
            "=HYPERLINK(\"#A1\",\"To the navigation\")",
            "wss3",
            "number"
        ],
        [
            40,
            1,
            "Table 4",
            "wss4",
            "string"
        ],
        [
            41,
            1,
            1,
            "wss23",
            "number"
        ],
        [
            41,
            2,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            41,
            3,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            41,
            4,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            41,
            5,
            "=SUM(B41:D41)",
            "wss25",
            "number"
        ],
        [
            42,
            1,
            2,
            "wss23",
            "number"
        ],
        [
            42,
            2,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            42,
            3,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            42,
            4,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            42,
            5,
            "=SUM(B42:D42)",
            "wss25",
            "number"
        ],
        [
            43,
            1,
            3,
            "wss23",
            "number"
        ],
        [
            43,
            2,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            43,
            3,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            43,
            4,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            43,
            5,
            "=SUM(B43:D43)",
            "wss25",
            "number"
        ],
        [
            44,
            1,
            4,
            "wss23",
            "number"
        ],
        [
            44,
            2,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            44,
            3,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            44,
            4,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            44,
            5,
            "=SUM(B44:D44)",
            "wss25",
            "number"
        ],
        [
            45,
            1,
            5,
            "wss23",
            "number"
        ],
        [
            45,
            2,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            45,
            3,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            45,
            4,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            45,
            5,
            "=SUM(B45:D45)",
            "wss25",
            "number"
        ],
        [
            49,
            1,
            "=HYPERLINK(\"#A1\",\"To the navigation\")",
            "wss3",
            "number"
        ],
        [
            50,
            1,
            "Table 5",
            "wss4",
            "string"
        ],
        [
            51,
            1,
            1,
            "wss23",
            "number"
        ],
        [
            51,
            2,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            51,
            3,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            51,
            4,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            51,
            5,
            "=SUM(B51:D51)",
            "wss25",
            "number"
        ],
        [
            52,
            1,
            2,
            "wss23",
            "number"
        ],
        [
            52,
            2,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            52,
            3,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            52,
            4,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            52,
            5,
            "=SUM(B52:D52)",
            "wss25",
            "number"
        ],
        [
            53,
            1,
            3,
            "wss23",
            "number"
        ],
        [
            53,
            2,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            53,
            3,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            53,
            4,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            53,
            5,
            "=SUM(B53:D53)",
            "wss25",
            "number"
        ],
        [
            54,
            1,
            4,
            "wss23",
            "number"
        ],
        [
            54,
            2,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            54,
            3,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            54,
            4,
            "=RAND()*100",
            "wss26",
            "number"
        ],
        [
            54,
            5,
            "=SUM(B54:D54)",
            "wss25",
            "number"
        ],
        [
            55,
            1,
            5,
            "wss23",
            "number"
        ],
        [
            55,
            2,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            55,
            3,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            55,
            4,
            "=RAND()*100",
            "wss24",
            "number"
        ],
        [
            55,
            5,
            "=SUM(B55:D55)",
            "wss25",
            "number"
        ]
    ],
    "table": {
        "frozenColumns": 0,
        "frozenRows": 0,
        "gridlines": 1,
        "headers": 1,
        "showFormulas": 0
    },
    "ranges": [],
    "locked": [],
    "editors": [],
    "filters": [],
    "comments": [],
    "views": []
};

var checkbox_radio_data = {
    "table": {
        "zoom": 1,
        "frozenColumns": 0,
        "frozenRows": 0,
        "gridlines": 1,
        "headers": 0,
        "showFormulas": 0
    },
    "conditions": [],
    "styles": [
        [
            "wss1",
            ";;;;;;;;;;;price;;;;;;"
        ],
        [
            "wss5",
            "#434343;#cfe2f3;;;;;;;;;;;;;;;;"
        ],
        [
            "wss6",
            "#000000;#9fc5e8;center;;;;;bold;;;;;#000000,thin;;#000000,thin;;;"
        ],
        [
            "wss7",
            "#000000;#9fc5e8;center;;;;;bold;;;;;#000000,thin;;#000000,thin;#000000,thin;;"
        ],
        [
            "wss8",
            "#434343;#cfe2f3;;;;;;;;;;;;;#000000,thin;;;"
        ],
        [
            "wss10",
            "#434343;#cfe2f3;;;;;;;;;;;#000000,thin;;;;;"
        ],
        [
            "wss11",
            ";;;;;;;;;;;;;;#000000,thin;;;"
        ],
        [
            "wss12",
            ";;;;;;;;;;;;#000000,thin;;;;;"
        ],
        [
            "wss14",
            ";;center;;;;;;;;;;#000000,thin;;#000000,thin;;;"
        ],
        [
            "wss17",
            "#0000ff;;center;;;;underline;;;;;;#000000,thin;#000000,thin;#000000,thin;;;"
        ]
    ],
    "formats": [],
    "spans": [
        [
            1,
            1,
            4,
            1
        ],
        [
            2,
            1,
            2,
            1
        ],
        [
            6,
            1,
            2,
            1
        ],
        [
            9,
            1,
            4,
            1
        ],
        [
            10,
            1,
            4,
            1
        ],
        [
            11,
            1,
            2,
            1
        ],
        [
            12,
            1,
            4,
            1
        ]
    ],
    "sizes": [
        [
            0,
            1,
            43
        ],
        [
            0,
            2,
            114
        ],
        [
            0,
            3,
            104
        ]
    ],
    "data": [
        [
            1,
            1,
            "Car shop",
            "wss7",
            "string"
        ],
        [
            2,
            1,
            "Type:",
            "wss8",
            "string"
        ],
        [
            2,
            3,
            "Price:",
            "wss5",
            "string"
        ],
        [
            2,
            4,
            "Photo:",
            "wss10",
            "string"
        ],
        [
            3,
            1,
            "=RADIO(1, 1, 3, 1, 1)",
            "wss11",
            "number"
        ],
        [
            3,
            2,
            "hatchback",
            "",
            "string"
        ],
        [
            3,
            3,
            2000,
            "wss1",
            "number"
        ],
        [
            3,
            4,
            "=IMAGE(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAbBAMAAAAwp+q2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAACdQTFRFAAAAay8vWCcnHh4e////ERERzicnjk5ORyEhnZ2dnZ2dICAgFhYWYZvxhAAAAA10Uk5TAP////////////X//yCTxHsAAAEmSURBVHicY2TACxhpLi0I5/7/gEWaUZFRAML9d/8DprTRByGg9HugIf/focqjSQPlz6NLM+sjpBn+n/2AJg2Ug0v/e8B/HlWaURGIoU5jYFJg2P0BRVpIgAEFQD0HpoDSaX8OwCUEkTTehUiX/94AFWFLmIWQFk9PAEsrgRxvwHAWIWPM8PcCg3hiGlzaMoFh+gWYLPM0hl+5QNeehUkDBUAiUABUC1Z8DyZtGbeAIWka1IUsy24xsEnlwqRZAxjYop78UYOZzjxtnsOhKLg0QygDW9wDBiWE7nsMTFILGEAeAkmzBoB1wz2VBtK9gGE1Ayy18KxdwJDsApM+fYqBTdUBHiUgkQ8MrA4waZ71DIwuDMjSPAcYTBDBcobhiwOKNC5AmTQAhaxcHHaThCIAAAAASUVORK5CYII=\")",
            "wss12",
            "string"
        ],
        [
            4,
            1,
            "=RADIO(2, 1, 3, 1, 0)",
            "wss11",
            "number"
        ],
        [
            4,
            2,
            "cabriolet",
            "",
            "string"
        ],
        [
            4,
            3,
            4500,
            "wss1",
            "number"
        ],
        [
            4,
            4,
            "=IMAGE(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAbBAMAAAAwp+q2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAACRQTFRFAAAAO1htnZ2dICAgICctnZ2dERERgYGBzicnJj1Njk5OFhYW+g364gAAAAx0Uk5TAP/1////////////HubA7wAAAS9JREFUeJy1krFLw0AUxr/zRCrBEv8CqS5BCIQGMrs4N6MOToEKTo4FCdyYsWuHTN1cFDo6uwRTDgPdqoN7zSKxQ6ivmoSLSEDQt9x9/N733rvHMTQG+2usp42489yIN9ppE1btdcxNWbdX2I5LvHm0c/MN9xHbdOSJBUx1PJR2tvtD8ype65hbsSr7SxYsh3QJgHehgBaJAbZO2XV2ScqXsGtlY3BDYEXFhUAQSTiWQvMQ3Bugx0ZUpOWH1NeD/MrIOSgdjiF6n6MF0aOFqWPywivN8AD5i4eMba8ni5I9NnfMqwKfmGE3bScezhlGpC+6ndXTbFi1zsb7+mIuy61xm9zqk21yxxXWDi3M7hU8GSM/c6udTwR8V8GagdY6vcDaLY5ra7nDm4t/+Km/wB//FVVc7qiGngAAAABJRU5ErkJggg==\")",
            "wss12",
            "string"
        ],
        [
            5,
            1,
            "=RADIO(3, 1, 3, 1, 0)",
            "wss11",
            "number"
        ],
        [
            5,
            2,
            "jeep",
            "",
            "string"
        ],
        [
            5,
            3,
            7000,
            "wss1",
            "number"
        ],
        [
            5,
            4,
            "=IMAGE(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAbBAMAAAAwp+q2AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAC1QTFRFAAAAODg4R0dHuLi4uLi4////Hh4ezicnjk5OnZ2dnZ2dERERGBgYMy0kFhYWRD0dKgAAAA90Uk5TAP//bP////////X/////tHzW6wAAAVFJREFUeJxtkjFOwzAUhv/XtFRCUZpIsBdxAFLEAUDKATrQDmUpSyYGtl4BNiaQYIYZZioIO9BcoCJzRZuCxJJWCXZSkmcUy0P8ff79bMcEwAJryZyPSHRTmWD4qm4Fms3Ix1jRmgHtQH4OnZRMZz7XrUDVyYjFqdKAqpU4bc1VTWb8PFY17RbLVZpYvvuqNlHa4oAGWL+gxlc6IeTnr5+i3qcznIMOMRSgur/0mB+AXJKB0rSIr7S41PBf2Ww7MVkob5aohSjTHSzuFdmB2Iaz0rVbLI64leAkXdyVo2Mklw/F4cOeAFee1Gt9oCvMhMVrdxKIchHBlWHxo26Y/gMR0Wa7a45A9qTYXA6uxWt5JHMaOCE7OVm6t22G+GkLDd17Q3Vnr9D6yys0W4JMy7SiZbrQshTXOZAanwGw0WTXkoNUG0+osAfDQKoxwzcPF+AX5Rty/DQ50w0AAAAASUVORK5CYII=\")",
            "wss12",
            "string"
        ],
        [
            6,
            1,
            "Additional services:",
            "wss8",
            "string"
        ],
        [
            6,
            4,
            "",
            "wss12",
            null
        ],
        [
            7,
            1,
            "=CHECKBOX(1)",
            "wss11",
            "number"
        ],
        [
            7,
            2,
            "insurance",
            "",
            "string"
        ],
        [
            7,
            3,
            200,
            "wss1",
            "number"
        ],
        [
            7,
            4,
            "",
            "wss12",
            null
        ],
        [
            8,
            1,
            "=CHECKBOX(1)",
            "wss11",
            "number"
        ],
        [
            8,
            2,
            "winter tires",
            "",
            "string"
        ],
        [
            8,
            3,
            300,
            "wss1",
            "number"
        ],
        [
            8,
            4,
            "",
            "wss12",
            null
        ],
        [
            9,
            1,
            "You've chosen:",
            "wss6",
            "string"
        ],
        [
            10,
            1,
            "=IF(A3,B3, IF(A4, B4, IF(A5, B5) ) ) & IF(OR(A7, A8),  \" + \", \"\") & IF(A7, B7 & IF(A8, \" + \", \"\"), \"\") & IF(A8, B8, \"\")",
            "wss14",
            "number"
        ],
        [
            11,
            1,
            "Total Price:",
            "wss8",
            "string"
        ],
        [
            11,
            3,
            "=C3*A3+C4*A4+C5*A5+C7*A7+C8*A8",
            "wss1",
            "number"
        ],
        [
            11,
            4,
            "=IF(A3,D3, IF(A4,D4, IF(A5,D5,\"\") ) )",
            "wss12",
            "number"
        ],
        [
            12,
            1,
            "=HYPERLINK(\"https://webix.com/?car=\"&A10,\"Send request\")",
            "wss17",
            "number"
        ]
    ],
    "ranges": [],
    "locked": [],
    "editors": [],
    "filters": [],
    "comments": [],
    "views": []
};

var validationData = {
    "table": {
        "zoom": 1,
        "frozenColumns": 0,
        "frozenRows": 0,
        "gridlines": 1,
        "headers": 1,
        "showFormulas": 0,
        "highlightInvalid": 1
    },
    "conditions": [],
    "styles": [],
    "formats": [],
    "spans": [],
    "sizes": [],
    "data": [
        [
            1,
            1,
            "Numbers",
            "",
            "string"
        ],
        [
            1,
            2,
            "Date",
            "",
            "string"
        ],
        [
            1,
            3,
            "Text",
            "",
            "string"
        ],
        [
            1,
            4,
            "Text length",
            "",
            "string"
        ],
        [
            1,
            5,
            "Range",
            "",
            "string"
        ],
        [
            2,
            1,
            1.25,
            "",
            "number"
        ],
        [
            2,
            3,
            "some text",
            "",
            "string"
        ],
        [
            2,
            4,
            "some text",
            "",
            "string"
        ],
        [
            2,
            5,
            1,
            "",
            "number"
        ],
        [
            3,
            1,
            9,
            "",
            "number"
        ]
    ],
    "ranges": [],
    "locked": [],
    "editors": [],
    "filters": [],
    "comments": [],
    "views": [],
    "validation": [
        [
            "2",
            "1",
            {
                "type": "number",
                "integer": 1,
                "ignoreEmpty": 0,
                "condition": "greater",
                "value": "0",
                "inputMessage": "Rules:\n\n- integer greater than 0\n- don't ignore empty cells",
                "errorHandle": "stop",
                "errorTitle": "Incorrect data!",
                "errorMessage": "Should be integer greater than 0!"
            }
        ],
        [
            "2",
            "2",
            {
                "type": "date",
                "ignoreEmpty": 1,
                "condition": "greater",
                "value": "45292",
                "inputMessage": "Rules:\n\n- date after 01/01/2024\n- ignore empty cells",
                "errorHandle": "stop",
                "errorTitle": "Incorrect data!",
                "errorMessage": "Should be date after 01/01/2024!"
            }
        ],
        [
            "2",
            "3",
            {
                "type": "text",
                "ignoreEmpty": 0,
                "condition": "contains",
                "value": "some",
                "inputMessage": "Rules:\n\n- text with substring \"some\"\n- don't ignore empty cells",
                "errorHandle": "stop",
                "errorTitle": "Incorrect data!",
                "errorMessage": "Should be text with substring \"some\"!"
            }
        ],
        [
            "2",
            "4",
            {
                "type": "textLength",
                "ignoreEmpty": 0,
                "condition": "lessOrEqual",
                "value": "5",
                "inputMessage": "Rules:\n\n- maximum 5 characters\n- don't ignore empty cells",
                "errorHandle": "stop",
                "errorTitle": "Incorrect data!",
                "errorMessage": "Maximum 5 characters!"
            }
        ],
        [
            "2",
            "5",
            {
                "type": "range",
                "ignoreEmpty": 0,
                "value": "=A2:A3",
                "inputMessage": "Rules:\n\n- valid values A2:A3\n- don't ignore empty cells",
                "errorHandle": "stop",
                "errorTitle": "Incorrect data!",
                "errorMessage": "Valid values A2:A3!"
            }
        ],
        [
            "3",
            "1",
            {
                "type": "number",
                "integer": 0,
                "ignoreEmpty": 1,
                "condition": "greater",
                "value": "10",
                "inputMessage": "Rules:\n\n- number greater than 10\n- ignore empty cells",
                "errorHandle": "stop",
                "errorTitle": "Incorrect data!",
                "errorMessage": "Should be number greater than 10!"
            }
        ]
    ]
};
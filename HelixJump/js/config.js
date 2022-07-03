window.helixConfigData = {
    globals:{
        moveFreq:[0.25],
        // Global difficulty curve per level
        // Format of entry: [<floor>, <max group>]
        levelCurve: [[1, 0], [{1:4,2:3,3:2}, 1], [10, 2], [15, 3], [20, 4], [25, 2], [30, 3], [35, 4]],
        // Global progress config
        progress: {
            // Floors per level
            floorCount: [10, 15, 17, 19, 21, 23, 25, 27, 30, 33, 36, 40],
            // Clamp levelCurve. Fromat of entry: [<level>, <min group>, <max group>]
            //curveClamp: [[1, 0, 1], [8, 0, 2], [15, 0, 3], [20, 0, 4], [30, 1, 4], [60, 2, 4], [100, 3, 4]],
            curveClamp: [[1, 0, 0], [2, 0, 1], [15, 0, 2], [25, 0, 3], [30, 0, 4], [40, 1, 4], [70, 2, 4], [100, 3, 4]],
        }
    },
// groups:
//	4 - стена
//	3 - узкая земля (% земли  < 10%)
//	2 - движущиеся
//	1 - ловушки
//	0 - остальные (по сути статическая земля)
// lvl:
//Fan2 on LVL2
//Fan3 on LVL4
//M on LVL5
//Fan4 on LVL7
//pacman LVL9
//MG(T) LVL12
//Fan5 on LVL17
//zebra LVL25
//hard 50
    floors:{
        Simple1: ["G290"],
        Simple2: ["G320"],
        Simple3: ["2G120","L2"],
        Simple4: ["2G150","L2"],
//        n2Fan0: ["2G90","L3"],
//        n3Fan0: ["3G90","L4"],
        n4Fan0: ["4G60","L7"], //h120
		
		Single1: ["G300.T30"],
		Single2: ["G300.T40"],
		Single3: ["G300.2ET15","L3"],
		Single4: ["G300.TE30.T20","L4"],
		Single5: ["G320.2T30","L3"],
		Single6: ["G320.ET30.2T20","L3"],
		Single7: ["G320.2ET15","L4"],
		Single8: ["G320.TE30.T40","L4"],
        
		SingleM1: ["G300.MT30","A90"],
		SingleM2: ["G300.MT40","A80"],
		SingleM4: ["G300.TE30.MT20","A80"],
		SingleM5: ["G320.M2T30","A60"],
		SingleM6: ["G320.ET30.2MT20","A60"],
		SingleM8: ["G320.TE30.MT40","A80"],
		SingleM1d: ["G300.MT30","A90"], //duplicates
		SingleM2d: ["G300.MT40","A80"],
		SingleM4d: ["G300.TE30.MT20","A80"],
		SingleM5d: ["G320.M2T30","A60"],
		SingleM6d: ["G320.ET30.2MT20","A60"],
		SingleM8d: ["G320.TE30.MT40","A80"],
		
        BigSmall1: ["G60","G150.T30"], 			//H150
        BigSmall01: ["G60.TE30","G150.TE30"], 	//H150
        BigSmall2: ["G60.T30","G180.T30","L5"], 		//H120
        BigSmall3: ["G60","G180.T30","L5"], 			//h120
        BigSmall4: ["G60","G180.2T30","L5"], 		//h120
        BigSmall04: ["G60.TE15","G180.2TE30","L5"], 	//h120
        BigSmall5: ["G60","G180.3T30","L15"], 		//h120 zebra light
        BigSmall6: ["G60.T30","G180.3T30","L15"], 	//h120 zebra light
        BigSmall7: ["G60.2ET15","G180.T30"], 	//h120
        BigSmall07: ["G60.2ET15","G180.2T30"], 	//h120

        BigSmall8: ["T60","G150.3T30","L15"], 	//150 zebra light
        BigSmall9: ["T60","G180.4TE15","L25"], 	//120 zebra light
        BigSmall10: ["T60","G180.3TE30"], 		//120

        BigSmall11: ["G90","G150.T60"], 		//h120
        BigSmall12: ["G120.2T30","G150.T60","L7"], 	//h90
        BigSmall13: ["G90","G180.3TE30","L7"], 		//90
        BigSmall14: ["G90.2TE15","G180.3TE30","L7"], //90
        BigSmall15: ["G90.2TE30","G180.3TE30","L7"], //90
        BigSmall015: ["G90.TE60","G180.TE30","L7"], 	//90
        BigSmall16: ["G90.T30","G180.4TE30","L25"], //90 zebra

        BigSmall17: ["T90","G180.3TE30","L6"], 		//90
        BigSmall18: ["T90","G210.3TE30","L6"], 		//60
        BigSmall108: ["T90","G210.2TE60","L6"], 		//60
        BigSmall19: ["T90","G180.4TE30","L25"], //90 zebra
        BigSmall20: ["T90","G180.5T15","L25"], 	//90 zebra
        BigSmall21: ["T90","G180.6TE15","L25"], //90 zebra

        BigSmall22: ["G120.2TE30","G180.2TE60","L6"], //60
        BigSmall23: ["G120.3TE15","G180.3TE15","L6"], //60
        BigSmall24: ["G120.3T15","G180.3T15","L15"], 	 //60 zebra light
        BigSmall25: ["G120.4TE15","G180.4TE15","L25"], 	//60 zebra
        BigSmall26: ["G120.4T15","G180.4T15","L25"], 	//60 zebra

        BigSmall1M: ["G60","G150.MT30","A90","L5"], 		//H150
        BigSmall2M: ["G60.MT30","G180.MT30","A30","L5"], 	//H120
        BigSmall3M: ["G60","G180.MT30","A90","L5"],			//H120
        BigSmall4M: ["G60","G180.2MT30","A60","L5"],		//H120
        BigSmall9M: ["MT60","G180.4TE15","A90","L25"], 		//H120 zebra
        BigSmall11M: ["G90","G150.MT60","A90","L5"],		//h120
        BigSmall15M: ["MG90.2TE30","G180.3TE30","A90","L10"],	//h120
        BigSmall15Md: ["MG90.2TE30","G180.3TE30","A90","L10"],	//duplicate
        BigSmall16M: ["G90.MT30","G180.4TE30","A60","L25"], 	//90 - hard zebra
        BigSmall17M: ["MT90","G180.3TE30","A90","L10"], //90
        BigSmall20M: ["MT90","G180.5T15","A90","L25"], 	//90 - zebra
        BigSmall22M: ["MG120.2TE30","G180.2TE60","A60","L10"], //60
        BigSmall25M: ["MG120.4TE15","G180.4TE15","A60","L25"], //60 - hard(zebra)



        n2Fan1: ["G90","G90.T30","L4"],
        n2Fan2: ["G120.3TE30","G120.2TE30","L12"], //hard
        n2Fan3: ["G90","G90.2TE15","L4"],
        n2Fan4: ["G120.3TE15","G120.2TE15","L12"], //hard
        n2Fan5: ["2G120.T30","L4"],
        n2Fan6: ["2G120.2TE30","L4"],
        n2Fan7: ["2G140.3T30","L4"],
        n2Fan8: ["2G140.T90","L4"],
        n2Fan9: ["2G160.4TE15","L25"], //zebra
        n2Fan10: ["2G120.3TE20","L12"], //hard
        n2Fan11: ["T120","G120.3TE15","L12"], //hard
        n2Fan12: ["G120.T60","G120.3TE20","L50"], //superhard

        n2Fan1M: ["G90","G90.MT30","A60","L5"],
        n2Fan5M: ["2G120.MT30","A60","L5"],
        n2Fan8M: ["2MG90.T90","A90","L12"],
        n2Fan12M: ["G90.3TE15","G90.MT30","A60","L5"],
        n2Fan11M: ["MT120","G120.3TE15","A60","L12"],
        n2Fan12M: ["MG120.T60","G120.3TE20","A60","L50"],

        Pacman1: ["G180.ET15","MG180D60.TE15","A90","L9"],
        Pacman2: ["G180.ET15.T30","MG180D90.TE15","A90","L9"],
        Pacman3: ["G180.ET15.2T30","MG180D90.TE15","A90","L9"],
        Pacman3d: ["G180.ET15.2T30","MG180D90.TE15","A90","L9"],//duplicate

        n3Fan1: ["G90.T30","2G90.TE30","L8"],
        n3Fan2: ["T90","2G90.T45","L8"], //h90
        n3Fan3: ["T100","2G100.2TE30","L50"], //h60
        n3Fan4: ["T90","2G90.3TE15","L8"],
        n3Fan5: ["T100","2G100.T45","L50"], //h60

        n3Fan1M: ["G90.T30","2G90.MT30","A60","L9"], 	//h90
        n3Fan2M: ["T100","2G100.MT45","A50","L9"], 		//h60
        n3Fan3M: ["G70","2G70.MT30","A30","L9"], 		//h150
        n3Fan4M: ["G90.2TE30","2G90.MT30","A60","L9"], 	//h90
        n3Fan5M: ["MT100","2G100.2TE30","A30","L50"], 	//h60
        n3Fan6M: ["MT90","2G90.2TE30","A60","L12"], 	//h90

        n4Fan1: ["4G45","L7"],			//h180
        n4Fan2: ["2G60","2T60","L7"], 	//h120
        n4Fan3: ["G70","3T70","L50"],	//h80
        n4Fan4: ["4G60.TE30","L7"],		//h120
        n4Fan5: ["4G60.2TE15","L7"],	//h120
        n4Fan6: ["4G70.2TE20","L50"],	//h80
        n4Fan7: ["4G75.T15","L7"],		//h60
        n4Fan8: ["2G70.2TE25","2G70.3TE10","L50"], //h60

        n4Fan1M: ["4MG60","A90","L15"],
        n4Fan2M: ["2MT60","2MG60","A90","L15"], 
        n4Fan3M: ["3MT60","MG60","A90","L15"],
        n4Fan4M: ["4G60.MT30","A30","L15"],
        n4Fan5M: ["4MG60.2TE15","A60","L20"],
        n4Fan6M: ["4MT65","A60","L50"], //h60

		n5Fan1: ["3T30","2G30","L22"], //h210
		n5Fan2: ["2T30","3G30","L22"], //h210
		n5Fan3: ["5T40","L22"], //h160
		n5Fan4: ["5G40.TE15","L22"],
//		n5Fan5: ["5G40.MT15","A30","L17"],
		//n5Fan6: ["5G30.MT15","A30","L17"],

        Zebra1: ["G270.3T15","L29"],
        Zebra2: ["G300.3T30","L29"],
        Zebra3: ["G300.6TE15","L45"],
        Zebra4: ["G300.6TE15","L45"],
        Zebra5: ["G330.5TE30","L35"],
        Zebra6: ["MG330.5TE30","A30","L35"],
    },
}
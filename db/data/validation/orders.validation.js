const tubeData = {
    tubeType: "",
    tubeInDiam : 0,
    tubeOutDiam : 0,
    tubeLength: 0,
    tubeThk: 0, 
}

const rectangleData = {
    rectangleType: "",
    rectangleInWidth: 0,
    rectangleInHeight: 0,
    rectangleInLength: 0,
    rectangleThk: 0, 
}

const ringData = {
    ringType: "",
    ringInDiam : 0,
    ringOutDiam : 0,
    ringThk: 0, 
    ringPCD: 0,
    ringHolesCount: 0,
    ringHoleInDiam: 0,
    ringFab:[
        { tubeDataId: [] },
        { flangeRingDataId: [] },
        { gussetData:[] }
    ]
}

const plateData = {
    plateType: "",
    plateInWidth: 0,
    plateInHeight: 0,
    plateThk: 0,
    plateHolesCount: 0,
    plateHoleInDiam: 0,
    plateHolesToOutEdge: 0,
}

const insulationData = {
    insulationType = "",
    insulationThk = 0,
}

const claddingData = {
    claddingType: "",
    claddingThk: 0, 
}

const gussetData = {
    gussetType: "",
    gussetHeight: 0,
    gussetLength: 0,
    gussetLip: 0,
    gussetThk: 0,
}

const coneData = {
    coneType: "",
    coneInDiamA: 0,
    coneInDiamB: 0,
    coneLength:0,
    coneThk:0,
}

const topCapData = {
    topCapType: "",
    topCapFab: [
        {tubeData:[]},
        {rectangleData:[]},
        {flangeRectangleData:[]},
        {flangeRingData:[]}
    ]
}

const roofPlateData = {

}

const cravatData = {

}

const guyRingData = {

}

const guideFinsData = {

}

const portData = {
    portType: "",
    portFab:{
        tubeData:[],
        rectangleData:[],
        flangeRingData:[],
        portCover: [
            { tubeData:[] },
            { rectangleData:[] },
            { insulationData:[] },
            { flangeRingData:[] } 
        ],
    }
}

const branchData = {
    branchShape: "",
    branchHeight: 0,
    branchLength: 0,
    branchAngle: 0,
    branchFab: [
        { tubeDataId:[] },
        { rectangleDataId:[] },
        { insulationId:[] },
        { claddingDataId:[] },
        { coneDataId:[] },
        { flangeRingDataId:[] }
    ]
}

const liftingData = {
    liftingType: "",
    liftingPoints: 0,
}

const chimneyData = {
    chimneyId: "",
    chimneyType:"",
    chimneyFab:[
        { branchDataId:[] },
        { mountDataId:[] },
        { multiCoreId:[] },
        { mount:[]}
    ],
    sections: 0,
    mounting: "",
}

const orderData = {
    orderId: "",
    orderNo: 0000,
    orderNotes: "",
    orderList: [
        { chimneyDataId:[] }
    ],
}
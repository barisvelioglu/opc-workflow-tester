const { DataType } = require("node-opcua");
 
module.exports = [
    { nodeId : "ST300.MES.St300MachineStatus", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300MoveNode1", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300MoveNode2", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300MoveNode3", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300MoveNode4", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300MoveNode5", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300MoveNode6", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300GearRatio", value : "", dataType : DataType.String },
    { nodeId : "ST300.MES.St300WorkOrder", value : "", dataType : DataType.String },
    { nodeId : "ST300.MES.St300CollectParts", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300RawTransferGear", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300BearingType1_1", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300BearingType1_2", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300BearingType2_1", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300BearingType2_2", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300TransferShaftClassic", value : 0, dataType : DataType.Int32 }
];
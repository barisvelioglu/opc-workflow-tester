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
    { nodeId : "ST300.MES.St300TransferShaftClassic", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300ProgramJob1", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300ProgramJob2", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300ProgramJob3", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300ProgramJob4", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300ProgramJob5", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St301InputCAM1", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St301InputCAM2", value : 0, dataType : DataType.Int32 },

    { nodeId : "ST300.MES.St300PickTransferShaft", value : 0, dataType : DataType.Int32 },
    { nodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320MachineState", value : 0, dataType : DataType.Int16 },
    { nodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProcessStatus", value : 0, dataType : DataType.Byte },
    { nodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DoorIsOpen", value : false, dataType : DataType.Boolean },
    { nodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320WorkOrderActive", value : false, dataType : DataType.Boolean },
    

];
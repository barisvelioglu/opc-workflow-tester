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
    


    { nodeId : "ST300.MES.St300ReadProcess", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St301Status", value : 0, dataType : DataType.Int32 },
    { nodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320WorkOrderNo", value : "", dataType : DataType.String },
    { nodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProductType", value : 0, dataType : DataType.Int16 },
    { nodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320IIWAinNode3", value : false, dataType : DataType.Boolean },
    { nodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320PartsPlaced", value : false, dataType : DataType.Boolean },
    { nodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DMCReadCode", value :"", dataType : DataType.String },
    { nodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320PartResult", value :0, dataType : DataType.Byte },
    { nodeId : "ST300.MES.St300TransferShaftLoadTray", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St301Status", value : 0, dataType : DataType.Int32 },


    { nodeId : "ST300.MES.St300ProgramJob1", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300ProgramJob2", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300ProgramJob3", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300ProgramJob4", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300ProgramJob5", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300ProgramJob6", value : 0, dataType : DataType.Int32 }, 
    { nodeId : "ST300.MES.St300ProgramJob7", value : 0, dataType : DataType.Int32 },  
    { nodeId : "ST300.MES.St300ProgramJob8", value : 0, dataType : DataType.Int32 },  
    { nodeId : "ST300.MES.St301TransferCAM2", value : 0, dataType : DataType.Int32 },             
    { nodeId : "ST300.MES.St300ProgramJob9", value : 0, dataType : DataType.Int32 },   
    { nodeId : "ST300.MES.St300InputEngravingLoad", value : 0, dataType : DataType.Int32 },

    { nodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DMCSerialNo", value : "", dataType : DataType.String }, 



    { nodeId : "ST300.MES.St301InputCAM1", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St301InputCAM2", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300LoadInputSubAssyParts", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300UnloadInputSubassy", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St301CAM3Finished", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300LoadTransferSubAssyPart", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300UnloadTransferSubassy", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300LoadJig", value : 0, dataType : DataType.Int32 },
    { nodeId : "ST300.MES.St300UnloadTransferSubassy", value : 0, dataType : DataType.Int32 },

    { nodeId : "ST300.MES.St300PickTransferShaft", value : 0, dataType : DataType.Int32 },
    { nodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320MachineState", value : 0, dataType : DataType.Int16 },
    { nodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProcessStatus", value : 0, dataType : DataType.Byte },
    { nodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DoorIsOpen", value : false, dataType : DataType.Boolean },
    { nodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320WorkOrderActive", value : false, dataType : DataType.Boolean },


    { nodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310MachineState", value : 0, dataType : DataType.Int16 },
    { nodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310ProcessStatus", value : 0, dataType : DataType.Byte },
    { nodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310DoorIsOpen", value : false, dataType : DataType.Boolean },
    { nodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310WorkOrderActive", value : false, dataType : DataType.Boolean },

    { nodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310WorkOrderNo", value : "", dataType : DataType.String },
    { nodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310ProductType", value : 0, dataType : DataType.Int16 },
    { nodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310IIWAinNode4", value : false, dataType : DataType.Boolean },
    { nodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310PartsPlaced", value : false, dataType : DataType.Boolean },
    { nodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310DMCReadCode", value :"", dataType : DataType.String },
    { nodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310PartResult", value :0, dataType : DataType.Byte },





    

];
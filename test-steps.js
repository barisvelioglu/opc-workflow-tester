const { DataType } = require("node-opcua");

module.exports = [
    {
        StepNo : 1,
        Description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300MachineStatus",
                NodeDesiredValue : 1
            }
        ]
    },
    {
        StepNo : 2,
        Description : "Nulla blandit aliquet tristique. Sed nulla dui, volutpat id efficitur vulputate, egestas id mauris",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300WorkOrder",
                NodeDesiredValue : "1000148.3",
                NodeDataType : DataType.String
            },
            {
                NodeId : "ST300.MES.St300GearRatio",
                NodeDesiredValue : "20:1",
                NodeDataType : DataType.String
            },
            {
                NodeId : "ST300.MES.St300MoveNode1",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            }
        ]
    },
    {
        StepNo : 3,
        Description : "Aenean bibendum rhoncus nibh quis euismod",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300MoveNode1",
                NodeDesiredValue : "2",
            }
        ]
    },
    {
        StepNo : 4,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300CollectParts",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
            {
                NodeId : "ST300.MES.St300RawTransferGear",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
            {
                NodeId : "ST300.MES.St300BearingType1_1",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
            {
                NodeId : "ST300.MES.St300BearingType1_2",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
            {
                NodeId : "ST300.MES.St300BearingType2_1",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
            {
                NodeId : "ST300.MES.St300BearingType2_2",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },            {
                NodeId : "ST300.MES.St300TransferShaftClassic",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            }

        ]
    },
    {
        StepNo : 5,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300CollectParts",
                NodeDesiredValue : "2",
            },
            {
                NodeId : "ST300.MES.St300RawTransferGear",
                NodeDesiredValue : "99"
            },
            {
                NodeId : "ST300.MES.St300BearingType1_1",
                NodeDesiredValue : "99"
            },
            {
                NodeId : "ST300.MES.St300BearingType1_2",
                NodeDesiredValue : "99"
            },
            {
                NodeId : "ST300.MES.St300BearingType2_1",
                NodeDesiredValue : "99"
            },
            {
                NodeId : "ST300.MES.St300BearingType2_2",
                NodeDesiredValue : "99"
            },            {
                NodeId : "ST300.MES.St300TransferShaftClassic",
                NodeDesiredValue : "99"
            }

        ]
    },
    {
        StepNo : 6,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300MoveNode2",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        StepNo : 7,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300MoveNode2",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            },            
            {
                NodeId : "ST300.MES.St301Status",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        StepNo : 8,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob1",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        StepNo : 9,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob1",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        StepNo : 10,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob2",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        StepNo : 11,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob2",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        StepNo : 12,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob3",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        StepNo : 13,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob3",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            },            
            {
                NodeId : "ST300.MES.St301InputCAM1",
                NodeDesiredValue : "3",
                NodeDataType : DataType.Int32
            },
        ]
    },
    //34.satıra kadar ki kısım
    {
        StepNo : 14,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob1",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        StepNo : 15,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob1",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            }
        ]
    },
    {
        StepNo : 16,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob4",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        StepNo : 17,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob4",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            }
        ]
    },    
    {
        StepNo : 18,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob4",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        StepNo : 19,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300MoveNode2",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            },
            {
                NodeId : "ST300.MES.St300ProgramJob4",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            }
        ]
    },
    {
        StepNo : 20,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob5",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        StepNo : 21,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St301InputCAM2",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            }
        ]
    },  
    {
        StepNo : 22,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300MoveNode3",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        StepNo : 23,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300MoveNode3",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            }
        ]
    },
    {
        StepNo : 24,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300PickTransferShaft",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        StepNo : 25,
        Description : "Proin et tellus a mi lobortis suscipit",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300PickTransferShaft",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320MachineState",
                NodeDesiredValue : "4",
                NodeDataType : DataType.Int16
            },            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProcessStatus",
                NodeDesiredValue : 0,
                NodeDataType : DataType.Byte
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DoorIsOpen",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320WorkOrderActive",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            }
        ]
    },
  
    {
        StepNo : 26,
        Description : "Laser Start Process",
        NodesToSendValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320WorkOrderNo",
                NodeDesiredValue : "1000104.13",
                NodeDataType : DataType.String
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProductType",
                NodeDesiredValue : 4,
                NodeDataType : DataType.Int16
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320IIWAinNode3",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            },
        ]
    },
    {
        StepNo : 27,
        Description : "Laser DoorIsOpen",
        NodesToCheckValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DoorIsOpen",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            }
        ]
    },

    {
        StepNo : 28,
        Description : "IIWA Locate transfer shaft under camera area",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300ReadProcess",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            }
        ]
    },
    {
        StepNo : 29,
        Description : "IIWA In Position, Parts placed on true places to start the operation",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300ReadProcess",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int32
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320PartsPlaced",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            }            
        ]
    },


    {
        StepNo : 30,
        Description : "Laser IIWAInReadPosition",
        NodesToSendValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320WorkOrderActive",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            }
        ]
    },
    {
        StepNo : 31,
        Description : "IIWA In Position, Parts placed on true places to start the operation",
        NodesToCheckValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProcessStatus",
                NodeDesiredValue : 16,
                NodeDataType : DataType.Byte
            }         
        ]
    },
    {
        StepNo : 32,
        Description : "IIWA In Position, Parts placed on true places to start the operation",
        NodesToCheckValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProcessStatus",
                NodeDesiredValue : 32,
                NodeDataType : DataType.Byte
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DMCReadCode",
                NodeDesiredValue : "*",
                NodeDataType : DataType.String
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320PartResult",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Byte
            }               
        ]
    },

    {
        StepNo : 33,
        Description : "IIWA Put transfer shaft on tray",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300TransferShaftLoadTray",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            }
        ]
    },
    {
        StepNo : 34,
        Description : "IIWA Part on tray",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300TransferShaftLoadTray",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int32
            }      
        ]
    },

    {
        StepNo : 35,
        Description : "Laser IIWA Leave the zone",
        NodesToSendValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320IIWAinNode3",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProcessStatus",
                NodeDesiredValue : 0,
                NodeDataType : DataType.Byte
            },            
        ]
    },
    {
        StepNo : 36,
        Description : "Laser READY",
        NodesToCheckValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320MachineState",
                NodeDesiredValue : "4",
                NodeDataType : DataType.Int16
            },            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProcessStatus",
                NodeDesiredValue : 0,
                NodeDataType : DataType.Byte
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DoorIsOpen",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320WorkOrderActive",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            }    
        ]
    },


    {
        StepNo : 37,
        Description : "IIWA Go node 2 (CNC)",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300MoveNode2",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            }
        ]
    },
    {
        StepNo : 38,
        Description : "IIWA In node 2 (CNC)",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300MoveNode2",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int32
            }      
        ]
    },

    
    {
        StepNo : 39,
        Description : "CNC CAM 2 Program finished",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St301InputCAM2",
                NodeDesiredValue : 3,
                NodeDataType : DataType.Int32
            }      
        ]
    },

    {
        StepNo : 40,
        Description : "IIWA Program Code #InputShaftCAM2 (#) //St300ProgramJob10=2",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob5",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int32
            },
            {
                NodeId : "ST300.MES.St301Status",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            }      
        ]
    },

    {
        StepNo : 41,
        Description : "IIWA Start Program Code #KnockKnock (#)",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob1",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 42,
        Description : "IIWA Program Code #KnockKnock (#)",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob1",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int32
            }    
        ]
    },

    {
        StepNo : 43,
        Description : "IIWA Start Program Code #UnloadtheLeft (#)",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob6",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 44,
        Description : "IIWA Program Code #UnloadtheLeft (#)",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob6",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int32
            }    
        ]
    },

    {
        StepNo : 45,
        Description : "IIWA Start Program Code #LoadLeftSide (#)",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob9",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 46,
        Description : "IIWA Program Code #UnloadtheLeft (#)",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob9",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int32
            }    
        ]
    },

    {
        StepNo : 47,
        Description : "IIWA Start Program Code #TransferGearCAM1 (#)",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob7",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 48,
        Description : "IIWA Program Code #UnloadtheLeft (#)",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St301TransferCAM2",
                NodeDesiredValue : 3,
                NodeDataType : DataType.Int32
            }    
        ]
    },


    {
        StepNo : 49,
        Description : "IIWA Go node 3 (Laser)",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300MoveNode3",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 50,
        Description : "IIWA In node 3 (Laser)",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300MoveNode3",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int32
            }    
        ]
    },

    {
        StepNo : 51,
        Description : "IIWA Go node 3 (Laser)",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300MoveNode3",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 52,
        Description : "IIWA In node 3 (Laser)",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300MoveNode3",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int32
            }    
        ]
    },

    
    {
        StepNo : 53,
        Description : "Laser READY",
        NodesToCheckValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320MachineState",
                NodeDesiredValue : "4",
                NodeDataType : DataType.Int16
            },            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProcessStatus",
                NodeDesiredValue : 0,
                NodeDataType : DataType.Byte
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DoorIsOpen",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320WorkOrderActive",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            }    
        ]
    },


    {
        StepNo : 54,
        Description : "Laser Start Process",
        NodesToSendValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320WorkOrderNo",
                NodeDesiredValue : "1000104.13",
                NodeDataType : DataType.String
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DMCSerialNo",
                NodeDesiredValue : "2042-1072-001",
                NodeDataType : DataType.String
            },            
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProductType",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int16
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320IIWAinNode3",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            },
        ]
    },

    {
        StepNo : 55,
        Description : "Laser Door Opened",
        NodesToCheckValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DoorIsOpen",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            }
        ]
    },

    {
        StepNo : 56,
        Description : "IIWA Put input shaft on fixture 320.1",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300InputEngravingLoad",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 57,
        Description : "IIWA Part on location",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300InputEngravingLoad",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int32
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320PartsPlaced",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            }       
        ]
    },


    {
        StepNo : 58,
        Description : "Laser Start Program",
        NodesToSendValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320WorkOrderActive",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            }
        ]
    },

    {
        StepNo : 59,
        Description : "Laser Start Process",
        NodesToCheckValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProcessStatus",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Byte
            }   
        ]
    },

    {
        StepNo : 60,
        Description : "Laser Finish Process",
        NodesToCheckValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProcessStatus",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Byte
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320PartResult",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Byte
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DoorIsOpen",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            }, 
        ]
    },

    {
        StepNo : 61,
        Description : "IIWA Take input shaft from fixture 320.1 and put on tray",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300LoadInputShaft",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 62,
        Description : "IIWA On position",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300LoadInputShaft",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int32
            }
        ]
    },


    {
        StepNo : 63,
        Description : "Laser Close Door",
        NodesToSendValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320IIWAinNode3",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProcessStatus",
                NodeDesiredValue : 0,
                NodeDataType : DataType.Byte
            },            
        ]
    },


    {
        StepNo : 64,
        Description : "Laser Door Closed",
        NodesToCheckValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DoorIsOpen",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            },
        ]
    },

    {
        StepNo : 65,
        Description : "Laser READY",
        NodesToCheckValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320MachineState",
                NodeDesiredValue : "4",
                NodeDataType : DataType.Int16
            },            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProcessStatus",
                NodeDesiredValue : 0,
                NodeDataType : DataType.Byte
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DoorIsOpen",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320WorkOrderActive",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            }  
        ]
    },


    {
        StepNo : 66,
        Description : "IIWA Go node 4 (press)",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300MoveNode4",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 67,
        Description : "IIWA In node 4 (press)",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300MoveNode4",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 68,
        Description : "Press READY",
        NodesToCheckValue : [
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310MachineState",
                NodeDesiredValue : "4",
                NodeDataType : DataType.Int16
            },            
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310ProcessStatus",
                NodeDesiredValue : 0,
                NodeDataType : DataType.Byte
            },
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310DoorIsOpen",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            },
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310WorkOrderActive",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            }   
        ]
    },


    {
        StepNo : 69,
        Description : "Press Start Process",
        NodesToSendValue : [
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310WorkOrderNo",
                NodeDesiredValue : "1000104.13",
                NodeDataType : DataType.String
            },
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310ProductType",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int16
            },
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310IIWAinNode4",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            },
        ]
    },

    {
        StepNo : 70,
        Description : "Press Door Opened",
        NodesToCheckValue : [
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310DoorIsOpen",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            },
        ]
    },


    {
        StepNo : 71,
        Description : "IIWA Put input shaft on fixture 310.1, 30304 to 310.2 and 32205 to 310.3",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300LoadInputSubAssyParts",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 72,
        Description : "IIWA Part on location",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300LoadInputSubAssyParts",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 73,
        Description : "IIWA Part on location",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300LoadInputSubAssyParts",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int32
            },
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310PartsPlaced",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            }              
        ]
    },


    {
        StepNo : 74,
        Description : "Press Start Press Program 1",
        NodesToSendValue : [
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310WorkOrderActive",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            }
        ]
    },

    {
        StepNo : 75,
        Description : "Press Program 1 Start",
        NodesToCheckValue : [
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310ProcessStatus",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Byte
            },
        ]
    },

    {
        StepNo : 76,
        Description : "Press Program 1 Complete",
        NodesToCheckValue : [
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310ProcessStatus",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Byte
            },
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310DoorIsOpen",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            },
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310PartResult",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Byte
            }  
        ]
    },

    {
        StepNo : 77,
        Description : "IIWA Take Input Subassy from 310.3 and put on tray position",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300UnloadInputSubassy",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            },
        ]
    },

    {
        StepNo : 78,
        Description : "IIWA Part on location",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300UnloadInputSubassy",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int32
            },
        ]
    },

    {
        StepNo : 79,
        Description : "Press Close Press Door",
        NodesToSendValue : [ 
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310IIWAinNode4",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            },
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310ProcessStatus",
                NodeDesiredValue : 0,
                NodeDataType : DataType.Byte
            }
        ]
    },

    {
        StepNo : 80,
        Description : "Press READY",
        NodesToCheckValue : [
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310MachineState",
                NodeDesiredValue : "4",
                NodeDataType : DataType.Int16
            },            
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310ProcessStatus",
                NodeDesiredValue : 0,
                NodeDataType : DataType.Byte
            },
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310DoorIsOpen",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            },
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310WorkOrderActive",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            }  
        ]
    },

    {
        StepNo : 81,
        Description : "Press READY",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St301CAM3Finished",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 82,
        Description : "IIWA Go node 2 (CNC)",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300MoveNode2",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        StepNo : 83,
        Description : "IIWA In node 2 (CNC) & Program Code #TransferGearCAM1 (#)",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300MoveNode2",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            },            
            {
                NodeId : "ST300.MES.St301Status",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
            {
                NodeId : "ST300.MES.St300ProgramJob7",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        StepNo : 84,
        Description : "CNC READY",
        NodesToCheckValue : [          
            {
                NodeId : "ST300.MES.St301Status",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 85,
        Description : "IIWA Start Program Code #KnockKnock (#)",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob1",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        StepNo : 86,
        Description : "Start Program Code #KnockKnock (#)",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob1",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            },
        ]
    },

    {
        StepNo : 87,
        Description : "IIWA Start Program Code #KnockKnock (#)",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob8",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        StepNo : 88,
        Description : "Start Program Code #KnockKnock (#)",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob8",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            },
        ]
    },

    {
        StepNo : 89,
        Description : "IIWA Go node 3 (Laser)",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300MoveNode3",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        StepNo : 90,
        Description : "IIWA In node 3 (Laser)",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300MoveNode3",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 91,
        Description : "IIWA In node 3 (Laser)",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300MoveNode3",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 92,
        Description : "Laser READY",
        NodesToCheckValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320MachineState",
                NodeDesiredValue : "4",
                NodeDataType : DataType.Int16
            },            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProcessStatus",
                NodeDesiredValue : 0,
                NodeDataType : DataType.Byte
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DoorIsOpen",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320WorkOrderActive",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            }    
        ]
    },

    {
        StepNo : 93,
        Description : "Laser Start Process",
        NodesToSendValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320WorkOrderNo",
                NodeDesiredValue : "1000104.13",
                NodeDataType : DataType.String
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DMCSerialNo",
                NodeDesiredValue : "2042-1072-001",
                NodeDataType : DataType.String
            },            
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProductType",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int16
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320IIWAinNode3",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            },
        ]
    },

    {
        StepNo : 94,
        Description : "Laser DoorIsOpen",
        NodesToCheckValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DoorIsOpen",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            }
        ]
    },

    {
        StepNo : 95,
        Description : "IIWA Put transfer gear on fixture 320.2",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300TransferEngravingLoad",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 96,
        Description : "IIWA Part on location",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300TransferEngravingLoad",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320PartsPlaced",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            }   
        ]
    },

    
    {
        StepNo : 97,
        Description : "Laser Start Program",
        NodesToSendValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320WorkOrderActive",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            }
        ]
    },

    {
        StepNo : 98,
        Description : "Laser Process Started",
        NodesToCheckValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProcessStatus",
                NodeDesiredValue : 4,
                NodeDataType : DataType.Byte
            }         
        ]
    },

    {
        StepNo : 99,
        Description : "Laser Finish Process",
        NodesToCheckValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProcessStatus",
                NodeDesiredValue : 8,
                NodeDataType : DataType.Byte
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320PartResult",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Byte
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DoorIsOpen",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            }, 
        ]
    },

    {
        StepNo : 100,
        Description : "IIWA Take transfer gear from fixture 320.2 and put on tray",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300UnloadTransferGear",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 101,
        Description : "IIWA On position",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300UnloadTransferGear",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 102,
        Description : "Close Laser Door",
        NodesToSendValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320IIWAinNode3",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProcessStatus",
                NodeDesiredValue : 0,
                NodeDataType : DataType.Byte
            },            
        ]
    },

    {
        StepNo : 103,
        Description : "Laser Door Closed",
        NodesToCheckValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DoorIsOpen",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            },
        ]
    },

    {
        StepNo : 104,
        Description : "Laser READY",
        NodesToCheckValue : [
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320MachineState",
                NodeDesiredValue : "4",
                NodeDataType : DataType.Int16
            },            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320ProcessStatus",
                NodeDesiredValue : 0,
                NodeDataType : DataType.Byte
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320DoorIsOpen",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            },
            {
                NodeId : "St320.St320.320_000+S-K010.DataBlocksGlobal.OPC.St320WorkOrderActive",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            }    
        ]
    },

    {
        StepNo : 104,
        Description : "IIWA Go node 4 (press)",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300MoveNode4",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 105,
        Description : "IIWA In node 4 (press)",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300MoveNode4",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        StepNo : 106,
        Description : "Press READY",
        NodesToCheckValue : [
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310MachineState",
                NodeDesiredValue : "4",
                NodeDataType : DataType.Int16
            },            
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310ProcessStatus",
                NodeDesiredValue : 0,
                NodeDataType : DataType.Byte
            },
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310DoorIsOpen",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            },
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310WorkOrderActive",
                NodeDesiredValue : false,
                NodeDataType : DataType.Boolean
            }   
        ]
    },


    {
        StepNo : 107,
        Description : "Press Start Process",
        NodesToSendValue : [
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310WorkOrderNo",
                NodeDesiredValue : "1000104.13",
                NodeDataType : DataType.String
            },
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310ProductType",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int16
            },
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310IIWAinNode4",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            },
        ]
    },


    {
        StepNo : 108,
        Description : "Press Door Opened",
        NodesToCheckValue : [
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310DoorIsOpen",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            },
        ]
    },


    {
        StepNo : 109,
        Description : "IIWA Put bearing 32205 (B1) to 310.3, transfer gear on fixture 310.3, 30304 (B2) to 310.2 and transfer shaft to 310.1",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300LoadTransferSubAssyPart",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        StepNo : 110,
        Description : "IIWA Part on location & Parts placed on true places to start the operation",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300LoadTransferSubAssyPart",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            },            
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310PartsPlaced",
                NodeDesiredValue : true,
                NodeDataType : DataType.Boolean
            }     
        ]
    },
];
const { DataType } = require("node-opcua");

module.exports = [
    {
        
        Description : "IIWA READY",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300MachineStatus",
                NodeDesiredValue : 1
            }
        ]
    },
    {
        
        Description : "IIWA GO CNC buffer area",
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
        
        Description : "IIWA In node 1",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300MoveNode1",
                NodeDesiredValue : "2",
            }
        ]
    },
    {
        
        Description : "IIWA Take blank input shaft from line 1.1 and put on tray.30304 from line 2.1, 32205 from line 3.1 and 3.2, transfer shaft from 4.1 and tranfer gear from 5.1 and put on tray",
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
        
        Description : "IIWA Parts on tray",
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
        
        Description : "IIWA In node 2 (CNC) & CNC READY",
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
        
        Description : "IIWA Program Code #KnockKnock (#)",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob1",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        
        Description : "IIWA Start Program Code #LoadLeftSide (#)",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob2",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        
        Description : "IIWA Start Program Code #LoadLeftSide (#)",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob2",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        
        Description : "IIWA Start Program Code #InputShaftCAM1 (#)",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob3",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        
        Description : "IIWA CAM 1 Program Started",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob3",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            },            
            {
                NodeId : "ST300.MES.St301InputCAM1",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            },
        ]
    },

    {
        
        Description : "IIWA CAM 1 Program Started",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St301InputCAM1",
                NodeDesiredValue : "3",
                NodeDataType : DataType.Int32
            },
        ]
    },
    //34.satıra kadar ki kısım
    {
        
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
        
        Description : "IIWA Program Code #KnockKnock (#)",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob1",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            }
        ]
    },
    {
        
        Description : "IIWA Start Program Code #Turn&Load (#)",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob4",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        
        Description : "IIWA In node 2 (CNC) & Program Code #Turn&Load (#)",
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
        
        Description : "IIWA Start Program Code #InputShaftCAM2 (#)",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300ProgramJob5",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        
        Description : "CNC CAM 2 Program Started",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St301InputCAM2",
                NodeDesiredValue : "2",
                NodeDataType : DataType.Int32
            }
        ]
    },  
    {
        
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
        
        Description : "IIWA Take Transfer shaft from tray",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300PickTransferShaft",
                NodeDesiredValue : "1",
                NodeDataType : DataType.Int32
            },
        ]
    },
    {
        
        Description : "IIWA Part taken",
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

    {
        
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
        
        Description : "Press Program 1 Start",
        NodesToCheckValue : [
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310ProcessStatus",
                NodeDesiredValue : 4,
                NodeDataType : DataType.Byte
            },
        ]
    },

    {
        
        Description : "Press Program 1 Complete",
        NodesToCheckValue : [
            {
                NodeId : "St310.St310.310_000+S-K010.DataBlocksGlobal.OPC.St310ProcessStatus",
                NodeDesiredValue : 8,
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
        
        Description : "IIWA Take Transfer Subassy from 310.3 and put on tray position",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300UnloadTransferSubassy",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            },
        ]
    },

    {
        
        Description : "IIWA Part on location",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300UnloadTransferSubassy",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int32
            },
        ]
    },

    {
        
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
        
        Description : "IIWA Go node 5 (WP1)",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300MoveNode5",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        
        Description : "IIWA In node 5 (WP1)",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300MoveNode5",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int32
            }
        ]
    },

    
    {
        
        Description : "IIWA Locate subassys to buffer zone",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300LoadJig",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        
        Description : "IIWA Subassys are in buffer zone",
        NodesToCheckValue : [
            {
                NodeId : "ST300.MES.St300LoadJig",
                NodeDesiredValue : 2,
                NodeDataType : DataType.Int32
            }
        ]
    },

    {
        
        Description : "IIWA Locate subassys to buffer zone",
        NodesToSendValue : [
            {
                NodeId : "ST300.MES.St300MoveNode6",
                NodeDesiredValue : 1,
                NodeDataType : DataType.Int32
            }
        ]
    },
];
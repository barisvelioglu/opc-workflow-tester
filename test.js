const { DataType } = require("node-opcua");

module.exports = {
    CNC : {
		Image : "/images/cnc.jpg",
        Description : "Numerical control is the automated control of machining tools and 3D printers by means of a computer. A CNC machine processes a piece of material to meet specifications by following a coded programmed instruction and without a manual operator directly controlling the machining operation.",
        TestSteps : [
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
        ],
        ResetNodeValues : [
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
        
        ]
    },
    MOLDING : {
		Image : "/images/molding.jpeg",
        Description : "An Injection molding machine, or, also known as an injection press, is a machine for manufacturing plastic products by the injection molding process. It consists of two main parts, an injection unit and a clamping unit.",
        TestSteps : [
            {
                
                Description : "MACHINE READY",
                NodesToCheckValue : [
                    {
                        NodeId : "St200.St200.St200MachineStatus",
                        NodeDesiredValue : 2
                    }
                ]
            },
            {
                
                Description : "MAKE ORDER",
                NodesToSendValue : [
                    {
                        NodeId : "St200.St200.St200ChillingDuration",
                        NodeDesiredValue : 22
                    },
                    {
                        NodeId : "s=St200.St200.ST200AmountOfPlastic",
                        NodeDesiredValue : 54
                    },
                    {
                        NodeId : "St200.St200.ST200PartQuantity",
                        NodeDesiredValue : 16
                    },
                    {
                        NodeId : "St200.St200.ST210MoldingOrder",
                        NodeDesiredValue : 1
                    }
                ]
            },
            {
                
                Description : "Is ST200PressCount equal to SplittingThreshold Value?",
                NodesToCheckValue : [
                    {
                        NodeId : "St200.St200.ST200PressCount",
                        NodeDesiredValue : 8
                    }
                ]
            },
            {
                
                Description : "Molding Machine Finishes",
                NodesToCheckValue : [
                    {
                        NodeId : "St200.St200.ST200WorkOrderActive",
                        NodeDesiredValue : false
                    }
                ]
            },
        ],
        ResetNodeValues : [
            { nodeId : "St200.St200.ST200WorkOrderActive", value : false, dataType : DataType.Boolean },
            { nodeId : "St200.St200.ST200PressCount", value : 0, dataType : DataType.Int32 },
            { nodeId : "St200.St200.ST210MoldingOrder", value : 0, dataType : DataType.Int32 },
            { nodeId : "St200.St200.ST200PartQuantity", value : 0, dataType : DataType.Int32 },
            { nodeId : "St200.St200.ST200AmountOfPlastic", value : 0, dataType : DataType.Int32 },
            { nodeId : "St200.St200.St200ChillingDuration", value : 0, dataType : DataType.Int32 },   
            { nodeId : "St200.St200.St200.St200.St200MachineStatus", value : 0, dataType : DataType.Int32 },         
            
        ]
    },
	ASSEMBLY_WP1 : {
		Image : "/images/molding.jpeg",
        Description : "WP1 Assembly TestSteps",
        TestSteps : [
            
            {
                
                Description : "Make WP1 Starved",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit2",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit1",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP1_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP1 Starved ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP1_Starved",
                        NodeDesiredValue : 1
                    }
                ]
            },
		            {
                
                Description : "Make WP1 Transfer",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit2",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit1",
                        NodeDesiredValue : 0
                    },
					{
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit3",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP1_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP1 Transfer ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP1_Transfer",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP1 Cycle",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit2",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit1",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "AdvancedTags.WP1_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP1 Cycling ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP1_Cycling",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP1 Down",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit2",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit1",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP1_Down",
                        NodeDesiredValue : 1
                    },
                   
                ]
            },
			{
                
                Description : "WP1 Down ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP1_Down",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP1 Cycle2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit2",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit1",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "AdvancedTags.WP1_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP1 Cycling2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP1_Cycling",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP1 Block",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit2",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit1",
                        NodeDesiredValue : 0
                    },
					
					 {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit3",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "AdvancedTags.WP1_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP1 Block ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP1_Block",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			 {
                
                Description : "Make WP1 Transfer2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit2",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit1",
                        NodeDesiredValue : 0
                    },
					 {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit3",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP1_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP1 Transfer2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP1_Transfer",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			{
                
                Description : "Make WP1 Starved2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit2",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit1",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP1_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP1 Starved2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP1_Starved",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			
        ],
        ResetNodeValues : [

        ]
	},
	ASSEMBLY_WP2 : {
		Image : "/images/molding.jpeg",
        Description : "WP2 Assembly TestSteps",
        TestSteps : [
            
            {
                
                Description : "Make WP2 Starved",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit3",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit3",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP2_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP2 Starved ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP2_Starved",
                        NodeDesiredValue : 1
                    }
                ]
            },
		            {
                
                Description : "Make WP2 Transfer",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit3",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit3",
                        NodeDesiredValue : 0
                    },
					{
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit7",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP2_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP2 Transfer ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP2_Transfer",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP2 Cycle",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit3",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit3",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "AdvancedTags.WP2_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP2 Cycling ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP2_Cycling",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP2 Down",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit3",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit3",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "ST110.Device1.110_000+S-K010.DataBlocksGlobal.OPC.St110ErrorFlag",
                        NodeDesiredValue : 1
                    },
                   
                ]
            },
			{
                
                Description : "WP2 Down ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP2_Down",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP2 Cycle2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit3",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit3",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "AdvancedTags.WP2_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP2 Cycling2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP2_Cycling",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP2 Block",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit3",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit3",
                        NodeDesiredValue : 0
                    },
					
					 {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit7",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "AdvancedTags.WP2_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP2 Block ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP2_Block",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			 {
                
                Description : "Make WP2 Transfer2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit3",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit3",
                        NodeDesiredValue : 0
                    },
					 {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit7",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP2_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP2 Transfer2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP2_Transfer",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			{
                
                Description : "Make WP2 Starved2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit3",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit3",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP2_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP2 Starved2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP2_Starved",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			
        ],
        ResetNodeValues : [

        ]
	},
	ASSEMBLY_WP3 : {
		Image : "/images/molding.jpeg",
        Description : "WP3 Assembly TestSteps",
        TestSteps : [
            
            {
                
                Description : "Make WP3 Starved",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit4",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit7",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP3_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP3 Starved ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP3_Starved",
                        NodeDesiredValue : 1
                    }
                ]
            },
		            {
                
                Description : "Make WP3 Transfer",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit4",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit7",
                        NodeDesiredValue : 0
                    },
					{
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit1",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP3_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP3 Transfer ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP3_Transfer",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP3 Cycle",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit4",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit7",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "AdvancedTags.WP3_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP3 Cycling ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP3_Cycling",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP3 Down",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit4",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit7",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "ST110.Device1.110_000+S-K010.DataBlocksGlobal.OPC.St110ErrorFlag",
                        NodeDesiredValue : 1
                    },
                   
                ]
            },
			{
                
                Description : "WP3 Down ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP3_Down",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP3 Cycle2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit4",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit7",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "AdvancedTags.WP3_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP3 Cycling2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP3_Cycling",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP3 Block",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit4",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit7",
                        NodeDesiredValue : 0
                    },
					
					 {
                        NodeId : "ST120.ST120.120_000+S-K010.DataBlocksGlobal.OPC.St120ErrorFlag",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "AdvancedTags.WP3_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP3 Block ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP3_Block",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			 {
                
                Description : "Make WP3 Transfer2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit4",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit7",
                        NodeDesiredValue : 0
                    },
					 {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit1",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP3_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP3 Transfer2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP3_Transfer",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			{
                
                Description : "Make WP3 Starved2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110JigPresentBit4",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St110ProcessStatusBit7",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP3_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP3 Starved2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP3_Starved",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			
        ],
        ResetNodeValues : [

        ]
	},
	ASSEMBLY_WP4 : {
		Image : "/images/molding.jpeg",
        Description : "WP4 Assembly TestSteps",
        TestSteps : [
            
            {
                
                Description : "Make WP4 Starved",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit2",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit1",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP4_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP4 Starved ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP4_Starved",
                        NodeDesiredValue : 1
                    }
                ]
            },
		            {
                
                Description : "Make WP4 Transfer",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit2",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit1",
                        NodeDesiredValue : 0
                    },
					{
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit3",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP4_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP4 Transfer ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP4_Transfer",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP4 Cycle",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit2",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit1",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "AdvancedTags.WP4_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP4 Cycling ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP4_Cycling",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP4 Down",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit2",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit1",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "ST120.ST120.120_000+S-K010.DataBlocksGlobal.OPC.St120ErrorFlag",
                        NodeDesiredValue : 1
                    },
                   
                ]
            },
			{
                
                Description : "WP4 Down ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP4_Down",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP4 Cycle2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit2",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit1",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "AdvancedTags.WP4_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP4 Cycling2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP4_Cycling",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP4 Block",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit2",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit1",
                        NodeDesiredValue : 0
                    },
					
					 {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit3",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "AdvancedTags.WP4_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP4 Block ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP4_Block",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			 {
                
                Description : "Make WP4 Transfer2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit2",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit1",
                        NodeDesiredValue : 0
                    },
					 {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit3",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP4_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP4 Transfer2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP4_Transfer",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			{
                
                Description : "Make WP4 Starved2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit2",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit1",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP4_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP4 Starved2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP4_Starved",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			
        ],
        ResetNodeValues : [

        ]
	},
	ASSEMBLY_WP5 : {
		Image : "/images/molding.jpeg",
        Description : "WP5 Assembly TestSteps",
        TestSteps : [
            
            {
                
                Description : "Make WP5 Starved",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit3",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit3",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP5_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP5 Starved ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP5_Starved",
                        NodeDesiredValue : 1
                    }
                ]
            },
		            {
                
                Description : "Make WP5 Transfer",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit3",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit3",
                        NodeDesiredValue : 0
                    },
					{
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit5",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP5_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP5 Transfer ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP5_Transfer",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP5 Cycle",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit3",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit3",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "AdvancedTags.WP5_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP5 Cycling ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP5_Cycling",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP5 Down",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit3",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit3",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "ST120.ST120.120_000+S-K010.DataBlocksGlobal.OPC.St120ErrorFlag",
                        NodeDesiredValue : 1
                    },
                   
                ]
            },
			{
                
                Description : "WP5 Down ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP5_Down",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP5 Cycle2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit3",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit3",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "AdvancedTags.WP5_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP5 Cycling2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP5_Cycling",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP5 Block",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit3",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit3",
                        NodeDesiredValue : 0
                    },
					
					 {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit5",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "AdvancedTags.WP5_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP5 Block ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP5_Block",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			 {
                
                Description : "Make WP5 Transfer2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit3",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit3",
                        NodeDesiredValue : 0
                    },
					 {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit5",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP5_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP5 Transfer2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP5_Transfer",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			{
                
                Description : "Make WP5 Starved2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit3",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit3",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP5_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP5 Starved2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP5_Starved",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			
        ],
        ResetNodeValues : [

        ]
	},
	ASSEMBLY_WP6 : {
		Image : "/images/molding.jpeg",
        Description : "WP6 Assembly TestSteps",
        TestSteps : [
            
            {
                
                Description : "Make WP6 Starved",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit4",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit5",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP6_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP6 Starved ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP6_Starved",
                        NodeDesiredValue : 1
                    }
                ]
            },
		            {
                
                Description : "Make WP6 Transfer",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit4",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit5",
                        NodeDesiredValue : 0
                    },
					{
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit7",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP6_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP6 Transfer ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP6_Transfer",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP6 Cycle",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit4",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit5",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "AdvancedTags.WP6_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP6 Cycling ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP6_Cycling",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP6 Down",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit4",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit5",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "ST120.ST120.120_000+S-K010.DataBlocksGlobal.OPC.St120ErrorFlag",
                        NodeDesiredValue : 1
                    },
                   
                ]
            },
			{
                
                Description : "WP6 Down ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP6_Down",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP6 Cycle2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit4",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit5",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "AdvancedTags.WP6_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP6 Cycling2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP6_Cycling",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP6 Block",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit4",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit5",
                        NodeDesiredValue : 0
                    },
					
					 {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit7",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "AdvancedTags.WP6_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP6 Block ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP6_Block",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			 {
                
                Description : "Make WP6 Transfer2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit4",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit5",
                        NodeDesiredValue : 0
                    },
					 {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit7",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP6_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP6 Transfer2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP6_Transfer",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			{
                
                Description : "Make WP6 Starved2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit4",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit5",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP6_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP6 Starved2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP6_Starved",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			
        ],
        ResetNodeValues : [

        ]
	},
	ASSEMBLY_WP7 : {
		Image : "/images/molding.jpeg",
        Description : "WP7 Assembly TestSteps",
        TestSteps : [
            
            {
                
                Description : "Make WP7 Starved",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit5",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit7",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP7_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP7 Starved ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP7_Starved",
                        NodeDesiredValue : 1
                    }
                ]
            },
		            {
                
                Description : "Make WP7 Transfer",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit5",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit7",
                        NodeDesiredValue : 0
                    },
					{
                        NodeId : "OMRON_AGV_Tags.AGV_Controller.LD90Jig2Status",
                        NodeDesiredValue : 5
                    },
                    {
                        NodeId : "AdvancedTags.WP7_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP7 Transfer ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP7_Transfer",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP7 Cycle",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit5",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit7",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "AdvancedTags.WP7_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP7 Cycling ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP7_Cycling",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP7 Down",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit5",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit7",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "ST120.ST120.120_000+S-K010.DataBlocksGlobal.OPC.St120ErrorFlag",
                        NodeDesiredValue : 1
                    },
                   
                ]
            },
			{
                
                Description : "WP7 Down ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP7_Down",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP7 Cycle2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit5",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit7",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "AdvancedTags.WP7_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP7 Cycling2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP7_Cycling",
                        NodeDesiredValue : 1
                    }
                ]
            },
			        {
                
                Description : "Make WP7 Block",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit5",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit7",
                        NodeDesiredValue : 0
                    },
					
					 {
                        NodeId : "OMRON_AGV_Tags.AGV_Controller.LD90Jig2Status",
                        NodeDesiredValue : 6
                    },
                    {
                        NodeId : "AdvancedTags.WP7_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP7 Block ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP7_Block",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			 {
                
                Description : "Make WP7 Transfer2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit5",
                        NodeDesiredValue : 1
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit7",
                        NodeDesiredValue : 0
                    },
					 {
                        NodeId : "OMRON_AGV_Tags.AGV_Controller.LD90Jig2Status",
                        NodeDesiredValue : 5
                    },
                    {
                        NodeId : "AdvancedTags.WP7_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP7 Transfer2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP7_Transfer",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			{
                
                Description : "Make WP7 Starved2",
                NodesToSendValue : [
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120JigPresentBit5",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "Test-Camurdan.Bitmask.St120ProcessStatusBit7",
                        NodeDesiredValue : 0
                    },
                    {
                        NodeId : "AdvancedTags.WP7_Down",
                        NodeDesiredValue : 0
                    },
                   
                ]
            },
			{
                
                Description : "WP7 Starved2 ",
                NodesToCheckValue : [
                    {
                        NodeId : "AdvancedTags.WP7_Starved",
                        NodeDesiredValue : 1
                    }
                ]
            },
			
			
        ],
        ResetNodeValues : [

        ]
	},
	
}

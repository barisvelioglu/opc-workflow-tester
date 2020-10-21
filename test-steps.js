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
    }
];
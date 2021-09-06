var mqtt=require('mqtt');
var http = require('http');
const {Coordinates} = require('./models')
const {Accelerometers} = require('./models');
const { Serializer } = require('v8');


module.exports =  {

    connect: function() {
        var options={
            clientId:"mqttjs01",
            username:"fintes-esp32-1@ttn",
            password:"NNSXS.PSPIQ5I3EUGLMGQ34RMBW57BUQS6DILEP6VXDKQ.JPR5XMNDFRK675KLEB2C3TUWGLYTD3IWHZYTWHFPNILK5HQS7L2A",
            clean:true};

        var client = mqtt.connect("mqtt://eu1.cloud.thethings.network",options)
        
        client.on("connect",function(){	
        
            var topic_s="v3/fintes-esp32-1@ttn/devices/eui-70b3d57ed0044a96/up";
        
            client.subscribe(topic_s,{qos:0});

            console.log("Connected")
        
        })
        
        client.on('message',function(topic, message, packet){
            //console.log("message is "+ message);
            var jsonMsg = JSON.parse(message)
            var decodedPayload = jsonMsg.uplink_message.decoded_payload;

            var Crdnt = {}
            if(decodedPayload != null){
                Crdnt.CowID = parseInt(decodedPayload.CowID)
                Crdnt.Coordinate_Lat = parseFloat (decodedPayload.latitude)
                Crdnt.Coordinate_Long = parseFloat (decodedPayload.longitude)
                if (Crdnt.Coordinate_Long == 0 && Crdnt.Coordinate_Lat == 0)
                {
                    console.log("GPS Data not valid")
                }
                else
                {
                    Coordinates.update(Crdnt, {
                        where: {
                          CowID: Crdnt.CowID
                        }
                    })
                }
                

                console.log(Crdnt.CowID + " : " + Crdnt.Coordinate_Lat + " - " + Crdnt.Coordinate_Long)

                var ACC = {}
                ACC.CowID = parseInt(decodedPayload.CowID)
                ACC.AccData_X = parseFloat (decodedPayload.acc_X)
                ACC.AccData_Y = parseFloat (decodedPayload.acc_Y)
                ACC.AccData_Z = parseFloat (decodedPayload.acc_Z)
                Accelerometers.create(ACC)
            }
            
            

            // var options = {
            //     host: 'localhost',
            //     path: '/cooordinate',
            //     //since we are listening on a custom port, we need to specify it by hand
            //     port: '8085',
            //     //This is what changes the request to a POST request
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     json:true
            // };
            // callback = function(response) {
            //     var str = ''
            //     response.on('data', function (chunk) {
            //       str += chunk;
            //     });
              
            //     response.on('end', function () {
            //       console.log(str);
            //     });
            // }

            // var req = http.request(options, callback);
            // //This is the data we are posting, it needs to be a string or a buffer
            // var Test = {}
            // Test.CowID = parseInt(decodedPayload.CowID)
            // Test.Coordinate_Lat = parseFloat (decodedPayload.latitude)
            // Test.Coordinate_Long = parseFloat (decodedPayload.longitude)
            // console.log(JSON.stringify(Test))
            // console.log(JSON.stringify(options.path))
            // req.write(JSON.stringify(Test));
            // req.end();
            
        });
    }
    
}

    



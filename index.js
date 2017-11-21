const random = require('randomstring');

exports.handler = (event, context, callback) => {
    console.log("Starting handler...");
    var output = doSomething();
    console.log("Did the job...");
    callback(null, output);
};

var doSomething = function(){
    console.log("Doing something...");
    return random.generate({ length: 6, charset:'alphabetic'});
};
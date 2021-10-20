var Collector = require('node-netflowv9');

Collector(function(flow) {
    console.log(flow);
}).listen(9000);
console.log('Listening on port 9000, run the exporter.sh now')


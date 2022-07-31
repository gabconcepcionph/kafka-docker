const kafka = require('node-kafka');
const client = new kafka.KafkaClient({
    kafkaHost:
        process.env.ENVIRONMENT === 'local'
            ? process.env.INTERNAL_KAFKA_ADDR
            : process.env.EXTERNAL_KAFKA_ADDR,
});
const Admin = kafka.Admin;
const child_process = require('child_process');
const { clearInterval } = require('timers');
const e = require('express');

const admin = new Admin(client);
const interval_id = setInterval(() => {
    if(res[1].metadata[process.env.TOPIC]){
        console.log('Kafka topic created.');
        clearInterval(interval_id);
        child_process.execSync('npm start', {stdio: 'inherit'});
    }else{
        console.log('Waiting for kafka topic to be created.')
    }
}, 1000)
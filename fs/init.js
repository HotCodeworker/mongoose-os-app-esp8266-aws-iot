/* when USE_JS_AWS_TEST enabled in topfeature.h

load('api_config.js');
load('api_mqtt.js');
load('api_sys.js');
load('api_timer.js');


let topic = 'metrics/' + Cfg.get('device.id');
print('topic: ', topic);

Timer.set(1000, Timer.REPEAT, function() {
  let msg = JSON.stringify({free: Sys.free_ram(), total: Sys.total_ram()});
  print(topic, '->', msg);
  MQTT.pub(topic, msg, 1);
}, null);
*/

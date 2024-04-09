// recieve data from Worker that sent by postMessage 
onmessage = (e) => {

  const update = () => {
    date = new Date();
    // send data to ui or to worker creator 
    postMessage({
      min: date.getMinutes(),
      sec: date.getSeconds(),
      h: date.getHours() % 12,
    });
    requestAnimationFrame(update);
  };

  requestAnimationFrame(update);

};

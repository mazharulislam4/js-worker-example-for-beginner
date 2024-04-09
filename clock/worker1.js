onmessage = (e) => {

  const update = () => {
    date = new Date();
    postMessage({
      min: date.getMinutes(),
      sec: date.getSeconds(),
      h: date.getHours() % 12,
    });
    requestAnimationFrame(update);
  };

  requestAnimationFrame(update);

};

const clock = document.getElementById("clock");

if (window.Worker) {
  // pass url of worker.js file 
  const worker = new Worker("./worker1.js"); //worker instance or creator
  // receive data from worker 
  worker.onmessage = (e) => {
    clock.querySelector(".h").innerHTML =
      e.data.h.toString().padStart(2, 0) + ":";
    clock.querySelector(".min").innerHTML =
      e.data.min.toString().padStart(2, 0) + ":";
    clock.querySelector(".sec").innerHTML = e.data.sec
      .toString()
      .padStart(2, 0);
  };

  // every work need a postMessage call . by postMessage can send data to  worker. in this case I don't need to pass any data to worker. that's why it is passing black  {}  (objec)
  worker.postMessage({});

}

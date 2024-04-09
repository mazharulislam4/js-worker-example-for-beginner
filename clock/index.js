const clock = document.getElementById("clock");

if (window.Worker) {
  const worker = new Worker("./worker1.js");
  const worker2 = new Worker("./worker1.js");

  worker.onmessage = (e) => {
    clock.querySelector(".h").innerHTML =
      e.data.h.toString().padStart(2, 0) + ":";
    clock.querySelector(".min").innerHTML =
      e.data.min.toString().padStart(2, 0) + ":";
    clock.querySelector(".sec").innerHTML = e.data.sec
      .toString()
      .padStart(2, 0);
  };

  worker.postMessage({});

}

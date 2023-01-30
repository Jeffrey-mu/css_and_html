const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
if (isMainThread) {
  const worker = new Worker('sum.js', 2);
  worker.once('message', (result) => {
    console.log('square of 5 is :', result);
  })
} else {
  parentPort.postMessage(workerData.num * workerData.num)
}

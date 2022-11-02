import Observable from "./observable.js";

function logger(data) {
    console.log(`${Date.now()}: ${data}`);
}

Observable.subscribe(logger);

Observable.notify("Yeah đã Run!");
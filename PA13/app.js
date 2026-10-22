// PA1301: PERFORM LARGE CALCULATION

const startBtn = document.getElementById("startBtn");
const statusText = document.getElementById("status");
const progressText = document.getElementById("progress");
const resultText = document.getElementById("result");

let worker = null;

// PA1301: Start calculation
startBtn.addEventListener("click", function() {

    // Stop previous Worker if one exists
    if (worker !== null) {
        worker.terminate();
    }

    // Create Web Worker
    const currentWorker = new Worker("workers.js");
    worker = currentWorker;

    statusText.textContent = "Calculating...";
    progressText.textContent = "Progress: 0%";
    resultText.textContent = "Result: Please wait...";

    // PA1301: Receive messages from Worker
    currentWorker.onmessage = function(event) {

        if (worker !== currentWorker) {
            return;
        }

        const data = event.data;

        // Handle progress updates
        if (data.type === "progress") {

            progressText.textContent =
                "Progress: " + data.result + "%";

            console.log("Progress:", data.result + "%");

        }

        // Handle final calculation result
        else if (data.type === "result") {
            resultText.textContent =
                "Result: " + data.result;

            progressText.textContent = "Progress: 100%";

            statusText.textContent =
                "Calculation completed!";

            console.log("PA1301 Result:", data.result);

            // Stop Worker only after completion
            currentWorker.terminate();
            worker = null;
        }
    };
 // Handle errors
    currentWorker.onerror = function(error) {
        if (worker !== currentWorker) {
            return;
        }
        statusText.textContent = "Worker error";
        console.error(error);
        currentWorker.terminate();
        worker = null;
    };
    // Send calculation limit to Worker
    currentWorker.postMessage(100000000);
});
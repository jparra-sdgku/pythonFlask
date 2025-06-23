
function start(s) {
    console.log("App Started");
    stop();
}

function stop() {
    console.log("App Stopped");
}

function init() {
    //load data
//hook up events
    console.log("App Installed");

}
window.onload = init; // this wait for the DOM to be fully loaded before running init
//it waits until the html and css are fully loaded before running the init function
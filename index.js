//factory function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw')
        }
    };
}

const circle = createCircle(1);

//constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
}  

function StopWatch() {
    //local stuff
    let durationCount = [0, 0, 0];
    let hasStarted = false;
    let hasReset = true;
    let startTime = [0, 0, 0]
    let stopTime = [0, 0, 0]

    function getTime() {
        let d = new Date();
        let timeStamp = [d.getHours(), d.getMinutes(), d.getSeconds()];
        return timeStamp; 
    }
    function setDuration() {
        let start = startTime;
        let stop = stopTime;
        let hours = stopTime[0] - startTime[0];
        let minutes = stopTime[1] - startTime[1];
        let seconds = stopTime[2] - startTime[2];
        if (seconds < 0) {
            seconds += 60
            minutes++

        }
        if (minutes < 0) {
            minutes += 60;
            hours++
        }
        if (hours < 0) {
            hours += 60;
        }
        durationCount = [hours, minutes, seconds]
    
    }

    //Forward Facing Stuff
    this.start = function() {
        if (hasStarted === false && hasReset === true) {
            startTime = getTime();
            console.log(`Time Started @${startTime}`);
            hasStarted = true;
            hasReset = false;
        } else {
            throw new console.error('Time has already started!');
        };
    };
    this.stop = function() {
        if (hasStarted === true && hasReset === false) {
            stopTime = getTime();
            hasStarted = false;
            console.log(`Time stopped @${stopTime}, time elapsed: ${stopTime[0] - startTime[0]} hours, ${stopTime[1] - startTime[1]} minutes, and ${stopTime[2] - startTime[2]} seconds`)

        } else {
            throw new console.error("Time hasn't started yet!")
        };
    };

    this.duration = function() {
        if (!hasReset && !hasStarted) {
            setDuration()
            console.log(`Time started @${startTime}  stopped @${stopTime}, time elapsed: ${durationCount[0]} hours, ${durationCount[1]} minutes, and ${durationCount[2]} seconds`)
            //console.log(durationCount)
        } else {
            console.log("The timer hasn't started yet, or is still running!")
        }
    }

    this.reset = function() {
        if (!hasReset) {
            hasStarted = false;
            hasReset = true;
            startTime = [0, 0, 0];
            stopTime = [0, 0, 0];
            durationCount = [0, 0, 0];
            console.log("Reset timer completed!")
        } else {
            console.log("The timer already reset!")
        }
    };
}

const sw = new StopWatch();




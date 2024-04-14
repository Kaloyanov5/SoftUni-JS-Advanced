function timeToWalk(steps, footLength, speed){
    const distance = steps * footLength; /* IN METERS */
    const breaks = Math.floor(distance / 500);
    const walkingTime = ((distance / 1000) / speed) * 3600; /* IN SECONDS */

    let hours = Math.floor(walkingTime / 3600);
    hours = hours < 10 ? `0${hours}` : hours;

    let minutes = Math.floor(walkingTime / 60) + breaks;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    let seconds = Math.round((walkingTime % 3600) % 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(2564, 0.70, 5.5);
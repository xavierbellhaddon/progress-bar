// function fillBar(seconds) {
//     const bar = document.querySelector(".bar");
//     let atPercent = 0;
//     const interval = setInterval(() => {
//         bar.style.width = atPercent + "%";
//         atPercent++;
//         console.log("running at ", atPercent)
//         if (atPercent >= 100) {
//             clearInterval(interval);
//         }
//     }, (seconds * 1000) / 100)
// }

function fillBar(seconds) {
    const bar = document.querySelector(".bar");
    bar.style.transition = `${seconds}s linear width`
    bar.style.width = "100%";
}


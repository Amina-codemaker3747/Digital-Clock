// setInterval(() => {
//     // get time indicator element
//         let hours = document.getElementsById('hours');
//         let minutes = document.getElementsById('minutes');
//         let seconds = document.getElementsById('seconds');
//         let ampm = document.getElementsById('ampm');
     
//     // digits time indicator
//     let  hh = document.getElementsById('hh');
//     let   mm =  document.getElementsById('mm');
//     let ss = document.getElementsById('ss');
//     //  dot time indicator
//     let dotH = document.querySelector('.h_dot');
//     let dotM = document.querySelector('.m_dot');
//     let dotS = document.querySelector('.s_dot');
//     // get current time
//     let h = new Date().getHours();
//     let m = new Date().getMinutes();
//     let s = new Date().getSeconds();
//     let ap = h >= 12 ? 'PM': 'AM' ;
    
//     // convert to 12 hour format
//     if(h > 12) {
//         h = h - 12;
//     }
    
//     // Add 0 before single digit
//     h = h < 10 ? '0' + h : h;
//     m = m < 10 ? '0' + m : m;
//     s = s < 10 ? '0' + s : s;
    
//     // set time & label
//     hours.innerHTML = h + 'Hours';
//     minutes.innerHTML = h + 'Minutes';
//     seconds.innerHTML = h + 'Seconds';
//     ampm.innerHTML = ap;
    
//     // set time circular indicator
//     hh.style.strokeDashoffset = 440 - (440 * h) / 12;
//     mm.style.strokeDashoffset = 440 - (440 * m) / 60;
//     ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    
//     // set dot time position indicator
//     dotH.style.transform = `rotate(${h * 30}deg)`;
//     dotM.style.transform = `rotate(${m * 6}deg)`;
//     dotS.style.transform = `rotate(${s * 6}deg)`;
    
//     }, 1000);

let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{

 let currentTime = new Date();

hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.
getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.
getSeconds();
},1000)
    




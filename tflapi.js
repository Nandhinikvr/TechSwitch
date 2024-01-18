import fetch from "node-fetch";
import promptSync from 'prompt-sync';
const prompt = promptSync();
async function tflAPIFetch(stopCode){
    const response = await fetch(`https://api.tfl.gov.uk/StopPoint/${stopCode}/Arrivals`);
    const arrivalPredictionData = await response.json();
    return arrivalPredictionData;
}

async function bustStop(){
 //   const stopCode = '490008660N';
    const stopCode = prompt("Please enter the stopCode for the bus station needed: ");

    const apiData = await tflAPIFetch(stopCode);

    //const requiredFields = ["lineId","destinationName","timestamp","expectedArrival"];
    const requiredFields = ["lineId","destinationName","expectedArrival"];
    const filterFields=(busData)=>Object.keys(busData).filter(key => requiredFields.includes(key)).reduce((obj,key)=>{obj[key]=busData[key]; return obj},{});
    const requiredData = apiData.map(entry=>filterFields(entry));
    //console.log(requiredData);

    const dataWithArrivalMins = requiredData.map(entry=>{
        const diff_milliseconds = new Date(entry.expectedArrival)-new Date();
        entry["arrivalInMinutes"]= Math.floor((diff_milliseconds / 1000 / 60) % 60);
        return entry;
    })
   // console.log(dataWithArrivalMins);
    const nextBusList = dataWithArrivalMins.sort((x,y)=>x["arrivalInMinutes"]-y["arrivalInMinutes"]);
    //console.log(nextBusList);
    console.log("Next 5 Busses:")
    for(let i =0;i<=4;i++){
        console.log(`${i+1} : ${JSON.stringify(nextBusList[i])}`);
    }
}

bustStop();

// const arr = [1,2,3,4,5];

// const newArr = arr.reduce((acc,curr)=> {
//       console.log(`acc:${acc},curr=${curr}`);
//       return acc+curr;
// },12)

// const expectedArraival = '2024-01-18T15:50:10Z'
// //const time2 = new Date(expectedArraival).toLocaleTimeString('en',
// //                 { timeStyle: 'short', hour12: false, timeZone: 'UTC' });
 
// console.log("Current Timestamp:",new Date()) // current date and time in ISO format
// const diff_milliseconds = new Date(expectedArraival)- new Date(); // this will give difference in milliseconds
// console.log(diff_milliseconds);
// const minutes = Math.floor((diff_milliseconds / 1000 / 60) % 60);
// console.log(minutes)



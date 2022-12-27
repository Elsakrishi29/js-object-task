const passengers=[
    {
        id: 1,
        passengerName: "Freddie Mercury",
        isVegetarianorVegan: false,
        connectedFlights: 2,
    },
    {
        id: 2,
        passengerName: "Amy Winehouse",
        isVegetarianorVegan: true,
        connectedFlights: 4,
    },
    {
        id: 3,
        passengerName: "Kurt cobin",
        isVegetarianorVegan: false,
        connectedFlights: 3,
    },
    {
        id: 4,
        passengerName: "Michael Jackson",
        isVegetarianorVegan: true,
        connectedFlights: 1,
    },
    
];
console.log(passengers);
let passengerarray=[];
let len=passengers.length;
for(i=0;i<len;i++){
    passengerarray[i]=passengers[i].passengerName;
}
console.log(passengerarray);

let vegetarian=[];
let b=0;
for(i=0;i<len;i++){
    if(passengers[i].isVegetarianorVegan==true){
        vegetarian[b]=passengers[i].passengerName;
        b++;
    }
}
console.log(vegetarian);
let fleetData=[];
let main=document.getElementsById("main");

function addFleet(){
    let reg=document.getElementById("reg").value.trim();
    let category=document.getElementById("category").value;
    let driver=document.getElementById("rdriver").value.trim();
    let status=document.getElementById("status").value;

    let obj={
        id:Date.now(),
        reg,
        category,
        driver,
        status
    }
    fleetData.push(obj);
    renderCards(fleetData);
}

function renderCards(data){
    main.innerHTML="";

    data.forEach(vehicle => {
        let card= document.createElement("div");
        card.className="card";

        card.innerHTML=`
        <img src="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/5e80fcb6-3f8e-480c-945b-30a5359eb40e/JNmYjkVr3WOjsrbu.png">
        <p><b>Reg No: </b>${vehicle.reg} </p>
        <p><b>Category: </b>${vehicle.category} </p>
        <p><b>Driver: </b>${vehicle.driver} </p>
        <p><b>Status: </b>${vehicle.status} </p>
        <button class="update">Update Driver</button>
        <button class="toogle">Change Availablity</button>
        <button class="update">Delete Vehicle</button>

        `;

        card.querySelector(".toggle").onclick=()=>{
            vehicle.status=
                vehicle.status==="Available"? "Unavaliable":"Available";
            renderCards(fleetData);
        };


    })
}
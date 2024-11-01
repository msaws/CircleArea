

//Declaration of variables

let radius = 0;
let area = 0;

//Function to calculate the area of the circle

document.getElementById("btn_calculate").onclick = () => {

    radius = document.getElementById("txt_radius").value;
    let area = 2 * 3.14 * radius;
    document.getElementById("result").textContent = `The radius of the circle is ${area}`;
    
}
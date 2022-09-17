// задача 2
const inputData = prompt("Input word") 
if (inputData === null || inputData.trim === "") {
    alert("Canceled")
} else {
    if (inputData.length % 2 === 0) {
        const center = inputData.length / 2;
        result = inputData.slice(center - 1, center + 1)
    }
    else {
        const center = Math.floor(inputData.length / 2);
        result = inputData.slice(center, center + 1)
    }
    alert(result);
}
// Retrieve Samples information

const filePath = "samples.json";

d3.json(filePath).then(data => {
    console.log(data);
}).catch(error => {
    console.error('Error reading file:', error);
});

console.log("Bobby")


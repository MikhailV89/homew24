const amount = 100;
const monday = [
    ['Write a tutorial', 180],
    ['Some web development', 120]
];
const tuesday = [
    ['Keep writing that tutorial', 240],
    ['Some more web development', 360],
    ['A whole lot of nothing', 240]
];

function conversion(currentDay) {
    return currentDay.map(function(indexArray) {
        indexArray[1] = indexArray[1] / 60;
        return indexArray
    });
    
}

function filterHours(currentDay) {
    return currentDay.filter(function(indexArray) {
        return indexArray[1] > 2;
    });
    
}

function calculateValue(currentDay) {
    return currentDay.map(function(indexArray) {
        indexArray.push(indexArray[1] * amount);
        return indexArray;
    });
    
}

function tableOutput(currentDay) {
    return currentDay.map(function(indexArray) {
    return `
        <tr>
            <td>${indexArray[0]}</td>
            <td>${indexArray[1]} hours</td>
            <td>$${indexArray[2]}</td>
        </tr>`; 
    }).join('');
}

function mostArray(currentDay) {
    const convertedHours = conversion(currentDay);
    const filteredHours = filterHours(convertedHours);
    const calculateAmount = calculateValue(filteredHours);
    const resultOutput = tableOutput(calculateAmount);
    
    return resultOutput;
}

document.write(`
<p>Monday</p>
<table>
<tr>
    <th>Task name</th>
    <th>Task duration</th>
    <th>Task amount</th>
</tr>
${mostArray(monday)}</table>
<p>Tuesday</p>
<table>
<tr>
    <th>Task name</th>
    <th>Task duration</th>
    <th>Task amount</th>
</tr>
${mostArray(tuesday)}</table>
`);
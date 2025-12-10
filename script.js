// Part 1: Fizz Buzz

// for (let i = 1; i <= 100; i++) {
// 	if ((i % 3) + (i % 5) === 0) {
// 		console.log("Fizz Buzz")
// 	} else if (i % 3 === 0) {
// 		console.log("Fizz")
// 	} else if (i % 3 === 0) {
// 		console.log("Buzz")
// 	} else {
// 		console.log(i)
// 	}
// }

// Part 3: Feeling Loopy (logged at the end)
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
const csvObj = csvToObject(csvData)
const csvMatrix = csvToMatrix(csvData)

function csvToObject(input) {
	const data = []
	const cols = []
	let cell = ""
	let row = {}
	let rowIndex = -1

	for (c in input) {
		if (rowIndex < 0) { // populate keys array
			if (input[c] == ",") {
				cols.push(cell.toLowerCase())
				cell = ""
			} else if (input[c] == "\n") {
				cols.push(cell.toLowerCase())
				cell = ""
				rowIndex++
			} else {
				cell += input[c]
			}
		} else { // builds and appends key value pairs
			if (input[c] == ",") {
				const key = cols[rowIndex]
				row = {...row, [key]: cell}
				cell = ""
				rowIndex++
			} else if (input[c] == "\n" || c == input.length - 1) {
				c == input.length - 1 ? cell += input[c] : null
				const key = cols[rowIndex]
				row = {...row, [key]: cell}
				data.push(row)
				row = {}
				cell = ""
				rowIndex = 0
			} else {
				cell += input[c]
			}
		}
	}

	return data
}

// ---------------------------------- R-ALAB 308.4.1 - Working with Data Collections ----------------------------------

// Part 2: Expanding Functionality (logged at the end)

function csvToMatrix(input) {
	const data = [[]]
	let cell = ""
	let row = []
	let rowIndex = 0

	for (let c = 0; c < input.length; c++) {
		if (rowIndex < 1) {
			if (input[c] == ",") {
				data[0].push(cell.toLowerCase())
				cell = ""
			} else if (input[c] == "\n") {
				data[0].push(cell.toLowerCase())
				cell = ""
				rowIndex++
			} else {
				cell += input[c]
			}
		} else {
			if (input[c] == ",") {
				row = [...row, cell]
				cell = ""
				rowIndex++
			} else if (input[c] == "\n" || c == input.length - 1) {
				c == input.length - 1 ? cell += input[c] : null
				row = [...row, cell]
				data.push(row)
				row = []
				cell = ""
			} else {
				cell += input[c]
			}
		}
	}
	
	return data
}

// Part 4: Sorting and Manipulating Data 

csvObj.pop() // Remove the last element from the sorted array

csvObj.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" }) // Insert the object at index 1

csvObj.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" }) // Add the object to the end of the array

// Calculate the average age of the group
let avgAge = 0

for (let i in csvObj) {
	avgAge += Number(csvObj[i].age)
}

avgAge /= csvObj.length

// Part 5: Full Circle

// Transform the final set of data back into CSV format
let csv = Object.keys(csvObj[0]).join(",") + "\n"

for (let i in csvObj) {
	csv += Object.values(csvObj[i]).join(",")
	i == csvObj.length - 1 ? null : csv += "\n"
}

console.log(`CSV Parsed to Matrix:`)
console.log(csvMatrix)
console.log(`\n\n`)
console.log(`CSV Parsed to Object:`)
console.log(csvObj)
console.log(`\n\n`)
console.log(`Group average age: ${avgAge}\n\n`)

console.log(`Object converted back to CSV: ` + JSON.stringify(csv))
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

// Part 3: Feeling Loopy

function bootlegMap(input) {
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


const map1 = bootlegMap("ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26")
const map2 = bootlegMap("Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232")

console.table(map1)
// console.log(map2)

// ---------------------------------- R-ALAB 308.4.1 - Working with Data Collections ----------------------------------
// Part 4: Sorting and Manipulating Data


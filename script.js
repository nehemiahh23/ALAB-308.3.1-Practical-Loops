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

const input = "ID,Name,Occupation,Age\n"
// "42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
const data = []
const cols = []
let cell = ""
let row = {}
let rowIndex = -1

// declare iterator -1
// for i in string
// declare empty cell
// declare empty obj
// when string[i] is comma
//	if row < 0
// 		add cell to cols
// 	if row >= 0
// 		for cell in cols
//			add {col: cell} to obj
// when string[i] is \n
//	if row >= 0
// 		

for (c in input) {

	if (rowIndex < 0) {
		if (input[c] == ",") {
			cols.push(cell)
			cell = ""
		} else if (input[c] == "\n") {
			cols.push(cell)
			cell = ""
			rowIndex++
		} else {
			cell += input[c]
		}
	}

	// if (input[c] == ",") {
	// 	// if (rowIndex < 0) {
	// 	// }
	// }
	// else if (input[c] == "\n") {
		
	// }
	// // else if (c == input.length - 1) {
	// // 	if (rowIndex < 0) {	
	// // 		cell += input[c]
	// // 		cols.push(cell)
	// // 		cell = ""
	// // 	}
	// // }
	// else {
	// 	cell += input[c]
	// }

}

console.log(cols)
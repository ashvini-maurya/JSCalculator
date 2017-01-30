$(document).ready(function() {

	var inputs = [""];
	var totalString;
	var operators1 = ["+", "-", "*", "/", "."];
	// var operators2 = ["."];
	var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


	function getValue(input){
		if((inputs.includes(".") && input === ".")){
			console.log("duplicate dots found");
		}
		// else if(inputs.length === 1 && operators1.includes(input) === true){
		// 	console.log("can't start with operator");
		// }
		else if(input === "."){
			inputs = ["0", "."];
		}
		else if(operators1.includes(inputs[inputs.length - 1]) === false){
			inputs.push(input);
		}
		else if(nums.includes(Number(input))){
			inputs.push(input);
		}
		update();

	}

	function update(){
		totalString = inputs.join("");
		$("#panel-body").html(totalString);
	}

	function getTotal(){
		result = eval(inputs.join(""));
		//console.log(result);
		document.getElementById('panel-body').innerHTML = result;
		inputs = ["", result+''];
		
	}


	// button event
	$('button').on('click', function() {
		if(this.id==="removeAll"){
			inputs = [""];
			update();
		}
		else if(this.id==="removeLast"){
			inputs.pop();
			update();
		}
		else if(this.id==="result"){
			getTotal();
		}
		else {
			if(inputs[inputs.length - 1].indexOf("+", "-", "*", "/") === -1){
				getValue(this.id);
			}
			else {
				getValue(this.id);
			}
		}
	});

});
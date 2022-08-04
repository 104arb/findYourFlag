var assignedSexValue = document.getElementById("assigned-sex").value;
var genderValue = document.getElementById("gender").value;
var romanticValue = document.getElementById("romantic").value;
var sexualValue = document.getElementById("sexual").value;
var amoryValue = document.getElementById("amory").value;
var neuroValue = document.getElementById("neuro").value;

// 콘솔에 value 출력

function sayAssignedSex(assignedSexValue) {
	console.log("Assigned Sex : " + assignedSexValue);
}

function sayGender(genderValue) {
	console.log("Gender : " + genderValue);
}

function sayRomantic(romanticValue) {
	console.log("Romantic Orientation : " + romanticValue);
}

function saySexual(sexualValue) {
	console.log("Sexual Orientation : " + sexualValue);
}

function sayAmory(amoryValue) {
	console.log("Amory : " + amoryValue);
}

function sayNeuro(neuroValue) {
	console.log("Neuro : " + neuroValue);
}

// 버튼 누르면 결과 보이기

function result(assignedSexValue, genderValue, romanticValue, sexualValue, amoryValue, neuroValue) {
	var genderArr = [];
	var romanticArr = [];
	var sexualArr = [];
	var amoryArr = [];
	var neuroArr = [];

	sayAssignedSex(assignedSexValue);
	sayGender(genderValue);
	sayRomantic(romanticValue);
	saySexual(sexualValue);
	sayAmory(amoryValue);
	sayNeuro(neuroValue);

	document.getElementById("result-print").style.display = "block"; // 숨겼던 결과 보이기

	console.log(typeof(genderArr));

	if(genderValue != "na") { // 성별 정체성 리스트 요소 생성
		if(assignedSexValue == genderValue && genderValue != "idk") {
			genderArr.push('cisgender');
		}
		else {
			genderArr.push('transgender');
		}

		if(assignedSexValue == 'I') {
			genderArr.push('intersex');
		}

		switch(genderValue) {
			case 'demiF' :
			case 'F' : genderArr.push('female'); break;
			case 'demiM' :
			case 'M' : genderArr.push('male'); break;
			case 'androgyne' : genderArr.push('androgyne'); break;
			case 'neutrois' : genderArr.push('neutrois'); break;
			case 'A' : genderArr.push('agender'); break;
			case 'idk' : genderArr.push('idk'); break;
			default :
		}

		if(genderValue == 'enby' ||genderValue == 'androgyne' || genderValue == 'neutrois'|| genderValue == 'agender'|| genderValue == 'demiF'|| genderValue == 'demiM') {
			if(genderValue == 'demiF' || genderValue == 'demiM') {
				genderArr.push('demi');
			}

			genderArr.push('enby');
		}
	}

	console.log("genderArr => " + genderArr);

	if(romanticValue != "na") { // 로맨틱 지향 리스트 요소 생성
		switch(romanticValue) {
			case 'F' :
			case 'F-flexible' : romanticArr.push('gyne'); break;
			case 'M' :
			case 'M-flexible' : romanticArr.push('andro'); break;
			case 'bi' : romanticArr.push('bi'); break;
			case 'pan' : romanticArr.push('pan'); break;
			case 'poly' : romanticArr.push('poly'); break;
			case 'demi' : romanticArr.push('demi'); break;
			case 'aro' : romanticArr.push('aro'); break;
			case 'idk' : romanticArr.push('idk'); break;
			default :
		}

		if(genderArr.includes('female') && romanticValue.includes('gyne')) {
			romanticArr.push('lesbian');
		}

		if(genderArr.includes('male') && romanticValue.includes('andro')) {
			romanticArr.push('gayMan');
		}

		if(romanticArr.includes('lesbian') || romanticArr.includes('gayMan')) {
			romanticArr.push('homo');
		}

		if((genderArr.includes('male') && romanticValue.includes('gyne')) || (genderArr.includes('female') && romanticValue.includes('andro'))) {
			romanticArr.push('hetero');
		}

		if(romanticValue == 'F-flexible' || romanticValue == 'M-flexible' || romanticValue == 'bi' || romanticValue == 'pan' || romanticValue == 'poly') {
			romanticArr.push('biPlus');
		}
	}

	console.log("romanticArr => " + romanticArr);

	if(sexualValue != "na") { // 성적 지향 리스트 요소 생성
		switch(sexualValue) {
			case 'F' :
			case 'F-flexible' : sexualArr.push('gyne'); break;
			case 'M' :
			case 'M-flexible' : sexualArr.push('andro'); break;
			case 'bi' : sexualArr.push('bi'); break;
			case 'pan' : sexualArr.push('pan'); break;
			case 'poly' : sexualArr.push('poly'); break;
			case 'demi' : sexualArr.push('demi'); break;
			case 'aro' : sexualArr.push('aro'); break;
			case 'idk' : sexualArr.push('idk'); break;
			default :
		}

		if(genderArr.includes('female') && sexualValue.includes('gyne')) {
			sexualArr.push('lesbian');
		}

		if(genderArr.includes('male') && sexualValue.includes('andro')) {
			sexualArr.push('gayMan');
		}

		if(sexualArr.includes('lesbian') || sexualArr.includes('gayMan')) {
			sexualArr.push('homo');
		}

		if((genderArr.includes('male') && sexualValue.includes('gyne')) || (genderArr.includes('female') && sexualValue.includes('andro'))) {
			sexualArr.push('hetero');
		}

		if(sexualValue == 'F-flexible' || sexualValue == 'M-flexible' || sexualValue == 'bi' || sexualValue == 'pan' || sexualValue == 'poly') {
			sexualArr.push('biPlus');
		}
	}

	console.log("sexualArr => " + sexualArr);

	if(amoryValue != 'na') { // 폴리아모리 및 모노가미 여부 리스트 요소 생성
		switch(amoryValue) {
			case 'poly': amoryArr.push('polyamory'); break;
			case 'mono': amoryArr.push('monogamy'); break;
			case 'A': amoryArr.push('A-umbrella'); break;
			default :
		}
	}

	console.log("amoryArr => " + amoryArr);

	if(neuroValue != 'na') { // 신경다양성 여부 리스트 요소 생성
		switch(neuroValue) {
			case 'diverse': neuroArr.push('ND'); break;
			case 'typical': neuroArr.push('NT'); break;
			default :
		}
	}

	console.log("neuroArr => " + neuroArr);
	
}
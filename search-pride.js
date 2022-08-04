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

	if(genderValue != "na") { // 성별 정체성 리스트 요소 생성
		if(assignedSexValue == genderValue && genderValue != "idk") {
			genderArr.push('cisgender');
		}
		else if(assignedSexValue != "na") {
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
			case 'fluid' : genderArr.push('genderfluid'); break;
			case 'A' : genderArr.push('agender'); break;
			case 'idk' : genderArr.push('idk'); break;
			default :
		}

		if(genderValue == 'enby' ||genderValue == 'androgyne' || genderValue == 'neutrois'|| genderValue == 'fluid'|| genderValue == 'A'|| genderValue == 'demiF'|| genderValue == 'demiM') {
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

		if((genderValue == "F" || genderValue == "demiF") && (romanticValue == "F" || romanticValue == "F-flexible")) {
			romanticArr.push('lesbian');
			romanticArr.push('homo');
		}

		if((genderValue == "M" || genderValue == "demiM") && (romanticValue == "M" || romanticValue == "M-flexible")) {
			romanticArr.push('gayMan');
			romanticArr.push('homo');
		}

		if((genderArr.includes('male') && (romanticValue == "F" || romanticValue == "F-flexible") || (genderArr.includes('female') && (romanticValue == "M" || romanticValue == "M-flexible")))) {
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
			case 'ace' : sexualArr.push('ace'); break;
			case 'idk' : sexualArr.push('idk'); break;
			default :
		}

		if((genderValue == "F" || genderValue == "demiF") && (sexualValue == "F" || sexualValue == "F-flexible")) {
			sexualArr.push('lesbian');
			sexualArr.push('homo');
		}

		if((genderValue == "M" || genderValue == "demiM") && (sexualValue == "M" || sexualValue == "M-flexible")) {
			sexualArr.push('gayMan');
			sexualArr.push('homo');
		}

		if((genderArr.includes('male') && (sexualValue == "F" || sexualValue == "F-flexible") || (genderArr.includes('female') && (sexualValue == "M" || sexualValue == "M-flexible")))) {
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
			case 'mono': amoryArr.push('monogami'); break;
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
	
	// 배열 속 요소에 따라 플래그 띄우기

	// 무지개 혹은 앨라이

	var isQueer = true;

	if(genderArr.includes('cisgender')
	&& (romanticArr.includes('hetero') && !(romanticArr.includes('demi')) && !(romanticArr.includes('biPlus')))
	&& (sexualArr.includes('hetero') && !(sexualArr.includes('demi')) && !(sexualArr.includes('biPlus')))
	&& amoryArr.includes('monogamy')) {
		isQueer = false;
	}

	console.log("isQueer: " + isQueer);

	if(isQueer) {
		document.getElementById("rainbow-flag").style.display = "block";
		document.getElementById("extended-rainbow-flag").style.display = "block";
		document.getElementById("ally-flag").style.display = "none";
	}
	else {
		document.getElementById("rainbow-flag").style.display = "none";
		document.getElementById("extended-rainbow-flag").style.display = "none";
		document.getElementById("ally-flag").style.display = "block";
	}

	// 성별 정체성과 인터섹스 플래그

	if(genderValue != 'idk' && genderValue != 'na' && assignedSexValue != 'na') {
		if(genderArr.includes('transgender') || genderArr.includes('enby')) {
			document.getElementById("trans-flag").style.display = "block";
			document.getElementById("trans-ally-flag").style.display = "none";
		}
		else {
			document.getElementById("trans-flag").style.display = "none";
			document.getElementById("trans-ally-flag").style.display = "block";
		}
	}

	if(genderArr.includes('enby')) {
		document.getElementById("enby-flag").style.display = "block";
		document.getElementById("genderqueer-flag").style.display = "block";
	}
	else {
		document.getElementById("enby-flag").style.display = "none";
		document.getElementById("genderqueer-flag").style.display = "none";
	}

	if(genderArr.includes('intersex')) {
		document.getElementById("intersex-flag").style.display = "block";
	}
	else {
		document.getElementById("intersex-flag").style.display = "none";
	}

	if(genderArr.includes('androgyne')) {
		document.getElementById("androgyne-flag").style.display = "block";
	}
	else {
		document.getElementById("androgyne-flag").style.display = "none";
	}

	if(genderArr.includes('neutrois')) {
		document.getElementById("neutrois-flag").style.display = "block";
	}
	else {
		document.getElementById("neutrois-flag").style.display = "none";
	}

	if(genderArr.includes('demi') && genderArr.includes('female')) {
		document.getElementById("demigirl-flag").style.display = "block";
	}
	else {
		document.getElementById("demigirl-flag").style.display = "none";
	}

	if(genderArr.includes('demi') && genderArr.includes('male')) {
		document.getElementById("demiboy-flag").style.display = "block";
	}
	else {
		document.getElementById("demiboy-flag").style.display = "none";
	}

	if(genderArr.includes('genderfluid')) {
		document.getElementById("genderfluid-flag").style.display = "block";
	}
	else {
		document.getElementById("genderfluid-flag").style.display = "none";
	}

	if(genderArr.includes('agender')) {
		document.getElementById("agender-flag").style.display = "block";
	}
	else {
		document.getElementById("agender-flag").style.display = "none";
	}

	if(genderArr.includes('idk')) {
		document.getElementById("quoigender-flag").style.display = "block";
	}
	else {
		document.getElementById("quoigender-flag").style.display = "none";
	}

	// 로맨틱 및 성적 지향 플래그

	if(romanticArr.includes('lesbian') || sexualArr.includes('lesbian')) {
		document.getElementById("lesbian-flag").style.display = "block";
		document.getElementById("lesbian-labrys-flag").style.display = "block";
	}
	else {
		document.getElementById("lesbian-flag").style.display = "none";
		document.getElementById("lesbian-labrys-flag").style.display = "none";
	}

	if(romanticArr.includes('gayMan') || sexualArr.includes('gayMan')) {
		document.getElementById("gayMan-flag").style.display = "block";
	}
	else {
		document.getElementById("gayMan-flag").style.display = "none";
	}

	if(romanticArr.includes('homo')) {
		document.getElementById("homoromantic-flag").style.display = "block";
	}
	else {
		document.getElementById("homoromantic-flag").style.display = "none";
	}

	if(romanticArr.includes('hetero')) {
		document.getElementById("heteroromantic-flag").style.display = "block";
	}
	else {
		document.getElementById("heteroromantic-flag").style.display = "none";
	}

	if(sexualArr.includes('hetero')) {
		document.getElementById("heterosexual-flag").style.display = "block";
	}
	else {
		document.getElementById("heterosexual-flag").style.display = "none";
	}

	if(romanticArr.includes('bi')) {
		document.getElementById("biromantic-flag").style.display = "block";
	}
	else {
		document.getElementById("biromantic-flag").style.display = "none";
	}

	if(sexualArr.includes('bi')) {
		document.getElementById("bisexual-flag").style.display = "block";
	}
	else {
		document.getElementById("bisexual-flag").style.display = "none";
	}

	if(romanticArr.includes('poly')) {
		document.getElementById("polyromantic-flag").style.display = "block";
	}
	else {
		document.getElementById("polyromantic-flag").style.display = "none";
	}

	if(sexualArr.includes('poly')) {
		document.getElementById("polysexual-flag").style.display = "block";
	}
	else {
		document.getElementById("polysexual-flag").style.display = "none";
	}

	if(romanticArr.includes('pan')) {
		document.getElementById("panromantic-flag").style.display = "block";
	}
	else {
		document.getElementById("panromantic-flag").style.display = "none";
	}

	if(sexualArr.includes('pan')) {
		document.getElementById("pansexual-flag").style.display = "block";
	}
	else {
		document.getElementById("pansexual-flag").style.display = "none";
	}

	if(romanticArr.includes('demi')) {
		document.getElementById("demiromantic-flag").style.display = "block";
	}
	else {
		document.getElementById("demiromantic-flag").style.display = "none";
	}

	if(sexualArr.includes('demi')) {
		document.getElementById("demisexual-flag").style.display = "block";
	}
	else {
		document.getElementById("demisexual-flag").style.display = "none";
	}

	if(romanticArr.includes('aro')) {
		document.getElementById("aromantic-flag").style.display = "block";
	}
	else {
		document.getElementById("aromantic-flag").style.display = "none";
	}

	if(sexualArr.includes('ace')) {
		document.getElementById("asexual-flag").style.display = "block";
	}
	else {
		document.getElementById("asexual-flag").style.display = "none";
	}

	if(romanticArr.includes('idk')) {
		document.getElementById("quoiromantic-flag").style.display = "block";
	}
	else {
		document.getElementById("quoiromantic-flag").style.display = "none";
	}

	if(sexualArr.includes('idk')) {
		document.getElementById("quoisexual-flag").style.display = "block";
	}
	else {
		document.getElementById("quoisexual-flag").style.display = "none";
	}

	// 폴리아모리 및 모노가미 여부 플래그

	if(amoryArr.includes('polyamory')) {
		document.getElementById("polyamory-flag").style.display = "block";
	}
	else {
		document.getElementById("polyamory-flag").style.display = "none";
	}

	if(amoryArr.includes('monogami')) {
		document.getElementById("monogami-flag").style.display = "block";
	}
	else {
		document.getElementById("monogami-flag").style.display = "none";
	}

	if(amoryArr.includes('A-umbrella')) {
		document.getElementById("aromantic-flag").style.display = "block";
		document.getElementById("asexual-flag").style.display = "block";
	}
	else {
		document.getElementById("aromantic-flag").style.display = "none";
		document.getElementById("asexual-flag").style.display = "none";
	}

	// 신경다양성 여부 플래그

	if(neuroArr.includes('ND')) {
		document.getElementById("autism1-flag").style.display = "block";
		document.getElementById("autism2-flag").style.display = "block";
		document.getElementById("autism3-flag").style.display = "block";
	}
	else {
		document.getElementById("autism1-flag").style.display = "none";
		document.getElementById("autism2-flag").style.display = "none";
		document.getElementById("autism3-flag").style.display = "none";
	}
}
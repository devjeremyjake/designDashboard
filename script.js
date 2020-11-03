const checkBox = document.getElementById("checkbox");
const container = document.querySelector(".container");
const containerTop = document.querySelector(".container__top");
const containerTitle = document.querySelector(".container__title--head");
const containerCard = document.getElementsByClassName("container__card");
const containerValueText = document.getElementsByClassName(
	"container__valuetext"
);
const containerCardsmall = document.getElementsByClassName(
	"container__cardsmall"
);
const containerCardsmallText1 = document.getElementsByClassName(
	"cardsmall__top--1"
);

const containerCardsmallText2 = document.getElementsByClassName(
	"cardsmall__top--2"
);

checkBox.addEventListener("change", () => {
	// Change theme of website
	container.classList.toggle("white");
	containerTop.classList.toggle("white");
	containerTitle.classList.toggle("whitetext");
	for (var i = 0; i < containerCard.length; i++) {
		containerCard[i].classList.toggle("backWhite");
	}
	for (var i = 0; i < containerValueText.length; i++) {
		containerValueText[i].classList.toggle("textChange");
	}

	for (var i = 0; i < containerCardsmall.length; i++) {
		containerCardsmall[i].classList.toggle("backwhite");
	}

	for (var i = 0; i < containerCardsmallText1.length; i++) {
		containerCardsmallText1[i].classList.toggle("textChange");
	}

	for (var i = 0; i < containerCardsmallText2.length; i++) {
		containerCardsmallText2[i].classList.toggle("textChange");
	}
});

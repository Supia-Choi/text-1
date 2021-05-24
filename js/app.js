function calender(new_year,new_month){
	// console.log(new_month);
	// 현재 날짜 정보
	// var d = new Date();
						// ******* **** *****
	var d = new Date(new_year, new_month-1, 1);
	// ********  *****   ******
	var d_length = 32 - new Date(new_year, new_month-1, 32).getDate();
	var year = d.getFullYear();
	var month = d.getMonth();	//month+1 :당월
	var date = d.getDate();
	var day = d.getDay();	//0:일요일, ~ 6:토요일
	// console.log(date);

	var caption_year = document.querySelector('.year');
	var caption_month = document.querySelector('.month');
	var start_day = document.querySelectorAll('tr td');

	// console.log(start_day);

	// 년월 표시
	caption_year.innerHTML = year;
	caption_month.innerHTML = month+1;

	// *******
	// 이전 달, 다음 달 버튼으로 월 변경시 일자 테이블 초기화
	for(var i=0; i < start_day.length; i++){
		// console.log(start_day.length);
		start_day[i].innerHTML='&nbsp;';	//42칸
	}

	// 일자 표시
	// var date=1;
	// for(var i=0;i<start_day.length; i++){

	// 시작일자를 해당월의 요일에 표시
				      // **********
	for(var i=day; i < day + d_length ;i++){

		start_day[i].innerHTML = date;
		date++;
		// console.log(date);
	}



}

var prev =document.getElementById('prev');
var next = document.getElementById('next');

var year = new Date().getFullYear();
var month = new Date().getMonth()+1;
// console.log(year);
// console.log(month);

calender(year, month);
prev.onclick=function(){
	calender(year,--month);
}
next.onclick=function(){
	calender(year,++month);
}
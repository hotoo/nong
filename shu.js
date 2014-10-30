
var NUMBERS = "〇一二三四五六七八九十";
var DATES = "初十廿卅";
var MONTHS = "正二三四五六七八九十冬腊";

function number2year (number) {
  var n = String(number);
  return n.replace(/(\d)/g, function($0, $1){
    return NUMBERS.charAt( parseInt($1, 10) );
  });
}


function number2month (number) {
  return MONTHS.charAt( number );
}


function number2date (number){
  switch (number) {
  case 10:
    return "初十";
  case 20:
    return "二十";
  case 30:
    return "三十";
  default:
    return DATES.charAt( Math.floor( (number - 1) / 10 ) ) +
           NUMBERS.charAt( (number - 1) % 10 + 1 );
  }
}


// 农历年份转成数值。
// @param {String} year
// @return {Number}
var RE_ZH_YEAR = new RegExp('([' + NUMBERS + '])', "g");
function year2number(year) {
  return Number(
    year
      .replace(/年$/, "")
      .replace(RE_ZH_YEAR, function($0, $1){
        return NUMBERS.indexOf($1);
      })
  );
}


// 农历月份转数值。
// @param {String} month 农历月份。
// @return {Number}
function month2number(month) {
  return MONTHS.indexOf( month.replace(/月$/, ""));
}


// 农历日期转成数值。
// @param {String} date, 农历日期。
// @return {Number}
function date2number(date){
  date = date.replace(/日$/, "")
    .replace(/^初/, "");

  switch (date) {
  case "十":
    return 10;
  case "二十":
    return 20;
  case "三十":
    return 30;
  default:
    var number = 0;

    for(var i=0,l=date.length; i<l; i++){
      var s = date.charAt(i);

      if (DATES.indexOf(s) >= 0) {
        number += 10 * DATES.indexOf(s)
      } else {
        number += NUMBERS.indexOf(s);
      }
    }
    return number;
  }
}


module.exports = {
  year2number: year2number,
  month2number: month2number,
  date2number: date2number,
  number2year: number2year,
  number2month: number2month,
  number2date: number2date
};

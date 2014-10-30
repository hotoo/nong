
var expect = require("expect.js");
var shu = require('../shu');

describe('数(shu)', function() {

  it('数值日期转农历日期', function() {
    var MONTHS = [
      [1, "初一"],
      [9, "初九"],
      [10, "初十"],
      [11, "十一"],
      [19, "十九"],
      [20, "二十"],
      [21, "廿一"],
      [29, "廿九"],
      [30, "三十"],
      [31, "卅一"]
    ];
    for(var i=0,l=MONTHS.length; i<l; i++){
      expect( shu.number2date(MONTHS[i][0]) ).to.equal( MONTHS[i][1] );
    }
  });

  it('数值月份转农历月份', function() {
    var MONTHS = [
      [0, "正"],
      [1, "二"],
      [2, "三"],
      [9, "十"],
      [10, "冬"],
      [11, "腊"]
    ];
    for(var i=0,l=MONTHS.length; i<l; i++){
      expect( shu.number2month(MONTHS[i][0]) ).to.equal( MONTHS[i][1] );
    }
  });

  it('数值年份转农历年份', function() {
    var MONTHS = [
      [1999, "一九九九"],
      [2000, "二〇〇〇"]
    ];
    for(var i=0,l=MONTHS.length; i<l; i++){
      expect( shu.number2year(MONTHS[i][0]) ).to.equal( MONTHS[i][1] );
    }
  });

  it('农历年份转数值', function() {
    var MONTHS = [
      ["一九九九年", 1999],
      ["二〇〇〇年", 2000]
    ];
    for(var i=0,l=MONTHS.length; i<l; i++){
      expect( shu.year2number(MONTHS[i][0]) ).to.equal( MONTHS[i][1] );
    }
  });

  it('农历月份转数值', function() {
    var MONTHS = [
      ["正月", 0],
      ["二月", 1],
      ["九月", 8],
      ["十月", 9],
      ["冬月", 10],
      ["腊月", 11]
    ];
    for(var i=0,l=MONTHS.length; i<l; i++){
      expect( shu.month2number(MONTHS[i][0]) ).to.equal( MONTHS[i][1] );
    }
  });

  it('农历日期转数值', function() {
    var DATES = [
      ["初一", 1],
      ["初九", 9],
      ["初十", 10],
      ["十一", 11],
      ["十九", 19],
      ["二十", 20],
      ["廿一", 21],
      ["廿九", 29],
      ["三十", 30],
      ["卅一", 31]
    ];
    for(var i=0,l=DATES.length; i<l; i++){
      expect( shu.date2number(DATES[i][0]) ).to.equal( DATES[i][1] );
    }
  });

});

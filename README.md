# nong [![spm version](http://spmjs.io/badge/nong)](http://spmjs.io/package/nong)

---

农历日期(Nong Li Date)

## INSTALL

```
$ spm install nong --save
```

## USAGE

```js
var Nong = require('nong');
var nongli_from_gongli = new Nong(new Date()); // 今天所对应的农历日期。
var nongli_from_dt = new Nong(1983, 1, 1); // 农历一九八三年正月初一日。
var nongli_from_zh = new Nong("1983-01-01"); // 农历一九八三年正月初一日。
var nongli_from_zh = new Nong("1983/01/01"); // 农历一九八三年正月初一日。
var nongli_from_zh = new Nong("一九八三年正月初一"); // 农历一九八三年正月初一日。
var nongli_from_zh = new Nong("二〇〇九年闰五月初一"); // 农历二〇〇九年闰五月初一日。
```

## API

### Nong()

现在的农历日。

### Nong(Date date)

通过公历生成农历日。

### Nong(Number year, Number month, Number date, leap)

通过指定农历日期生成农历日。

### Nong(String nong)

通过农历字符串生成农历日。

### Number nong.getYear()

返回农历日的年份。

### Number nong.getFullYear()

同 `nong.getYear()`。

### Number nong.getMonth()

返回农历日的月份，`[0,11]`。

### Number nong.getDate()

返回农历日的日期，`[1,30]`。

### Boolean nong.isLeap()

返回当前农历日是否属于闰月。

### Number nong.getDay()

返回农历日的星期数，`[0,6]`。

### String nong.getHours()

返回农历日的小时，`子丑寅卯辰巳午未申酉戌亥`。

### String nong.getMinutes()

返回农历日的分钟数。

### String nong.getSeconds()

### String.getMilllseconds()

### Number getTime()

返回农历日距计算机元年（1970年 1月 1日）的毫秒数。

### Number Nong.parse(String nong)

解析一个农历字符串，并返回该农历日距计算机元年（1970年 1月 1日）的毫秒数。

### nong.setYear(Number year)

设置农历日的年份。

### nong.setFullYear(Number nong)

同 `nong.setYear()`

### nong.setMonth(Number month)

设置农历日的月份。

### nong.setDate(Number date)

设置农历日的日期。

### nong.setHours()

设置农历日的时间。

### nong.setMinutes()

设置农历日的分钟。

### nong.setSeconds()

设置农历日的秒数。

### nong.setMilliseconds()

设置农历日的毫秒数。

### nong.toString([String format])

生成农历日的格式化字符串。

### nong.valueOf()

得到农历日的距离计算机元年的毫秒数。

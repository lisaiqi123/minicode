function withData(param) {
    return param < 10 ? '0' + param : '' + param;
}

function getLoopArray(start, end) {
    var start = start || 0;
    var end = end || 1;
    var array = [];
    for (var i = start; i <= end; i++) {
        array.push(withData(i));
    }
    return array;
}

export function getMonthDay(year, month) {
    var flag = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0),
        array = null;

    switch (month) {
        case '01':
        case '03':
        case '05':
        case '07':
        case '08':
        case '10':
        case '12':
            array = getLoopArray(1, 31)
            break;
        case '04':
        case '06':
        case '09':
        case '11':
            array = getLoopArray(1, 30)
            break;
        case '02':
            array = flag ? getLoopArray(1, 29) : getLoopArray(1, 28)
            break;
        default:
            array = '月份格式不正确，请重新输入！'
    }
    return array;
}

export function getNewDateArry(bol) {
    // 当前时间的处理
    var newDate = new Date();
    var year = withData(newDate.getFullYear());
    var mont = withData(newDate.getMonth() + 1);
    var date = withData(newDate.getDate());
    var hour = withData(newDate.getHours());
    var minu = withData(newDate.getMinutes());
    var seco = withData(newDate.getSeconds());
    if (bol) {
        var date2 = new Date(newDate)
        date2.setDate(newDate.getDate() + 7);
        var year = withData(date2.getFullYear());
        var mont = withData(date2.getMonth() + 1);
        var date = withData(date2.getDate());
        var hour = withData(date2.getHours());
        var minu = withData(date2.getMinutes());
        var seco = withData(date2.getSeconds());

    }

    return [year, mont, date, hour, minu, seco];
}

export function dateTimePicker(startYear, endYear, date, afterday) {
    // 返回默认显示的数组和联动数组的声明
    var dateTime = [],
        dateTimeArray = [
            [],
            [],
            [],
            [],
            [],
            []
        ];
    var start = startYear || 1978;
    var end = endYear || 2100;
    // 默认开始显示数据
    var defaultDate = date != "" ? [...date.split(' ')[0].split('-'), ...date.split(' ')[1].split(':')] : afterday ? getNewDateArry(7) : getNewDateArry();
    // 处理联动列表数据
    /*年月日 时分秒*/
    dateTimeArray[0] = getLoopArray(start, end);
    dateTimeArray[1] = getLoopArray(1, 12);
    dateTimeArray[2] = getMonthDay(defaultDate[0], defaultDate[1]);
    dateTimeArray[3] = getLoopArray(0, 23);
    dateTimeArray[4] = getLoopArray(0, 59);
    dateTimeArray[5] = getLoopArray(0, 59);

    dateTimeArray.forEach((current, index) => {
        dateTime.push(current.indexOf(defaultDate[index]));
    });

    return {
        dateTimeArray: dateTimeArray,
        dateTime: dateTime
    }
}
export function tTimestamp(s, end) {
    let date = new Date(s.replace(/-/g, '/'));
    let enddate = new Date(end.replace(/-/g, '/'))
    let time1 = Date.parse(date);
    let time2 = Date.parse(enddate);
    return time1 >= time2
}
export default {
    dateTimePicker: dateTimePicker,
    getMonthDay: getMonthDay,
    tTimestamp,
    getNewDateArry
}
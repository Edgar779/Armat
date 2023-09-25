import moment from 'moment';

export const dateConverter = (data, type) => {
    let setedDate = new Date(data.startDate.slice(0, 22));
    data.startTime && setedDate.setHours(data.startTime.slice(0, 2), data.startTime.slice(3, 5));
    let tzDifference = data.timezoneOffset + new Date().getTimezoneOffset() / 60;
    let localTime = moment(setedDate).add(moment.duration(-tzDifference, 'hours')).format(type ? type : 'llll');
    return localTime;
};

export const originalDateConverter = (data) => {
    let setedDate = new Date(data.startDate.slice(0, 22));
    data.startTime && setedDate.setHours(data.startTime.slice(0, 2), data.startTime.slice(3, 5));
    let localTime = moment(setedDate).format('llll');
    return localTime;
};

export const multiConverter = (date, time, tz, type) => {
    let setedDate = new Date(date?.slice(0, 22));
    time && setedDate.setHours(time.slice(0, 2), time.slice(3, 5));
    let tzDifference = tz + new Date().getTimezoneOffset() / 60;
    let localTime = moment(setedDate)
        .add(moment.duration(-tzDifference, 'hours'))
        .format(type ? type : 'hh A');
    return localTime;
};

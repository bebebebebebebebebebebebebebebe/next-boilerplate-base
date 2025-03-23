import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
dayjs.extend(timezone);
dayjs.extend(utc);

const defaultFormat = 'YYYY-MM-DD HH:mm:ss';

export const createDatetime = (format = defaultFormat, datetime: string | Date = dayjs().toDate()) => {
  return dayjs(datetime).tz('Asia/Tokyo').format(format);
};

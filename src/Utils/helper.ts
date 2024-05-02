import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export enum CalulateDateTimeType {
  DAYS = "Days",
  HOURS = "hours",
  MINUTES = "Minutes",
  SECONDS = "Seconds",
}
export function CalulateDateTime(
  type: CalulateDateTimeType = CalulateDateTimeType.DAYS,
  input1: Date,
  input2: Date
) {
  const date1 = new Date(input1).getTime();
  const date2 = new Date(input2).getTime();

  const timeDifferenceInMilliseconds = date1 - date2;
  switch (type) {
    case CalulateDateTimeType.DAYS:
      return Math.floor(timeDifferenceInMilliseconds / (24 * 60 * 60 * 1000));
    case CalulateDateTimeType.HOURS:
      return Math.floor(timeDifferenceInMilliseconds / (1000 * 60 * 60));
    case CalulateDateTimeType.MINUTES:
      return Math.floor(timeDifferenceInMilliseconds / (1000 * 60));
    case CalulateDateTimeType.SECONDS:
      return Math.floor(timeDifferenceInMilliseconds / 1000);
  }
}

export function DateUTCtoLocal(date: string) {
  try {
    if (!date) return null;

    return dayjs(date.includes("Z") ? date : date + "z")
      .utc()
      .local()
      .format("YYYY-MM-DDTHH:mm");
  } catch (e) {
    return null;
  }
}

export function DateLocalToUtc(date?: string | null) {
  try {
    if (!dayjs(date).isValid()) return null;
    const utcDate = dayjs(date);

    // Get current time
    const currentTime = dayjs();

    // Add current time to the current date
    const result = utcDate
      .hour(currentTime.hour())
      .minute(currentTime.minute())
      .second(currentTime.second());

    return result.utc().format(); // Format as string
  } catch (e) {
    return null;
  }
}

// functiin to tender date in readable format like Jan 1, 2021 12:00 AM
export function UTCDateToReadableFormat(
  date: string,
  format: string = "MMM DD, YYYY hh:mm A"
) {
  try {
    if (!date) return null;
    return dayjs(date.includes("Z") ? date : date + "z")
      .utc()
      .local()
      .format(format);
  } catch (e) {
    return null;
  }
}


  export function convertStringToJSON(str: string) {
    try {
      // Remove surrounding single quotes and escape characters
      const jsonString = str.replace(/^'|'$/g, "").replace(/\\'/g, "'");

      // Parse the JSON string to JavaScript object
      const jsonObj = JSON.parse(jsonString);

      return jsonObj;
    } catch (error) {
      console.error("Error converting string to JSON:", error);
      return null;
    }
  }

  
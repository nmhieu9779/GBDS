import moment from "moment"

export const formatDate = (date, type) => {
  return moment(date).format(type)
}

export const getDay = (date) => {
  if (!date) {
    return null
  }
  let temp = moment(date)
    .get("date")
    .toString()
  return temp.length === 1 ? `0${temp}` : temp
}

export const getMonth = (date) => {
  if (!date) {
    return null
  }
  let temp = (moment(date).get("month") + 1).toString()
  return temp.length === 1 ? `0${temp}` : temp
}

export const getYear = (date) => {
  if (!date) {
    return null
  }
  let temp = moment(date)
    .get("year")
    .toString()
  return temp
}

export const formatDayMonth = (string) => {
  if (!string) {
    return null
  }
  let temp = string.toString()
  return temp.length === 1 ? `0${temp}` : temp
}

export const formatNotification = (date) => {
  const postDate = new moment(new Date(date).getTime() + 7 * 60 * 60 * 1000)
  const isToday = moment().isSame(postDate, "days")
  let hours = moment().diff(postDate, "hours")
  let minute = moment().diff(postDate, "minute")
  let day = moment().diff(postDate, "days")
  if (isToday) {
    return `${hours !== 0 ? hours + "h" : ""} ${minute !== 0 ? minute - 60 * hours + "m" : ""} trước`
  }
  if (day === 1) {
    return "Hôm qua"
  }
  // return `${day + "day"} ${hours - 24 * day + "h"} ${minute - 60 * hours + "m"} trước`
  return "3h trước"
}

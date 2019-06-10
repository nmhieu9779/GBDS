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

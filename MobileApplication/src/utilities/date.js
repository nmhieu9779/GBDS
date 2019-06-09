import moment from "moment"

export const formatDate = (date, type) => {
  return moment(date).format(type)
}

export const getDay = (date) => {
  let temp = moment(date)
    .get("date")
    .toString()
  return temp.length === 1 ? `0${temp}` : temp
}

export const getMonth = (date) => {
  let temp = (moment(date).get("month") + 1).toString()
  return temp.length === 1 ? `0${temp}` : temp
}

export const getYear = (date) => {
  let temp = moment(date)
    .get("year")
    .toString()
  return temp
}

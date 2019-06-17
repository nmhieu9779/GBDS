export const cleanObject = (obj) => {
  let temp = obj
  Object.keys(temp).forEach((key) => {
    !temp[key] && delete temp[key]
  })
  return temp
}

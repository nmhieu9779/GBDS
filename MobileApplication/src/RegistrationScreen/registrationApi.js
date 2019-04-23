function* registration(data) {
  const { email, password } = data
  let response = ""
  response = { status: "failed", message: email + password }
  return response
}
export const Api = { registration }

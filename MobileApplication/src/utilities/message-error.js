import {toast} from "@src/utilities"

const error = (error) => toast.showToast(error || "Bạn chưa câp nhập thông tin cá nhân", "#ffffff", "#E0002C")

export {error}

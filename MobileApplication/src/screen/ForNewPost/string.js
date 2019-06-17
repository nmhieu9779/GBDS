import {CODE_VIP} from "@src/common/typeCode"

export const main = {
  labelStep: [
    {length: 7, label: "1", isFirst: true},
    {length: 7, label: "2"},
    {length: 7, label: "3"},
    {length: 7, label: "4"},
    {length: 7, label: "5"},
    {length: 7, label: "6"},
    {length: 7, label: "7", isLast: true}
  ]
}

export const stringStep1 = {
  header: "Thông tin cơ bản",
  productTitle: "Tiêu đề",
  area: "Diện tích",
  areaString: "m²",
  priceLabel: "Giá",
  priceTitle: "Tổng giá tiền:",
  addressTitle: "Địa chỉ"
}

export const stringStep2 = {
  header: "Thông tin mô tả",
  note: "(*)",
  noteContent: "Tối đa chỉ 3000 kí tự",
  suggest:
    " Giới thiệu chung về bất động sản của bạn. Ví dụ: Khu nhà có vị trí thuận lợi: Gần công viên, gần trường học ... Tổng diện tích 52m2, đường đi ô tô vào tận cửa... ",
  suggestOther: "Lưu ý: tin rao chỉ để mệnh giá tiền Việt Nam Đồng"
}

export const stringStep3 = {
  header: "Thông tin khác",
  suggest: "Quý vị nên điền đầy đủ thông tin vào các mục dưới đây để tin đăng có hiệu quả hơn",
  widthLabel: "Mặt tiền (m)",
  landWidthLabel: "Đường vào (m)",
  furnitureTitle: "Nội thất khác"
}

export const stringStep4 = {
  header: "Hình ảnh và video",
  note: "Tối đa 8 ảnh với tin thường và 16 với tin VIP. Mỗi ảnh tối đa 2MB",
  suggest:
    "Tin rao có ảnh sẽ được xem nhiều hơn gấp 10 lần và được nhiều người gọi gấp 5 lần so với tin rao không có ảnh. Hãy đăng ảnh để được giao dịch nhanh chóng!",
  image: "Click để tải hình ảnh"
}

export const stringStep5 = {
  header: "Bản đồ",
  suggest:
    "Để tăng độ tin cậy và tin rao được nhiều người quan tâm hơn, hãy sửa vị trí tin rao của bạn trên bản đồ bằng cách Chọn lại vị trí bản đồ",
  note:
    "Có thể dữ liệu bản đồ không chính xác. Vì vậy nếu có bất kỳ sai sót nào xin bạn hãy báo cho chúng tôi để khắc phục kịp thời."
}

export const stringStep6 = {
  header: "Liên hệ",
  nameLabel: "Tên liên hệ",
  addressLable: "Địa chỉ",
  phoneNumberLabel: "Di động",
  emailLabel: "Email"
}

export const stringStep7 = {
  header: "Lịch đăng tin",
  vipType: {
    title: "-- Loại tin rao --",
    label: "Loại tin rao",
    data: [
      {id: 0, label: "Tin thường", type: CODE_VIP.X_NORMAL},
      {id: 1, label: "Tin VIP đặc biệt", type: CODE_VIP.VIP_S0},
      {id: 2, label: "Tin VIP 1", type: CODE_VIP.VIP_S1},
      {id: 3, label: "Tin VIP 2", type: CODE_VIP.VIP_S2}
    ]
  },
  startDate: "Ngày bắt đầu",
  endDate: "Ngày kêt thúc",
  datePicker: {
    mode: "date",
    format: "DD-MM-YYYY",
    confirmBtnText: "Xác nhận",
    cancelBtnText: "Huỷ"
  },
  latestPrice: "Đơn gía cuối cùng: ",
  dayNumber: "Số ngày: ",
  suggest: `Quý khách nên chọn đăng tin Vip để có hiệu quả cao hơn, ví dụ: tin Vip1 có lượt xem trung bình cao hơn 20 lần so với tin thường`,
  textFooter: "Phí dịch vụ trừ vào tài khoản: ",
  vnd: " VND",
  post: "Đăng bài",
  vipDetail: [
    {
      name: "Tin thường",
      content: ": Là loại tin đăng bằng chữ ",
      color: "màu xanh.",
      location: ", nằm dưới các loại tin VIP khác.",
      style: {color: "blue"},
      type: CODE_VIP.X_NORMAL
    },
    {
      name: "Vip đặc biệt",
      content: ": Là loại tin đăng bằng chữ ",
      color: "IN HOA MÀU ĐỎ",
      location: ", nằm trên các loại tin VIP khác.",
      style: {color: "red", fontWeight: "bold"},
      type: CODE_VIP.VIP_S0
    },
    {
      name: "Tin Vip 1",
      content: ": Là loại tin đăng bằng chữ ",
      color: "IN HOA MÀU CAM",
      location: ", nằm bên dưới tin VIP đặc biệt và ở trên các tin VIP 2.",
      style: {color: "orange", fontWeight: "bold"},
      type: CODE_VIP.VIP_S1
    },
    {
      name: "Tin Vip 2",
      content: ": Là loại tin đăng bằng chữ ",
      color: "thường màu cam",
      location: " nằm bên dưới tin VIP 1 và ở trên các tin thường.",
      style: {color: "orange"},
      type: CODE_VIP.VIP_S2
    }
  ],
  dayPrice: ["1 nghìn 727 đồng/Ngày", "68 nghìn 181 đồng/Ngày", "50 nghìn/Ngày", "27 nghìn 272 đồng/Ngày"],
  dayPriceInt: [1727, 27272, 50000, 68181]
}

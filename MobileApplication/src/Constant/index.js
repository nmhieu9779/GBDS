import { Dimensions } from "react-native"

const urlSever = "http://35.187.253.10:21006/api-gateway/grre-admnu/api/v1/"

const constants = {
  urlAddress: {
    city: urlSever + "provinces/",
    district: urlSever + "districts/",
    ward: urlSever + "wards/",
    street: urlSever + "streets/"
  },
  address: {
    city: {
      title: "-- Tỉnh/thành phố --",
      label: "Tỉnh/thành phố"
    },
    district: {
      title: "-- Quận/Huyện --",
      label: "Quận/Huyện"
    },
    ward: {
      title: "-- Phường/Xã --",
      label: "Phường/Xã"
    },
    street: {
      title: "-- Đường/Phố --",
      label: "Đường/Phố"
    }
  },
  commingSoon: "Tính năng đang phát triển",
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,
  authScreen: {
    textSignIn: "Đăng nhập",
    textSignUp: "Đăng ký",
    email: "Email",
    password: "Mật khẩu",
    fullName: "Họ và tên",
    telephoneNumber: "Số điện thoại",
    forgotPassword: "Quên mật khẩu?",
    or: "Hoặc"
  },
  ForSalePostScreen: {
    labelStep: [
      { label: "Bước 1" },
      { label: "Bước 2" },
      { label: "Bước 3" },
      { label: "Bước 4" },
      { label: "Bước 5" },
      { label: "Bước 6" },
      { label: "Bước 7" }
    ],
    step1: {
      header: "Thông tin cơ bản",
      productTitle: "Tiêu đề",
      area: "Diện tích",
      areaString: "m²",
      priceLabel: "Giá",
      priceTitle: "Tổng giá tiền:",
      addressTitle: "Địa chỉ",
      productType: {
        title: "-- Hình thức --",
        label: "Hình thức",
        data: [{ label: "Nhà đất bán" }, { label: "Nhà đất cho thuê" }]
      },
      productCate: {
        title: "-- Phân mục --",
        label: "Loại",
        data: {
          sale: [
            { label: "Bán căn hộ chung cư" },
            { label: "Bán nhà riêng" },
            { label: "Bán nhà biệt thự, liền kề" },
            { label: "Bán nhà mặt phố" },
            { label: "Bán đất nền dự án" },
            { label: "Bán đất" },
            { label: "Bán trang trại, khu nghĩ dưỡng" },
            { label: "Bán kho, nhà xưởng" },
            { label: "Bán loại bất động sản khác" }
          ],
          rent: [
            { label: "Cho thuê căn hộ chng cư" },
            { label: "Cho thuê nhà riêng" },
            { label: "Cho thuê nhà mặt phố" },
            { label: "Cho thuê nhà trọ, phòng trọ" },
            { label: "Cho thuê văn phòng" },
            { label: "Cho thuê cửa hàng, ki ốt" },
            { label: "Cho thuê kho, nhà xưởng, đất" },
            { label: "Cho thuê loại bất động sản khác" }
          ]
        }
      },
      price: {
        title: "-- Đơn vị --",
        data: {
          sale: [
            { label: "Thoả thuận" },
            { label: "Triệu" },
            { label: "Tỷ" },
            { label: "Trăm nghìn/m2" },
            { label: "Triệu/m2" }
          ],
          rent: [
            { label: "Thoả thuận" },
            { label: "Trăm nghìn/Tháng" },
            { label: "Triệu/Tháng" },
            { label: "Trăm nghìn/m2/Tháng" },
            { label: "Triệu/m2/Tháng" },
            { label: "Nghìn/m2/Tháng" }
          ]
        }
      }
    },
    step2: {
      header: "Thông tin mô tả",
      note: "(*)",
      noteContent: "Tối đa chỉ 3000 kí tự",
      suggest:
        " Giới thiệu chung về bất động sản của bạn. Ví dụ: Khu nhà có vị trí thuận lợi: Gần công viên, gần trường học ... Tổng diện tích 52m2, đường đi ô tô vào tận cửa... ",
      suggestOther: "Lưu ý: tin rao chỉ để mệnh giá tiền Việt Nam Đồng"
    },
    step3: {
      header: "Thông tin khác",
      suggest:
        "Quý vị nên điền đầy đủ thông tin vào các mục dưới đây để tin đăng có hiệu quả hơn",
      widthLabel: "Mặt tiền (m)",
      landWidthLabel: "Đường vào (m)",
      homeDirection: {
        title: "-- Hướng nhà --",
        label: "Hướng nhà"
      },
      baconDirection: {
        title: "-- Hướng ban công --",
        label: "Hướng ban công"
      },
      floorNumbersLabel: "Số tầng",
      roomNumbersLabel: "Số phòng ngủ",
      toiletNumbersLabel: "Số toilet",
      furnitureTitle: "Nội thất khác",
      dataDirection: [
        { label: "Không xác định" },
        { label: "Đông" },
        { label: "Tây" },
        { label: "Nam" },
        { label: "Bắc" },
        { label: "Đông-Bắc" },
        { label: "Tây-Bắc" },
        { label: "Tây-Nam" },
        { label: "Đông-Nam" }
      ]
    },
    step4: {
      header: "Hình ảnh và video",
      note: "Tối đa 8 ảnh với tin thường và 16 với tin VIP. Mỗi ảnh tối đa 2MB",
      suggest:
        "Tin rao có ảnh sẽ được xem nhiều hơn gấp 10 lần và được nhiều người gọi gấp 5 lần so với tin rao không có ảnh. Hãy đăng ảnh để được giao dịch nhanh chóng!",
      image: "Click để tải hình ảnh"
    },
    step5: {
      header: "Bản đồ",
      suggest:
        "Để tăng độ tin cậy và tin rao được nhiều người quan tâm hơn, hãy sửa vị trí tin rao của bạn trên bản đồ bằng cách Chọn lại vị trí bản đồ",
      note:
        "Có thể dữ liệu bản đồ không chính xác. Vì vậy nếu có bất kỳ sai sót nào xin bạn hãy báo cho chúng tôi để khắc phục kịp thời."
    },
    step6: {
      header: "Liên hệ",
      nameLabel: "Tên liên hệ",
      addressLable: "Địa chỉ",
      phoneNumberLabel: "Di động",
      emailLabel: "Email"
    },
    step7: {
      header: "Lịch đăng tin",
      vipType: {
        title: "-- Loại tin rao --",
        label: "Loại tin rao",
        data: [
          { label: "Tin thường" },
          { label: "Tin ưu đãi" },
          { label: "Tin Vip 3" },
          { label: "Tin Vip 2" },
          { label: "Tin Vip 1" },
          { label: "Vip đặc biệt" }
        ]
      },
      startDate: "Ngày bắt đầu",
      endDate: "Ngày kêt thúc",
      datePicker: {
        mode: "date",
        format: "DD-MM-YYYY",
        confirmBtnText: "Confirm",
        cancelBtnText: "Cancel"
      },
      latestPrice: "Đơn gía cuối cùng: ",
      dayNumber: "Số ngày: ",
      suggest:
        "Quý khách nên chọn đăng tin Vip để có hiệu quả cao hơn, ví dụ: tin Vip1 có lượt xem trung bình cao hơn 20 lần so với tin thường",
      textFooter: "Phí dịch vụ trừ vào tài khoản: ",
      vnd: " VND",
      post: "Đăng bài",
      normal: {
        name: "Tin thường",
        content_1: ": Là loại tin đăng bằng chữ ",
        content_2: "màu xanh",
        content_3: ", khung ",
        content_4: "màu xanh "
      },
      goodwill: {
        name: "Vip ưu đãi",
        content_1:
          ": Là loại tin được hiển thị trong vòng 3 tháng, mỗi tuần sẽ được up tin tự động 1 lần. Tuần đầu tiên sẽ được hiển thị dưới hình thức VIP 2, các tuần tiếp theo hiển thị hình thức tin thường"
      },
      vip_3: {
        name: "Tin Vip 3",
        content_1: ": Là loại tin đăng bằng chữ ",
        content_2: "thường màu cam",
        content_3: ", khung ",
        content_4: "màu cam ",
        content_5:
          "và luôn nằm dưới tin Vip 2 nhưng luôn luôn hiển thị trên tin thường."
      },
      vip_2: {
        name: "Tin Vip 2",
        content_1: ": Là loại tin đăng bằng chữ ",
        content_2: "IN HOA MÀU CAM",
        content_3: ", khung ",
        content_4: "màu cam ",
        content_5: "nằm bên dưới tin VIP 1 và ở trên các tin vip 3."
      },
      vip_1: {
        name: "Tin Vip 1",
        content_1: ": Là loại tin đăng bằng chữ ",
        content_2: "IN HOA MÀU ĐỎ",
        content_3: ", khung ",
        content_4: "màu đỏ ",
        content_5: "nằm bên dưới tin VIP ĐẶC BIỆT và ở trên các tin vip 2."
      },
      special: {
        name: "Vip đặc biệt",
        content_1: ": Là loại tin đăng bằng chữ ",
        content_2: "IN HOA MÀU ĐỎ",
        content_3: ", khung ",
        content_4: "màu đỏ ",
        content_5:
          "gắn biểu tượng ngôi sao vàng nổi bật ở tiêu đề tin đăng, hiển thị ở top đầu trang tin và được hưởng nhiều ưu tiên nhất."
      },
      dayPrice: [
        "1 nghìn 727 đồng/Ngày",
        "454 nghìn 545 đồng",
        "27 nghìn 272 đồng/Ngày",
        "50 nghìn/Ngày",
        "68 nghìn 181 đồng/Ngày",
        "168 nghìn 181 đồng/Ngày"
      ],
      dayPriceInt: [1727, "454,545", 27272, 50000, 68181, 168181]
    }
  }
}

export default constants

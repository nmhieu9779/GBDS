import {FOR_POST} from "@src/common/typeCode"

const strings = {
  productType: {
    title: "-- Hình thức --",
    label: "Hình thức",
    data: [
      [{id: 0, label: "Nhà đất cần mua", type: "BUY"}, {id: 1, label: "Nhà đất cần thuê", type: "RENT"}],
      [{id: 2, label: "Nhà đất bán", type: "SALE"}, {id: 3, label: "Nhà đất cho thuê", type: "RENT"}]
    ]
  },
  productCate: {
    title: "-- Phân mục --",
    label: "Loại",
    data: [
      [
        [
          {id: 0, label: "Mua nhà riêng", type: FOR_POST.HOUSE},
          {id: 1, label: "Mua căn hộ chung cư", type: FOR_POST.APARTMENT},
          {id: 2, label: "Mua văn phòng", type: FOR_POST.OFFICE},
          {id: 3, label: "Mua mặt bằng kinh doanh", type: FOR_POST.BUSSINESS_PREMISES},
          {id: 4, label: "Mua nhà nghỉ, khách sạn", type: FOR_POST.MOTEL},
          {id: 5, label: "Mua đất", type: FOR_POST.LAND},
          {id: 6, label: "Mua loại bất động sản khác", type: FOR_POST.OTHERS}
        ],
        [
          {id: 0, label: "Cần thuê nhà riêng", type: FOR_POST.HOUSE},
          {id: 1, label: "Cần thuê căn hộ chung cư", type: FOR_POST.APARTMENT},
          {id: 2, label: "Cần thuê văn phòng", type: FOR_POST.OFFICE},
          {id: 3, label: "Cần thuê mặt bằng kinh doanh", type: FOR_POST.BUSSINESS_PREMISES},
          {id: 4, label: "Cần thuê nhà nghỉ, khách sạn", type: FOR_POST.MOTEL},
          {id: 5, label: "Cần thuê đất", type: FOR_POST.LAND},
          {id: 6, label: "Cần thuê loại bất động sản khác", type: FOR_POST.OTHERS}
        ]
      ],
      [
        [
          {id: 0, label: "Bán nhà riêng", type: FOR_POST.HOUSE},
          {id: 1, label: "Bán căn hộ chung cư", type: FOR_POST.APARTMENT},
          {id: 2, label: "Bán văn phòng", type: FOR_POST.OFFICE},
          {id: 3, label: "Bán mặt bằng kinh doanh", type: FOR_POST.BUSSINESS_PREMISES},
          {id: 4, label: "Bán nhà nghỉ, khách sạn", type: FOR_POST.MOTEL},
          {id: 5, label: "Bán đất", type: FOR_POST.LAND},
          {id: 6, label: "Bán loại bất động sản khác", type: FOR_POST.OTHERS}
        ],
        [
          {id: 0, label: "Cho thuê nhà riêng", type: FOR_POST.HOUSE},
          {id: 1, label: "Cho thuê căn hộ chung cư", type: FOR_POST.APARTMENT},
          {id: 2, label: "Cho thuê văn phòng", type: FOR_POST.OFFICE},
          {id: 3, label: "Cho thuê mặt bằng kinh doanh", type: FOR_POST.BUSSINESS_PREMISES},
          {id: 4, label: "Cho thuê nhà nghỉ, khách sạn", type: FOR_POST.MOTEL},
          {id: 5, label: "Cho thuê đất", type: FOR_POST.LAND},
          {id: 6, label: "Cho thuê loại bất động sản khác", type: FOR_POST.OTHERS}
        ]
      ]
    ]
  },
  priceUnit: {
    title: "-- Đơn vị --",
    data: [
      [
        {label: "Thoả thuận", type: -1},
        {label: "Triệu", cost: 1000000},
        {label: "Tỷ", cost: 1000000000},
        {label: "Trăm nghìn/m2", cost: 100000, type: "/m2"},
        {label: "Triệu/m2", cost: 1000000, type: "/m2"},
        {label: "Nghìn/m2", cost: 1000, type: "/m2"}
      ],
      [
        {label: "Thoả thuận", type: -1},
        {label: "Trăm nghìn/Tháng", cost: 100000},
        {label: "Triệu/Tháng", cost: 1000000},
        {label: "Trăm nghìn/m2/Tháng", cost: 100000, type: "/m2"},
        {label: "Triệu/m2/Tháng", cost: 1000000, type: "/m2"},
        {label: "Nghìn/m2/Tháng", cost: 1000, type: "/m2"}
      ]
    ]
  },
  area: {
    title: "-- Diện tích --",
    label: "Diện tích",
    data: [
      {label: "Chưa xác định", type: 0},
      {label: "<= 30 m2", min: 0, max: 30},
      {label: "30 - 50 m2", min: 30, max: 50},
      {label: "50 - 80 m2", min: 50, max: 80},
      {label: "80 - 100 m2", min: 80, max: 100},
      {label: "100 - 150 m2", min: 100, max: 150},
      {label: "150 - 200 m2", min: 150, max: 200},
      {label: "200 - 250 m2", min: 200, max: 250},
      {label: "250 - 300 m2", min: 250, max: 300},
      {label: "300 - 500 m2", min: 300, max: 500},
      {label: ">= 500 m2", min: 500, max: -1}
    ]
  },
  price: {
    title: "-- Chọn mức giá --",
    label: "Chọn mức giá",
    data: [
      [
        {label: "Thoả thuận", type: -1},
        {label: "< 500 triệu", min: 0, max: 500000000},
        {label: "500 - 800 triệu", min: 500000000, max: 800000000},
        {label: "800 triệu - 1 tỷ", min: 800000000, max: 1000000000},
        {label: "1 - 2 tỷ", min: 1000000000, max: 2000000000},
        {label: "2 - 3 tỷ", min: 2000000000, max: 3000000000},
        {label: "3 - 5 tỷ", min: 3000000000, max: 5000000000},
        {label: "5 - 7 tỷ", min: 5000000000, max: 7000000000},
        {label: "7 - 10 tỷ", min: 7000000000, max: 10000000000},
        {label: "10 - 20 tỷ", min: 10000000000, max: 20000000000},
        {label: "20 - 30 tỷ", min: 20000000000, max: 30000000000},
        {label: "> 30 tỷ", min: 30000000000, max: -1}
      ],
      [
        {label: "Thoả thuận", type: -1},
        {label: "< 1 triệu/tháng", min: 0, max: 1000000},
        {label: "1 - 3 triệu/tháng", min: 1000000, max: 3000000},
        {label: "3 - 5 triệu/tháng", min: 3000000, max: 5000000},
        {label: "5 - 10 triệu/tháng", min: 5000000, max: 10000000},
        {label: "10 - 40 triệu/tháng", min: 10000000, max: 40000000},
        {label: "40 - 70 triệu/tháng", min: 40000000, max: 70000000},
        {label: "70 - 100 triệu/tháng", min: 70000000, max: 100000000},
        {label: "> 100 triệu/tháng", min: 100000000, max: -1}
      ]
    ]
  }
}

export default strings

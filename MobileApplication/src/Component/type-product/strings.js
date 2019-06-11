import {FOR_POST} from "@src/common/typeCode"

const strings = {
  productType: {
    title: "-- Hình thức --",
    label: "Hình thức",
    data: [
      [{id: 0, label: "Nhà đất cần mua"}, {id: 1, label: "Nhà đất cần thuê"}],
      [{id: 2, label: "Nhà đất bán"}, {id: 3, label: "Nhà đất cho thuê"}]
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
      [{label: "Thoả thuận"}, {label: "Triệu"}, {label: "Tỷ"}, {label: "Trăm nghìn/m2"}, {label: "Triệu/m2"}],
      [
        {label: "Thoả thuận"},
        {label: "Trăm nghìn/Tháng"},
        {label: "Triệu/Tháng"},
        {label: "Trăm nghìn/m2/Tháng"},
        {label: "Triệu/m2/Tháng"},
        {label: "Nghìn/m2/Tháng"}
      ]
    ]
  },
  area: {
    title: "-- Diện tích --",
    label: "Diện tích",
    data: [
      {label: "Chưa xác định"},
      {label: "<= 30 m2"},
      {label: "30 - 50 m2"},
      {label: "50 - 80 m2"},
      {label: "80 - 100 m2"},
      {label: "100 - 150 m2"},
      {label: "150 - 200 m2"},
      {label: "200 - 250 m2"},
      {label: "250 - 300 m2"},
      {label: "300 - 500 m2"},
      {label: ">= 500 m2"}
    ]
  },
  price: {
    title: "-- Chọn mức giá --",
    label: "Chọn mức giá",
    data: [
      [
        {label: "Thoả thuận"},
        {label: "< 500 triệu"},
        {label: "500 - 800 triệu"},
        {label: "800 triệu - 1 tỷ"},
        {label: "1 - 2 tỷ"},
        {label: "2 - 3 tỷ"},
        {label: "3 - 5 tỷ"},
        {label: "5 - 7 tỷ"},
        {label: "7 - 10 tỷ"},
        {label: "10 - 20 tỷ"},
        {label: "20 - 30 tỷ"},
        {label: "> 30 tỷ"}
      ],
      [
        {label: "Thoả thuận"},
        {label: "< 1 triệu"},
        {label: "1 - 3 triệu"},
        {label: "3 - 5 triệu"},
        {label: "5 - 10 triệu"},
        {label: "10 - 40 triệu"},
        {label: "40 - 70 triệu"},
        {label: "70 - 100 triệu"},
        {label: "> 100 triệu"}
      ]
    ]
  }
}

export default strings

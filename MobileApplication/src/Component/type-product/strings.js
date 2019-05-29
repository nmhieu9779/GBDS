const strings = {
  productType: {
    title: "-- Hình thức --",
    label: "Hình thức",
    data: [
      [{label: "Nhà đất cần mua"}, {label: "Nhà đất cần thuê"}],
      [{label: "Nhà đất bán"}, {label: "Nhà đất cho thuê"}]
    ]
  },
  productCate: {
    title: "-- Phân mục --",
    label: "Loại",
    data: [
      [
        [
          {label: "Mua căn hộ chung cư"},
          {label: "Mua nhà riêng"},
          {label: "Mua nhà biệt thự, liền kề"},
          {label: "Mua nhà mặt phố"},
          {label: "Mua đất nền dự án"},
          {label: "Mua đất"},
          {label: "Mua trang trại, khu nghĩ dưỡng"},
          {label: "Mua kho, nhà xưởng"},
          {label: "Mua loại bất động sản khác"}
        ],
        [
          {label: "Cần thuê căn hộ chng cư"},
          {label: "Cần thuê nhà riêng"},
          {label: "Cần thuê nhà mặt phố"},
          {label: "Cần thuê nhà trọ, phòng trọ"},
          {label: "Cần thuê văn phòng"},
          {label: "Cần thuê cửa hàng, ki ốt"},
          {label: "Cần thuê kho, nhà xưởng, đất"},
          {label: "Cần thuê loại bất động sản khác"}
        ]
      ],
      [
        [
          {label: "Bán căn hộ chung cư"},
          {label: "Bán nhà riêng"},
          {label: "Bán nhà biệt thự, liền kề"},
          {label: "Bán nhà mặt phố"},
          {label: "Bán đất nền dự án"},
          {label: "Bán đất"},
          {label: "Bán trang trại, khu nghĩ dưỡng"},
          {label: "Bán kho, nhà xưởng"},
          {label: "Bán loại bất động sản khác"}
        ],
        [
          {label: "Cho thuê căn hộ chng cư"},
          {label: "Cho thuê nhà riêng"},
          {label: "Cho thuê nhà mặt phố"},
          {label: "Cho thuê nhà trọ, phòng trọ"},
          {label: "Cho thuê văn phòng"},
          {label: "Cho thuê cửa hàng, ki ốt"},
          {label: "Cho thuê kho, nhà xưởng, đất"},
          {label: "Cho thuê loại bất động sản khác"}
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

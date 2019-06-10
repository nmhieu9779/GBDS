import React from "react"
import {View, Text, Image, ScrollView, TouchableOpacity, TextInput} from "react-native"
import SafeAreaView from "react-native-safe-area-view"
import TopBarMenu from "@src/component/top-bar-menu"
import {faArrowLeft, faBookmark} from "@fortawesome/free-solid-svg-icons"
import {faShareSquare, faEdit, faClock, faUser, faPaperPlane} from "@fortawesome/free-regular-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome"
import styles from "./styles"
import AvatarCirCle from "@src/component/avatar-circle"
import Card from "@src/component/card"

const url =
  "https://firebasestorage.googleapis.com/v0/b/money-9779.appspot.com/o/10170804_654154574724344_267561146729865414_n.jpg?alt=media&token=aacbbdb9-abf7-4788-bedd-a4269828dd85"

const postName =
  "Cần tiền bán đất đang kinh doanh phòng trọ đường số 1, Trần Não, Q2. DT: 5,55 x 28,66m, giá 13 tỷ"

const content = `Chính chủ cần bán lô đất đang kinh doanh 7 phòng trọ, thu nhập 18 triệu/tháng. Mặt tiền đường số 1, cách Trần Não khoảng 50m.
Khu dân trí cao. Gần cầu Sài Gòn, siêu thị Mega market, Parkson, Big C, Vincom...
Thích hợp xây hotel mini, văn phòng cho thuê, nhà ở cao tầng.. Vị trí đẹp, khả năng sinh lời cao.
Xây dựng tự do, không khống chế chiều cao. DT: 5,55 x 28.66m. Giá 13 tỷ TL. Sổ hồng riêng. LH chính chủ: 0938727267, gặp chị Hiệp. Miễn trung gian.`

const data = [
  {label: "Địa chỉ", content: "50 Đường Số 1, Phường Bình An, Quận 2"},
  {label: "Giá", content: "13 tỷ"},
  {label: "Diện tích", content: "159.06m²"},
  {label: "Di động", content: "0938727267"},
  {label: "Liên hệ", content: "ngochiep0406@yahoo.com"}
]

const image = [
  "https://file4.batdongsan.com.vn/resize/745x510/2019/05/04/WUgtgUEF/20190504125955-c1f3.jpg",
  "https://file4.batdongsan.com.vn/resize/745x510/2019/05/04/WUgtgUEF/20190504125955-e5d6.jpg"
]

const _renderTableInfo = () => (
  <Card style={styles.infoPostContainer}>
    <View style={styles.infoPostTitleContainer}>
      <Text style={styles.infoPostTitleText}>{"Thông tin nhà đất"}</Text>
    </View>
    {data.map(({label, content}, index) => (
      <TableIcon key={index} label={label} content={content} />
    ))}
  </Card>
)

const TableIcon = ({label, content}) => (
  <View style={styles.infoPostItemComtainer}>
    <View style={styles.infoPostItemLabelContainer}>
      <Text style={styles.infoPostItemLabelText}>{label}:</Text>
    </View>
    <View style={styles.infoPostItemContentContainer}>
      <Text>{content}</Text>
    </View>
  </View>
)

const _renderContentPost = () => (
  <Card style={styles.contentPostContainer}>
    <Text style={styles.contentPostTitle}>{"Thông tin mô tả"}</Text>
    <Text>{content}</Text>
  </Card>
)

const _renderImagePost = () => (
  <Card style={styles.imagePostContainer}>
    {image.map((uri, index) => (
      <Image key={index} style={styles.imagePostItem} source={{uri: uri}} />
    ))}
  </Card>
)

const _renderMenu = () => (
  <View style={styles.menuContainer}>
    <TouchableOpacity style={styles.menuItemContainer}>
      <View style={styles.menuItem}>
        <FontAwesomeIcon color={"white"} icon={faEdit} />
        <Text style={styles.menuItemText}>{"Chỉnh sửa"}</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.menuItemContainer}>
      <View style={styles.menuItem}>
        <FontAwesomeIcon color={"white"} icon={faClock} />
        <Text style={styles.menuItemText}>{"Gia hạn"}</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.menuItemContainer}>
      <View style={styles.menuItem}>
        <FontAwesomeIcon color={"white"} icon={faUser} />
        <Text style={styles.menuItemText}>{"Người đăng ký"}</Text>
      </View>
    </TouchableOpacity>
  </View>
)

const ForSalePostDetail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBarMenu
        icon={[{icon: faArrowLeft}]}
        title={"Cần tiền bán đất đang kinh doanh phòng trọ đường số 1, Trần Não, Q2. DT"}
      />
      <ScrollView>
        <Card style={styles.infoUserContainer}>
          <View style={styles.infoUserTopContainer}>
            <FontAwesomeIcon color={"#0072bc"} icon={faBookmark} />
            <Text style={styles.infoUserPostDate}>{"02-06-2019"}</Text>
            <FontAwesomeIcon color={"#0072bc"} icon={faShareSquare} />
          </View>
          <View style={styles.infoUserBottomContainer}>
            <AvatarCirCle avatarImageUrl={url} size={40} />
            <Text style={styles.postName} numberOfLines={3}>
              {postName}
            </Text>
          </View>
          {_renderMenu()}
        </Card>
        {_renderTableInfo()}
        {_renderContentPost()}
        {_renderImagePost()}
      </ScrollView>
      <View style={styles.commentContainer}>
        <TextInput style={styles.textInputComment} placeholder={"Viết bình luận..."} />
        <FontAwesomeIcon style={styles.iconComment} color={"#2E75ED"} icon={faPaperPlane} />
      </View>
    </SafeAreaView>
  )
}

export default ForSalePostDetail

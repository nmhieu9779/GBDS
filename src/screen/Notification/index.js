import React, {useEffect} from "react"
import TopBarMenu from "@src/component/top-bar-menu"
import LinearGradient from "react-native-linear-gradient"
import styles from "./styles"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import {getNotification} from "@src/redux/actions"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {FlatList, View, Text} from "react-native"
import AvatarCirCle from "@src/component/avatar-circle"
import Card from "@src/component/card"
import {formatNotification} from "@src/utilities/date"

const Notification = (props) => {
  useEffect(() => {
    props.getNotification({email: props.email})
  }, [])

  keyExtractor = (item, index) => `${index}`

  renderItem = ({item, index}) => {
    return (
      <Card style={{padding: 5, flexDirection: "row", margin: 5, marginBottom: 0}}>
        <AvatarCirCle avatarImageUrl={item.avatar} size={60} />
        <View style={{flex: 1, marginLeft: 5}}>
          <Text>{item.message}</Text>
          <Text style={{position: "absolute", bottom: 0, right: 0}}>
            {formatNotification(item.createdDate)}
          </Text>
        </View>
      </Card>
    )
  }

  return (
    <LinearGradient style={styles.container} colors={["#5c6099", "#089a9a"]}>
      <TopBarMenu
        icon={[{icon: faArrowLeft}]}
        title={"Thông báo"}
        onPress={() => props.navigation.goBack()}
      />
      <FlatList data={props.data} keyExtractor={keyExtractor.bind()} renderItem={renderItem.bind()} />
    </LinearGradient>
  )
}

const mapStateToProps = (state) => {
  return {
    email: state.userProfile.userProfile.response.content.email,
    data: state.notification.notification.success ? state.notification.notification.response.content : []
  }
}

const mapDispatchToProps = (dispatch) => {
  let actionCreators = {
    getNotification
  }
  let actions = bindActionCreators(actionCreators, dispatch)
  return {...actions, dispatch}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification)

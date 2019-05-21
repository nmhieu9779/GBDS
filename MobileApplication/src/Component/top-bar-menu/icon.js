import React, { PureComponent } from "react"
import { TouchableOpacity, View } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"

class Icon extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      (this.props.icon && (
        <TouchableOpacity
          style={this.props.style}
          onPress={this.onPress.bind(this)}
        >
          <FontAwesomeIcon size={24} icon={this.props.icon} />
        </TouchableOpacity>
      )) || <View style={{ width: 56 }} />
    )
  }
  onPress = () => {
    this.props.onPress()
  }
}

export default Icon

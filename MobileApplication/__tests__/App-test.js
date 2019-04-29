/**
 * @format
 */

import "react-native"
import React from "react"
import App from "../App"
import SocialButton from "../src/Component/SocialButton"
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer"

test("renders correctly", () => {
  const tree = renderer.create(<SocialButton />).toJSON()
  expect(tree).toMatchSnapshot()
})
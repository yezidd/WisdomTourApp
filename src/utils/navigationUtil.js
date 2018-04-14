export const fromBottom = props => {
  const { layout, position, scene } = props

  const index = scene.index
  const height = layout.initHeight

  const translateX = 0
  const translateY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [height, 0, 0]
  })

  return {
    transform: [{ translateX }, { translateY }]
  }
}
export const fromRight = props => {
  const { layout, position, scene } = props
  const index = scene.index
  const inputRange = [index - 1, index, index + 1]
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 0.8]
  })
  const translateX = position.interpolate({
    inputRange,
    outputRange: [50, 0, 0]
  })
  const translateY = 0

  return {
    opacity,
    transform: [{ translateX }, { translateY }]
  }
}
export const fromBottomLikeAndroid = props => {
  const { layout, position, scene } = props
  const index = scene.index
  const inputRange = [index - 1, index, index + 1]
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 0.8]
  })
  const translateX = 0
  const translateY = position.interpolate({
    inputRange,
    outputRange: [50, 0, 0]
  })

  return {
    opacity,
    transform: [{ translateX }, { translateY }]
  }
}

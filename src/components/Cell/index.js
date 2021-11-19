import React from 'react'
import { View, Pressable } from 'react-native'
import Cross from '../Cross'
import styles from './styles'

const Cell = (props) => {
  const { cell, onPress } = props;
  return (
    <Pressable
      onPress={() => onPress()}
      style={styles.cell}
    >
      {cell === "o" && <View style={styles.circle} />}
      {cell === "x" && <Cross />}
    </Pressable>
  )
}

export default Cell;

import React from 'react'
import { View } from 'react-native'
import styles from './styles'

const Cross = () => {
  return (
    <View style={styles.cross}>
      <View style={styles.crossLine} />
      <View style={[styles.crossLine, styles.crossLineReversed]} />
    </View>
  )
}

export default Cross;

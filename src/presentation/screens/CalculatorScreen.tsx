import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { colors, styles } from '../../config/theme/app-theme'
import { CalculatorButton } from '../components/CalculatorBotton'

export const CalculatorScreen = () => {
    return (
        <View style={styles.calculatorContainer}>
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <Text style={styles.mainResult}>1500</Text>
                <Text style={styles.subResult}>15</Text>
            </View>

            <View style={ styles.row }>
                <CalculatorButton label="C" blackText color={colors.lightGray} onPress={() => {}} />
                <CalculatorButton label="+/-" blackText color={colors.lightGray} onPress={() => {}} />
                <CalculatorButton label="%" blackText color={colors.lightGray} onPress={() => {}} />
                <CalculatorButton label="/" color={colors.orange} onPress={() => {}} />
            </View>

            <View style={ styles.row }>
                <CalculatorButton label="7" onPress={() => {}} />
                <CalculatorButton label="8"  onPress={() => {}} />
                <CalculatorButton label="9" onPress={() => {}} />
                <CalculatorButton label="X" color={colors.orange} onPress={() => {}} />
            </View>

            <View style={ styles.row }>
                <CalculatorButton label="4" onPress={() => {}} />
                <CalculatorButton label="5"  onPress={() => {}} />
                <CalculatorButton label="6" onPress={() => {}} />
                <CalculatorButton label="-" color={colors.orange} onPress={() => {}} />
            </View>

            <View style={ styles.row }>
                <CalculatorButton label="1" onPress={() => {}} />
                <CalculatorButton label="2"  onPress={() => {}} />
                <CalculatorButton label="3" onPress={() => {}} />
                <CalculatorButton label="+" color={colors.orange} onPress={() => {}} />
            </View>

            <View style={ styles.row }>
                <CalculatorButton label="0" doubleSize onPress={() => {}} />
                <CalculatorButton label="." onPress={() => {}} />
                <CalculatorButton label="=" color={colors.orange} onPress={() => {}} />
            </View>

        </View>
    )
}

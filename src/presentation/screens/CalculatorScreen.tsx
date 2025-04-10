import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { colors, styles } from '../../config/theme/app-theme'
import { CalculatorButton } from '../components/CalculatorBotton'
import { useCalculator } from '../hooks/useCalculator'

export const CalculatorScreen = () => {
    const { number, buildNumber, toggleSign, clean, deleteOperation } = useCalculator();
    return (
        <View style={styles.calculatorContainer}>
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <Text
                    style={styles.mainResult}
                    numberOfLines={2}
                    adjustsFontSizeToFit
                >{number}
                </Text>
                <Text style={styles.subResult}>15</Text>
            </View>

            <View style={styles.row}>
                <CalculatorButton label="C" blackText color={colors.lightGray} onPress={(label) => { clean() }} />
                <CalculatorButton label="+/-" blackText color={colors.lightGray} onPress={(label) => { toggleSign() }} />
                <CalculatorButton label='del' blackText color={colors.lightGray} onPress={(label) => { deleteOperation() }} />
                <CalculatorButton label="/" color={colors.orange} onPress={(label) => { console.log(label) }} />
            </View>

            <View style={styles.row}>
                <CalculatorButton label="7" onPress={(label) => { buildNumber(label) }} />
                <CalculatorButton label="8" onPress={(label) => { buildNumber(label) }} />
                <CalculatorButton label="9" onPress={(label) => { buildNumber(label) }} />
                <CalculatorButton label="X" color={colors.orange} onPress={(label) => { console.log(label) }} />
            </View>

            <View style={styles.row}>
                <CalculatorButton label="4" onPress={(label) => { buildNumber(label) }} />
                <CalculatorButton label="5" onPress={(label) => { buildNumber(label) }} />
                <CalculatorButton label="6" onPress={(label) => { buildNumber(label) }} />
                <CalculatorButton label="-" color={colors.orange} onPress={(label) => { console.log(label) }} />
            </View>

            <View style={styles.row}>
                <CalculatorButton label="1" onPress={(label) => { buildNumber(label) }} />
                <CalculatorButton label="2" onPress={(label) => { buildNumber(label) }} />
                <CalculatorButton label="3" onPress={(label) => { buildNumber(label) }} />
                <CalculatorButton label="+" color={colors.orange} onPress={(label) => { console.log(label) }} />
            </View>

            <View style={styles.row}>
                <CalculatorButton label="0" doubleSize onPress={(label) => { buildNumber(label) }} />
                <CalculatorButton label="." onPress={(label) => { buildNumber(label) }} />
                <CalculatorButton label="=" color={colors.orange} onPress={(label) => { console.log(label) }} />
            </View>

        </View>
    )
}

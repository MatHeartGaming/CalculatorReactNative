import React from 'react'
import { Pressable, Text } from 'react-native'
import { colors, styles } from '../../config/theme/app-theme'

interface Props {
    label: string;
    color?: string;
    doubleSize?: boolean;
    blackText?: boolean;
    onPress: (label: string) => void;
}


export const CalculatorButton = ({ 
    label, 
    color = colors.darkGray,
    doubleSize = false,
    blackText = false,
    onPress,
}: Props) => {
    return (
        <Pressable 
        onPress= {() => onPress(label)}
        style={ ({ pressed }) => ({
            ...styles.button,
            opacity: pressed ? 0.8 : 1,
            width: doubleSize ? 180 : 80,
            backgroundColor: color
        }) }>
            <Text style={{
                ...styles.buttonText,
                color: blackText ? 'black' : 'white',
            }}>{label}</Text>
        </Pressable>
    )
}

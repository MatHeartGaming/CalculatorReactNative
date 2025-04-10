import React, { useState } from 'react'

export const useCalculator = () => {

    const [number, setNumber] = useState<string>('0');

    const clean = () => {
        setNumber('0');
    }

    const deleteOperation = () => {
        if (number.length === 1) {
            setNumber('0');
            return;
        }
        const newNumber = number.slice(0, -1);
        setNumber(newNumber);
    }

    const toggleSign = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
            return;
        }
        setNumber('-' + number);
    }

    const buildNumber = (numberString: string) => {
        if (number.includes('.') && numberString === '.') return;
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            // Evaluar si es otro 0
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            // Evaular si ed diferente de 0, no hay punto, y es el primer numero
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            // Evitar multiples 0
            if (numberString === '0' && !number.includes('.')) {
                return;
            }
            return setNumber( number + numberString );
        }
        setNumber( number + numberString );
    }

    return {
        // Properties
        number,

        // Methods
        buildNumber,
        clean,
        deleteOperation,
        toggleSign,
    }
}

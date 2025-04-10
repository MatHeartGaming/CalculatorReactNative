import React, { useEffect, useRef, useState } from 'react'

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'X',
    divide = '/',
}

export const useCalculator = () => {

    const [formula, setFormula] = useState<string>('');
    const [number, setNumber] = useState<string>('0');
    const [prevNumber, setPrevNumber] = useState<string>('0');

    const lastOperation = useRef<Operator>(Operator.add);

    useEffect(() => {
        if (lastOperation.current ) {
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula( `${firstFormulaPart} ${ lastOperation.current } ${number}` );
        } else {
            setFormula(number);
        }

    }, [ number ]);

    useEffect(() => {
        const subResult = calculateSubResult();
        setPrevNumber(subResult.toString());
    }, [ formula ])

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('');
        lastOperation.current = Operator.add;
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

    const setLastNumber = () => {
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        } else {
            setPrevNumber(number);
        }
        setNumber('0');
    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide;
    }

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply;
    }

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add;
    }

    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.subtract;
    }

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(result.toString());
        setPrevNumber('0');
        lastOperation.current = Operator.add;
    }

    const calculateSubResult = (): number => {
        const [firstValue, operation, secondValue] = formula.split(' ');

        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        if ( isNaN(num2)) return num1;

        switch (operation) {
            case Operator.add:
                return num1 + num2;

            case Operator.subtract:
                return num1 - num2;
            case Operator.multiply:
                return num1 * num2;
            case Operator.divide:
                if (num2 === 0) {
                    setFormula('Error');
                    return 0;
                }
                return num1 / num2;
            default:
                throw new Error('Oprator not implemented');
        }
    }

    return {
        // Properties
        number,
        prevNumber,
        formula,

        // Methods
        buildNumber,
        clean,
        deleteOperation,
        toggleSign,
        divideOperation,
        multiplyOperation,
        addOperation,
        subtractOperation,
        calculateResult,
    }
}

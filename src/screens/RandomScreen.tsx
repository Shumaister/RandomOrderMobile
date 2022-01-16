import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import { useForm } from 'react-hook-form';
//https://react-hook-form.com/get-started/#ReactNative


const RandomScreen = () => {
    const [items, setItems] = useState<Array<string> | null>(null)
    const [textItems, setTextItems] = useState<string | null>(null)

    const handleTypeText = (text: string) => {
        setTextItems(text)
    }

    const handleOnPress = () => {
        let list: Array<string> = textItems ? textItems.trim().split(',') : []

        list = list.sort(() => Math.random() - 0.42)
        setItems(list)
    }

    const printResult = () => {
        if (items && items.length > 0)
            return items.toString()

        return "-"
    }

    useEffect(() => {
        // todo poner precarga
    }, []);

    return (
        <View style={styles.container}>
            <Text >Random Order!</Text>
            <TextInput
                placeholder="Items"
                onChangeText={handleTypeText}
            />
            {/* <TextInput
                secureTextEntry
                placeholder="Password"
                onChangeText={onChangeField('password')}
            /> */}
            <TouchableOpacity
                onPress={handleOnPress}
            >
                <View >
                    <Text >Random!</Text>
                </View>
            </TouchableOpacity>
            <View >
                <Text >Resultado:</Text>
                <Text >{printResult()}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
})

export default RandomScreen;

import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Picker } from 'react-native';
import { UseAxiosConnector } from '../components/UseAxiosConnector';
import { Pokemon } from '../model/Pokemon';

const RandomScreen = () => {
    const [items, setItems] = useState<Array<string> | null>(null)
    const [textItems, setTextItems] = useState<string | null>(null)
    const [selectedValue, setSelectedValue] = useState<string | null>("java");


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

    const initialData = (data: Array<Pokemon>) => {
        const aux: string = data.map(p => p.name).join().toString()
        setTextItems(aux)
    }

    useEffect(() => {
        UseAxiosConnector(initialData)
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Random Order!</Text>
            <TextInput
                placeholder="Items"
                onChangeText={handleTypeText}
                value={textItems || ''}
                style={styles.input}
                multiline={true}
            />
            <View >
                <Text > </Text>
               
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    
                <Text > </Text>
            </View>
            <TouchableOpacity
                onPress={handleOnPress}
            >
                <View >
                    <Text style={styles.buttom}>Random!</Text>
                </View>
            </TouchableOpacity>

            <View >
                <Text > </Text>
            </View>

            <View >
                <Text style={styles.result}>Resultado:</Text>
                <Text style={styles.result}>{printResult()}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E6E0DF',
        flex: 1,
        justifyContent: 'center',
        paddingTop: 40,
    },
    title: {
        fontSize: 24,
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#DED8D7',
        fontSize: 18,
        textAlign: 'center'
    },
    buttom: {
        backgroundColor: '#D9DDD5',
        fontSize: 18,
        borderRadius: 20,
        textAlign: 'center'
    },
    result: {
        fontSize: 18,
        textAlign: 'center'
    },
})

export default RandomScreen;

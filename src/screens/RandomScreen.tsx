import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { UseAxiosConnector } from '../components/UseAxiosConnector';
import { Pokemon } from '../model/Pokemon';
import { Picker } from '@react-native-picker/picker';
import { Chunkify } from '../utils/Utils';

const RandomScreen = () => {
    const [items, setItems] = useState<Array<Array<string>> | null>(null)
    const [textItems, setTextItems] = useState<string | null>(null)
    const [selectedValue, setSelectedValue] = useState<string>("1");

    const handleTypeText = (text: string) => {
        setTextItems(text)
    }

    const handleOnPress = () => {
        let list: Array<string> = textItems ? textItems.trim().split(',') : []

        list = list.sort(() => Math.random() - 0.42)

        const chunks = Chunkify(list, parseInt(selectedValue), true)

        setItems(chunks)
    }

    const printResult = (item: Array<string>) => {
        if (item && item.length > 0)
            return item.toString()

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
                    onValueChange={(itemValue) => {
                        console.log('itemValue', itemValue);
                        setSelectedValue(itemValue)
                    }
                    }>
                    <Picker.Item label="1 Equipo" value="1" />
                    <Picker.Item label="2 Equipos" value="2" />
                    <Picker.Item label="3 Equipos" value="3" />
                    <Picker.Item label="4 Equipos" value="4" />
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
                <Text style={styles.result}>Resultado</Text>
            </View>

            {
                items?.map((item, i) => {
                    return (<View key={i}>
                        <Text style={styles.result}>{` `}</Text>
                        <Text style={styles.result}>{`Equipo ${i + 1}:`}</Text>
                        <Text style={styles.result}>{printResult(item)}</Text>
                    </View>
                    )
                })
            }



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

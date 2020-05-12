import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as productActions from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

const styles = StyleSheet.create({
    productsContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    button: {
        width: 100,
        height: 50,
        borderColor: '#000',
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20
    },
    textInput: {
        height: 40,
        borderColor: '#e7e7e7',
        borderWidth: 1,
        width: 200,
        fontSize: 20
    }
});

function Products(props) {
    
    const { productsData, addNew } = props;
    const [newItem, setNewItem] = useState('');

    const onGetDataPress = () => {
        axios
            .get('http://localhost:3000/products')
            .then(response => console.log(response.data));
    }
    return (
        <View style={styles.productsContainer}>
            <TextInput
                style={styles.textInput}
                editable
                maxLength={40}
                onChangeText={value => setNewItem(value)}
                multiline
                numberOfLines={2}
            >
            </TextInput>
            <TouchableOpacity style={styles.button} 
                onPress={() => addNew(newItem)}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => onGetDataPress()}>
                <Text style={styles.buttonText}>Get Data</Text>
            </TouchableOpacity>
            <Text style={styles.buttonText}>{productsData.length}</Text>
        </View>
    )
}

function mapStateToProps(storeState){
    return { productsData : storeState.productsData };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(productActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
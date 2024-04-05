import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const MessageInput = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite sua mensagem..."
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#fff',
        padding: 10,
        backgroundColor: '#fff',
    },
    input: {
        padding: 10,
    },
});

export default MessageInput;

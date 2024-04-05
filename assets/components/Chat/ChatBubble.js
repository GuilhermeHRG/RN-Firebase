import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatBubble = ({ senderType, message, timestamp }) => {
    // Verifica o tipo do remetente para definir o estilo do balão de chat
    const bubbleStyle = senderType === 'aluno' ? styles.alunoBubble : styles.professorBubble;

    return (
        <View style={[styles.container, bubbleStyle]}>
            <Text style={styles.message}>{message}</Text>
            <Text style={styles.timestamp}>{timestamp}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        maxWidth: '80%',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#8593A6',
    },
    alunoBubble: {
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-start',
    },
    professorBubble: {
        backgroundColor: '#DEEFE7',
        alignSelf: 'flex-end',
    },
    message: {
        fontSize: 16,
    },
    timestamp: {
        fontSize: 12,
        marginTop: 5,
        color: 'gray',
    },
});

export default ChatBubble;

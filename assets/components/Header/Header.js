import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';

const CustomHeader = ({ title }) => {
    return (
        <View style={[styles.header, { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }]}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'blue', // Cor de fundo do cabeçalho
        flexDirection: 'row', // Para alinhar o texto no centro verticalmente
        justifyContent: 'center', // Para alinhar o texto no centro horizontalmente
        alignItems: 'center', // Para alinhar o texto no centro verticalmente
        height: Platform.OS === 'android' ? 56 + StatusBar.currentHeight : 56, // Altura do cabeçalho + barra de status
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Para ajustar o conteúdo abaixo da barra de status no Android
    },
    headerText: {
        color: '#fff', // Cor do texto
        fontSize: 18, // Tamanho do texto
        fontWeight: 'bold', // Negrito
    },
});

export default CustomHeader;

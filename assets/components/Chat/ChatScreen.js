import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import ChatBubble from './ChatBubble';
import MessageInput from './MessageInput'; // Importe o componente MessageInput

const ChatScreen = () => {
    const [filter, setFilter] = useState('todos'); // Estado para armazenar o filtro selecionado

    // Array de mensagens com informações sobre o remetente (aluno ou professor)
    const messages = [
        { senderType: "aluno", message: "Olá, professor!", timestamp: "09:00" },
        { senderType: "professor", message: "Olá! Em que posso ajudar?", timestamp: "09:05" },
        { senderType: "aluno", message: "Arredonda minha nota pra 10????", timestamp: "09:05" },
        { senderType: "professor", message: "Claro... Que não né? kkkkk", timestamp: "09:07" }
    ];

    // Função para filtrar as mensagens com base no tipo de remetente
    const filteredMessages = () => {
        if (filter === 'alunos') {
            return messages.filter(message => message.senderType === 'aluno');
        } else if (filter === 'professores') {
            return messages.filter(message => message.senderType === 'professor');
        } else {
            return messages;
        }
    };

    return (
        <View style={styles.container}>
            {/* Botões de filtro */}
            <View style={styles.filterButtons}>
                <Button title="Todos" onPress={() => setFilter('todos')} color="#4C5958" />
                <Button title="Alunos" onPress={() => setFilter('alunos')} color="#4C5958" />
                <Button title="Professores" onPress={() => setFilter('professores')} color="#4C5958" />
            </View>

            {/* Renderize os balões de chat filtrados aqui */}
            {filteredMessages().map((message, index) => (
                <ChatBubble
                    key={index}
                    senderType={message.senderType}
                    message={message.message}
                    timestamp={message.timestamp}
                />
            ))}

            {/* Renderize o MessageInput no rodapé da tela */}
            <MessageInput />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
    },
    filterButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
       
        gap: 20,
    },
});

export default ChatScreen;

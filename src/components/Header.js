import React from "react";
import { StyleSheet, View, Text } from "react-native";

function Header(){
    return(
        <View style={styles.containerHeader}>
            <View>
                <Text style={styles.text}>Autenticacao Firebase</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    containerHeader: {
    flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        fontSize: 20,
    },
});

export default Header;

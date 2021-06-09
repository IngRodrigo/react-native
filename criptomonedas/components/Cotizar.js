import React from 'react'
import { View, Text, StyleSheet } from "react-native";

const Cotizar=({cotizacion})=>{
    console.log(cotizacion)
    if(cotizacion===0){
        return null;
    }
    return(
        <>
            <View style={styles.resulado}>
                <Text>El precio de la criptomoneda es: {cotizacion.PRICE}</Text>
            </View>
        </>
    );
}
const styles=StyleSheet.create({
    resulado:{
        backgroundColor:'#5e49e2',
        padding:20
    },
    texto:{

    },
    preco:{

    },
    span:{

    }
});

export default Cotizar;
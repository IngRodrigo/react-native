import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';


const Header =()=>{
    return(
    <><Text style={styles.contenedor}>Criptomonedas</Text></>
    );
}

const styles=StyleSheet.create({
    contenedor:{
        marginTop:Platform.IO=='ios'?20:10,
        fontFamily:'Lato-Black',
        textAlign:'center',
        fontSize:18,
        backgroundColor:'#1d5d5d',
        padding:20,
        marginBottom:10,
        color:'#fff',
        textTransform:'uppercase'
    }
});

export default Header;
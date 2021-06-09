import React from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';


const Header =()=>{
    return(
    <><Text style={styles.contenedor}>Criptomonedas</Text></>
    );
}

const styles=StyleSheet.create({
    contenedor:{
        backgroundColor:'#1d5d5d',
        color:'#fff',
        fontFamily:'Lato-Black',
        fontSize:18,
        marginBottom:10,
        marginTop:Platform.IO=='ios'?20:10,
        padding:20,
        textAlign:'center',
        textTransform:'uppercase'
    }
});

export default Header;
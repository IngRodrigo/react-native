import React ,{useState, useEffect}from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

const Formulario=()=>{
    const [moneda, setMoneda] = useState('');
    const [criptomoneda, setCriptomoneda] = useState('');
    
    useEffect(() => {
        const consultarApi=async()=>{
            const url=`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`;
            const resultado=await axios.get(url);
            console.log(resultado);
        }
        consultarApi();
    }, []);

    const obtenerMoneda=(moneda)=>{
        setMoneda(moneda);
        console.log(moneda)
    }
    return(
        <>
            <View style={styles.contenido}>
                <Text style={styles.label}>Moneda</Text>
                <Picker
                    selectedValue={moneda}
                    onValueChange={(moneda)=>obtenerMoneda(moneda)}
                >
                        <Picker.Item label="- Seleccione -" value=""/>
                        <Picker.Item label="Dolar de Estados Unidos" value="USD"/>
                        <Picker.Item label="Peso Mexicano" value="MXN"/>
                        <Picker.Item label="Euro" value="EUR"/>
                        <Picker.Item label="Libra Esterlina" value="GBP"/>
                </Picker>
                <Text style={styles.label}>Criptomoneda</Text>
            </View>
        </>
    );
}
const styles=StyleSheet.create({
    label:{
        fontSize:18,
        fontFamily:'Lato-Black',
        textTransform:'uppercase'
    },
    contenido:{
        marginHorizontal:'2.5%'
    }
});
export default Formulario;
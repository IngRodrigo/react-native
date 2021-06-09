import React ,{useState, useEffect}from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

const Formulario=({moneda, criptomoneda, setMoneda, setCriptomoneda, setConsultarApi})=>{

    const [criptomonedas, setCriptomonedas] = useState([]);
    useEffect(() => {
        const consultarApi=async()=>{
            //importamos axios para las peticiones 
            const url=`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`;
            const resultado=await axios.get(url);
            setCriptomonedas(resultado.data.Data);
            //console.log(criptomonedas);
        }
        consultarApi();
    }, []);

    const obtenerMoneda=(moneda)=>{
        setMoneda(moneda);
        //console.log(moneda)
    }
    const obtenerCriptoMoneda=(moneda)=>{
        setCriptomoneda(moneda);
      //  console.log(moneda)
    }

    const cotizar=()=>{
        if(moneda.trim()=='' || criptomoneda.trim()==''){
            mostarAlerta();
            return;
        }

        console.log(`Listo para cotizar`);
        setConsultarApi(true);
    }

    const mostarAlerta=()=>{
    
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios',
                [{
                    text:'OK'
                }]
            );
                return;

    }

    return(
        <>
            <View style={styles.contenido}>
                <Text style={styles.label}>Moneda</Text>
                {/* Select para las opciones de moneda, con la libreira Picker */}
                <Picker
                    
                    selectedValue={moneda}
                    onValueChange={(moneda)=>obtenerMoneda(moneda)}
                >
                        <Picker.Item label="- Seleccione -" value="" />
                        <Picker.Item label="Dolar de Estados Unidos" value="USD"/>
                        <Picker.Item label="Peso Mexicano" value="MXN"/>
                        <Picker.Item label="Euro" value="EUR"/>
                        <Picker.Item label="Libra Esterlina" value="GBP"/>
                </Picker>
                <Text style={styles.label}>Criptomoneda</Text>
                <Picker
                    
                    selectedValue={criptomoneda}
                    onValueChange={(criptomoneda)=>obtenerCriptoMoneda(criptomoneda)}
                >
                <Picker.Item label="- Seleccione -" value="" />
                       {criptomonedas.map(cripto=>
                        (<Picker.Item key={cripto.CoinInfo.id}
                         label={cripto.CoinInfo.FullName} 
                         value={cripto.CoinInfo.Name} />))}
                </Picker>

                <View>
                    <TouchableHighlight style={styles.btnCotizar} onPress={()=>cotizar()}>
                        <Text style={styles.textoCotizar}>Cotizar</Text>
                    </TouchableHighlight>
                </View>
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
    },
    fondoPicker:{
        backgroundColor:'#fff'
    },
    btnCotizar:{
        backgroundColor:'#5e49e2',
        padding:10,
        marginTop:20
    },
    textoCotizar:{
        color:'#fff',
        fontSize:18,
        fontFamily:'Lato-Black',
        textTransform:'uppercase',
        textAlign:'center'
    }
});
export default Formulario;
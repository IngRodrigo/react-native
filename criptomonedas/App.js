import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, ActivityIndicator} from 'react-native';
import Header from './components/Header';
import Fomulario from './components/Formulario';

import axios from 'axios';
import Cotizar from './components/Cotizar';

const App = () => {
  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');

  //state para las peticiones a la api 'cotizar'
  const [consultarApi, setConsultarApi] = useState(false);

  const [cotizacion, setCotizacion] = useState('');

  const [cargando, setCargando] = useState(false);
  useEffect(() => {
    if (consultarApi) {
      const consutlarApiCripto = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resultado = await axios.get(url);
        //console.log(resultado.data[criptomoneda][moneda]);
        // console.log(resultado.data.DISPLAY)
        setCargando(true);
        setTimeout(() => {
          //simular tiempo de carga

          setCotizacion(resultado.data.DISPLAY[criptomoneda][moneda]);
          setConsultarApi(false);
          setCargando(false);
        }, 3000);
      };
      consutlarApiCripto();
    }
  }, [consultarApi]);
  console.log(cotizacion);

  const compoente = cargando ? 
    <ActivityIndicator size="large" color="#5e49e2" />
   : 
    <Cotizar cotizacion={cotizacion} />
  ;


  return (
    <>
      <View style={styles.contenido}>
        <Header />
        <Image
          style={styles.imagen}
          source={require('./assets/img/cryptomonedas.png')}
        />
        <Fomulario
          moneda={moneda}
          criptomoneda={criptomoneda}
          setMoneda={setMoneda}
          setCriptomoneda={setCriptomoneda}
          setConsultarApi={setConsultarApi}
        />
        
      </View>
      <View>
        {compoente}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  contenido: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
export default App;

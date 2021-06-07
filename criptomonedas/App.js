
import React from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';
import Header from './components/Header'
import Fomulario from './components/Formulario'


const App=() => {

  return (
    <>
      <View>
      <Header />
      <Image
        style={styles.imagen} 
        source={require('./assets/img/cryptomonedas.png')}
      />
      <Fomulario/>
      </View>
    </>
  );
};

const styles=StyleSheet.create({
  imagen:{
    width:'100%',
    height:150,
    marginHorizontal:'2.5%'
  }
});
export default App;

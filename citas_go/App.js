import React , {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';


import Cita from './components/Citas';
import Formulario from './components/Formulario'

const App=() => {
  const [citas, setCitas]=useState([
    {id:'1', nombre:'hoock', propietario:'test', sintomas:'no come'},
    {id:'2', nombre:'react', propietario:'dev', sintomas:'no duerme'},
    {id:'3', nombre:'native', propietario:'dev-test', sintomas:'no canta'}
  ]);

  const elimianarPaciente=(id)=>{
    setCitas((citas)=>{
      return citas.filter((cita)=>cita.id!==id);
    });
  }

  return(
    
    <>
    <View style={styles.contenedor}>
      <Text style={styles.titilo}>Administrador de citas</Text>
      <Formulario/>
      <Text style={styles.titilo}>{citas.length>0?'Administra tus citas':'No hay citas, crea una'}</Text>
      <FlatList 
      data={citas}
      renderItem={({item})=><Cita cita={item} elimianarPaciente={elimianarPaciente}/>}
      keyExtractor={citas=>citas.id}
      >
      </FlatList>
    </View>
    </>
  )
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA0768',
    flex:1
  },
  titilo:{
    color:'#fff',
    marginTop:40,
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center'
  }
});

export default App;

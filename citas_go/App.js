import React , {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
  TouchableWithoutFeedback,// boton que no resalta al hacer click
Keyboard  
} from 'react-native';


import Cita from './components/Citas';
import Formulario from './components/Formulario'

const App=() => {
  const [MostrarFormulario, setMostrarFormulario] = useState(false);

  const mostrarElemento=()=>{
    setMostrarFormulario(!MostrarFormulario);
  }
  const [citas, setCitas]=useState([]);

  const elimianarPaciente=(id)=>{
    setCitas((citas)=>{
      return citas.filter((cita)=>cita.id!==id);
    });
  }

  const ocultarTeclado=()=>{
    Keyboard.dismiss();
  }

  return(
    
    <>
    {/* con el </TouchableWithoutFeedback>hacemos que al hacer clic en cualquier parte de la app haga algo */}
    <TouchableWithoutFeedback onPress={()=>ocultarTeclado()}>
    <View style={styles.contenedor}>
      <Text style={styles.titilo}>Administrador de citas</Text>
      <View style={styles.btnMostrarFormulario}>
                <TouchableHighlight onPress={()=>mostrarElemento()}>
                    <Text style={styles.textoBtn}>{MostrarFormulario?'Cancelar':'Crear nueva cita'}</Text>
                </TouchableHighlight>
            </View>
      <View style={styles.contenido}>
        {
          MostrarFormulario ?
            <Formulario
            citas={citas}
            setCitas={setCitas}
            setMostrarFormulario={setMostrarFormulario}
            />
            :
            <>
            <Text style={styles.titilo}>{citas.length>0?'Administra tus citas':'No hay citas, crea una'}</Text>
            <FlatList
            style={styles.listado} 
            data={citas}
            renderItem={({item})=><Cita cita={item} elimianarPaciente={elimianarPaciente}/>}
            keyExtractor={citas=>citas.id}
            >
            </FlatList></>
        }
      </View>
    </View>
    </TouchableWithoutFeedback>
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
    marginTop:Platform.OS==='ios'?40:10,
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center'
  },
  contenido:{
    flex:1,
    marginHorizontal:'2.5%'
  },
  listado:{
    flex:1
  },
  btnMostrarFormulario:{
    backgroundColor:'#7d024e',
    marginBottom:15
  },
  textoBtn:{
    color:'#fff',
    textAlign:'center',
    padding:5
  }
});

export default App;

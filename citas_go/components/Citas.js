import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const Cita=({cita, elimianarPaciente})=>{
   const {id, nombre, propietario, sintomas}=cita;


    const eliminar=(id)=>{
        elimianarPaciente(id);
    }

    return(
        <View style={misEstilos.contenedorCita}>
            <Text style={misEstilos.label}>Paciente</Text>
            {<Text style={misEstilos.texto}>{nombre}</Text> }
            <Text style={misEstilos.label}>Propietario</Text>
            {<Text style={misEstilos.texto}>{propietario}</Text> }
            <Text style={misEstilos.label}>Sintomas</Text>
            {<Text style={misEstilos.texto}>{sintomas}</Text> }

            <View style={misEstilos.btnEliminar}>
                <TouchableHighlight onPress={()=>eliminar(id)}>
                    <Text style={misEstilos.textoBtn}>Eliminar</Text>
                </TouchableHighlight>
            </View>

        </View>
    );
}
const misEstilos=StyleSheet.create(
    {
        contenedorCita:{
            backgroundColor:'#FFF',
            borderBottomColor:'#e1e1e1',
            borderStyle:'solid',
            borderBottomWidth:1,
            paddingVertical:10,
            paddingHorizontal:10,
        },
        label:{
            padding:0,
            fontWeight:'bold',
            fontSize:18,
            marginTop:5,
            textAlign:'center'
        },
        texto:{
            fontSize:18,
            textAlign:'center'
        },
        btnEliminar:{
            backgroundColor:'#AA0768',
        },
        textoBtn:{
            color:'#fff',
            textAlign:'center',
            padding:5
        }
    }
);
export default Cita;
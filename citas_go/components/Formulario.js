import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  TouchableHighlight,
  Alert,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'shortid'

  const Formulario = ({citas, setCitas, setMostrarFormulario}) => {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  const [paciente, setPaciente]=useState('');
  const [propietario, setPropietario]=useState('');
  const [telefono, setTelefono]=useState('');
  const [sintomas, setStintomas]=useState('');


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimerPickerVisible, setTimerPickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const ConfirmFecha = date => {
    const opciones = {year: 'numeric', month: 'long', day: '2-digity'};

    const fechaConvertida = date.toLocaleDateString('es-ES', opciones);
    //console.log(typeof(fechaConvertida));
    setFecha(fechaConvertida);
    hideDatePicker();
  };

  //funcionalidades timer
  const showTimerPicker = () => {
    setTimerPickerVisibility(true);
  };

  const hideTimerPicker = () => {
    setTimerPickerVisibility(false);
  };

  const ConfirmHora = time => {
    const opciones = {hour: 'numeric', minute: '2-digit', hour12: false};
    setHora(time.toLocaleTimeString('es-CH', opciones));
    hideTimerPicker();
  };

  const guardarPaciente=(texto)=>{

  }

  const agregarCita=()=>{
    if(paciente.trim()==='' ||
        propietario.trim()==='' ||
        fecha.trim()===''||
        hora.trim()===''||
        telefono.trim()=='' ||
        sintomas.trim()==='')
    {
          mostrarAlerta();
    }else{
      const cita={paciente, propietario, sintomas, telefono};
      cita.id=shortid.generate();

      const nuevaCita=[...citas, cita];
      
      ///agregar la cita (el metodo se le mando desde la app.js)
      setCitas(nuevaCita);

      //ocultar formulario
      setMostrarFormulario(false);
      
    }
  }

  const mostrarAlerta=()=>{
    Alert.alert(
      'Error',//titlo de la alerta
      'Todos los campos son obligatorio',//mensaje
      [{
        text:'ok'//arreglo con los botones que tendra el alert
      }]
    )
  }

  return (
    <>
      <ScrollView style={estilos.contenedor}>
        <View>
          <Text style={estilos.label}>Paciente</Text>
          <TextInput style={estilos.input} onChangeText={(texto)=>setPaciente(texto)}></TextInput>
        </View>
        <View>
          <Text style={estilos.label}>Dueño</Text>
          <TextInput autoCorrect={false} style={estilos.input} onChangeText={(texto)=>setPropietario(texto)}></TextInput>
        </View>
        <View>
          <Text style={estilos.label}>Telefono Contacto</Text>
          <TextInput
            keyboardType={'number-pad'}
            style={estilos.input} onChangeText={(texto)=>setTelefono(texto)}></TextInput>
        </View>
        {/* date */}
        <View>
          <Text style={estilos.label}>Fecha</Text>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={ConfirmFecha}
            onCancel={hideDatePicker}
          />
          <Button title="Selecciona una fecha" onPress={showDatePicker} />
          <Text>{fecha}</Text>
        </View>

        <View>
          <Text style={estilos.label}>Hora</Text>
          <DateTimePickerModal
            isVisible={isTimerPickerVisible}
            mode="time"
            onConfirm={ConfirmHora}
            onCancel={hideTimerPicker}
          />
          <Button title="Selecciona una hora" onPress={showTimerPicker} />
          <Text>{hora}</Text>
        </View>
        <View>
          <Text style={estilos.label}>Sintomas</Text>
          <TextInput multiline style={estilos.input} onChangeText={(texto)=>setStintomas(texto)}></TextInput>
        </View>
        <View style={estilos.btnAgregarCita}>
                <TouchableHighlight onPress={()=>agregarCita()}>
                    <Text style={estilos.textoBtn}>Agregar</Text>
                </TouchableHighlight>
        </View>

      </ScrollView>
    </>
  );
};
const estilos = StyleSheet.create({
  contenedor: {
    backgroundColor: '#fff',
    padding: 5,
    marginVertical:'2.5%',
    marginHorizontal: '2.5%',
  },
  label: {
    padding: 0,
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderBottomColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  btnAgregarCita:{
    backgroundColor:'#7d024e',
},
textoBtn:{
  color:'#fff',
  textAlign:'center',
  padding:5
}
});
export default Formulario;

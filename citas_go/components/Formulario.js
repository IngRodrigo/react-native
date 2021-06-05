import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Formulario = () => {
    const [fecha, setFecha]=useState('');
    const [hora, setHora]=useState('');


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimerPickerVisible, setTimerPickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const ConfirmFecha = date => {
    
    
    const opciones={year:'numeric', month:'long', day:'2-digity'};

    const fechaConvertida=date.toLocaleDateString('es-ES', opciones);
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
    console.log('La hora es: ', time);
    hideTimerPicker();
  };
  return (
    <>
      <View style={estilos.contenedor}>
        <View>
          <Text style={estilos.label}>Paciente</Text>
          <TextInput style={estilos.input}></TextInput>
        </View>
        <View>
          <Text style={estilos.label}>Dueño</Text>
          <TextInput autoCorrect={false} style={estilos.input}></TextInput>
        </View>
        <View>
          <Text style={estilos.label}>Telefono Contacto</Text>
          <TextInput
            keyboardType={'number-pad'}
            style={estilos.input}></TextInput>
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
          <TextInput multiline style={estilos.input}></TextInput>
        </View>
      </View>
    </>
  );
};
const estilos = StyleSheet.create({
  contenedor: {
    backgroundColor: '#fff',
    padding: 10,
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
});
export default Formulario;

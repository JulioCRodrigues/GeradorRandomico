
import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';


export default function App(){

  const [numero, setNumero] = useState(0)

  const gerador = () => {
    const aleatorio = Math.floor(Math.random() * 100)
    setNumero(aleatorio.toFixed())
  }

  return(

    <View style={estilos.container}>
        <Text style={estilos.numeroGerado}>{numero}</Text>
        <TouchableOpacity style={estilos.btnGerador}
          onPress={gerador}
        >
            <Text style={estilos.textoGerador}>Gerar número</Text>
        </TouchableOpacity>
    </View>
  )
}

const estilos = StyleSheet.create({

  container:{
    backgroundColor: '#ff4040',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  numeroGerado:{
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold'
  },

  btnGerador:{
    backgroundColor: '#fff',
    height: 40,
    width: '33%',
    borderWidth: 0.5,
    borderRadius: 8,
    top: 10
  }, 

  textoGerador:{
    textAlign: 'center',
    fontSize: 17,
    margin: 5,
    fontWeight: 'bold'
  }


})


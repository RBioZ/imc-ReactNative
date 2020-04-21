import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

export default function App() {

  const [altura,setAltura] = useState();
  const [massa,setMassa] = useState();
  const [resultNumber,setResultNumber] = useState(0);
  const [resultText,setResultText] = useState();

  function calcResult(){

    let imc = massa/(altura*altura)

    if(imc < 16){
      setResultText('Magreza grave');
    }
    else if(imc > 16 && imc < 17){
      setResultText('Magreza moderada');
    }
    else if(imc > 17 && imc < 18.5){
      setResultText('Magreza leve');
    }
    else if(imc > 18.5 && imc < 25){
      setResultText('Saudável');
    }
    else if(imc > 25 && imc < 30){
      setResultText('Sobrepeso');
    }
    else if(imc > 30 && imc < 35){
      setResultText('Obesidade Grau I');
    }
    else if(imc > 35 && imc < 40){
      setResultText('Obesidade Grau II');
    }
    else{
      setResultText('Obesidade Grau III');
    }

    setResultNumber(imc)
  }

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <TextInput onChangeText={(altura) => setAltura(altura)} placeholder="Altura" keyboardType='numeric' style={styles.textInput}>{altura}</TextInput>
        <TextInput onChangeText={(massa) => setMassa(massa)} placeholder="Massa" keyboardType='numeric' style={styles.textInput}>{massa}</TextInput>
      </View>
      <TouchableOpacity style={styles.button} onPress={calcResult}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.resultText}>{resultNumber.toFixed(2)}</Text>
      <Text style={[styles.resultText,{fontSize:35}]}>{resultText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  text:{
    flexDirection:'row',
    paddingTop:Constants.statusBarHeight+10,
    paddingBottom:10,
  },
  textInput:{
    textAlign:'center',
    fontSize:42,
    width:'50%',
    //color:'#FFFFAA'
  },
  button:{
    backgroundColor:'#89ffa5'
  },
  buttonText:{
    alignSelf:'center',
    padding:30,
    fontSize:25,
    fontWeight:'bold',
    color:'#6dc4a4'
  },
  resultText:{
    alignSelf:'center',
    fontSize:50,
    color:'lightgray',
    padding:20
  }
});

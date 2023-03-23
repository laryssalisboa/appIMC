import React, { Component } from 'react'; 
import { View, Text, Image, Pressable } from 'react-native';
import { TextInput } from 'react-native-web';
import { styles } from './styles';
 
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      peso: 0.00,
      altura: 0.00,
      imc: ''
    };

    this.calculoIMC = this.calculoIMC.bind(this);

  }

  calculoIMC() {
    let imc = this.state.peso / (this.state.altura * this.state.altura);
    if (imc < 18.5) {
      this.setState({imc: "Abaixo do peso"});
    }
    else if (imc >= 18.5 && imc <= 24.9) {
      this.setState({imc: "Peso normal"});
    }
    else if (imc >= 25 && imc <= 29.9) {
      this.setState({imc: "Sobrepeso"});
    }
    else if (imc >= 30 && imc <= 34.9) {
      this.setState({imc: "Obesidade grau I"});
    }
    else if (imc >= 35 && imc <= 39.9) {
      this.setState({imc: "Obesidade grau II"});
    }
    else {
      this.setState({imc: "Obesidade grau III ou Mórbida"});
    }
  }

  render(){

    let img = 'https://media2.giphy.com/media/3o6MbkSg5gfrwB33XO/200w.gif?cid=82a1493bxt9zkxrggxlahe410n4izqchx8wlycht4p8agxv1&rid=200w.gif&ct=g';

    return(
      <View>
        <Text style={styles.title}>Cálculo do IMC</Text>

        <Image
        source={{uri: img}}
        style={styles.img}
        />

        <TextInput
        style={styles.input}
        placeholder="Peso"
        onChangeText={(p) => this.setState({peso: p})}
        />

        <TextInput
        style={styles.input}
        placeholder="Altura"
        onChangeText={(a) => this.setState({altura: a})}
        />

        <Pressable style={styles.button} onPress={ this.calculoIMC }>
          <Text style={styles.textButton}>Verificar</Text>
        </Pressable>

        <Text style={styles.textResult}>{this.state.imc}</Text>

      </View>
    )
  }
}
 
export default App;
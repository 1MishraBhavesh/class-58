import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader'

 export default class HomeScreen extends React.Component{
 goToBuzzerScreen=(buzzerColor) => {
   this.props.navigation.navigate('BuzzerScreen',{color:buzzerColor})
 }
 
 
  render(){
    return(
      <View>
       <AppHeader/>
       
       <TouchableOpacity
   style={[styles.button,
    { backgroundColor: 'red' }]}
      onPress={() => { this.goToBuzzerScreen('red'); }}>
        <Text style={styles.buttonText}>Team 1</Text>
         </TouchableOpacity>
         <TouchableOpacity
   style={[styles.button,
    { backgroundColor: 'blue' }]}
      onPress={() => { this.goToBuzzerScreen('blue'); }}>
        <Text style={styles.buttonText}>Team2</Text>
         </TouchableOpacity><TouchableOpacity
   style={[styles.button,
    { backgroundColor: 'yellow' }]}
      onPress={() => { this.goToBuzzerScreen('yellow'); }}>
        <Text style={styles.buttonText}>Team3</Text>
         </TouchableOpacity><TouchableOpacity
   style={[styles.button,
    { backgroundColor: 'green' }]}
      onPress={() => { this.goToBuzzerScreen('green'); }}>
        <Text style={styles.buttonText}>Team 4</Text>
         </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 20,
    width: 200,
    heigth: 50,
    marginTop: 90,
  },
  buttonText:{
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});


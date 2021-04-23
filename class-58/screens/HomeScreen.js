import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader'
import db from '../config'

 export default class HomeScreen extends React.Component{

   constructor(){ 
     super();
     this.state={
       redStatus:true,
       blueStatus:true,        
       greenStatus:true,
       yellowStatus:true
     };
   }
 goToBuzzerScreen=(buzzerColor) => {
   var teamRef=db.ref('teams/' + buzzerColor);
   teamRef.update({  
     enabled:false
   });
   this.props.navigation.navigate('BuzzerScreen',{color:buzzerColor})
 }
 componentDidMount(){
    var teamRef=db.ref('teams/');
  teamRef.on("value",(data)=>{        
                       var  teamDetails= data.val();
                         this.setState({
                           redStatus:teamDetails.red.enabled,
                             blueStatus:teamDetails.blue.enabled,
                               greenStatus:teamDetails.green.enabled,
                                 yellowStatus:teamDetails.yellow.enabled
                         });
                }); 
 }
 
  render(){
    return(
      <View>
       <AppHeader/>
       
       <TouchableOpacity
       disabled={!this.state.redStatus}
         
              
          
   style={[styles.button,
    { backgroundColor: 'red' }]}
    
      onPress={() => { this.goToBuzzerScreen('red'); }}>
        <Text style={styles.buttonText}>Team 1</Text>
         </TouchableOpacity>

         <TouchableOpacity
          disabled={!this.state.blueStatus}  
   style={[styles.button,
    { backgroundColor: 'blue' }]}
      onPress={() => { this.goToBuzzerScreen('blue'); }}>
        <Text style={styles.buttonText}>Team2</Text>
         </TouchableOpacity>

         <TouchableOpacity
         disabled={!this.state.yellowStatus}
   style={[styles.button,
    { backgroundColor: 'yellow' }]}
      onPress={() => { this.goToBuzzerScreen('yellow'); }}>
        <Text style={styles.buttonText}>Team3</Text>
         </TouchableOpacity> 

         <TouchableOpacity
         disabled={!this.state.greenStatus}
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


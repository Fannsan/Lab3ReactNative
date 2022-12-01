import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackgroundBase, StyleSheet, Text, View, Image, Button } from 'react-native';

const Rooms = ({picture, room}) =>{

  return(
    <View>
        <View style = {styles.boxes}>
        <Image 
        source = {picture}
        style = {styles.pix}/>
        <Text>{room}</Text>
       </View> 
    </View>
  );

}

const Switches = ({device, setHomeItems, }) => {

  const [boxColor, setBoxColor] = useState ('white');
  

  return(
  <View style={styles.devices}>
   
<View style={{backgroundColor:boxColor, height:25, width:25, margin:10}}></View> 
  <Text style={{margin:15,}}>{device}</Text>
  <View style={{flexDirection:"column", }}>
  <View style={styles.onOff}>
    <Button title= "on" onPress={() => { 
    setBoxColor ('green');
    if (boxColor !== 'green'){
      setHomeItems((prevTotalItems) => prevTotalItems + 1 );
    }
    
  }}/>
  </View>
  
  <View style={styles.onOff}>
  <Button title='off' onPress={() => {
    setBoxColor ('red')
    if (boxColor !== 'red'){
    setHomeItems((prevTotalItems) => prevTotalItems - 1 );
  }
    }}/>
    </View>
  </View>
  </View>
  );
}


export default function App() {
  

  const [homeItems, setHomeItems] = useState(0)

  return (

    <View style={styles.container}>
      <View style= {{flexDirection: "row", }}> 
      <Image 
      source = {require('./assets/house.png')}
      style = {{height: 50, width:50}}/>
       <Text style= {{marginLeft: 20, marginTop: 20, color:"lightblue", fontSize:18}}>SmartHome</Text>
      </View>
      <Text style= {{marginTop:30, fontSize:22, fontWeight:"bold"}}>Rooms</Text>
      <View style= {{flexDirection: "row", }}>
     
      <Rooms room=" Livingroom" picture={require('./assets/living-room.png')}/>
      <Rooms room=" Bedroom" picture={require('./assets/bed.png')}/>
      <Rooms room =" Kitchen" picture={require('./assets/kitchen.png')}/>
        </View>
        <Text style={{marginTop:30, fontWeight:"bold", fontSize:15,  }}>Devices</Text>
        <Switches device="Livingroom Lamp" setHomeItems={setHomeItems}/>

        <Switches device="Heater" setHomeItems={setHomeItems}/>
        <Switches device="TV" setHomeItems={setHomeItems}/>
        <Text> Devices turn on: {homeItems}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: '',
    justifyContent: '',
    marginTop: 50,
    marginLeft: 40,

  
  },
  boxes: {
  marginRight: 10,
  backgroundColor: "lightblue",
  height:120,
  width:100,
  },

  pix:{
  margin:10,  
  height:70,
  width:70,
  },

  devices:{
  backgroundColor: "#fff494" ,
  padding: 10,
  marginTop:10,  
  height:95,
  width:320,
  flexDirection: "row",
  justifyContent:'space-between'
  },

  onOff:{
  height: 35,
  width: 50,  
  backgroundColor: "white",
  fontSize: 3,
  },


});

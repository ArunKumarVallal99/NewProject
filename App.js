import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const YourApp = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scrollView}>
    <View
        style={{
         flex:5,
          padding: 20
        }}
      >
        
        <View style={styles.container} />
        <View style={{ backgroundColor: "red",flex:5,height:1000, }} />
        <Text style={styles.textarea}>EnterUser Name</Text>
        <TextInput style={styles.input}/>
      </View>
      </ScrollView>
      </SafeAreaView>
     
  );
}

const styles= StyleSheet.create({
safe:{
  flex:1,

},
 container:{
backgroundColor:"blue",
flex:6,
height:600,
borderColor:'gray',
borderWidth:5,
},
scrollView:{
  backgroundColor:'pink',
  
},
textarea:{
borderColor:"gray",
borderWidth:1,
margin:10,
},
input:{
  borderColor:'grey',
  borderWidth:2,
},
});

export default YourApp;
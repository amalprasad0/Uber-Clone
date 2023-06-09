import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'
const data=[
  {
    id:"Uber-X-123",
    title:"UberX",
    multiplier:1,
    image:"https://links.papareact.com/3pn"
  },
  {
    id:"Uber-XL-456",
    title:"Uber XL",
    multiplier:1.2,
    image:"https://links.papareact.com/5w8"
  },
  {
    id:"Uber-LUX-789",
    title:"Uber LUX",
    multiplier:1.75,
    image:"https://links.papareact.com/7pf"
  },
]





const RideOptionsCard = () => {
  const navigation=useNavigation()
  return (
    <View style={tw`bg-white  flex-grow`}>
      <View >
        <TouchableOpacity 
        style={tw`absolute top-3 left-5 p-3 rounded-full`}
        onPress={()=>
          navigation.navigate("NavigateCard")
          // console.log("pressed")}
        }
        >
          <Icon name="chevron-left" type="fontawesome"/>
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-lg `}>Select a Ride</Text>
      </View>
      <FlatList
      data={data}
      keyExtractor={(item)=>item.id}
      renderItem={({item:{id,title,multiplier,image},item})=>(
        <TouchableOpacity style={tw`flex-row items-center justify-between px-10`}>
          <Image style={{
            width:100,
            height:100,
            resizeMode:"contain"
          }
          }
          source={{uri:image}}/>
          <View >
            <Text>{title}</Text>
            <Text>Travel time...</Text>

          </View>
          <Text style={tw`text-xl`}>₹99.89/-</Text>
        </TouchableOpacity>
      )}
     />  

    </View>
  );
};

export default RideOptionsCard

const styles = StyleSheet.create({})
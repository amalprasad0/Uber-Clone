import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Navoptions from '../components/Navoptions'
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'
import NavFavorite from '../components/NavFavorite'
const HomeScreen = () => {
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={[tw`bg-white h-full`, styles.container]}>
      <View style={
        tw`p-5`
      }>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            }
          }}
          onPress={(data, details = null) => {
            // console.log(data)
            // console.log(details)
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description,
            }))
            dispatch(setDestination(null))

          }}
          fetchDetails={true}
          returnKeyType={"search"}
          minLength={2}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />
        <Navoptions />
        <NavFavorite />
      </View>
    </SafeAreaView>
  )
}


export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight
  },
});
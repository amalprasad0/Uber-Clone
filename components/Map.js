import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import tw from 'twrnc'
import { useSelector } from 'react-redux'
import { selectOrigin, selectDestination } from '../slices/navSlice'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setTravelTimeInformation } from '../slices/navSlice'
import { PROVIDER_GOOGLE } from 'react-native-maps'



const Map = () => {
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  const mapRef = useRef(null)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 100, right: 100, bottom: 100, left: 100 }
    })
  }, [origin, destination])
  useEffect(() => {
    if (!origin || !destination) return;
    const getTraveltime = async () => {
      const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.rows[0].elements[0])
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]))

        })
    }
    getTraveltime()
  }, [origin, destination, GOOGLE_MAPS_APIKEY])
  return (
    // <MapView
    //   ref={mapRef}
    //   // style={tw`flex-1`}
    //   style={styles.modalStyle}
    //   mapType='mutedStandard'
    //   initialRegion={{
    //     latitude: origin.location.lat,
    //     longitude: origin.location.lng,
    //     latitudeDelta: 0.005,
    //     longitudeDelta: 0.005,
    //   }}
    //   provider={PROVIDER_GOOGLE}

    // >
    //   {origin && destination && (
    //     <MapViewDirections
    //       origin={origin.description}
    //       destination={destination.description}
    //       apikey={GOOGLE_MAPS_APIKEY}
    //       strokeWidth={3}
    //       strokeColor='black'

    //     />
    //   )

    //   }

    //   {origin?.location && (
    //     <Marker
    //       style={tw`bg-blue-400`}
    //       coordinate={{
    //         latitude: origin.location.lat,
    //         longitude: origin.location.lng,
    //       }}
    //       title='Origin'
    //       description={origin.description}
    //       identifier='origin'
    //     />
    //   )
    //   }
    //   {destination?.location && (
    //     <Marker
    //       style={tw`bg-blue-400`}
    //       coordinate={{
    //         latitude: destination.location.lat,
    //         longitude: destination.location.lng,
    //       }}
    //       title='Destination'
    //       description={origin.description}
    //       identifier='destination'
    //     />
    //   )
    //   }
    // </MapView>
    <>
    </>
  )
}

export default Map

const styles = StyleSheet.create({})
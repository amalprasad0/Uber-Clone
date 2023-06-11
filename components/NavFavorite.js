import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import tw from 'twrnc'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const NavFavorite = () => {
    const navigation = useNavigation()
    const data = [
        {
            id: '123',
            icon: 'home',
            location: 'Home',
            destination: 'Chittarikkal, Kerala, India'
        },
        {
            id: '456',
            icon: 'briefcase',
            location: 'Work',
            destination: 'Calicut, Kerala, India'
        }
    ]
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            itemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
            )}

            renderItem={({ item: { location, destination, icon } }) => (
                <TouchableOpacity
                    style={tw`flex-row items-center p-5`}
                    onPress={() => navigation.navigate("NavigateCard")}
                >
                    <Icon
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={icon}
                        type="ionicon"
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-500`}>{destination}</Text>
                    </View>
                </TouchableOpacity>

            )}

        />

    )
}

export default NavFavorite

const styles = StyleSheet.create({})
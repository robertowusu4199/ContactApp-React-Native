import React from "react";
import { View, StyleSheet, FlatList} from "react-native";
import Contact from "../components/Contact";

const ContactList = () => {
    const contacts = [
        {
			name: "Permish Lovec",
			number: '+12487729378',
			image: require('../../assets/images/guy12.jpg')
		},

        {
			name: "Morgan Asare",
			number: '+48219083695',
			image: require('../../assets/images/guy1.jpg')
		},

        {
			name: "Loganh Bassy",
			number: '+23578523159',
			image: require('../../assets/images/guy.jpg')
		},

        {
			name: "Franky Coppe",
			number: '+51478963214',
			image: require('../../assets/images/guy7.jpg')
		},
		
		{
			name: "Esther Oteng",
			number: "+42415765000",
			image: require('../../assets/images/guy8.jpg')
		},

        {
			name: "Narnah Koffi",
			number: "+32415762345",
			image: require('../../assets/images/guy6.jpg')
		},

		{
			name: "Blacka Robby",
			number: "+01236552143",
			image: require('../../assets/images/guy5.jpg')
		},

		{
			name: "Juliet Looks",
			number: "+22357877785",
			image: require('../../assets/images/guy9.jpg')
		},

		{
			name: "Portia Nashy",
			number: "+47835964233",
			image: require('../../assets/images/guy11.jpg')
		},

    ]

    return(
        <View>
			<FlatList
				data={contacts}
				renderItem={({ item }) => {
					return (
						<Contact
                        name={item.name}
                        number={item.number}
                        image={item.image}
                        />
					);
				}}
				keyExtractor={(item) => item.number}
			/>
		</View>
    )
}

export default  ContactList;
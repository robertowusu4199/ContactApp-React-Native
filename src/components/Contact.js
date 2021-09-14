import React from "react";
import {ScrollView, View, Text, Image, StyleSheet} from "react-native";
import {MaterialIcons, MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons";

const Contact = ({name, number, image}) => {
    return(
        <ScrollView contentContainerStyle= {styles.container}>
            <View style={styles.contact}>
                <View>
                    <Image style={styles.image} source={image} />
                </View>

                <View>
                    <Text style={styles.textname}>{name}</Text>
                    <Text style={styles.textnumber}>{number}</Text>
                </View>

                <View>
                    <View style={styles.VectorIcon}>
                        <MaterialIcons 
                        name="phone" 
                        size={30}
                        color="#3bacfd" />
                    </View>

                </View>

                <View>

                    <View style={styles.VectorIcon}>
                        <MaterialCommunityIcons 
                        name="message-processing"
                        size={30}
                        color="#3bacfd" />
                    </View>
                </View>

                <View>
                    <View style={styles.VectorIcon}>
                        <SimpleLineIcons 
                        name="options-vertical"
                        size={30}
                        color="grey"/>
                    </View>

                </View>
                
            </View>
        </ScrollView>
    )
}

export default Contact;

const styles = StyleSheet.create({

    container: {
        flex:1,
		marginTop: 40, 
        alignItems: "center",
        justifyContent: "center",
    },
    
    image:{
        flex:0.2,
        width:65,
        height: 65,
        borderRadius:50,
    },
    
    contact:{
        flex:1,
        flexDirection: "row",   
    },

    textname:{
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 13,
        marginLeft: 20,
    },

    textnumber:{
        marginLeft: 20,
    },

    VectorIcon:{
        alignItems: "center",
        flexDirection: "row",
        marginTop: 22,
        marginLeft: 18,

    },

})



{/*why this error ScrollView child layout (["alignItems","justifyContent"]) 
must be applied through the contentContainerStyle prop.*/}
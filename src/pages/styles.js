import {StyleSheet} from "react-native";

export const homeStyles = StyleSheet.create({
    button:{
        marginLeft:10,
        marginBottom:5,
        borderBottomWidth:1,
        borderBottomColor:"gray",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    text:{
        paddingTop:10,
        paddingBottom:10,
        fontSize:18,
        
    }
})

export const pharmancyStyles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:"#e0e0e0",
    },
    title:{
        marginBottom:5,
        fontSize:20,
        fontWeight:"bold"
    },
    subContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    iconStyle:{
        marginRight:5,
        width:20
    }
})
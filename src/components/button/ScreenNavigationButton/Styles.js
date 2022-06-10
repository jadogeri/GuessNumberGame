import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        backgroundColor:'green',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width:200,
        borderRadius:50,
        borderWidth:2,
        borderColor: 'silver',
        height:100,
        margin:20


    },
    buttonStyle:{
        backgroundColor:'blue'
    },
    textStyle:{
        color:'silver',
        textAlign:'center',
        textShadowColor:'gray',
        fontSize:30,
        fontWeight:'bold',
        fontStyle:'italic'
        

    }
});

export default styles;
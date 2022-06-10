import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width:120,
        height:100,
        margin:20,
        flexDirection: 'row',
        

    },
    questionMark: {
        fontSize: 200,
        fontWeight: "bold",
        textAlign: 'center',
        textShadowColor: 'green',
        textShadowRadius: 20


    },
    gameText: {
        fontSize: 80,
        fontStyle: "italic",
        fontWeight: "bold",
        textAlign: 'center',
        textShadowColor: 'green',
        textShadowRadius: 20

    },
    imageStyle:{
        backgroundColor:'white',
        alignSelf: 'center',       
        height:70,
        width:100,
        marginRight:30
    },
    pressedImageStyle: {
        height:50,
        width:50,
        marginLeft:30
    }

});

export default styles;
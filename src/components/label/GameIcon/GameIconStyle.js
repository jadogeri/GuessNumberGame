import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    IconLarge: {
        justifyContent: 'center',

    },
    container: {

        backgroundColor: 'teal',
        borderWidth: 3,
        height: 150,
        width: 350,
        borderRadius: 75,
        alignItems: 'center',
        margin:20,
    

    },
    questionMark: {
        alignSelf: 'center',
        fontSize:70,
        fontWeight: 'bold',
        color:'blue'
        

    },
    gameText: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize:  35,         
        color:'skyblue',
        padding:5,
        marginTop:10
    }

});

export default styles;
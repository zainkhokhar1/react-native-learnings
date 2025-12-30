import { StyleSheet } from "react-native";

const stylesTwo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#37353E',
        paddingInline: 20,
        color: '#D3DAD9'
    },
    home: {
        color: 'white',
        backgroundColor: 'purple'
    },
    backgroundPurple: {
        backgroundColor: 'purple'
    },
    btnText: {
        color: "white",
        fontSize: 20,
        textAlign: 'center',
        marginBlock: 10,
        backgroundColor: "green",
        paddingBlock: 14,
        width: "80%", marginInline: "auto"
    },
    smWhiteText: {
        fontSize: 15,
        color: 'white',
        fontWeight: '600',
        lineHeight: 18
    },
    movieContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10,
        marginBottom: 25,
    },
    movieCard: {
        marginBottom: 15,
        backgroundColor: '#2A2831',
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: 'row'
    },
    cardImage: {
        width: 125,
        height: 180,
        resizeMode: 'cover'
    },
    movieCardMainHeading:
    {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8
    },
    directorText:
    {
        color: "#ccc",
        fontSize: 14,
        marginBottom: 5
    },
    yearText: {
        color: "#ccc",
        fontSize: 14,
        marginBottom: 5
    },
    ratingContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
    rating: {
        color: "#FFD700",
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 5
    },
    genre: {
        color: "#888",
        fontSize: 12,
        fontStyle: 'italic',
        marginTop:'auto'
    },
    inputStyle : {
        // height:14,
        // width:'80%',
        // borderColor:'white'
    }

})

export default stylesTwo;
import { FlatList, Image, Text, View } from "react-native";
import stylesTwo from "../../Styles/Day2";
import SingleMovieCard from "../components/movie/SingleMovieCard";

// Import with try-catch fallback
let MoviesData;
try {
    MoviesData = require("../../../MoviesData.json");
} catch (error) {
    console.error("Error loading MoviesData.json:", error);
    MoviesData = { movies: [] };
}

export default function MovieListComponent(){
    // Get movies array with fallback
    const movies = MoviesData?.movies || [];

    console.log("Movies data:", movies.length, "movies loaded");

    return (
        <FlatList
            data={movies}
            ListHeaderComponent={()=> <Text style={{ fontSize:26, fontWeight:'600', color:'white', marginBottom:12, textAlign: 'center' }}>Movie Page</Text>}

            ListFooterComponent={()=> <Text style={{ fontSize:16, fontWeight:'300', color:'white', marginBottom:12, textAlign: 'center' }}>No More Movies...</Text>}

            ListEmptyComponent={()=> <Text style={{ color: 'white', textAlign: 'center', padding: 20 }}>No Data Found!</Text>}
            keyExtractor={(item) => item.id.toString()}
            initialNumToRender={10}
            windowSize={10}
            style={stylesTwo.movieContainer}
            renderItem={({item}) => {
                return <SingleMovieCard singleMovie={item} />;
            }}
        />
    );
}

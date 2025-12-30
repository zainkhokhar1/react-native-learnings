import { Image, Text, View } from "react-native";
import stylesTwo from "../../../Styles/Day2";


export default function SingleMovieCard({ singleMovie }){
    return (
        <View style={stylesTwo.movieCard}>
            <Image
                source={{ uri: singleMovie.img }}
                style={stylesTwo.cardImage}
            />
            <View style={{ flex: 1, padding: 15 }}>
                <Text style={stylesTwo.movieCardMainHeading}>
                    {singleMovie.title}
                </Text>

                <Text style={stylesTwo.directorText}>
                    Director: {singleMovie.director}
                </Text>

                <Text style={stylesTwo.yearText}>
                    Year: {singleMovie.year}
                </Text>

                <View style={stylesTwo.ratingContainer}>
                    <Text style={stylesTwo.rating}>
                        ★ {singleMovie.rating}
                    </Text>
                    <Text style={{
                        color: "#999",
                        fontSize: 12
                    }}>
                        / 10
                    </Text>
                </View>

                <Text style={stylesTwo.genre}>
                    {singleMovie.genre}
                </Text>
            </View>
        </View>
    );
}
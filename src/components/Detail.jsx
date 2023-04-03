import React, { useState, useEffect } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import getManga from '../../store/Manga/actions'
const {get_manga} = getManga

export default function Detail(props) {
    const id = props._id

    const [pageNumber, setPageNumber] = useState(1);

    const dispatch = useDispatch();
    const [MANGA, setManga] = useState(null);

    useEffect(() => {
        dispatch(get_manga({ inputId: id, inputPage: pageNumber }))
            .then((response) => {
                setManga(response.payload.manga);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id, pageNumber]);

    let titleManga = useSelector((store) => store.manga.manga.title);
    let descriptionManga = useSelector(
        (store) => store.manga.manga.decription
    );
    let imageManga = useSelector(
        (store) => store.manga.manga.cover_photo
    );


    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>{titleManga}</Text>
                <Image style={styles.img} source={{ uri: imageManga }}/>
                <Text style={styles.description}>{descriptionManga}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }, 
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center'
    },
    description: {
        fontSize: 20,
        padding: 30,
        textAlign: 'justify'
    },
    img: {
        width: 300,
        height: 450,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        //marginBottom: 25,
    },
})
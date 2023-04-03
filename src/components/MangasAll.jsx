import React,{useState,useEffect} from 'react'
import { Image, Text, View, StyleSheet, ImageBackground} from "react-native";
import MangaCard from "./MangaCard";
import PageButtonsPrevNext from './PageButtonsPrevNext';
import MangaChecks from './MangasChecks';
import { useSelector,useDispatch } from 'react-redux'
import mangasActions from '../../store/Mangas/actions'
import mangasBack from '../images/mangas_background.png'
import logo from '../images/Logo.png'

const {read_mangas} = mangasActions

export default function MangasAll() {
    const [reload,setReload] = useState(false)
    
    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState(1);

    const increasePageNumber = () => {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
    };

    const decreasePageNumber = () => {
        setPageNumber(prevPageNumber => prevPageNumber - 1);
    };

    let mangas = useSelector(store => store.mangas.mangas)
    console.log(mangas)
    let defaultText = useSelector(store => store.text.text)
    let defaultChecks = useSelector(store=>store.checks.checks)

    useEffect(() => {
        dispatch(
            read_mangas({ inputText: defaultText, inputCheck: defaultChecks, inputPage: pageNumber })
            );
        }, [!reload, defaultChecks, pageNumber, dispatch]);

    return (
        <View  style={styles.container}>
            <ImageBackground source={mangasBack} resizeMode="cover" style={styles.image1}>
                <View style={styles.containerLogo}>
                    <Image source={logo} style={styles.logo}/>
                </View>
                <View style={styles.containerTexto}>
                    <Text style={styles.title}>Mangas</Text>
                </View>
            </ImageBackground>
            <View style={styles.MangaChecksContainer}>
                <MangaChecks />
            </View>
            <View style={styles.cardsContainer}>
                {mangas.length ? (
                mangas.map((manga) => <MangaCard key={manga._id} title_={manga.title} category_={manga.category_id} photo={manga.cover_photo} description={manga.description} _id={manga._id}/>)
                ) : (
                <Text style={{ textAlign: 'center', marginTop: 20 }}>Not Found</Text>
                )}
            </View>
            <PageButtonsPrevNext pageNumber={pageNumber} increasePageNumber={increasePageNumber} decreasePageNumber={decreasePageNumber} mangas={mangas} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerLogo: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingEnd: 15
    },
    logo: {
        width: 125,
        height: 125,
    },
    containerTexto: {
        flex: 0.6,
        height: 705,
        width: 500,
        justifyContent: 'center',
        alignItems: 'center',
        top: -60
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 55,
        fontWeight: '900'
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 40,
        fontWeight: '200'
    },
    image1: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    btnCont:{
        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 363,
        height: 69,
        backgroundColor: '#F9A8D4',
        borderRadius: 5000,
    },
    btnTexto: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 500,
    },
    cardsContainer: {
        alignItems: 'center',
    },
    MangaChecksContainer: {
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '85%',
        height: 100,
        backgroundColor: 'orange',
        borderRadius: 15,
    }
})
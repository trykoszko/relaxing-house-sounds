import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {SoundPlayer} from "@/components/SoundPlayer";
import {SoundMapping} from "@/types/SoundMapping.type";
import {useEffect, useState} from "react";
import {Sound} from "expo-av/build/Audio/Sound";

const paths: SoundMapping[] = [
    {
        title: "Yellow",
        image: require('../assets/images/vacuums/yellow.jpg'),
        sound: require('../sounds/yellow.mp3')
    },
    {
        title: "Black",
        image: require('../assets/images/vacuums/black.jpg'),
        sound: require('../sounds/black.mp3')
    },
    {
        title: "2 Vacuums",
        image: require('../assets/images/vacuums/2.jpg'),
        sound: require('../sounds/2_vacuums.mp3')
    },
    {
        title: "Blue",
        image: require('../assets/images/vacuums/blue.jpg'),
        sound: require('../sounds/blue.mp3')
    },
    {
        title: "Red",
        image: require('../assets/images/vacuums/red.jpg'),
        sound: require('../sounds/red.mp3')
    },
    {
        title: "Vertical",
        image: require('../assets/images/vacuums/hang.jpg'),
        sound: require('../sounds/vertical_vacuum.mp3')
    }
]

export default function Index() {
    const [currentPlaying, setCurrentPlaying] = useState<string>();
    const [sound, setSound] = useState<Sound>();

    useEffect(() => {
        sound?.stopAsync()
    }, [currentPlaying])

    return (
        <SafeAreaView>
            <View style={styles.wrapper}>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Relaxing House Sounds</Text>
                    <Text>Enjoy blabla</Text>
                </View>
                {paths && (
                    <>
                        {paths.map((mapping: SoundMapping, index) => (
                            <SoundPlayer
                                key={`sound_${index}`}
                                mapping={mapping}
                                currentPlaying={currentPlaying}
                                setCurrentPlaying={setCurrentPlaying}
                                sound={sound}
                                setSound={setSound}
                            />
                        ))}
                    </>
                )}
            </View>
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 16
    },
    textWrapper: {
        marginBottom: 24,
        marginTop: 12,
        paddingLeft: 12,
        paddingRight: 12
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8
    }
})

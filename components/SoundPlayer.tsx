import {Text, View, StyleSheet} from "react-native";
import {SoundMapping} from "@/types/SoundMapping.type";
import {Audio} from "expo-av";
import {Image} from 'expo-image';
import {AntDesign} from "@expo/vector-icons";

type Props = {
    mapping: SoundMapping;
    currentPlaying: any
    setCurrentPlaying: any
}

export const SoundPlayer = ({
                                mapping,
                                currentPlaying,
                                setCurrentPlaying,
                                sound,
                                setSound
                            }: Props) => {
    const playSound = async (path: any) => {
        const {sound} = await Audio.Sound.createAsync(path);
        setSound(sound);
        await sound.setIsLoopingAsync(true);
        await sound.playAsync();
    }

    return (
        <View style={styles.wrapper}>
            <Image source={mapping.image} alt={mapping.title} style={styles.image} contentFit={"contain"}/>
            <Text style={styles.title}>
                {mapping.title}
            </Text>
            {currentPlaying === mapping.title ? (
                <AntDesign name="pausecircleo" size={32} color="black" onPress={() => {
                    setCurrentPlaying(null)
                    sound?.stopAsync()
                }}/>
            ) : (
                <AntDesign name="play" size={32} color="black" onPress={() => {
                    playSound(mapping.sound)
                    setCurrentPlaying(mapping.title)
                }}/>
            )}
        </View>
    )
}

export const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        marginBottom: 8
    },
    image: {
        width: 64,
        height: 64,
        marginRight: 16,
        resizeMode: 'contain'
    },
    title: {
        marginRight: "auto"
    }
})

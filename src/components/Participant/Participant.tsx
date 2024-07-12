import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";

type ParticipantProps =  {
    name: string;
    onRemove: () =>  void;
}

export const Participant = ({name , onRemove}: ParticipantProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>

            <TouchableOpacity
                style={styles.button}
                >
                <Text
                    style={styles.buttonText}
                    onPress={onRemove}
                >
                    -
                </Text>
            </TouchableOpacity>
        </View>
    );
};
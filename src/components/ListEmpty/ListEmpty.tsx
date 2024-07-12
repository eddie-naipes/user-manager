import { Text} from "react-native";
import {styles} from "./styles";

export const ListEmpty = () => {
    return (
        <Text style={styles.listEmpty}>
            Nenhum participante cadastrado
        </Text>
    );
};
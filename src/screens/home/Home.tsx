import {Alert, FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {styles} from './styles'
import {Participant} from "../../components/Participant/Participant";
import {ListEmpty} from "../../components/ListEmpty/ListEmpty";
import {useState} from "react";

export function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('')


    function clearParticipant() {
        setParticipantName('')
    }

    const handleParticipantAdd = () => {
        if (participants.includes(participantName)) {
            return Alert.alert("Participante já cadastrado", "Não é possível adicionar o mesmo participante duas vezes")
        }

        setParticipants(prevState => [...prevState, participantName])
        clearParticipant();
    }

    function removeParticipant(name: string) {
        setParticipants(prevState => prevState.filter(participant => participant !== name));
    }

    const handleParticipantRemove = (name: string) => {

        Alert.alert(
            "Remover participante",
            "Deseja remover o participante?",
            [
                {text: 'Não', style: 'cancel'},
                {text: 'Sim', onPress: () => removeParticipant(name)}
            ])
    }

    return (
        <View style={styles.container}>
            <Text key={1} style={styles.eventName}>Cadastro de user</Text>
            <Text key={2} style={styles.eventDate}>Dia 09/07/2024</Text>

            <View style={styles.form}>
                <TextInput
                    key={3}
                    style={styles.input}
                    placeholder={'Nome do user'}
                    placeholderTextColor={"#6B6B6B"}
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleParticipantAdd}>
                    <Text
                        style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <Participant
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={ListEmpty}
            />


        </View>
    );
}
import { useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    Modal,
    TextInput,
    Touchable,
} from "react-native";
import NoteList from "@/components/NoteList";
import AddNoteModal from "@/components/AddNoteModal";

const NoteScreen = () => {
    const [notes, setNotes] = useState([
        { id: 1, text: "Note One" },
        { id: 2, text: "Note Two" },
        { id: 3, text: "Note Three" },
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] = useState('');

    //Add new note
    const addNote = () => {
        if(newNote.trim() === '') return;

        setNotes((prevNotes) => [
            ...prevNotes,
            { id: Date.now().toString(), text: newNote } 
        ]);

        setNewNote('');
        setModalVisible(false);
    }

    return (
        <View style={styles.container}>
            <NoteList notes={notes} />

            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.addButtonText}>+ Add Note</Text>
            </TouchableOpacity>

            {/* Modal */}
            <AddNoteModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                newNote={newNote}
                setNewNote={setNewNote}
                addNote={addNote}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    noteItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#f5f5f5",
        padding: 15,
        borderRadius: 5,
        marginVertical: 5,
    },
    noteText: {
        fontSize: 18,
    },
    addButton: {
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: "#007bff",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
    },
    addButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        marginBottom: 15,
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cancelButton: {
        backgroundColor: "#ccc",
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 10,
        alignItems: "center",
    },
    cancelButtonText: {
        color: "#333",
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        flex: 1,
        alignItems: "center",
    },
    saveButtonText: {
        color: "#fff",
        fontSize: 16,
    },
});
export default NoteScreen;
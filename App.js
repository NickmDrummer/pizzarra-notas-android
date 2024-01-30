/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import image from './assets/pizzarra.png';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState([]);
  const [titleNote, setTitleNote] = useState('');
  const [bodyNote, setBodyNote] = useState('');

  const emptyInputsAlert = () =>
    Alert.alert(
      'Formulario Incompleto',
      'Por favor complete todos los campos de la nota',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    );

  const handleNote = () => {
    if (titleNote === '' || bodyNote === '') {
      emptyInputsAlert();
      return;
    }
    setNotes([...notes, {id: notes.length, title: titleNote, body: bodyNote}]);
    setTitleNote('');
    setBodyNote('');
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={[styles.modalText, styles.textBlack]}>
                Crear Nota
              </Text>
              <TextInput
                style={styles.textInput}
                placeholder="Escribe el titulo de la nota"
                defaultValue=""
                onChangeText={value => setTitleNote(value)}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Escribe la nota"
                defaultValue=""
                onChangeText={value => setBodyNote(value)}
                multiline={true}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textWhite}>Cerrar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonSave]}
                onPress={handleNote}>
                <Text style={styles.textWhite}>Guardar Nota</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </Modal>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 30,
              marginTop: 30,
              color: 'white',
              padding: 30,
            }}>
            Awesome Shit
          </Text>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textWhite}>Nueva Nota</Text>
          </Pressable>
          <ScrollView>
            <View style={styles.containerNotes}>
              <Text style={styles.title}>Notas</Text>
              {notes.map(n => {
                return (
                  <View key={n.id} style={styles.card}>
                    <Text style={styles.cardTitle}>{n.title}</Text>
                    <Text style={styles.cardText}>{n.body}</Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#ffffff80',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4,
    elevation: 5,
  },
  textInput: {
    width: 300,
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  button: {
    borderRadius: 20,
    margin: 10,
    width: 300,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: '#F1a',
  },
  buttonClose: {
    backgroundColor: '#ff0000',
    borderColor: 'white',
    borderWidth: 2,
  },
  buttonSave: {
    borderColor: 'white',
    backgroundColor: 'green',
    borderWidth: 2,
  },
  textBlack: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textWhite: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: 'center',
  },
  containerNotes: {
    marginTop: 20,
    marginBottom: 100,
  },
  card: {
    flex: 1,
    width: 300,
    marginBottom: 20,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 3,
    elevation: 5,
    padding: 10,
    borderRadius: 30,
  },
  cardTitle: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    color: 'black',
    fontSize: 17,
    textAlign: 'center',
  },
});

export default App;

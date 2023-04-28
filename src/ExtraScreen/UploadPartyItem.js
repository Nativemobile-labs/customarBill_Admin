import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Alert} from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import DocumentPicker from 'react-native-document-picker';

export default function UploadPartyItem() {
    const [singleFile, setSingleFile] = useState('');
    // select Excel files
    const upLoadExcelFile = async () => {
        try{
            const result = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.xls],
            });
            for (const res of result){
                console.log('File Name:'+ res.name);
                console.log('File Size:'+ res.size)
            }
            setSingleFile(result);
        }catch (e){
            if(DocumentPicker.isCancel(e)){
                Alert.alert('Canceled Doc Picker');
            }else {
                Alert.alert('Unknown Error:' + JSON.stringify(e));
                throw e;
            }
        }
    }   
    // item upload file
        const itemUploadFile = () => {
            Alert.alert('item upload file');
        };

        // party upload file
        const partyUploadFile = () => {
           Alert.alert('party upload file');
        };

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={styles.itemView}>
           <Text style={styles.textView}>Select Item File to Upload</Text>
           <TouchableOpacity style={styles.uploadArea} onPress={() => upLoadExcelFile()}>
           <Icon name="document-attach-outline" size={150} style={styles.iconView}/>
              <Text style={styles.uploadAreaText}>No File Uploaded</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.uploadButton} onPress={() => itemUploadFile()} disabled={true}>
               <Text style={styles.uploadText}>Upload</Text>
           </TouchableOpacity>  
      </View>

      <View style={styles.partyView}>
           <Text style={styles.textView}>Select Party File to Uploads</Text>
           <TouchableOpacity style={styles.uploadArea} onPress={() => upLoadExcelFile()}>
               <Icon name="document-attach-outline" size={150} style={styles.iconView} />
               <Text style={styles.uploadAreaText}>No File Uploaded</Text>   
           </TouchableOpacity>
           <TouchableOpacity style={styles.uploadButton} onPress={() => partyUploadFile()} disabled={true}>
               <Text style={styles.uploadText}>Upload</Text>
           </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,  
        backgroundColor: '#D9E4EC'
    },
    scrollView: {
        marginHorizontal: 20,
        height: '100%',
        paddingBottom: 10,
    },
    itemView: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '100%',
        marginTop: 10,
        borderRadius: 5,
        height: 600,
        justifyContent: 'flex-start',
    },
    partyView: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '100%',
        marginTop: 10,
        height: 600,
        borderRadius: 5,
        marginVertical: 20,
    },
    textView: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'silver',
        marginTop: 10,
        marginLeft: 15,
    },
    uploadArea: {
        backgroundColor: '#D9E4EC',
        marginTop: 10,
        alignSelf: 'center',
        height: '80%',
        width: '85%',
        borderRadius: 5,
    },
    uploadAreaText: {
        color: 'blue',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    uploadButton: {
        height: 40,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5,
        backgroundColor: '#008AD0',
        marginTop: 20,
    },
        uploadText: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
    },
    iconView: {
        alignSelf: 'center',
        marginVertical: 100,
    },
});
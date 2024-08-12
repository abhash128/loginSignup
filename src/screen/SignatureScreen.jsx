import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Button } from 'react-native';
import SignatureCapture from 'react-native-signature-capture';


const SignatureScreen = () => {
  const navigation = useNavigation();


  let signatureRef = React.createRef();

  const saveSign = () => {
    signatureRef.current.saveImage();
  };

  const resetSign = () => {
    signatureRef.current.resetImage();
  };

  const onSaveEvent = (result) => {
    console.log('Signature saved successfully');
    console.log(result);
  };

  const onDragEvent = () => {
    console.log('Signature is being drawn');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <SignatureCapture
        style={{ flex: 1 }}
        ref={signatureRef}
        onSaveEvent={onSaveEvent}
        onDragEvent={onDragEvent}
        saveImageFileInExtStorage={false}
        showNativeButtons={false}
        showTitleLabel={true}
        viewMode={"portrait"}
      />

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Button title="Save" onPress={saveSign} />
        <Button title="Reset" onPress={resetSign} />
      </View>
    </View>
  );
};

export default SignatureScreen;

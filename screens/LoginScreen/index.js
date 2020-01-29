import React from 'react';
import { View, Text, Button } from 'react-native';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('SelectStore')}
        />
      </View>
    );
  }
}

export default LoginScreen;

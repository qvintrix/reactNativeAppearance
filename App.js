import React from 'react';
import styled from 'styled-components/native';
import ThemeManager, {useTheme} from './src/themes';
import {Switch} from 'react-native';

const Container = styled.View`
  flex: 1;
  /* add this */
  background: ${props => props.theme.backgroundAlt};
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 24;
  /* add this */
  color: ${props => props.theme.text};
`;

function HomeScreen() {
  const theme = useTheme();
  return (
    <Container>
      <Title>Appearance app</Title>
      <Switch
        value={theme.mode === 'dark'}
        onValueChange={value => theme.setMode(value ? 'dark' : 'light')}
      />
    </Container>
  );
}

const App = () => {
  return (
    <ThemeManager>
      <HomeScreen />
    </ThemeManager>
  );
};

export default App;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

import Header1 from '../components/header1.js';
import Header2 from '../components/header2.js';
import Header3 from '../components/header3.js';
import MainText from '../components/main-text.js';

export default function LearnMore() {
  return (
    <SafeAreaView style={styles.container}>
      <Header2 header2Text={'DATA, SOFTWARE OR FULL-STACK SPECIALISATION'} />
      <MainText mainText={'Level up with our 14-week CFGdegree in either data, software or, new for 2022, full-stack. Our CFGdegree is open by application and interview to high potential women who want to pursue a career in data, software, or as a full-stack developer with our partner companies. '}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4effc',
    alignItems: 'center',
    justifyContent: 'center',
  }
});



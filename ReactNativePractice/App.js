import React from 'react';
import {Text, View} from 'react-native';
import ActivityIndicatorEg from './component/ActivityIndicatorEg';
import ButtonApp from './component/Button';

import PizzaTranslator from './component/HandlingTextInput';
import ImageBackGroundEg from './component/ImageBackGroundEg';
import ImageEg from './component/ImageEg';
import KeyboardAvoidingView from './component/KeyboardAvoidingView';
import FlatListSimple from './component/ListViews/FlatListSimple';

import UsingScrollView from './component/ScrollView';

const App = () => {
  return (
    <View>
      {/* <PizzaTranslator /> */}
      {/* <UsingScrollView /> */}
      {/* <FlatListSimple /> */}
      {/* <SectionListBasics /> */}
      {/* <ButtonApp /> */}
      {/* <ActivityIndicatorEg /> */}
      {/* <ImageEg /> */}
      {/* <ImageBackGroundEg /> */}
      <KeyboardAvoidingView />
    </View>
  );
};

// // export default App;
// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
// } from 'react-native';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// const Item = ({title}) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// const App = () => {
//   const renderItem = ({item}) => <Item title={item.title} />;

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

export default App;

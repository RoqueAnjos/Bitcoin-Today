import React from 'react';
import {StatusBar, StyleSheet, SafeAreaView, Platform } from 'react-native';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGrahic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';
import QuotationsItems from './src/components/QuotationsList/QuotationsItems';

function addZero(number){
  if(number<=9){
    return "0" + number;
  }else{
    return number;
  }
}

function url(qtdDays){

}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
      backgroundColor="#f50d41"
      barStyle="dark-content"/>

      <CurrentPrice/>
      <HistoryGrahic/>
      <QuotationsList/>
      <QuotationsItems/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0
  },
});

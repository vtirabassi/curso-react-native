import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Simples from './components/simples'
import ParImpar from './components/parImpar'
import Padrao from './estilo/padrao'
import { Inverter, MegaSena } from './components/multi'




export default class App extends Component {
  render() {
    return (
      <View style={styles.contatiner}>
        <Text style={styles.f20}>
          <Simples texto='flexivel'/>
        </Text>
        
        <ParImpar parOuImpar={20} />

        <Inverter texto='vinicius' />
        <MegaSena numeros={6}/>

      </View>
        
    )
  }
} 

const styles = StyleSheet.create({
  contatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
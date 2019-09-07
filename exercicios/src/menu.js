import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './components/simples'
import ParImpar from './components/parImpar' 
import { Inverter, MegaSena } from './components/multi'
import Contador from './components/contador'

export default createDrawerNavigator({
    Contador: {
        screen: () => <Contador numeroInicial={10}/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8}/>,
        navigationOptions: { title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto='vinicius'/>,
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: 'Par ou Impar' }
    },
    Simples: {
        screen: () => <Simples texto='Flexivel'/>
    }
}, { drawerWidth: 300 })
import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/padrao'

function parOuImpar(num) {
//     if (num % 2 == 0) {
//       return <Text style={Padrao.ex}>PAR</Text>
//     } else {
//       return <Text style={Padrao.ex}>Impar</Text>
//     }
    const v = num % 2 == 0 ? 'par' : 'impar'
    return <Text style={Padrao.ex}>{v}</Text>
}


export default props =>
    <View>
        {
            props.numero % 2 == 0 
            ? <Text style={Padrao.ex}>O numero é par</Text>
            : <Text style={Padrao.ex}>O numero é impar</Text>
        }
        {
            parOuImpar(props.numero)
        }
          
    </View>
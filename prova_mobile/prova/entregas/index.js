import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import css from './style.js'

export default function Entregas({navigation, route}){
    const {id} = route.params;
    const [endereco, setEndereco] = useState([]);
    const url = 'http://10.87.202.131:3000/entregas/entregadores/' + id;

    useEffect(() => {
        fetch(url)
        .then(resp => { return resp.json() })
        .then(data => {setEndereco(data)});
      }, []);

    return (
        <View style={css.tela}>
            {
                endereco.map((item, index) => {
                    return(
                        <TouchableOpacity key={index} style={css.card} onPress={() => navigation.navigate('Detalhes', item)}>
                            <Text style={{fontWeight: 'bold'}}>{item.endereco}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
}
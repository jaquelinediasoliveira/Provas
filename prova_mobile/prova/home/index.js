import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import css from './style.js'

export default function Home({navigation}){
    const [nomes, setNomes] = useState([]);

    useEffect(() => {
        let url = "http://10.87.202.131:3000/entregas/entregadores";
    
        fetch(url)
        .then(resp => { return resp.json() })
        .then(data => {setNomes(data)});
      }, []);

    return (
        <View style={css.tela}>
            <Text style={css.title}>Quem é você?</Text>
            {
                nomes.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={css.card} onPress={() => navigation.navigate('Entregas', {id: item.id_entregador})}>
                            <Text style={{fontWeight: 'bold'}}>{item.nome}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
}
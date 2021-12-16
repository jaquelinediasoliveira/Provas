import React, {useEffect} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import css from './style.js'

export default function Detalhes({navigation, route}){
    const {id, cliente, produto, valor} = route.params;

    useEffect(() => {
        let url = 'http://10.87.202.131:3000/entregas/entregues' + id
        fetch(url, {
            method: "PUT"
        })
        .then(resp => { return resp.status })
        .then(data => { 
            if(data == 200){
                navigation.navigate("Entregas");
            } 
        });
    })

    return (
        <View style={css.tela}>
            <View style={{marginTop: 30}}>
                <Text style={{fontSize: 18, marginBottom: 10}}>Nome: {cliente}</Text>
                <Text style={{fontSize: 18, marginBottom: 10}}>Produto: {produto}</Text>
                <Text style={{fontSize: 18}}>Valor: R${valor}</Text>
                <TouchableOpacity style={css.botao} onPress={() => {}}>
                    <Text style={{fontWeight: 'bold'}}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
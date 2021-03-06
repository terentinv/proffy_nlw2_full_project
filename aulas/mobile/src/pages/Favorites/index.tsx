import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import {useFocusEffect} from '@react-navigation/native'

import TeacherItem, { Teacher } from '../../Componentes/TeacherItem';
import PageHeader from '../../Componentes/PageHeader';
import styles from '../Favorites/styles';
import AsyncStorage from '@react-native-community/async-storage'



function Favorites() {
    const [favorites, setFavorites] = useState([]);
    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);

                setFavorites(favoritedTeachers);
            }
        });
    }
    useFocusEffect(

        React.useCallback(()=>{
            loadFavorites();
        },[])
       
      )
    return (

        <View style={styles.container}>
            <PageHeader title=" Meus Proffys favoritos" />


            <ScrollView style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}>
                {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem key={teacher.id}
                            teacher={teacher}
                            favorited
                        />
                    )
                })}

            </ScrollView>


        </View>)
}

export default Favorites;
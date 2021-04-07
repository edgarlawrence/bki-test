import React, { useState, useEffect } from 'react'
import Add from './Add'
import { View, Text } from 'react-native'
import Axios from 'axios'

const ViewFiles = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        Axios.get('http://10.0.2.2:3000/users')
            .then(res => {
                console.log('res', res)
                setUsers(res.data);
            })
    }, []);

    return (
        <View>
            {users.map(user => {
                return (
                    <Text key={user.id}> {"\n"}
                       Nama: {user.name} {"\n"}
                       Umur: {user.umur} {"\n"}
                       No Telp: {user.telp} {"\n"}
                       Alamat: {user.alamat}
                    </Text>
                )
            })}
        </View>
    )
}

export default ViewFiles

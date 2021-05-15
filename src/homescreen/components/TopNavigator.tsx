import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { Icon } from 'react-native-elements';

const TopNavigator = (props) => {
    const [newUser, setNewUser] = useState(false)
    return (
        <View style={styles.topNavigator}>
            <View style={{ flex: 1, height: 100, width: 50, alignItems: 'flex-start' }}>
                <Icon
                    type='ionicon'
                    name='search-outline'
                    color='white'
                    size={25} />
            </View>
            <View style={{ flex: 1, height: 100, width: 50, alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Puppies</Text>
            </View>
            <View style={{ flex: 1, height: 100, width: 50, alignItems: 'flex-end' }}>
                <Icon
                    type='ionicon'
                    name='search-outline'
                    size={25}
                    color='white'
                />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        height: 100,
    },
    topNavigator: {
        flexDirection: 'row',
        flex: 1, 
        padding:10
    }
});

export default TopNavigator;

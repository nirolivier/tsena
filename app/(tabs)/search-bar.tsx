import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        // Add your search logic here
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search..."
                value={searchQuery}
                onChangeText={handleSearch}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
});

export default SearchBar;
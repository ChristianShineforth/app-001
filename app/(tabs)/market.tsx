import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, FlatList } from 'react-native';

// Sample tweet data
const tweets = [
  {
    id: '1',
    name: 'Elon Musk',
    username: 'elonmusk',
    tweet: 'Just launched a new rocket!',
    profilePic: 'https://images.unsplash.com/photo-1585011664466-b7bbe92f34ef?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with actual image URL
  },
  {
    id: '2',
    name: 'Jack Dorsey',
    username: 'jack',
    tweet: 'Working on some cool new projects.',
    profilePic: 'https://plus.unsplash.com/premium_photo-1739580360043-f2c498c1d861?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amFjayUyMGRvcnNleXxlbnwwfHwwfHx8MA%3D%3D', // Replace with actual image URL
  },
  {
    id: '3',
    name: 'Jane Doe',
    username: 'janedoe',
    tweet: 'Loving the React Native community!',
    profilePic: 'https://images.unsplash.com/photo-1670057037226-b3d65909424f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlYWN0JTIwbmF0aXZlfGVufDB8fDB8fHww', // Replace with actual image URL
  },
];

// Tweet component
const Tweet = ({ tweet } : { tweet: any }) => (
  <View style={styles.tweetContainer}>
    <Image source={{ uri: tweet.profilePic }} style={styles.profilePic} />
    <View style={styles.tweetContent}>
      <View style={styles.tweetHeader}>
        <Text style={styles.name}>{tweet.name}</Text>
        <Text style={styles.username}> @{tweet.username}</Text>
      </View>
      <Text style={styles.tweetText}>{tweet.tweet}</Text>
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
      </View>
      {/* Tweets List */}
      <FlatList
        data={tweets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Tweet tweet={item} />}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: '#1DA1F2', // Twitter blue
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContent: {
    padding: 10,
  },
  tweetContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  tweetContent: {
    flex: 1,
  },
  tweetHeader: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  username: {
    color: 'grey',
    fontSize: 16,
  },
  tweetText: {
    fontSize: 16,
  },
});

export default App;

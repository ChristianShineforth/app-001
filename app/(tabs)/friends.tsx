import { 
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
 } from 'react-native';

const videoData = [
  {
    id: '1',
    title: 'React Native Tutorial for Beginners',
    channel: 'CodeWithMe',
    thumbnail: 'https://plus.unsplash.com/premium_photo-1683842640591-210c38313e2f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    title: 'Build a Twitter Clone',
    channel: 'DevSimplified',
    thumbnail: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW91dHViZSUyMGxvZ298ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '3',
    title: 'Expo vs React Native CLI',
    channel: 'TechTalks',
    thumbnail: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW91dHViZSUyMGxvZ298ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '4',
    title: 'Expo vs React Native CLI',
    channel: 'TechTalks',
    thumbnail: 'https://images.unsplash.com/photo-1633267379178-b0c2078e321e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhwb3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '5',
    title: 'Expo vs React Native CLI',
    channel: 'TechTalks',
    thumbnail: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW91dHViZSUyMGxvZ298ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '6',
    title: 'Expo vs React Native CLI',
    channel: 'TechTalks',
    thumbnail: 'https://images.unsplash.com/photo-1633267379178-b0c2078e321e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhwb3xlbnwwfHwwfHx8MA%3D%3D',
  },
  // Add more fake videos here...
];

export default function FriendsTab() {
  const renderItem = ({ item } : {item: any}) => (
    <View style={styles.videoCard}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.videoInfo}>
        <View style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.videoTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.channelName}>{item.channel}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.logo}>YouTube</Text>
        <Image source={{uri: "https://images.unsplash.com/photo-1649180543887-158357417159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHlvdXR1YmUlMjBsb2dvfGVufDB8fDB8fHww"}}
          style={styles.logoImage}
        />
      </View>

      <FlatList
        style={[styles.flatlist]}
        data={videoData}
        renderItem={renderItem}
        keyExtractor={(item: { id: any; }) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flatlist: {
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 56,
    backgroundColor: '#fff',
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff0000',
  },
  logoImage: {
    width: 35,
    height: 35,
  },
  videoCard: {
    padding: 15,
    marginBottom: 16,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    backgroundColor: '#ddd',
  },
  videoInfo: {
    flexDirection: 'row',
    padding: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    marginRight: 12,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  channelName: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

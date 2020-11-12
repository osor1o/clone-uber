import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 300,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    shadowColor: 'black',
    shadowOffset: {x: 0, y: 0},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
    borderColor: '#DDD',
    borderWidth: 1,
    alignItems: 'center',
    padding: 20,
  },
  typeTitle: {
    fontSize: 24,
    color: '#222',
  },
  typeDescription: {
    fontSize: 16,
    color: '#666',
  },
  typeImage: {
    height: 80,
    marginVertical: 10,
  },
  requestButton: {
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    alignSelf: 'stretch',
    marginVertical: 10,
  },
  requestButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  locationBox: {
    backgroundColor: 'white',
    elevation: 1,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {x: 0, y: 0},
    borderColor: '#DDD',
    borderRadius: 3,
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        marginTop: 10,
      },
      android: {
        marginTop: 16,
        marginLeft: 5,
      },
    }),
  },
  locationText: {
    marginVertical: 8,
    marginHorizontal: 10,
    color: '#333',
  },
  locationTimeBox: {
    backgroundColor: '#222',
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  locationTimeText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  locationTimeTextSmall: {
    color: '#fff',
    fontSize: 8,
    textAlign: 'center',
  },
});

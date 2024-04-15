import TrackPlayer from 'react-native-track-player';

module.exports = async function () {
    try {
      TrackPlayer.addEventListener('remote-play', () => {
        TrackPlayer.play()
      })
    } catch (error) { }
  
  };
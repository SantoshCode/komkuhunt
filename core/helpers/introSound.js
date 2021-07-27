import Sound from 'react-native-sound'

Sound.setCategory('Playback')
export const intro = new Sound('intro.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error)
    return
  }
  // loaded successfully
  console.log(
    'duration in seconds: ' +
      intro.getDuration() +
      'number of channels: ' +
      intro.getNumberOfChannels()
  )

  // Play the sound with an onEnd callback
  intro.play((success) => {
    if (success) {
      console.log('successfully finished playing')
    } else {
      console.log('playback failed due to audio decoding errors')
    }
  })
})

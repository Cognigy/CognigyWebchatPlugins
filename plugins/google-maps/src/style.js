const K_WIDTH = 40;
const K_HEIGHT = 40;

const style = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage: "url('https://miribucket.s3.eu-central-1.amazonaws.com/678111-map-marker-512.png')",
  textAlign: 'center',
  color: 'black',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};

export {style};
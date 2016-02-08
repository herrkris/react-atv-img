const styles = {
  root: {
    transformStyle: 'preserve-3d',
    WebkitTapHighlightColor: 'rgba(#000, 0)',
  },

  staticFallback: {
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: '0 2px 8px rgba(14, 21, 47, 0.25)',
  },

  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'all 0.2s ease-out',
  },

  shadowOnHover: {
    top: '5%',
    left: '5%',
    width: '90%',
    height: '90%',
    boxShadow: '0 45px 100px rgba(14, 21, 47, 0.4), 0 16px 40px rgba(14, 21, 47, 0.4)',
  },

  renderedLayer: {
    position: 'absolute',
    width: '104%',
    height: '104%',
    top: '-2%',
    left: '-2%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'transparent',
    backgroundSize: 'cover',
    transition: 'all 0.1s ease-out',
  },

  shadow: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    transition: 'all 0.2s ease-out',
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.35)',
  },

  shine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(255, 255, 255, .25) 0%, rgba(255, 255, 255, 0) 60%)',
  },
};

export default styles;

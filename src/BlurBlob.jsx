import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size, color = 'purple' }) => {
  const { top, left } = position;
  const { width, height } = size;

  const colorMap = {
    purple: 'rgba(168, 85, 247, 0.18)',
    violet: 'rgba(139, 92, 246, 0.18)',
    teal:   'rgba(46, 196, 182, 0.12)',
    gold:   'rgba(240, 201, 122, 0.10)',
  };

  return (
    <div
      style={{
        position:      'absolute',
        top,
        left,
        width,
        height,
        transform:     'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex:        0,
      }}
    >
      <div
        style={{
          width:        '100%',
          height:       '100%',
          background:   colorMap[color] || colorMap.purple,
          borderRadius: '50%',
          filter:       'blur(80px)',
          animation:    'blobFloat 7s ease-in-out infinite',
        }}
      />
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top:  PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width:  PropTypes.string,
    height: PropTypes.string,
  }),
  color: PropTypes.oneOf(['purple', 'violet', 'teal', 'gold']),
};

export default BlurBlob;

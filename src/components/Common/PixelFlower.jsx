import React from 'react';

/**
 * PixelFlower - Retro pixel-art flower decorative accent in medium visible size.
 * Built with crispEdges SVG to render perfect nostalgic pixels.
 * Colors: dusty pink (#F4BFD0), lavender (#DCCEFF), sage mint (#C5DFCE),
 * powder blue (#B8CAE8), soft peach (#E9B59D).
 */
export default function PixelFlower({
  variant = 'pink',
  size = 22,
  centerColor = '#FFFDF9',
  style = {},
  className = ''
}) {
  const colorMap = {
    pink: '#F4BFD0',
    lavender: '#DCCEFF',
    sage: '#C5DFCE',
    blue: '#B8CAE8',
    peach: '#E9B59D',
    charcoal: '#34333B'
  };

  const petalColor = colorMap[variant] || colorMap.pink;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        shapeRendering: 'crispEdges',
        flexShrink: 0,
        ...style
      }}
      className={`pixel-flower pixel-flower-${variant} ${className}`}
      aria-hidden="true"
    >
      {/* 4 Petals at top, bottom, left, right and soft diagonals */}
      <rect x="3" y="1" width="3" height="2" fill={petalColor} />
      <rect x="3" y="6" width="3" height="2" fill={petalColor} />
      <rect x="1" y="3" width="2" height="3" fill={petalColor} />
      <rect x="6" y="3" width="2" height="3" fill={petalColor} />
      {/* Corner softens */}
      <rect x="2" y="2" width="1" height="1" fill={petalColor} />
      <rect x="6" y="2" width="1" height="1" fill={petalColor} />
      <rect x="2" y="6" width="1" height="1" fill={petalColor} />
      <rect x="6" y="6" width="1" height="1" fill={petalColor} />
      {/* Flower Center */}
      <rect x="3" y="3" width="3" height="3" fill={centerColor} />
      <rect x="4" y="4" width="1" height="1" fill="#E9B59D" />
    </svg>
  );
}

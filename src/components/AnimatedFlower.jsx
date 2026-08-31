function Gerbera({ color }) {
  const outerPetals = Array.from({ length: 16 })
  const innerPetals = Array.from({ length: 12 })

  return (
    <g className="gerbera-bloom" style={{ color }}>
      <g className="outer-petals">
        {outerPetals.map((_, index) => (
          <ellipse
            key={index}
            cx="0"
            cy="-12"
            rx="3.8"
            ry="12.8"
            transform={`rotate(${index * 22.5})`}
            fill="currentColor"
            opacity={index % 2 ? 0.78 : 0.94}
          />
        ))}
      </g>
      <g className="inner-petals">
        {innerPetals.map((_, index) => (
          <ellipse
            key={index}
            cx="0"
            cy="-7.4"
            rx="3"
            ry="7.5"
            transform={`rotate(${index * 30 + 9})`}
            fill="currentColor"
            opacity="0.72"
          />
        ))}
      </g>
      <circle r="6.2" fill="#8c684c" />
      <circle r="4.2" fill="#d6ad73" />
      <circle r="2" fill="#6f7454" opacity="0.75" />
      <circle cx="-4" cy="-5" r="2.2" fill="#fff" opacity="0.24" />
    </g>
  )
}

function Tulip({ color }) {
  return (
    <g className="tulip-bloom" style={{ color }}>
      <path d="M-14 0C-15-13-10-23-2-29C1-22 2-18 1-12C5-21 11-25 15-28C17-15 16-5 10 3C4 10-8 9-14 0Z" fill="currentColor" opacity="0.92" />
      <path d="M-13-1C-7-5-3-11-2-27C3-21 8-15 10-3C4 5-6 7-13-1Z" fill="currentColor" opacity="0.72" />
      <path d="M0-7C2-15 6-21 14-27C15-15 13-7 10-3C7 1 4 3 0 4Z" fill="#fff" opacity="0.14" />
      <path d="M-7 7Q0 12 8 7L5 12H-4Z" fill="#708d69" opacity="0.9" />
    </g>
  )
}

export default function AnimatedFlower({
  type = 'gerbera',
  x,
  y,
  scale = 1,
  rotate = 0,
  color = '#65c7bd',
  className = '',
}) {
  return (
    <g
      className={`flower-position flower-${type} ${className}`}
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    >
      <g className="animated-flower" filter="url(#flowerShadow)">
        {type === 'tulip' ? <Tulip color={color} /> : <Gerbera color={color} />}
      </g>
    </g>
  )
}

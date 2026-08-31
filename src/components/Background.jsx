const petals = [
  { x: '8%', y: '22%', delay: '0s', size: 8, rotate: -28 },
  { x: '17%', y: '75%', delay: '-5s', size: 6, rotate: 32 },
  { x: '31%', y: '13%', delay: '-9s', size: 5, rotate: 18 },
  { x: '71%', y: '12%', delay: '-2s', size: 7, rotate: -12 },
  { x: '86%', y: '28%', delay: '-7s', size: 6, rotate: 30 },
  { x: '91%', y: '73%', delay: '-11s', size: 8, rotate: -20 },
  { x: '62%', y: '84%', delay: '-4s', size: 5, rotate: 22 },
]

export default function Background() {
  return (
    <div className="background" aria-hidden="true">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <div className="background-orb orb-three" />
      <div className="paper-grain" />
      {petals.map((petal, index) => (
        <i
          className="ambient-petal"
          key={index}
          style={{
            left: petal.x,
            top: petal.y,
            width: petal.size,
            height: petal.size * 1.8,
            '--delay': petal.delay,
            '--rotate': `${petal.rotate}deg`,
          }}
        />
      ))}
    </div>
  )
}

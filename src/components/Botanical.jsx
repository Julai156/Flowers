export function Leaf({ x, y, rotate = 0, scale = 1, color = '#789978', className = '' }) {
  return (
    <g className={`leaf-position ${className}`} transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <g className="plant-leaf">
        <path d="M0 0C7-17 23-21 34-16C26-3 13 3 0 0Z" fill={color} />
        <path d="M2-1Q16-8 29-14" fill="none" stroke="#f2f2de" strokeWidth="1" opacity="0.45" />
      </g>
    </g>
  )
}

export function Stem({ d, width = 2.5, color = '#718f72', className = '' }) {
  return <path className={`plant-stem ${className}`} d={d} fill="none" stroke={color} strokeWidth={width} strokeLinecap="round" pathLength="1" />
}

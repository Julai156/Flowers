import AnimatedFlower from './AnimatedFlower'
import { Leaf, Stem } from './Botanical'

export default function LetterI() {
  return (
    <g className="letter-group letter-i" aria-label="I">
      <path className="letter-shadow" d="M248 278Q283 266 318 278M283 280C279 373 279 462 283 552M246 555Q282 565 320 554" />
      <path className="letter-stroke" d="M248 278Q283 266 318 278M283 280C279 373 279 462 283 552M246 555Q282 565 320 554" pathLength="1" />
      <Stem d="M283 550C266 495 271 421 282 360C287 326 294 300 301 277" width={3} />
      <Leaf x={278} y={456} rotate={205} scale={0.65} />
      <Leaf x={282} y={399} rotate={-30} scale={0.57} color="#86a681" />
      <Leaf x={288} y={329} rotate={185} scale={0.48} color="#668b72" />
      <AnimatedFlower type="tulip" x={302} y={276} scale={0.72} rotate={7} color="#df8b87" className="letter-flower" />
      <AnimatedFlower x={253} y={555} scale={0.48} rotate={-8} color="#efb8ad" className="letter-flower" />
    </g>
  )
}

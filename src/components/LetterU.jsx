import AnimatedFlower from './AnimatedFlower'
import { Leaf, Stem } from './Botanical'

export default function LetterU() {
  return (
    <g className="letter-group letter-u" aria-label="U">
      <path className="letter-shadow" d="M1045 284C1045 365 1038 460 1060 515C1078 561 1150 569 1171 514C1191 460 1183 366 1184 284" />
      <path className="letter-stroke" d="M1045 284C1045 365 1038 460 1060 515C1078 561 1150 569 1171 514C1191 460 1183 366 1184 284" pathLength="1" />
      <Stem d="M1048 287C1050 380 1042 470 1064 515C1084 553 1145 558 1166 515C1184 467 1177 377 1182 284" width={3} />
      <Leaf x={1050} y={414} rotate={196} scale={0.55} />
      <Leaf x={1177} y={458} rotate={-22} scale={0.63} color="#86a681" />
      <Leaf x={1164} y={535} rotate={160} scale={0.45} color="#668b72" />
      <AnimatedFlower type="tulip" x={1046} y={282} scale={0.7} rotate={-8} color="#aa91c4" className="letter-flower" />
      <AnimatedFlower x={1185} y={282} scale={0.48} rotate={7} color="#c8b7dd" className="letter-flower" />
    </g>
  )
}

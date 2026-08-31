import AnimatedFlower from './AnimatedFlower'
import { Leaf, Stem } from './Botanical'

const gerberaColors = ['#2fb8ad', '#49c8bd', '#67d4ca', '#25a89f', '#82ddd4']
const tulipColors = ['#20a99f', '#39bdb3', '#58cbc1', '#2d968f', '#73d8ce']

// The first group draws the complete heart edge and the remaining rows fill it.
// No clip-path is used: the blooms themselves create the silhouette.
const flowerLayout = [
  // Left lobe, left edge and lower-left taper
  [720, 345, 0.82, 0],
  [692, 319, 0.78, -10], [660, 298, 0.88, -15], [624, 292, 0.82, 3],
  [590, 306, 0.86, -18], [562, 334, 0.8, -25], [548, 370, 0.84, -34],
  [549, 408, 0.78, -26], [560, 446, 0.84, -22], [578, 480, 0.8, -18],
  [600, 512, 0.84, -12], [626, 542, 0.78, -8], [655, 568, 0.82, -6],
  [686, 592, 0.78, -3], [720, 614, 0.9, 0],

  // Right lobe, right edge and lower-right taper
  [748, 319, 0.78, 10], [780, 298, 0.88, 15], [816, 292, 0.82, -3],
  [850, 306, 0.86, 18], [878, 334, 0.8, 25], [892, 370, 0.84, 34],
  [891, 408, 0.78, 26], [880, 446, 0.84, 22], [862, 480, 0.8, 18],
  [840, 512, 0.84, 12], [814, 542, 0.78, 8], [785, 568, 0.82, 6],
  [754, 592, 0.78, 3],

  // Upper body: two rounded lobes with a clear centre cleft
  [596, 342, 0.74, -10], [630, 328, 0.8, 6], [665, 334, 0.76, -5],
  [688, 360, 0.82, 8], [752, 360, 0.82, -8], [775, 334, 0.76, 5],
  [810, 328, 0.8, -6], [844, 342, 0.74, 10],

  // Packed floral rows that preserve the heart silhouette
  [580, 382, 0.78, -14], [615, 368, 0.84, 4], [650, 370, 0.76, -7],
  [685, 393, 0.82, 5], [720, 382, 0.78, 0], [755, 393, 0.82, -5],
  [790, 370, 0.76, 7], [825, 368, 0.84, -4], [860, 382, 0.78, 14],

  [574, 421, 0.76, -16], [610, 410, 0.82, 8], [646, 414, 0.78, -6],
  [683, 428, 0.84, 4], [720, 420, 0.8, 0], [757, 428, 0.84, -4],
  [794, 414, 0.78, 6], [830, 410, 0.82, -8], [866, 421, 0.76, 16],

  [592, 457, 0.8, -12], [630, 450, 0.76, 5], [668, 463, 0.84, -5],
  [706, 455, 0.78, 3], [744, 455, 0.78, -3], [782, 463, 0.84, 5],
  [820, 450, 0.76, -5], [848, 457, 0.8, 12],

  [616, 490, 0.78, -9], [654, 494, 0.84, 6], [692, 488, 0.78, -4],
  [730, 492, 0.82, 2], [768, 488, 0.78, 4], [806, 494, 0.84, -6],
  [824, 490, 0.78, 9],

  [646, 525, 0.8, -7], [682, 527, 0.76, 5], [720, 522, 0.86, 0],
  [758, 527, 0.76, -5], [794, 525, 0.8, 7],
  [677, 556, 0.76, -4], [716, 558, 0.82, 2], [755, 556, 0.76, 4],
]

const leaves = [
  [576, 349, 205, 0.42, '#557c5e'], [609, 315, 150, 0.38, '#71956c'],
  [681, 338, 190, 0.36, '#4f765c'], [760, 340, -12, 0.36, '#71956c'],
  [833, 316, -42, 0.4, '#557c5e'], [874, 392, -16, 0.38, '#71956c'],
  [559, 426, 165, 0.4, '#628663'], [602, 487, 145, 0.38, '#789b70'],
  [641, 546, 162, 0.35, '#557c5e'], [799, 546, 8, 0.35, '#628663'],
  [838, 487, -26, 0.38, '#789b70'], [698, 582, 205, 0.32, '#557c5e'],
  [742, 582, -12, 0.32, '#71956c'],
]

const flowers = flowerLayout.map(([x, y, scale, rotate], index) => {
  const type = index % 2 === 0 ? 'gerbera' : 'tulip'
  const colors = type === 'gerbera' ? gerberaColors : tulipColors
  return [type, x, y, scale, rotate, colors[index % colors.length]]
})

export default function FlowerHeart() {
  return (
    <g className="heart-group" aria-label="amor, representado por un corazón hecho de gerberas y tulipanes">
      <path className="heart-glow" d="M720 622C681 583 535 490 539 379C542 294 625 257 689 315L720 343L751 315C815 257 898 294 901 379C905 490 759 583 720 622Z" />
      <path className="heart-guide" d="M720 611C682 575 550 486 548 382C547 309 620 270 682 326L720 360L758 326C820 270 893 309 892 382C890 486 758 575 720 611Z" pathLength="1" />

      <g className="heart-stems">
        <Stem d="M720 608C692 527 631 424 588 313" width={1.7} />
        <Stem d="M720 608C748 527 809 424 852 313" width={1.7} />
        <Stem d="M720 608C708 517 703 429 690 319" width={1.4} />
        <Stem d="M720 608C732 517 737 429 750 319" width={1.4} />
      </g>

      <g className="heart-leaves">
        {leaves.map(([x, y, rotate, scale, color], index) => (
          <Leaf key={index} x={x} y={y} rotate={rotate} scale={scale} color={color} />
        ))}
      </g>

      <g className="heart-flowers">
        {flowers.map(([type, x, y, scale, rotate, color], index) => (
          <AnimatedFlower key={index} type={type} x={x} y={y} scale={scale} rotate={rotate} color={color} />
        ))}
      </g>
    </g>
  )
}

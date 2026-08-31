import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Background from './components/Background'
import FlowerHeart from './components/FlowerHeart'
import LetterI from './components/LetterI'
import LetterU from './components/LetterU'

function SvgDefinitions() {
  return (
    <defs>
      <filter id="flowerShadow" x="-80%" y="-80%" width="260%" height="260%">
        <feDropShadow dx="0" dy="4" stdDeviation="3.5" floodColor="#4b6f65" floodOpacity="0.18" />
      </filter>
      <filter id="heartBlur" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="24" />
      </filter>
      <linearGradient id="iGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#efb0a7" />
        <stop offset="0.5" stopColor="#d77f7c" />
        <stop offset="1" stopColor="#b86470" />
      </linearGradient>
      <linearGradient id="uGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#c9b9dc" />
        <stop offset="0.5" stopColor="#9e88bc" />
        <stop offset="1" stopColor="#776b9f" />
      </linearGradient>
      <radialGradient id="sceneHalo">
        <stop offset="0" stopColor="#fff" stopOpacity="0.84" />
        <stop offset="0.55" stopColor="#d9eee7" stopOpacity="0.24" />
        <stop offset="1" stopColor="#d9eee7" stopOpacity="0" />
      </radialGradient>
    </defs>
  )
}

export default function App() {
  const sceneRef = useRef(null)
  const timelineRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(true)

  const buildAnimation = () => {
    const root = sceneRef.current
    if (!root) return

    timelineRef.current?.kill()
    gsap.killTweensOf(root.querySelectorAll('*'))

    const q = gsap.utils.selector(root)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Placement lives on wrapper groups, so animation transforms can be reset
    // without moving flowers and leaves back to the SVG origin.
    gsap.set(q('.heart-group, .animated-flower, .plant-leaf'), { clearProps: 'transform' })
    gsap.set(q('.letter-stroke, .heart-guide'), { strokeDasharray: 1, strokeDashoffset: 1 })
    gsap.set(q('.plant-stem'), { strokeDasharray: 1, strokeDashoffset: 1, opacity: 0 })
    gsap.set(q('.plant-leaf'), { opacity: 0, scale: 0, transformOrigin: '0% 0%' })
    gsap.set(q('.animated-flower'), { opacity: 0, scale: 0, transformOrigin: '50% 50%' })
    gsap.set(q('.heart-glow'), { opacity: 0, scale: 0.82, transformOrigin: '50% 55%' })
    gsap.set(q('.scene-copy > *'), { opacity: 0, y: 12 })

    if (reduceMotion) {
      gsap.set(q('.letter-stroke, .heart-guide, .plant-stem'), { strokeDashoffset: 0, opacity: 1 })
      gsap.set(q('.plant-leaf, .animated-flower'), { opacity: 1, scale: 1 })
      gsap.set(q('.heart-glow'), { opacity: 0.7, scale: 1 })
      gsap.set(q('.scene-copy > *'), { opacity: 1, y: 0 })
      setIsAnimating(false)
      return
    }

    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      onComplete: () => {
        setIsAnimating(false)
        startAmbientMotion(root)
      },
    })

    timelineRef.current = tl
    setIsAnimating(true)

    tl.fromTo(q('.background'), { opacity: 0 }, { opacity: 1, duration: 1.3 })
      .to(q('.scene-copy > *'), { opacity: 1, y: 0, duration: 0.8, stagger: 0.14 }, 0.45)
      .to(q('.letter-i .letter-stroke'), { strokeDashoffset: 0, duration: 1.1, ease: 'power1.inOut' }, 0.9)
      .to(q('.letter-i .plant-stem'), { strokeDashoffset: 0, opacity: 1, duration: 1.15, stagger: 0.08 }, 1)
      .to(q('.letter-i .plant-leaf'), { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.5)' }, 1.45)
      .to(q('.letter-i .animated-flower'), { opacity: 1, scale: 1, rotation: '+=4', duration: 0.68, stagger: 0.17, ease: 'back.out(1.8)' }, 1.72)
      .to(q('.heart-guide'), { strokeDashoffset: 0, duration: 1.6, ease: 'power1.inOut' }, 2.05)
      .to(q('.heart-stems .plant-stem'), { strokeDashoffset: 0, opacity: 1, duration: 1.5, stagger: 0.08 }, 2.15)
      .to(q('.heart-leaves .plant-leaf'), { opacity: 1, scale: 1, duration: 0.58, stagger: 0.035, ease: 'back.out(1.4)' }, 2.65)
      .to(q('.heart-flowers .animated-flower'), { opacity: 1, scale: 1, duration: 0.62, stagger: 0.035, ease: 'back.out(1.7)' }, 2.8)
      .to(q('.letter-u .letter-stroke'), { strokeDashoffset: 0, duration: 1.2, ease: 'power1.inOut' }, 4.75)
      .to(q('.letter-u .plant-stem'), { strokeDashoffset: 0, opacity: 1, duration: 1.1 }, 4.8)
      .to(q('.letter-u .plant-leaf'), { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.5)' }, 5.1)
      .to(q('.letter-u .animated-flower'), { opacity: 1, scale: 1, duration: 0.7, stagger: 0.17, ease: 'back.out(1.8)' }, 5.28)
      .to(q('.heart-glow'), { opacity: 0.74, scale: 1, duration: 1.8, ease: 'sine.out' }, 5.5)
      .fromTo(q('.heart-group'), { transformOrigin: '50% 52%', scale: 0.985 }, { scale: 1.018, duration: 0.8, yoyo: true, repeat: 1, ease: 'sine.inOut' }, 5.65)

    return tl
  }

  const startAmbientMotion = (root) => {
    const q = gsap.utils.selector(root)
    gsap.to(q('.heart-group'), { y: -5, duration: 3.8, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    gsap.to(q('.heart-glow'), { opacity: 0.42, scale: 1.04, transformOrigin: '50% 55%', duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    gsap.to(q('.heart-flowers > .flower-position:nth-child(3n + 1) .animated-flower'), { rotation: '+=2.5', duration: 3.2, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    gsap.to(q('.leaf-position:nth-child(2n) .plant-leaf'), { rotation: '+=2', duration: 3.6, repeat: -1, yoyo: true, ease: 'sine.inOut' })
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(buildAnimation, sceneRef)
    return () => {
      timelineRef.current?.kill()
      if (sceneRef.current) gsap.killTweensOf(sceneRef.current.querySelectorAll('*'))
      ctx.revert()
    }
  }, [])

  const replay = () => buildAnimation()

  return (
    <main className="app" ref={sceneRef}>
      <Background />
      <section className="hero" aria-labelledby="love-title">
        <div className="scene-copy">
          <p className="eyebrow">Perdón por ser tan bobo</p>
          <h1 id="love-title">Gracias por todo</h1>
        </div>

        <div className="artwork-wrap">
          <svg
            className="floral-artwork"
            viewBox="120 170 1200 520"
            role="img"
            aria-labelledby="art-title art-description"
            preserveAspectRatio="xMidYMid meet"
          >
            <title id="art-title">I love U</title>
            <SvgDefinitions />
            <ellipse className="scene-halo" cx="720" cy="440" rx="490" ry="260" fill="url(#sceneHalo)" />
            <LetterI />
            <FlowerHeart />
            <LetterU />
          </svg>
        </div>

        <div className="footer-note">
          <span aria-hidden="true" className="fine-line" />
          <button className="replay-button" type="button" onClick={replay} disabled={isAnimating} aria-label="Repetir animación">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 8a8 8 0 1 0 1 7M19 4v4h-4" /></svg>
            <span>{isAnimating ? 'Floreciendo' : 'Repetir'}</span>
          </button>
        </div>
      </section>
    </main>
  )
}

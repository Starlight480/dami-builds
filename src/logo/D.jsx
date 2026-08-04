import './D.css'

// Pure-CSS green "D" logo. No image, no face.
export default function D({ size = 40 }) {
  return (
    <span className="d-logo" style={{ width: size, height: size, fontSize: size * 0.55 }} aria-label="Dami Builds">
      D
    </span>
  )
}

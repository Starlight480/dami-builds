import './D.css'

export default function D({ size = 32 }) {
  return (
    <div 
      className="dami-logo-d" 
      style={{ width: size, height: size, fontSize: size * 0.6 }}
      aria-label="Dami Builds Logo"
    >
      <span>D</span>
    </div>
  )
}

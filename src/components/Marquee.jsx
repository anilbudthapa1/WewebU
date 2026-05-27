const items = [
  'Website Design', 'Web Development', 'React Apps', 'Google Business',
  'SEO Strategy', 'UI/UX Design', 'E-commerce', 'Mobile-First',
  'Website Design', 'Web Development', 'React Apps', 'Google Business',
  'SEO Strategy', 'UI/UX Design', 'E-commerce', 'Mobile-First',
]

export default function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {items.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span className="marquee-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

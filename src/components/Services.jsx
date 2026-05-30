import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Globe, Code2, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: <Globe size={26} />,
    cls: 'svc-blue',
    title: 'Website Design & Development',
    desc: 'Stunning, fast, and responsive websites that captivate visitors and convert them into customers. Built with modern tech for peak performance.',
    tags: ['WordPress', 'React', 'Shopify', 'Webflow', 'Custom CMS'],
  },
  {
    icon: <Code2 size={26} />,
    cls: 'svc-purple',
    title: 'Web Application Development',
    desc: 'Scalable, secure, and feature-rich web apps tailored to your business needs — from internal tools to customer-facing platforms.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'REST API', 'SaaS'],
  },
  {
    icon: <Star size={26} />,
    cls: 'svc-green',
    title: 'Google Business Promotion',
    desc: 'Dominate local search results. We optimise your Google Business Profile and run targeted campaigns to bring customers to your door.',
    tags: ['Google My Business', 'Local SEO', 'Google Ads', 'Reviews', 'Analytics'],
  },
]

export default function Services() {
  const secRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.svc-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '.services__grid', start: 'top 80%' }
        }
      )
    }, secRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="services" id="services" ref={secRef}>
      <div className="bg-grid" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">Services</span>
          <h2 className="section-heading">
            Everything you need to <span className="gradient-text">grow online</span>
          </h2>
          <p className="section-subheading">
            From your first website to complex web apps and Google domination — we cover the full digital spectrum.
          </p>
        </motion.div>

        <div className="services__grid">
          {services.map((svc, i) => (
            <div key={i} className={`svc-card ${svc.cls}`}>
              <div className="svc-icon">{svc.icon}</div>
              <h3 className="svc-title">{svc.title}</h3>
              <p className="svc-desc">{svc.desc}</p>
              <div className="svc-features">
                {svc.tags.map(t => <span key={t} className="svc-tag">{t}</span>)}
              </div>
              <div className="svc-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

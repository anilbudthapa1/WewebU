import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WA_URL = 'https://wa.me/61421688186?text=Hi%20WeWebU%2C%20I%27d%20like%20a%20free%20quote%20for%20my%20website'

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <div style={{
      position: 'fixed',
      bottom: '1.75rem',
      right: '1.75rem',
      zIndex: 8000,
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      flexDirection: 'row-reverse',
    }}>
      {/* Tooltip label */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{
              background: '#25D366',
              color: '#fff',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: '0.82rem',
              padding: '0.45rem 1rem',
              borderRadius: '100px',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
            }}
          >
            Chat with us on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with WeWebU on WhatsApp"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(37,211,102,0.5)',
          flexShrink: 0,
          position: 'relative',
        }}
      >
        {/* Pulse ring */}
        <span style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'rgba(37,211,102,0.3)',
          animation: 'waPulse 2s ease-out infinite',
        }} />

        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="28"
          height="28"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </motion.a>

      <style>{`
        @keyframes waPulse {
          0%   { transform: scale(1);   opacity: 0.6; }
          70%  { transform: scale(1.6); opacity: 0;   }
          100% { transform: scale(1.6); opacity: 0;   }
        }
      `}</style>
    </div>
  )
}

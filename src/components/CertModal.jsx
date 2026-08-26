import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, X } from 'lucide-react'

export default function CertModal({ cert, onClose }) {
  const isPdf = cert?.file?.toLowerCase().endsWith('.pdf')

  useEffect(() => {
    if (!cert) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [cert, onClose])

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-ink/85 backdrop-blur-md" />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-panel shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/[0.07] px-5 py-3.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neon/15 text-neon">
                ✓
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="truncate font-display text-sm font-bold text-white sm:text-base">{cert.title}</h3>
                <p className="truncate font-mono text-[11px] text-mist">
                  {cert.issuer} · {cert.meta}
                </p>
              </div>
              <a
                href={cert.file}
                download
                aria-label="Download certificate"
                className="rounded-lg border border-white/10 p-2 text-mist transition-colors hover:border-neon/40 hover:text-neon"
              >
                <Download size={15} />
              </a>
              <button
                onClick={onClose}
                aria-label="Close"
                className="rounded-lg border border-white/10 p-2 text-mist transition-colors hover:border-danger/50 hover:text-danger"
              >
                <X size={15} />
              </button>
            </div>

            <div className="flex min-h-[60vh] flex-1 items-center justify-center overflow-auto bg-[#03050a] p-2 sm:p-4">
              {isPdf ? (
                <iframe src={cert.file} title={cert.title} className="h-[75vh] w-full rounded-lg" />
              ) : (
                <img
                  src={cert.file}
                  alt={`${cert.title} certificate`}
                  className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain"
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

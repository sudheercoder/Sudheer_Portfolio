import { useInView } from 'framer-motion'
import { useRef } from 'react'

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    amount: options.amount || 0.2,
    ...options
  })

  return { ref, isInView }
}

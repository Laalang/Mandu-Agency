"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [once, threshold])

  const directionStyles = {
    up: "translate-y-10",
    down: "translate-y-[-10px]",
    left: "translate-x-10",
    right: "translate-x-[-10px]",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        isVisible ? "opacity-100 transform-none" : `opacity-0 ${directionStyles[direction]}`,
        className,
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

interface ScaleInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export function ScaleIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true,
}: ScaleInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [once, threshold])

  return (
    <div
      ref={ref}
      className={cn("transition-all", isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95", className)}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

interface StaggeredContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  initialDelay?: number
  threshold?: number
  once?: boolean
}

export function StaggeredContainer({
  children,
  className,
  staggerDelay = 0.1,
  initialDelay = 0,
  threshold = 0.1,
  once = true,
}: StaggeredContainerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [once, threshold])

  // Clone children and add staggered delay
  const staggeredChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        style: {
          ...child.props.style,
          transitionDelay: `${initialDelay + index * staggerDelay}s`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "none" : "translateY(20px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
        },
      })
    }
    return child
  })

  return (
    <div ref={ref} className={className}>
      {staggeredChildren}
    </div>
  )
}

interface CountUpProps {
  end: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
  threshold?: number
  once?: boolean
}

export function CountUp({
  end,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  className,
  threshold = 0.1,
  once = true,
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const countRef = useRef({ value: 0 })
  const frameRef = useRef(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
          setCount(0)
          countRef.current.value = 0
        }
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      cancelAnimationFrame(frameRef.current)
    }
  }, [once, threshold])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now() + delay * 1000
    const endValue = end

    const updateCount = () => {
      const now = Date.now()
      if (now < startTime) {
        frameRef.current = requestAnimationFrame(updateCount)
        return
      }

      const elapsedTime = Math.min((now - startTime) / (duration * 1000), 1)
      const easedProgress = easeOutQuad(elapsedTime)
      const nextValue = Math.floor(easedProgress * endValue)

      if (nextValue !== countRef.current.value) {
        countRef.current.value = nextValue
        setCount(nextValue)
      }

      if (elapsedTime < 1) {
        frameRef.current = requestAnimationFrame(updateCount)
      } else {
        setCount(endValue)
      }
    }

    frameRef.current = requestAnimationFrame(updateCount)

    return () => {
      cancelAnimationFrame(frameRef.current)
    }
  }, [isVisible, end, duration, delay])

  // Easing function
  const easeOutQuad = (t: number) => t * (2 - t)

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export function ParallaxContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            style: {
              ...child.props.style,
              transform: `translateY(${scrollY * (0.1 * (index + 1))}px)`,
            },
          })
        }
        return child
      })}
    </div>
  )
}

export function FloatingElement({
  children,
  className,
  amplitude = 10,
  duration = 3,
}: {
  children: React.ReactNode
  className?: string
  amplitude?: number
  duration?: number
}) {
  return (
    <div
      className={cn("animate-float", className)}
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
      }}
    >
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-${amplitude}px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
      {children}
    </div>
  )
}

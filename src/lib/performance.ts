/**
 * Performance optimization utilities for Core Web Vitals
 */

/**
 * Preload critical resources
 */
export function preloadResource(href: string, as: string) {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = href
  link.as = as
  document.head.appendChild(link)
}

/**
 * Lazy load images with Intersection Observer
 */
export function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          const src = img.dataset.src
          if (src) {
            img.src = src
            img.classList.remove('lazy')
            observer.unobserve(img)
          }
        }
      })
    })

    document.querySelectorAll('img.lazy').forEach((img) => {
      imageObserver.observe(img)
    })
  }
}

/**
 * Measure and report Core Web Vitals
 */
export function reportWebVitals(metric: any) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric)
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to Google Analytics
    if (window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      })
    }
  }
}

/**
 * Prefetch link on hover for faster navigation
 */
export function prefetchOnHover() {
  const links = document.querySelectorAll('a[href^="/"]')
  
  links.forEach((link) => {
    link.addEventListener('mouseenter', function(this: HTMLAnchorElement) {
      const href = this.getAttribute('href')
      if (href) {
        const linkElement = document.createElement('link')
        linkElement.rel = 'prefetch'
        linkElement.href = href
        document.head.appendChild(linkElement)
      }
    }, { once: true })
  })
}

/**
 * Optimize third-party scripts loading
 */
export function loadScriptAsync(src: string, callback?: () => void) {
  const script = document.createElement('script')
  script.src = src
  script.async = true
  if (callback) {
    script.onload = callback
  }
  document.body.appendChild(script)
}

/**
 * Service Worker registration for offline support
 */
export async function registerServiceWorker() {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js')
      console.log('Service Worker registered:', registration)
    } catch (error) {
      console.error('Service Worker registration failed:', error)
    }
  }
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

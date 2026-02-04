'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface PerformanceImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
}

export function PerformanceImage({
  src,
  alt,
  width,
  height,
  fill,
  className,
  priority = false,
  sizes,
}: PerformanceImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={cn('overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        sizes={sizes}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        className={cn(
          'duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-sm' : 'scale-100 blur-0'
        )}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}

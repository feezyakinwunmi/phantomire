"use client"

import { useEffect, useRef, useState } from "react"

export default function TrainingCountdown() {
  const targetRef = useRef(
    new Date(2026, 3, 6, 23, 59, 59).getTime()
  )

  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const diff = targetRef.current - now

  if (diff <= 0) {
    return (
      <div style={{ fontSize: 30 }}>
        Registration Closed
      </div>
    )
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return (
    <div style={{ fontSize: 30 }}>
      {days}d{" "}
      {hours.toString().padStart(2, "0")}h{" "}
      {minutes.toString().padStart(2, "0")}m{" "}
      {seconds.toString().padStart(2, "0")}s
    </div>
  )
}
"use client"

import { useEffect, useRef } from "react"
import { Bot, Phone, Zap } from "lucide-react"

export default function HeroIllustration() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const parentWidth = canvas.parentElement?.clientWidth || 600
      const parentHeight = canvas.parentElement?.clientHeight || 500

      // Set display size (css pixels)
      canvas.style.width = parentWidth + "px"
      canvas.style.height = parentHeight + "px"

      // Set actual size in memory (scaled for retina)
      const dpr = window.devicePixelRatio || 1
      canvas.width = parentWidth * dpr
      canvas.height = parentHeight * dpr

      // Scale context to match the device pixel ratio
      ctx.scale(dpr, dpr)

      return { width: parentWidth, height: parentHeight }
    }

    const { width, height } = setCanvasDimensions()

    // Create nodes for network visualization
    const nodes: Node[] = []
    const numNodes = 40

    interface Node {
      x: number
      y: number
      radius: number
      color: string
      vx: number
      vy: number
      connected: boolean
    }

    // Create nodes
    for (let i = 0; i < numNodes; i++) {
      const radius = Math.random() * 4 + 2
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        color: i % 3 === 0 ? "#9333ea" : i % 3 === 1 ? "#3b82f6" : "#6366f1",
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connected: false,
      })
    }

    // Add central nodes representing AI features
    const centralNodes = [
      { x: width * 0.5, y: height * 0.4, radius: 15, color: "#9333ea", vx: 0, vy: 0, connected: true }, // Chatbot
      { x: width * 0.3, y: height * 0.6, radius: 12, color: "#3b82f6", vx: 0, vy: 0, connected: true }, // Phone
      { x: width * 0.7, y: height * 0.7, radius: 12, color: "#6366f1", vx: 0, vy: 0, connected: true }, // Automation
    ]

    nodes.push(...centralNodes)

    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw connections
      ctx.lineWidth = 0.5

      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i]

        // Connect to central nodes
        for (let j = nodes.length - centralNodes.length; j < nodes.length; j++) {
          const nodeB = nodes[j]
          const dx = nodeB.x - nodeA.x
          const dy = nodeB.y - nodeA.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.2
            ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(nodeA.x, nodeA.y)
            ctx.lineTo(nodeB.x, nodeB.y)
            ctx.stroke()
          }
        }

        // Connect to nearby nodes
        for (let j = i + 1; j < nodes.length - centralNodes.length; j++) {
          const nodeB = nodes[j]
          const dx = nodeB.x - nodeA.x
          const dy = nodeB.y - nodeA.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 80) {
            const opacity = (1 - distance / 80) * 0.15
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(nodeA.x, nodeA.y)
            ctx.lineTo(nodeB.x, nodeB.y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()

        // Draw glow for central nodes
        if (node.connected) {
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.radius + 5, 0, Math.PI * 2)
          const gradient = ctx.createRadialGradient(node.x, node.y, node.radius, node.x, node.y, node.radius + 10)
          gradient.addColorStop(0, `${node.color}80`)
          gradient.addColorStop(1, `${node.color}00`)
          ctx.fillStyle = gradient
          ctx.fill()
        }
      }
    }

    // Update function
    const update = () => {
      for (let i = 0; i < nodes.length - centralNodes.length; i++) {
        const node = nodes[i]

        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < node.radius || node.x > width - node.radius) {
          node.vx *= -1
        }

        if (node.y < node.radius || node.y > height - node.radius) {
          node.vy *= -1
        }

        // Keep within bounds
        node.x = Math.max(node.radius, Math.min(width - node.radius, node.x))
        node.y = Math.max(node.radius, Math.min(height - node.radius, node.y))
      }
    }

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      update()
      draw()
      animationFrameId = requestAnimationFrame(animate)
    }

    // Handle resize
    const handleResize = () => {
      const { width: newWidth, height: newHeight } = setCanvasDimensions()

      // Adjust node positions
      for (const node of nodes) {
        node.x = (node.x / width) * newWidth
        node.y = (node.y / height) * newHeight
      }

      // Update central nodes
      if (centralNodes.length >= 3) {
        centralNodes[0].x = newWidth * 0.5
        centralNodes[0].y = newHeight * 0.4
        centralNodes[1].x = newWidth * 0.3
        centralNodes[1].y = newHeight * 0.6
        centralNodes[2].x = newWidth * 0.7
        centralNodes[2].y = newHeight * 0.7
      }
    }

    window.addEventListener("resize", handleResize)
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="relative w-full h-[500px] bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
      <canvas ref={canvasRef} className="w-full h-full" />

      {/* Overlay elements */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
            <Bot className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <div className="font-medium">Chatbot IA</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Réponses instantanées</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <div className="font-medium">Standard IA</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Routage intelligent</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/3 right-1/4 transform translate-x-1/2 translate-y-1/2 bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
            <Zap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div>
            <div className="font-medium">Automatisation</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Processus optimisés</div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false)

  const openWhatsApp = () => {
    const hour = new Date().getHours()
    let greeting = "Boa noite"
    if (hour >= 5 && hour < 12) {
      greeting = "Bom dia"
    } else if (hour >= 12 && hour < 18) {
      greeting = "Boa tarde"
    }

    const message = `${greeting}, Dra. Gabriely Carrara! Gostaria de agendar uma consulta.`
    const whatsappUrl = `https://wa.me/5534999661099?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={openWhatsApp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 bg-[#25d366] hover:bg-[#20b358] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      
      {isHovered && (
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Fale conosco!
        </span>
      )}
      
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full" />
    </button>
  )
}

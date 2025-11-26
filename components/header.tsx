"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-sans text-xl font-bold">C</span>
            </div>
            <span className="font-sans text-xl font-semibold text-foreground">Carrara Odontologia</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("localizacao")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Localização
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Agendar Consulta
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("localizacao")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
            >
              Localização
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
            >
              Agendar Consulta
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}

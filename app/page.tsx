"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase, FileText, Zap, Share2, Download, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-blue-900">Groven</span>
          </div>
          <Link href="/editor">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white">Começar Agora</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">Groven</h1>

          <p className="text-xl text-slate-600 mb-12 max-w-xl mx-auto leading-relaxed">
            Crie currículos profissionais e modernos em minutos. Ideal para desenvolvedores e profissionais de
            tecnologia que querem se destacar no mercado.
          </p>

          <Link href="/editor">
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white group px-8 py-6 text-lg">
              Começar a Criar Meu Currículo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Por que escolher a <span className="text-blue-900">Groven</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Rápido e Fácil</h3>
              <p className="text-slate-600">Crie um currículo profissional em menos de 10 minutos, sem complicações.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Modelos Profissionais</h3>
              <p className="text-slate-600">Designs modernos e bem estruturados que transmitem profissionalismo.</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Salve Localmente</h3>
              <p className="text-slate-600">Todos os seus dados são salvos no seu navegador. Privado e seguro.</p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Compartilhe com Facilidade</h3>
              <p className="text-slate-600">Exporte em PDF ou compartilhe online com recrutadores e empregadores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Pronto para se destacar?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Comece a criar seu currículo profissional agora mesmo. Leva menos de 10 minutos!
          </p>
          <Link href="/editor">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100">
              Criar Currículo Grátis
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p>© 2025 Groven. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Plus, Trash2, Download, Eye, EyeOff } from "lucide-react"

// Importações para PDF
// - import html2canvas from "html2canvas"
// - import jsPDF from "jspdf"

interface PersonalInfo {
  fullName: string
  title: string
  email: string
  phone: string
  location: string
  linkedin: string
  summary: string
}

interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string
  current: boolean
  description: string
}

interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  current: boolean
}

interface Project {
  id: string
  name: string
  description: string
  technologies: string
  link: string
}

export default function ResumeBuilder() {
  const [showPreview, setShowPreview] = useState(true)
  const resumeRef = useRef<HTMLDivElement>(null) // Ref para o elemento do currículo

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: "João Silva",
    title: "Desenvolvedor Full Stack Sênior",
    email: "joao.silva@example.com",
    phone: "(11) 98765-4321",
    location: "São Paulo, SP",
    linkedin: "linkedin.com/in/joaosilva",
    summary:
      "Desenvolvedor Full Stack com mais de 8 anos de experiência na criação e manutenção de aplicações web escaláveis. Especialista em React, Node.js e arquiteturas de microsserviços. Apaixonado por resolver problemas complexos e construir produtos de alta qualidade.",
  })

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: "1",
      company: "Tech Solutions Ltda.",
      position: "Desenvolvedor Full Stack Sênior",
      startDate: "2021-03",
      endDate: "",
      current: true,
      description:
        "Liderança técnica de equipe de 5 desenvolvedores no desenvolvimento de uma plataforma SaaS. Implementação de novas funcionalidades usando React, Node.js e PostgreSQL. Otimização de performance, reduzindo o tempo de carregamento em 30%.",
    },
    {
      id: "2",
      company: "Inovação Digital S.A.",
      position: "Desenvolvedor Web Pleno",
      startDate: "2018-01",
      endDate: "2021-02",
      current: false,
      description:
        "Desenvolvimento de interfaces de usuário responsivas com Angular e integração com APIs RESTful. Participação no ciclo completo de desenvolvimento de software, desde o design até a implantação.",
    },
  ])

  const [education, setEducation] = useState<Education[]>([
    {
      id: "1",
      institution: "Universidade Federal de São Paulo (UNIFESP)",
      degree: "Bacharelado",
      field: "Ciência da Computação",
      startDate: "2014-02",
      endDate: "2017-12",
      current: false,
    },
    {
      id: "2",
      institution: "Udemy",
      degree: "Certificado",
      field: "Desenvolvimento Web Completo",
      startDate: "2017-08",
      endDate: "2017-11",
      current: false,
    },
  ])

  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "Plataforma de Gerenciamento de Tarefas",
      description:
        "Aplicação web para organização de tarefas pessoais e em equipe, com funcionalidades de arrastar e soltar, prazos e notificações.",
      technologies: "React, Redux, Node.js, Express, MongoDB, Socket.IO",
      link: "https://github.com/joaosilva/task-manager-platform",
    },
    {
      id: "2",
      name: "E-commerce de Livros Online",
      description:
        "Loja virtual completa com carrinho de compras, sistema de pagamento integrado e painel administrativo para gerenciamento de produtos e pedidos.",
      technologies: "Next.js, TypeScript, Stripe API, PostgreSQL, Tailwind CSS",
      link: "https://github.com/joaosilva/book-ecommerce",
    },
  ])

  const [skills, setSkills] = useState<string[]>([
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Git",
    "Metodologias Ágeis",
    "Comunicação",
    "Resolução de Problemas",
  ])
  const [newSkill, setNewSkill] = useState("")

  // Atualizar o título da página dinamicamente
  useEffect(() => {
    const title = personalInfo.fullName ? `Currículo ${personalInfo.fullName}` : "Criador de Currículos"
    document.title = title
  }, [personalInfo.fullName])

  const addExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    }
    setExperiences([...experiences, newExp])
  }

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id))
  }

  const updateExperience = (id: string, field: keyof Experience, value: any) => {
    setExperiences(experiences.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)))
  }

  const addEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      current: false,
    }
    setEducation([...education, newEdu])
  }

  const removeEducation = (id: string) => {
    setEducation(education.filter((edu) => edu.id !== id))
  }

  const updateEducation = (id: string, field: keyof Education, value: any) => {
    setEducation(education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)))
  }

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: "",
      description: "",
      technologies: "",
      link: "",
    }
    setProjects([...projects, newProject])
  }

  const removeProject = (id: string) => {
    setProjects(projects.filter((proj) => proj.id !== id))
  }

  const updateProject = (id: string, field: keyof Project, value: string) => {
    setProjects(projects.map((proj) => (proj.id === id ? { ...proj, [field]: value } : proj)))
  }

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addSkill()
    }
  }

  const handleDownloadPdf = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <div className="mb-6 text-center no-print">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Criador de Currículos</h1>
          <p className="text-gray-600">Crie seu currículo profissional de forma rápida e fácil</p>
        </div>

        <div className="flex justify-center mb-4 no-print">
          <Button onClick={() => setShowPreview(!showPreview)} variant="outline" className="flex items-center gap-2">
            {showPreview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showPreview ? "Ocultar Preview" : "Mostrar Preview"}
          </Button>
        </div>

        <div className={`grid gap-6 ${showPreview ? "lg:grid-cols-2" : "lg:grid-cols-1 max-w-4xl mx-auto"}`}>
          {/* Formulário */}
          <div className="space-y-6 no-print">
            {/* Dados Pessoais */}
            <Card>
              <CardHeader>
                <CardTitle>Dados Pessoais</CardTitle>
                <CardDescription>Informações básicas do seu perfil</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Nome Completo</Label>
                    <Input
                      id="fullName"
                      value={personalInfo.fullName}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="title">Título Profissional</Label>
                    <Input
                      id="title"
                      value={personalInfo.title}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, title: e.target.value })}
                      placeholder="Ex: Desenvolvedor Full Stack"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={personalInfo.email}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      value={personalInfo.phone}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="location">Localização</Label>
                    <Input
                      id="location"
                      value={personalInfo.location}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, location: e.target.value })}
                      placeholder="Cidade, Estado"
                    />
                  </div>
                  <div>
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      value={personalInfo.linkedin}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, linkedin: e.target.value })}
                      placeholder="linkedin.com/in/seuperfil"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="summary">Resumo Profissional</Label>
                  <Textarea
                    id="summary"
                    value={personalInfo.summary}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, summary: e.target.value })}
                    placeholder="Descreva brevemente sua experiência e objetivos profissionais..."
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Experiência Profissional */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Experiência Profissional</CardTitle>
                    <CardDescription>Suas experiências de trabalho</CardDescription>
                  </div>
                  <Button onClick={addExperience} size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={exp.id} className="border rounded-lg p-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Experiência {index + 1}</h4>
                      {experiences.length > 1 && (
                        <Button onClick={() => removeExperience(exp.id)} variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Empresa</Label>
                        <Input
                          value={exp.company}
                          onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                          placeholder="Nome da empresa"
                        />
                      </div>
                      <div>
                        <Label>Cargo</Label>
                        <Input
                          value={exp.position}
                          onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                          placeholder="Seu cargo"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Data de Início</Label>
                        <Input
                          type="month"
                          value={exp.startDate}
                          onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Data de Fim</Label>
                        <Input
                          type="month"
                          value={exp.endDate}
                          onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                          disabled={exp.current}
                        />
                        <div className="flex items-center mt-2">
                          <input
                            type="checkbox"
                            id={`current-${exp.id}`}
                            checked={exp.current}
                            onChange={(e) => updateExperience(exp.id, "current", e.target.checked)}
                            className="mr-2"
                          />
                          <Label htmlFor={`current-${exp.id}`} className="text-sm">
                            Trabalho atual
                          </Label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label>Descrição das Atividades</Label>
                      <Textarea
                        value={exp.description}
                        onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                        placeholder="Descreva suas principais responsabilidades e conquistas..."
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Educação */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Educação</CardTitle>
                    <CardDescription>Sua formação acadêmica</CardDescription>
                  </div>
                  <Button onClick={addEducation} size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={edu.id} className="border rounded-lg p-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Formação {index + 1}</h4>
                      {education.length > 1 && (
                        <Button onClick={() => removeEducation(edu.id)} variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Instituição</Label>
                        <Input
                          value={edu.institution}
                          onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                          placeholder="Nome da instituição"
                        />
                      </div>
                      <div>
                        <Label>Grau</Label>
                        <Input
                          value={edu.degree}
                          onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                          placeholder="Ex: Bacharelado, Mestrado"
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Área de Estudo</Label>
                      <Input
                        value={edu.field}
                        onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                        placeholder="Ex: Ciência da Computação"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Data de Início</Label>
                        <Input
                          type="month"
                          value={edu.startDate}
                          onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Data de Conclusão</Label>
                        <Input
                          type="month"
                          value={edu.endDate}
                          onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                          disabled={edu.current}
                        />
                        <div className="flex items-center mt-2">
                          <input
                            type="checkbox"
                            id={`current-edu-${edu.id}`}
                            checked={edu.current}
                            onChange={(e) => updateEducation(edu.id, "current", e.target.checked)}
                            className="mr-2"
                          />
                          <Label htmlFor={`current-edu-${edu.id}`} className="text-sm">
                            Em andamento
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Habilidades */}
            <Card>
              <CardHeader>
                <CardTitle>Habilidades</CardTitle>
                <CardDescription>Suas competências técnicas e comportamentais</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite uma habilidade e pressione Enter"
                  />
                  <Button onClick={addSkill}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      {skill}
                      <button onClick={() => removeSkill(skill)} className="ml-1 hover:text-red-500">
                        ×
                      </button>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projetos */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Projetos</CardTitle>
                    <CardDescription>Projetos relevantes que você desenvolveu</CardDescription>
                  </div>
                  <Button onClick={addProject} size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {projects.map((project, index) => (
                  <div key={project.id} className="border rounded-lg p-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Projeto {index + 1}</h4>
                      {projects.length > 1 && (
                        <Button onClick={() => removeProject(project.id)} variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div>
                      <Label>Nome do Projeto</Label>
                      <Input
                        value={project.name}
                        onChange={(e) => updateProject(project.id, "name", e.target.value)}
                        placeholder="Nome do seu projeto"
                      />
                    </div>
                    <div>
                      <Label>Descrição</Label>
                      <Textarea
                        value={project.description}
                        onChange={(e) => updateProject(project.id, "description", e.target.value)}
                        placeholder="Descreva o projeto e seu papel nele..."
                        className="min-h-[80px]"
                      />
                    </div>
                    <div>
                      <Label>Tecnologias Utilizadas</Label>
                      <Input
                        value={project.technologies}
                        onChange={(e) => updateProject(project.id, "technologies", e.target.value)}
                        placeholder="Ex: React, Node.js, MongoDB"
                      />
                    </div>
                    <div>
                      <Label>Link do Projeto</Label>
                      <Input
                        value={project.link}
                        onChange={(e) => updateProject(project.id, "link", e.target.value)}
                        placeholder="https://github.com/usuario/projeto"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Preview do Currículo */}
          {showPreview && (
            <div className="lg:sticky lg:top-4">
              <Card className="h-fit">
                <CardHeader className="flex flex-row items-center justify-between no-print">
                  <CardTitle>Preview do Currículo</CardTitle>
                  <Button size="sm" variant="outline" onClick={handleDownloadPdf}>
                    <Download className="h-4 w-4 mr-2" />
                    Baixar PDF
                  </Button>
                </CardHeader>
                <CardContent className="print:p-0">
                  <div
                    ref={resumeRef}
                    className="bg-white p-6 border rounded-lg shadow-sm space-y-6 text-sm resume-printable-area"
                  >
                    {/* Cabeçalho */}
                    <div className="text-center border-b pb-4">
                      <h1 className="text-2xl font-bold text-gray-900">{personalInfo.fullName || "Seu Nome"}</h1>
                      <p className="text-lg text-gray-600 mt-1">{personalInfo.title || "Título Profissional"}</p>
                      <div className="flex flex-wrap justify-center gap-4 mt-3 text-sm text-gray-600">
                        {personalInfo.email && <span>{personalInfo.email}</span>}
                        {personalInfo.phone && <span>{personalInfo.phone}</span>}
                        {personalInfo.location && <span>{personalInfo.location}</span>}
                        {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
                      </div>
                    </div>

                    {/* Resumo */}
                    {personalInfo.summary && (
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">Resumo Profissional</h2>
                        <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
                      </div>
                    )}

                    {/* Experiência */}
                    {experiences.some((exp) => exp.company || exp.position) && (
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Experiência Profissional</h2>
                        <div className="space-y-4">
                          {experiences
                            .filter((exp) => exp.company || exp.position)
                            .map((exp) => (
                              <div key={exp.id}>
                                <div className="flex justify-between items-start mb-1">
                                  <div>
                                    <h3 className="font-medium text-gray-900">{exp.position || "Cargo"}</h3>
                                    <p className="text-gray-600">{exp.company || "Empresa"}</p>
                                  </div>
                                  <div className="text-right text-gray-500 text-xs">
                                    {exp.startDate && (
                                      <span>
                                        {new Date(exp.startDate + "-01").toLocaleDateString("pt-BR", {
                                          month: "short",
                                          year: "numeric",
                                        })}
                                        {" - "}
                                        {exp.current
                                          ? "Atual"
                                          : exp.endDate
                                            ? new Date(exp.endDate + "-01").toLocaleDateString("pt-BR", {
                                                month: "short",
                                                year: "numeric",
                                              })
                                            : "Presente"}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                {exp.description && (
                                  <p className="text-gray-700 text-sm mt-1 leading-relaxed">{exp.description}</p>
                                )}
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                    {/* Educação */}
                    {education.some((edu) => edu.institution || edu.degree) && (
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Educação</h2>
                        <div className="space-y-3">
                          {education
                            .filter((edu) => edu.institution || edu.degree)
                            .map((edu) => (
                              <div key={edu.id}>
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-medium text-gray-900">
                                      {edu.degree || "Grau"} {edu.field && `em ${edu.field}`}
                                    </h3>
                                    <p className="text-gray-600">{edu.institution || "Instituição"}</p>
                                  </div>
                                  <div className="text-right text-gray-500 text-xs">
                                    {edu.startDate && (
                                      <span>
                                        {new Date(edu.startDate + "-01").toLocaleDateString("pt-BR", {
                                          month: "short",
                                          year: "numeric",
                                        })}
                                        {" - "}
                                        {edu.current
                                          ? "Em andamento"
                                          : edu.endDate
                                            ? new Date(edu.endDate + "-01").toLocaleDateString("pt-BR", {
                                                month: "short",
                                                year: "numeric",
                                              })
                                            : "Presente"}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                    {/* Habilidades */}
                    {skills.length > 0 && (
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Habilidades</h2>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill, index) => (
                            <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Projetos */}
                    {projects.some((proj) => proj.name || proj.description) && (
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-3">Projetos</h2>
                        <div className="space-y-3">
                          {projects
                            .filter((proj) => proj.name || proj.description)
                            .map((project) => (
                              <div key={project.id}>
                                <h3 className="font-medium text-gray-900">{project.name || "Nome do Projeto"}</h3>
                                {project.description && (
                                  <p className="text-gray-700 text-sm mt-1 leading-relaxed">{project.description}</p>
                                )}
                                {project.technologies && (
                                  <p className="text-gray-600 text-xs mt-1">
                                    <strong>Tecnologias:</strong> {project.technologies}
                                  </p>
                                )}
                                {project.link && (
                                  <p className="text-blue-600 text-xs mt-1">
                                    <strong>Link:</strong> {project.link}
                                  </p>
                                )}
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Plus,
  Trash2,
  Download,
  Eye,
  EyeOff,
  Briefcase,
  GraduationCap,
  Award,
  Languages,
  Code,
  FolderOpen,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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

interface Course {
  id: string
  name: string
  institution: string
  completionDate: string
  duration: string
  certificate: string
}

interface Language {
  id: string
  language: string
  level: string
}

export default function ResumeBuilder() {
  const [showPreview, setShowPreview] = useState(true)
  const resumeRef = useRef<HTMLDivElement>(null)

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: "Maria Silva Santos",
    title: "Desenvolvedora Full Stack",
    email: "maria.silva@email.com",
    phone: "(11) 99999-8888",
    location: "São Paulo, SP",
    linkedin: "linkedin.com/in/mariasilva",
    summary:
      "Desenvolvedora Full Stack com 5 anos de experiência em desenvolvimento web, especializada em React, Node.js e Python. Apaixonada por criar soluções inovadoras e escaláveis que impactem positivamente a experiência do usuário. Experiência em metodologias ágeis e trabalho em equipe.",
  })

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: "1",
      company: "TechCorp Solutions",
      position: "Desenvolvedora Full Stack Sênior",
      startDate: "2022-03",
      endDate: "",
      current: true,
      description:
        "Desenvolvimento de aplicações web usando React, Node.js e MongoDB. Liderança técnica de uma equipe de 4 desenvolvedores. Implementação de arquiteturas escaláveis e otimização de performance. Redução de 40% no tempo de carregamento das aplicações.",
    },
    {
      id: "2",
      company: "StartupXYZ",
      position: "Desenvolvedora Frontend",
      startDate: "2020-01",
      endDate: "2022-02",
      current: false,
      description:
        "Desenvolvimento de interfaces responsivas com React e TypeScript. Integração com APIs REST e GraphQL. Implementação de testes automatizados com Jest e Cypress. Colaboração direta com designers UX/UI para melhorar a experiência do usuário.",
    },
  ])

  const [education, setEducation] = useState<Education[]>([
    {
      id: "1",
      institution: "Universidade de São Paulo (USP)",
      degree: "Bacharelado",
      field: "Ciência da Computação",
      startDate: "2016-02",
      endDate: "2019-12",
      current: false,
    },
  ])

  const [courses, setCourses] = useState<Course[]>([
    {
      id: "1",
      name: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      completionDate: "2023-08",
      duration: "40 horas",
      certificate: "https://aws.amazon.com/certification/",
    },
    {
      id: "2",
      name: "React Advanced Patterns",
      institution: "Rocketseat",
      completionDate: "2023-05",
      duration: "20 horas",
      certificate: "https://rocketseat.com.br",
    },
  ])

  const [languages, setLanguages] = useState<Language[]>([
    {
      id: "1",
      language: "Português",
      level: "Nativo",
    },
    {
      id: "2",
      language: "Inglês",
      level: "Avançado",
    },
    {
      id: "3",
      language: "Espanhol",
      level: "Intermediário",
    },
  ])

  const [skills, setSkills] = useState<string[]>([
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Git",
    "Scrum",
    "TDD",
  ])

  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "E-commerce Platform",
      description:
        "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e gestão de estoque. Desenvolvida para suportar mais de 10.000 produtos e 1.000 usuários simultâneos.",
      technologies: "React, Node.js, MongoDB, Stripe API, AWS",
      link: "https://github.com/mariasilva/ecommerce-platform",
    },
    {
      id: "2",
      name: "Task Management App",
      description:
        "Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em tempo real, notificações push e sincronização offline.",
      technologies: "React Native, Firebase, Redux, Socket.io",
      link: "https://github.com/mariasilva/task-manager",
    },
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

  const addCourse = () => {
    const newCourse: Course = {
      id: Date.now().toString(),
      name: "",
      institution: "",
      completionDate: "",
      duration: "",
      certificate: "",
    }
    setCourses([...courses, newCourse])
  }

  const removeCourse = (id: string) => {
    setCourses(courses.filter((course) => course.id !== id))
  }

  const updateCourse = (id: string, field: keyof Course, value: string) => {
    setCourses(courses.map((course) => (course.id === id ? { ...course, [field]: value } : course)))
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

  const addLanguage = () => {
    const newLanguage: Language = {
      id: Date.now().toString(),
      language: "",
      level: "",
    }
    setLanguages([...languages, newLanguage])
  }

  const removeLanguage = (id: string) => {
    setLanguages(languages.filter((lang) => lang.id !== id))
  }

  const updateLanguage = (id: string, field: keyof Language, value: string) => {
    setLanguages(languages.map((lang) => (lang.id === id ? { ...lang, [field]: value } : lang)))
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

  // Função melhorada para download com nome personalizado
  const handleDownloadPdf = () => {
    // Criar nome do arquivo baseado no nome da pessoa
    const fileName = personalInfo.fullName
      ? `Curriculo_${personalInfo.fullName.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_]/g, "")}`
      : "Curriculo"

    // Definir o título da página temporariamente para o nome do arquivo
    const originalTitle = document.title
    document.title = fileName

    // Aguardar um momento para o título ser aplicado
    setTimeout(() => {
      window.print()
      // Restaurar o título original após o print
      setTimeout(() => {
        document.title = originalTitle
      }, 1000)
    }, 100)
  }

  const languageLevels = ["Básico", "Intermediário", "Avançado", "Fluente", "Nativo"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto p-4">
        {/* Header com gradiente */}
        <div className="mb-8 text-center no-print">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                Criador de Currículos
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                Crie seu currículo profissional de forma rápida e fácil
              </p>
              <div className="mt-4 text-sm text-gray-500 bg-green-50 border border-green-200 rounded-lg p-3">
                ✅ <strong>ATS-Friendly:</strong> Este currículo é otimizado para sistemas de rastreamento de candidatos
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-6 no-print">
          <Button
            onClick={() => setShowPreview(!showPreview)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            size="lg"
          >
            {showPreview ? <EyeOff className="h-5 w-5 mr-2" /> : <Eye className="h-5 w-5 mr-2" />}
            {showPreview ? "Ocultar Preview" : "Mostrar Preview"}
          </Button>
        </div>

        <div className={`grid gap-8 ${showPreview ? "lg:grid-cols-2" : "lg:grid-cols-1 max-w-4xl mx-auto"}`}>
          {/* Formulário */}
          <div className="space-y-8 no-print">
            {/* Dados Pessoais */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  Dados Pessoais
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Informações básicas do seu perfil profissional
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-gray-700 font-medium">
                      Nome Completo
                    </Label>
                    <Input
                      id="fullName"
                      value={personalInfo.fullName}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
                      placeholder="Seu nome completo"
                      className="border-2 border-gray-200 focus:border-blue-500 transition-colors duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-gray-700 font-medium">
                      Título Profissional
                    </Label>
                    <Input
                      id="title"
                      value={personalInfo.title}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, title: e.target.value })}
                      placeholder="Ex: Desenvolvedor Full Stack"
                      className="border-2 border-gray-200 focus:border-purple-500 transition-colors duration-200"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={personalInfo.email}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="border-2 border-gray-200 focus:border-blue-500 transition-colors duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      Telefone
                    </Label>
                    <Input
                      id="phone"
                      value={personalInfo.phone}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className="border-2 border-gray-200 focus:border-purple-500 transition-colors duration-200"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-gray-700 font-medium">
                      Localização
                    </Label>
                    <Input
                      id="location"
                      value={personalInfo.location}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, location: e.target.value })}
                      placeholder="Cidade, Estado"
                      className="border-2 border-gray-200 focus:border-blue-500 transition-colors duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin" className="text-gray-700 font-medium">
                      LinkedIn
                    </Label>
                    <Input
                      id="linkedin"
                      value={personalInfo.linkedin}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, linkedin: e.target.value })}
                      placeholder="linkedin.com/in/seuperfil"
                      className="border-2 border-gray-200 focus:border-purple-500 transition-colors duration-200"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="summary" className="text-gray-700 font-medium">
                    Resumo Profissional
                  </Label>
                  <Textarea
                    id="summary"
                    value={personalInfo.summary}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, summary: e.target.value })}
                    placeholder="Descreva brevemente sua experiência e objetivos profissionais..."
                    className="min-h-[120px] border-2 border-gray-200 focus:border-indigo-500 transition-colors duration-200"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Experiência Profissional */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <Briefcase className="h-6 w-6" />
                      </div>
                      Experiência Profissional
                    </CardTitle>
                    <CardDescription className="text-green-100">
                      Suas experiências de trabalho e conquistas
                    </CardDescription>
                  </div>
                  <Button
                    onClick={addExperience}
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 transition-all duration-200"
                    variant="outline"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className="border-2 border-gray-100 rounded-xl p-6 space-y-4 bg-gradient-to-r from-green-50 to-teal-50 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-gray-800 text-lg">Experiência {index + 1}</h4>
                      {experiences.length > 1 && (
                        <Button
                          onClick={() => removeExperience(exp.id)}
                          variant="outline"
                          size="sm"
                          className="text-red-600 border-red-200 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Empresa</Label>
                        <Input
                          value={exp.company}
                          onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                          placeholder="Nome da empresa"
                          className="border-2 border-gray-200 focus:border-green-500 transition-colors duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Cargo</Label>
                        <Input
                          value={exp.position}
                          onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                          placeholder="Seu cargo"
                          className="border-2 border-gray-200 focus:border-teal-500 transition-colors duration-200"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Data de Início</Label>
                        <Input
                          type="month"
                          value={exp.startDate}
                          onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                          className="border-2 border-gray-200 focus:border-green-500 transition-colors duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Data de Fim</Label>
                        <Input
                          type="month"
                          value={exp.endDate}
                          onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                          disabled={exp.current}
                          className="border-2 border-gray-200 focus:border-teal-500 transition-colors duration-200"
                        />
                        <div className="flex items-center mt-3">
                          <input
                            type="checkbox"
                            id={`current-${exp.id}`}
                            checked={exp.current}
                            onChange={(e) => updateExperience(exp.id, "current", e.target.checked)}
                            className="mr-3 w-4 h-4 text-green-600 rounded focus:ring-green-500"
                          />
                          <Label htmlFor={`current-${exp.id}`} className="text-sm text-gray-700">
                            Trabalho atual
                          </Label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-700 font-medium">Descrição das Atividades</Label>
                      <Textarea
                        value={exp.description}
                        onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                        placeholder="Descreva suas principais responsabilidades e conquistas..."
                        className="min-h-[100px] border-2 border-gray-200 focus:border-green-500 transition-colors duration-200"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Educação */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      Educação
                    </CardTitle>
                    <CardDescription className="text-orange-100">
                      Sua formação acadêmica e qualificações
                    </CardDescription>
                  </div>
                  <Button
                    onClick={addEducation}
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 transition-all duration-200"
                    variant="outline"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                {education.map((edu, index) => (
                  <div
                    key={edu.id}
                    className="border-2 border-gray-100 rounded-xl p-6 space-y-4 bg-gradient-to-r from-orange-50 to-red-50 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-gray-800 text-lg">Formação {index + 1}</h4>
                      {education.length > 1 && (
                        <Button
                          onClick={() => removeEducation(edu.id)}
                          variant="outline"
                          size="sm"
                          className="text-red-600 border-red-200 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Instituição</Label>
                        <Input
                          value={edu.institution}
                          onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                          placeholder="Nome da instituição"
                          className="border-2 border-gray-200 focus:border-orange-500 transition-colors duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Grau</Label>
                        <Input
                          value={edu.degree}
                          onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                          placeholder="Ex: Bacharelado, Mestrado"
                          className="border-2 border-gray-200 focus:border-red-500 transition-colors duration-200"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-700 font-medium">Área de Estudo</Label>
                      <Input
                        value={edu.field}
                        onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                        placeholder="Ex: Ciência da Computação"
                        className="border-2 border-gray-200 focus:border-orange-500 transition-colors duration-200"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Data de Início</Label>
                        <Input
                          type="month"
                          value={edu.startDate}
                          onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                          className="border-2 border-gray-200 focus:border-orange-500 transition-colors duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Data de Conclusão</Label>
                        <Input
                          type="month"
                          value={edu.endDate}
                          onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                          disabled={edu.current}
                          className="border-2 border-gray-200 focus:border-red-500 transition-colors duration-200"
                        />
                        <div className="flex items-center mt-3">
                          <input
                            type="checkbox"
                            id={`current-edu-${edu.id}`}
                            checked={edu.current}
                            onChange={(e) => updateEducation(edu.id, "current", e.target.checked)}
                            className="mr-3 w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                          />
                          <Label htmlFor={`current-edu-${edu.id}`} className="text-sm text-gray-700">
                            Em andamento
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Cursos Complementares */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <Award className="h-6 w-6" />
                      </div>
                      Cursos Complementares
                    </CardTitle>
                    <CardDescription className="text-purple-100">
                      Certificações e cursos relevantes para sua carreira
                    </CardDescription>
                  </div>
                  <Button
                    onClick={addCourse}
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 transition-all duration-200"
                    variant="outline"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                {courses.map((course, index) => (
                  <div
                    key={course.id}
                    className="border-2 border-gray-100 rounded-xl p-6 space-y-4 bg-gradient-to-r from-purple-50 to-pink-50 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-gray-800 text-lg">Curso {index + 1}</h4>
                      {courses.length > 1 && (
                        <Button
                          onClick={() => removeCourse(course.id)}
                          variant="outline"
                          size="sm"
                          className="text-red-600 border-red-200 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Nome do Curso</Label>
                        <Input
                          value={course.name}
                          onChange={(e) => updateCourse(course.id, "name", e.target.value)}
                          placeholder="Nome do curso ou certificação"
                          className="border-2 border-gray-200 focus:border-purple-500 transition-colors duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Instituição</Label>
                        <Input
                          value={course.institution}
                          onChange={(e) => updateCourse(course.id, "institution", e.target.value)}
                          placeholder="Nome da instituição"
                          className="border-2 border-gray-200 focus:border-pink-500 transition-colors duration-200"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Data de Conclusão</Label>
                        <Input
                          type="month"
                          value={course.completionDate}
                          onChange={(e) => updateCourse(course.id, "completionDate", e.target.value)}
                          className="border-2 border-gray-200 focus:border-purple-500 transition-colors duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Duração</Label>
                        <Input
                          value={course.duration}
                          onChange={(e) => updateCourse(course.id, "duration", e.target.value)}
                          placeholder="Ex: 40 horas, 3 meses"
                          className="border-2 border-gray-200 focus:border-pink-500 transition-colors duration-200"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-700 font-medium">Link do Certificado (opcional)</Label>
                      <Input
                        value={course.certificate}
                        onChange={(e) => updateCourse(course.id, "certificate", e.target.value)}
                        placeholder="https://certificado.com"
                        className="border-2 border-gray-200 focus:border-purple-500 transition-colors duration-200"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Idiomas */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-t-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <Languages className="h-6 w-6" />
                      </div>
                      Idiomas
                    </CardTitle>
                    <CardDescription className="text-cyan-100">Idiomas que você domina e seus níveis</CardDescription>
                  </div>
                  <Button
                    onClick={addLanguage}
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 transition-all duration-200"
                    variant="outline"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                {languages.map((language, index) => (
                  <div
                    key={language.id}
                    className="border-2 border-gray-100 rounded-xl p-6 space-y-4 bg-gradient-to-r from-cyan-50 to-blue-50 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-gray-800 text-lg">Idioma {index + 1}</h4>
                      {languages.length > 1 && (
                        <Button
                          onClick={() => removeLanguage(language.id)}
                          variant="outline"
                          size="sm"
                          className="text-red-600 border-red-200 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Idioma</Label>
                        <Input
                          value={language.language}
                          onChange={(e) => updateLanguage(language.id, "language", e.target.value)}
                          placeholder="Ex: Inglês, Espanhol"
                          className="border-2 border-gray-200 focus:border-cyan-500 transition-colors duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-gray-700 font-medium">Nível</Label>
                        <Select
                          value={language.level}
                          onValueChange={(value) => updateLanguage(language.id, "level", value)}
                        >
                          <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500 transition-colors duration-200">
                            <SelectValue placeholder="Selecione o nível" />
                          </SelectTrigger>
                          <SelectContent>
                            {languageLevels.map((level) => (
                              <SelectItem key={level} value={level}>
                                {level}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Habilidades */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Code className="h-6 w-6" />
                  </div>
                  Habilidades
                </CardTitle>
                <CardDescription className="text-indigo-100">
                  Suas competências técnicas e comportamentais
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="flex gap-3">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite uma habilidade e pressione Enter"
                    className="border-2 border-gray-200 focus:border-indigo-500 transition-colors duration-200"
                  />
                  <Button
                    onClick={addSkill}
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 border border-indigo-200 hover:from-indigo-200 hover:to-purple-200 transition-all duration-200 cursor-pointer"
                    >
                      {skill}
                      <button
                        onClick={() => removeSkill(skill)}
                        className="ml-2 hover:text-red-600 transition-colors duration-200 font-bold text-lg"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projetos */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-t-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <FolderOpen className="h-6 w-6" />
                      </div>
                      Projetos
                    </CardTitle>
                    <CardDescription className="text-emerald-100">
                      Projetos relevantes que você desenvolveu
                    </CardDescription>
                  </div>
                  <Button
                    onClick={addProject}
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:border-white/50 transition-all duration-200"
                    variant="outline"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="border-2 border-gray-100 rounded-xl p-6 space-y-4 bg-gradient-to-r from-emerald-50 to-teal-50 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-gray-800 text-lg">Projeto {index + 1}</h4>
                      {projects.length > 1 && (
                        <Button
                          onClick={() => removeProject(project.id)}
                          variant="outline"
                          size="sm"
                          className="text-red-600 border-red-200 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-700 font-medium">Nome do Projeto</Label>
                      <Input
                        value={project.name}
                        onChange={(e) => updateProject(project.id, "name", e.target.value)}
                        placeholder="Nome do seu projeto"
                        className="border-2 border-gray-200 focus:border-emerald-500 transition-colors duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-700 font-medium">Descrição</Label>
                      <Textarea
                        value={project.description}
                        onChange={(e) => updateProject(project.id, "description", e.target.value)}
                        placeholder="Descreva o projeto e seu papel nele..."
                        className="min-h-[100px] border-2 border-gray-200 focus:border-teal-500 transition-colors duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-700 font-medium">Tecnologias Utilizadas</Label>
                      <Input
                        value={project.technologies}
                        onChange={(e) => updateProject(project.id, "technologies", e.target.value)}
                        placeholder="Ex: React, Node.js, MongoDB"
                        className="border-2 border-gray-200 focus:border-emerald-500 transition-colors duration-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-700 font-medium">Link do Projeto</Label>
                      <Input
                        value={project.link}
                        onChange={(e) => updateProject(project.id, "link", e.target.value)}
                        placeholder="https://github.com/usuario/projeto"
                        className="border-2 border-gray-200 focus:border-teal-500 transition-colors duration-200"
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
              <Card className="h-fit border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between no-print bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-t-lg">
                  <CardTitle className="text-xl">Preview do Currículo</CardTitle>
                  <Button
                    size="sm"
                    onClick={handleDownloadPdf}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Baixar PDF
                  </Button>
                </CardHeader>
                <CardContent className="print:p-0 p-0">
                  <div
                    ref={resumeRef}
                    className="bg-white p-8 border rounded-b-lg shadow-sm space-y-6 text-sm resume-printable-area"
                  >
                    {/* Cabeçalho - Otimizado para ATS */}
                    <header className="text-center border-b-2 border-gray-200 pb-6">
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">{personalInfo.fullName || "Seu Nome"}</h1>
                      <h2 className="text-xl text-gray-600 mb-4">{personalInfo.title || "Título Profissional"}</h2>
                      <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                        {personalInfo.email && <span>Email: {personalInfo.email}</span>}
                        {personalInfo.phone && <span>Telefone: {personalInfo.phone}</span>}
                        {personalInfo.location && <span>Localização: {personalInfo.location}</span>}
                        {personalInfo.linkedin && <span>LinkedIn: {personalInfo.linkedin}</span>}
                      </div>
                    </header>

                    {/* Resumo Profissional */}
                    {personalInfo.summary && (
                      <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-blue-500 pl-3">
                          RESUMO PROFISSIONAL
                        </h2>
                        <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
                      </section>
                    )}

                    {/* Experiência Profissional */}
                    {experiences.some((exp) => exp.company || exp.position) && (
                      <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-green-500 pl-3">
                          EXPERIÊNCIA PROFISSIONAL
                        </h2>
                        <div className="space-y-5">
                          {experiences
                            .filter((exp) => exp.company || exp.position)
                            .map((exp) => (
                              <article key={exp.id} className="border-l-2 border-gray-200 pl-4">
                                <div className="flex justify-between items-start mb-2">
                                  <div>
                                    <h3 className="font-bold text-gray-900 text-lg">{exp.position || "Cargo"}</h3>
                                    <h4 className="text-gray-600 font-medium">{exp.company || "Empresa"}</h4>
                                  </div>
                                  <div className="text-right text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">
                                    {exp.startDate && (
                                      <time>
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
                                      </time>
                                    )}
                                  </div>
                                </div>
                                {exp.description && (
                                  <p className="text-gray-700 text-sm mt-2 leading-relaxed">{exp.description}</p>
                                )}
                              </article>
                            ))}
                        </div>
                      </section>
                    )}

                    {/* Educação */}
                    {education.some((edu) => edu.institution || edu.degree) && (
                      <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-orange-500 pl-3">
                          EDUCAÇÃO
                        </h2>
                        <div className="space-y-4">
                          {education
                            .filter((edu) => edu.institution || edu.degree)
                            .map((edu) => (
                              <article key={edu.id} className="border-l-2 border-gray-200 pl-4">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-bold text-gray-900">
                                      {edu.degree || "Grau"} {edu.field && `em ${edu.field}`}
                                    </h3>
                                    <h4 className="text-gray-600 font-medium">{edu.institution || "Instituição"}</h4>
                                  </div>
                                  <div className="text-right text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">
                                    {edu.startDate && (
                                      <time>
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
                                      </time>
                                    )}
                                  </div>
                                </div>
                              </article>
                            ))}
                        </div>
                      </section>
                    )}

                    {/* Cursos Complementares */}
                    {courses.some((course) => course.name || course.institution) && (
                      <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-purple-500 pl-3">
                          CURSOS COMPLEMENTARES
                        </h2>
                        <div className="space-y-4">
                          {courses
                            .filter((course) => course.name || course.institution)
                            .map((course) => (
                              <article key={course.id} className="border-l-2 border-gray-200 pl-4">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-bold text-gray-900">{course.name || "Nome do Curso"}</h3>
                                    <h4 className="text-gray-600 font-medium">{course.institution || "Instituição"}</h4>
                                    {course.duration && (
                                      <p className="text-gray-500 text-sm">Duração: {course.duration}</p>
                                    )}
                                  </div>
                                  <div className="text-right text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">
                                    {course.completionDate && (
                                      <time>
                                        {new Date(course.completionDate + "-01").toLocaleDateString("pt-BR", {
                                          month: "short",
                                          year: "numeric",
                                        })}
                                      </time>
                                    )}
                                  </div>
                                </div>
                                {course.certificate && (
                                  <p className="text-blue-600 text-sm mt-2">
                                    <strong>Certificado:</strong> {course.certificate}
                                  </p>
                                )}
                              </article>
                            ))}
                        </div>
                      </section>
                    )}

                    {/* Habilidades */}
                    {skills.length > 0 && (
                      <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-indigo-500 pl-3">
                          HABILIDADES
                        </h2>
                        <div className="text-gray-700">{skills.join(" • ")}</div>
                      </section>
                    )}

                    {/* Idiomas */}
                    {languages.some((lang) => lang.language || lang.level) && (
                      <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-cyan-500 pl-3">
                          IDIOMAS
                        </h2>
                        <div className="space-y-2">
                          {languages
                            .filter((lang) => lang.language || lang.level)
                            .map((language) => (
                              <div key={language.id} className="flex justify-between items-center">
                                <span className="font-medium text-gray-900">{language.language || "Idioma"}</span>
                                <span className="text-gray-600">{language.level || "Nível"}</span>
                              </div>
                            ))}
                        </div>
                      </section>
                    )}

                    {/* Projetos */}
                    {projects.some((proj) => proj.name || proj.description) && (
                      <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-emerald-500 pl-3">
                          PROJETOS
                        </h2>
                        <div className="space-y-4">
                          {projects
                            .filter((proj) => proj.name || proj.description)
                            .map((project) => (
                              <article key={project.id} className="border-l-2 border-gray-200 pl-4">
                                <h3 className="font-bold text-gray-900 text-lg">{project.name || "Nome do Projeto"}</h3>
                                {project.description && (
                                  <p className="text-gray-700 text-sm mt-2 leading-relaxed">{project.description}</p>
                                )}
                                {project.technologies && (
                                  <p className="text-gray-600 text-sm mt-2">
                                    <strong>Tecnologias:</strong> {project.technologies}
                                  </p>
                                )}
                                {project.link && (
                                  <p className="text-blue-600 text-sm mt-2">
                                    <strong>Link:</strong> {project.link}
                                  </p>
                                )}
                              </article>
                            ))}
                        </div>
                      </section>
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

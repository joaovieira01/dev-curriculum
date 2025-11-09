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
  FileText,
  Smartphone,
  CheckCircle,
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
  const [isMobile, setIsMobile] = useState(false)
  const [mobileView, setMobileView] = useState<"form" | "preview">("form")
  const resumeRef = useRef<HTMLDivElement>(null)

  // Estados vazios para o usuário preencher
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    summary: "",
  })

  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: "1",
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    },
  ])

  const [education, setEducation] = useState<Education[]>([
    {
      id: "1",
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      current: false,
    },
  ])

  const [courses, setCourses] = useState<Course[]>([
    {
      id: "1",
      name: "",
      institution: "",
      completionDate: "",
      duration: "",
      certificate: "",
    },
  ])

  const [languages, setLanguages] = useState<Language[]>([
    {
      id: "1",
      language: "",
      level: "",
    },
  ])

  const [skills, setSkills] = useState<string[]>([])

  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "",
      description: "",
      technologies: "",
      link: "",
    },
  ])

  const [newSkill, setNewSkill] = useState("")

  // Detectar tamanho da tela
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // Atualizar o título da página dinamicamente
  useEffect(() => {
    const title = personalInfo.fullName ? `Currículo ${personalInfo.fullName}` : "Groven"
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

  // Função para download PDF
  const handleDownloadPdf = () => {
    const fileName = personalInfo.fullName
      ? `Curriculo_${personalInfo.fullName.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_]/g, "")}`
      : "Curriculo"

    const originalTitle = document.title
    document.title = fileName

    setTimeout(() => {
      window.print()
      setTimeout(() => {
        document.title = originalTitle
      }, 1000)
    }, 100)
  }

  // Função para download DOCX
  const handleDownloadDocx = async () => {
    try {
      const { saveAs } = await import("file-saver")
      const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle } = await import("docx")

      const fileName = personalInfo.fullName
        ? `Curriculo_${personalInfo.fullName.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_]/g, "")}.docx`
        : "Curriculo.docx"

      // Criar documento
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              // Cabeçalho
              new Paragraph({
                children: [
                  new TextRun({
                    text: personalInfo.fullName || "SEU NOME COMPLETO",
                    bold: true,
                    size: 36,
                    allCaps: true,
                  }),
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 200 },
              }),

              new Paragraph({
                children: [
                  new TextRun({
                    text: personalInfo.title || "Título Profissional",
                    italics: true,
                    size: 28,
                  }),
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 400 },
              }),

              // Informações de contato
              ...(personalInfo.email || personalInfo.phone || personalInfo.location || personalInfo.linkedin
                ? [
                    new Paragraph({
                      children: [
                        ...(personalInfo.email
                          ? [
                              new TextRun({ text: "Email: ", bold: true }),
                              new TextRun({ text: personalInfo.email + "  " }),
                            ]
                          : []),
                        ...(personalInfo.phone
                          ? [
                              new TextRun({ text: "Telefone: ", bold: true }),
                              new TextRun({ text: personalInfo.phone + "  " }),
                            ]
                          : []),
                        ...(personalInfo.location
                          ? [
                              new TextRun({ text: "Endereço: ", bold: true }),
                              new TextRun({ text: personalInfo.location + "  " }),
                            ]
                          : []),
                        ...(personalInfo.linkedin
                          ? [
                              new TextRun({ text: "LinkedIn: ", bold: true }),
                              new TextRun({ text: personalInfo.linkedin }),
                            ]
                          : []),
                      ],
                      alignment: AlignmentType.CENTER,
                      spacing: { after: 400 },
                    }),
                  ]
                : []),

              // Resumo Profissional
              ...(personalInfo.summary
                ? [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: "RESUMO PROFISSIONAL",
                          bold: true,
                          size: 28,
                          allCaps: true,
                        }),
                      ],
                      heading: HeadingLevel.HEADING_2,
                      spacing: { before: 400, after: 200 },
                      border: {
                        bottom: {
                          color: "000000",
                          space: 1,
                          style: BorderStyle.SINGLE,
                          size: 6,
                        },
                      },
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: personalInfo.summary,
                          size: 22,
                        }),
                      ],
                      alignment: AlignmentType.JUSTIFIED,
                      spacing: { after: 400 },
                    }),
                  ]
                : []),

              // Experiência Profissional
              ...(experiences.some((exp) => exp.company || exp.position)
                ? [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: "EXPERIÊNCIA PROFISSIONAL",
                          bold: true,
                          size: 28,
                          allCaps: true,
                        }),
                      ],
                      heading: HeadingLevel.HEADING_2,
                      spacing: { before: 400, after: 200 },
                      border: {
                        bottom: {
                          color: "000000",
                          space: 1,
                          style: BorderStyle.SINGLE,
                          size: 6,
                        },
                      },
                    }),
                    ...experiences
                      .filter((exp) => exp.company || exp.position)
                      .flatMap((exp) => [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: exp.position || "CARGO",
                              bold: true,
                              size: 24,
                              allCaps: true,
                            }),
                          ],
                          spacing: { before: 200, after: 100 },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: exp.company || "Empresa",
                              bold: true,
                              size: 22,
                            }),
                            ...(exp.startDate
                              ? [
                                  new TextRun({
                                    text: ` | ${new Date(exp.startDate + "-01").toLocaleDateString("pt-BR", {
                                      month: "2-digit",
                                      year: "numeric",
                                    })} - ${
                                      exp.current
                                        ? "ATUAL"
                                        : exp.endDate
                                          ? new Date(exp.endDate + "-01").toLocaleDateString("pt-BR", {
                                              month: "2-digit",
                                              year: "numeric",
                                            })
                                          : "ATUAL"
                                    }`,
                                    bold: true,
                                    size: 20,
                                  }),
                                ]
                              : []),
                          ],
                          spacing: { after: 100 },
                        }),
                        ...(exp.description
                          ? exp.description.split("\n").map(
                              (line) =>
                                new Paragraph({
                                  children: [
                                    new TextRun({
                                      text: `• ${line}`,
                                      size: 22,
                                    }),
                                  ],
                                  indent: { left: 240 },
                                  spacing: { after: 100 },
                                }),
                            )
                          : []),
                      ]),
                  ]
                : []),

              // Formação Acadêmica
              ...(education.some((edu) => edu.institution || edu.degree)
                ? [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: "FORMAÇÃO ACADÊMICA",
                          bold: true,
                          size: 28,
                          allCaps: true,
                        }),
                      ],
                      heading: HeadingLevel.HEADING_2,
                      spacing: { before: 400, after: 200 },
                      border: {
                        bottom: {
                          color: "000000",
                          space: 1,
                          style: BorderStyle.SINGLE,
                          size: 6,
                        },
                      },
                    }),
                    ...education
                      .filter((edu) => edu.institution || edu.degree)
                      .flatMap((edu) => [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: `${edu.degree || "GRAU"}${edu.field ? ` EM ${edu.field.toUpperCase()}` : ""}`,
                              bold: true,
                              size: 24,
                            }),
                            ...(edu.startDate
                              ? [
                                  new TextRun({
                                    text: ` | ${new Date(edu.startDate + "-01").toLocaleDateString("pt-BR", {
                                      month: "2-digit",
                                      year: "numeric",
                                    })} - ${
                                      edu.current
                                        ? "EM ANDAMENTO"
                                        : edu.endDate
                                          ? new Date(edu.endDate + "-01").toLocaleDateString("pt-BR", {
                                              month: "2-digit",
                                              year: "numeric",
                                            })
                                          : "EM ANDAMENTO"
                                    }`,
                                    bold: true,
                                    size: 20,
                                  }),
                                ]
                              : []),
                          ],
                          spacing: { before: 200, after: 100 },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: edu.institution || "Instituição",
                              italics: true,
                              size: 22,
                            }),
                          ],
                          spacing: { after: 200 },
                        }),
                      ]),
                  ]
                : []),

              // Competências Técnicas
              ...(skills.length > 0
                ? [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: "COMPETÊNCIAS TÉCNICAS",
                          bold: true,
                          size: 28,
                          allCaps: true,
                        }),
                      ],
                      heading: HeadingLevel.HEADING_2,
                      spacing: { before: 400, after: 200 },
                      border: {
                        bottom: {
                          color: "000000",
                          space: 1,
                          style: BorderStyle.SINGLE,
                          size: 6,
                        },
                      },
                    }),
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: skills.join(" • "),
                          size: 22,
                        }),
                      ],
                      spacing: { after: 400 },
                    }),
                  ]
                : []),

              // Cursos e Certificações
              ...(courses.some((course) => course.name || course.institution)
                ? [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: "CURSOS E CERTIFICAÇÕES",
                          bold: true,
                          size: 28,
                          allCaps: true,
                        }),
                      ],
                      heading: HeadingLevel.HEADING_2,
                      spacing: { before: 400, after: 200 },
                      border: {
                        bottom: {
                          color: "000000",
                          space: 1,
                          style: BorderStyle.SINGLE,
                          size: 6,
                        },
                      },
                    }),
                    ...courses
                      .filter((course) => course.name || course.institution)
                      .flatMap((course) => [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: course.name || "Nome do Curso",
                              bold: true,
                              size: 22,
                            }),
                            ...(course.completionDate
                              ? [
                                  new TextRun({
                                    text: ` | ${new Date(course.completionDate + "-01").toLocaleDateString("pt-BR", {
                                      month: "2-digit",
                                      year: "numeric",
                                    })}`,
                                    bold: true,
                                    size: 20,
                                  }),
                                ]
                              : []),
                          ],
                          spacing: { before: 200, after: 100 },
                        }),
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: course.institution || "Instituição",
                              italics: true,
                              size: 20,
                            }),
                            ...(course.duration
                              ? [
                                  new TextRun({
                                    text: ` | Carga Horária: ${course.duration}`,
                                    size: 20,
                                  }),
                                ]
                              : []),
                          ],
                          spacing: { after: 200 },
                        }),
                      ]),
                  ]
                : []),

              // Idiomas
              ...(languages.some((lang) => lang.language || lang.level)
                ? [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: "IDIOMAS",
                          bold: true,
                          size: 28,
                          allCaps: true,
                        }),
                      ],
                      heading: HeadingLevel.HEADING_2,
                      spacing: { before: 400, after: 200 },
                      border: {
                        bottom: {
                          color: "000000",
                          space: 1,
                          style: BorderStyle.SINGLE,
                          size: 6,
                        },
                      },
                    }),
                    ...languages
                      .filter((lang) => lang.language || lang.level)
                      .map(
                        (language) =>
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: `${language.language || "Idioma"}: `,
                                bold: true,
                                size: 22,
                              }),
                              new TextRun({
                                text: language.level || "Nível",
                                size: 22,
                              }),
                            ],
                            spacing: { after: 100 },
                          }),
                      ),
                  ]
                : []),

              // Projetos Relevantes
              ...(projects.some((proj) => proj.name || proj.description)
                ? [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: "PROJETOS RELEVANTES",
                          bold: true,
                          size: 28,
                          allCaps: true,
                        }),
                      ],
                      heading: HeadingLevel.HEADING_2,
                      spacing: { before: 400, after: 200 },
                      border: {
                        bottom: {
                          color: "000000",
                          space: 1,
                          style: BorderStyle.SINGLE,
                          size: 6,
                        },
                      },
                    }),
                    ...projects
                      .filter((proj) => proj.name || proj.description)
                      .flatMap((project) => [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: project.name || "Nome do Projeto",
                              bold: true,
                              size: 24,
                              allCaps: true,
                            }),
                          ],
                          spacing: { before: 200, after: 100 },
                        }),
                        ...(project.description
                          ? [
                              new Paragraph({
                                children: [
                                  new TextRun({
                                    text: project.description,
                                    size: 22,
                                  }),
                                ],
                                alignment: AlignmentType.JUSTIFIED,
                                indent: { left: 240 },
                                spacing: { after: 100 },
                              }),
                            ]
                          : []),
                        ...(project.technologies
                          ? [
                              new Paragraph({
                                children: [
                                  new TextRun({
                                    text: "Tecnologias: ",
                                    bold: true,
                                    size: 20,
                                  }),
                                  new TextRun({
                                    text: project.technologies,
                                    size: 20,
                                  }),
                                ],
                                indent: { left: 240 },
                                spacing: { after: 100 },
                              }),
                            ]
                          : []),
                        ...(project.link
                          ? [
                              new Paragraph({
                                children: [
                                  new TextRun({
                                    text: "Link: ",
                                    bold: true,
                                    size: 20,
                                  }),
                                  new TextRun({
                                    text: project.link,
                                    size: 20,
                                  }),
                                ],
                                indent: { left: 240 },
                                spacing: { after: 200 },
                              }),
                            ]
                          : []),
                      ]),
                  ]
                : []),
            ],
          },
        ],
      })

      // Gerar e baixar o arquivo
      const buffer = await Packer.toBuffer(doc)
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      })

      // Usar saveAs corretamente
      if (typeof saveAs === "function") {
        saveAs(blob, fileName)
      } else {
        // Fallback manual se saveAs não funcionar
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = fileName
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      }
    } catch (error) {
      console.error("Erro ao gerar DOCX:", error)
      alert("Erro ao gerar arquivo DOCX. Tente novamente.")
    }
  }

  const handleToggleView = () => {
    if (isMobile) {
      setMobileView(mobileView === "form" ? "preview" : "form")
    } else {
      setShowPreview(!showPreview)
    }
  }

  const languageLevels = ["Básico", "Intermediário", "Avançado", "Fluente", "Nativo"]

  // Componente do currículo para reutilização
  const ResumeContent = () => (
    <div
      ref={resumeRef}
      className="bg-white p-8 border rounded-b-lg shadow-sm resume-printable-area"
      style={{
        fontFamily: '"Times New Roman", serif',
        fontSize: "12pt",
        lineHeight: "1.4",
        color: "black",
        maxWidth: "8.5in",
        minHeight: "11in",
        backgroundColor: "white",
      }}
    >
      {/* Cabeçalho */}
      <header className="text-center mb-6 pb-4" style={{ borderBottom: "2px solid #000" }}>
        <h1
          style={{
            fontSize: "18pt",
            fontWeight: "bold",
            marginBottom: "4pt",
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "black",
          }}
        >
          {personalInfo.fullName || "SEU NOME COMPLETO"}
        </h1>
        <h2
          style={{
            fontSize: "14pt",
            fontWeight: "normal",
            marginBottom: "8pt",
            fontStyle: "italic",
            color: "black",
          }}
        >
          {personalInfo.title || "Título Profissional"}
        </h2>

        {/* Informações de Contato */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            fontSize: "11pt",
            marginTop: "8pt",
            color: "black",
          }}
        >
          {personalInfo.email && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <strong>Email:</strong>&nbsp;{personalInfo.email}
            </div>
          )}
          {personalInfo.phone && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <strong>Telefone:</strong>&nbsp;{personalInfo.phone}
            </div>
          )}
          {personalInfo.location && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <strong>Endereço:</strong>&nbsp;{personalInfo.location}
            </div>
          )}
          {personalInfo.linkedin && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <strong>LinkedIn:</strong>&nbsp;{personalInfo.linkedin}
            </div>
          )}
        </div>
      </header>

      {/* Resumo Profissional */}
      {personalInfo.summary && (
        <section style={{ marginBottom: "16pt" }}>
          <h2
            style={{
              fontSize: "14pt",
              fontWeight: "bold",
              marginBottom: "6pt",
              textTransform: "uppercase",
              borderBottom: "1px solid #000",
              paddingBottom: "2pt",
              color: "black",
            }}
          >
            RESUMO PROFISSIONAL
          </h2>
          <p
            style={{
              textAlign: "justify",
              marginBottom: "0",
              fontSize: "11pt",
              color: "black",
            }}
          >
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Experiência Profissional */}
      {experiences.some((exp) => exp.company || exp.position) && (
        <section style={{ marginBottom: "16pt" }}>
          <h2
            style={{
              fontSize: "14pt",
              fontWeight: "bold",
              marginBottom: "8pt",
              textTransform: "uppercase",
              borderBottom: "1px solid #000",
              paddingBottom: "2pt",
              color: "black",
            }}
          >
            EXPERIÊNCIA PROFISSIONAL
          </h2>
          <div style={{ marginLeft: "0" }}>
            {experiences
              .filter((exp) => exp.company || exp.position)
              .map((exp, index) => (
                <article
                  key={exp.id}
                  style={{
                    marginBottom: index < experiences.filter((e) => e.company || e.position).length - 1 ? "12pt" : "0",
                    pageBreakInside: "avoid",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "4pt",
                    }}
                  >
                    <div style={{ flex: "1" }}>
                      <h3
                        style={{
                          fontSize: "12pt",
                          fontWeight: "bold",
                          marginBottom: "2pt",
                          textTransform: "uppercase",
                          color: "black",
                        }}
                      >
                        {exp.position || "CARGO"}
                      </h3>
                      <h4
                        style={{
                          fontSize: "11pt",
                          fontWeight: "bold",
                          marginBottom: "2pt",
                          color: "black",
                        }}
                      >
                        {exp.company || "Empresa"}
                      </h4>
                    </div>
                    <div
                      style={{
                        textAlign: "right",
                        fontSize: "10pt",
                        fontWeight: "bold",
                        minWidth: "120px",
                        color: "black",
                      }}
                    >
                      {exp.startDate && (
                        <time>
                          {new Date(exp.startDate + "-01").toLocaleDateString("pt-BR", {
                            month: "2-digit",
                            year: "numeric",
                          })}
                          {" - "}
                          {exp.current
                            ? "ATUAL"
                            : exp.endDate
                              ? new Date(exp.endDate + "-01").toLocaleDateString("pt-BR", {
                                  month: "2-digit",
                                  year: "numeric",
                                })
                              : "ATUAL"}
                        </time>
                      )}
                    </div>
                  </div>
                  {exp.description && (
                    <div
                      style={{
                        fontSize: "11pt",
                        textAlign: "justify",
                        marginTop: "4pt",
                        paddingLeft: "12pt",
                        color: "black",
                      }}
                    >
                      {exp.description.split("\n").map((line, i) => (
                        <p key={i} style={{ marginBottom: "4pt", color: "black" }}>
                          • {line}
                        </p>
                      ))}
                    </div>
                  )}
                </article>
              ))}
          </div>
        </section>
      )}

      {/* Educação */}
      {education.some((edu) => edu.institution || edu.degree) && (
        <section style={{ marginBottom: "16pt" }}>
          <h2
            style={{
              fontSize: "14pt",
              fontWeight: "bold",
              marginBottom: "8pt",
              textTransform: "uppercase",
              borderBottom: "1px solid #000",
              paddingBottom: "2pt",
              color: "black",
            }}
          >
            FORMAÇÃO ACADÊMICA
          </h2>
          <div>
            {education
              .filter((edu) => edu.institution || edu.degree)
              .map((edu, index) => (
                <article
                  key={edu.id}
                  style={{
                    marginBottom: index < education.filter((e) => e.institution || e.degree).length - 1 ? "8pt" : "0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ flex: "1" }}>
                      <h3
                        style={{
                          fontSize: "12pt",
                          fontWeight: "bold",
                          marginBottom: "2pt",
                          color: "black",
                        }}
                      >
                        {edu.degree || "GRAU"} {edu.field && `EM ${edu.field.toUpperCase()}`}
                      </h3>
                      <h4
                        style={{
                          fontSize: "11pt",
                          fontWeight: "normal",
                          fontStyle: "italic",
                          color: "black",
                        }}
                      >
                        {edu.institution || "Instituição"}
                      </h4>
                    </div>
                    <div
                      style={{
                        textAlign: "right",
                        fontSize: "10pt",
                        fontWeight: "bold",
                        minWidth: "120px",
                        color: "black",
                      }}
                    >
                      {edu.startDate && (
                        <time>
                          {new Date(edu.startDate + "-01").toLocaleDateString("pt-BR", {
                            month: "2-digit",
                            year: "numeric",
                          })}
                          {" - "}
                          {edu.current
                            ? "EM ANDAMENTO"
                            : edu.endDate
                              ? new Date(edu.endDate + "-01").toLocaleDateString("pt-BR", {
                                  month: "2-digit",
                                  year: "numeric",
                                })
                              : "EM ANDAMENTO"}
                        </time>
                      )}
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </section>
      )}

      {/* Habilidades */}
      {skills.length > 0 && (
        <section style={{ marginBottom: "16pt" }}>
          <h2
            style={{
              fontSize: "14pt",
              fontWeight: "bold",
              marginBottom: "6pt",
              textTransform: "uppercase",
              borderBottom: "1px solid #000",
              paddingBottom: "2pt",
              color: "black",
            }}
          >
            COMPETÊNCIAS TÉCNICAS
          </h2>
          <div
            style={{
              fontSize: "11pt",
              lineHeight: "1.6",
              color: "black",
            }}
          >
            {skills.join(" • ")}
          </div>
        </section>
      )}

      {/* Cursos Complementares */}
      {courses.some((course) => course.name || course.institution) && (
        <section style={{ marginBottom: "16pt" }}>
          <h2
            style={{
              fontSize: "14pt",
              fontWeight: "bold",
              marginBottom: "8pt",
              textTransform: "uppercase",
              borderBottom: "1px solid #000",
              paddingBottom: "2pt",
              color: "black",
            }}
          >
            CURSOS E CERTIFICAÇÕES
          </h2>
          <div>
            {courses
              .filter((course) => course.name || course.institution)
              .map((course, index) => (
                <article
                  key={course.id}
                  style={{
                    marginBottom: index < courses.filter((c) => c.name || c.institution).length - 1 ? "8pt" : "0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ flex: "1" }}>
                      <h3
                        style={{
                          fontSize: "11pt",
                          fontWeight: "bold",
                          marginBottom: "2pt",
                          color: "black",
                        }}
                      >
                        {course.name || "Nome do Curso"}
                      </h3>
                      <h4
                        style={{
                          fontSize: "10pt",
                          fontWeight: "normal",
                          fontStyle: "italic",
                          marginBottom: "2pt",
                          color: "black",
                        }}
                      >
                        {course.institution || "Instituição"}
                      </h4>
                      {course.duration && (
                        <p
                          style={{
                            fontSize: "10pt",
                            margin: "0",
                            color: "black",
                          }}
                        >
                          Carga Horária: {course.duration}
                        </p>
                      )}
                    </div>
                    <div
                      style={{
                        textAlign: "right",
                        fontSize: "10pt",
                        fontWeight: "bold",
                        minWidth: "80px",
                        color: "black",
                      }}
                    >
                      {course.completionDate && (
                        <time>
                          {new Date(course.completionDate + "-01").toLocaleDateString("pt-BR", {
                            month: "2-digit",
                            year: "numeric",
                          })}
                        </time>
                      )}
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </section>
      )}

      {/* Idiomas */}
      {languages.some((lang) => lang.language || lang.level) && (
        <section style={{ marginBottom: "16pt" }}>
          <h2
            style={{
              fontSize: "14pt",
              fontWeight: "bold",
              marginBottom: "6pt",
              textTransform: "uppercase",
              borderBottom: "1px solid #000",
              paddingBottom: "2pt",
              color: "black",
            }}
          >
            IDIOMAS
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "8pt",
              fontSize: "11pt",
              color: "black",
            }}
          >
            {languages
              .filter((lang) => lang.language || lang.level)
              .map((language) => (
                <div
                  key={language.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontWeight: "bold", color: "black" }}>{language.language || "Idioma"}:</span>
                  <span style={{ color: "black" }}>{language.level || "Nível"}</span>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Projetos */}
      {projects.some((proj) => proj.name || proj.description) && (
        <section style={{ marginBottom: "16pt" }}>
          <h2
            style={{
              fontSize: "14pt",
              fontWeight: "bold",
              marginBottom: "8pt",
              textTransform: "uppercase",
              borderBottom: "1px solid #000",
              paddingBottom: "2pt",
              color: "black",
            }}
          >
            PROJETOS RELEVANTES
          </h2>
          <div>
            {projects
              .filter((proj) => proj.name || proj.description)
              .map((project, index) => (
                <article
                  key={project.id}
                  style={{
                    marginBottom: index < projects.filter((p) => p.name || p.description).length - 1 ? "12pt" : "0",
                    pageBreakInside: "avoid",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "12pt",
                      fontWeight: "bold",
                      marginBottom: "4pt",
                      textTransform: "uppercase",
                      color: "black",
                    }}
                  >
                    {project.name || "Nome do Projeto"}
                  </h3>
                  {project.description && (
                    <p
                      style={{
                        fontSize: "11pt",
                        textAlign: "justify",
                        marginBottom: "4pt",
                        paddingLeft: "12pt",
                        color: "black",
                      }}
                    >
                      {project.description}
                    </p>
                  )}
                  {project.technologies && (
                    <p
                      style={{
                        fontSize: "10pt",
                        marginBottom: "2pt",
                        paddingLeft: "12pt",
                        color: "black",
                      }}
                    >
                      <strong>Tecnologias:</strong> {project.technologies}
                    </p>
                  )}
                  {project.link && (
                    <p
                      style={{
                        fontSize: "10pt",
                        marginBottom: "0",
                        paddingLeft: "12pt",
                        wordBreak: "break-all",
                        color: "black",
                      }}
                    >
                      <strong>Link:</strong> {project.link}
                    </p>
                  )}
                </article>
              ))}
          </div>
        </section>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="mb-8 text-center no-print">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                Groven
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

        {/* Controle de Preview */}
        <div className="flex justify-center mb-6 no-print">
          <Button
            onClick={handleToggleView}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            size="lg"
          >
            {isMobile ? (
              <>
                <Smartphone className="h-5 w-5 mr-2" />
                {mobileView === "form" ? "Ver Preview" : "Editar Dados"}
              </>
            ) : (
              <>
                {showPreview ? <EyeOff className="h-5 w-5 mr-2" /> : <Eye className="h-5 w-5 mr-2" />}
                {showPreview ? "Ocultar Preview" : "Mostrar Preview"}
              </>
            )}
          </Button>
        </div>

        {/* Layout Responsivo */}
        <div
          className={`${
            isMobile ? "block" : showPreview ? "grid lg:grid-cols-2 gap-8" : "grid grid-cols-1 max-w-4xl mx-auto"
          }`}
        >
          {/* Formulário */}
          <div className={`space-y-8 no-print ${isMobile && mobileView === "preview" ? "hidden" : "block"}`}>
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
          {((isMobile && mobileView === "preview") || (!isMobile && showPreview)) && (
            <div className={`${isMobile ? "mt-8" : "lg:sticky lg:top-4"}`}>
              <Card className="h-fit border-0 shadow-2xl bg-white backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between no-print bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-t-lg">
                  <CardTitle className="text-xl">Preview do Currículo</CardTitle>
                </CardHeader>
                <CardContent className="print:p-0 p-0">
                  <ResumeContent />
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Seção de Finalização */}
        <div className="mt-16 mb-8 no-print">
          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg text-center">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                <CheckCircle className="h-8 w-8" />
                Finalizar Currículo
              </CardTitle>
              <CardDescription className="text-green-100 text-lg">
                Seu currículo está pronto! Escolha o formato para download
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Button
                  onClick={handleDownloadPdf}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg"
                  size="lg"
                >
                  <Download className="h-6 w-6 mr-3" />
                  Baixar PDF
                </Button>
                <Button
                  onClick={handleDownloadDocx}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg"
                  size="lg"
                >
                  <FileText className="h-6 w-6 mr-3" />
                  Baixar DOCX
                </Button>
              </div>
              <div className="mt-6 text-center text-sm text-gray-600">
                <p>
                  <strong>PDF:</strong> Ideal para envio por email e impressão
                  <br />
                  <strong>DOCX:</strong> Compatível com Word, Google Docs e outros editores
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

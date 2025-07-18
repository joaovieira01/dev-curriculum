# 🤝 Guia de Contribuição

Obrigado por considerar contribuir com o **Criador de Currículos Profissional**! Este documento fornece diretrizes para contribuições.

## 📋 Índice

- [Como Contribuir](#como-contribuir)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Padrões de Código](#padrões-de-código)
- [Processo de Pull Request](#processo-de-pull-request)
- [Reportando Bugs](#reportando-bugs)
- [Sugerindo Funcionalidades](#sugerindo-funcionalidades)

## 🚀 Como Contribuir

### 1. **Fork do Repositório**
\`\`\`bash
# Clone seu fork
git clone https://github.com/SEU_USUARIO/automated-cv-website.git
cd automated-cv-website
\`\`\`

### 2. **Configuração do Ambiente**
\`\`\`bash
# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
\`\`\`

### 3. **Crie uma Branch**
\`\`\`bash
# Para nova funcionalidade
git checkout -b feature/nome-da-funcionalidade

# Para correção de bug
git checkout -b fix/nome-do-bug

# Para melhorias
git checkout -b improvement/nome-da-melhoria
\`\`\`

### 4. **Faça suas Alterações**
- Siga os padrões de código estabelecidos
- Adicione comentários quando necessário
- Teste suas alterações

### 5. **Commit e Push**
\`\`\`bash
# Adicione os arquivos
git add .

# Commit com mensagem descritiva
git commit -m "feat: adiciona nova funcionalidade X"

# Push para sua branch
git push origin feature/nome-da-funcionalidade
\`\`\`

### 6. **Abra um Pull Request**
- Descreva claramente as mudanças
- Referencie issues relacionadas
- Adicione screenshots se aplicável

## 🛠️ Configuração do Ambiente

### **Pré-requisitos**
- Node.js 18+ 
- npm 8+
- Git

### **Instalação**
\`\`\`bash
# Clone o repositório
git clone https://github.com/joaovieira01/automated-cv-website.git

# Entre no diretório
cd automated-cv-website

# Instale dependências
npm install

# Execute o projeto
npm run dev
\`\`\`

### **Scripts Disponíveis**
\`\`\`bash
npm run dev        # Desenvolvimento
npm run build      # Build de produção
npm run start      # Servidor de produção
npm run lint       # Verificação de código
npm run type-check # Verificação de tipos
\`\`\`

## 📝 Padrões de Código

### **TypeScript**
- Use TypeScript para todos os arquivos
- Defina interfaces para objetos complexos
- Use tipos explícitos quando necessário

### **React/Next.js**
- Use componentes funcionais
- Implemente hooks adequadamente
- Siga as convenções do Next.js App Router

### **Estilização**
- Use Tailwind CSS para estilização
- Mantenha classes organizadas
- Use componentes shadcn/ui quando possível

### **Nomenclatura**
- **Arquivos**: kebab-case (`resume-builder.tsx`)
- **Componentes**: PascalCase (`ResumeBuilder`)
- **Variáveis**: camelCase (`personalInfo`)
- **Constantes**: UPPER_CASE (`LANGUAGE_LEVELS`)

### **Estrutura de Arquivos**
\`\`\`
app/
├── globals.css
├── layout.tsx
└── page.tsx
components/
├── ui/
│   ├── button.tsx
│   ├── card.tsx
│   └── ...
└── ...
lib/
└── utils.ts
\`\`\`

## 🔄 Processo de Pull Request

### **Checklist antes do PR**
- [ ] Código testado localmente
- [ ] Sem erros de TypeScript
- [ ] Sem warnings de ESLint
- [ ] Funcionalidade documentada
- [ ] Screenshots adicionadas (se UI)

### **Template de PR**
\`\`\`markdown
## 📋 Descrição
Breve descrição das mudanças realizadas.

## 🔧 Tipo de Mudança
- [ ] Bug fix
- [ ] Nova funcionalidade
- [ ] Melhoria
- [ ] Documentação

## 🧪 Como Testar
1. Passos para testar
2. Cenários específicos
3. Resultados esperados

## 📸 Screenshots
(Se aplicável)

## 📝 Checklist
- [ ] Código testado
- [ ] Documentação atualizada
- [ ] Sem breaking changes
\`\`\`

## 🐛 Reportando Bugs

### **Template de Bug Report**
\`\`\`markdown
## 🐛 Descrição do Bug
Descrição clara e concisa do problema.

## 🔄 Passos para Reproduzir
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

## ✅ Comportamento Esperado
O que deveria acontecer.

## 📱 Ambiente
- OS: [ex: Windows 10]
- Browser: [ex: Chrome 91]
- Versão: [ex: 1.0.0]

## 📸 Screenshots
(Se aplicável)
\`\`\`

## 💡 Sugerindo Funcionalidades

### **Template de Feature Request**
\`\`\`markdown
## 🚀 Funcionalidade Sugerida
Descrição clara da funcionalidade.

## 🎯 Problema Resolvido
Que problema esta funcionalidade resolve?

## 💭 Solução Proposta
Como você imagina que funcione?

## 🔄 Alternativas Consideradas
Outras soluções que você considerou?

## 📋 Contexto Adicional
Informações extras relevantes.
\`\`\`

## 🏷️ Áreas de Contribuição

### **🎨 Frontend/UI**
- Novos templates de currículo
- Melhorias na interface
- Responsividade
- Acessibilidade

### **⚡ Funcionalidades**
- Exportação em diferentes formatos
- Sistema de templates
- Integração com APIs
- Salvamento local

### **🔧 Backend/Infraestrutura**
- Otimizações de performance
- SEO improvements
- Analytics
- Monitoramento

### **📚 Documentação**
- README improvements
- Guias de uso
- Tutoriais
- Tradução

### **🧪 Testes**
- Testes unitários
- Testes de integração
- Testes E2E
- Testes de acessibilidade

## 📞 Comunicação

### **Canais Disponíveis**
- **Issues**: Para bugs e funcionalidades
- **Discussions**: Para ideias e dúvidas
- **Email**: Para contato direto

### **Diretrizes de Comunicação**
- Seja respeitoso e construtivo
- Use linguagem clara e objetiva
- Forneça contexto suficiente
- Seja paciente com respostas

## 🎉 Reconhecimento

Todos os contribuidores serão reconhecidos:
- Nome no README
- Menção em releases
- Badge de contribuidor

## 📄 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença MIT do projeto.

---

**Obrigado por contribuir! 🙏**

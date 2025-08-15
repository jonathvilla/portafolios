import jsPDF from 'jspdf';

export const generateCV = () => {
  const doc = new jsPDF();
  
  // Configuración de colores
  const primaryColor = [37, 99, 235]; // #2563eb
  const secondaryColor = [124, 58, 237]; // #7c3aed
  const darkColor = [15, 23, 42]; // #0f172a
  const grayColor = [100, 116, 139]; // #64748b

  // Título principal
  doc.setFontSize(28);
  doc.setTextColor(...primaryColor);
  doc.text('JONATH MERCADO', 105, 30, { align: 'center' });
  
  // Subtítulo
  doc.setFontSize(16);
  doc.setTextColor(...secondaryColor);
  doc.text('Desarrollador Full Stack', 105, 40, { align: 'center' });
  
  // Línea decorativa
  doc.setDrawColor(...primaryColor);
  doc.setLineWidth(2);
  doc.line(20, 50, 190, 50);
  
  // Información de contacto
  doc.setFontSize(11);
  doc.setTextColor(...grayColor);
  doc.text('📧 jonath@example.com  |  📱 +1 234 567 8900  |  🌐 github.com/jonath  |  💼 linkedin.com/in/jonath', 105, 60, { align: 'center' });
  
  // Perfil Profesional
  doc.setFontSize(14);
  doc.setTextColor(...primaryColor);
  doc.text('PERFIL PROFESIONAL', 20, 80);
  
  doc.setDrawColor(...primaryColor);
  doc.setLineWidth(0.5);
  doc.line(20, 85, 60, 85);
  
  doc.setFontSize(10);
  doc.setTextColor(...darkColor);
  const profileText = `Desarrollador Full Stack apasionado por la innovación digital con más de 2 años de experiencia 
en desarrollo web moderno. Especializado en React, Node.js e inteligencia artificial. 
Comprometido con crear soluciones escalables y experiencias de usuario excepcionales.`;
  
  const profileLines = doc.splitTextToSize(profileText, 170);
  doc.text(profileLines, 20, 95);
  
  // Experiencia
  doc.setFontSize(14);
  doc.setTextColor(...primaryColor);
  doc.text('EXPERIENCIA PROFESIONAL', 20, 125);
  
  doc.setDrawColor(...primaryColor);
  doc.line(20, 130, 80, 130);
  
  doc.setFontSize(12);
  doc.setTextColor(...darkColor);
  doc.text('Desarrollador Full Stack Freelance', 20, 140);
  
  doc.setFontSize(10);
  doc.setTextColor(...grayColor);
  doc.text('2022 - Presente', 20, 150);
  
  doc.setFontSize(9);
  doc.setTextColor(...darkColor);
  const expText = `• Desarrollo de aplicaciones web responsivas utilizando React, JavaScript y CSS3
• Implementación de APIs RESTful con Node.js y Express
• Gestión de bases de datos SQL y NoSQL (MongoDB, PostgreSQL)
• Colaboración en proyectos de inteligencia artificial y automatización
• Optimización de rendimiento y SEO en aplicaciones web`;
  
  const expLines = doc.splitTextToSize(expText, 170);
  doc.text(expLines, 20, 160);
  
  // Habilidades Técnicas
  doc.setFontSize(14);
  doc.setTextColor(...primaryColor);
  doc.text('HABILIDADES TÉCNICAS', 20, 200);
  
  doc.setDrawColor(...primaryColor);
  doc.line(20, 205, 70, 205);
  
  doc.setFontSize(10);
  doc.setTextColor(...darkColor);
  
  // Frontend
  doc.text('Frontend:', 20, 220);
  doc.setTextColor(...grayColor);
  doc.text('React, JavaScript/TypeScript, HTML5, CSS3, Tailwind CSS, Next.js', 45, 220);
  
  // Backend
  doc.setTextColor(...darkColor);
  doc.text('Backend:', 20, 230);
  doc.setTextColor(...grayColor);
  doc.text('Node.js, Express, Python, Django, APIs RESTful', 45, 230);
  
  // Bases de datos
  doc.setTextColor(...darkColor);
  doc.text('Bases de datos:', 20, 240);
  doc.setTextColor(...grayColor);
  doc.text('MongoDB, PostgreSQL, MySQL, Redis', 55, 240);
  
  // Herramientas
  doc.setTextColor(...darkColor);
  doc.text('Herramientas:', 20, 250);
  doc.setTextColor(...grayColor);
  doc.text('Git, Docker, Webpack, Vite, VS Code, Figma', 50, 250);
  
  // Proyectos Destacados
  doc.setFontSize(14);
  doc.setTextColor(...primaryColor);
  doc.text('PROYECTOS DESTACADOS', 110, 125);
  
  doc.setDrawColor(...primaryColor);
  doc.line(110, 130, 170, 130);
  
  // Proyecto 1
  doc.setFontSize(11);
  doc.setTextColor(...darkColor);
  doc.text('Portfolio Interactivo', 110, 140);
  
  doc.setFontSize(9);
  doc.setTextColor(...grayColor);
  const project1Text = `Aplicación web moderna con animaciones 
fluidas, efectos interactivos y diseño 
responsivo utilizando React y CSS3.`;
  
  const project1Lines = doc.splitTextToSize(project1Text, 80);
  doc.text(project1Lines, 110, 150);
  
  // Proyecto 2
  doc.setFontSize(11);
  doc.setTextColor(...darkColor);
  doc.text('Sistema de Gestión', 110, 175);
  
  doc.setFontSize(9);
  doc.setTextColor(...grayColor);
  const project2Text = `API completa con autenticación, CRUD 
de usuarios y dashboard administrativo 
con Node.js y MongoDB.`;
  
  const project2Lines = doc.splitTextToSize(project2Text, 80);
  doc.text(project2Lines, 110, 185);
  
  // Educación
  doc.setFontSize(14);
  doc.setTextColor(...primaryColor);
  doc.text('EDUCACIÓN', 110, 210);
  
  doc.setDrawColor(...primaryColor);
  doc.line(110, 215, 140, 215);
  
  doc.setFontSize(10);
  doc.setTextColor(...darkColor);
  doc.text('Autodidacta - Desarrollo Web', 110, 225);
  doc.setTextColor(...grayColor);
  doc.text('2022 - Presente', 110, 235);
  
  doc.setFontSize(9);
  const eduText = `Aprendizaje continuo a través de 
cursos online, documentación 
oficial y proyectos prácticos.`;
  
  const eduLines = doc.splitTextToSize(eduText, 80);
  doc.text(eduLines, 110, 245);
  
  // Footer
  doc.setFontSize(8);
  doc.setTextColor(...grayColor);
  doc.text('Generado automáticamente desde mi portafolio web - Jonath Mercado', 105, 280, { align: 'center' });
  
  return doc;
};

export const downloadCV = () => {
  const doc = generateCV();
  doc.save('Jonath_Mercado_CV.pdf');
};
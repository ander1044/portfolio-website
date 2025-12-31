import {
  Shield,
  Lock,
  Bug,
  Network,
  Award,
  Mail,
  Linkedin,
  Github,
  Terminal,
  Database,
  Cloud,
  Smartphone,
  Code,
  GraduationCap,
  Users,
} from "lucide-react";

export default function CyberSecurityPortfolio() {
  const skills = [
    {
      icon: Shield,
      title: "Penetration Testing",
      description: "Web & network security assessments",
    },
    {
      icon: Bug,
      title: "Vulnerability Analysis",
      description: "Identifying and mitigating security flaws",
    },
    {
      icon: Network,
      title: "Network Security",
      description: "Firewall configuration & monitoring",
    },
    {
      icon: Lock,
      title: "Cryptography",
      description: "Encryption & secure communications",
    },
    {
      icon: Terminal,
      title: "Security Automation",
      description: "Python scripting & tool development",
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "AWS, Azure security architecture",
    },
    {
      icon: Smartphone,
      title: "MDM & Mobile Security",
      description: "Mobile device management & hardware security",
    },
    {
      icon: Code,
      title: "API Penetration Testing",
      description: "REST/GraphQL API security assessment",
    },
  ];

  const projects = [
    {
      title: "Enterprise Network Penetration Test",
      description:
        "Conducted comprehensive security assessment identifying 47 vulnerabilities including 12 critical issues.",
      tags: ["Penetration Testing", "Network Security", "Reporting"],
    },
    {
      title: "Mobile Device Management Security Audit",
      description:
        "Performed comprehensive MDM security assessment for enterprise deployment, uncovering critical vulnerabilities in mobile hardware configurations and policy enforcement.",
      tags: ["MDM", "Mobile Security", "Hardware Security"],
    },
    {
      title: "API Security Assessment",
      description:
        "Conducted penetration testing on RESTful and GraphQL APIs for various applications, identifying authentication bypasses and data exposure risks.",
      tags: ["API Security", "Penetration Testing", "OWASP"],
    },
    {
      title: "Custom SIEM Integration",
      description:
        "Developed automated threat detection system integrating multiple security tools, reducing incident response time by 60%.",
      tags: ["Automation", "Python", "SIEM"],
    },
    {
      title: "Web Application Security Audit",
      description:
        "Performed OWASP Top 10 assessment on e-commerce platform, implementing fixes that prevented potential data breach.",
      tags: ["Web Security", "OWASP", "Remediation"],
    },
    {
      title: "Incident Response Framework",
      description:
        "Designed and implemented IR playbooks for mid-size organization, improving mean time to resolution by 45%.",
      tags: ["Incident Response", "Documentation", "Process"],
    },
  ];

  const certifications = [
    "Microsoft Azure AZ-900",
    "API Penetration testing certification",
    "Google Cybersecurity",
    "Cisco Ethical Hacking",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 text-teal-400" />
                <span className="text-teal-400 text-sm font-medium">
                  Cybersecurity Professional
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-space-grotesk">
                Securing Digital
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                  Infrastructure
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                Full-stack technologist with 5+ years of experience across
                software development, DevOps/infrastructure, and cybersecurity.
                Specialized in offensive security, vulnerability assessment,
                MDM/mobile hardware security, API penetration testing, and
                cybersecurity education at leading institutions and
                corporations.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all"
                >
                  View Projects
                </a>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl absolute -inset-4"></div>
                <div className="relative">
                  <img
                    src="https://drive.google.com/thumbnail?id=10dhSlb3GAf039ulNyS3xA4NlYnOvXF7Q"
                    alt="Cybersecurity Professional"
                    className="w-80 h-80 rounded-2xl object-cover border-4 border-teal-500/30 shadow-2xl shadow-teal-500/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-space-grotesk">
              Areas of Expertise
            </h2>
            <p className="text-slate-400 text-lg">
              Comprehensive security skills across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-teal-500/50 transition-all group"
                >
                  <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-slate-400">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-space-grotesk">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-lg">
              Recent security engagements and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-teal-500/50 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-teal-500/10 border border-teal-500/30 text-teal-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Teaching Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full mb-6">
              <GraduationCap className="w-8 h-8 text-teal-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-space-grotesk">
              Tech Education & Training
            </h2>
            <p className="text-slate-400 text-lg">
              Empowering the next generation of cybersecurity professionals
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 w-20 h-20 rounded-2xl flex items-center justify-center">
                    <Users className="w-10 h-10 text-teal-400" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Cybersecurity Instructor & Educator
                  </h3>
                  <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                    Passionate about sharing knowledge and building
                    cybersecurity skills in students and professionals. Teaching
                    comprehensive courses covering offensive security, defensive
                    tactics, and real-world threat scenarios.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                      <h4 className="text-teal-400 font-semibold mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Course Topics
                      </h4>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Penetration Testing Fundamentals</li>
                        <li>• Mobile Device Management Security</li>
                        <li>• API Security & Testing</li>
                        <li>• Network Security Architecture</li>
                        <li>• Incident Response & Forensics</li>
                      </ul>
                    </div>

                    <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                      <h4 className="text-teal-400 font-semibold mb-3 flex items-center gap-2">
                        <Terminal className="w-5 h-5" />
                        Training Approach
                      </h4>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Hands-on lab environments</li>
                        <li>• Real-world attack scenarios</li>
                        <li>• Industry certification prep</li>
                        <li>• Capture the Flag exercises</li>
                        <li>• Live demonstrations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutions & Partnerships Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-space-grotesk">
              Trusted by Leading Organizations
            </h2>
            <p className="text-slate-400 text-lg">
              Delivering cybersecurity education and training to universities
              and enterprises worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Universities */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-teal-500/50 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 w-12 h-12 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Universities & Colleges
                </h3>
              </div>
              <p className="text-slate-300 mb-6">
                Partnering with top-tier academic institutions to deliver
                cutting-edge cybersecurity curriculum and hands-on training to
                students.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Harvard University</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>UC Berkeley</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Columbia Engineering</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>University of Sydney</span>
                </div>
              </div>
            </div>

            {/* Corporations */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-teal-500/50 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 w-12 h-12 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Corporate Partners
                </h3>
              </div>
              <p className="text-slate-300 mb-6">
                Working with tech leaders to upskill teams in advanced security
                practices and threat mitigation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Amazon</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Correlation One</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Edx</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>2U</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full mb-6">
              <Award className="w-8 h-8 text-teal-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-space-grotesk">
              Certifications
            </h2>
            <p className="text-slate-400 text-lg">
              Industry-recognized credentials
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 flex items-center gap-4 hover:border-teal-500/50 transition-all"
              >
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span className="text-white text-lg font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-space-grotesk">
            Let's Work Together
          </h2>
          <p className="text-slate-300 text-lg mb-12">
            Available for security consulting, penetration testing, and security
            architecture projects.
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="mailto:anda.ben@icloud.com"
              className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white px-6 py-4 rounded-lg hover:border-teal-500/50 transition-all"
            >
              <Mail className="w-5 h-5 text-teal-400" />
              <span>anda.ben@icloud.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/anda-ben-249472175/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white px-6 py-4 rounded-lg hover:border-teal-500/50 transition-all"
            >
              <Linkedin className="w-5 h-5 text-teal-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/ander1044"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white px-6 py-4 rounded-lg hover:border-teal-500/50 transition-all"
            >
              <Github className="w-5 h-5 text-teal-400" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
          <p>© 2025 Cybersecurity Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
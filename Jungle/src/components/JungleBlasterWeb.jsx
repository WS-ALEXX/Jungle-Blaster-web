import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Book, Code, Gamepad2, Users, Target, Zap, ChevronDown, Github, Mail, Linkedin, Play, Star, Award, TrendingUp } from 'lucide-react';


export default function JungleBlasterWeb() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-950 to-amber-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-xl shadow-2xl border-b border-emerald-500/20' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <Gamepad2 className="text-emerald-400 transform group-hover:rotate-12 transition-transform" size={36} />
                <div className="absolute inset-0 bg-emerald-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
                  JUNGLE BLASTER
                </h1>
                <p className="text-xs text-slate-400">2025 Edition</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'resumen', label: 'Resumen' },
                { id: 'diseño', label: 'Diseño' },
                { id: 'base-datos', label: 'Base de Datos' },
                { id: 'desarrollo', label: 'Desarrollo' },
                { id: 'descarga', label: 'Descarga' }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 rounded-lg transition-all font-medium ${
                    activeSection === section.id 
                      ? 'bg-emerald-500/20 text-emerald-400' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2 pb-4 animate-in slide-in-from-top">
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'resumen', label: 'Resumen' },
                { id: 'diseño', label: 'Diseño' },
                { id: 'base-datos', label: 'Base de Datos' },
                { id: 'desarrollo', label: 'Desarrollo' },
                { id: 'descarga', label: 'Descarga' }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all"
                >
                  {section.label}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-amber-500/20 backdrop-blur-sm border border-emerald-500/30 px-6 py-2 rounded-full font-semibold mb-8 animate-in fade-in slide-in-from-bottom">
            <Star className="text-amber-400" size={16} />
            <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
              ARCADE 2D • RUN AND GUN • PIXEL ART
            </span>
            <Star className="text-amber-400" size={16} />
          </div>
          
          <h2 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-amber-400 bg-clip-text text-transparent drop-shadow-2xl">
              JUNGLE
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-2xl">
              BLASTER
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Sumérgete en una aventura épica a través de la jungla más peligrosa. 
            <span className="text-emerald-400 font-semibold"> Elimina enemigos</span>, 
            <span className="text-amber-400 font-semibold"> supera obstáculos</span> y 
            <span className="text-green-400 font-semibold"> recolecta monedas</span> en tu camino hacia la victoria.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection('descarga')}
              className="group relative bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-emerald-500/50 flex items-center gap-3"
            >
              <Download size={24} />
              Descargar Demo
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
            </button>
            
            <button
              onClick={() => scrollToSection('resumen')}
              className="bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 hover:border-emerald-500/50 text-white font-bold py-4 px-10 rounded-xl transition-all hover:bg-slate-800/80 flex items-center gap-3"
            >
              <Book size={24} />
              Ver Documentación
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Gamepad2, label: 'Género', value: 'Run & Gun', color: 'emerald' },
              { icon: Target, label: 'Estilo', value: 'Pixel Art', color: 'amber' },
              { icon: Users, label: 'Jugadores', value: 'Single Player', color: 'green' },
              { icon: Award, label: 'Plataforma', value: 'PC Windows', color: 'yellow' }
            ].map((stat, i) => (
              <div key={i} className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all hover:transform hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/5 to-${stat.color}-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <stat.icon className={`text-${stat.color}-400 mx-auto mb-3 group-hover:scale-110 transition-transform`} size={32} />
                <h3 className="text-slate-400 text-sm font-semibold mb-1">{stat.label}</h3>
                <p className="text-white font-bold">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-emerald-400" size={32} />
          </div>
        </div>
      </section>

      {/* Resumen Ejecutivo */}
      <section id="resumen" className="relative py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl border border-emerald-500/30">
              <Book className="text-emerald-400" size={32} />
            </div>
            <div>
              <h2 className="text-5xl font-black bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Resumen Ejecutivo
              </h2>
              <p className="text-slate-400 mt-1">Visión general del proyecto</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <TrendingUp className="text-emerald-400" size={24} />
                  Alcance del Proyecto
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  <span className="font-semibold text-emerald-400">Jungle Blaster</span> es un videojuego de acción 2D desarrollado en Unity que combina mecánicas clásicas de plataformas con un diseño moderno. El proyecto integra una arquitectura completa de persistencia de datos usando SQLite.
                </p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-amber-500/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Code className="text-amber-400" size={24} />
                  Tecnología
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Desarrollado con <span className="font-semibold text-amber-400">Unity Engine</span>, utilizando C# para la lógica del juego y SQLite para la gestión de datos. El sistema de persistencia garantiza el guardado de progreso, puntajes y mejoras.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 mb-8">
            <div className="flex items-start gap-4 p-6 bg-amber-500/10 border-l-4 border-amber-500 rounded-lg">
              <Zap className="text-amber-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-xl font-bold text-amber-400 mb-2">Estado Actual del Desarrollo</h4>
                <p className="text-slate-300">
                  El proyecto se encuentra en <strong>fase temprana de desarrollo</strong>, centrado en la construcción de mecánicas básicas y validación del concepto. La arquitectura de base de datos está diseñada anticipadamente para garantizar escalabilidad en futuras versiones comerciales.
                </p>
              </div>
            </div>
          </div>

          {/* Project Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Título', value: 'Jungle Blaster', icon: Gamepad2 },
              { label: 'Género', value: 'Plataformas 2D, Acción', icon: Target },
              { label: 'Estilo', value: 'Pixel Art Retro', icon: Star },
              { label: 'Público', value: 'Jugadores Casuales', icon: Users }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/30">
                <item.icon className="text-emerald-400 mb-3" size={24} />
                <p className="text-slate-400 text-sm mb-1">{item.label}</p>
                <p className="text-white font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diseño del Juego */}
      <section id="diseño" className="relative py-32 px-6 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl border border-amber-500/30">
              <Zap className="text-amber-400" size={32} />
            </div>
            <div>
              <h2 className="text-5xl font-black bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Diseño del Juego
              </h2>
              <p className="text-slate-400 mt-1">Mecánicas, narrativa y experiencia</p>
            </div>
          </div>

          {/* Narrativa */}
          <div className="mb-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-10 rounded-2xl border border-slate-700/50">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Book className="text-amber-400" size={28} />
              Narrativa y Ambientación
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-green-500/10 rounded-xl border border-emerald-500/20">
                <h4 className="text-lg font-bold text-emerald-400 mb-2">Ambientación</h4>
                <p className="text-slate-300 text-sm">Una jungla misteriosa donde el protagonista avanza eliminando enemigos y superando desafíos</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl border border-amber-500/20">
                <h4 className="text-lg font-bold text-amber-400 mb-2">Objetivo</h4>
                <p className="text-slate-300 text-sm">Avanzar eliminando enemigos, superando obstáculos y recolectando monedas valiosas</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                <h4 className="text-lg font-bold text-green-400 mb-2">Final</h4>
                <p className="text-slate-300 text-sm">Sobrevivir a todas las amenazas y alcanzar el último escenario de la jungla</p>
              </div>
            </div>
          </div>

          {/* Mecánicas */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="text-emerald-400" size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Movimiento</h4>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-white">A/D:</strong> Desplazamiento lateral</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-white">W:</strong> Salto dinámico</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-white">Física:</strong> Gravedad realista</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-amber-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                <Zap className="text-amber-400" size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Combate</h4>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-white">Arma:</strong> Bláster futurista</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-white">Control:</strong> Tecla espacio</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-white">Sistema:</strong> Barra de salud</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                <Star className="text-green-400" size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Progresión</h4>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-white">Exploración:</strong> Zonas secretas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-white">Monedas:</strong> Sistema de mejoras</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong className="text-white">Desafíos:</strong> Jefes finales</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Elementos Visuales */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-10 rounded-2xl border border-slate-700/50">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Gamepad2 className="text-amber-400" size={28} />
              Elementos Visuales y Audio
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Personaje', desc: 'Pixel art vibrante con bláster futurista' },
                { title: 'Enemigos', desc: 'Diseño retro con colores contrastantes' },
                { title: 'Entorno', desc: 'Jungla detallada, paleta verde/marrón/azul' },
                { title: 'Interfaz (HUD)', desc: 'Barra de salud y contador de vidas' },
                { title: 'Efectos de Sonido', desc: 'Disparos, saltos e impactos dinámicos' },
                { title: 'Música', desc: 'Ambiente aventurero con ritmos épicos' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-xl border border-slate-600/30 hover:border-emerald-500/30 transition-all">
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Base de Datos */}
      <section id="base-datos" className="relative py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30">
              <Code className="text-blue-400" size={32} />
            </div>
            <div>
              <h2 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Arquitectura de Datos
              </h2>
              <p className="text-slate-400 mt-1">Sistema de persistencia con SQLite</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-10 rounded-2xl border border-slate-700/50 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Objetivos del Sistema</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <div className="text-3xl font-bold text-blue-400 mb-2">01</div>
                <p className="text-slate-300 text-sm">Definir entidades y relaciones (jugadores, partidas, armas)</p>
              </div>
              <div className="p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <div className="text-3xl font-bold text-cyan-400 mb-2">02</div>
                <p className="text-slate-300 text-sm">Modelar estructura lógica en Tercera Forma Normal</p>
              </div>
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                <div className="text-3xl font-bold text-emerald-400 mb-2">03</div>
                <p className="text-slate-300 text-sm">Implementar conexión Unity-SQLite eficiente</p>
              </div>
            </div>
          </div>

          {/* Entidades */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                name: 'Jugador',
                color: 'emerald',
                fields: [
                  'id_jugador (PK) - Identificador único',
                  'nombre - Nombre del jugador',
                  'correo - Email de contacto',
                  'fecha_registro - Fecha de creación',
                  'monedas - Balance actual'
                ]
              },
              {
                name: 'Partida',
                color: 'amber',
                fields: [
                  'id_partida (PK) - ID de partida',
                  'id_jugador (FK) - Jugador asociado',
                  'nivel_actual - Progreso del nivel',
                  'puntaje_total - Puntos acumulados',
                  'duracion - Tiempo de juego'
                ]
              },
              {
                name: 'Arma',
                color: 'blue',
                fields: [
                  'id_arma (PK) - ID del arma',
                  'nombre - Nombre del arma',
                  'dano - Poder de daño',
                  'costo_mejora - Precio de upgrade'
                ]
              },
              {
                name: 'Mejora',
                color: 'cyan',
                fields: [
                  'id_mejora (PK) - ID de mejora',
                  'id_jugador (FK) - Propietario',
                  'id_arma (FK) - Arma asociada',
                  'nivel_mejora - Nivel de upgrade'
                ]
              }
            ].map((entity, i) => (
              <div key={i} className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 hover:border-${entity.color}-500/50 transition-all`}>
                <div className={`inline-block px-4 py-2 bg-${entity.color}-500/20 border border-${entity.color}-500/30 rounded-lg mb-4`}>
                  <h4 className={`text-xl font-bold text-${entity.color}-400`}>{entity.name}</h4>
                </div>
                <ul className="space-y-2">
                  {entity.fields.map((field, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-300 text-sm">
                      <div className={`w-1.5 h-1.5 bg-${entity.color}-400 rounded-full mt-2 flex-shrink-0`}></div>
                      <span>{field}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Implementación SQLite */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-10 rounded-2xl border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Code className="text-blue-400" size={24} />
              Implementación con SQLite + Unity
            </h3>
            <div className="mb-6 p-6 bg-blue-500/10 border-l-4 border-blue-500 rounded-lg">
              <p className="text-slate-300 text-sm">
                <strong className="text-blue-400">Tecnología:</strong> SQLite por su naturaleza ligera y excelente compatibilidad con Unity. 
                La conexión se realiza mediante <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">Mono.Data.Sqlite</code>.
              </p>
            </div>
            <div className="bg-slate-950 p-6 rounded-xl overflow-x-auto border border-slate-800">
              <pre className="text-emerald-300 text-sm">
{`// Conexión SQLite en Unity (C#)
using UnityEngine;
using System.Data;
using Mono.Data.Sqlite;

public class ConexionBD : MonoBehaviour
{
    private string rutaBD;
    
    void Start()
    {
        rutaBD = "URI=file:" + Application.persistentDataPath + 
                 "/jungleblaster.db";
        InicializarBaseDatos();
    }
    
    void InicializarBaseDatos()
    {
        using (var conexion = new SqliteConnection(rutaBD))
        {
            conexion.Open();
            var cmd = conexion.CreateCommand();
            
            // Crear tabla Jugador
            cmd.CommandText = @"CREATE TABLE IF NOT EXISTS Jugador (
                id_jugador INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                correo TEXT,
                fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
                monedas INTEGER DEFAULT 0
            )";
            cmd.ExecuteNonQuery();
            
            Debug.Log("Base de datos inicializada correctamente");
        }
    }
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Desarrollo */}
      <section id="desarrollo" className="relative py-32 px-6 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
              <TrendingUp className="text-purple-400" size={32} />
            </div>
            <div>
              <h2 className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ciclo de Desarrollo
              </h2>
              <p className="text-slate-400 mt-1">De la idea a la implementación</p>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Producción',
                icon: Code,
                color: 'emerald',
                items: [
                  { label: 'Diseño Visual', desc: 'Assets en pixel art 16 bits con paleta optimizada' },
                  { label: 'Programación', desc: 'Implementación de movimiento, combate y física' },
                  { label: 'Integración', desc: 'Sprites, animaciones y sistema de assets' },
                  { label: 'Audio', desc: 'Efectos de sonido y música ambiental inmersiva' }
                ]
              },
              {
                title: 'Pruebas y Mejoras',
                icon: Target,
                color: 'amber',
                items: [
                  { label: 'Test de Jugabilidad', desc: 'Verificación de mecánicas y balance' },
                  { label: 'Depuración', desc: 'Corrección exhaustiva de bugs y errores' },
                  { label: 'Feedback', desc: 'Pruebas con 2 usuarios externos' },
                  { label: 'Optimización', desc: 'Mejora de rendimiento y experiencia' }
                ]
              },
              {
                title: 'Lanzamiento',
                icon: Award,
                color: 'blue',
                items: [
                  { label: 'Optimización', desc: 'Ajustes para múltiples plataformas' },
                  { label: 'Empaquetado', desc: 'Compilación y preparación de builds' },
                  { label: 'Marketing', desc: 'Estrategia de difusión y promoción' },
                  { label: 'Soporte', desc: 'Actualizaciones y atención continua' }
                ]
              }
            ].map((phase, i) => (
              <div key={i} className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-10 rounded-2xl border border-slate-700/50 hover:border-${phase.color}-500/50 transition-all`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-br from-${phase.color}-500/20 to-${phase.color}-600/20 rounded-xl border border-${phase.color}-500/30`}>
                    <phase.icon className={`text-${phase.color}-400`} size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{phase.title}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {phase.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-lg">
                      <div className={`w-2 h-2 bg-${phase.color}-400 rounded-full mt-2 flex-shrink-0`}></div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{item.label}</h4>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Descarga */}
      <section id="descarga" className="relative py-32 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="mb-12">
            <div className="inline-block p-4 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl border border-emerald-500/30 mb-6">
              <Download className="text-emerald-400" size={48} />
            </div>
            <h2 className="text-5xl font-black bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-4">
              Descarga la Demo
            </h2>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto">
              Experimenta Jungle Blaster en su versión de demostración y pon a prueba tus habilidades en la jungla más peligrosa.
            </p>
          </div>
          
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-12 rounded-3xl border border-slate-700/50 max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-3xl"></div>
            
            <div className="relative z-10 mb-10">
              <div className="inline-block p-6 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl border border-emerald-500/30 mb-6">
                <Gamepad2 className="text-emerald-400" size={64} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">Jungle Blaster Demo v1.0</h3>
              <p className="text-emerald-400 font-semibold mb-6">Versión de Prueba - Noviembre 2025</p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {[
                  { label: 'Plataforma', value: 'Windows PC', icon: Gamepad2 },
                  { label: 'Tamaño', value: '87 kb', icon: Download },
                  { label: 'Engine', value: 'Unity', icon: Code }
                ].map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700/50">
                    <spec.icon className="text-emerald-400" size={18} />
                    <div className="text-left">
                      <p className="text-slate-400 text-xs">{spec.label}</p>
                      <p className="text-white text-sm font-semibold">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={'https://drive.google.com/file/d/1T42WDC9j0ZhkLaJli_D2wDzl9kVPLfJW/view?usp=sharing'}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-5 px-12 rounded-xl transition-all transform hover:scale-105 text-lg shadow-2xl shadow-emerald-500/50"
            >
              <Download size={28} />
              <span>Descargar Demo Ahora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
            </a>

            <div className="mt-8 p-4 bg-slate-800/30 rounded-lg border border-slate-700/30">
              <p className="text-slate-400 text-sm">
                <strong className="text-white">Requisitos:</strong> Windows 10/11 • 4GB RAM • DirectX 11 compatible
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto p-8 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/30 rounded-2xl">
            <div className="flex items-start gap-4">
              <Star className="text-amber-400 flex-shrink-0 mt-1" size={24} />
              <div className="text-left">
                <h4 className="text-xl font-bold text-amber-400 mb-2">Versión de Demostración</h4>
                <p className="text-slate-300">
                  Esta es una versión limitada para pruebas. El juego completo incluirá niveles adicionales, 
                  más enemigos, sistema completo de mejoras y contenido exclusivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-xl">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Gamepad2 className="text-emerald-400" size={32} />
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                    JUNGLE BLASTER
                  </h3>
                  <p className="text-slate-400 text-sm">2025 Edition</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                Proyecto académico de desarrollo de videojuegos con Unity. 
                Un arcade de acción que combina mecánicas clásicas con tecnología moderna.
              </p>
              <div className="flex gap-3">
                <a href="https://github.com/WS-ALEXX/Jungle-Blaster" className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg border border-slate-700/50 hover:border-emerald-500/50 transition-all">
                  <Github className="text-slate-400 hover:text-emerald-400 transition-colors" size={20} />
                </a>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg border border-slate-700/50 hover:border-emerald-500/50 transition-all">
                  <Mail className="text-slate-400 hover:text-emerald-400 transition-colors" size={20} />
                </a>
                <a href="#" className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg border border-slate-700/50 hover:border-emerald-500/50 transition-all">
                  <Linkedin className="text-slate-400 hover:text-emerald-400 transition-colors" size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Desarrolladores</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Elvis Manuel Camarena Reyes</li>
                <li>ORCID: 0009-0006-4210-5524</li>
                <li className="pt-2">Walter Alex Esteban Santacruz</li>
                <li>ORCID: 0009-0007-6003-2329</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Institución</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Facultad de Arquitectura e Ingeniería</li>
                <li>Escuela Profesional de Ingeniería de Software</li>
                <li className="pt-2"><strong className="text-white">Docente:</strong> Lidia Zapata Tixi</li>
                <li>Lima, Perú</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2025 Jungle Blaster. Proyecto Académico - Todos los derechos reservados.
            </p>
            <p className="text-slate-500 text-sm">
              Desarrollo de Videojuegos con Unity • Noviembre 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
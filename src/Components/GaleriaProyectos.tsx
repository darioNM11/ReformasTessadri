import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code,
  Layers,
  Sparkles,
  Activity,
  Calendar,
  Clock,
  User,
  Plus,
  Trash2,
  Columns,
  Eye,
  MoveRight,
  ArrowLeftRight,
  RotateCcw,
  Check,
  X,
  Info,
  ChevronRight,
  TrendingUp,
  Sliders,
} from "lucide-react";
import {
  Project,
  ProjectChange,
  ProjectMetric,
  ProjectStep,
} from "../types.ts";
import { INITIAL_PROJECTS } from "../projectsData";

export default function GaleriaProyectos() {
  // Load projects from localStorage or default static database
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem("visual-gallery-projects");
      return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
    } catch {
      return INITIAL_PROJECTS;
    }
  });

  // State managers
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    projects[0]?.id || "proj-1",
  );
  const [filterCategory, setFilterCategory] = useState<string>("Todos");
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

  // Form State for creating custom projects
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("Desarrollo Web & UX");
  const [newDesc, setNewDesc] = useState("");
  const [newExtDesc, setNewExtDesc] = useState("");
  const [newClient, setNewClient] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newDuration, setNewDuration] = useState("");
  const [newBeforeImage, setNewBeforeImage] = useState("");
  const [newAfterImage, setNewAfterImage] = useState("");
  const [newBeforeLabel, setNewBeforeLabel] = useState("Legacy Instance");
  const [newAfterLabel, setNewAfterLabel] = useState("React + TS Refactor");

  // Form list inputs
  const [formMetrics, setFormMetrics] = useState<ProjectMetric[]>([
    {
      label: "Rendimiento",
      before: "Lento",
      after: "Veloz",
      improvement: "+50%",
      isPositive: true,
    },
  ]);
  const [formChanges, setFormChanges] = useState<ProjectChange[]>([
    {
      id: "fc-1",
      title: "Limpieza de código base",
      category: "performance",
      description: "Eliminación completa de scripts redundantes.",
      impact: "Cargas un 40% más rápidas.",
    },
  ]);
  const [formSteps, setFormSteps] = useState<ProjectStep[]>([
    {
      name: "1. Diagnóstico",
      description: "Evaluación de cuellos de botella iniciales.",
    },
    {
      name: "2. Optimización",
      description: "Refactorización y despliegue del nuevo flujo.",
    },
  ]);

  // Temp state for adding single items into form arrays
  const [tempMetricLabel, setTempMetricLabel] = useState("");
  const [tempMetricBefore, setTempMetricBefore] = useState("");
  const [tempMetricAfter, setTempMetricAfter] = useState("");
  const [tempMetricImp, setTempMetricImp] = useState("");

  const [tempChangeTitle, setTempChangeTitle] = useState("");
  const [tempChangeCategory, setTempChangeCategory] = useState<
    "performance" | "ui-ux" | "architecture" | "seo" | "other"
  >("ui-ux");
  const [tempChangeDesc, setTempChangeDesc] = useState("");
  const [tempChangeImpact, setTempChangeImpact] = useState("");

  // Slider reference to capture dragging positions
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  // Active highlighted project object
  const activeProject =
    projects.find((p) => p.id === selectedProjectId) ||
    projects[0] ||
    INITIAL_PROJECTS[0];

  // Get list of unique category filters
  const categories = [
    "Todos",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem("visual-gallery-projects", JSON.stringify(projects));
  }, [projects]);

  // Handle slide mouse / touch move
  const handleSliderMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(Math.round(percentage));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleSliderMove(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleSliderMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  // Reset slider position when swapping projects
  useEffect(() => {
    setSliderPosition(50);
  }, [selectedProjectId]);

  // Global mouseup/touchend to prevent slider stickiness
  useEffect(() => {
    const handleGlobalRelease = () => {
      setIsDragging(false);
    };
    window.addEventListener("mouseup", handleGlobalRelease);
    window.addEventListener("touchend", handleGlobalRelease);
    return () => {
      window.removeEventListener("mouseup", handleGlobalRelease);
      window.removeEventListener("touchend", handleGlobalRelease);
    };
  }, []);

  // Autofill presets generator for creating custom projects easily
  const applyAutofillPreset = (presetType: "kitchen" | "workout" | "car") => {
    if (presetType === "kitchen") {
      setNewTitle("Renovación de Cocina de Madera Rústica");
      setNewCategory("Arquitectura & Diseño de Interiores");
      setNewDesc(
        "Modificación de una cocina oscura empotrada en un luminoso entorno abierto con acabados de mármol de Carrara blanco y detalles de latón pulido.",
      );
      setNewExtDesc(
        "La cocina original presentaba problemas de distribución triangular de trabajo ineficiente y gabinetes de pino pesado que oscurecían toda la zona trasera de la planta baja. Remodelamos el espacio derribando un tabique divisorio no portante para fusionarla con el comedor, incrementando la entrada solar en un 80% e instalando electrodomésticos empotrados clase A++.",
      );
      setNewClient("Familia Mendoza");
      setNewDate("Mayo 2026");
      setNewDuration("4 semanas");
      setNewBeforeImage(
        "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=1200&auto=format&fit=crop",
      );
      setNewAfterImage(
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
      );
      setNewBeforeLabel("Cocina Rústica Oscura");
      setNewAfterLabel("Espacio Biofílico Modernizado");
      setFormMetrics([
        {
          label: "Luminancia Promedio",
          before: "45 lux",
          after: "320 lux",
          improvement: "+610%",
          isPositive: true,
        },
        {
          label: "Triángulo de Trabajo",
          before: "Inexistente",
          after: "Puntos Calibrados",
          improvement: "Flujo Rediseñado",
          isPositive: true,
        },
        {
          label: "Almacenamiento Útil",
          before: "12m³",
          after: "19.5m³",
          improvement: "+62%",
          isPositive: true,
        },
      ]);
      setFormChanges([
        {
          id: "kc-1",
          title: "Estructuración Abierta",
          category: "architecture",
          description:
            "Derribo del tabique medianero norte para integrar el ambiente con un murete desayunador funcional.",
          impact:
            "Aumenta el espacio útil percibido y la intercomunicación familiar.",
        },
        {
          id: "kc-2",
          title: "Cubiertas de Mármol de Carrara",
          category: "other",
          description:
            "Instalación de encimeras de piedra natural selladas con protección hidrorrepelente ecológica.",
          impact:
            "Superficie higiénica para preparado de alimentos con durabilidad de por vida.",
        },
        {
          id: "kc-3",
          title: "Mobiliario en MDF Laqueado",
          category: "ui-ux",
          description:
            "Mobiliario a la medida con bisagras cierre suave (soft-closing) y tiradores de latón macizo cepillado.",
          impact:
            "Reduce ruidos acústicos molestos y maximiza el orden visual.",
        },
      ]);
      setFormSteps([
        {
          name: "1. Desmantelamiento",
          description:
            "Retirada segura de electrodomésticos antiguos y demolición de muros divisorios.",
        },
        {
          name: "2. Fontanería y Tomas",
          description:
            "Reubicación de cañerías del fregadero para alinearlas con la nueva isla central.",
        },
        {
          name: "3. Montaje y Pulido",
          description:
            "Fijación de los bloques de mármol y calibración de los herrajes.",
        },
      ]);
    } else if (presetType === "workout") {
      setNewTitle("Optimización de App Deportiva FitMotion");
      setNewCategory("Desarrollo Web & UX");
      setNewDesc(
        "Rediseño de la interfaz de entrenamientos de FitMotion, pasando de listados rígidos en texto gris a un feed interactivo animado que eleva la retención.",
      );
      setNewExtDesc(
        'La aplicación original de entrenamientos presentaba altos índices de desuscripción de usuarios premium en su primer mes. Mediante talleres de UX, descubrimos que los usuarios sentían "pereza técnica" al abrir los menús de ejercicios repletos de textos estáticos. Creamos un motor ágil basado en videos cortos, anillos metabólicos interactivos y tipografía deportiva expandida en alta resolución.',
      );
      setNewClient("FitMotion Sports Ltd");
      setNewDate("Abril 2026");
      setNewDuration("2 meses");
      setNewBeforeImage(
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1200&auto=format&fit=crop",
      );
      setNewAfterImage(
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
      );
      setNewBeforeLabel("Legacy Listing (Grises Estáticos)");
      setNewAfterLabel("Refactored Dynamic Dashboard");
      setFormMetrics([
        {
          label: "Retención de Usuarios",
          before: "18%",
          after: "47%",
          improvement: "+161%",
          isPositive: true,
        },
        {
          label: "Tiempo de Sesión",
          before: "6 min",
          after: "22 min",
          improvement: "+266%",
          isPositive: true,
        },
        {
          label: "Tasa de Satisfacción",
          before: "3.1/5",
          after: "4.8/5",
          improvement: "+54%",
          isPositive: true,
        },
      ]);
      setFormChanges([
        {
          id: "wc-1",
          title: "Anillos de Esfuerzo SVG",
          category: "ui-ux",
          description:
            "Introducción de componentes vectoriales circulares animados que se completan en base a las calorías quemadas reales.",
          impact:
            "Aporta gratificación visual inmediata y gamifica la disciplina del usuario.",
        },
        {
          id: "wc-2",
          title: "Lazy loading de tarjetas interactives",
          category: "performance",
          description:
            "Despliegue escalonado de videos cortos instructivos integrado en un Virtualized List que evita cuelgues de memoria en celulares antiguos.",
          impact:
            "Estabilidad de la app incrementada al 99.9% libre de crashes.",
        },
        {
          id: "wc-3",
          title: "Contraste Elevado Inteligente",
          category: "ui-ux",
          description:
            "Paleta profunda azabache combinada con amarillo flúor deportivo que reduce el cansancio en rutinas matutinas o nocturnas.",
          impact:
            "Uso confortable en entornos de baja luminosidad (gimnasios oscuros).",
        },
      ]);
      setFormSteps([
        {
          name: "1. Entrevistas UX",
          description:
            "Grupos focales con deportistas novatos para identificar causas del abandono.",
        },
        {
          name: "2. Maquetado Lofi",
          description:
            "Planteamiento de microinteracciones gamificadas mediante prototipos de papel.",
        },
        {
          name: "3. Desarrollo e Integración",
          description:
            "Creación de animaciones fluidas con React Spring y compilación nativa eficiente.",
        },
      ]);
    } else if (presetType === "car") {
      setNewTitle("Restauración Estética de Porsche 911 Clásico");
      setNewCategory("Especialidades Mecánicas");
      setNewDesc(
        "Restauración integral de la carrocería oxidada y reacondicionamiento mecánico de un Porsche 911 Carrera de 1982.",
      );
      setNewExtDesc(
        "El coche había permanecido abandonado en un hangar costero húmedo durante más de 12 años. La carrocería presentaba corrosión de grado 3 en pasos de rueda, pintura cuarteada y el motor bóxer de seis cilindros arrastraba problemas severos de compresión. Desmontamos el vehículo hasta el chasis, saneamos los metales con chorro de arena y reconstruimos el tren motriz al estado original de fábrica.",
      );
      setNewClient("Colección Private Classics");
      setNewDate("Diciembre 2025");
      setNewDuration("6 meses");
      setNewBeforeImage(
        "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=1200&auto=format&fit=crop",
      );
      setNewAfterImage(
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
      );
      setNewBeforeLabel("Chasis Oxidado");
      setNewAfterLabel("Afinación Estética Terminado");
      setFormMetrics([
        {
          label: "Compresión Motor",
          before: "6.2 bar",
          after: "10.8 bar",
          improvement: "+74%",
          isPositive: true,
        },
        {
          label: "Brillo de Carrocería",
          before: "Nulo (Sarro)",
          after: "Glosy Espejo",
          improvement: "Restaurado al 100%",
          isPositive: true,
        },
        {
          label: "Potencia Rendimiento",
          before: "110 hp",
          after: "188 hp",
          improvement: "+70.9%",
          isPositive: true,
        },
      ]);
      setFormChanges([
        {
          id: "cc-1",
          title: "Saneamiento por Granallado",
          category: "architecture",
          description:
            "Remoción profunda de capas de óxido superficial aplicando chorros de dióxido de carbono sólido que protege el acero madre.",
          impact:
            "Eliminación total del avance de la corrosión sin rayaduras físicas ásperas.",
        },
        {
          id: "cc-2",
          title: "Esmaltado de Siete Capas",
          category: "other",
          description:
            "Imprimación epóxica fosfatante, tres fases de color original Porsche y capas de barniz transparente de alta dureza pulidas a mano.",
          impact:
            "Pátina cristalina reflectante impecable resistente a arañazos atmosféricos.",
        },
        {
          id: "cc-3",
          title: "Camisas y Válvulas Reconstruidas",
          category: "performance",
          description:
            "Maquinado completo del bloque motor, rectificación de culata y sustitución de piezas de fricción por repuestos de catálogo original.",
          impact:
            "Recuperación íntegra de la potencia lineal de fábrica sin fugas de aceite.",
        },
      ]);
      setFormSteps([
        {
          name: "1. Despiece Completo",
          description:
            "Retirada minuciosa de tapizados, cristales, sistema eléctrico y tren de transmisión.",
        },
        {
          name: "2. Baño Químico",
          description:
            "Inmersión anticarbonatación del chasis básico para eliminar trazas de óxido.",
        },
        {
          name: "3. Afinación Dinámica",
          description:
            "Montaje final, ajuste micrométrico de la inyección de combustible y pruebas en banco.",
        },
      ]);
    }
  };

  // Add Project to the active catalog
  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDesc.trim()) {
      alert("Por favor, indica un título y resumen del proyecto.");
      return;
    }

    const defaultBefore =
      "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=800";
    const defaultAfter =
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800";

    const cleanBeforeImage = newBeforeImage.trim() || defaultBefore;
    const cleanAfterImage = newAfterImage.trim() || defaultAfter;

    const newProject: Project = {
      id: `proj-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      description: newDesc,
      extendedDescription: newExtDesc || newDesc,
      client: newClient || "Cliente Confidencial",
      date: newDate || "Reciente",
      duration: newDuration || "Variable",
      beforeImage: cleanBeforeImage,
      afterImage: cleanAfterImage,
      beforeLabel: newBeforeLabel || "Legacy Instance",
      afterLabel: newAfterLabel || "React + TS Refactor",
      metrics: [...formMetrics],
      changes: [...formChanges],
      steps: [...formSteps],
    };

    setProjects((prev) => [...prev, newProject]);
    setSelectedProjectId(newProject.id);
    setShowAddForm(false);

    // Reset Form fields
    setNewTitle("");
    setNewDesc("");
    setNewExtDesc("");
    setNewClient("");
    setNewDate("");
    setNewDuration("");
    setNewBeforeImage("");
    setNewAfterImage("");
    setNewBeforeLabel("Legacy Instance");
    setNewAfterLabel("React + TS Refactor");
    setFormMetrics([
      {
        label: "Eficiencia",
        before: "Inestable",
        after: "Firme",
        improvement: "+35%",
        isPositive: true,
      },
    ]);
    setFormChanges([
      {
        id: `fc-sub-${Date.now()}`,
        title: "Optimización general",
        category: "performance",
        description: "Rediseño de flujos inactivos y pesos.",
        impact: "Mayor estabilidad de uso.",
      },
    ]);
    setFormSteps([
      { name: "1. Estructura", description: "Análisis primario del caso." },
    ]);
  };

  // Remove targeted project
  const handleDeleteProject = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (
      confirm(
        "¿Estás seguro de que deseas eliminar este proyecto de tu galería de sesión?",
      )
    ) {
      const remaining = projects.filter((p) => p.id !== projectId);
      setProjects(remaining);
      if (selectedProjectId === projectId && remaining.length > 0) {
        setSelectedProjectId(remaining[0].id);
      }
    }
  };

  // Preset restoration back to factory defaults
  const resetToFactoryDefault = () => {
    if (
      confirm(
        "¿Deseas restablecer la galería con los 4 proyectos profesionales de fábrica de forma permanente?",
      )
    ) {
      localStorage.removeItem("visual-gallery-projects");
      setProjects(INITIAL_PROJECTS);
      setSelectedProjectId(INITIAL_PROJECTS[0].id);
    }
  };

  // Add metric to the temporary form creator
  const addMetricToForm = () => {
    if (!tempMetricLabel || !tempMetricBefore || !tempMetricAfter) return;
    const newM: ProjectMetric = {
      label: tempMetricLabel,
      before: tempMetricBefore,
      after: tempMetricAfter,
      improvement: tempMetricImp || "+10%",
      isPositive: true,
    };
    setFormMetrics((prev) => [...prev, newM]);
    setTempMetricLabel("");
    setTempMetricBefore("");
    setTempMetricAfter("");
    setTempMetricImp("");
  };

  // Add structured change item to dynamic form
  const addChangeToForm = () => {
    if (!tempChangeTitle || !tempChangeDesc) return;
    const newC: ProjectChange = {
      id: `form-c-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      title: tempChangeTitle,
      category: tempChangeCategory,
      description: tempChangeDesc,
      impact: tempChangeImpact || "Mejora general y de arquitectura",
    };
    setFormChanges((prev) => [...prev, newC]);
    setTempChangeTitle("");
    setTempChangeDesc("");
    setTempChangeImpact("");
  };

  // Delete dynamic form items before submission
  const removeMetricFromForm = (index: number) => {
    setFormMetrics((prev) => prev.filter((_, i) => i !== index));
  };

  const removeChangeFromForm = (id: string) => {
    setFormChanges((prev) => prev.filter((c) => c.id !== id));
  };

  // Filter projects by active tab category
  const filteredProjects = projects.filter(
    (p) => filterCategory === "Todos" || p.category === filterCategory,
  );

  // Quick switch of slider positions with animation
  const animateSliderToPreset = (pct: number) => {
    let current = sliderPosition;
    const step = current < pct ? 2 : -2;
    const interval = setInterval(() => {
      current += step;
      if ((step > 0 && current >= pct) || (step < 0 && current <= pct)) {
        setSliderPosition(pct);
        clearInterval(interval);
      } else {
        setSliderPosition(current);
      }
    }, 12);
  };

  return (
    <div className='min-h-screen bg-[#F4F4F5] font-sans text-zinc-900 flex flex-col selection:bg-zinc-900 selection:text-white antialiased'>
      <main className='flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-6 space-y-8'>
        {/* NAVEGADOR DE PROYECTOS / FOOTER SLIDER */}
        <section className='space-y-4'>
          {/* Cabecera del Navegador */}
          {/* Categorías (Filtros) */}
          <div
            className='flex border border-zinc-900 bg-white p-0.5 rounded-none font-mono'
            style={{ borderColor: "#14b8a6" }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1 text-[13px] font-bold uppercase tracking-wider cursor-pointer transition ${filterCategory === cat ? "bg-teal-600 text-white" : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid de Proyectos */}
          <div className='flex overflow-x-auto gap-6 pb-4 w-full scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-transparent'>
            {filteredProjects.map((proj) => {
              const isSelected = proj.id === selectedProjectId;
              return (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProjectId(proj.id)}
                  className={`group bg-white p-4 flex flex-col transition-all duration-300 cursor-pointer border w-72 shrink-0 ${isSelected ? "border-2 border-teal-600 opacity-100 shadow-sm" : "border-zinc-300/40 opacity-60 grayscale hover:opacity-100 hover:grayscale-0"}`}
                >
                  {/* Visual de previsualización */}
                  <div className='relative aspect-[16/10] overflow-hidden bg-zinc-200 border border-zinc-300'>
                    <img
                      src={proj.beforeImage}
                      alt='Mini antes'
                      className='absolute inset-0 w-full h-full object-cover'
                      referrerPolicy='no-referrer'
                    />
                    <div className='absolute inset-0 w-1/2 overflow-hidden border-r border-zinc-900 z-10'>
                      <img
                        src={proj.afterImage}
                        alt='Mini después'
                        className='absolute top-0 left-0 w-[200%] h-full max-w-none object-cover'
                        style={{ width: "400px" }}
                        referrerPolicy='no-referrer'
                      />
                    </div>

                    <span className='absolute bottom-2 left-2 text-[8px] font-bold uppercase px-1.5 py-0.5 bg-zinc-900 text-white font-mono z-20'>
                      {proj.category}
                    </span>
                  </div>

                  {/* Texto */}
                  <div className='py-3 flex-1 flex flex-col justify-between'>
                    <div>
                      <h4 className='text-xs font-bold text-zinc-900 group-hover:text-teal-600 transition-colors uppercase tracking-wider font-display line-clamp-1 mt-1.5'>
                        {proj.title}
                      </h4>
                      <p className='text-[10px] text-zinc-500 line-clamp-2 leading-relaxed mt-1 font-sans'>
                        {proj.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* COMPARADOR DIRECTO DE ANTES Y DESPUÉS (GEOMETRIC HERO) */}
        <section className='bg-white border border-zinc-300 rounded-none shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col'>
          {/* Cabecera Técnica del Comparador */}
          <div className='p-6 border-b border-zinc-300 bg-white flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4'>
            <div>
              <div className='flex flex-wrap items-center gap-2'>
                <span className='text-[9px] font-bold uppercase py-0.5 px-2 bg-zinc-900 text-white tracking-widest font-mono'>
                  {activeProject.category}
                </span>
              </div>
              <h2 className='text-xl font-bold tracking-tight text-zinc-950 uppercase font-display mt-2'>
                {activeProject.title}
              </h2>
              <p className='text-xs text-zinc-600 mt-1 max-w-3xl leading-relaxed'>
                {activeProject.description}
              </p>
            </div>
          </div>

          {/* EL COMPARADOR VISUAL - EXCLUSIVAMENTE MODALIDAD DESLIZADOR */}
          <div className='p-4 sm:p-8 bg-zinc-100 border-b border-zinc-300 flex justify-center items-center'>
            <div className='w-full max-w-5xl relative'>
              <div className='relative'>
                <div
                  ref={sliderContainerRef}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onTouchMove={handleTouchMove}
                  className='relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.39/1] overflow-hidden rounded-none select-none cursor-ew-resize  group'
                >
                  {/* Imagen de Fondo (Antes) */}
                  <img
                    src={activeProject.beforeImage}
                    alt={activeProject.beforeLabel}
                    className='absolute inset-0 w-full h-full object-contain grayscale opacity-80'
                    referrerPolicy='no-referrer'
                  />

                  {/* Imagen Flotante (Después - Recortada con Clip-Path dinámico de React) */}
                  <div
                    className='absolute inset-0 w-full h-full pointer-events-none'
                    style={{
                      clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                    }}
                  >
                    <img
                      src={activeProject.afterImage}
                      alt={activeProject.afterLabel}
                      className='absolute inset-0 w-full h-full object-contain'
                      referrerPolicy='no-referrer'
                    />
                  </div>

                  {/* Tirador del Deslizador (Dividiendo el Lienzo) */}
                  <div
                    className='absolute top-0 bottom-0 w-1 bg-teal-600 cursor-ew-resize z-20 pointer-events-none'
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-zinc-900 border-4 border-teal-600 flex items-center justify-center text-white text-xs shadow-lg font-mono'>
                      ↔
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import { Project } from "./types.ts";

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Rediseño de Plataforma E-Commerce",
    category: "Baño",
    description:
      "Transformación de una tienda online lenta con diseño obsoleto del 2012 en una experiencia de compra fluida, móvil-primero con un embudo de conversión optimizado.",
    extendedDescription:
      "Este proyecto consistió en reconstruir completamente el frontend de una tienda de comercio electrónico con más de 10,000 productos activos. El sitio anterior sufría de tasas de rebote superiores al 65% debido a tiempos de carga lentos (7.2 segundos) y una interfaz de pago confusa que requería 5 pasos. Rediseñamos la experiencia implementando un stack moderno con Next.js y React en el cliente, optimizando el renderizado de imágenes y simplificando el checkout a un solo paso interactivo.",
    client: "NovaRetail S.A.",
    date: "Febrero 2026",
    duration: "3 meses",
    beforeImage: "/Imagenes/Refor_1/ANTES.jpg",
    afterImage: "/Imagenes/Refor_1/DESPUES.jpg",
    beforeLabel: "Estructura Original (Boceto / Caótica y Lenta)",
    afterLabel: "Interfaz Final (Dashboard de Compras Limpia y Optimizada)",
    metrics: [
      {
        label: "Tiempo de Carga",
        before: "7.2s",
        after: "1.4s",
        improvement: "-80%",
        isPositive: true,
      },
      {
        label: "Tasa de Conversión",
        before: "1.2%",
        after: "3.8%",
        improvement: "+216%",
        isPositive: true,
      },
      {
        label: "Puntuación Lighthouse SEO",
        before: "42/100",
        after: "98/100",
        improvement: "+56 pts",
        isPositive: true,
      },
      {
        label: "Tasa de Rebote (Bounce)",
        before: "67%",
        after: "29%",
        improvement: "-56%",
        isPositive: true,
      },
    ],
    changes: [
      {
        id: "c1-1",
        title: "Migración a Componentes React Reactivos",
        category: "performance",
        description:
          "Reemplazo del antiguo sistema basado en plantillas estáticas y scripts jquery acoplados por componentes React aislados que minimizan los re-renderizados innecesarios y cargan de forma asíncrona.",
        impact:
          "Reduce drásticamente el peso inicial de la página en un 60% e inicia la reactividad instantáneamente.",
      },
      {
        id: "c1-2",
        title:
          "Simplificación de Checkout a un Solo Paso (Single-Page Checkout)",
        category: "ui-ux",
        description:
          "Unificación de los pasos de envío, facturación y método de pago en un solo formulario dinámico que autoguarda estados y utiliza validación instantánea del lado del cliente.",
        impact: "Aumento neto del 25% en carritos completados sin abandono.",
      },
      {
        id: "c1-3",
        title: "Optimización Agresiva de Imágenes (Responsive WebP/AVIF)",
        category: "performance",
        description:
          "Implementación de procesamiento de imágenes al vuelo para servir formatos modernos condensados (AVIF/WebP) con tamaños adaptativos computados en base al viewport del usuario.",
        impact:
          "Ahorro de más de 4MB por sesión y mejora crítica del indicador Largest Contentful Paint (LCP).",
      },
      {
        id: "c1-4",
        title: "Reestructuración Semántica del HTML para Lectura de Pantalla",
        category: "seo",
        description:
          "Implementación completa de etiquetas ARIA, contrastes AA/AAA consolidados y ordenamiento secuencial del tabulado nativo para garantizar cumplimiento con las guías de accesibilidad WCAG 2.1.",
        impact:
          "Puntuación de accesibilidad perfecta de 100/100 en auditorías de Google Chrome.",
      },
    ],
    steps: [
      {
        name: "Análisis de Embudo",
        description:
          "Auditoría completa del comportamiento de los usuarios (heatmaps) para identificar fugas de conversión y cuellos de botella.",
      },
      {
        name: "Wireframing de Interacción",
        description:
          "Creación de prototipos rápidos interactivos validados mediante pruebas con usuarios enfocados en la fluidez del checkout.",
      },
      {
        name: "Desarrollo & Despliegue",
        description:
          "Reescritura completa del código base empleando TypeScript para mayor robustez, pruebas unitarias sistemáticas y despliegue distribuido en CDN.",
      },
    ],
  },
  {
    id: "proj-2",
    title: "Transformación de Espacio de Trabajo Biofílico",
    category: "Baño",
    description:
      "Renovación integral de unos cubículos de oficina tradicionales aislantes y apagados en un estudio abierto, luminoso y lleno de vegetación centrado en el bienestar laboral.",
    extendedDescription:
      "Las oficinas centrales de TechHub se encontraban en un edificio construido en los años 90 con iluminación fluorescente fría, paneles divisorios de tonos grises que bloqueaban la luz solar y un flujo cerrado de aire. El personal reportaba altos niveles de fatiga visual y bajo dinamismo. Planificamos una remodelación de 400m² enfocada en la biofilia, el uso de maderas de origen sostenible y la redistribución de escritorios para maximizar la entrada de ventilación y luz natural, generando un ecosistema de colaboración estimulante.",
    client: "TechHub Ventures",
    date: "Enero 2026",
    duration: "2 meses",
    beforeImage: "/Imagenes/Refor_2/ANTES.jpg",
    afterImage: "/Imagenes/Refor_2/DESPUES.jpg",
    beforeLabel: "Oficina Tradicional (Cubículos Grises y Luz Fluorescente)",
    afterLabel: "Oficina Renovada (Concepto Abierto e Integración Biofílica)",
    metrics: [
      {
        label: "Uso de Luz Natural",
        before: "15%",
        after: "85%",
        improvement: "+466%",
        isPositive: true,
      },
      {
        label: "Plantas / M2",
        before: "0.02",
        after: "1.45",
        improvement: "+7150%",
        isPositive: true,
      },
      {
        label: "Nivel percibido de Fatiga",
        before: "8/10",
        after: "2/10",
        improvement: "-75%",
        isPositive: true,
      },
      {
        label: "Ocupación de Zonas Comunes",
        before: "24%",
        after: "78%",
        improvement: "+225%",
        isPositive: true,
      },
    ],
    changes: [
      {
        id: "c2-1",
        title: "Eliminación de Divisiones Opacas (Concepto Abierto)",
        category: "architecture",
        description:
          "Demolición completa de las estructuras temporales de yeso y tableros texturizados grises que confinaban individualmente a los desarrolladores.",
        impact:
          "Mejora la distribución de la iluminación ambiente directa y propicia un entorno colaborativo fluido.",
      },
      {
        id: "c2-2",
        title: "Mobiliario de Abeto y contrachapado de abedul Sostenible",
        category: "other",
        description:
          "Sustitución de los escritorios de aglomerado plástico laminado por mesas modulares ergonómicas de madera clara con tratamientos ecológicos cero-emisiones.",
        impact:
          "Incrementa la calidez del espacio y reduce la huella ecológica de la empresa.",
      },
      {
        id: "c2-3",
        title: "Sistema de Columnas de Vegetación Hidropónica",
        category: "architecture",
        description:
          "Instalación de jardineras verticales de autorriego cargadas de plantas purificadoras (como Helechos, Sansevierias y Spathiphyllum) integradas con los pilares estructurales.",
        impact:
          "Aumento medido en la retención de humedad y reducción de partículas de polvo flotante.",
      },
      {
        id: "c2-4",
        title: "Estrategia de Iluminación Indirecta LED Cálida 3000K",
        category: "ui-ux",
        description:
          "Sustitución de los tubos fluorescentes tintineantes por focos LED de bajo consumo regulables automáticamente con fotocélulas según la cantidad de luz de día.",
        impact:
          "Erradicación total de las quejas por migrañas y fatiga visual recurrente.",
      },
    ],
    steps: [
      {
        name: "Redistribución Espacial",
        description:
          "Estudio de asoleamiento y flujos de aire del edificio para ubicar las mesas de mayor concentración en zonas iluminadas.",
      },
      {
        name: "Instalación Botánica",
        description:
          "Montaje de los módulos hidropónicos y calibración automatizada de los ciclos de riego nocturnos silenciosos.",
      },
      {
        name: "Calibración Humana",
        description:
          "Pruebas de atenuación lumínica y re-orientación acústica con paneles absorbentes de fieltro reciclado.",
      },
    ],
  },
  {
    id: "proj-3",
    title: "Restauración Cromática de Fotografía Vintage",
    category: "Platos de ducha",
    description:
      "Recuperación digital de alta fidelidad, reconstrucción de canales de color y corrección de arañazos sobre una fotografía histórica estropeada del siglo pasado.",
    extendedDescription:
      "Este encargo provino del archivo histórico de la ciudad. El negativo original de gelatina y plata de 1935 se encontraba severamente dañado, con hongos que habían deteriorado la emulsión, rasguños físicos masivos en el centro y una pérdida completa del rango dinámico. El desafío consistía en recuperar las texturas de la ropa del retratado y colorear fielmente la escena basándose en muestras históricas de tintes de la época en lugar de aplicar filtros genéricos de redes neuronales automáticas de baja precisión.",
    client: "Archivo Histórico Metropolitano",
    date: "Marzo 2026",
    duration: "3 semanas",
    beforeImage: "/Imagenes/Refor_3/antes.jpg",
    afterImage: "/Imagenes/Refor_3/despues.jpg",
    beforeLabel:
      "Original Deteriorado (Rasguños, Degradación de Grano y Hongos)",
    afterLabel:
      "Restauración Completa (Reconstrucción Pixel a Pixel de Nitidez)",
    metrics: [
      {
        label: "Resolución de Detalle",
        before: "720p eq.",
        after: "4K Nativo",
        improvement: "+300%",
        isPositive: true,
      },
      {
        label: "Rango Dinámico (EV)",
        before: "2.1 EV",
        after: "9.4 EV",
        improvement: "+347%",
        isPositive: true,
      },
      {
        label: "Puntos de Polvo / Daños",
        before: "4,500+",
        after: "0",
        improvement: "Eliminación 100%",
        isPositive: true,
      },
      {
        label: "Fidelidad del Color",
        before: "Monocromo",
        after: "DCI-P3 95%",
        improvement: "+95%",
        isPositive: true,
      },
    ],
    changes: [
      {
        id: "c3-1",
        title: "Remoción Manual de Grietas y Hongos",
        category: "other",
        description:
          "Uso de técnicas avanzadas de clonación y pintura digital no destructiva de frecuencias mixtas para rellenar las fisuras de la emulsión respetando el patrón de grano original.",
        impact:
          'Restaura la continuidad visual de la piel y fondos del retrato sin aspecto artificial "planchado".',
      },
      {
        id: "c3-2",
        title: "Separación y Reajuste de Altas y Bajas Frecuencias",
        category: "performance",
        description:
          "Separación matemática de los detalles de textura fina (grano, arrugas) de la información de volumen y luz (sombras, degradados), permitiendo retocar el contraste de forma independiente.",
        impact:
          "Permite recuperar texturas casi invisibles en las zonas de sobreexposición extrema.",
      },
      {
        id: "c3-3",
        title: "Coloreado por Capas con Referencias de época",
        category: "ui-ux",
        description:
          'Investigación histórica de los uniformes y pigmentaciones textiles de la época para pintar manualmente en más de 80 capas de coloración selectiva de tipo "Luz Suave" y "Superponer".',
        impact:
          "Evita el tinte azul/marrón genérico de las restauraciones automatizadas de IA y aporta fidelidad documental.",
      },
    ],
    steps: [
      {
        name: "Digitalización",
        description:
          "Escanéo húmedo del negativo original con un sensor de medio formato calibrado para capturar la máxima cantidad de información posible en RAW de 16 bits.",
      },
      {
        name: "Eliminación del Ruido",
        description:
          "Limpieza digital del polvo y fibras externas sin degradar el foco óptico de la lente de registro inicial.",
      },
      {
        name: "Colorización Fiel",
        description:
          "Pintura meticulosa de mapas de saturación gradual para imitar la caída de colores naturales con la distancia y la luz.",
      },
    ],
  },
  {
    id: "proj-4",
    title: "Identidad y Sistema Gráfico para Línea de Café Premium",
    category: "Baño",
    description:
      "Evolución del empaque artesanal incoherente y logotipo abigarrado hacia una identidad corporativa monolítica moderna, limpia y ecodiseñada.",
    extendedDescription:
      "Café de las Cumbres solía empacar sus granos en bolsas genéricas termoselladas con una etiqueta de papel adhesivo estándar impresa en tinta negra borrosa. Carecía de tipografía corporativa unificada, lo que dificultaba su exportación y entrada a cadenas de supermercados de gama alta. Creamos una identidad de marca desde cero: un imagotipo geométrico que abstrae los surcos de las montañas y los granos de café, combinado con paletas de color tierra sofisticadas y cajas de cartón kraft crudo reciclado con tintas a base de soja.",
    client: "Cooperativa de Cultivos de Las Cumbres",
    date: "Diciembre 2025",
    duration: "1.5 meses",
    beforeImage: "/Imagenes/Refor_4/antes.jpg",
    afterImage: "/Imagenes/Refor_4/despues.jpg",
    beforeLabel: "Identidad Informal (Saturación Gráfica y Empaque Genérico)",
    afterLabel:
      "Línea de Empaques Final (Ecodiseño Minimalista con Altura de Marca)",
    metrics: [
      {
        label: "Reconocimiento de Marca",
        before: "8%",
        after: "43%",
        improvement: "+437%",
        isPositive: true,
      },
      {
        label: "Costo de Empacado / ud.",
        before: "$0.85",
        after: "$0.62",
        improvement: "-27%",
        isPositive: true,
      },
      {
        label: "Ventas en Retail Premium",
        before: "0 unidades",
        after: "12,500 u/mes",
        improvement: "Nuevo Mercado",
        isPositive: true,
      },
      {
        label: "Uso de Plásticos",
        before: "100% Virgen",
        after: "0% Biodegradable",
        improvement: "Eco-Sostenible",
        isPositive: true,
      },
    ],
    changes: [
      {
        id: "c4-1",
        title: "Rediseño Tipográfico (Sans-Serif Geométrica)",
        category: "ui-ux",
        description:
          "Sustitución de las 4 fuentes incompatibles previas por una tipografía de palo seco suiza, con interlineados generosos e impronta de lujo contemporáneo.",
        impact:
          "Facilidad de lectura inmediata a 3 metros de distancia en estanterías.",
      },
      {
        id: "c4-2",
        title: "Ecodiseño Estructural de Empaques",
        category: "other",
        description:
          "Diseño de un troquel de plegado inteligente que no requiere pegamentos tóxicos, fabricado en cartulina de fibra de caña de azúcar libre de blanqueadores clorados.",
        impact:
          "Descomposición natural del empaque reducida de 20 años a 180 días.",
      },
      {
        id: "c4-3",
        title: "Paleta Cromática Terrosa Consistente",
        category: "ui-ux",
        description:
          "Estructuración de una paleta fija de colores Pantone inspirados en el proceso de tueste: verde cafeto, marrón tostado suave y crema orgánico.",
        impact:
          "Coherencia de color en imprentas de flexografía, serigrafía y medios digitales.",
      },
    ],
    steps: [
      {
        name: "Arquetipos de Consumo",
        description:
          "Investigación de hábitos de compra de café especializado para definir el posicionamiento de precio y exclusividad.",
      },
      {
        name: "Diseño Industrial",
        description:
          "Creación y prototipado físico de cajas con diferentes gramajes para verificar la estanqueidad y resistencia frente al transporte de granos.",
      },
      {
        name: "Libro de Marca",
        description:
          "Especificación de normas de uso del logotipo en soportes pequeños, camiones de reparto y uniformes del personal.",
      },
    ],
  },
];

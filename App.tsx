import React, { useState, FormEvent, FC, useEffect, useMemo } from "react";
import GaleriaProyectos from "./src/Components/GaleriaProyectos";

// --- SVG Icon Components ---

const ShowerIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    width='100'
    height='100'
    viewBox='0 0 100 120'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    stroke='rgb(20 184 166)'
  >
    <path
      d='M20 100V20H55V30'
      stroke-width='3'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path d='M40 30H70' stroke-width='4' stroke-linecap='round' />

    <g stroke-width='2' stroke-linecap='round'>
      <path d='M45 45V50' />
      <path d='M55 45V50' />
      <path d='M65 45V50' />
      <path d='M45 60V65' />
      <path d='M55 60V65' />
      <path d='M65 60V65' />
    </g>

    <rect x='10' y='105' width='80' height='4' rx='2' />
  </svg>
);
const FurnitureIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    width='100'
    height='100'
    viewBox='0 0 100 120'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    stroke='rgb(20 184 166)'
  >
    <rect x='25' y='5' width='50' height='35' rx='1' stroke-width='2.5' />
    <line
      x1='60'
      y1='12'
      x2='70'
      y2='22'
      stroke-width='1'
      stroke-linecap='round'
    />

    <path d='M30 50H70' stroke-width='3' stroke-linecap='round' />
    <path d='M45 45V50' stroke-width='2' stroke-linecap='round' />

    <rect x='25' y='52' width='50' height='30' rx='1' stroke-width='3' />
    <line x1='25' y1='67' x2='75' y2='67' stroke-width='2' />

    <line
      x1='45'
      y1='58'
      x2='55'
      y2='58'
      stroke-width='1.5'
      stroke-linecap='round'
    />
    <line
      x1='45'
      y1='73'
      x2='55'
      y2='73'
      stroke-width='1.5'
      stroke-linecap='round'
    />

    <g stroke-width='1.2' stroke-linecap='round'>
      <path d='M25 95H75' />
      <path d='M25 92V98' />
      <path d='M75 92V98' />

      <path d='M15 5V82' />
      <path d='M12 5H18' />
      <path d='M12 82H18' />
    </g>
  </svg>
);
const TileIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    width='100'
    height='100'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    stroke='rgb(20 184 166)'
  >
    <path
      d='M8.5 2L12 4V8L8.5 10L5 8V4L8.5 2Z'
      fill='rgb(20 184 166)'
      fill-opacity='0.5'
      stroke-width='1'
      stroke-linejoin='round'
    />

    <path
      d='M15.5 2L19 4V8L15.5 10L12 8V4L15.5 2Z'
      fill='rgb(20 184 166)'
      fill-opacity='0.2'
      stroke-width='1'
      stroke-linejoin='round'
    />

    <path
      d='M5 8L8.5 10V14L5 16L1.5 14V10L5 8Z'
      fill='rgb(20 184 166)'
      fill-opacity='0.2'
      stroke-width='1'
      stroke-linejoin='round'
    />

    <path
      d='M12 8L15.5 10V14L12 16L8.5 14V10L12 8Z'
      fill='rgb(20 184 166)'
      fill-opacity='0.5'
      stroke-width='1'
      stroke-linejoin='round'
    />
  </svg>
);

const TuberiaIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    width='100'
    height='100'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    stroke='rgb(20 184 166)'
  >
    <path
      d='M18 4V10C18 13.3137 15.3137 16 12 16H4'
      stroke='rgb(20 184 166)'
      stroke-opacity='0.5'
      stroke-width='2'
      stroke-linecap='butt'
      stroke-linejoin='round'
    />

    <rect
      x='16'
      y='3'
      width='4'
      height='1'
      rx='1'
      fill='rgb(20 184 166)'
      fill-opacity='0.5'
      stroke-width='0.5'
    />

    <rect
      x='3'
      y='14'
      width='1'
      height='4'
      rx='1'
      fill='rgb(20 184 166)'
      fill-opacity='0.5'
      stroke-width='0.5'
    />

    <path
      d='M18 10 A 6 6 0 0 1 12 16'
      stroke='rgb(20 184 166)'
      stroke-width='0.6'
      opacity='1'
    />
  </svg>
);
const CloseIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M6 18L18 6M6 6l12 12'
    />
  </svg>
);

// --- Data ---
const portfolioData = [
  {
    id: 1,
    title: "Oasis Urbano Moderno",
    beforeImg: "https://picsum.photos/800/600?image=555",
    afterImg: "https://picsum.photos/800/600?image=2",
    description:
      "Transformamos un baño anticuado en un espacio moderno y funcional, maximizando la luz natural. Se cambió la bañera por un plato de ducha de resina y se instaló un mueble suspendido para dar sensación de amplitud.",
    materials:
      "Porcelánico imitación mármol, grifería termostática negra, mampara de cristal fijo, mueble lacado.",
    budget: "6.000€ - 8.000€",
  },
  {
    id: 2,
    title: "Calidez Nórdica",
    beforeImg: "https://picsum.photos/800/600?image=657",
    afterImg: "https://picsum.photos/800/600?image=20",
    description:
      "Este proyecto buscaba crear un ambiente cálido y relajante. Se utilizaron maderas claras y azulejos tipo metro blancos para conseguir un estilo nórdico atemporal.",
    materials:
      "Suelo vinílico imitación madera, azulejo biselado, grifería de acero inoxidable, encimera de madera tratada.",
    budget: "5.000€ - 7.000€",
  },
  {
    id: 3,
    title: "Suite de Lujo",
    beforeImg: "https://picsum.photos/800/600?image=577",
    afterImg: "https://picsum.photos/800/600?image=164",
    description:
      "Una reforma integral para un baño principal, incluyendo una bañera exenta como pieza central y un lavabo de doble seno para mayor comodidad.",
    materials:
      "Microcemento en paredes, bañera de solid surface, mueble a medida, iluminación LED indirecta.",
    budget: "10.000€ - 14.000€",
  },
];

const testimonialsData = [
  {
    quote:
      "El cambio de bañera por ducha fue rapidísimo y muy limpio. El resultado es espectacular. ¡Muy recomendables!",
    author: "Laura G.",
    project: "Cambio de Bañera por Ducha",
  },
  {
    quote:
      "Profesionalidad de principio a fin. El diseño que nos propusieron aprovechó el espacio al máximo. Estamos encantados.",
    author: "Carlos y Marta",
    project: "Reforma Integral",
  },
  {
    quote:
      "Calidad en los materiales y un trato excelente. Cumplieron los plazos y el presupuesto a la perfección.",
    author: "Javier R.",
    project: "Baño de Invitados",
  },
];

// --- Reusable UI Components ---

const BudgetCalculator: FC = () => {
  type SizeType = "small" | "medium" | "large";
  type QualityType = "essential" | "design" | "premium";

  const [size, setSize] = useState<SizeType>("medium");
  const [quality, setQuality] = useState<QualityType>("design");
  const [features, setFeatures] = useState({ shower: false, tub: false });

  const estimate = useMemo(() => {
    const baseCosts = { small: 3000, medium: 4500, large: 6000 };
    const qualityMultipliers = { essential: 1, design: 1.5, premium: 2.2 };
    const featureCosts = { shower: 800, tub: 1500 };

    let total: number = baseCosts[size] * qualityMultipliers[quality];
    if (features.shower) total += featureCosts.shower;
    if (features.tub) total += featureCosts.tub;

    return { min: Math.round(total * 0.9), max: Math.round(total * 1.1) };
  }, [size, quality, features]);

  const OptionButton = ({ value, state, setState, children }: any) => (
    <button
      onClick={() => setState(value)}
      className={`px-4 py-3 rounded-lg border-2 transition-all duration-300 w-full text-left ${
        state === value
          ? "bg-teal-500 border-teal-500 text-white shadow-lg"
          : "bg-white border-gray-200 hover:border-teal-400"
      }`}
    >
      {children}
    </button>
  );

  const FeatureToggle = ({ id, label, checked, onChange }: any) => (
    <label
      htmlFor={id}
      className='flex items-center justify-between bg-white p-4 rounded-lg border-2 border-gray-200 cursor-pointer has-[:checked]:border-teal-500 has-[:checked]:bg-teal-50 transition-all'
    >
      <span className='font-semibold text-gray-700'>{label}</span>
      <div className='relative'>
        <input
          id={id}
          type='checkbox'
          className='sr-only'
          checked={checked}
          onChange={onChange}
        />
        <div className='block bg-gray-300 w-14 h-8 rounded-full'></div>
        <div className='dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform'></div>
      </div>
      <style>{`#${id}:checked ~ .dot { transform: translateX(100%); background-color: #14b8a6; } #${id}:checked ~ .block { background-color: #a7f3d0; }`}</style>
    </label>
  );

  return (
    <section id='calculadora' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>
            Calcula tu Presupuesto al Instante
          </h2>
          <p className='text-lg text-gray-600 mt-4 max-w-2xl mx-auto'>
            Obtén una estimación rápida para tu reforma. ¡Sin compromiso!
          </p>
        </div>
        <div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start'>
          <div>
            <div className='mb-8'>
              <h3 className='text-xl font-bold text-gray-800 mb-4'>
                1. Tamaño del Baño
              </h3>
              <div className='space-y-3'>
                <OptionButton value='small' state={size} setState={setSize}>
                  <span className='font-bold'>Pequeño</span>{" "}
                  <span className='text-sm'>(hasta 4m²)</span>
                </OptionButton>
                <OptionButton value='medium' state={size} setState={setSize}>
                  <span className='font-bold'>Mediano</span>{" "}
                  <span className='text-sm'>(4m² - 6m²)</span>
                </OptionButton>
                <OptionButton value='large' state={size} setState={setSize}>
                  <span className='font-bold'>Grande</span>{" "}
                  <span className='text-sm'>(más de 6m²)</span>
                </OptionButton>
              </div>
            </div>
            <div className='mb-8'>
              <h3 className='text-xl font-bold text-gray-800 mb-4'>
                2. Calidad de Acabados
              </h3>
              <div className='space-y-3'>
                <OptionButton
                  value='essential'
                  state={quality}
                  setState={setQuality}
                >
                  <span className='font-bold'>Esencial</span>{" "}
                  <span className='text-sm'>(funcional y económico)</span>
                </OptionButton>
                <OptionButton
                  value='design'
                  state={quality}
                  setState={setQuality}
                >
                  <span className='font-bold'>Diseño</span>{" "}
                  <span className='text-sm'>(equilibrio calidad-precio)</span>
                </OptionButton>
                <OptionButton
                  value='premium'
                  state={quality}
                  setState={setQuality}
                >
                  <span className='font-bold'>Premium</span>{" "}
                  <span className='text-sm'>(materiales de alta gama)</span>
                </OptionButton>
              </div>
            </div>
            <div className='mb-8'>
              <h3 className='text-xl font-bold text-gray-800 mb-4'>
                3. Extras
              </h3>
              <div className='space-y-3'>
                <FeatureToggle
                  id='shower'
                  label='Ducha a ras de suelo'
                  checked={features.shower}
                  onChange={(e: { target: { checked: any } }) =>
                    setFeatures((f) => ({ ...f, shower: e.target.checked }))
                  }
                />
                <FeatureToggle
                  id='tub'
                  label='Bañera exenta'
                  checked={features.tub}
                  onChange={(e: { target: { checked: any } }) =>
                    setFeatures((f) => ({ ...f, tub: e.target.checked }))
                  }
                />
              </div>
            </div>
          </div>
          <div className='bg-white p-8 rounded-lg shadow-xl sticky top-28'>
            <h3 className='text-lg font-semibold text-gray-500'>
              PRESUPUESTO ESTIMADO
            </h3>
            <p className='text-4xl md:text-5xl font-extrabold text-teal-600 my-4'>
              {new Intl.NumberFormat("es-ES", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 0,
              }).format(estimate.min)}{" "}
              -{" "}
              {new Intl.NumberFormat("es-ES", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 0,
              }).format(estimate.max)}
            </p>
            <p className='text-sm text-gray-500 mb-6'>
              Esta es una estimación. El precio final puede variar según los
              materiales específicos y la complejidad del trabajo.
            </p>
            <a
              href='#contacto'
              className='w-full text-center bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors duration-300 block'
            >
              Solicitar Presupuesto Detallado
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#calculadora", label: "Calculadora" },
    { href: "#proceso", label: "Proceso" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <div className='bg-white min-h-screen font-sans text-gray-700'>
      <header className='bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-40'>
        <nav className='container mx-auto px-6 py-4 flex justify-between items-center'>
          <a
            href='#'
            className='text-2xl font-bold text-teal-600 hover:text-teal-700'
          >
            RenuevaBaño Pro
          </a>
          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='text-gray-600 hover:text-teal-600 transition duration-300 font-medium'
              >
                {link.label}
              </a>
            ))}
            <a
              href='#SubmitPresupuesto'
              className='bg-teal-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-teal-600 transition-all duration-300 shadow-md hover:shadow-lg'
            >
              Pedir Presupuesto
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className='relative h-[70vh] md:h-[90vh] flex items-center'>
          <img
            style={{ width: "100%", maxHeight: "100%", position: "absolute" }}
            src='/Shower_Tray_in_Hours.gif'
          ></img>
          <div className='relative z-10 container mx-auto px-6 text-white'>
            <div className='max-w-2xl'>
              <h1 className='text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg'>
                El Baño de tus Sueños, Hecho Realidad.
              </h1>
              <p className='text-lg md:text-xl mb-8 drop-shadow-md'>
                Expertos en reformas integrales. Calidad, diseño y
                profesionalidad a tu servicio.
              </p>
              <a
                href='#SubmitPresupuesto'
                className='bg-teal-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-teal-600 transition-transform hover:scale-105 duration-300 shadow-xl'
              >
                Solicita tu Presupuesto Gratis
              </a>
            </div>
          </div>
        </section>

        <section id='servicios' className='py-20 bg-white'>
          <div className='container mx-auto px-6'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>
                Servicios a tu Medida
              </h2>
              <p className='text-lg text-gray-600 mt-4 max-w-2xl mx-auto'>
                Desde pequeños cambios hasta reformas integrales, hacemos
                realidad el baño de tus sueños.
              </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300'>
                <ShowerIcon className='w-12 h-12 text-teal-500 mb-4' />
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                  Cambio a Ducha
                </h3>
                <p className='text-gray-600'>
                  Gana espacio, seguridad y comodidad con un moderno plato de
                  ducha.
                </p>
              </div>
              <div className='bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300'>
                <FurnitureIcon className='w-12 h-12 text-teal-500 mb-4' />
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                  Muebles a Medida
                </h3>
                <p className='text-gray-600'>
                  Diseñamos muebles que se adaptan perfectamente a tu espacio y
                  estilo.
                </p>
              </div>
              <div className='bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300'>
                <TileIcon className='w-12 h-12 text-teal-500 mb-4' />
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                  Alicatado y Solado
                </h3>
                <p className='text-gray-600'>
                  Renueva el aspecto de tu baño con las últimas tendencias en
                  cerámica.
                </p>
              </div>

              <div className='bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300'>
                <TuberiaIcon className='w-12 h-12 text-teal-500 mb-4' />
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                  Fontaneria
                </h3>
                <p className='text-gray-600'>
                  La base de una buena construcción está en lo que no se ve.
                  Fontanería impecable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id='portfolio' className='py-20 bg-gray-50'>
          <div className='container mx-auto px-6'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>
                Proyectos que Inspiran
              </h2>
              <p className='text-lg text-gray-600 mt-4'>
                Inspírate con nuestras transformaciones. Mira el antes y el
                después.
              </p>
            </div>
            <div>
              <GaleriaProyectos></GaleriaProyectos>
            </div>
          </div>
        </section>

        <BudgetCalculator />

        <section id='proceso' className='py-20 bg-white'>
          <div className='container mx-auto px-6'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>
                Nuestro Proceso Simplificado
              </h2>
              <p className='text-lg text-gray-600 mt-4'>
                Te acompañamos en cada paso para una experiencia sin estrés.
              </p>
            </div>
            <div className='grid md:grid-cols-4 gap-8'>
              {[
                {
                  num: "01",
                  title: "Contacto y Cita",
                  desc: "Nos cuentas tu idea y agendamos una visita.",
                },
                {
                  num: "02",
                  title: "Diseño y Presupuesto",
                  desc: "Creamos un diseño y un presupuesto detallado.",
                },
                {
                  num: "03",
                  title: "Ejecución de Obra",
                  desc: "Nuestro equipo realiza la reforma con la máxima calidad.",
                },
                {
                  num: "04",
                  title: "Entrega Final",
                  desc: "Revisamos cada detalle y te entregamos tu nuevo baño.",
                },
              ].map((step) => (
                <div key={step.num} className='text-center p-4'>
                  <div className='flex justify-center items-center mx-auto w-16 h-16 rounded-full bg-teal-100 text-teal-600 font-bold text-2xl mb-4'>
                    {step.num}
                  </div>
                  <h3 className='font-semibold text-xl mb-2 text-gray-800'>
                    {step.title}
                  </h3>
                  <p className='text-gray-600'>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='py-20 bg-teal-700 text-white'>
          <div className='container mx-auto px-6'>
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold'>
                La Opinión de Nuestros Clientes
              </h2>
              <p className='text-lg text-teal-200 mt-4'>
                Su satisfacción es nuestra mejor garantía.
              </p>
            </div>
            <div className='grid md:grid-cols-3 gap-8'>
              {testimonialsData.map((t, i) => (
                <div key={i} className='bg-teal-600 p-8 rounded-lg shadow-lg'>
                  <p className='text-5xl font-serif text-teal-400'>“</p>
                  <p className='italic text-lg mb-6'>{t.quote}</p>
                  <p className='font-bold text-white text-right'>
                    - {t.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id='contacto'></section>
        <section id='SubmitPresupuesto' className='py-20 bg-gray-100'>
          <div className='container mx-auto px-6'>
            <div className='max-w-3xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>
                ¿Listo para Empezar?
              </h2>
              <p className='text-lg text-gray-600 mt-4 mb-8'>
                Rellena el formulario y nos pondremos en contacto contigo para
                dar vida a tu proyecto.
              </p>
            </div>
            <div className='max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8'>
              <form onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 gap-6 mb-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium mb-2 text-gray-600'
                    >
                      Nombre Completo
                    </label>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      required
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500'
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium mb-2 text-gray-600'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      required
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500'
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className='mb-6'>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium mb-2 text-gray-600'
                  >
                    Teléfono (Opcional)
                  </label>
                  <input
                    type='tel'
                    name='phone'
                    id='phone'
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500'
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='mb-6'>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium mb-2 text-gray-600'
                  >
                    Cuéntanos tu idea
                  </label>
                  <textarea
                    name='message'
                    id='message'
                    rows={4}
                    required
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500'
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div>
                  <button
                    type='submit'
                    disabled={formStatus === "submitting"}
                    className='w-full bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors duration-300 disabled:bg-gray-400 shadow-lg hover:shadow-xl'
                  >
                    {formStatus === "submitting"
                      ? "Enviando..."
                      : "Enviar Solicitud"}
                  </button>
                </div>
                {formStatus === "success" && (
                  <p className='mt-4 text-center text-green-600 font-semibold'>
                    ¡Gracias! Hemos recibido tu mensaje.
                  </p>
                )}
                {formStatus === "error" && (
                  <p className='mt-4 text-center text-red-600 font-semibold'>
                    Hubo un error al enviar el formulario.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className='bg-gray-800 text-gray-400'>
        <div className='container mx-auto px-6 py-8 text-center'>
          <a
            href='#'
            className='text-2xl font-bold text-white hover:text-teal-400 mb-4 inline-block'
          >
            RenuevaBaño Pro
          </a>
          <div className='flex justify-center space-x-6 mb-6'>
            <a href='#' className='hover:text-white'>
              Facebook
            </a>
            <a href='#' className='hover:text-white'>
              Instagram
            </a>
            <a href='#' className='hover:text-white'>
              Pinterest
            </a>
          </div>
          <p>
            &copy; {new Date().getFullYear()} RenuevaBaño Pro. Todos los
            derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

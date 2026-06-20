import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Cog,
  DollarSign,
  Factory,
  Flame,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  ShieldCheck,
  UsersRound,
  Wrench,
  X,
} from "lucide-react";

const phone = "+923009440407";
const whatsapp = "923009440407";

const navItems = [
  ["About", "#about"],
  ["Capabilities", "#capabilities"],
  ["Process", "#process"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

const stats = [
  { value: 30, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 12, suffix: "+", label: "Industries Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const capabilities = [
  {
    title: "Sugar Mill Parts",
    image: "/media/sugar-mill.jpg",
    icon: Boxes,
    copy: "High-precision components for sugar processing mills including rollers, shafts, and crushing equipment engineered for maximum efficiency.",
  },
  {
    title: "Re-Rolling Mill Parts",
    image: "/media/rerolling-mill.jpg",
    icon: Layers3,
    copy: "Robust rolling mill components built to withstand extreme stress and temperature cycles in steel and metal processing operations.",
  },
  {
    title: "Paper Mill Parts",
    image: "/media/paper-mill.jpg",
    icon: Cog,
    copy: "Precision-engineered parts for paper manufacturing lines, including rollers, drives, and structural components for continuous operation.",
  },
  {
    title: "Industrial Furnaces",
    image: "/media/industrial-furnace.jpg",
    icon: Flame,
    copy: "Custom-designed industrial furnaces for heat treatment, forging, and thermal processing with precise temperature control.",
  },
  {
    title: "Steel Fabrication Works",
    image: "/media/steel-fabrication.jpg",
    icon: Factory,
    copy: "Complete heavy steel fabrication including structural frames, platforms, tanks, pressure vessels, and bespoke metal structures.",
  },
  {
    title: "Custom Engineering and Fabrication Solutions",
    image: "/media/custom-engineering.jpg",
    icon: Wrench,
    copy: "End-to-end custom fabrication and engineering, from design and prototyping to full-scale manufacturing for industrial challenges.",
  },
  {
    title: "CC Plant Parts",
    image: "/media/cc-plant.jpg",
    icon: Flame,
    copy: "Precision components for Continuous Casting Plants, including tundishes, mould assemblies, rollers, and cooling systems.",
  },
];

const process = [
  ["01", "Consultation", "We assess your technical requirements, project scope, and specifications through detailed engineering discussions."],
  ["02", "Engineering Design", "Our engineers develop precise CAD drawings, material specifications, and manufacturing plans tailored to your needs."],
  ["03", "Fabrication", "Skilled craftsmen and advanced machinery bring designs to life with meticulous attention to dimensional accuracy."],
  ["04", "Quality Inspection", "Rigorous multi-stage inspection protocols ensure every component meets international quality standards."],
  ["05", "Delivery & Installation", "On-time delivery with professional installation support and commissioning at your facility."],
];

const gallery = [
  { src: "/media/gallery-cutting.jpg", label: "Fabrication", span: "md:col-span-2" },
  { src: "/media/gallery-welding.jpg", label: "Workshop" },
  { src: "/media/gallery-video.jpg", label: "Machinery", video: true },
  { src: "/media/gallery-machine.jpg", label: "Machinery" },
  { src: "/media/gallery-facility.jpg", label: "Facility", span: "md:col-span-2" },
  { src: "/media/gallery-piping.jpg", label: "Steel" },
];

const trust = [
  [UsersRound, "Experienced Engineering Team", "Decades of hands-on expertise across heavy industry, metallurgy, and precision manufacturing."],
  [Cog, "Advanced Manufacturing Techniques", "Modern machinery, welding technology, and heat treatment equipment for superior output."],
  [Wrench, "Custom Engineering Solutions", "Every project is designed from scratch to match your exact specifications and site conditions."],
  [ShieldCheck, "Strict Quality Control", "Multi-stage inspection and testing protocols ensure zero defect delivery on every order."],
  [Clock3, "Timely Project Delivery", "Structured project management ensures your components arrive on schedule, every time."],
  [DollarSign, "Cost Effective Manufacturing", "Competitive pricing with uncompromising quality, delivering real value for industrial clients."],
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Aziz Sons Engineering Works home">
      <span className="grid h-10 w-10 shrink-0 place-items-center bg-teal text-white">
        <Cog className="h-6 w-6" aria-hidden="true" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-base font-black uppercase text-white">Aziz Sons</span>
        <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.32em] text-teal">Engineering Works</span>
      </span>
    </a>
  );
}

function Eyebrow({ children, center = false }) {
  return (
    <div className={`mb-7 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.38em] text-teal ${center ? "justify-center" : ""}`}>
      <span className="h-px w-10 bg-teal" />
      {children}
      {center && <span className="h-px w-10 bg-teal" />}
    </div>
  );
}

function SplitHeading({ first, accent, className = "", center = false }) {
  return (
    <h2 className={`font-display text-4xl font-black leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-6xl ${center ? "text-center" : ""} ${className}`}>
      {first}
      <span className="block text-teal">{accent}</span>
    </h2>
  );
}

function AnimatedStat({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frameId;
    let timerId;
    const duration = 1500;

    timerId = window.setTimeout(() => {
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(value * eased));

        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        }
      };

      frameId = requestAnimationFrame(tick);
    }, 250);

    return () => {
      window.clearTimeout(timerId);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <div className="hidden items-center gap-8 text-sm font-bold text-white/70 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${phone}`} className="inline-flex h-11 items-center gap-2 border border-white/15 px-4 text-sm font-black text-white transition hover:border-teal hover:text-teal">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </a>
          <a href="#contact" className="inline-flex h-11 items-center bg-teal px-6 text-sm font-black text-white transition hover:bg-white hover:text-navy">
            Request Quote
          </a>
        </div>
        <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 place-items-center border border-white/15 text-white lg:hidden" aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-navy px-5 py-5 lg:hidden">
          <div className="grid gap-2">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)} className="border border-white/10 px-4 py-3 text-sm font-bold text-white/80">
                {label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="bg-teal px-4 py-3 text-center text-sm font-black text-white">
              Request Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[760px] overflow-hidden bg-navy pt-[78px] text-white">
      <div className="absolute inset-0 bg-[url('/media/hero-workshop.jpg')] bg-cover bg-center opacity-34" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,.98),rgba(15,23,42,.88)_42%,rgba(15,23,42,.72)),linear-gradient(180deg,rgba(15,23,42,.45),rgba(15,23,42,.97))]" />
      <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-16 sm:px-8">
        <div className="max-w-5xl">
          <div className="mb-8 flex items-center gap-3 text-xs font-black uppercase tracking-[0.4em] text-teal">
            <span className="h-px w-12 bg-teal" />
            Lahore, Pakistan - Est. 1990
          </div>
          <h1 className="font-display text-5xl font-black leading-[0.98] tracking-tight sm:text-7xl lg:text-[92px]">
            Engineering
            <span className="block text-teal">Excellence</span>
            <span className="block">Through Precision</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
            Specialized in industrial machinery, steel fabrication, industrial furnaces, sugar mill parts, paper mill components, and custom engineering and fabrication solutions across Pakistan.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="inline-flex h-14 items-center justify-center gap-3 bg-teal px-8 text-sm font-black text-white transition hover:bg-white hover:text-navy">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#projects" className="inline-flex h-14 items-center justify-center border border-white/25 px-8 text-sm font-black text-white transition hover:border-teal hover:text-teal">
              View Our Projects
            </a>
          </div>
        </div>
      </div>
      <div className="relative border-y border-white/12 bg-darkNavy/88">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, suffix, label }) => (
            <div key={label} className="border-white/12 px-5 py-7 text-center first:border-l-0 lg:border-l">
              <p className="font-display text-4xl font-black text-white">
                <AnimatedStat value={value} suffix={suffix} />
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.26em] text-teal">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const badges = ["Quality", "Precision", "Reliability", "Innovation"];
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_.95fr]">
        <div>
          <Eyebrow>Who We Are</Eyebrow>
          <SplitHeading first="About Aziz Sons" accent="Engineering Works" />
          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Aziz Sons Engineering Works is a leading engineering and manufacturing company based in Lahore, Pakistan, specializing in the design, fabrication, and manufacturing of industrial machinery and engineering components.
            </p>
            <p>
              With years of experience and technical expertise, we are committed to delivering high-quality products and engineering solutions that meet the diverse needs of our clients across Pakistan.
            </p>
            <p>
              We utilize advanced manufacturing techniques and skilled craftsmanship to ensure the highest standards of quality and performance, building long-lasting relationships through cost-effective, durable, and efficient engineering solutions.
            </p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {badges.map((badge) => (
              <div key={badge} className="flex h-14 items-center gap-3 border border-slate-200 bg-lightBg px-5 text-sm font-black text-navy">
                <CheckCircle2 className="h-5 w-5 text-teal" aria-hidden="true" />
                {badge}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src="/media/about-facility.jpg" alt="Industrial manufacturing facility" className="aspect-[4/5] w-full object-cover" />
          <div className="absolute -bottom-6 left-0 bg-teal px-10 py-8 text-center text-white shadow-2xl sm:-left-6">
            <p className="font-display text-4xl font-black">30+</p>
            <p className="text-xs font-black uppercase tracking-[0.22em]">Years</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="bg-lightBg py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Eyebrow>What We Do</Eyebrow>
        <SplitHeading first="Our Manufacturing" accent="Capabilities" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map(({ title, image, icon: Icon, copy }) => (
            <article key={title} className="group border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <img src={image} alt="" className="h-52 w-full object-cover grayscale-[20%] transition duration-300 group-hover:grayscale-0" />
              <div className="p-6">
                <span className="grid h-11 w-11 place-items-center bg-teal/10 text-teal">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-black text-navy">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{copy}</p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-teal">
                  Learn More <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="bg-navy py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Eyebrow center>How We Work</Eyebrow>
        <h2 className="text-center font-display text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          Our <span className="text-teal">Process</span>
        </h2>
        <div className="relative mt-16 grid gap-8 lg:grid-cols-5">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-teal/70 lg:block" />
          {process.map(([number, title, copy], index) => (
            <article key={title} className="relative text-center">
              <div className={`mx-auto grid h-12 w-12 place-items-center border border-teal font-black ${index === process.length - 1 ? "bg-transparent text-teal" : "bg-teal text-white"}`}>
                {number}
              </div>
              <h3 className="mt-6 font-display text-xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-white/52">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="projects" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Eyebrow>Our Work</Eyebrow>
            <SplitHeading first="Recent Projects &" accent="Manufacturing Facility" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {["All", "Fabrication", "Machinery", "Workshop", "Steel"].map((item) => (
              <button key={item} type="button" className={`h-11 shrink-0 px-5 text-sm font-black ${item === "All" ? "bg-navy text-white" : "bg-lightBg text-slate-600 hover:bg-teal hover:text-white"}`}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid auto-rows-[220px] gap-4 md:grid-cols-3">
          {gallery.map(({ src, label, span, video }) => (
            <figure key={src} className={`group relative overflow-hidden bg-navy ${span || ""}`}>
              <img src={src} alt={label} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-navy/90 to-transparent p-5 text-sm font-black uppercase tracking-[0.22em] text-white opacity-0 transition group-hover:opacity-100">
                {label}
              </figcaption>
              {video && (
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white/80 text-teal backdrop-blur">
                    <Play className="ml-1 h-6 w-6 fill-current" />
                  </span>
                </span>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Director() {
  return (
    <section className="bg-lightBg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Eyebrow center>Leadership</Eyebrow>
        <h2 className="text-center font-display text-4xl font-black tracking-tight text-navy sm:text-5xl lg:text-6xl">
          Message From Our <span className="text-teal">Director</span>
        </h2>
        <div className="mt-14 grid gap-10 lg:grid-cols-[.85fr_1.35fr]">
          <div className="grid min-h-96 place-items-center bg-darkNavy p-8 text-center text-white">
            <div>
              <span className="mx-auto grid h-28 w-28 place-items-center rounded-full border-2 border-teal text-teal">
                <UsersRound className="h-14 w-14" />
              </span>
              <h3 className="mt-8 font-display text-2xl font-black">Muhammad Afzaal Khan</h3>
              <p className="mt-3 text-xs font-black uppercase tracking-[0.24em] text-teal">CEO & Director</p>
            </div>
          </div>
          <div className="border border-slate-200 bg-white p-8 sm:p-10">
            <p className="text-6xl font-black leading-none text-teal/20">“</p>
            <div className="-mt-6 space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Under the dynamic leadership of CEO & Director Muhammad Afzaal Khan, Aziz Sons Engineering Works has established a strong reputation for engineering excellence, precision manufacturing, reliability, superior workmanship, and customer satisfaction.
              </p>
              <p>
                We are dedicated to providing innovative solutions, superior workmanship, and timely project completion while serving industries across Pakistan with quality products and dependable services.
              </p>
            </div>
            <div className="mt-9 border-t border-slate-200 pt-7">
              <p className="font-display text-2xl font-black text-navy">Muhammad Afzaal Khan</p>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.22em] text-teal">CEO & Director, Aziz Sons Engineering Works</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionValues() {
  return (
    <section className="bg-navy py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Eyebrow center>What Drives Us</Eyebrow>
        <h2 className="text-center font-display text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          Mission, Vision & <span className="text-teal">Values</span>
        </h2>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <ValueCard number="01" title="Mission" copy="Deliver durable, cost-effective, and efficient engineering solutions through advanced manufacturing techniques and skilled craftsmanship that meets the highest international standards." />
          <ValueCard number="02" title="Vision" copy="To become Pakistan's most trusted industrial engineering and fabrication company, known for quality, innovation, and uncompromising customer satisfaction across all industrial sectors." featured />
          <ValueCard number="03" title="Core Values" values={["Quality", "Precision", "Reliability", "Innovation", "Customer Commitment", "Safety"]} />
        </div>
      </div>
    </section>
  );
}

function ValueCard({ number, title, copy, values, featured = false }) {
  return (
    <article className={`min-h-80 border border-white/12 p-8 ${featured ? "bg-teal text-white" : "border-l-4 border-l-teal bg-darkNavy"}`}>
      <p className="font-display text-6xl font-black text-white/12">{number}</p>
      <h3 className="mt-7 font-display text-3xl font-black">{title}</h3>
      {copy && <p className={`mt-5 text-lg leading-8 ${featured ? "text-white/88" : "text-white/58"}`}>{copy}</p>}
      {values && (
        <div className="mt-6 flex flex-wrap gap-2">
          {values.map((value) => (
            <span key={value} className="bg-white/10 px-3 py-2 text-xs font-black">
              {value}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

function Trust() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Eyebrow center>Our Advantage</Eyebrow>
        <SplitHeading first="Why Industrial Clients" accent="Trust Us" center />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trust.map(([Icon, title, copy]) => (
            <article key={title} className="flex gap-5 border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">
              <span className="grid h-12 w-12 shrink-0 place-items-center bg-navy text-teal">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-xl font-black text-navy">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-lightBg py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Eyebrow center>Contact Us</Eyebrow>
        <h2 className="text-center font-display text-4xl font-black tracking-tight text-navy sm:text-5xl lg:text-6xl">
          Get In <span className="text-teal">Touch</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-600">Ready to discuss your engineering requirements? Our team is standing by.</p>
        <div className="mt-14 grid gap-10 lg:grid-cols-[.85fr_1.3fr]">
          <aside className="bg-navy p-8 text-white sm:p-10">
            <h3 className="font-display text-3xl font-black">Contact Information</h3>
            <div className="mt-9 grid gap-7">
              <ContactLine icon={UsersRound} label="CEO & Director">Muhammad Afzaal Khan</ContactLine>
              <ContactLine icon={MapPin} label="Address">Abdul Qayyum Road, Badami Bagh, Lahore, Pakistan</ContactLine>
              <ContactLine icon={Phone} label="Mobile">+92 300 9440407<br />+92 334 4800999</ContactLine>
              <ContactLine icon={Phone} label="Landline">+92 42 37600999</ContactLine>
              <ContactLine icon={Mail} label="Email">azizsons799@gmail.com</ContactLine>
            </div>
            <a href={`tel:${phone}`} className="mt-10 inline-flex h-14 w-full items-center justify-center gap-3 bg-teal px-6 font-black text-white transition hover:bg-white hover:text-navy">
              <Phone className="h-5 w-5" /> Call Now
            </a>
          </aside>
          <form className="border border-slate-200 bg-white p-8 sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <Input label="Full Name" placeholder="Your full name" />
              <Input label="Company" placeholder="Your company name" />
              <Input label="Phone Number" placeholder="+92 xxx xxxxxxx" />
              <Input label="Email Address" placeholder="you@company.com" />
            </div>
            <label className="mt-6 block">
              <span className="text-xs font-black uppercase tracking-[0.22em] text-navy">Project Requirements</span>
              <textarea className="mt-3 min-h-36 w-full border border-slate-200 bg-lightBg px-5 py-4 text-navy outline-none transition placeholder:text-slate-400 focus:border-teal" placeholder="Describe your engineering requirements, quantities, and timeline..." />
            </label>
            <button type="button" className="mt-8 inline-flex h-14 w-full items-center justify-center gap-3 bg-navy px-6 font-black text-white transition hover:bg-teal">
              Send Inquiry <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div className="relative mt-10 h-[260px] overflow-hidden bg-darkNavy text-white sm:h-[320px]">
          <iframe
            title="Aziz Sons Engineering Works location map"
            src="https://www.google.com/maps?q=Abdul%20Qayyum%20Road%2C%20Badami%20Bagh%2C%20Lahore%2C%20Pakistan&output=embed"
            className="h-full w-full border-0 grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 bg-navy px-4 py-3 text-sm font-black shadow-xl sm:left-6 sm:top-6">
            <MapPin className="h-4 w-4 text-teal" /> Badami Bagh, Lahore
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLine({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center bg-teal/10 text-teal">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-[11px] font-black uppercase tracking-[0.28em] text-white/38">{label}</p>
        <p className="mt-2 text-lg font-semibold leading-7 text-white">{children}</p>
      </div>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <label className="block">
      <span className="text-xs font-black uppercase tracking-[0.22em] text-navy">{label}</span>
      <input className="mt-3 h-14 w-full border border-slate-200 bg-lightBg px-5 text-navy outline-none transition placeholder:text-slate-400 focus:border-teal" placeholder={placeholder} />
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-[#08111f] py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-7 max-w-sm leading-7 text-white/48">Pakistan's trusted partner for industrial engineering, heavy fabrication, and custom manufacturing solutions.</p>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.24em]">Quick Links</h3>
          <div className="mt-7 grid gap-4 text-white/48">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-teal">{label}</a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.24em]">Contact</h3>
          <div className="mt-7 grid gap-4 text-white/48">
            <p>Abdul Qayyum Road,<br />Badami Bagh, Lahore</p>
            <a href={`tel:${phone}`} className="transition hover:text-teal">+92 300 9440407</a>
            <a href="mailto:azizsons799@gmail.com" className="transition hover:text-teal">azizsons799@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 px-5 pt-7 text-sm text-white/36 sm:px-8">
        © {new Date().getFullYear()} Aziz Sons Engineering Works. All rights reserved.
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105" aria-label="WhatsApp">
        <MessageCircle className="h-7 w-7" />
      </a>
      <a href={`tel:${phone}`} className="grid h-14 w-14 place-items-center rounded-full bg-teal text-white shadow-xl transition hover:scale-105" aria-label="Call now">
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-white text-navy">
      <Header />
      <Hero />
      <About />
      <Capabilities />
      <Process />
      <Gallery />
      <Director />
      <MissionValues />
      <Trust />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}

export default App;

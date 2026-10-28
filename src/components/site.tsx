import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Check, Phone, Mail, MapPin, Menu, X, Zap, ShieldCheck, BatteryCharging, Move3d, Ruler, Gauge, Clock3, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { PageData } from "@/lib/site-content";
import industrialImg from "@/assets/xhaul-industrial.jpg";
import trackImg from "@/assets/xtrack-crawler.jpg";
import defenceImg from "@/assets/xhaul-defence.jpg";
import farmImg from "@/assets/farmx-agriculture.jpg";
import galleryXhaulFront from "@/assets/xhaul500-front.jpg";
import galleryXhaulSide from "@/assets/xhaul500-side.jpg";
import galleryXhaulRear from "@/assets/xhaul500-rear.jpg";
import galleryXhaulDetail from "@/assets/xhaul500-detail.jpg";
import galleryTrackFront from "@/assets/xtrack350-front.jpg";
import galleryTrackSide from "@/assets/xtrack350-side.jpg";
import galleryTrackRear from "@/assets/xtrack350-rear.jpg";
import galleryTrackDetail from "@/assets/xtrack350-detail.jpg";
import galleryFarmFront from "@/assets/field-front.jpg";
import galleryFarmSide from "@/assets/field-side.jpg";
import galleryFarmRear from "@/assets/field-rear.jpg";
import galleryFarmDetail from "@/assets/field-detail.jpg";
import galleryDefenceFront from "@/assets/xhauld-front.jpg";
import galleryDefenceSide from "@/assets/xhauld-side.jpg";
import galleryDefenceRear from "@/assets/xhauld-rear.jpg";
import galleryDefenceDetail from "@/assets/xhauld-detail.jpg";
import attachmentDump from "@/assets/attachment-dump-bed.jpg";
import attachmentFlat from "@/assets/attachment-flatbed.jpg";
import attachmentSprayer from "@/assets/attachment-sprayer.jpg";
import attachmentControl from "@/assets/attachment-control.jpg";
import logoRed from "@/assets/xmatic-logo-red.png.asset.json";
import logoGold from "@/assets/xmatic-logo-gold.png.asset.json";

const images = { industrial: industrialImg, track: trackImg, defence: defenceImg, farm: farmImg };
const productViews: Record<string, { src: string; alt: string }[]> = {
  "industrial/xhaul-500": [
    { src: galleryXhaulFront, alt: "Xhaul-500 front three-quarter view" },
    { src: galleryXhaulSide, alt: "Xhaul-500 side profile carrying a load" },
    { src: galleryXhaulRear, alt: "Xhaul-500 rear view with dump bed raised" },
    { src: galleryXhaulDetail, alt: "Xhaul-500 rugged wheel and ground clearance detail" },
  ],
  "industrial/xtrack-350": [
    { src: galleryTrackFront, alt: "Xtrack-350 tracked carrier on a wet access route" },
    { src: galleryTrackSide, alt: "Xtrack-350 side profile carrying material" },
    { src: galleryTrackRear, alt: "Xtrack-350 rear view on broken ground" },
    { src: galleryTrackDetail, alt: "Xtrack-350 rubber track and roller detail" },
  ],
  "agriculture/farmx-500": [
    { src: galleryFarmFront, alt: "FarmX-500 on an Indian field route" },
    { src: galleryFarmSide, alt: "FarmX-500 working between crop rows with sprayer" },
    { src: galleryFarmRear, alt: "FarmX-500 carrying harvested produce in an orchard" },
    { src: galleryFarmDetail, alt: "FarmX-500 field operation and crop detail" },
  ],
  "defence/xhaul-d": [
    { src: galleryDefenceFront, alt: "Xhaul-D front three-quarter view on scrubland" },
    { src: galleryDefenceSide, alt: "Xhaul-D modular interface deck side profile" },
    { src: galleryDefenceRear, alt: "Xhaul-D platform crossing gravel terrain" },
    { src: galleryDefenceDetail, alt: "Xhaul-D wheel and suspension detail" },
  ],
};

const galleryAttachments = [
  { title: "Dump bed", use: "Soil, aggregate, spoil and green waste", image: attachmentDump },
  { title: "Flat bed", use: "Crates, tools, drums and bundled material", image: attachmentFlat },
  { title: "Sprayer and tank", use: "Field spraying, dust suppression and wash-down", image: attachmentSprayer },
  { title: "Camera and remote", use: "Watch the machine and operate from outside the zone", image: attachmentControl },
];

const nav = [
  { label: "Industrial", path: "industrial", items: [["Xhaul-500", "industrial/xhaul-500"], ["Xtrack-350", "industrial/xtrack-350"], ["Compare", "industrial/compare"]]},
  { label: "Defence", path: "defence", items: [["Xhaul-D", "defence/xhaul-d"],["Export", "defence/export"]] },
  { label: "Agriculture", path: "agriculture", items: [["FarmX-500", "agriculture/farmx-500"], ["Field visit", "agriculture/field-visit"]] },
  { label: "Technology", path: "technology" },
  { label: "Ways to start", path: "ways-to-start", items: [["Buy", "ways-to-start/buy"], ["Rent", "ways-to-start/rent"], ["60-day pilot", "ways-to-start/60-day-pilot"]] },
];

const go = (slug: string, label: string, className?: string) => <Button asChild className={className}><Link to="/$" params={{ _splat: slug }}>{label}<ArrowRight size={16} /></Link></Button>;
const WhatsAppLink = ({ className = "" }: { className?: string }) => <a className={className} href="https://wa.me/917090970202" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={17} /><span>WhatsApp</span></a>;

export function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const close = () => { setOpen(false); setExpanded(null); };
  return <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
    <div className="mx-auto grid h-[76px] max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 xl:flex xl:justify-between xl:px-10">
      <Link to="/" className="flex min-w-0 items-center" aria-label="Xmatic Innovations home"><Logo className="h-14 w-auto max-w-[260px] object-contain sm:h-16 sm:max-w-[300px]" /></Link>
      <nav className="hidden h-full items-center gap-1 xl:flex">{nav.map((item) => <div className="group relative flex h-full items-center" key={item.path}>
        <Link to="/$" params={{ _splat: item.path }} className="flex h-full items-center gap-1 px-3 text-sm font-semibold hover:text-primary">{item.label}{item.items && <ChevronDown size={14} />}</Link>
        {item.items && <div className="invisible absolute left-0 top-full w-72 translate-y-2 border border-border bg-background p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">{item.items.map((entry) => <Link key={entry[1]} to="/$" params={{ _splat: entry[1] }} className="flex items-center justify-between px-3 py-3 text-sm hover:bg-muted hover:text-primary">{entry[0]}<ArrowRight size={13} /></Link>)}</div>}
      </div>)}</nav>
      <div className="hidden shrink-0 items-center gap-2 xl:flex"><Link to="/$" params={{ _splat: "service-support" }} className="px-3 text-sm font-semibold">Support</Link>{go("company/contact", "Arrange a demonstration")}</div>
      <Button variant="outline" className="h-10 w-10 shrink-0 px-0 xl:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <div className="fixed inset-x-0 bottom-0 top-[76px] z-50 overflow-y-auto border-t bg-background px-5 pb-28 pt-3 xl:hidden">
      {nav.map((item) => <div key={item.path} className="border-b border-border">
        {item.items ? <><button type="button" className="flex w-full items-center justify-between py-4 text-left text-lg font-bold" aria-expanded={expanded === item.path} onClick={() => setExpanded(expanded === item.path ? null : item.path)}>{item.label}<ChevronDown size={18} className={expanded === item.path ? "rotate-180 transition-transform" : "transition-transform"} /></button>
          {expanded === item.path && <div className="grid grid-cols-2 gap-x-5 pb-4">{item.items.map((entry) => <Link onClick={close} key={entry[1]} to="/$" params={{ _splat: entry[1] }} className="py-2 text-sm font-medium text-muted-foreground hover:text-primary">{entry[0]}</Link>)}</div>}</> : <Link onClick={close} to="/$" params={{ _splat: item.path }} className="block py-4 text-lg font-bold">{item.label}</Link>}
      </div>)}
      <div className="grid grid-cols-2 gap-3 pt-5"><a href="tel:+917090970202" className="flex min-h-12 items-center justify-center gap-2 bg-primary px-3 text-sm font-bold text-primary-foreground"><Phone size={17} />Call</a><WhatsAppLink className="flex min-h-12 items-center justify-center gap-2 border border-primary px-3 text-sm font-bold text-primary" /></div>
      <div className="pt-4">{go("company/contact", "Arrange a demonstration", "w-full")}</div>
    </div>}
  </header>;
}

function Logo({ inverse = false, className = "h-10 w-auto" }: { inverse?: boolean; className?: string }) {
  return <img src={inverse ? logoGold.url : logoRed.url} alt="Xmatic" className={className} width={1920} height={903} />;
}

export function Footer() {
  return <footer className="bg-foreground text-background"><div className="mx-auto max-w-[1440px] px-5 py-12 lg:px-10 lg:py-16">
    <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]"><div><div className="mb-6"><Logo inverse className="h-auto w-full max-w-[280px]" /></div><p className="max-w-md text-sm text-background/75">All Xmatic machines are remote controlled. An operator is in charge at all times. No machine is autonomous or self navigating.</p></div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">{[["Industrial", ["Xhaul-500", "Xtrack-350", "Compare", "Applications"]], ["Defence", ["Xhaul-D", "Payloads", "Interface", "Export"]], ["Company", ["About", "Certifications", "Partners", "Careers"]], ["Start", ["Buy", "Rent", "60-day pilot", "Contact"]]].map((group) => <div key={group[0]}><h3 className="mb-4 text-sm font-bold uppercase text-background/70">{group[0]}</h3><ul className="space-y-2 text-sm">{(group[1] as string[]).map((label) => <li key={label}>{label}</li>)}</ul></div>)}</div>
    </div><div className="mt-10 flex flex-col gap-4 border-t border-background/20 pt-6 text-sm text-background/75 md:flex-row md:justify-between"><span>© 2026 Xmatic Innovations Private Limited. All rights reserved.</span><span>Bengaluru, India · +91 70909 70202 · info@xmaticinnovations.com</span></div>
  </div></footer>;
}

function CompactHero({ data }: { data: PageData }) {
  return <section className="border-b border-border bg-secondary"><div className="mx-auto max-w-[1180px] px-5 py-8 sm:py-10 lg:px-10">
    {data.eyebrow && <p className="mb-2 text-sm font-bold text-primary">{data.eyebrow}</p>}
    <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl">{data.title}</h1>
    <p className="mt-2 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">{data.description}</p>
  </div></section>;
}

function PageHero({ data, product = false, compact = false }: { data: PageData; product?: boolean; compact?: boolean }) {
  if (compact) return <CompactHero data={data} />;
  const image = data.image ? images[data.image] : industrialImg;
  const headline = product ? data.subtitle : data.title;
  const supporting = product ? data.title : data.subtitle;
  return <><section className={`relative overflow-hidden bg-foreground text-background ${product ? "min-h-[520px] lg:min-h-[580px]" : "min-h-[570px] lg:min-h-[680px]"}`}>
    <img src={image} alt={`${headline} remote-controlled electric vehicle`} className="absolute inset-0 h-full w-full object-cover" width={1920} height={1088} />
    <div className="absolute inset-0 bg-hero-overlay" />
    <div className={`relative mx-auto flex max-w-[1440px] items-end px-5 lg:px-10 ${product ? "min-h-[520px] pb-14 pt-24 lg:min-h-[580px] lg:pb-20" : "min-h-[570px] pb-14 pt-24 lg:min-h-[680px] lg:pb-24"}`}>
      <div className="max-w-[720px]">{data.eyebrow && <p className="mb-3 text-sm font-bold text-primary">{data.eyebrow}</p>}
        <h1 className={`max-w-3xl font-black leading-[.98] ${product ? "text-5xl sm:text-6xl lg:text-7xl" : "text-5xl sm:text-6xl lg:text-7xl"}`}>{headline}</h1>
        {supporting && <p className="mt-4 max-w-3xl text-xl font-semibold leading-snug text-background/90">{supporting}</p>}
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-background/85 sm:text-lg">{data.description}</p>
        <div className="mt-7 flex flex-wrap gap-3">{go("company/contact", data.cta || "Arrange a demonstration", "bg-primary text-primary-foreground")}{product && go("knowledge-centre/downloads", "Request the specification", "border border-background/70 bg-transparent text-background hover:bg-background/10")}</div>
      </div>
    </div>
  </section>
  {data.stats && <section className="border-b bg-secondary"><div className={`mx-auto grid max-w-[1440px] grid-cols-2 lg:px-10 ${product ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
    {data.stats.map((stat, index) => <div key={stat[0]} className={`border-border px-5 py-5 sm:px-7 ${index > 0 ? "border-l" : ""} ${index > 1 ? "border-t lg:border-t-0" : ""} ${product && index === 3 ? "lg:border-l-0 lg:border-t" : ""} ${product && index >= 3 ? "lg:border-t" : ""}`}>
      <strong className="block text-2xl font-extrabold sm:text-3xl">{stat[0]}</strong><span className="mt-1 block text-sm font-semibold text-muted-foreground">{stat[1]}</span>
    </div>)}
  </div></section>}</>;
}

function Enquiry() {
  const [sent, setSent] = useState(false);
  if (sent) return <div className="border-l-4 border-primary bg-background p-6 sm:p-8"><Check className="mb-3 text-primary" /><h3 className="text-2xl font-extrabold">Thank you.</h3><p className="mt-2 text-muted-foreground">Someone from our team will be in touch within one working day.</p></div>;
  const fields = [
    { label: "Name", name: "name", placeholder: "Your name", type: "text" },
    { label: "Company or farm", name: "company", placeholder: "Organisation", type: "text" },
    { label: "Role", name: "role", placeholder: "Your role", type: "text" },
    { label: "Mobile", name: "mobile", placeholder: "+91", type: "tel" },
    { label: "Email", name: "email", placeholder: "name@company.com", type: "email" },
    { label: "District or city", name: "location", placeholder: "Location", type: "text" },
  ];
  return <form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
    {fields.map((field) => <label key={field.name} className="grid gap-1.5 text-sm font-bold">{field.label}<input required name={field.name} type={field.type} placeholder={field.placeholder} className="min-h-11 bg-background text-base font-normal" /></label>)}
    <label className="grid gap-1.5 text-sm font-bold">Which machine?<select name="machine" defaultValue="" className="min-h-11 bg-background text-base font-normal"><option value="">Select a machine</option><option>Xhaul-500</option><option>Xtrack-350</option><option>Xhaul-D</option><option>FarmX-500</option></select></label>
    <label className="grid gap-1.5 text-sm font-bold">Buy, rent or pilot?<select name="approach" defaultValue="" className="min-h-11 bg-background text-base font-normal"><option value="">Select an option</option><option>Buy</option><option>Rent</option><option>60-day pilot</option></select></label>
    <label className="grid gap-1.5 text-sm font-bold sm:col-span-2">What needs moving, spraying or carrying?<textarea required name="message" placeholder="Tell us about the route, load and ground" className="min-h-24 bg-background text-base font-normal" rows={3} /></label>
    <label className="flex items-start gap-2 text-sm leading-5 sm:col-span-2"><input required type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-primary" />I agree to be contacted by Xmatic Innovations about this enquiry.</label>
    <Button className="sm:col-span-2">Send my enquiry<ArrowRight size={16} /></Button>
  </form>;
}

function DataRows({ rows }: { rows: string[][] }) {
  const comparison = rows[0]?.length === 3 && (rows[0][1] === "Xhaul-500" || rows[0][1] === "Xtrack-350");
  const effectiveRows = comparison ? rows.slice(1) : rows;
  if (comparison) return <div className="grid gap-5 lg:grid-cols-2">{rows[0]?.slice(1).map((model, col) => <div key={model} className="border border-border bg-background">
    <div className="bg-foreground p-6 text-background"><h3 className="text-2xl font-extrabold">{model}</h3><p className="mt-1 text-sm font-semibold text-background/80">{model === "Xhaul-500" ? "Best for hard ground, heavy loads and lift access" : "Best for soft ground and narrow access"}</p></div>
    <dl className="divide-y divide-border">{effectiveRows.map((row) => <div key={row[0]} className="grid grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] gap-3 px-5 py-3"><dt className="text-sm font-bold">{row[0]}</dt><dd className="text-sm text-muted-foreground">{row[col + 1]}</dd></div>)}</dl>
  </div>)}</div>;
  return <div className="space-y-3">{rows.map((row) => <div key={row.join("_")} className="grid gap-2 border-b border-border py-4 sm:grid-cols-[minmax(0,.65fr)_minmax(0,1.35fr)] sm:gap-5">
    <div className="font-bold">{row[0]}</div><div className="grid gap-2 text-muted-foreground">{row.slice(1).map((cell, index) => <p key={`${row[0]}_${index}`} className="leading-relaxed">{cell}</p>)}</div>
  </div>)}</div>;
}

function Gallery({ slug }: { slug: string }) {
  const views = productViews[slug];
  if (!views) return null;
  return <section className="bg-background"><div className="mx-auto max-w-[1180px] px-5 py-10 sm:py-14 lg:px-10">
    <div className="mb-5 flex items-end justify-between"><div><p className="text-sm font-bold text-primary">PRODUCT VIEWS</p><h2 className="mt-1 text-3xl font-extrabold sm:text-4xl">A closer look</h2></div><span className="text-sm font-semibold text-muted-foreground">4 views</span></div>
    <div className="grid grid-cols-2 gap-3 sm:gap-4">{views.map((view) => <figure key={view.src} className="group overflow-hidden bg-secondary"><img src={view.src} alt={view.alt} loading="lazy" width={760} height={500} className="aspect-[1.45] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></figure>)}</div>
  </div></section>;
}

function Attachments() {
  return <section className="bg-secondary"><div className="mx-auto max-w-[1180px] px-5 py-10 sm:py-14 lg:px-10">
    <p className="text-sm font-bold text-primary">CONFIGURE THE TOP</p><div className="mb-5 mt-1 grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,.8fr)] sm:items-end"><h2 className="text-3xl font-extrabold sm:text-4xl">Attachments for the work</h2><p className="text-sm leading-relaxed text-muted-foreground">The platform stays the same. Choose a setup that fits your load, route and operating conditions.</p></div>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{galleryAttachments.map((item) => <article key={item.title} className="group border border-border bg-background"><div className="overflow-hidden"><img src={item.image} alt={item.title} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div><div className="p-4"><h3 className="text-lg font-extrabold">{item.title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.use}</p></div></article>)}</div>
  </div></section>;
}

function SectionContent({ section }: { section: PageData["sections"][number] }) {
  return <>
    {section.body && <p className="text-lg leading-relaxed text-muted-foreground">{section.body}</p>}
    {section.bullets && <ul className="grid gap-3 sm:grid-cols-2">{section.bullets.map((bullet, index) => {
      const Icon = [ShieldCheck, Move3d, Zap, BatteryCharging][index % 4];
      return <li key={bullet} className="border border-border bg-background p-5"><Icon className="mb-3 text-primary" size={22} /><p className="font-semibold leading-relaxed">{bullet}</p></li>;
    })}</ul>}
    {section.rows && <DataRows rows={section.rows} />}
  </>;
}

function ProductRelated({ slug }: { slug: string }) {
  const related = slug === "industrial/xhaul-500"
    ? [["Xtrack-350", "Soft ground and narrow access", "industrial/xtrack-350", trackImg], ["Compare the industrial range", "Wheels or tracks? Choose for the ground.", "industrial/compare", industrialImg]]
    : slug === "industrial/xtrack-350"
      ? [["Xhaul-500", "Hard standing, heavier loads and lifts", "industrial/xhaul-500", industrialImg], ["Compare the industrial range", "Wheels or tracks? Choose for the ground.", "industrial/compare", trackImg]]
      : slug === "agriculture/farmx-500"
        ? [["Arrange a field visit", "Try FarmX-500 on your land.", "agriculture/field-visit", industrialImg]]
        : [["Payload interface", "Define the mechanical, power and data interface.", "defence/interface", defenceImg], ["Design envelope", "Review customer-agreed target parameters.", "defence/design-envelope", industrialImg]];
  return <section className="bg-background"><div className="mx-auto max-w-[1180px] px-5 py-10 sm:py-14 lg:px-10"><h2 className="mb-5 text-2xl font-extrabold">Related products and pages</h2><div className="grid gap-4 sm:grid-cols-2">{related.map(([title, text, path, image]) => <Link key={path} to="/$" params={{ _splat: path }} className="group grid grid-cols-[112px_minmax(0,1fr)] overflow-hidden border border-border bg-background transition-transform hover:-translate-y-1"><img src={image} alt="" loading="lazy" width={480} height={320} className="h-full min-h-28 w-full object-cover" /><div className="flex min-w-0 flex-col justify-center p-4"><h3 className="font-extrabold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p></div></Link>)}</div></div></section>;
}

function MobileActions({ contact = false }: { contact?: boolean }) {
  if (contact) return null;
  return <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background/95 p-2 shadow-lg backdrop-blur md:hidden">
    <Link to="/$" params={{ _splat: "company/contact" }} className="flex min-h-11 items-center justify-center gap-1 bg-primary px-1 text-xs font-bold text-primary-foreground"><ArrowRight size={14} />Book demo</Link>
    <a href="tel:+917090970202" className="flex min-h-11 items-center justify-center gap-1 border-x border-border px-1 text-xs font-bold"><Phone size={14} />Call</a>
    <WhatsAppLink className="flex min-h-11 items-center justify-center gap-1 px-1 text-xs font-bold" />
  </div>;
}

export function ContentPage({ data, slug }: { data: PageData; slug: string }) {
  const contact = slug === "company/contact";
  const product = Boolean(productViews[slug]);
  const isCompare = slug === "industrial/compare";
  const isApplications = slug === "industrial/applications";
  return <>
    <PageHero data={data} product={product} compact={contact} />
    <main>
      {contact ? <section className="bg-secondary"><div className="mx-auto grid max-w-[1180px] gap-7 px-5 py-7 lg:grid-cols-[.7fr_1.3fr] lg:gap-12 lg:px-10 lg:py-9">
        <div><h2 className="text-2xl font-extrabold sm:text-3xl">Tell us what has to move.</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">Share the route, load and ground. Our team will help identify the right machine.</p><div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold"><a href="tel:+917090970202" className="inline-flex items-center gap-2"><Phone size={16} className="text-primary" />+91 70909 70202</a><a href="mailto:info@xmaticinnovations.com" className="inline-flex items-center gap-2"><Mail size={16} className="text-primary" />info@xmaticinnovations.com</a></div><p className="mt-3 flex items-center gap-2 text-sm"><MapPin size={16} className="text-primary" />Bengaluru, India</p><div className="mt-4"><WhatsAppLink className="inline-flex items-center gap-2 font-bold text-primary" /></div></div>
        <div className="border border-border bg-background p-4 sm:p-6"><Enquiry /></div>
      </div></section> : <>
        <div className="mx-auto max-w-[1180px] px-5 pt-5 lg:px-10"><nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm font-semibold text-muted-foreground"><Link to="/" className="hover:text-primary">Home</Link><span>/</span>{slug.split("/").map((part, index, parts) => { const path = parts.slice(0, index + 1).join("/"); return <span key={path} className="contents">{index > 0 && <span>/</span>}{index < parts.length - 1 ? <Link to="/$" params={{ _splat: path }} className="hover:text-primary">{part.replaceAll("-", " ")}</Link> : <span className="capitalize text-foreground">{part.replaceAll("-", " ")}</span>}</span>; })}</nav></div>
        {isApplications && <section className="bg-background"><div className="mx-auto max-w-[1440px] px-5 py-10 sm:py-14 lg:px-10 lg:py-16"><div className="mb-5"><p className="text-sm font-bold text-primary">APPLICATIONS</p><h2 className="mt-1 text-3xl font-extrabold sm:text-4xl">Work across difficult ground.</h2></div><div className="grid grid-cols-2 gap-3 lg:grid-cols-4">{[["Construction", "industrial", industrialImg], ["Process plants", "industrial/applications", trackImg], ["Agriculture", "agriculture/farmx-500", farmImg], ["Defence", "defence/xhaul-d", defenceImg]].map(([title, path, image]) => <Link key={title} to="/$" params={{ _splat: path }} className="group relative min-h-[190px] overflow-hidden bg-foreground sm:min-h-[230px]"><img src={image} alt={`${title} application`} loading="lazy" width={720} height={480} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-card-overlay" /><h3 className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-lg font-extrabold text-background">{title}<ArrowRight size={18} /></h3></Link>)}</div></div></section>}
        {product && <><Gallery slug={slug} /><Attachments /></>}
        {data.sections.map((section, index) => <section key={section.title} className={`${index % 2 ? "bg-secondary" : "bg-background"} ${product ? "" : ""}`}>
          <div className="mx-auto max-w-[1180px] px-5 py-9 sm:py-12 lg:px-10 lg:py-16">
            <div className={`${(isCompare || isApplications || section.rows?.length && section.rows.length > 5) ? "" : index % 2 === 0 ? "grid gap-5 sm:grid-cols-[minmax(0,.65fr)_minmax(0,1.35fr)] sm:gap-10" : ""}`}>
              <div className={`${isCompare || isApplications || section.rows?.length && section.rows.length > 5 ? "mb-5" : "mb-4 sm:mb-0"}`}><h2 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">{section.title}</h2></div>
              <div className={isCompare || isApplications || section.rows?.length && section.rows.length > 5 ? "" : ""}><SectionContent section={section} /></div>
            </div>
            {slug === "agriculture" && index === 0 && <div className="mt-6 grid gap-4 sm:grid-cols-[.8fr_1.2fr] sm:items-center"><img src={farmImg} alt="FarmX utility vehicle moving harvested produce in an orchard" loading="lazy" width={1600} height={1008} className="aspect-[16/9] w-full object-cover" /><p className="border-l-4 border-primary bg-background p-5 text-lg font-semibold leading-relaxed">Designed and built in Bengaluru for row spacings, slopes, soils and holdings as they actually are here—not adapted from a machine built elsewhere.</p></div>}
            {product && index === 0 && <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Rated capacities apply on level, dry, hard standing at 25°C ambient. Capacity on gradients, loose ground or with a raised load is lower. Confirm suitability by site survey; specifications may change.</p>}
          </div>
        </section>)}
        {product && data.specifications && <section className="bg-secondary"><div className="mx-auto max-w-[1180px] px-5 py-9 sm:py-12 lg:px-10 lg:py-16"><p className="text-sm font-bold text-primary">TECHNICAL DATA</p><h2 className="mb-5 mt-1 text-3xl font-extrabold sm:text-4xl">Full specifications</h2><div className="grid gap-2 md:grid-cols-2">{data.specifications.map(([label, value]) => <div key={label} className="grid grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] gap-3 border border-border bg-background px-4 py-3"><dt className="text-sm font-bold">{label}</dt><dd className="text-sm leading-relaxed text-muted-foreground">{value}</dd></div>)}</div></div></section>}
        {product && <ProductRelated slug={slug} />}
        {!isApplications && <section className="bg-primary text-primary-foreground"><div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-5 px-5 py-8 sm:flex-row sm:items-center lg:px-10"><div><p className="text-sm font-bold">NEXT STEP</p><h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">Put it on your ground.</h2></div>{go("company/contact", data.cta || "Arrange a demonstration", "bg-primary-foreground text-primary hover:bg-primary-foreground/90")}</div></section>}
      </>}
    </main>
    <MobileActions contact={contact} />
  </>;
}

function HowItWorks() {
  const steps = [
    { title: "Operator stands clear", detail: "The person with the remote stays outside the hazard zone.", icon: ShieldCheck },
    { title: "Wireless remote", detail: "One trained operator directs the machine and remains in charge.", icon: Gauge },
    { title: "Electric machine does the run", detail: "The carrier takes the load into heat, dust, spray and difficult access.", icon: Zap },
  ];
  return <section className="bg-foreground text-background"><div className="mx-auto max-w-[1180px] px-5 py-10 sm:py-14 lg:px-10 lg:py-16"><p className="text-sm font-bold text-primary">HOW IT WORKS</p><h2 className="mt-1 text-3xl font-extrabold sm:text-4xl">The operator stays outside the hazard.</h2><div className="mt-6 grid gap-3 sm:grid-cols-3">{steps.map(({ title, detail, icon: Icon }, index) => <article key={title} className="border border-background/20 p-5"><div className="mb-4 flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground"><Icon size={20} /></div><p className="text-sm font-bold text-background/70">0{index + 1}</p><h3 className="mt-1 text-xl font-extrabold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-background/80">{detail}</p></article>)}</div><p className="mt-4 text-sm leading-relaxed text-background/75">All Xmatic machines are remotely controlled. No machine is autonomous or self-navigating.</p></div></section>;
}

function ApplicationsPreview() {
  const items = [["Construction", "industrial", industrialImg], ["Process plants", "industrial/applications", trackImg], ["Agriculture", "agriculture/farmx-500", farmImg], ["Defence", "defence/xhaul-d", defenceImg]];
  return <section className="bg-background"><div className="mx-auto max-w-[1440px] px-5 py-10 sm:py-14 lg:px-10 lg:py-16"><div className="mb-5 flex items-end justify-between gap-4"><div><p className="text-sm font-bold text-primary">APPLICATIONS</p><h2 className="mt-1 text-3xl font-extrabold sm:text-4xl">Work across difficult ground.</h2></div>{go("industrial/applications", "All applications", "hidden sm:inline-flex")}</div><div className="grid grid-cols-2 gap-3 lg:grid-cols-4">{items.map(([title, path, image]) => <Link key={title} to="/$" params={{ _splat: path }} className="group relative min-h-[190px] overflow-hidden bg-foreground sm:min-h-[230px]"><img src={image} alt={`${title} application`} loading="lazy" width={720} height={480} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-card-overlay" /><h3 className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-lg font-extrabold text-background">{title}<ArrowRight size={18} /></h3></Link>)}</div><div className="mt-4 sm:hidden">{go("industrial/applications", "All applications")}</div></div></section>;
}

function WaysToStart() {
  const items = [["Buy", "A configured machine, backed by training, warranty and spares.", "ways-to-start/buy", Gauge], ["Rent", "For one project, month or season with support included.", "ways-to-start/rent", Clock3], ["60-day pilot", "Prove the machine on your site against agreed measures.", "ways-to-start/60-day-pilot", Check]] as const;
  return <section className="bg-secondary"><div className="mx-auto max-w-[1180px] px-5 py-10 sm:py-14 lg:px-10 lg:py-16"><p className="text-sm font-bold text-primary">WAYS TO START</p><h2 className="mt-1 text-3xl font-extrabold sm:text-4xl">Spec it. Rent it. Prove it.</h2><div className="mt-5 grid gap-3 md:grid-cols-3">{items.map(([title, text, path, Icon]) => <Link key={path} to="/$" params={{ _splat: path }} className="group border border-border bg-background p-5 transition-transform hover:-translate-y-1"><Icon className="mb-4 text-primary" size={23} /><h3 className="text-xl font-extrabold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">Explore {title}<ArrowRight size={16} /></span></Link>)}</div></div></section>;
}

export function HomePage() {
  const home: PageData = { eyebrow: "Electric unmanned ground vehicles · Made in India", title: "Move more. Move safer. Move electric.", subtitle: "The ground is the job.", description: "Remote-controlled electric ground vehicles that raise output, cut physical effort and make material movement safer—on ground that defeats everything else.", image: "industrial", cta: "Arrange a demonstration", sections: [] };
  const ranges = [["Xhaul-500", "500 kg · heavy industrial movement", "industrial/xhaul-500", industrialImg], ["Xtrack-350", "350 kg · soft ground and narrow access", "industrial/xtrack-350", trackImg], ["Xhaul-D", "Mission payload platform · built to interface", "defence/xhaul-d", defenceImg], ["FarmX-500", "500 kg · carry, spray and mow", "agriculture/farmx-500", farmImg]];
  return <>
    <PageHero data={home} />
    <section className="bg-background"><div className="mx-auto max-w-[1440px] px-5 py-10 sm:py-14 lg:px-10 lg:py-16"><div className="mb-5 flex items-end justify-between gap-4"><div><p className="text-sm font-bold text-primary">THE RANGE</p><h2 className="mt-1 text-3xl font-extrabold sm:text-4xl">Four machines. Four kinds of ground.</h2></div>{go("industrial/compare", "Compare Xhaul series", "hidden sm:inline-flex")}</div><div className="grid gap-3 sm:grid-cols-2">{ranges.map(([title, note, path, image]) => <Link key={title} to="/$" params={{ _splat: path }} className="group grid min-h-[145px] grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] overflow-hidden border border-border bg-secondary"><div className="flex flex-col justify-center p-4 sm:p-5"><h3 className="text-xl font-extrabold sm:text-2xl">{title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{note}</p><span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary">Explore<ArrowRight size={16} /></span></div><img src={image} alt={title} loading="lazy" width={800} height={540} className="h-full min-h-[145px] w-full object-cover transition-transform duration-500 group-hover:scale-105" /></Link>)}</div></div></section>
    <HowItWorks />
    <ApplicationsPreview />
    <WaysToStart />
    <section className="bg-background"><div className="mx-auto grid max-w-[1180px] gap-5 px-5 py-10 sm:grid-cols-2 sm:py-14 lg:grid-cols-4 lg:px-10 lg:py-16">{[["Up to 10×", "faster than manual handling with Xhaul-500"], ["Up to 5×", "faster than manual handling with Xtrack-350"], ["Around 90%", "lower operating cost than mini loaders and tractors"], ["About 2,000 h", "indicative payback period"]].map(([value, text]) => <div key={value} className="border-t-2 border-primary pt-4"><strong className="text-3xl font-extrabold">{value}</strong><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}</div><p className="mx-auto max-w-[1180px] px-5 pb-8 text-sm leading-relaxed text-muted-foreground lg:px-10">Figures are indicative and depend on application, site, surface and duty cycle; they are not a performance guarantee.</p></section>
    <section className="bg-primary text-primary-foreground"><div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-5 px-5 py-8 sm:flex-row sm:items-center lg:px-10"><div><p className="text-sm font-bold">ON YOUR SITE</p><h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">Bring us your toughest move.</h2><p className="mt-1 max-w-2xl text-sm text-primary-foreground/85">We will run a machine on your route, with your material, in front of your team.</p></div>{go("company/contact", "Arrange a demonstration", "bg-primary-foreground text-primary")}</div></section>
  </>;
}
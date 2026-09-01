import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Waves,
  Droplets,
  Wifi,
  UtensilsCrossed,
  PawPrint,
  Star,
  Menu,
  X,
  Instagram,
  Umbrella,
  Car,
  Wind,
  WashingMachine,
  Baby,
  MapPin,
  Phone,
  Clock,
  CreditCard,
  TreePine,
} from "lucide-react";

// ── Данные ─────────────────────────────────────────────────────────────────
const heroImages = [
  { src: "./hero-lesnoe.webp", alt: "Бунгало Лесное — белый домик в лесу, село Высокое, пер. Тельмана 5" },
  { src: "./hero-2.webp", alt: "Светлая гостиная с видом на лес" },
  { src: "./hero-3.webp", alt: "Терраса и зона отдыха на природе" },
  { src: "./hero-4.webp", alt: "Уютная спальня бунгало" },
  { src: "./hero-5.webp", alt: "Вид сверху на комплекс в окружении леса" },
];

const amenities = [
  { icon: Waves, label: "Пляж — мелкая галька", description: "Пляжные полотенца, зонты и шезлонги — бесплатно. Пляжной линии нет, тип пляжа — мелкая галька." },
  { icon: Umbrella, label: "Терраса и пикник", description: "Терраса, площадка для пикника и мангальная зона — бесплатно. Проведение праздников." },
  { icon: Wind, label: "Комфорт в номере", description: "Кондиционер, санузел, холодильник, москитные сетки, диван-кровать, номера для некурящих." },
  { icon: WashingMachine, label: "Бытовая техника", description: "Стиральная машина, утюг, уборка 2500 ₽. Отопление и винградник на территории." },
  { icon: UtensilsCrossed, label: "Кухня", description: "Плита, чайник, микроволновка, посуда. Питание — без питания, готовите сами." },
  { icon: Droplets, label: "Джакузи и душ", description: "Джакузи, душ, санузел в номере. Сауна — нет, бассейнов — 0, но есть детский бассейн." },
  { icon: Baby, label: "Для семей с детьми", description: "Детская площадка, детский бассейн, стульчик, детские ТВ-каналы. Заселение с детьми — да." },
  { icon: Wifi, label: "Wi-Fi везде", description: "Высокоскоростной интернет (широкополосный) на всей территории отеля — бесплатно." },
  { icon: Car, label: "Парковка", description: "Открытая бесплатная парковка по предварительному бронированию." },
  { icon: PawPrint, label: "Можно с питомцами", description: "Платно, до 5 кг. Кошки, собаки и другие животные. Можно с собакой." },
  { icon: CreditCard, label: "Оплата картой", description: "Оплата картой, предзапись. Депозит 6000 ₽ обязательно. Трансфер — нет." },
  { icon: TreePine, label: "Сад и виноградник", description: "Сад, виноградник, место для хранения лыж. Тихое лесное место, круглосуточно." },
];

const row1 = [
  "./hero-lesnoe.webp",
  "./hero-2.webp",
  "./hero-3.webp",
  "./hero-4.webp",
  "./hero-5.webp",
  "./gallery-1.webp",
  "./gallery-2.webp",
  "./gallery-3.webp",
  "./gallery-4.webp",
];

const row2 = [
  "./house-1.webp",
  "./house-2.webp",
  "./house-3.webp",
  "./house-4.webp",
  "./gallery-5.webp",
  "./gallery-6.webp",
  "./gallery-7.webp",
  "./gallery-8.webp",
];

const reviews = [
  {
    stars: 5,
    quote:
      "Бронировали на день рождения — всё было идеально. Домик ещё уютнее, чем на фото, утром свет в лесу просто волшебный. Мангал и терраса — супер, места хватило всем девятерым. Уже смотрим даты на следующий год.",
    reviewer: "Семья Морозовых",
    date: "Август",
    context: "День рождения, 9 гостей",
  },
  {
    stars: 5,
    quote:
      "Были во многих гостевых домах, но этот — лучший. Кровати очень удобные, спали прекрасно. Кухня полностью оборудована, вид из окна успокаивает. Уезжать совсем не хотелось.",
    reviewer: "Ирина и Алексей",
    date: "Сентябрь",
    context: "Годовщина",
  },
  {
    stars: 5,
    quote:
      "Приезжали с собакой (до 5 кг, доплата) — хозяева оставили миски, пелёнки и подсказали пляж, где можно с питомцем. Прогулка по лесу от калитки — восторг. Рекомендуем всем, кто любит природу.",
    reviewer: "Семья Келлер",
    date: "Октябрь",
    context: "Отдых с питомцем",
  },
];

// ── Компонент ───────────────────────────────────────────────────────────────
export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [enquirySent, setEnquirySent] = useState(false);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(t);
  }, [toast]);

  const marqueeRef = useRef<HTMLElement>(null);
  const [marqueeOffset, setMarqueeOffset] = useState(0);
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const el = marqueeRef.current;
        if (!el) {
          ticking = false;
          return;
        }
        const sectionTop = el.getBoundingClientRect().top + window.scrollY;
        const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
        setMarqueeOffset(offset);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCheckAvailability = () => {
    if (!checkIn || !checkOut) {
      setToast("Пожалуйста, выберите даты заезда и выезда.");
      return;
    }
    const data = { "Заезд": checkIn, "Выезд": checkOut, "Гостей": guests, "Источник": "Виджет на главном экране" };
    sendToEmail(data, `Лесное — проверка дат ${checkIn} → ${checkOut}`);
    setToast(`Проверяем наличие на ${guests} гост. — ${checkIn} → ${checkOut}. Заявка отправлена на maksonfantank@gmail.com`);
  };

  const sendToEmail = async (data: Record<string, string>, subject: string) => {
    try {
      await fetch("https://formsubmit.co/ajax/maksonfantank@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: subject, _captcha: "false" }),
      });
    } catch (err) {
      console.error("Email send failed", err);
    }
    // Fallback mailto (не блокирует, открывается по желанию пользователя)
    const body = encodeURIComponent(Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n"));
    const mailto = `mailto:maksonfantank@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    // не открываем автоматически, только логируем для отладки
    console.log("Mailto fallback:", mailto);
  };

  const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data: Record<string, string> = {};
    fd.forEach((v, k) => (data[k] = String(v)));
    // добавим также состояние виджета если совпадает
    data["Источник"] = "Форма заявки Лесное";
    await sendToEmail(data, `Лесное — новая заявка от ${data["Имя"] || data["name"] || "гостя"}`);
    setEnquirySent(true);
    setToast("Спасибо! Ваша заявка отправлена на maksonfantank@gmail.com. Ответим в течение 24 часов.");
    setTimeout(() => setEnquirySent(false), 5000);
    form.reset();
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ── НАВБАР ───────────────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white shadow-sm border-b border-[hsl(var(--border))]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#"
            className={`font-[Cormorant_Garamond] font-bold italic text-2xl tracking-wide transition-colors duration-500 ${
              scrolled ? "text-[hsl(var(--foreground))]" : "text-white"
            }`}
          >
            ЛЕСНОЕ
          </a>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "О доме", href: "#house" },
              { label: "Удобства", href: "#amenities" },
              { label: "Галерея", href: "#gallery" },
              { label: "Как добраться", href: "#location" },
              { label: "Цены", href: "#rates" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-[Jost] font-normal text-sm tracking-wider transition-colors duration-300 ${
                  scrolled ? "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#enquiry"
              className={`hidden sm:inline-flex font-[Jost] font-normal text-sm rounded-full px-5 py-2 transition-all duration-300 ${
                scrolled
                  ? "bg-[hsl(var(--primary))] text-white border border-transparent hover:opacity-90"
                  : "border border-white text-white bg-transparent hover:bg-white hover:text-[hsl(var(--foreground))]"
              }`}
            >
              Проверить даты
            </a>
            <button
              onClick={() => setNavOpen(!navOpen)}
              className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? "text-[hsl(var(--foreground))]" : "text-white"}`}
              aria-label="Меню"
            >
              {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-[hsl(var(--border))] overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {[
                  { label: "О доме", href: "#house" },
                  { label: "Удобства", href: "#amenities" },
                  { label: "Галерея", href: "#gallery" },
                  { label: "Как добраться", href: "#location" },
                  { label: "Цены", href: "#rates" },
                  { label: "Отзывы", href: "#reviews" },
                  { label: "Заявка", href: "#enquiry" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setNavOpen(false)}
                    className="font-[Jost] font-light text-base text-[hsl(var(--foreground))] py-2 border-b border-[hsl(var(--border))] last:border-0"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#enquiry"
                  onClick={() => setNavOpen(false)}
                  className="mt-2 bg-[hsl(var(--primary))] text-white font-[Jost] font-normal text-sm px-6 py-3 rounded-full text-center"
                >
                  Проверить даты
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[100dvh] overflow-hidden">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: activeIndex === i ? 1 : 0 }}
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.40)] via-[rgba(0,0,0,0.05)] to-[rgba(0,0,0,0.60)] z-10" />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-16 sm:pb-28 px-4 sm:px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/15 backdrop-blur-md border border-white/10 rounded-3xl px-5 sm:px-8 py-5 sm:py-7 mb-5 sm:mb-8 max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-[Jost] font-light text-[10px] sm:text-xs tracking-[0.35em] uppercase text-white/70 mb-3 sm:mb-4"
            >
              ПЕР. ТЕЛЬМАНА, 5 • СЕЛО ВЫСОКОЕ • СОЧИ
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, filter: "blur(16px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="font-[Cormorant_Garamond] font-bold italic text-white leading-tight text-[44px] sm:text-[52px] md:text-[64px] lg:text-[80px] mb-3"
            >
              Где время замирает.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="font-[Jost] font-light text-sm sm:text-lg text-white/80 max-w-xl leading-relaxed mx-auto"
            >
              Уютные бунгало в лесу для тех, кто ценит тишину и природу. Пять номеров, своя кухня, мангал и свежий воздух. Приезжайте. Вдыхайте. Оставайтесь подольше.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl px-4 sm:px-8 py-4 sm:py-6 w-full max-w-3xl"
          >
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-6 items-end">
              <div className="flex flex-col gap-1 text-left">
                <label className="font-[Jost] font-light text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-white/60">ЗАЕЗД</label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-transparent border-b border-white/40 text-white font-[Jost] text-xs sm:text-sm py-1 focus:outline-none focus:border-white cursor-pointer w-full [color-scheme:dark]"
                />
              </div>

              <div className="flex flex-col gap-1 text-left">
                <label className="font-[Jost] font-light text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-white/60">ВЫЕЗД</label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="bg-transparent border-b border-white/40 text-white font-[Jost] text-xs sm:text-sm py-1 focus:outline-none focus:border-white cursor-pointer w-full [color-scheme:dark]"
                />
              </div>

              <div className="flex flex-col gap-1 text-left">
                <label className="font-[Jost] font-light text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-white/60">ГОСТЕЙ</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="bg-transparent border-b border-white/40 text-white font-[Jost] text-xs sm:text-sm py-1 focus:outline-none focus:border-white cursor-pointer w-full appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={String(n)} className="text-[hsl(var(--foreground))]">
                      {n} {n === 1 ? "гость" : "гостей"}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleCheckAvailability}
                className="col-span-3 sm:col-span-1 bg-white text-[hsl(var(--foreground))] font-[Jost] font-normal text-xs sm:text-sm px-4 sm:px-6 py-2.5 rounded-full hover:bg-[hsl(var(--accent))] transition-colors duration-300 whitespace-nowrap"
              >
                Проверить наличие
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === i ? "bg-white scale-125" : "bg-white/40"}`}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── О КОМПЛЕКСЕ ─────────────────────────────────────────────────── */}
      <section id="house" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <div>
            <p className="font-[Jost] font-light text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[hsl(var(--muted-foreground))] mb-3 sm:mb-4">О КОМПЛЕКСЕ</p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-[Cormorant_Garamond] font-bold italic text-[38px] sm:text-[52px] text-[hsl(var(--foreground))] leading-tight mb-4 sm:mb-6"
            >
              Дом в лесу для всей семьи.
            </motion.h2>
            <p className="font-[Jost] font-light text-sm sm:text-base leading-relaxed text-[hsl(var(--muted-foreground))] mb-4 sm:mb-6">
              «Лесное» — гостевой дом и бунгало в селе Высокое, пер. Тельмана, 5. Построен в 2013 году, реконструкция в 2021. Всего 5 номеров — тихо, уютно и без толп. На территории — сад, виноградник, терраса и мангальная зона. В номерах — кондиционер, санузел, холодильник, стиралка и утюг.
            </p>
            <p className="font-[Jost] font-light text-sm sm:text-base leading-relaxed text-[hsl(var(--muted-foreground))] mb-6 sm:mb-8">
              Питание — без питания, но в каждом номере есть кухня: плита, чайник, микроволновка и посуда. Работаем <b>круглосуточно</b>, заезд в 14:00, выезд в 12:00. Можно с детьми и с питомцами до 5 кг (платно). Интернет — Wi-Fi на всей территории.
            </p>
            <div className="grid grid-cols-3 gap-y-4 sm:gap-y-6 gap-x-3 sm:gap-x-4 border-t border-[hsl(var(--border))] pt-6 sm:pt-8">
              {[
                { number: "5", label: "Номеров" },
                { number: "2013", label: "Постройка" },
                { number: "2021", label: "Реконструкция" },
                { number: "6000 ₽", label: "Депозит" },
                { number: "2500 ₽", label: "Уборка" },
                { number: "5 ночей", label: "Мин. бронь" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-[Cormorant_Garamond] font-bold italic text-3xl max-sm:text-2xl text-[hsl(var(--primary))] leading-none">{stat.number}</span>
                  <span className="font-[Jost] font-light text-sm text-[hsl(var(--muted-foreground))] mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="rounded-xl overflow-hidden h-36 sm:h-44 md:h-56">
              <img src="./house-1.webp" alt="Вид из окна бунгало на лес" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="rounded-xl overflow-hidden h-36 sm:h-44 md:h-56">
              <img src="./house-2.webp" alt="Камин в гостиной" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="rounded-xl overflow-hidden h-36 sm:h-44 md:h-56">
              <img src="./house-3.webp" alt="Кухня с плитой и посудой" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="rounded-xl overflow-hidden h-36 sm:h-44 md:h-56">
              <img src="./house-4.webp" alt="Терраса со столом на открытом воздухе" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ── УДОБСТВА ─────────────────────────────────────────────────────── */}
      <section id="amenities" className="py-16 sm:py-24 bg-[hsl(var(--muted))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-[Cormorant_Garamond] font-bold italic text-[36px] sm:text-[48px] text-[hsl(var(--foreground))] leading-tight text-center mb-3 sm:mb-4"
          >
            Всё включено.
          </motion.h2>
          <p className="font-[Jost] font-light text-center text-[hsl(var(--muted-foreground))] mb-8 sm:mb-14 text-sm sm:text-base">
            Ничего не нужно везти — всё уже на месте. Просто отдыхайте.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <motion.div
                  key={amenity.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 text-center border border-[hsl(var(--border))] hover:shadow-md hover:border-[hsl(var(--primary)/0.3)] transition-all duration-300"
                >
                  <div className="flex justify-center mb-3">
                    <Icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="font-[Jost] font-normal text-sm text-[hsl(var(--foreground))] mb-1.5">{amenity.label}</h3>
                  <p className="font-[Jost] font-light text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">{amenity.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Доп. информация */}
          <div className="mt-10 bg-white rounded-2xl border border-[hsl(var(--border))] p-6 md:p-8">
            <h3 className="font-[Cormorant_Garamond] font-semibold text-xl text-[hsl(var(--foreground))] mb-4">Подробнее об отеле</h3>
            <div className="grid md:grid-cols-3 gap-6 font-[Jost] font-light text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
              <div>
                <p className="font-normal text-[hsl(var(--foreground))] mb-2">Пляжный отдых</p>
                <p>Полотенца, зонты и шезлонги — бесплатно. Тип пляжа — мелкая галька. Пляжной линии нет.</p>
                <p className="font-normal text-[hsl(var(--foreground))] mt-4 mb-2">Парковка</p>
                <p>Бесплатная открытая парковка по предварительному бронированию.</p>
              </div>
              <div>
                <p className="font-normal text-[hsl(var(--foreground))] mb-2">Номера</p>
                <p>Кондиционер, санузел, холодильник, стиралка, утюг, москитные сетки, диван-кровать, некурящие номера.</p>
                <p className="font-normal text-[hsl(var(--foreground))] mt-4 mb-2">Для детей</p>
                <p>Стульчик, площадка, детский бассейн, ТВ-каналы. Коляска и кроватки 0-3 года — нет.</p>
              </div>
              <div>
                <p className="font-normal text-[hsl(var(--foreground))] mb-2">Важно</p>
                <p>Заселение с детьми — да. Минимальный срок — 5 ночей. Доп. спальное место — нет. Тренажёрный зал, сауна — нет. Вес питомца до 5 кг.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ГАЛЕРЕЯ / MARQUEE ────────────────────────────────────────────── */}
      <section
        ref={marqueeRef}
        id="gallery"
        className="bg-[#0C0C0C] pt-12 md:pt-16 pb-12 md:pb-16 overflow-x-clip"
        style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}
      >
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <h2 className="font-[Cormorant_Garamond] font-bold italic text-[48px] max-md:text-[36px] text-white leading-tight mb-2">Посмотрите сами.</h2>
          <p className="font-[Jost] font-light text-white/60">Каждый уголок «Лесного» продуман для вашего уюта — ниже лента наших проектов.</p>
        </div>
        {/* Row 1 — движется ВПРАВО при скролле вниз — все фото уникальны */}
        <div className="flex gap-3 mb-3" style={{ transform: `translateX(${marqueeOffset - 200}px)`, willChange: "transform" }}>
          {row1.map((src, i) => (
            <div key={`r1-${i}`} className="flex-shrink-0 w-[300px] h-[190px] md:w-[420px] md:h-[270px] rounded-2xl overflow-hidden">
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        {/* Row 2 — движется ВЛЕВО — без повторов */}
        <div className="flex gap-3" style={{ transform: `translateX(${-(marqueeOffset - 200)}px)`, willChange: "transform" }}>
          {row2.map((src, i) => (
            <div key={`r2-${i}`} className="flex-shrink-0 w-[300px] h-[190px] md:w-[420px] md:h-[270px] rounded-2xl overflow-hidden">
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* ── РАСПОЛОЖЕНИЕ ─────────────────────────────────────────────────── */}
      <section id="location" className="py-16 sm:py-24 bg-[hsl(var(--accent)/0.4)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <div className="bg-white rounded-3xl py-8 sm:h-96 flex flex-col items-center justify-center text-center gap-2 border border-[hsl(var(--border))] px-6">
            <span className="text-3xl sm:text-4xl">📍</span>
            <p className="font-[Cormorant_Garamond] italic text-lg sm:text-xl text-[hsl(var(--foreground))]">пер. Тельмана, 5</p>
            <p className="font-[Jost] font-light text-xs sm:text-sm text-[hsl(var(--foreground))]">село Высокое, Сочи</p>
            <a href="tel:+79184004090" className="mt-2 inline-flex items-center gap-2 bg-[hsl(var(--primary))] text-white font-[Jost] text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full">
              <Phone className="w-4 h-4" /> +7 (918) 400-40-90
            </a>
            <p className="font-[Jost] font-light text-[10px] sm:text-xs text-[hsl(var(--muted-foreground))] mt-1">Круглосуточно • Построить маршрут</p>
            <p className="font-[Jost] font-light text-[10px] sm:text-xs text-[hsl(var(--muted-foreground))] mt-2 max-w-[260px]">Точный адрес и карта отправляются после бронирования</p>
          </div>
          <div>
            <p className="font-[Jost] font-light text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[hsl(var(--muted-foreground))] mb-3 sm:mb-4">КАК ДОБРАТЬСЯ</p>
            <h2 className="font-[Cormorant_Garamond] font-bold italic text-[36px] sm:text-[48px] text-[hsl(var(--foreground))] leading-tight mb-4 sm:mb-6">Где вы проснётесь.</h2>
            <p className="font-[Jost] font-light text-sm sm:text-base leading-relaxed text-[hsl(var(--muted-foreground))] mb-6 sm:mb-8">
              «Лесное» находится в пер. Тельмана, 5, село Высокое — тихий зелёный уголок Сочи в окружении леса. До пляжа с мелкой галькой — недалеко, магазины рядом, а городской шум остаётся далеко позади. Идеально, если хотите тишины, но оставаться близко к морю.
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { emoji: "🏖️", place: "Пляж, мелкая галька", time: "полотенца/зонты — бесплатно" },
                { emoji: "🅿️", place: "Парковка открытая", time: "бесплатно, по брони" },
                { emoji: "🍖", place: "Мангальная зона", time: "бесплатно" },
                { emoji: "🏡", place: "Сад и виноградник", time: "на территории" },
                { emoji: "🐾", place: "С питомцами", time: "до 5 кг, платно" },
                { emoji: "⏰", place: "Заезд 14:00 / Выезд 12:00", time: "круглосуточно" },
              ].map((item) => (
                <li key={item.place} className="flex items-center gap-2 sm:gap-3">
                  <span className="text-base sm:text-lg">{item.emoji}</span>
                  <span className="font-[Jost] font-light text-xs sm:text-sm text-[hsl(var(--foreground))]">{item.place}</span>
                  <span className="ml-auto font-[Jost] font-light text-[10px] sm:text-xs text-[hsl(var(--muted-foreground))] whitespace-nowrap">{item.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 sm:mt-8 flex gap-3">
              <a href="tel:+79184004090" className="font-[Jost] text-xs sm:text-sm text-[hsl(var(--primary))] underline underline-offset-4">Показать телефон</a>
              <span className="text-[hsl(var(--border))]">|</span>
              <a href="#enquiry" className="font-[Jost] text-xs sm:text-sm text-[hsl(var(--primary))] underline underline-offset-4">Построить маршрут</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ЦЕНЫ ─────────────────────────────────────────────────────────── */}
      <section id="rates" className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-[Cormorant_Garamond] font-bold italic text-[36px] sm:text-[48px] text-[hsl(var(--foreground))] leading-tight mb-4">Цены и бронирование.</h2>
          <p className="font-[Jost] font-light text-[hsl(var(--muted-foreground))] mb-8 sm:mb-12 text-sm sm:text-base leading-relaxed">
            Всего 5 номеров — бронируйте заранее. Оплата картой, обязательный депозит 6000 ₽, уборка 2500 ₽. Минимальный срок бронирования — 5 ночей. Заезд в 14:00, выезд в 12:00.
          </p>
          <div className="border border-[hsl(var(--border))] rounded-2xl overflow-hidden mb-6 sm:mb-8">
            {[
              { season: "Низкий сезон", months: "Январь – март, ноябрь", price: "от 2500 ₽", unit: "/ ночь" },
              { season: "Средний сезон", months: "Апрель – июнь, сентябрь – октябрь", price: "от 3500 ₽", unit: "/ ночь" },
              { season: "Высокий сезон", months: "Июль – август", price: "от 5500 ₽", unit: "/ ночь" },
              { season: "Праздники и выходные", months: "Мин. 5 ночей", price: "от 6500 ₽", unit: "/ ночь", highlight: true },
            ].map((row) => (
              <div
                key={row.season}
                className={`flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-8 py-4 sm:py-6 border-b border-[hsl(var(--border))] last:border-b-0 gap-1 sm:gap-4 ${row.highlight ? "bg-[hsl(var(--accent)/0.3)]" : ""}`}
              >
                <div>
                  <p className="font-[Cormorant_Garamond] font-semibold text-lg sm:text-xl text-[hsl(var(--foreground))]">{row.season}</p>
                  <p className="font-[Jost] font-light text-xs sm:text-sm text-[hsl(var(--muted-foreground))] mt-0.5">{row.months}</p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="font-[Cormorant_Garamond] font-bold italic text-2xl sm:text-3xl text-[hsl(var(--primary))]">{row.price}</span>
                  <span className="font-[Jost] font-light text-xs sm:text-sm text-[hsl(var(--muted-foreground))] ml-1">{row.unit}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[hsl(var(--muted))] rounded-xl p-5 font-[Jost] font-light text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-10">
            <p><b className="font-normal text-[hsl(var(--foreground))]">Депозит:</b> 6000 ₽ (возвращается). <b className="font-normal text-[hsl(var(--foreground))]">Уборка:</b> 2500 ₽. <b className="font-normal text-[hsl(var(--foreground))]">Тип:</b> бунгало, гостевой дом. Постройка 2013, реконструкция 2021. Трансфер — нет. Питание — без питания.</p>
            <p className="mt-2">Дополнительное спальное место — нет. Шезлонги и зонты — бесплатно. Мангальная зона — бесплатно.</p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <button
              onClick={() => {
                document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
                setToast("Пролистайте вниз и оставьте заявку — проверим даты прямо сейчас.");
              }}
              className="bg-[hsl(var(--primary))] text-white font-[Jost] font-normal px-8 py-3 rounded-full text-sm sm:text-base hover:opacity-90 transition-opacity"
            >
              Проверить наличие
            </button>
            <button
              onClick={() => document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-[hsl(var(--primary))] text-[hsl(var(--primary))] font-[Jost] font-normal px-8 py-3 rounded-full text-sm sm:text-base hover:bg-[hsl(var(--accent)/0.3)] transition-colors"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </section>

      {/* ── ОТЗЫВЫ ───────────────────────────────────────────────────────── */}
      <section id="reviews" className="py-16 sm:py-24 bg-[hsl(var(--muted))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-[Cormorant_Garamond] font-bold italic text-[36px] sm:text-[48px] text-[hsl(var(--foreground))] leading-tight text-center mb-8 sm:mb-14">Что говорят гости.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.reviewer}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-[hsl(var(--border))]"
              >
                <div className="flex gap-1 mb-3 sm:mb-5">
                  {[...Array(review.stars)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]" />
                  ))}
                </div>
                <p className="font-[Jost] font-light italic text-sm sm:text-base text-[hsl(var(--foreground))] leading-relaxed mb-4 sm:mb-6">&ldquo;{review.quote}&rdquo;</p>
                <div className="border-t border-[hsl(var(--border))] pt-3 sm:pt-4">
                  <p className="font-[Jost] font-normal text-sm text-[hsl(var(--foreground))]">{review.reviewer}</p>
                  <p className="font-[Jost] font-light text-xs text-[hsl(var(--muted-foreground))] mt-0.5">
                    {review.context} · {review.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ЗАЯВКА ───────────────────────────────────────────────────────── */}
      <section id="enquiry" className="py-16 sm:py-24 bg-[hsl(var(--accent)/0.3)]">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-[Cormorant_Garamond] font-bold italic text-[36px] sm:text-[48px] text-[hsl(var(--foreground))] leading-tight mb-3 sm:mb-4">Спланируйте отдых.</h2>
          <p className="font-[Jost] font-light text-sm sm:text-base text-[hsl(var(--muted-foreground))] leading-relaxed mb-2">
            Расскажите, что планируете, и мы ответим в течение 24 часов. Любим знать повод — день рождения, семейный сбор или просто долгожданный отпуск.
          </p>
          <p className="font-[Jost] font-normal text-xs sm:text-sm text-[hsl(var(--foreground))] mb-6 sm:mb-8 flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" /> <a href="tel:+79184004090" className="underline underline-offset-4">+7 (918) 400-40-90</a> • Круглосуточно
          </p>
          <form onSubmit={handleEnquirySubmit} className="text-left space-y-5">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Новая заявка — Лесное" />
            <div>
              <label className="font-[Jost] font-light text-xs tracking-[0.2em] uppercase text-[hsl(var(--muted-foreground))] block mb-1.5">Имя</label>
              <input
                type="text"
                name="Имя"
                required
                placeholder="Ваше имя"
                className="w-full border border-[hsl(var(--border))] rounded-lg px-4 py-3 font-[Jost] font-light text-sm focus:outline-none focus:border-[hsl(var(--primary))] transition-colors bg-white"
              />
            </div>
            <div>
              <label className="font-[Jost] font-light text-xs tracking-[0.2em] uppercase text-[hsl(var(--muted-foreground))] block mb-1.5">Email</label>
              <input
                type="email"
                name="Email"
                required
                placeholder="hello@yourname.ru"
                className="w-full border border-[hsl(var(--border))] rounded-lg px-4 py-3 font-[Jost] font-light text-sm focus:outline-none focus:border-[hsl(var(--primary))] transition-colors bg-white"
              />
            </div>
            <div>
              <label className="font-[Jost] font-light text-xs tracking-[0.2em] uppercase text-[hsl(var(--muted-foreground))] block mb-1.5">Телефон</label>
              <input
                type="tel"
                name="Телефон"
                placeholder="+7 (918) 400-40-90"
                className="w-full border border-[hsl(var(--border))] rounded-lg px-4 py-3 font-[Jost] font-light text-sm focus:outline-none focus:border-[hsl(var(--primary))] transition-colors bg-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-[Jost] font-light text-xs tracking-[0.2em] uppercase text-[hsl(var(--muted-foreground))] block mb-1.5">Дата заезда</label>
                <input
                  type="date"
                  name="Дата заезда"
                  className="w-full border border-[hsl(var(--border))] rounded-lg px-4 py-3 font-[Jost] font-light text-sm focus:outline-none focus:border-[hsl(var(--primary))] transition-colors bg-white"
                />
              </div>
              <div>
                <label className="font-[Jost] font-light text-xs tracking-[0.2em] uppercase text-[hsl(var(--muted-foreground))] block mb-1.5">Дата выезда</label>
                <input
                  type="date"
                  name="Дата выезда"
                  className="w-full border border-[hsl(var(--border))] rounded-lg px-4 py-3 font-[Jost] font-light text-sm focus:outline-none focus:border-[hsl(var(--primary))] transition-colors bg-white"
                />
              </div>
            </div>
            <div>
              <label className="font-[Jost] font-light text-xs tracking-[0.2em] uppercase text-[hsl(var(--muted-foreground))] block mb-1.5">Количество гостей</label>
              <select name="Гостей" className="w-full border border-[hsl(var(--border))] rounded-lg px-4 py-3 font-[Jost] font-light text-sm focus:outline-none focus:border-[hsl(var(--primary))] transition-colors bg-white appearance-none">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={`${n} гостей`}>{n} гостей</option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-[Jost] font-light text-xs tracking-[0.2em] uppercase text-[hsl(var(--muted-foreground))] block mb-1.5">Откуда узнали о нас?</label>
              <select name="Источник" className="w-full border border-[hsl(var(--border))] rounded-lg px-4 py-3 font-[Jost] font-light text-sm focus:outline-none focus:border-[hsl(var(--primary))] transition-colors bg-white appearance-none">
                <option>Авито / Суточно.ру</option>
                <option>Instagram</option>
                <option>Сарафан / друзья</option>
                <option>Поиск Google / Яндекс</option>
                <option>Гид по Сочи</option>
                <option>Другое</option>
              </select>
            </div>
            <div>
              <label className="font-[Jost] font-light text-xs tracking-[0.2em] uppercase text-[hsl(var(--muted-foreground))] block mb-1.5">Расскажите о поездке (необязательно)</label>
              <textarea
                rows={4}
                name="Сообщение"
                placeholder="Это особый повод? Едете с детьми или питомцем? Есть вопросы по дому или району?"
                className="w-full border border-[hsl(var(--border))] rounded-lg px-4 py-3 font-[Jost] font-light text-sm focus:outline-none focus:border-[hsl(var(--primary))] transition-colors bg-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[hsl(var(--primary))] text-white font-[Jost] font-normal text-base py-4 rounded-full hover:opacity-90 transition-opacity mt-2"
            >
              {enquirySent ? "Заявка отправлена ✓" : "Отправить заявку"}
            </button>
            <p className="font-[Jost] font-light text-xs text-center text-[hsl(var(--muted-foreground))] mt-3">Нажимая, вы соглашаетесь на обработку данных. Ответим круглосуточно.</p>
          </form>
        </div>
      </section>

      {/* ── ФУТЕР ────────────────────────────────────────────────────────── */}
      <footer className="bg-[hsl(var(--foreground))] text-[hsl(var(--accent))] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pb-12 border-b border-white/10">
            <div className="max-w-xs">
              <p className="font-[Cormorant_Garamond] font-bold italic text-[hsl(var(--accent))] text-3xl mb-2">ЛЕСНОЕ</p>
              <p className="font-[Jost] font-light text-sm text-white/50 leading-relaxed">Где время замирает.</p>
              <p className="font-[Jost] font-light text-sm text-white/40 mt-4">Бунгало и гостевой дом в селе Высокое. 5 номеров, сад и виноградник. Работаем круглосуточно.</p>
              <p className="font-[Jost] font-light text-sm text-white/50 mt-3 flex items-center gap-2"><MapPin className="w-4 h-4" /> пер. Тельмана, 5, село Высокое</p>
              <p className="font-[Jost] font-light text-sm text-white/50 flex items-center gap-2"><Phone className="w-4 h-4" /> <a href="tel:+79184004090" className="hover:text-[hsl(var(--accent))]">+7 (918) 400-40-90</a></p>
              <p className="font-[Jost] font-light text-xs text-white/40 flex items-center gap-2"><Clock className="w-3 h-3" /> Круглосуточно • Заезд 14:00 / Выезд 12:00</p>
            </div>
            <nav className="flex flex-wrap gap-x-10 gap-y-3">
              {[
                { label: "О доме", href: "#house" },
                { label: "Удобства", href: "#amenities" },
                { label: "Галерея", href: "#gallery" },
                { label: "Как добраться", href: "#location" },
                { label: "Отзывы", href: "#reviews" },
                { label: "Заявка", href: "#enquiry" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-[Jost] font-light text-sm text-white/60 hover:text-[hsl(var(--accent))] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
            <p className="font-[Jost] font-light text-xs text-white/40 flex items-center gap-1"><MapPin className="w-3 h-3" /> пер. Тельмана, 5, село Высокое • <Phone className="w-3 h-3 ml-2" /> +7 (918) 400-40-90</p>
            <div className="flex items-center gap-5">
              <a href="#" aria-label="Instagram" className="text-white/40 hover:text-[hsl(var(--accent))] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="tel:+79184004090" className="font-[Jost] font-light text-xs text-white/40 hover:text-[hsl(var(--accent))] transition-colors">
                Показать телефон →
              </a>
            </div>
            <p className="font-[Jost] font-light text-xs text-white/30">© 2025 Лесное. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* ── ТОСТ ─────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] max-w-[90vw] w-max"
          >
            <div className="bg-[hsl(var(--foreground))] text-white font-[Jost] font-light text-sm px-6 py-4 rounded-full shadow-lg text-center leading-relaxed max-w-lg">
              {toast}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

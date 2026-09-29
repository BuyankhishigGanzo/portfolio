// Site content data - Нова хекс ХХК (Nova Hex LLC)

export const siteConfig = {
  name: "Нова хекс ХХК",
  brandWordmark: "nova hex.",
  logoUrl: "/images/logo.png",
  email: "info@novahex.mn",
  phone: "+976 7777 9969",
  web3FormsAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "777f2f9e-446d-4c42-bf06-a2135f41d80e",
  currency: {
    mn: "₮",
    en: "$"
  },
  socials: {
    facebook: "https://www.facebook.com/grado.mn",
    instagram: "https://www.instagram.com",
    linkedin: "",
    behance: "",
    dribbble: ""
  },
  theme: {
    accent: "#ff401f",
    accentBlue: "#6C8CFF",
    bg: "#050505",
    card: "#0c0c0c",
    line: "rgba(255,255,255,0.11)"
  }
};

export const navItems = [
  { id: "work", label_mn: "Системүүд", label_en: "Systems", num: "01" },
  { id: "about", label_mn: "Компани", label_en: "About", num: "02" },
  { id: "services", label_mn: "Үйлчилгээ", label_en: "Services", num: "03" },
  { id: "plans", label_mn: "Шийдэл & Үнэ", label_en: "Plans", num: "04" },
  { id: "connect", label_mn: "Холбогдох", label_en: "Contact", num: "05" }
];

const sharedClientItems = [
  {
    id: "ea779df3-4e07-4917-998a-24e2575bcdf7",
    name: "Aranjin",
    logo: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790061314354-Aranjin.png",
    height: 70
  },
  {
    id: "dc2a030e-d9e7-4904-858f-f624462bd35c",
    name: "Somedia",
    logo: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790061576872-Somedia.png",
    height: 60
  },
  {
    id: "546d8978-1314-4c2e-b10e-f6bfdec0381d",
    name: "Toktok",
    logo: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790062171977-toktok.png",
    height: 50
  },
  {
    id: "0b37fafa-9d72-4ca7-aab9-bea698d56f33",
    name: "Ynmal",
    logo: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790059577059-Ynmal.png",
    height: 50
  },
  {
    id: "4d57dea4-3c89-4729-b3ee-b2eace45ee76",
    name: "Asian city",
    logo: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790059248608-Asiancity.png",
    height: 60
  },
  {
    id: "972657a0-dd4e-4a61-957a-c60021285412",
    name: "Ayanz",
    logo: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790059530260-AYANZ.png",
    height: 50
  },
  {
    id: "e79918d7-9faf-4cb5-9733-28c1e856c7ba",
    name: "Enbarr",
    logo: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790059789322-Enbarr.png",
    height: 80
  },
  {
    id: "06cce31e-c12f-4300-944b-8a284862a645",
    name: "Global Bridge",
    logo: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790060147273-globalbridge.png",
    height: 60
  },
  {
    id: "6740dcb2-7bc3-4291-ae8d-06539b29b907",
    name: "etest",
    logo: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790059969119-etest.png",
    height: 60
  },
  {
    id: "eeb98b6c-341b-4aa7-9f3a-04383fd22f9d",
    name: "Grass",
    logo: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790060314920-Grass.png",
    height: 50
  },
  {
    id: "36ee9be4-6c48-4900-8acd-fbf5fef3663a",
    name: "Visahub",
    logo: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790062460726-visahub.png",
    height: 50
  },
  {
    id: "98edb536-0b68-4915-bcd6-66b8ffeec215",
    name: "GBHG",
    logo: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790062597162-GHHB.png",
    height: 70
  },
  {
    id: "e7ef451f-02f1-4fa6-9a01-46b348d74411",
    name: "pp",
    logo: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790060896015-Pp.png",
    height: 50
  },
  {
    id: "9c1269c4-17a7-40a1-80c2-2ad81cbfb5f5",
    name: "Pik",
    logo: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790060520903-pik.png",
    height: 70
  },
  {
    id: "e096d3fe-0c21-44ae-a66e-4780ad862fee",
    name: "StarTV",
    logo: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790062885532-StarTv.png",
    height: 40
  },
  {
    id: "895d208e-be91-4f93-a39b-b4d84396469e",
    name: "Ren",
    logo: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790061047462-Ren.png",
    height: 50
  },
  {
    id: "10b851ce-a32d-408d-80e2-710d6e357cd1",
    name: "Tet",
    logo: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790061240416-Tetgeleg.png",
    height: 50
  },
  {
    id: "f5284cc9-7c7e-45e5-baf2-0dae343fa958",
    name: "Argun",
    logo: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790063141425-Argun.png",
    height: 40
  },
  {
    id: "cbe146fe-957d-4c44-ae6a-0924a850dca3",
    name: "Tumurxac",
    logo: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790062305048-tumurxac.png",
    height: 60
  }
];

export const content = {
  mn: {
    nav: {
      cta: "Хамтран ажиллах →",
      ctaRoll1: "Хамтран",
      ctaRoll2: "ажиллах →",
    },
    hero: {
      eyebrow: "Технологийн компани",
      headingLine1: "ДИЖИТАЛ ИРЭЭДҮЙГ",
      headingLine2: "ХАМТДАА БҮТЭЭЕ.",
      description: "Бид боловсрол, соёл урлаг, аялал жуулчлал, маркетингийн салбарын дижитал шилжилтийг түүчээлж, дэвшилтэт вэб ба гар утасны программ хангамж, ухаалаг экосистемүүдийг хөгжүүлэгч технологийн компани юм.",
      heroImage: "",
      meta: [
        {
          title: "МТҮП 108 тоот, Улаанбаатар",
          subtitle: "Сүхбаатар дүүрэг",
          type: "location"
        },
        {
          title: "Систем & Вэб хөгжүүлэлт",
          subtitle: "+976 7777 9969",
          type: "globe"
        },
        {
          title: "Нова хекс ХХК",
          subtitle: "Хамтын ажиллагаанд нээлттэй",
          type: "badge"
        }
      ]
    },
    stats: [
      { value: "7", suffix: "+", label: "Дижитал платформ, системүүд" },
      { value: "38", suffix: "+", label: "Аудио хөтчийн хэлний дэмжлэг" },
      { value: "100", suffix: "K+", label: "Хүрсэн хэрэглэгчид" },
      { value: "99.9", suffix: "%", label: "Найдвартай ажиллагаа" }
    ],
    clients: {
      heading: "Хамтран ажилласан болон итгэл хүлээлгэсэн байгууллагууд",
      items: sharedClientItems
    },
    work: {
      eyebrow: "Бүтээгдэхүүнүүд",
      side: "Nova Hex Экосистем",
      heading: "Хөгжүүлсэн",
      headingAccent: "систем, платформууд",
      sub: "Бидний зах зээлд амжилттай нэвтрүүлсэн өөрсдийн болон хамтарсан ухаалаг дижитал системүүдтэй шууд танилцаарай.",
      categoriesHead: "Бүтээгдэхүүний ангилал",
      categoriesNote: "Доорх системүүдээс сонгон дэлгэрэнгүй танилцаж, шууд зочлох боломжтой.",
      allTab: "Бүгд",
      categories: [
        { id: "all", name: "Бүгд", slug: "all" },
        { id: "web-system", name: "Веб & Систем", slug: "web-system" },
        { id: "guide", name: "Аудио хөтөч & Музей", slug: "guide" },
        { id: "event", name: "Эвент менежмент", slug: "event" },
        { id: "edtech", name: "Боловсрол & EdTech", slug: "edtech" },
        { id: "tools", name: "Дижитал хэрэгслүүд & QR", slug: "tools" }
      ],
      projects: [
        {
          id: "grado-mn",
          title: "grado.mn",
          subtitle: "Дизайн, контент бүтээх студи платформ",
          description: "Монголын бүтээлч залуус, дизайнерууд болон бизнесүүдэд зориулсан дижитал дизайн, сошиал постер, хэвлэлийн эх, бэлэн загварын нэгдсэн студи платформ.",
          url: "https://grado.mn",
          category: "Веб & Систем",
          category_id: "web-system",
          categorySlug: "web-system",
          image: "/images/grado.webp",
          featured: true,
          year: 2026,
          client: "Nova Hex LLC"
        },
        {
          id: "eguide-mn",
          title: "eguide.mn",
          subtitle: "38 хэлний музей & аяллын ухаалаг аудио гайд",
          description: "Байгалийн түүхийн үндэсний музей болон 21 аймгийн түүх дурсгалт газруудад зориулсан 38 хэл дээрх AI ухаалаг аудио тайлбарлагч, аяллын маршрут төлөвлөгч платформ.",
          url: "https://eguide.mn",
          category: "Аудио хөтөч & Музей",
          category_id: "guide",
          categorySlug: "guide",
          image: "/images/eguide.webp",
          featured: true,
          year: 2026,
          client: "БШУҮМ & Nova Hex"
        },
        {
          id: "eventy-mn",
          title: "eventy.mn",
          subtitle: "Сайт урилга, зочдын бүртгэл, эвент систем",
          description: "Хурим, хүлээн авалт, эвент арга хэмжээний ухаалаг сайт урилга бэлтгэх, зочдын ирц, суудлын хуваарилалт, шууд LED дэлгэц болон сугалаа зохион байгуулах цогц систем.",
          url: "https://eventy.mn",
          category: "Эвент менежмент",
          category_id: "event",
          categorySlug: "event",
          image: "/images/eventy.webp",
          featured: true,
          year: 2026,
          client: "Nova Hex LLC"
        },
        {
          id: "edugame-mn",
          title: "edugame.mn",
          subtitle: "Хүүхдийн интерактив 3D сургалтын тоглоом",
          description: "Хүүхдийн танин мэдэхүй, үндэсний өв уламжлал (Монгол гэр, шагайн наадгай), сургуулийн өмнөх болон бага боловсролын интерактив 3D тоглоомын платформ.",
          url: "https://edugame.mn",
          category: "Боловсрол & EdTech",
          category_id: "edtech",
          categorySlug: "edtech",
          image: "/images/edugame.webp",
          featured: true,
          year: 2026,
          client: "Nova Hex LLC"
        },
        {
          id: "banner-grado-mn",
          title: "banner.grado.mn",
          subtitle: "Хөдөлгөөнт болон үсгэн баннерын систем",
          description: "Баяр ёслолын өлгөдөг А4 үсгэн баннер хормын дотор үүсгэх, хэвлэх болон дижитал маркетингийн хөдөлгөөнт баннер бэлтгэх автоматжуулсан студи.",
          url: "https://banner.grado.mn",
          category: "Дижитал хэрэгслүүд & QR",
          category_id: "tools",
          categorySlug: "tools",
          image: "/images/banner.webp",
          featured: true,
          year: 2026,
          client: "Grado Ecosystem"
        },
        {
          id: "tool-grado-mn",
          title: "tool.grado.mn",
          subtitle: "Бичиг, аудио, файл хөрвүүлэгчдийн төв",
          description: "Крилл-Монгол бичгийн хоёр талын ухаалаг хөрвүүлэгч, Текстээс аудио үүсгэгч (TTS), олон төрлийн файлын формат хөрвүүлэгчдийн нэгдсэн хэрэгсэл.",
          url: "https://tool.grado.mn",
          category: "Дижитал хэрэгслүүд & QR",
          category_id: "tools",
          categorySlug: "tools",
          image: "/images/tool.webp",
          featured: true,
          year: 2026,
          client: "Grado Ecosystem"
        },
        {
          id: "qr-grado-mn",
          title: "qr.grado.mn",
          subtitle: "Динамик QR код, загварчлал ба аналитик",
          description: "Агуулгыг нь хэзээ ч өөрчилж болдог динамик QR код үүсгэх, байршил ба уншилтын тооны бодит цагийн аналитик тайлан хянах ухаалаг платформ.",
          url: "https://qr.grado.mn",
          category: "Дижитал хэрэгслүүд & QR",
          category_id: "tools",
          categorySlug: "tools",
          image: "/images/qr.webp",
          featured: true,
          year: 2026,
          client: "Grado Ecosystem"
        }
      ]
    },
    about: {
      eyebrow: "Бид хэн бэ?",
      heading: "Нова хекс ХХК",
      portraitImage: "",
      copy: "Нова хекс ХХК нь Монголын дижитал шилжилтийг шинэ шатанд гаргах, салбар бүрийн хэрэгцээнд нийцсэн өндөр технологийн програм хангамж, вэб ба мобайл систем, хиймэл оюунт экосистемүүдийг хөгжүүлэгч технологийн компани юм. Бид соёл урлаг, боловсрол, аялал жуулчлал, маркетингийн салбаруудад grado.mn, eguide.mn, eventy.mn, edugame.mn зэрэг өөрсдийн технологийн шийдлүүдийг амжилттай нэвтрүүлж, зуун мянга гаруй хэрэглэгчдэд хүрээд байна.",
      resumeText: "Танилцуулга татах",
      resumeUrl: "",
      skillsEyebrow: "Технологийн чадамж & Шийдлүүд",
      skillsSub: "Бидний систем хөгжүүлэлтэд ашигладаг үндсэн технологи, архитектур.",
      skills: [
        {
          id: "skill-fullstack",
          name: "Full-stack Web & Mobile",
          short: "Web",
          icon: "",
          rating: 5,
          level: "Мэргэшсэн",
          description: "Next.js, React, Node.js, React Native суурьтай өндөр ачаалал даах системүүд."
        },
        {
          id: "skill-ai",
          name: "Multi-language AI & Audio",
          short: "AI",
          icon: "",
          rating: 5,
          level: "Мэргэшсэн",
          description: "38+ хэл дээрх ухаалаг музейн аудио гайд, TTS (Text-to-Speech), NLP шийдэл."
        },
        {
          id: "skill-cloud",
          name: "Cloud & Microservices",
          short: "Cloud",
          icon: "",
          rating: 5,
          level: "Мэргэшсэн",
          description: "Docker, Kubernetes, Supabase, PostgreSQL, AWS дэд бүтэц."
        },
        {
          id: "skill-3d",
          name: "Interactive 3D & EdTech",
          short: "3D",
          icon: "",
          rating: 4,
          level: "Гүнзгий",
          description: "Интерактив сургалтын тоглоом, Three.js, Canvas, 3D соёлын өвийн контент."
        },
        {
          id: "skill-uiux",
          name: "UI/UX & Product Design",
          short: "UIUX",
          icon: "",
          rating: 5,
          level: "Мэргэшсэн",
          description: "Хэрэглэгч төвтэй дизайн систем, хүртээмжтэй орчин үеийн интерфейс."
        },
        {
          id: "skill-qr",
          name: "Dynamic QR & Analytics",
          short: "QR",
          icon: "",
          rating: 5,
          level: "Мэргэшсэн",
          description: "Динамик холбоос, маркетинг автоматжуулалт, бодит цагийн дата аналитик."
        }
      ]
    },
    services: {
      eyebrow: "Үйлчилгээ",
      side: "Технологийн шийдэл",
      heading: "Мэргэжлийн",
      headingAccent: "технологийн үйлчилгээ",
      sub: "Бизнесийн үйл ажиллагааг дижиталжуулах, бүтээгдэхүүнээ зах зээлд амжилттай гаргахад шаардлагатай цогц шийдлүүд.",
      items: [
        {
          id: "srv-software",
          num: "01",
          title: "Програм хангамж ба Веб систем хөгжүүлэлт",
          description: "Байгууллагын захиалгат платформ, өндөр ачаалалтай веб болон гар утасны аппликейшн, SaaS бүтээгдэхүүн хөгжүүлэлт. Аюулгүй байдал, өргөтгөх боломж бүхий дэд бүтэцтэйгээр шийднэ.",
          price: "0",
          priceLabel: "Төслөөр тохирно",
          features: ["Next.js / React / Node.js", "Мобайл аппликейшн", "Өгөгдлийн сангийн архитектур", "API & Интеграци"]
        },
        {
          id: "srv-museum",
          num: "02",
          title: "Музей & Аялал жуулчлалын ухаалаг аудио гайд",
          description: "Smart Museum систем — Музей, үзэсгэлэн, түүх соёлын дурсгалт газруудад зориулсан 38+ хэл дээрх хиймэл оюунт аудио хөтөч, QR болон интерактив тайлбарлагч шийдэл.",
          price: "0",
          priceLabel: "Шийдлээр тохирно",
          features: ["38+ хэлний AI аудио", "QR тайлбарлагч систем", "Үзэгчдийн аналитик", "Контент удирдлагын CMS"]
        },
        {
          id: "srv-event",
          num: "03",
          title: "Эвент менежмент & Цахим урилгын цогц шийдэл",
          description: "Хурим, хүлээн авалт, хурал зөвлөгөөн, байгууллагын арга хэмжээнд зориулсан сайт урилга, зочдын QR ирц бүртгэл, суудлын хуваарилалт, LED дэлгэцийн медиа удирдлага.",
          price: "0",
          priceLabel: "Багцаар",
          features: ["Сайт & Зурган урилга", "QR ирц шалгах систем", "Суудлын хуваарилалт", "LED дэлгэцийн холболт"]
        },
        {
          id: "srv-design",
          num: "04",
          title: "UI/UX дизайн & Дижитал бүтээгдэхүүний концепц",
          description: "Хэрэглэгчийн зан төлөвт нийцсэн дижитал бүтээгдэхүүний UI/UX дизайн, брэндбүүк, дизайн систем, интерактив прототип болон хөгжүүлэгчдэд бэлэн шилжүүлэлт.",
          price: "0",
          priceLabel: "Төслөөр тохирно",
          features: ["Figma дизайн систем", "Хэрэглэгчийн туршлага судалгаа", "Интерактив прототип", "Брэндинг & Визуал дизайн"]
        },
        {
          id: "srv-consulting",
          num: "05",
          title: "Байгууллагын дижитал шилжилт & Зөвлөх үйлчилгээ",
          description: "Бизнесийн процессуудыг автоматжуулах, дотоод үйл ажиллагааны системийн архитектур төлөвлөх, клоуд дэд бүтцэд шилжих цогц зөвлөх үйлчилгээ.",
          price: "0",
          priceLabel: "Төслөөр тохирно",
          features: ["Процессын автоматжуулалт", "Дата & Аналитик төлөвлөлт", "Клоуд дэд бүтэц", "Технологийн аудит"]
        }
      ]
    },
    plans: {
      eyebrow: "Хамтын ажиллагаа",
      headingLine1: "БИДНИЙ",
      headingLine2: "ШИЙДЛҮҮД БА БАГЦУУД",
      plans: [
        {
          id: "plan-web",
          name: "Стандарт вэб & Танилцуулга",
          featured: false,
          price: 3500000,
          currency: "₮",
          priceLabel: "төсөл",
          billingToggle: false,
          slotsTotal: 5,
          slotsTaken: 2,
          featureList: [
            { label_mn: "Орчин үеийн responsive дизайн", label_en: "Modern responsive design" },
            { label_mn: "Хандалтын өндөр хурд (Next.js / SEO)", label_en: "High performance & SEO" },
            { label_mn: "Мэдээлэл удирдах хялбар CMS", label_en: "Easy-to-use CMS" },
            { label_mn: "Холбоо барих форм & Сошиал холболт", label_en: "Contact form & Social links" },
            { label_mn: "1 жилийн сервер & домэйн тохиргоо", label_en: "1-year hosting & domain setup" }
          ]
        },
        {
          id: "plan-saas",
          name: "SaaS & Захиалгат платформ",
          featured: true,
          price: 8500000,
          currency: "₮",
          priceLabel: "төсөл",
          billingToggle: false,
          slotsTotal: 3,
          slotsTaken: 1,
          featureList: [
            { label_mn: "Бизнесийн тусгай логик бүхий веб систем", label_en: "Custom business logic web platform" },
            { label_mn: "Хэрэглэгчийн удирдлагын систем (Auth/RBAC)", label_en: "User management & Role-based auth" },
            { label_mn: "QPay / Банкны төлбөрийн интеграци", label_en: "Payment gateway integration (QPay etc)" },
            { label_mn: "Админ удирдлагын иж бүрэн дашборд", label_en: "Comprehensive Admin Dashboard" },
            { label_mn: "Өгөгдлийн сангийн оновчлол & Аюулгүй байдал", label_en: "Database optimization & Security" },
            { label_mn: "API интеграци & 3-р талын системүүд", label_en: "API integration & 3rd party services" }
          ]
        },
        {
          id: "plan-enterprise",
          name: "Байгууллагын дижитал экосистем",
          featured: false,
          price: 15000000,
          currency: "₮",
          priceLabel: "төсөл",
          billingToggle: false,
          slotsTotal: 2,
          slotsTaken: 0,
          featureList: [
            { label_mn: "Музей / Аялал жуулчлалын ухаалаг аудио гайд", label_en: "Smart Museum / Travel AI Audio Guide" },
            { label_mn: "Эвент менежмент & Дижитал урилгын шийдэл", label_en: "Event management & Digital invitation" },
            { label_mn: "Динамик QR код & Аналитик менежмент", label_en: "Dynamic QR codes & Analytics" },
            { label_mn: "Клоуд микросервис & Өндөр найдвартай байдал", label_en: "Cloud microservices & 99.9% uptime" },
            { label_mn: "Тогтмол арчилгаа, шинэчлэл & 24/7 дэмжлэг", label_en: "Maintenance, updates & 24/7 support" }
          ]
        }
      ]
    },
    websiteOrder: {
      eyebrow: "Төсөл эхлүүлэх үү?",
      headingPrefix: "Танай байгууллагад ",
      headingAccent: "технологийн шийдэл",
      headingSuffix: "хэрэгтэй байна уу?",
      sub: "Бидэнтэй холбогдон төслийнхөө талаар ярилцаж, мэргэжлийн шийдэл болон үнийн санал аваарай.",
      buttonLabel: "Холбоо барих →"
    },
    contact: {
      eyebrow: "Хамтран ажиллах",
      headingLine1: "Хамтдаа",
      headingAccent: "бүтээцгээе",
      sub: "Төслийнхөө талаар бидэнд мэдээллээ үлдээгээрэй — манай баг тантай яаралтай холбогдон шийдэл санал болгоно.",
      form: {
        nameLabel: "Таны / Байгууллагын нэр",
        namePlaceholder: "Нэр",
        phoneLabel: "Холбогдох утас",
        phonePlaceholder: "+976 7777 9969",
        typeLabel: "Сонирхож буй үйлчилгээ",
        typePlaceholder: "Жишээ: Веб платформ, гар утасны апп, дотоод систем, автоматжуулалт…",
        budgetLabel: "Төсөв (заавал биш)",
        budgetPlaceholder: "Жишээ: 5–15 сая ₮",
        messageLabel: "Төслийн товч танилцуулга",
        messagePlaceholder: "Зорилго, хугацаа, онцлог шаардлага…",
        submit: "Хүсэлт илгээх →",
        submitting: "Илгээж байна...",
        successTitle: "Хүсэлт амжилттай илгээгдлээ!",
        successMsg: "Баярлалаа — бид тантай яаралтайгаар хариу холбогдож дэлгэрэнгүйг тохирно.",
        errorTitle: "Илгээж чадсангүй",
        errorMsg: "Ямар нэг зүйл буруудлаа. Бидэнтэй шууд утсаар холбогдоно уу:"
      }
    },
    connect: {
      eyebrow: "Холбоо барих",
      heading: "Нова хекс ХХК-тай",
      headingAccent: "холбогдох.",
      sub: "Шинэ төсөл, хамтын ажиллагаа эсвэл манай дижитал системүүдийн талаар мэдээлэл авахыг хүсвэл холбогдоорой.",
      cards: {
        phone: {
          key: "Утсаар холбогдох",
          value: "+976 7777 9969",
          desc: "Ажлын өдрүүдэд 09:00 - 18:00 цагт."
        },
        location: {
          key: "Байршил",
          value: "Мэдээллийн Технологийн Үндэсний Парк, 108 тоот",
          desc: "Улаанбаатар хот, Сүхбаатар дүүрэг. Биечлэн уулзах боломжтой."
        },
        social: {
          key: "Сошиал сувгууд",
          desc: "Шинэ систем, бүтээгдэхүүний мэдээлэл."
        }
      }
    },
    footer: {
      copyright: "© 2026 Нова хекс ХХК.",
      rights: "Бүх эрх хуулиар хамгаалагдсан. Nova Hex LLC.",
      backToTop: "Дээш ↑"
    }
  },
  en: {
    nav: {
      cta: "Work with us →",
      ctaRoll1: "Work",
      ctaRoll2: "with us →",
    },
    hero: {
      eyebrow: "Technology Company",
      headingLine1: "BUILDING THE",
      headingLine2: "DIGITAL FUTURE.",
      description: "We are an innovative technology company leading digital transformation in education, arts, culture, tourism, and marketing through cutting-edge web & mobile systems and intelligent platforms.",
      heroImage: "",
      meta: [
        {
          title: "IT Park #108, Ulaanbaatar",
          subtitle: "Sukhbaatar District",
          type: "location"
        },
        {
          title: "Software & Web Engineering",
          subtitle: "+976 7777 9969",
          type: "globe"
        },
        {
          title: "Nova Hex LLC",
          subtitle: "Open for collaboration",
          type: "badge"
        }
      ]
    },
    stats: [
      { value: "7", suffix: "+", label: "Digital platforms & systems" },
      { value: "38", suffix: "+", label: "Audio guide languages" },
      { value: "100", suffix: "K+", label: "Users reached" },
      { value: "99.9", suffix: "%", label: "System uptime" }
    ],
    clients: {
      heading: "Organizations & Partners We Work With",
      items: sharedClientItems
    },
    work: {
      eyebrow: "Our Products",
      side: "Nova Hex Ecosystem",
      heading: "Systems &",
      headingAccent: "Digital Platforms",
      sub: "Explore our proprietary and collaborative platforms built for modern digital transformation.",
      categoriesHead: "Product Categories",
      categoriesNote: "Select from the platforms below to explore in detail and visit directly.",
      allTab: "All",
      categories: [
        { id: "all", name: "All", slug: "all" },
        { id: "web-system", name: "Web & System", slug: "web-system" },
        { id: "guide", name: "Audio Guide & Museum", slug: "guide" },
        { id: "event", name: "Event Management", slug: "event" },
        { id: "edtech", name: "Education & EdTech", slug: "edtech" },
        { id: "tools", name: "Utilities & QR", slug: "tools" }
      ],
      projects: [
        {
          id: "grado-mn",
          title: "grado.mn",
          subtitle: "Digital content creation studio",
          description: "All-in-one graphic design studio platform for creators, designers, and businesses to produce posters, print materials, and social visual content.",
          url: "https://grado.mn",
          category: "Web & System",
          category_id: "web-system",
          categorySlug: "web-system",
          image: "/images/grado.webp",
          featured: true,
          year: 2026,
          client: "Nova Hex LLC"
        },
        {
          id: "eguide-mn",
          title: "eguide.mn",
          subtitle: "38-language AI audio guide platform",
          description: "Intelligent audio guide and travel platform deployed at the National Museum of Natural History and across 21 provinces with multi-language AI audio narration.",
          url: "https://eguide.mn",
          category: "Audio Guide & Museum",
          category_id: "guide",
          categorySlug: "guide",
          image: "/images/eguide.webp",
          featured: true,
          year: 2026,
          client: "NMNS & Nova Hex"
        },
        {
          id: "eventy-mn",
          title: "eventy.mn",
          subtitle: "Smart invitations & RSVP platform",
          description: "Full-service digital platform for weddings, galas, and corporate events featuring smart website invitations, QR attendance check-in, seat mapping, and live LED display integration.",
          url: "https://eventy.mn",
          category: "Event Management",
          category_id: "event",
          categorySlug: "event",
          image: "/images/eventy.webp",
          featured: true,
          year: 2026,
          client: "Nova Hex LLC"
        },
        {
          id: "edugame-mn",
          title: "edugame.mn",
          subtitle: "Interactive 3D educational games",
          description: "Interactive learning platform for preschool and primary students incorporating traditional heritage (Mongolian Ger 3D, Shagai games) and engaging STEM concepts.",
          url: "https://edugame.mn",
          category: "Education & EdTech",
          category_id: "edtech",
          categorySlug: "edtech",
          image: "/images/edugame.webp",
          featured: true,
          year: 2026,
          client: "Nova Hex LLC"
        },
        {
          id: "banner-grado-mn",
          title: "banner.grado.mn",
          subtitle: "Hanging and animated banner creation",
          description: "Automated banner generator enabling rapid creation of printable hanging A4 alphabet banners and high-converting animated web ad banners.",
          url: "https://banner.grado.mn",
          category: "Utilities & QR",
          category_id: "tools",
          categorySlug: "tools",
          image: "/images/banner.webp",
          featured: true,
          year: 2026,
          client: "Grado Ecosystem"
        },
        {
          id: "tool-grado-mn",
          title: "tool.grado.mn",
          subtitle: "Digital utilities & converter suite",
          description: "Centralized suite of daily productivity utilities including Cyrillic-to-Mongolian script bi-directional converters, Text-to-Speech (TTS), and multi-format converters.",
          url: "https://tool.grado.mn",
          category: "Utilities & QR",
          category_id: "tools",
          categorySlug: "tools",
          image: "/images/tool.webp",
          featured: true,
          year: 2026,
          client: "Grado Ecosystem"
        },
        {
          id: "qr-grado-mn",
          title: "qr.grado.mn",
          subtitle: "Dynamic QR code management & analytics",
          description: "Smart QR management platform offering dynamic content editing anytime, custom design branding, and real-time geographical and scan analytics.",
          url: "https://qr.grado.mn",
          category: "Utilities & QR",
          category_id: "tools",
          categorySlug: "tools",
          image: "/images/qr.webp",
          featured: true,
          year: 2026,
          client: "Grado Ecosystem"
        }
      ]
    },
    about: {
      eyebrow: "About Us",
      heading: "Nova Hex LLC",
      portraitImage: "",
      copy: "Nova Hex LLC is a premier technology company in Mongolia engineering high-performance software, modern web and mobile platforms, and AI-driven ecosystems. We have developed and scaled flagship platforms including grado.mn, eguide.mn, eventy.mn, and edugame.mn, serving over one hundred thousand active users across education, tourism, culture, and business sectors.",
      resumeText: "Company Profile",
      resumeUrl: "",
      skillsEyebrow: "Technology Stack & Core Strengths",
      skillsSub: "Core technologies, architectures, and capabilities powering our platforms.",
      skills: [
        {
          id: "skill-fullstack",
          name: "Full-stack Web & Mobile",
          short: "Web",
          icon: "",
          rating: 5,
          level: "Expert",
          description: "High-throughput, scalable web & mobile architectures built on Next.js, React, Node.js, and React Native."
        },
        {
          id: "skill-ai",
          name: "Multi-language AI & Audio",
          short: "AI",
          icon: "",
          rating: 5,
          level: "Expert",
          description: "38+ language AI audio guides, Text-to-Speech (TTS), speech processing, and natural language interfaces."
        },
        {
          id: "skill-cloud",
          name: "Cloud & Microservices",
          short: "Cloud",
          icon: "",
          rating: 5,
          level: "Expert",
          description: "Docker, Kubernetes, Supabase, PostgreSQL, AWS cloud infrastructure and microservices."
        },
        {
          id: "skill-3d",
          name: "Interactive 3D & EdTech",
          short: "3D",
          icon: "",
          rating: 4,
          level: "Advanced",
          description: "Interactive educational gamification, Three.js, Canvas, and 3D cultural heritage experiences."
        },
        {
          id: "skill-uiux",
          name: "UI/UX & Product Design",
          short: "UIUX",
          icon: "",
          rating: 5,
          level: "Expert",
          description: "User-centered design systems, clean, accessible, and responsive user experiences."
        },
        {
          id: "skill-qr",
          name: "Dynamic QR & Analytics",
          short: "QR",
          icon: "",
          rating: 5,
          level: "Expert",
          description: "Dynamic routing, marketing automation, real-time analytics and geo-tracking engines."
        }
      ]
    },
    services: {
      eyebrow: "Services",
      side: "Digital Solutions",
      heading: "Professional",
      headingAccent: "Technology Services",
      sub: "Comprehensive engineering and digital transformation services tailored for modern enterprises.",
      items: [
        {
          id: "srv-software",
          num: "01",
          title: "Custom Software & Web Application Development",
          description: "Enterprise software, high-performance web platforms, SaaS products, and mobile applications engineered with scalable architectures and highest security standards.",
          price: "0",
          priceLabel: "Custom Quote",
          features: ["Next.js / React / Node.js", "Mobile Apps (iOS/Android)", "Database Architecture", "APIs & Integrations"]
        },
        {
          id: "srv-museum",
          num: "02",
          title: "Smart Museum & Tourism Audio Guide Solutions",
          description: "Turnkey Smart Museum deployments — 38+ language AI audio narration, QR-based exhibit discovery, and real-time visitor analytics for museums and cultural landmarks.",
          price: "0",
          priceLabel: "Custom Solution",
          features: ["38+ Language AI Audio", "Smart QR Exhibit Tags", "Visitor Analytics", "Admin CMS"]
        },
        {
          id: "srv-event",
          num: "03",
          title: "Event Management & Digital Invitation Ecosystem",
          description: "End-to-end digital event solutions for corporate summits, galas, and celebrations with responsive web invitations, QR ticket verification, and stage LED media control.",
          price: "0",
          priceLabel: "Package based",
          features: ["Web & Image Invitations", "QR Check-in System", "Seat Allocation", "Stage LED Display Control"]
        },
        {
          id: "srv-design",
          num: "04",
          title: "UI/UX Design & Digital Product Concepting",
          description: "Holistic design systems, responsive interfaces, branding, interactive wireframing, and developer-ready design specifications that elevate user engagement.",
          price: "0",
          priceLabel: "Custom Quote",
          features: ["Figma Design Systems", "User Research", "Interactive Prototypes", "Brand Guidelines"]
        },
        {
          id: "srv-consulting",
          num: "05",
          title: "Digital Transformation & Technology Advisory",
          description: "Strategic consulting on workflow automation, enterprise software architecture, database modernization, and cloud migration to accelerate organizational agility.",
          price: "0",
          priceLabel: "Consulting",
          features: ["Workflow Automation", "Data & Analytics Strategy", "Cloud Infrastructure", "Tech Architecture Audit"]
        }
      ]
    },
    plans: {
      eyebrow: "Partnership & Solutions",
      headingLine1: "OUR TAILORED",
      headingLine2: "SOLUTIONS & PACKAGES",
      plans: [
        {
          id: "plan-web",
          name: "Corporate Web Platform",
          featured: false,
          price: 3500000,
          currency: "₮",
          priceLabel: "project",
          billingToggle: false,
          slotsTotal: 5,
          slotsTaken: 2,
          featureList: [
            { label_mn: "Орчин үеийн responsive дизайн", label_en: "Modern responsive design" },
            { label_mn: "Хандалтын өндөр хурд (Next.js / SEO)", label_en: "High performance & SEO" },
            { label_mn: "Мэдээлэл удирдах хялбар CMS", label_en: "Easy-to-use CMS" },
            { label_mn: "Холбоо барих форм & Сошиал холболт", label_en: "Contact form & Social links" },
            { label_mn: "1 жилийн сервер & домэйн тохиргоо", label_en: "1-year hosting & domain setup" }
          ]
        },
        {
          id: "plan-saas",
          name: "SaaS & Custom Platform",
          featured: true,
          price: 8500000,
          currency: "₮",
          priceLabel: "project",
          billingToggle: false,
          slotsTotal: 3,
          slotsTaken: 1,
          featureList: [
            { label_mn: "Бизнесийн тусгай логик бүхий веб систем", label_en: "Custom business logic web platform" },
            { label_mn: "Хэрэглэгчийн удирдлагын систем (Auth/RBAC)", label_en: "User management & Role-based auth" },
            { label_mn: "QPay / Банкны төлбөрийн интеграци", label_en: "Payment gateway integration (QPay etc)" },
            { label_mn: "Админ удирдлагын иж бүрэн дашборд", label_en: "Comprehensive Admin Dashboard" },
            { label_mn: "Өгөгдлийн сангийн оновчлол & Аюулгүй байдал", label_en: "Database optimization & Security" },
            { label_mn: "API интеграци & 3-р талын системүүд", label_en: "API integration & 3rd party services" }
          ]
        },
        {
          id: "plan-enterprise",
          name: "Enterprise Digital Ecosystem",
          featured: false,
          price: 15000000,
          currency: "₮",
          priceLabel: "project",
          billingToggle: false,
          slotsTotal: 2,
          slotsTaken: 0,
          featureList: [
            { label_mn: "Музей / Аялал жуулчлалын ухаалаг аудио гайд", label_en: "Smart Museum / Travel AI Audio Guide" },
            { label_mn: "Эвент менежмент & Дижитал урилгын шийдэл", label_en: "Event management & Digital invitation" },
            { label_mn: "Динамик QR код & Аналитик менежмент", label_en: "Dynamic QR codes & Analytics" },
            { label_mn: "Клоуд микросервис & Өндөр найдвартай байдал", label_en: "Cloud microservices & 99.9% uptime" },
            { label_mn: "Тогтмол арчилгаа, шинэчлэл & 24/7 дэмжлэг", label_en: "Maintenance, updates & 24/7 support" }
          ]
        }
      ]
    },
    websiteOrder: {
      eyebrow: "Ready to Start a Project?",
      headingPrefix: "Does your organization need a ",
      headingAccent: "powerful digital solution?",
      headingSuffix: "",
      sub: "Get in touch with our team to discuss your project requirements and receive a detailed roadmap and quote.",
      buttonLabel: "Get in Touch →"
    },
    contact: {
      eyebrow: "Start Collaboration",
      headingLine1: "Let's build",
      headingAccent: "together",
      sub: "Tell us about your upcoming project or platform idea — our engineering team will get back to you promptly.",
      form: {
        nameLabel: "Your Name / Organization",
        namePlaceholder: "Name",
        phoneLabel: "Phone Number",
        phonePlaceholder: "+976 7777 9969",
        typeLabel: "Service of Interest",
        typePlaceholder: "e.g. Web platform, mobile app, internal system, automation...",
        budgetLabel: "Budget Range (optional)",
        budgetPlaceholder: "e.g. 5M - 15M MNT",
        messageLabel: "Project Brief",
        messagePlaceholder: "Objectives, timeline, requirements...",
        submit: "Submit Request →",
        submitting: "Submitting...",
        successTitle: "Request Submitted Successfully!",
        successMsg: "Thank you — our team will contact you shortly to discuss details.",
        errorTitle: "Submission Failed",
        errorMsg: "Something went wrong. Please reach out to us directly by phone:"
      }
    },
    connect: {
      eyebrow: "Contact Us",
      heading: "Connect with",
      headingAccent: "Nova Hex LLC.",
      sub: "Reach out for new projects, institutional partnerships, or inquiries regarding our digital platforms.",
      cards: {
        phone: {
          key: "Call / Contact",
          value: "+976 7777 9969",
          desc: "Mon–Fri from 09:00 to 18:00."
        },
        location: {
          key: "Headquarters",
          value: "National IT Park, Suite 108",
          desc: "Sukhbaatar District, Ulaanbaatar. Available for in-person meetings."
        },
        social: {
          key: "Social Channels",
          desc: "Latest news, system updates, and platform features."
        }
      }
    },
    footer: {
      copyright: "© 2026 Нова хекс ХХК.",
      rights: "All rights reserved. Nova Hex LLC.",
      backToTop: "Top ↑"
    }
  }
};

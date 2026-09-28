// Site content data - easily editable for branding, content, images, translations

export const siteConfig = {
  name: "Дизайнер Онон",
  brandWordmark: "ondesign.",
  logoUrl: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789706473627-ondesignlogo.png",
  email: "designeronon@gmail.com",
  phone: "+976 8883 9944",
  currency: {
    mn: "₮",
    en: "$"
  },
  socials: {
    instagram: "https://www.instagram.com/designeronon",
    behance: "https://www.behance.net/khalibonon",
    facebook: "https://www.facebook.com/Oonooagaa",
    linkedin: "",
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
  { id: "work", label_mn: "Бүтээлүүд", label_en: "Work", num: "01" },
  { id: "about", label_mn: "Тухай", label_en: "About", num: "02" },
  { id: "services", label_mn: "Үйлчилгээ", label_en: "Services", num: "03" },
  { id: "plans", label_mn: "Багц & үнэ", label_en: "Plans", num: "04" },
  { id: "connect", label_mn: "Холбогдох", label_en: "Contact", num: "05" }
];

export const content = {
  mn: {
    nav: {
      cta: "Захиалга өгөх →",
      ctaRoll1: "Захиалга",
      ctaRoll2: "өгөх →",
    },
    hero: {
      eyebrow: "График дизайнер",
      headingLine1: "САНААГ БОДИТ",
      headingLine2: "БҮТЭЭЛ БОЛГОЁ.",
      description: "Би брэнд, digital experience, motion болон visual identity-г бүтээлчээр хөгжүүлдэг.",
      heroImage: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789906596140-Hero.jpg",
      meta: [
        {
          title: "Улаанбаатар, Монгол",
          subtitle: "Дэлхийн хаанаас ч",
          type: "location"
        },
        {
          title: "Цахимаар ажилладаг",
          subtitle: "+976 8883 9944",
          type: "globe"
        },
        {
          title: "График дизайнер",
          subtitle: "Төсөлд нээлттэй",
          type: "badge"
        }
      ]
    },
    stats: [
  {
    "suffix": "%",
    "label": "Сэтгэл ханамж"
  },
  {
    "suffix": "+",
    "label": "Жилийн туршлага"
  },
  {
    "suffix": "+",
    "label": "Дуусгасан төсөл"
  },
  {
    "suffix": "+",
    "label": "Хамтран ажилласан харилцагч"
  }
],
    clients: {
      heading: "Хамтран ажилласан байгууллагууд",
      items: [
  {
    "id": "ea779df3-4e07-4917-998a-24e2575bcdf7",
    "name": "Aranjin",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790061314354-Aranjin.png",
    "height": 70
  },
  {
    "id": "dc2a030e-d9e7-4904-858f-f624462bd35c",
    "name": "Somedia",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790061576872-Somedia.png",
    "height": 60
  },
  {
    "id": "546d8978-1314-4c2e-b10e-f6bfdec0381d",
    "name": "Toktok",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790062171977-toktok.png",
    "height": 50
  },
  {
    "id": "0b37fafa-9d72-4ca7-aab9-bea698d56f33",
    "name": "Ynmal",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790059577059-Ynmal.png",
    "height": 50
  },
  {
    "id": "4d57dea4-3c89-4729-b3ee-b2eace45ee76",
    "name": "Asian city",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790059248608-Asiancity.png",
    "height": 60
  },
  {
    "id": "972657a0-dd4e-4a61-957a-c60021285412",
    "name": "Ayanz",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790059530260-AYANZ.png",
    "height": 50
  },
  {
    "id": "e79918d7-9faf-4cb5-9733-28c1e856c7ba",
    "name": "Enbarr",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790059789322-Enbarr.png",
    "height": 80
  },
  {
    "id": "06cce31e-c12f-4300-944b-8a284862a645",
    "name": "Global Bridge",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790060147273-globalbridge.png",
    "height": 60
  },
  {
    "id": "6740dcb2-7bc3-4291-ae8d-06539b29b907",
    "name": "etest",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790059969119-etest.png",
    "height": 60
  },
  {
    "id": "eeb98b6c-341b-4aa7-9f3a-04383fd22f9d",
    "name": "Grass",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790060314920-Grass.png",
    "height": 50
  },
  {
    "id": "36ee9be4-6c48-4900-8acd-fbf5fef3663a",
    "name": "Visahub",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790062460726-visahub.png",
    "height": 50
  },
  {
    "id": "98edb536-0b68-4915-bcd6-66b8ffeec215",
    "name": "GBHG",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790062597162-GHHB.png",
    "height": 70
  },
  {
    "id": "e7ef451f-02f1-4fa6-9a01-46b348d74411",
    "name": "pp",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790060896015-Pp.png",
    "height": 50
  },
  {
    "id": "9c1269c4-17a7-40a1-80c2-2ad81cbfb5f5",
    "name": "Pik",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790060520903-pik.png",
    "height": 70
  },
  {
    "id": "e096d3fe-0c21-44ae-a66e-4780ad862fee",
    "name": "StarTV",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790062885532-StarTv.png",
    "height": 40
  },
  {
    "id": "895d208e-be91-4f93-a39b-b4d84396469e",
    "name": "Ren",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790061047462-Ren.png",
    "height": 50
  },
  {
    "id": "10b851ce-a32d-408d-80e2-710d6e357cd1",
    "name": "Tet",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790061240416-Tetgeleg.png",
    "height": 50
  },
  {
    "id": "f5284cc9-7c7e-45e5-baf2-0dae343fa958",
    "name": "Argun",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790063141425-Argun.png",
    "height": 40
  },
  {
    "id": "cbe146fe-957d-4c44-ae6a-0924a850dca3",
    "name": "Tumurxac",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790062305048-tumurxac.png",
    "height": 60
  }
]
    },
    work: {
      eyebrow: "Бүтээлүүд",
      side: "2016 — 2026 он",
      heading: "Сүүлийн",
      headingAccent: "хийсэн ажлууд",
      sub: "Хамгийн сүүлд гүйцэтгэсэн онцлох ажлуудыг танилцуулж байна.",
      categoriesHead: "Бусад гүйцэтгэсэн ажлууд",
      categoriesNote: "Доорх ажлуудаас та хүссэн бүлэгээ сонгон гүйлгэж үзэх боломжтой.",
      allTab: "Бүгд",
      categories: [
  {
    "id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "name": "Бүтээлч постер",
    "slug": "poster"
  },
  {
    "id": "18a252e6-337e-45e2-a9da-34052a3c9d9c",
    "name": "Бүтээгдэхүүний савалгаа",
    "slug": "packag"
  },
  {
    "id": "83475072-ad53-4381-9fac-3cd57f15f895",
    "name": "Аппликейшн ",
    "slug": "app-ui"
  },
  {
    "id": "db3fa4eb-7a49-4d2f-93ee-720ad7925bd3",
    "name": "Вебсайт ",
    "slug": "website-ui"
  },
  {
    "id": "20ec7d0f-9a25-4c89-8816-b828aeaf4181",
    "name": "Лого & Брэндбүүк",
    "slug": "logo-brandbook"
  },
  {
    "id": "87aff9a1-6ea1-4880-aa24-557765a6e16f",
    "name": "Хэвлэлийн дизайн",
    "slug": "print"
  }
],
      projects: [
  {
    "id": "585249d7-2765-4b2d-88ae-8b5206bb924b",
    "title": "Задлаагүй захиа УСК",
    "subtitle": "",
    "category_id": null,
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790164091591-zadlaagui.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": 2026,
    "client": "Aranjin pictures"
  },
  {
    "id": "d440e7ff-d9fb-4326-b2c2-925e86b5d2a0",
    "title": "Asian City Брэндинг",
    "subtitle": "",
    "category_id": null,
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790164848161-Asiancity.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": 2026,
    "client": "AsianCity"
  },
  {
    "id": "c2a1e09b-ede1-4a4b-8fd6-bdf1a0e09284",
    "title": "etest - Mocktest Website",
    "subtitle": "",
    "category_id": null,
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790076582815-etest.jpg",
    "featured": true,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": 2026,
    "client": "Ren Academy"
  },
  {
    "id": "fe7032e6-663b-43bb-8206-954511e2f7b3",
    "title": "Somedia • ТВ АПП ",
    "subtitle": "",
    "category_id": null,
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790075557464-SomediaTVAPP.jpg",
    "featured": true,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": 2023,
    "client": "Somedia"
  },
  {
    "id": "97cf614a-008a-466e-bc35-8438d6334fee",
    "title": "Ayanz Travel",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790166596770-japan1.jpg",
    "featured": true,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": "Ren Academy"
  },
  {
    "id": "91d51238-9274-4a5b-a5d1-3f51f76874af",
    "title": "Чихэрлэг Тахиа Савалгаа",
    "subtitle": "",
    "category_id": null,
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790163330559-Qmin.png",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": 2026,
    "client": "Qmin"
  },
  {
    "id": "10e7ae5d-f420-4871-9cac-e9d14e24b6ad",
    "title": "Ren",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790226537912-Ren4.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "ad6292a0-05a4-48b0-a583-2b6f9598b4f9",
    "title": "Ren",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790226510837-Ren1.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "9a28eb7d-e74f-4253-be32-b48bb94900b6",
    "title": "Ren",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790226524070-Ren2.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "a97d7c82-e1ac-4a40-af0c-853bac60a36f",
    "title": "Ren",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790226552104-Ren3.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "5b05324c-4b9f-4ea5-8ba2-9c7ed70f888d",
    "title": "Tet",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790226772515-Tet1.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "1407aae0-4d82-40a0-a608-14775c9cc60f",
    "title": "Tet",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790226799673-Tet4.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "46fc26f5-ecce-4a06-a4e1-a5a4034f487f",
    "title": "Tet",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790226785965-Tet2.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "46340201-778c-4247-8d88-5caf71cf8e4a",
    "title": "ТөмөрХас Брэндинг",
    "subtitle": "",
    "category_id": null,
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790074760425-Tumurxac.jpg",
    "featured": true,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": 2026,
    "client": "TumurXac"
  },
  {
    "id": "052be3c1-4b48-4eea-83fc-8c3579e8acdd",
    "title": "Somedia",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790224652639-so7.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "2dfe8bcb-9ae3-460b-ae82-df413c86be98",
    "title": "Somedia",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790167524794-so2.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "066e54b5-fa8e-4e15-ac56-68602cc1a6cf",
    "title": "Янмал",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790169170105-ynmal1.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "fd26e0fa-9f34-446a-af23-4b327f10a4dd",
    "title": "Ayanz Travel",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790224471463-Ayanz3.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "eeb2aa83-3246-4747-8a60-4cf445e81e11",
    "title": "Somedia",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790224675484-so3.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "933d0ba8-53a3-412c-ad88-eb6aeeae6eaf",
    "title": "Somedia",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790167624813-so6.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "514a880b-5ee1-44af-8aa3-0e5258cd78f4",
    "title": "Somedia",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790167540092-so1.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "351becab-75e9-4242-a2bd-9c3bc0210ebf",
    "title": "Янмал",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790169212280-ynmal2.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "75c35181-8cad-4ec1-9da4-8c916fb7f094",
    "title": "Янмал",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790169260283-ynmal3.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "663ec71b-ec0c-451b-9e7d-fd6797ed9b54",
    "title": "Янмал",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790224861078-ynmal4.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "90e34b03-909a-4efb-9fec-d0670fcc9545",
    "title": "Somedia",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790169722217-so5.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "508fd829-ad9a-4932-a557-e4c608d6d4d6",
    "title": "Tumurxac",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790225170914-Tx1.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "b1ec2713-e0e0-4529-b483-ebd29122396e",
    "title": "Tumurxac",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790225213555-Tx4.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "be0f8bcb-b876-416a-ac97-5222c977e792",
    "title": "Tumurxac",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790225283851-Tx2.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "2b99b4de-2725-437f-94d6-7d2cfae0c167",
    "title": "Tumurxac",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790225303393-Tx3.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "c34fa674-625a-4cfa-bb14-ffb0df4a1543",
    "title": "Somedia",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790224545579-so4.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "1ded1bd4-394a-413c-b943-645c73cb7a38",
    "title": "Ayanz Travel",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790166869137-Ayanz2.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": 2026,
    "client": ""
  },
  {
    "id": "460f2b75-914b-4765-98c7-00c71d1e5f49",
    "title": "Argun",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790225725792-argun3.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "a7c5a5c8-bdc5-434a-9a51-ad8da45d1aab",
    "title": "TokTok",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790226194645-toktok1.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "0fdf5700-407c-4082-994d-39ab98bb204b",
    "title": "Print",
    "subtitle": "",
    "category_id": "87aff9a1-6ea1-4880-aa24-557765a6e16f",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790228122126-Print.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "4ec4d78f-78cc-4951-b752-8bb623ef9556",
    "title": "Argun",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790225714598-argun2.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "b0e49d01-76cf-4cbd-b366-6de6cd4acd49",
    "title": "Argun",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790225738947-argun4.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "92bc60b3-1751-4678-96ac-3c826df22cea",
    "title": "TokTok",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790227047331-toktok3.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "79b53107-bd00-4979-93e8-b19de825525f",
    "title": "TokTok",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790226141332-toktok2.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "1a63ce80-e474-4ae0-8ca4-51b76f50b7ca",
    "title": "Argun",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790225700615-argun1.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  }
]
    },
    about: {
      eyebrow: "Би хэн бэ",
      heading: "Миний тухай",
      portraitImage: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789908232184-Portrait.jpg",
      copy: "Дизайн бол зөвхөн гоё харагдах тухай биш. Энэ бол асуудалд шийдэл, бизнест өсөлт, шинэ эхлэлд боломж, харах мэдрэхүйд гоо зүйг тэнцвэртэй инженерчлэх тухай. Би хэрэгцээ, хэрэглээ, хэрэглэгчийг ойлгож, мэдэрч ажиллахыг дизайны хамгийн чухал хэсэг гэж итгэдэг. Энэ бол график дизайныг 10 жил суралцаж ажиллах хугацаанд хуримтлуулсан туршлагаас минь бий болсон итгэл үнэмшил юм.",
      resumeText: "CV татах",
      resumeUrl: "#contact",
      skillsEyebrow: "Мэргэжлийн ур чадвар",
      skillsSub: "Өдөр бүр ажилладаг программууд.",
      skills: [
  {
    "id": "7dac049f-b69f-4ae4-94f3-d964bf0ea819",
    "name": "Adobe Premier Pro",
    "short": "Ppro",
    "icon": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789979795560-premiere-pro.png",
    "rating": 4,
    "level": "Гүнзгий",
    "description": "Брэнд бүүк, каталог, сэтгүүл болон олон нүүрт эх бэлтгэлийг зөв тор, типографитайгаар."
  },
  {
    "id": "596416a2-05c0-4dd2-94b4-7728dc24ec55",
    "name": "Adobe Photoshop",
    "short": "Ps",
    "icon": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789979780252-photoshop.png",
    "rating": 5,
    "level": "Мэргэшсэн",
    "description": "Зураг засвар, композит, кампанит ажлын key visual — түүхий зургаас хэвлэлд бэлэн эх бэлтгэл хүртэл."
  },
  {
    "id": "7538f44e-6d8d-4549-88c5-0ca625b318dc",
    "name": "Creative Cloud",
    "short": "CCloud",
    "icon": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789973578932-craetivecloud.png",
    "rating": 5,
    "level": "Мэргэшсэн",
    "description": "UI/UX дизайн, design system, прототип болон хөгжүүлэгчид шилжүүлэх бэлтгэл."
  },
  {
    "id": "677e0b6a-02a1-4bf5-aa5d-6484d42b644d",
    "name": "Adobe Illustrator",
    "short": "Ai",
    "icon": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789979788015-illustrator.png",
    "rating": 5,
    "level": "Мэргэшсэн",
    "description": "Лого болон брэнд identity систем, вектор чимэглэл, icon багц, хэвлэлийн эх."
  },
  {
    "id": "79514649-4476-4754-b0e2-af7737356f7d",
    "name": "Adobe XD",
    "short": "xd",
    "icon": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789979747593-Xd.png",
    "rating": 4,
    "level": "",
    "description": ""
  },
  {
    "id": "aade2da3-9f9b-41d4-b41e-5e2888a5b8bb",
    "name": "Coding",
    "short": "code",
    "icon": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789981318062-coding.png",
    "rating": 2,
    "level": "",
    "description": ""
  },
  {
    "id": "227124bc-e17b-43c7-bd04-e6fa3a4c2b64",
    "name": "Adobe After Effects",
    "short": "Ae",
    "icon": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789979801167-afterffct.png",
    "rating": 4,
    "level": "Гүнзгий",
    "description": "Лого хөдөлгөөн, motion graphics, сошиал болон нэвтрүүлгийн богино промо."
  },
  {
    "id": "2b98adcf-bac2-492e-a50b-c0b60354e83c",
    "name": "Creative Concept",
    "short": "Creative",
    "icon": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790040350147-cretive.png",
    "rating": 4,
    "level": "",
    "description": ""
  },
  {
    "id": "00533390-9274-4a9a-8b00-fabe465a5069",
    "name": "Ai Workflow",
    "short": "aiskill",
    "icon": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789981310916-ai.png",
    "rating": 4,
    "level": "",
    "description": ""
  }
]
    },
    process: {
      eyebrow: "Хэрхэн гүйцэтгэх вэ",
      heading: "Захиалгын алхамууд",
      steps: [
  {
    "id": "cab7f575-3737-4ed1-ae36-0d13c6bdc0b8",
    "number": "01",
    "title": "Судлах",
    "description": "Таны зорилго, хэрэглэгч, амжилтын шалгуурыг ойлгохын тулд ярилцлагаас эхэлнэ."
  },
  {
    "id": "c25e6653-fa22-408b-896d-b0412187af93",
    "number": "02",
    "title": "Дизайн хийх",
    "description": "Хэд хэдэн чиглэлийг судалж, хамгийн хүчтэй санааг бүрэн систем болгон хөгжүүлнэ."
  },
  {
    "id": "528f822d-842c-4468-84c4-0524c82e43a2",
    "number": "03",
    "title": "Хүргэх",
    "description": "Эцсийн файл, guideline болон дэмжлэгтэйгээр брэндээ итгэлтэйгээр эхлүүлнэ."
  }
]
    },
    services: {
      eyebrow: "Үйлчилгээ",
      side: "Үйлчилгээнүүд",
      heading: "Мэргэжлийн",
      headingAccent: "үйлчилгээ",
      sub: "Санаанаас эхлүүлэх хүртэл брэндэд шаардлагатай гол үйлчилгээнүүд.",
      items: [
  {
    "id": "46c7fac1-0af8-4fd8-a048-fa9168f9164e",
    "num": "01",
    "title": "Дизайны сарын үйлчилгээ",
    "description": "Тогтмол дизайн хэрэгцээтэй байгууллага, багуудад зориулсан сарын үйлчилгээ. Алсаас ажиллах бөгөөд долоо хоногт нэг удаа уулзаж, тухайн сарын ажлын төлөвлөгөө болон хэрэгцээг ярилцан ажиллана. Энэхүү үйлчилгээ нь үнийн мэдээлэл дээрх багцын хүрээнд багтсан болно.",
    "price": "0",
    "priceLabel": "",
    "features": []
  },
  {
    "id": "759ab026-6c47-4c95-b2f2-8fdf0c598702",
    "num": "02",
    "title": "Лого & Брэндинг үйлчилгээ",
    "description": "Таны брэндийг зах зээлд бусдаас ялгарах, өөрийн гэсэн танигдахуйц дүр төрхтэй болгож, хэрэглэгчдэд мэргэжлийн, найдвартай сэтгэгдэл төрүүлэх суурийг бүрдүүлнэ. Брэндийг тань дараагийн түвшинд хамтдаа хүргэе.",
    "price": "0",
    "priceLabel": "",
    "features": []
  },
  {
    "id": "4d71f76b-10bc-4b0f-9175-e846a01b75e7",
    "num": "03",
    "title": "Захиалгат дизайн",
    "description": "Таны хэрэгцээ, зорилгод тохируулан ярилцаж, тохирсон ажлыг тань эхнээс нь дуустал хийж гүйцэтгэнэ. Тодорхой нэг үйлчилгээний хүрээнд багтахгүй, тусгай шаардлагатай дизайн болон бүтээлч ажлуудад тохиромжтой.",
    "price": "0",
    "priceLabel": "",
    "features": []
  },
  {
    "id": "105a13c1-b0d5-44e2-a12c-76a08c333087",
    "num": "04",
    "title": "Апп & Вебсайт хөгжүүлэлт",
    "description": "Таны санаа, дизайныг бодит бүтээгдэхүүн болгоно. Туршлагатай хөгжүүлэгчдийн багтай хамтран вебсайт болон мобайл аппликейшнийг төлөвлөлтөөс эхлээд хөгжүүлэлт, туршилт, нээлт хүртэл хийж гүйцэтгэнэ.",
    "price": "0",
    "priceLabel": "",
    "features": []
  }
]
    },
    plans: {
      eyebrow: "Үнийн мэдээлэл",
      headingLine1: "Том ч бай,",
      headingLine2: "жижиг ч бай.",
      plans: [
  {
    "id": "1c1b2e0a-5499-4b5e-88db-6efabd3f1bd2",
    "name": "График Дизайнер ",
    "description": "Илүү өргөн хүрээний дизайны хэрэгцээтэй бизнест зориулсан багц. Өдөр тутмын контентоос эхлээд илүү нарийн бүтээлч ажлуудыг хамтран хэрэгжүүлцгээе.",
    "featured": true,
    "price": 5000000,
    "currency": "₮",
    "priceLabel": "Сарын дизайны үйлчилгээ",
    "buttonText": "Захиалах",
    "slotsTotal": 1,
    "slotsTaken": 0,
    "billingToggle": true,
    "yearDiscount": 20,
    "features": [
      "Бүрэн brand identity систем",
      "UI/UX эсвэл campaign дизайн",
      "Хязгааргүй засвар",
      "Тэргүүн ээлжийн дэмжлэг",
      "Эх файлууд орсон"
    ],
    "featureList": [
      {
        "id": "c1faf405-4e42-4e2c-96a2-e92e567e24ae",
        "label_en": "Social Media Post Design",
        "label_mn": "Сошиал медиа постер",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "a050f6d0-5efa-414d-9c11-382279364ec9",
        "label_en": "Creative Poster Design",
        "label_mn": "Креатив постер",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "5eff409d-56ef-461b-8b0a-6133f915e7a1",
        "label_en": "Print Design",
        "label_mn": "Хэвлэлийн эх бэлтгэл",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "7b461f9c-8f03-4a32-a1e6-aa84a209075c",
        "label_en": "UI/UX Design ",
        "label_mn": "UI/UX загвар гаргах",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "6a7163a5-2072-40c8-bf3d-e2c6fc7b438c",
        "label_en": "Source files included",
        "label_mn": "Эх файлууд орсон",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "58298f49-c2c6-40f3-a76e-14c46a879675",
        "label_en": "Video Color Grading + Subtitles",
        "label_mn": "Видео өнгө тавилт + хадмал",
        "optional": false,
        "price_en": 1200000,
        "price_mn": 1200000,
        "excluded_with": []
      },
      {
        "id": "29f10984-7400-4c40-ba02-91b6623c6e0d",
        "label_en": "Product Packaging Design",
        "label_mn": "Бүтээгдэхүүний сав баглаа боодлын дизайн",
        "optional": false,
        "price_en": 800000,
        "price_mn": 800000,
        "excluded_with": []
      },
      {
        "id": "f_qnwsj03hs3i4",
        "label_en": "Option for one meeting per week",
        "label_mn": "Долоо хоног бүрийн уулзалт ",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "f_ysqm3v1fjqw4",
        "label_en": "Invoice Provided for Companies (for Mongolia)",
        "label_mn": "Хувь хүнээс компанид баримт олгоно",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "f_2zjls2d7jfac",
        "label_en": "RAW Files Included",
        "label_mn": "Эх файлууд орсон",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "f_at0hqkv57673",
        "label_en": "Unlimited Revisions",
        "label_mn": "Хязгааргүй засвар",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "f_jku7edxcuro2",
        "label_en": "+ Additional Creative Projects",
        "label_mn": "+ Нэмэлт бүтээлч төслүүд",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      }
    ],
    "tiers": []
  },
  {
    "id": "c4dfe2f8-88cb-4b5b-bde3-cbbaa092cd32",
    "name": "График Дизайнер | Start-up",
    "description": "Шинээр эхэлж буй бизнес болон тогтмол дизайны хэрэгцээтэй хүмүүст зориулсан Start-up багц. Өдөр тутмын үндсэн дизайны ажлуудаа нэг дор бүтээлчээр шийдэцгээе.",
    "featured": false,
    "price": 3500000,
    "currency": "₮",
    "priceLabel": "Сарын дизайны үйлчилгээ",
    "buttonText": "Захиалах",
    "slotsTotal": 1,
    "slotsTaken": 0,
    "billingToggle": true,
    "yearDiscount": 10,
    "features": [
      "1 concept чиглэл",
      "Лого эсвэл key visual",
      "2 удаагийн засвар",
      "Эх файлууд орсон"
    ],
    "featureList": [
      {
        "id": "10ce7571-56be-4cea-9aaf-01c24d884611",
        "label_en": "Social Media Post Design",
        "label_mn": "Сошиал медиа постер",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "1ac49dd3-6605-4fc2-a3a2-c73bde18b030",
        "label_en": "Creative Poster Design",
        "label_mn": "Бүтээлч постер",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "769ea798-259d-403d-a0d4-918af7c3e349",
        "label_en": "Print design",
        "label_mn": "Хэвлэлийн эх бэлтгэл",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "991196b0-9ec7-4d3a-a3f7-c459d53bf0e4",
        "label_en": "Product Packaging Design",
        "label_mn": "Бүтээгдэхүүний сав баглаа боодлын дизайн",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "a90d47b7-a31b-46d2-a148-e04f04c89831",
        "label_en": "RAW Files Included",
        "label_mn": "Эх файлууд орсон",
        "optional": false,
        "price_en": 200,
        "price_mn": 200,
        "excluded_with": []
      },
      {
        "id": "f_t4hzsilv6sbk",
        "label_en": "Unlimited Revisions",
        "label_mn": "Хязгааргүй засвар",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "b19f69cb-fde6-4a73-9783-c4bf27ea6b3c",
        "label_en": "Invoice Provided for Companies (for Mongolia)",
        "label_mn": "Хувь хүнээс компанид баримт олгоно",
        "optional": false,
        "price_en": 150,
        "price_mn": 150,
        "excluded_with": []
      }
    ],
    "tiers": []
  },
  {
    "id": "6cb7316f-7a76-4b00-8ec9-47cfbed19811",
    "name": "Лого дизайн & Брэндүүк удирдамж",
    "description": "Таны брэндийг зах зээлд бусдаас ялгарах, өөрийн гэсэн танигдахуйц дүр төрхтэй болгож, хэрэглэгчдэд мэргэжлийн, найдвартай сэтгэгдэл төрүүлэх суурийг бүрдүүлнэ. Брэндийг тань дараагийн түвшинд хамтдаа хүргэе.",
    "featured": false,
    "price": 0,
    "currency": "₮",
    "priceLabel": "Төслийн хугацаанд",
    "buttonText": "Захиалах",
    "slotsTotal": 0,
    "slotsTaken": 0,
    "billingToggle": false,
    "yearDiscount": 0,
    "features": [
      "Тусгай хуваарилагдсан цаг",
      "Brand + product + motion",
      "Долоо хоног бүрийн уулзалт",
      "Тусгай Slack суваг"
    ],
    "featureList": [],
    "tiers": [
      {
        "id": "t_logo",
        "name": "Брэндинг | Старт-ап",
        "pages": "15",
        "price": 8000000,
        "currency": "₮",
        "features": [
          "Лого зохиомж",
          "Брэндбүүк гарын авлага (S)",
          "Бичиг хэргийн материал",
          "+ Бүтээлч постер 2ш",
          "Файлын сан (AI, PDF, PNG, SVG...)"
        ]
      },
      {
        "id": "t_book",
        "name": "Брэндинг | Ахисан",
        "pages": "30",
        "price": 20000000,
        "currency": "₮",
        "features": [
          "Лого зохиомж",
          "Брэндбүүк гарын авлага (M)",
          "Бичиг хэргийн материал",
          "Сошил Медиа дизайнууд",
          "Файлын сан (AI, PDF, PNG, SVG...)"
        ]
      },
      {
        "id": "t_full",
        "name": "Брэндинг | Цогц",
        "pages": "70",
        "price": 50000000,
        "currency": "₮",
        "features": [
          "Лого зохиомж",
          "Цогц Брэндбүүк гарын авлага",
          "Бичиг хэрэг & Social media",
          "Файлын сан (AI, PDF, PNG, SVG...)",
          "График Дизайнер PRO - 1 сарын эрх"
        ]
      },
      {
        "id": "t_nv1ih8zn",
        "name": "Зөвхөн лого дизайн",
        "pages": "",
        "price": 2000000,
        "currency": "₮",
        "features": [
          "Лого зохиомж",
          "Өнгөний систем",
          "Фонт хэрэглээ",
          "Файлын сан (AI, PDF, PNG, SVG...)",
          "Брэндинг - Хөнгөлөлт"
        ]
      }
    ]
  }
]
    },
    testimonials: {
      eyebrow: "Сэтгэгдэл",
      heading: "Итгэл хүлээсэн",
      headingAccent: "харилцагчид",
      items: [
  {
    "id": "51408cb8-e64d-4b51-84e0-b63cf00ccdf8",
    "name": "Sarah Chen",
    "company": "Nova Cosmetics",
    "role": "Founder",
    "quote": "Онон-той хамтарч ажиллах маш хялбар байлаа. Бид хэлэхийг хүссэн зүйлээ яг таг илэрхийлсэн brand identity бүтээж өгсөн."
  },
  {
    "id": "c6d5ab21-508c-4614-a2ca-090f079eee6c",
    "name": "James Okafor",
    "company": "Fintra Inc.",
    "role": "Product-ийн ахлах",
    "quote": "Дахин дизайны ажил хэрэглэгчдийн апп-ийн талаарх сэтгэгдлийг бүрэн өөрчилсөн. Алхам бүрт нарийн анхаарал тавьсан."
  },
  {
    "id": "9f38e6af-df65-4fbd-856d-caa747ac117d",
    "name": "Mira Solongo",
    "company": "Orbit Live",
    "role": "Маркетингийн захирал",
    "quote": "Зоригтой, өвөрмөц, цагт нь хүргэсэн. Бидний фестивальд яг хэрэгтэй байсан creative түнш байлаа."
  }
]
    },
    connect: {
      eyebrow: "Холбоо барих",
      heading: "Төслийнхөө талаар",
      headingAccent: "ярилцъя.",
      sub: "Шинэ төсөл, хамтын ажиллагаа эсвэл зүгээр л санаагаа хуваалцахыг хүсвэл холбогдоорой. Хамтдаа илүү сонирхолтой зүйл бүтэцгээе.",
      cards: {
        phone: {
          key: "Утсаар холбогдох",
          value: "+976 8883 9944",
          desc: "Ажлын цагт хурдан хариу өгнө."
        },
        location: {
          key: "Байршил",
          value: "Улаанбаатар, Монгол",
          desc: "Биечлэн уулзах боломжтой."
        },
        social: {
          key: "Сошиал",
          desc: "Шинэ бүтээл, ажлын процесс, санаанууд."
        }
      }
    },
    faq: {
      eyebrow: "Түгээмэл асуулт",
      headingLine1: "Түгээмэл",
      headingLine2: "асуулт хариулт",
      items: [
  {
    "id": "fafb7f90-9e3a-4c9b-a2fe-1240cda04d96",
    "num": "01",
    "question": "Ажлын явц ямар байдаг вэ?",
    "answer": "Төсөл бүр судалгаагаар эхэлж, concept, дизайны шат дамжин, бэлэн файлаар төгсдөг. Хугацаа нь ажлын хэмжээнээс хамаарна."
  },
  {
    "id": "ee324cd6-0f13-456e-a0e9-6fde55974b17",
    "num": "02",
    "question": "Төсөл хэр удаан үргэлжлэх вэ?",
    "answer": "Brand identity ихэвчлэн 3-4 долоо хоног, том digital бүтээгдэхүүн 6-10 долоо хоног үргэлжилдэг."
  },
  {
    "id": "7817ca7e-b4d3-4722-8ba3-a0cb336a2cbd",
    "num": "03",
    "question": "Гадаад харилцагчидтай ажилладаг уу?",
    "answer": "Тийм — ажил ихэвчлэн имэйл, дуудлагаар зохицуулагддаг тул цагийн бүс ихэвчлэн асуудал болдоггүй."
  },
  {
    "id": "8a5c0340-f33a-40c5-937f-c8c3d0fe15ab",
    "num": "04",
    "question": "Эхлэхийн тулд юу хэрэгтэй вэ?",
    "answer": "Зорилгынхоо товч тайлбар болон одоо байгаа brand материалаа өгвөл л ажил эхэлнэ."
  }
]
    },
    contact: {
      eyebrow: "Захиалга өгөх",
      headingLine1: "Хамтдаа",
      headingAccent: "бүтээцгээе",
      sub: "Надаар юу хийлгэхийг хүсэж байгаагаа сонгоод мэдээллээ үлдээгээрэй — би үнийн санал буцаан илгээнэ.",
      form: {
        nameLabel: "Нэр",
        namePlaceholder: "Нэр",
        phoneLabel: "Таны дугаар",
        phonePlaceholder: "+976 8888 8888",
        typeLabel: "Юу хийлгэх вэ?",
        typePlaceholder: "Жишээ: Лого, brand identity, постер, баглаа боодол, вебсайт…",
        budgetLabel: "Төсөв (заавал биш)",
        budgetPlaceholder: "Жишээ: 1–3 сая ₮",
        messageLabel: "Төслийн тухай",
        messagePlaceholder: "Зорилго, хугацаа, холбоос…",
        submit: "Үнийн санал авах →",
        submitting: "Илгээж байна...",
        successTitle: "Хүсэлт амжилттай илгээгдлээ!",
        successMsg: "Баярлалаа — би тантай яаралтайгаар хариу холбогдож дэлгэрэнгүйг тохирно.",
        errorTitle: "Илгээж чадсангүй",
        errorMsg: "Ямар нэг зүйл буруудлаа. Надтай шууд холбогдоно уу, би яаралтай шийдэж өгье:"
      }
    },
    websiteOrder: {
      eyebrow: "Вебсайт хэрэгтэй юу?",
      headingPrefix: "Та бүтээлч ",
      headingAccent: "вебсайттай",
      headingSuffix: " болмоор байвал энд дарж захиалгаа өгөөрэй.",
      sub: "Энд дараад захиалгын хүсэлтээ өгөөрэй — би тантай холбогдож дэлгэрэнгүйг тохирно.",
      button: "Захиалга өгөх →"
    },
    footer: {
      copyright: "© 2026 OnDesign",
      rights: "Бүх эрх хуулиар хамгаалагдсан.",
      backToTop: "Дээш ↑"
    }
  },
  en: {
    nav: {
      cta: "Order now →",
      ctaRoll1: "Order",
      ctaRoll2: "now →",
    },
    hero: {
      eyebrow: "Graphic Designer as Freelancer",
      headingLine1: "TURN IDEAS INTO",
      headingLine2: "LIVING REALITY.",
      description: "I create distinctive identities, digital experiences and motion for ambitious brands.",
      heroImage: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789906596140-Hero.jpg",
      meta: [
        {
          title: "Ulaanbaatar, Mongolia",
          subtitle: "Working worldwide",
          type: "location"
        },
        {
          title: "Remote First",
          subtitle: "Across all timezones",
          type: "globe"
        },
        {
          title: "Graphic Designer + Freelancer",
          subtitle: "Available for projects",
          type: "badge"
        }
      ]
    },
    stats: [
  {
    "suffix": "%",
    "label": "Client satisfaction"
  },
  {
    "suffix": "+",
    "label": "Years of experience"
  },
  {
    "suffix": "+",
    "label": "Projects delivered"
  },
  {
    "suffix": "+",
    "label": "Clients I’ve Worked With"
  }
],
    clients: {
      heading: "Companies I've worked with",
      items: [
  {
    "id": "ea779df3-4e07-4917-998a-24e2575bcdf7",
    "name": "Aranjin",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790061314354-Aranjin.png",
    "height": 70
  },
  {
    "id": "dc2a030e-d9e7-4904-858f-f624462bd35c",
    "name": "Somedia",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790061576872-Somedia.png",
    "height": 60
  },
  {
    "id": "546d8978-1314-4c2e-b10e-f6bfdec0381d",
    "name": "Toktok",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790062171977-toktok.png",
    "height": 50
  },
  {
    "id": "0b37fafa-9d72-4ca7-aab9-bea698d56f33",
    "name": "Ynmal",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790059577059-Ynmal.png",
    "height": 50
  },
  {
    "id": "4d57dea4-3c89-4729-b3ee-b2eace45ee76",
    "name": "Asian city",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790059248608-Asiancity.png",
    "height": 60
  },
  {
    "id": "972657a0-dd4e-4a61-957a-c60021285412",
    "name": "Ayanz",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790059530260-AYANZ.png",
    "height": 50
  },
  {
    "id": "e79918d7-9faf-4cb5-9733-28c1e856c7ba",
    "name": "Enbarr",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790059789322-Enbarr.png",
    "height": 80
  },
  {
    "id": "06cce31e-c12f-4300-944b-8a284862a645",
    "name": "Global Bridge",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790060147273-globalbridge.png",
    "height": 60
  },
  {
    "id": "6740dcb2-7bc3-4291-ae8d-06539b29b907",
    "name": "etest",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790059969119-etest.png",
    "height": 60
  },
  {
    "id": "eeb98b6c-341b-4aa7-9f3a-04383fd22f9d",
    "name": "Grass",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790060314920-Grass.png",
    "height": 50
  },
  {
    "id": "36ee9be4-6c48-4900-8acd-fbf5fef3663a",
    "name": "Visahub",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790062460726-visahub.png",
    "height": 50
  },
  {
    "id": "98edb536-0b68-4915-bcd6-66b8ffeec215",
    "name": "GBHG",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790062597162-GHHB.png",
    "height": 70
  },
  {
    "id": "e7ef451f-02f1-4fa6-9a01-46b348d74411",
    "name": "pp",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790060896015-Pp.png",
    "height": 50
  },
  {
    "id": "9c1269c4-17a7-40a1-80c2-2ad81cbfb5f5",
    "name": "Pik",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790060520903-pik.png",
    "height": 70
  },
  {
    "id": "e096d3fe-0c21-44ae-a66e-4780ad862fee",
    "name": "StarTV",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790062885532-StarTv.png",
    "height": 40
  },
  {
    "id": "895d208e-be91-4f93-a39b-b4d84396469e",
    "name": "Ren",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790061047462-Ren.png",
    "height": 50
  },
  {
    "id": "10b851ce-a32d-408d-80e2-710d6e357cd1",
    "name": "Tet",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790061240416-Tetgeleg.png",
    "height": 50
  },
  {
    "id": "f5284cc9-7c7e-45e5-baf2-0dae343fa958",
    "name": "Argun",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790063141425-Argun.png",
    "height": 40
  },
  {
    "id": "cbe146fe-957d-4c44-ae6a-0924a850dca3",
    "name": "Tumurxac",
    "logo": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790062305048-tumurxac.png",
    "height": 60
  }
]
    },
    work: {
      eyebrow: "Portfolio",
      side: "2016 — 2026",
      heading: "Recent",
      headingAccent: "projects",
      sub: "A selection of recent identity, product and motion projects.",
      categoriesHead: "Other completed work",
      categoriesNote: "Explore the work below by selecting a category.",
      allTab: "All",
      categories: [
  {
    "id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "name": "Creative poster",
    "slug": "poster"
  },
  {
    "id": "18a252e6-337e-45e2-a9da-34052a3c9d9c",
    "name": "Packaging Design",
    "slug": "packag"
  },
  {
    "id": "83475072-ad53-4381-9fac-3cd57f15f895",
    "name": "App ",
    "slug": "app-ui"
  },
  {
    "id": "db3fa4eb-7a49-4d2f-93ee-720ad7925bd3",
    "name": "Website ",
    "slug": "website-ui"
  },
  {
    "id": "20ec7d0f-9a25-4c89-8816-b828aeaf4181",
    "name": "Logo & Brandbook",
    "slug": "logo-brandbook"
  },
  {
    "id": "87aff9a1-6ea1-4880-aa24-557765a6e16f",
    "name": "Print design",
    "slug": "print"
  }
],
      projects: [
  {
    "id": "585249d7-2765-4b2d-88ae-8b5206bb924b",
    "title": "The Unopened letter",
    "subtitle": "",
    "category_id": null,
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790164091591-zadlaagui.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": 2026,
    "client": "Aranjin pictures"
  },
  {
    "id": "d440e7ff-d9fb-4326-b2c2-925e86b5d2a0",
    "title": "Asian City Branding",
    "subtitle": "",
    "category_id": null,
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790164848161-Asiancity.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": 2026,
    "client": "AsianCity"
  },
  {
    "id": "c2a1e09b-ede1-4a4b-8fd6-bdf1a0e09284",
    "title": "etest - Mocktest Website",
    "subtitle": "",
    "category_id": null,
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790076582815-etest.jpg",
    "featured": true,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": 2026,
    "client": "Ren Academy"
  },
  {
    "id": "fe7032e6-663b-43bb-8206-954511e2f7b3",
    "title": "Somedia • TV APP",
    "subtitle": "",
    "category_id": null,
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790075557464-SomediaTVAPP.jpg",
    "featured": true,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": 2023,
    "client": "Somedia"
  },
  {
    "id": "97cf614a-008a-466e-bc35-8438d6334fee",
    "title": "Ayanz Travel",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790166596770-japan1.jpg",
    "featured": true,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": "Ren Academy"
  },
  {
    "id": "91d51238-9274-4a5b-a5d1-3f51f76874af",
    "title": "Sweet chicken Package Design ",
    "subtitle": "",
    "category_id": null,
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790163330559-Qmin.png",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": 2026,
    "client": "Qmin"
  },
  {
    "id": "10e7ae5d-f420-4871-9cac-e9d14e24b6ad",
    "title": "Ren",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790226537912-Ren4.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "ad6292a0-05a4-48b0-a583-2b6f9598b4f9",
    "title": "Ren",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790226510837-Ren1.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "9a28eb7d-e74f-4253-be32-b48bb94900b6",
    "title": "Ren",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790226524070-Ren2.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "a97d7c82-e1ac-4a40-af0c-853bac60a36f",
    "title": "Ren",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790226552104-Ren3.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "5b05324c-4b9f-4ea5-8ba2-9c7ed70f888d",
    "title": "Tet",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790226772515-Tet1.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "1407aae0-4d82-40a0-a608-14775c9cc60f",
    "title": "Tet",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790226799673-Tet4.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "46fc26f5-ecce-4a06-a4e1-a5a4034f487f",
    "title": "Tet",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790226785965-Tet2.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "46340201-778c-4247-8d88-5caf71cf8e4a",
    "title": "TumurXac Re-Branding",
    "subtitle": "",
    "category_id": null,
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790074760425-Tumurxac.jpg",
    "featured": true,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": 2026,
    "client": "TumurXac"
  },
  {
    "id": "052be3c1-4b48-4eea-83fc-8c3579e8acdd",
    "title": "Somedia",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790224652639-so7.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "2dfe8bcb-9ae3-460b-ae82-df413c86be98",
    "title": "Somedia",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790167524794-so2.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "066e54b5-fa8e-4e15-ac56-68602cc1a6cf",
    "title": "Yanmal",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790169170105-ynmal1.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "fd26e0fa-9f34-446a-af23-4b327f10a4dd",
    "title": "Ayanz Travel",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790224471463-Ayanz3.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "eeb2aa83-3246-4747-8a60-4cf445e81e11",
    "title": "Somedia",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790224675484-so3.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "933d0ba8-53a3-412c-ad88-eb6aeeae6eaf",
    "title": "Somedia",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790167624813-so6.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "514a880b-5ee1-44af-8aa3-0e5258cd78f4",
    "title": "Somedia",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790167540092-so1.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "351becab-75e9-4242-a2bd-9c3bc0210ebf",
    "title": "Yanmal",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790169212280-ynmal2.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "75c35181-8cad-4ec1-9da4-8c916fb7f094",
    "title": "Yanmal",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790169260283-ynmal3.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "663ec71b-ec0c-451b-9e7d-fd6797ed9b54",
    "title": "Yanmal",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790224861078-ynmal4.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "90e34b03-909a-4efb-9fec-d0670fcc9545",
    "title": "Somedia",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790169722217-so5.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "508fd829-ad9a-4932-a557-e4c608d6d4d6",
    "title": "Tumurxac",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790225170914-Tx1.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "b1ec2713-e0e0-4529-b483-ebd29122396e",
    "title": "Tumurxac",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790225213555-Tx4.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "be0f8bcb-b876-416a-ac97-5222c977e792",
    "title": "Tumurxac",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790225283851-Tx2.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "2b99b4de-2725-437f-94d6-7d2cfae0c167",
    "title": "Tumurxac",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790225303393-Tx3.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "c34fa674-625a-4cfa-bb14-ffb0df4a1543",
    "title": "Somedia",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790224545579-so4.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "1ded1bd4-394a-413c-b943-645c73cb7a38",
    "title": "Ayanz Travel",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790166869137-Ayanz2.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": 2026,
    "client": ""
  },
  {
    "id": "460f2b75-914b-4765-98c7-00c71d1e5f49",
    "title": "Argun",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790225725792-argun3.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "a7c5a5c8-bdc5-434a-9a51-ad8da45d1aab",
    "title": "TokTok",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790226194645-toktok1.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "0fdf5700-407c-4082-994d-39ab98bb204b",
    "title": "Print",
    "subtitle": "",
    "category_id": "87aff9a1-6ea1-4880-aa24-557765a6e16f",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790228122126-Print.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "4ec4d78f-78cc-4951-b752-8bb623ef9556",
    "title": "Argun",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790225714598-argun2.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "b0e49d01-76cf-4cbd-b366-6de6cd4acd49",
    "title": "Argun",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790225738947-argun4.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "92bc60b3-1751-4678-96ac-3c826df22cea",
    "title": "TokTok",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790227047331-toktok3.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "79b53107-bd00-4979-93e8-b19de825525f",
    "title": "TokTok",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790226141332-toktok2.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  },
  {
    "id": "1a63ce80-e474-4ae0-8ca4-51b76f50b7ca",
    "title": "Argun",
    "subtitle": "",
    "category_id": "4320a3a6-909c-4d60-ba22-94c4ecbb2679",
    "image": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790225700615-argun1.jpg",
    "featured": false,
    "tags": [
      "Design",
      "Branding"
    ],
    "year": "2026",
    "client": ""
  }
]
    },
    about: {
      eyebrow: "Who am I",
      heading: "About me",
      portraitImage: "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789908232184-Portrait.jpg",
      copy: "Design is not just about making things look good. It is about creating solutions to problems, driving growth for businesses, creating opportunities for new beginnings, and balancing aesthetics with the way people see and feel. I believe understanding and sensing the needs, usage, and people behind a project is one of the most important parts of design. This belief has been shaped by 10 years of studying and working in graphic design.",
      resumeText: "Download résumé",
      resumeUrl: "#contact",
      skillsEyebrow: "Toolbox",
      skillsSub: "The software I work in every day.",
      skills: [
  {
    "id": "7dac049f-b69f-4ae4-94f3-d964bf0ea819",
    "name": "Adobe Premier Pro",
    "short": "Ppro",
    "icon": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789979795560-premiere-pro.png",
    "rating": 4,
    "level": "Advanced",
    "description": "Brand books, catalogues, magazines and multi-page layouts with proper typographic grids."
  },
  {
    "id": "596416a2-05c0-4dd2-94b4-7728dc24ec55",
    "name": "Adobe Photoshop",
    "short": "Ps",
    "icon": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789979780252-photoshop.png",
    "rating": 5,
    "level": "Expert",
    "description": "Retouching, compositing and campaign key visuals — from raw shots to press-ready artwork."
  },
  {
    "id": "7538f44e-6d8d-4549-88c5-0ca625b318dc",
    "name": "Creative Cloud",
    "short": "CCloud",
    "icon": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789973578932-craetivecloud.png",
    "rating": 5,
    "level": "Expert",
    "description": "UI/UX design, design systems, prototypes and developer hand-off."
  },
  {
    "id": "677e0b6a-02a1-4bf5-aa5d-6484d42b644d",
    "name": "Adobe Illustrator",
    "short": "Ai",
    "icon": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789979788015-illustrator.png",
    "rating": 5,
    "level": "Expert",
    "description": "Logo and identity systems, vector illustration, icon sets and print-ready layouts."
  },
  {
    "id": "79514649-4476-4754-b0e2-af7737356f7d",
    "name": "Adobe XD",
    "short": "xd",
    "icon": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789979747593-Xd.png",
    "rating": 4,
    "level": "",
    "description": ""
  },
  {
    "id": "aade2da3-9f9b-41d4-b41e-5e2888a5b8bb",
    "name": "Coding",
    "short": "code",
    "icon": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789981318062-coding.png",
    "rating": 2,
    "level": "",
    "description": ""
  },
  {
    "id": "227124bc-e17b-43c7-bd04-e6fa3a4c2b64",
    "name": "Adobe After Effects",
    "short": "Ae",
    "icon": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789979801167-afterffct.png",
    "rating": 4,
    "level": "Advanced",
    "description": "Logo animation, motion graphics and short promo edits for social and broadcast."
  },
  {
    "id": "2b98adcf-bac2-492e-a50b-c0b60354e83c",
    "name": "Creative Concept",
    "short": "Creative",
    "icon": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1790040350147-cretive.png",
    "rating": 4,
    "level": "",
    "description": ""
  },
  {
    "id": "00533390-9274-4a9a-8b00-fabe465a5069",
    "name": "Ai Workflow",
    "short": "aiskill",
    "icon": "https://hkiavlrermyfkwvvxukh.supabase.co/storage/v1/object/public/media/1789981310916-ai.png",
    "rating": 4,
    "level": "",
    "description": ""
  }
]
    },
    process: {
      eyebrow: "How it works",
      heading: "The order steps",
      steps: [
  {
    "id": "cab7f575-3737-4ed1-ae36-0d13c6bdc0b8",
    "number": "01",
    "title": "Discover",
    "description": "We start with a conversation to understand your goals, audience and what success looks like."
  },
  {
    "id": "c25e6653-fa22-408b-896d-b0412187af93",
    "number": "02",
    "title": "Design",
    "description": "I explore directions, refine the strongest concept, and shape it into a complete system."
  },
  {
    "id": "528f822d-842c-4468-84c4-0524c82e43a2",
    "number": "03",
    "title": "Deliver",
    "description": "Final files, guidelines and ongoing support so your brand launches with confidence."
  }
]
    },
    services: {
      eyebrow: "Services",
      side: "Services",
      heading: "Pro",
      headingAccent: "services",
      sub: "A focused set of services to take a brand from idea to launch.",
      items: [
  {
    "id": "46c7fac1-0af8-4fd8-a048-fa9168f9164e",
    "num": "01",
    "title": "Monthly Designer Service",
    "description": "A monthly design service for businesses and teams with ongoing design needs. Work is handled remotely, with one meeting per week to discuss priorities, plan upcoming tasks, and review progress. This service is included as part of the selected Plan.",
    "price": "0",
    "priceLabel": "",
    "features": []
  },
  {
    "id": "759ab026-6c47-4c95-b2f2-8fdf0c598702",
    "num": "02",
    "title": "Logo & Branding",
    "description": "Build a distinctive brand identity that stands out in the market and creates a professional, trustworthy impression among your audience. Let’s take your brand to the next level.",
    "price": "0",
    "priceLabel": "",
    "features": []
  },
  {
    "id": "4d71f76b-10bc-4b0f-9175-e846a01b75e7",
    "num": "03",
    "title": "Custom Design",
    "description": "A tailored design service built around your specific needs and goals. We discuss the project, agree on the scope, and take care of the design from start to finish. Suitable for creative projects or specific design needs that don’t fit into a standard service.",
    "price": "0",
    "priceLabel": "",
    "features": []
  },
  {
    "id": "105a13c1-b0d5-44e2-a12c-76a08c333087",
    "num": "04",
    "title": "App & Web Development",
    "description": "We turn your ideas and designs into real digital products. Together with an experienced development team, we build websites and mobile applications from planning and development to testing and launch.",
    "price": "0",
    "priceLabel": "",
    "features": []
  }
]
    },
    plans: {
      eyebrow: "Pricing",
      headingLine1: "Big or small?",
      headingLine2: "I have a plan.",
      plans: [
  {
    "id": "1c1b2e0a-5499-4b5e-88db-6efabd3f1bd2",
    "name": "Graphic Designer",
    "description": "A plan for businesses with broader design needs. From everyday content to more detailed creative work, let’s bring your ideas to life together.",
    "featured": true,
    "price": 1400,
    "currency": "$",
    "priceLabel": "Monthly plan",
    "buttonText": "Get started",
    "slotsTotal": 1,
    "slotsTaken": 0,
    "billingToggle": true,
    "yearDiscount": 20,
    "features": [
      "Full brand identity system",
      "UI/UX or campaign design",
      "Unlimited revisions",
      "Priority support",
      "Source files included"
    ],
    "featureList": [
      {
        "id": "c1faf405-4e42-4e2c-96a2-e92e567e24ae",
        "label_en": "Social Media Post Design",
        "label_mn": "Сошиал медиа постер",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "a050f6d0-5efa-414d-9c11-382279364ec9",
        "label_en": "Creative Poster Design",
        "label_mn": "Креатив постер",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "5eff409d-56ef-461b-8b0a-6133f915e7a1",
        "label_en": "Print Design",
        "label_mn": "Хэвлэлийн эх бэлтгэл",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "7b461f9c-8f03-4a32-a1e6-aa84a209075c",
        "label_en": "UI/UX Design ",
        "label_mn": "UI/UX загвар гаргах",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "6a7163a5-2072-40c8-bf3d-e2c6fc7b438c",
        "label_en": "Source files included",
        "label_mn": "Эх файлууд орсон",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "58298f49-c2c6-40f3-a76e-14c46a879675",
        "label_en": "Video Color Grading + Subtitles",
        "label_mn": "Видео өнгө тавилт + хадмал",
        "optional": false,
        "price_en": 1200000,
        "price_mn": 1200000,
        "excluded_with": []
      },
      {
        "id": "29f10984-7400-4c40-ba02-91b6623c6e0d",
        "label_en": "Product Packaging Design",
        "label_mn": "Бүтээгдэхүүний сав баглаа боодлын дизайн",
        "optional": false,
        "price_en": 800000,
        "price_mn": 800000,
        "excluded_with": []
      },
      {
        "id": "f_qnwsj03hs3i4",
        "label_en": "Option for one meeting per week",
        "label_mn": "Долоо хоног бүрийн уулзалт ",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "f_ysqm3v1fjqw4",
        "label_en": "Invoice Provided for Companies (for Mongolia)",
        "label_mn": "Хувь хүнээс компанид баримт олгоно",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "f_2zjls2d7jfac",
        "label_en": "RAW Files Included",
        "label_mn": "Эх файлууд орсон",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "f_at0hqkv57673",
        "label_en": "Unlimited Revisions",
        "label_mn": "Хязгааргүй засвар",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "f_jku7edxcuro2",
        "label_en": "+ Additional Creative Projects",
        "label_mn": "+ Нэмэлт бүтээлч төслүүд",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      }
    ],
    "tiers": []
  },
  {
    "id": "c4dfe2f8-88cb-4b5b-bde3-cbbaa092cd32",
    "name": "Graphic Designer | Start-up",
    "description": "A Start-up plan for new businesses and those with ongoing design needs. Let’s handle your essential day-to-day design needs creatively, all in one place.",
    "featured": false,
    "price": 1000,
    "currency": "$",
    "priceLabel": "Monthly plan",
    "buttonText": "Get started",
    "slotsTotal": 1,
    "slotsTaken": 0,
    "billingToggle": true,
    "yearDiscount": 10,
    "features": [
      "1 concept direction",
      "Logo or key visual",
      "2 rounds of revisions",
      "Source files included"
    ],
    "featureList": [
      {
        "id": "10ce7571-56be-4cea-9aaf-01c24d884611",
        "label_en": "Social Media Post Design",
        "label_mn": "Сошиал медиа постер",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "1ac49dd3-6605-4fc2-a3a2-c73bde18b030",
        "label_en": "Creative Poster Design",
        "label_mn": "Бүтээлч постер",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "769ea798-259d-403d-a0d4-918af7c3e349",
        "label_en": "Print design",
        "label_mn": "Хэвлэлийн эх бэлтгэл",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "991196b0-9ec7-4d3a-a3f7-c459d53bf0e4",
        "label_en": "Product Packaging Design",
        "label_mn": "Бүтээгдэхүүний сав баглаа боодлын дизайн",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "a90d47b7-a31b-46d2-a148-e04f04c89831",
        "label_en": "RAW Files Included",
        "label_mn": "Эх файлууд орсон",
        "optional": false,
        "price_en": 200,
        "price_mn": 200,
        "excluded_with": []
      },
      {
        "id": "f_t4hzsilv6sbk",
        "label_en": "Unlimited Revisions",
        "label_mn": "Хязгааргүй засвар",
        "optional": false,
        "price_en": 0,
        "price_mn": 0,
        "excluded_with": []
      },
      {
        "id": "b19f69cb-fde6-4a73-9783-c4bf27ea6b3c",
        "label_en": "Invoice Provided for Companies (for Mongolia)",
        "label_mn": "Хувь хүнээс компанид баримт олгоно",
        "optional": false,
        "price_en": 150,
        "price_mn": 150,
        "excluded_with": []
      }
    ],
    "tiers": []
  },
  {
    "id": "6cb7316f-7a76-4b00-8ec9-47cfbed19811",
    "name": "Logo design & Brand Guidelines",
    "description": "Build a distinctive brand identity that stands out in the market and creates a professional, trustworthy impression among your audience. Let’s take your brand to the next level.",
    "featured": false,
    "price": 0,
    "currency": "$",
    "priceLabel": "Project Timeline",
    "buttonText": "Get started",
    "slotsTotal": 0,
    "slotsTaken": 0,
    "billingToggle": false,
    "yearDiscount": 0,
    "features": [
      "Dedicated design hours",
      "Brand + product + motion",
      "Weekly syncs",
      "Dedicated Slack channel"
    ],
    "featureList": [],
    "tiers": [
      {
        "id": "t_logo",
        "name": "Branding | Start-up",
        "pages": "15",
        "price": 2300,
        "currency": "$",
        "features": [
          "Logo Development",
          "Brand Guide & Brandbook (S)",
          "Stationery",
          "+ 2 Creative Poster Designs",
          "Source files (AI, PDF, PNG, SVG...)"
        ]
      },
      {
        "id": "t_book",
        "name": "Branding | Advanced",
        "pages": "30",
        "price": 5650,
        "currency": "$",
        "features": [
          "Logo Development",
          "Brand Guide & Brandbook (M)",
          "Stationery",
          "Social Media Design package",
          "Source files (AI, PDF, PNG, SVG...)"
        ]
      },
      {
        "id": "t_full",
        "name": "Branding | Complete",
        "pages": "70",
        "price": 14000,
        "currency": "$",
        "features": [
          "Logo Development",
          "Complete Brand Guide & Brandbook",
          "Stationery",
          "Source files (AI, PDF, PNG, SVG...)",
          "Graphic Designer PRO - 1 Monthly plan"
        ]
      },
      {
        "id": "t_nv1ih8zn",
        "name": "Logo Only",
        "pages": "",
        "price": 600,
        "currency": "$",
        "features": [
          "Logo Development",
          "Color System",
          "Typography System",
          "Source files (AI, PDF, PNG, SVG...)",
          "Exclusive Discount - Any Branding package"
        ]
      }
    ]
  }
]
    },
    testimonials: {
      eyebrow: "Voices",
      heading: "Trusted by",
      headingAccent: "clients & teams",
      items: [
  {
    "id": "51408cb8-e64d-4b51-84e0-b63cf00ccdf8",
    "name": "Sarah Chen",
    "company": "Nova Cosmetics",
    "role": "Founder",
    "quote": "Working with Onon was effortless. The brand identity captured exactly what we were trying to say — better than we could have described it ourselves."
  },
  {
    "id": "c6d5ab21-508c-4614-a2ca-090f079eee6c",
    "name": "James Okafor",
    "company": "Fintra Inc.",
    "role": "Head of Product",
    "quote": "The redesign completely changed how our users feel about the app. Attention to detail at every step."
  },
  {
    "id": "9f38e6af-df65-4fbd-856d-caa747ac117d",
    "name": "Mira Solongo",
    "company": "Orbit Live",
    "role": "Marketing Director",
    "quote": "Bold, distinctive, and delivered on time. Exactly the creative partner we needed for the festival."
  }
]
    },
    connect: {
      eyebrow: "Get in touch",
      heading: "Let's talk about",
      headingAccent: "your project.",
      sub: "Have a new project, a collaboration in mind, or just want to share an idea? Get in touch. Let's build something more interesting together.",
      cards: {
        phone: {
          key: "Call / text",
          value: "+976 8883 9944",
          desc: "Quick replies during working hours."
        },
        location: {
          key: "Based in",
          value: "Ulaanbaatar, Mongolia",
          desc: "Happy to meet in person."
        },
        social: {
          key: "Follow along",
          desc: "New work, process and ideas."
        }
      }
    },
    faq: {
      eyebrow: "Concerns",
      headingLine1: "Frequently",
      headingLine2: "asked questions",
      items: [
  {
    "id": "fafb7f90-9e3a-4c9b-a2fe-1240cda04d96",
    "num": "01",
    "question": "What's your typical process?",
    "answer": "Every project starts with discovery, moves through concept and design, and ends with polished, delivery-ready files. Timelines vary by scope."
  },
  {
    "id": "ee324cd6-0f13-456e-a0e9-6fde55974b17",
    "num": "02",
    "question": "How long does a project take?",
    "answer": "A brand identity typically takes 3-4 weeks, while larger digital products can take 6-10 weeks depending on scope."
  },
  {
    "id": "7817ca7e-b4d3-4722-8ba3-a0cb336a2cbd",
    "num": "03",
    "question": "Do you work with international clients?",
    "answer": "Yes — most collaboration happens async over email and calls, so timezone is rarely an issue."
  },
  {
    "id": "8a5c0340-f33a-40c5-937f-c8c3d0fe15ab",
    "num": "04",
    "question": "What do I need to get started?",
    "answer": "A short brief of your goals and any existing brand material is enough to kick things off."
  }
]
    },
    contact: {
      eyebrow: "Start a project",
      headingLine1: "Let's work",
      headingAccent: "together",
      sub: "Tell me what you'd like made and leave your details — I'll send a quote back.",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your name",
        phoneLabel: "Phone number",
        phonePlaceholder: "+976 8888 8888",
        typeLabel: "What do you need?",
        typePlaceholder: "e.g. Logo, brand identity, poster, packaging, website...",
        budgetLabel: "Budget (optional)",
        budgetPlaceholder: "e.g. $1,000 - $3,000",
        messageLabel: "Project details",
        messagePlaceholder: "Goal, timeline, references...",
        submit: "Get a quote →",
        submitting: "Sending...",
        successTitle: "Request sent successfully!",
        successMsg: "Thank you — I will get back to you shortly with full details.",
        errorTitle: "Couldn't send",
        errorMsg: "Something went wrong. Please reach out to me directly:"
      }
    },
    websiteOrder: {
      eyebrow: "Need a website too?",
      headingPrefix: "Want a ",
      headingAccent: "creative website?",
      headingSuffix: " Click here to place your request.",
      sub: "Tell me about the site you need and I'll get back to you with a plan and quote.",
      button: "Request a website →"
    },
    footer: {
      copyright: "© 2026 OnDesign",
      rights: "All rights reserved.",
      backToTop: "Top ↑"
    }
  }
};

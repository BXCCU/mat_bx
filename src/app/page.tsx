import Image from "next/image";

const featureCards = [
  {
    eyebrow: "现煮热汤",
    title: "一锅滚开，香味先到",
    text: "骨汤打底，红油提香，菜品下锅后吸足汤汁，入口鲜、香、热、辣都在线。",
  },
  {
    eyebrow: "自选串串",
    title: "荤素齐全，想吃什么拿什么",
    text: "豆制品、丸类、蔬菜、粉面都能搭，轻食一碗或解馋一大份都合适。",
  },
  {
    eyebrow: "街坊口味",
    title: "通俗实在，吃完还想来",
    text: "不靠花架子，靠热气、香气和一口顺嘴的老味道留住回头客。",
  },
];

const dishes = [
  {
    name: "清香骨汤串",
    desc: "汤色清亮，菜香、豆香和丸子鲜味都煮进汤里。",
    image: "/images/fresh-skewers.jpg",
    position: "48% 45%",
  },
  {
    name: "招牌红油锅",
    desc: "辣而不燥，红油裹住每一串，越煮越入味。",
    image: "/images/spicy-pot.jpg",
    position: "50% 47%",
  },
  {
    name: "重口麻辣锅",
    desc: "汤底厚、香气足，适合爱吃麻辣的老饕。",
    image: "/images/red-broth.jpg",
    position: "52% 43%",
  },
];

const reasons = [
  ["汤底有香气", "红油、麻香、菜鲜互相托着，吃到最后一口也够味。"],
  ["选择很自由", "丸子、豆皮、蔬菜、粉面随心搭，清淡和重辣都能照顾。"],
  ["出餐够利落", "到店自选，下锅现煮，适合午饭、晚饭和下班加餐。"],
  ["门店好找", "高德地图搜索“李记包子（王郎前街店）”，按导航到店。"],
];

const quickPoints = ["鲜香热辣", "现选现煮", "荤素齐全", "街坊实在"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf3] text-[#24130d]">
      <section className="relative min-h-[92svh] bg-[#220b08] text-white">
        <Image
          src="/images/red-broth.jpg"
          alt="李记包子麻辣烫红油锅底"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-75"
          style={{ objectPosition: "51% 44%" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(21,7,5,0.88)_0%,rgba(21,7,5,0.56)_43%,rgba(21,7,5,0.18)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[92svh] w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
          <header className="flex items-center justify-between gap-5">
            <a href="#top" className="text-sm font-semibold tracking-[0.28em] text-[#ffd39b]">
              LIJI BAOZI
            </a>
            <nav className="hidden items-center gap-7 text-sm text-white/78 md:flex">
              <a className="transition hover:text-[#ffd39b]" href="#dishes">
                招牌锅底
              </a>
              <a className="transition hover:text-[#ffd39b]" href="#fresh">
                新鲜食材
              </a>
              <a className="transition hover:text-[#ffd39b]" href="#location">
                到店位置
              </a>
            </nav>
          </header>

          <div id="top" className="flex flex-1 items-center py-16">
            <div className="max-w-3xl">
              <p className="mb-6 inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-medium text-[#ffe2b8] backdrop-blur">
                王郎前街店 · 麻辣烫现选现煮
              </p>
              <h1 className="brand-title text-[clamp(4.1rem,13vw,11.5rem)] font-black leading-[0.84] tracking-[0.05em] text-[#fff7ea] drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)] sm:tracking-[0.08em]">
                李记包子
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-white/86 sm:text-2xl">
                热汤一滚，香气就起来。荤素自选、麻辣可调，来一碗鲜香热辣的街坊味道。
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#dishes"
                  className="inline-flex h-[3.25rem] items-center justify-center rounded-full bg-[#e63b1e] px-8 text-base font-bold text-white shadow-[0_18px_45px_rgba(230,59,30,0.36)] transition hover:bg-[#ff4b29]"
                >
                  看看锅里有什么
                </a>
                <a
                  href="#location"
                  className="inline-flex h-[3.25rem] items-center justify-center rounded-full border border-white/28 bg-white/10 px-8 text-base font-bold text-white backdrop-blur transition hover:bg-white/18"
                >
                  查看地址电话
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-3 pb-8 sm:grid-cols-4">
            {quickPoints.map((point) => (
              <div
                key={point}
                className="border-t border-white/16 pt-3 text-sm font-semibold tracking-[0.18em] text-[#ffd39b]"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fresh" className="bg-[#fffaf3] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.26em] text-[#be321b]">FRESH & SPICY</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#24130d] sm:text-6xl">
              一眼看得见的新鲜，一口吃得出的鲜香。
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f5144]">
              菜品在锅边码得满满当当，想清汤就清爽，想麻辣就过瘾。热闹、有烟火气，也够实在。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {featureCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[8px] border border-[#efd8c6] bg-white p-6 shadow-[0_18px_60px_rgba(84,36,16,0.08)]"
              >
                <p className="text-xs font-bold tracking-[0.22em] text-[#be321b]">{card.eyebrow}</p>
                <h3 className="mt-4 text-xl font-black text-[#24130d]">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#7a5a4b]">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="dishes" className="bg-[#161712] px-5 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold tracking-[0.26em] text-[#ffc166]">SIGNATURE BOWLS</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">招牌热锅，越煮越香。</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-white/67">
              清汤鲜，红汤香，串串下锅热气腾腾。按自己口味选，今天这一碗就吃过瘾。
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {dishes.map((dish, index) => (
              <article
                key={dish.name}
                className="group overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.06]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                    style={{ objectPosition: dish.position }}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/74 to-transparent p-5">
                    <span className="rounded-full bg-[#e63b1e] px-3 py-1 text-xs font-bold">
                      0{index + 1}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black">{dish.name}</h3>
                  <p className="mt-3 leading-7 text-white/68">{dish.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf3] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.12fr] lg:items-center">
          <div className="relative min-h-[540px] overflow-hidden rounded-[8px] bg-[#2a120d]">
            <Image
              src="/images/spicy-pot.jpg"
              alt="李记包子麻辣烫丰富菜品"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "48% 46%" }}
            />
          </div>
          <div>
            <p className="text-sm font-bold tracking-[0.26em] text-[#be321b]">WHY COME IN</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#24130d] sm:text-6xl">
              路过闻到香，就值得进来坐一坐。
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {reasons.map(([title, text]) => (
                <div key={title} className="border-l-4 border-[#2f7d46] bg-white px-5 py-4">
                  <h3 className="text-lg font-black text-[#24130d]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#725447]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="bg-[#f4f1ea] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.26em] text-[#be321b]">LOCATION</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="flex flex-col justify-between rounded-[8px] border border-[#191919] bg-[#fffaf3] p-6 shadow-[12px_12px_0_#191919] sm:p-8">
              <div>
                <h2 className="text-4xl font-black tracking-tight text-[#151515] sm:text-6xl">
                  李记包子
                  <span className="mt-3 block text-2xl font-black text-[#d92d1b] sm:text-3xl">
                    王郎前街店
                  </span>
                </h2>
                <div className="mt-8 space-y-5 border-t border-[#191919] pt-6">
                  <div>
                    <p className="text-xs font-black tracking-[0.22em] text-[#d92d1b]">ADDRESS</p>
                    <p className="mt-2 text-xl font-black leading-8 text-[#151515]">
                      邯郸市复兴区董蒙幼儿园复兴分园西南门旁
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-black tracking-[0.22em] text-[#d92d1b]">PHONE</p>
                    <a
                      href="tel:13653303836"
                      className="mt-2 inline-block text-3xl font-black tracking-tight text-[#151515] transition hover:text-[#d92d1b]"
                    >
                      13653303836
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-black tracking-[0.22em] text-[#d92d1b]">NAVIGATION</p>
                    <p className="mt-2 text-lg font-bold leading-8 text-[#46332b]">
                      高德地图搜索：李记包子（王郎前街店）
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:13653303836"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#151515] px-7 text-sm font-black text-white transition hover:bg-[#d92d1b]"
                >
                  电话咨询
                </a>
                <a
                  href="#top"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#151515] px-7 text-sm font-black text-[#151515] transition hover:bg-white"
                >
                  返回首页
                </a>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="relative min-h-[470px] overflow-hidden rounded-[8px] border border-[#191919] bg-white">
                <Image
                  src="/images/location-map.png"
                  alt="李记包子王郎前街店地图位置"
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "43% 36%" }}
                />
                <div className="absolute left-[40.5%] top-[34%] h-5 w-5 rounded-full bg-[#e63b1e] shadow-[0_0_0_7px_rgba(230,59,30,0.2)]" />
                <div className="absolute bottom-5 left-5 rounded-[8px] border border-[#191919] bg-white px-5 py-4 shadow-[6px_6px_0_#191919]">
                  <p className="text-xs font-black tracking-[0.22em] text-[#d92d1b]">MAP</p>
                  <p className="mt-1 text-lg font-black text-[#151515]">门店位置已放大</p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[220px] overflow-hidden rounded-[8px] border border-[#191919] bg-[#24130d]">
                  <Image
                    src="/images/storefront-info.png"
                    alt="李记包子王郎前街店门头"
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover scale-125"
                    style={{ objectPosition: "50% 26%" }}
                  />
                </div>
                <div className="rounded-[8px] border border-[#191919] bg-[#d92d1b] p-6 text-white">
                  <p className="text-sm font-bold tracking-[0.22em] text-white/70">OPEN DAILY</p>
                  <h3 className="mt-4 text-3xl font-black leading-tight">现选现煮，到店就吃。</h3>
                  <p className="mt-4 leading-7 text-white/80">
                    午饭、晚饭、下班加餐都合适。清汤、麻辣都能按口味来。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#24130d] px-5 py-10 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="brand-title text-4xl font-black tracking-[0.12em]">李记包子</p>
            <p className="mt-2 text-sm text-white/62">鲜香麻辣，热气腾腾，欢迎到店。</p>
          </div>
          <a
            href="#location"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#ffc166] px-7 text-sm font-black text-[#24130d] transition hover:bg-[#ffd58b]"
          >
            地址电话
          </a>
        </div>
      </footer>
    </main>
  );
}

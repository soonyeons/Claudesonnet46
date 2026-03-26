import { useNavigate } from "react-router";
import {
  ArrowRight,
  Star,
  CheckCircle2,
  LayoutGrid,
  Link2,
  Smartphone,
  ChevronRight,
  Building2,
  Clock,
  Share2,
  Eye,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const mockupImg =
  "https://images.unsplash.com/photo-1674452631849-0046af680f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMG1vY2t1cCUyMGNsYXl8ZW58MXx8fHwxNzczNzM2MTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080";

const galleryImg1 =
  "https://images.unsplash.com/photo-1586763749650-70d7996310d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBhcHAlMjBtb2JpbGUlMjBVSSUyMHNjcmVlbnxlbnwxfHx8fDE3NzM3MzYxNTF8MA&ixlib=rb-4.1.0&q=80&w=1080";

const galleryImg2 =
  "https://images.unsplash.com/photo-1657727534685-36b09f84e193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBlbnRlcnByaXNlJTIwc29mdHdhcmUlMjBkYXNoYm9hcmQlMjBVSXxlbnwxfHx8fDE3NzM3MzYxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080";

const stats = [
  { label: "UI 시안 수", value: "1,200+", icon: LayoutGrid, color: "var(--primary)" },
  { label: "프로젝트 수", value: "350+", icon: Building2, color: "var(--chart-2)" },
  { label: "평균 공유 소요시간", value: "3분", icon: Clock, color: "var(--chart-3)" },
  { label: "비로그인 열람", value: "가능", icon: Eye, color: "var(--chart-5)" },
];

const cases = [
  {
    company: "A 연수원",
    role: "IT 기획팀장",
    quote:
      "기존엔 PDF로 시안을 공유했는데, Labsfolio 덕분에 실제 앱처럼 체험할 수 있어 클라이언트 설득이 훨씬 쉬워졌어요.",
    metric1: { label: "검토 시간 단축", value: "60%" },
    metric2: { label: "승인 소요일", value: "2일→반나절" },
    color: "#0066FF",
    initial: "A",
  },
  {
    company: "B 교육센터",
    role: "디지털 전환 담당자",
    quote:
      "브랜딩 목업이 정말 인상적이에요. 우리 로고와 컬러가 적용된 앱 화면을 보고 경영진이 바로 OK 사인을 줬습니다.",
    metric1: { label: "의사결정 속도", value: "3배↑" },
    metric2: { label: "프로젝트 수주율", value: "85%" },
    color: "#00BF40",
    initial: "B",
  },
  {
    company: "C 그룹 연수원",
    role: "HR 시스템 담당",
    quote:
      "큐레이션 기능으로 맞춤 컬렉션을 만들어 전달하니, 이해관계자마다 최적화된 시안을 보여줄 수 있었습니다.",
    metric1: { label: "시안 공유 횟수", value: "월 40+" },
    metric2: { label: "고객 만족도", value: "4.9/5" },
    color: "#6541F2",
    initial: "C",
  },
];

const features = [
  {
    icon: LayoutGrid,
    emoji: "🖼️",
    title: "갤러리",
    desc: "1,200개+ UI 시안을 업종·스타일·컬러로 필터링하고, 그리드/리스트 뷰로 탐색",
    items: ["업종별 필터", "키워드 검색", "그리드·리스트 전환"],
    color: "#EBF2FF",
    accent: "var(--primary)",
  },
  {
    icon: Link2,
    emoji: "📎",
    title: "큐레이션",
    desc: "선별한 시안으로 나만의 컬렉션을 만들고, 링크 하나로 클라이언트에게 공유",
    items: ["드래그 순서 변경", "공유 링크 생성", "만료일 설정"],
    color: "#FFF4EB",
    accent: "var(--chart-3)",
  },
  {
    icon: Smartphone,
    emoji: "✨",
    title: "데모 체험",
    desc: "로고·컬러를 입력하면 실제 앱처럼 브랜딩된 목업을 즉시 미리보기",
    items: ["실시간 브랜딩 적용", "PNG 캡처 저장", "공유 링크 발송"],
    color: "#F0EBFF",
    accent: "var(--chart-5)",
  },
];

const processSteps = [
  {
    step: 1,
    title: "니즈 분석",
    desc: "업종·규모·목표를 파악하고 최적의 시안을 선별합니다",
    color: "#EBF2FF",
    accent: "var(--primary)",
    tag: "Discovery",
  },
  {
    step: 2,
    title: "기획",
    desc: "선별된 시안으로 큐레이션 컬렉션을 구성하고 데모를 제작합니다",
    color: "#FFF4EB",
    accent: "var(--chart-3)",
    tag: "Planning",
  },
  {
    step: 3,
    title: "개발",
    desc: "브랜딩이 적용된 실제 앱 개발을 진행합니다",
    color: "#EBFFF1",
    accent: "var(--chart-2)",
    tag: "Development",
  },
  {
    step: 4,
    title: "오픈",
    desc: "완성된 앱을 런칭하고 관계자에게 공유합니다",
    color: "#F0EBFF",
    accent: "var(--chart-5)",
    tag: "Launch",
  },
  {
    step: 5,
    title: "운영",
    desc: "지속적인 업데이트와 피드백으로 앱을 발전시킵니다",
    color: "#FFEBEB",
    accent: "var(--destructive)",
    tag: "Operation",
  },
];

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-background">
      {/* ① Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,102,255,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-[1280px] mx-auto px-6 pt-20 pb-16 flex flex-col items-center text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted border border-border mb-6"
            style={{ borderRadius: "var(--radius-button)" }}
          >
            <Star size={12} className="text-primary" fill="var(--primary)" />
            <span
              className="text-accent"
              style={{ fontSize: "var(--text-caption)" }}
            >
              연수원 앱 전문 UI 시안 포트폴리오
            </span>
          </div>

          <h1
            className="text-foreground max-w-2xl mb-4"
            style={{ fontSize: "var(--text-h1)", fontWeight: 700, lineHeight: 1.2 }}
          >
            연수원 앱 시안을{" "}
            <span className="text-primary">쉽고 빠르게</span>
          </h1>
          <p
            className="text-accent max-w-xl mb-8"
            style={{ fontSize: "var(--text-h4)", lineHeight: 1.6 }}
          >
            업로드부터 공유까지, 브랜딩된 목업으로
            <br />
            클라이언트를 단번에 설득하세요
          </p>

          <div className="flex items-center gap-3 mb-16">
            <button
              onClick={() => navigate("/demo")}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white transition-opacity hover:opacity-90"
              style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-base)" }}
            >
              무료로 시작하기
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => navigate("/gallery")}
              className="flex items-center gap-2 px-6 py-3 bg-background text-foreground border border-border hover:bg-muted transition-colors"
              style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-base)" }}
            >
              갤러리 보기
            </button>
          </div>

          {/* Phone Mockup Preview */}
          <div className="relative flex items-end justify-center gap-6">
            {/* Decorative cards */}
            <div
              className="hidden md:block w-48 h-72 overflow-hidden border border-border"
              style={{ borderRadius: "var(--radius-card)", transform: "rotate(-4deg) translateY(20px)", boxShadow: "var(--elevation-sm)" }}
            >
              <ImageWithFallback
                src={galleryImg1}
                alt="UI 시안 예시"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Center phone */}
            <div
              className="relative w-56 h-96 overflow-hidden border-2 border-border bg-muted"
              style={{
                borderRadius: "32px",
                boxShadow: "0 32px 64px -16px rgba(0,0,0,0.2), 0 8px 16px -8px rgba(0,0,0,0.1)",
              }}
            >
              <ImageWithFallback
                src={mockupImg}
                alt="클레이 폰 목업"
                className="w-full h-full object-cover"
              />
              {/* Overlay label */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-foreground/90 text-white whitespace-nowrap"
                style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-caption)" }}
              >
                🏠 갤러리 미리보기
              </div>
            </div>
            <div
              className="hidden md:block w-48 h-72 overflow-hidden border border-border"
              style={{ borderRadius: "var(--radius-card)", transform: "rotate(4deg) translateY(20px)", boxShadow: "var(--elevation-sm)" }}
            >
              <ImageWithFallback
                src={galleryImg2}
                alt="UI 시안 예시 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ② Stats Bar */}
      <section className="border-y border-border bg-muted">
        <div className="max-w-[1280px] mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-1"
                  style={{ backgroundColor: `${stat.color}18` }}
                >
                  <stat.icon size={18} style={{ color: stat.color }} />
                </div>
                <div
                  className="text-foreground"
                  style={{ fontSize: "var(--text-h3)", fontWeight: 700 }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-accent"
                  style={{ fontSize: "var(--text-caption)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ③ Customer Cases */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-muted border border-border mb-4"
              style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-caption)" }}
            >
              <span>👥</span>
              <span className="text-accent">고객 사례</span>
              <span
                className="px-1.5 py-0.5 bg-chart-2 text-white"
                style={{ borderRadius: "4px", fontSize: "10px" }}
              >
                공개
              </span>
            </div>
            <h2
              className="text-foreground"
              style={{ fontSize: "var(--text-h2)", fontWeight: 700 }}
            >
              실제 연수원의 성공 사례
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <div
                key={c.company}
                className="bg-card border border-border p-6 flex flex-col gap-4"
                style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--elevation-sm)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                    style={{ background: c.color, fontSize: "var(--text-label)", fontWeight: 700 }}
                  >
                    {c.initial}
                  </div>
                  <div>
                    <div
                      className="text-foreground"
                      style={{ fontSize: "var(--text-label)", fontWeight: 600 }}
                    >
                      {c.company}
                    </div>
                    <div
                      className="text-accent"
                      style={{ fontSize: "var(--text-caption)" }}
                    >
                      {c.role}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} size={12} style={{ color: "#FF9200" }} fill="#FF9200" />
                  ))}
                </div>
                <p
                  className="text-accent flex-1"
                  style={{ fontSize: "var(--text-label)", lineHeight: 1.7 }}
                >
                  "{c.quote}"
                </p>
                <div className="flex gap-4 pt-2 border-t border-border">
                  <div className="flex-1 text-center">
                    <div
                      className="text-foreground"
                      style={{ fontSize: "var(--text-label)", fontWeight: 700 }}
                    >
                      {c.metric1.value}
                    </div>
                    <div
                      className="text-accent"
                      style={{ fontSize: "var(--text-caption)" }}
                    >
                      {c.metric1.label}
                    </div>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="flex-1 text-center">
                    <div
                      className="text-foreground"
                      style={{ fontSize: "var(--text-label)", fontWeight: 700 }}
                    >
                      {c.metric2.value}
                    </div>
                    <div
                      className="text-accent"
                      style={{ fontSize: "var(--text-caption)" }}
                    >
                      {c.metric2.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              className="flex items-center gap-1.5 text-primary hover:opacity-80 transition-opacity"
              style={{ fontSize: "var(--text-label)" }}
            >
              전체 사례 보기 <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ④ Core Features */}
      <section className="py-20 bg-muted">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-background border border-border mb-4"
              style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-caption)" }}
            >
              <span>⚡</span>
              <span className="text-accent">핵심 기능 소개</span>
              <span
                className="px-1.5 py-0.5 bg-chart-2 text-white"
                style={{ borderRadius: "4px", fontSize: "10px" }}
              >
                공개
              </span>
            </div>
            <h2
              className="text-foreground"
              style={{ fontSize: "var(--text-h2)", fontWeight: 700 }}
            >
              갤러리 · 큐레이션 · 데모, 3가지로 끝
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-card border border-border p-6 flex flex-col gap-4"
                style={{ borderRadius: "var(--radius-card)" }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ backgroundColor: f.color, borderRadius: "var(--radius)" }}
                >
                  <span style={{ fontSize: "20px" }}>{f.emoji}</span>
                </div>
                <div>
                  <h3
                    className="text-foreground mb-2"
                    style={{ fontSize: "var(--text-h4)", fontWeight: 700 }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="text-accent"
                    style={{ fontSize: "var(--text-label)", lineHeight: 1.7 }}
                  >
                    {f.desc}
                  </p>
                </div>
                <ul className="flex flex-col gap-2">
                  {f.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-accent"
                      style={{ fontSize: "var(--text-label)" }}
                    >
                      <CheckCircle2 size={14} style={{ color: f.accent, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑤ Demo Mockup Preview */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-muted border border-border mb-4"
                style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-caption)" }}
              >
                <span>✨</span>
                <span className="text-accent">데모 목업 미리보기</span>
                <span
                  className="px-1.5 py-0.5 bg-chart-2 text-white"
                  style={{ borderRadius: "4px", fontSize: "10px" }}
                >
                  공개
                </span>
              </div>
              <h2
                className="text-foreground mb-4"
                style={{ fontSize: "var(--text-h2)", fontWeight: 700 }}
              >
                브랜딩 적용 목업을
                <br />
                지금 바로 체험하세요
              </h2>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "로고 업로드 (PNG/SVG)",
                  "브랜드 컬러 피커로 즉시 적용",
                  "실시간 모바일 프레임 미리보기",
                  "PNG 캡처 & 공유 링크 생성",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-accent" style={{ fontSize: "var(--text-label)" }}>
                    <CheckCircle2 size={15} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate("/demo")}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white hover:opacity-90 transition-opacity"
                style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-base)" }}
              >
                데모 만들기 <ArrowRight size={16} />
              </button>
            </div>
            <div className="flex-1 flex justify-center">
              <div
                className="relative w-56 h-96 overflow-hidden border-2 border-border"
                style={{ borderRadius: "32px", boxShadow: "var(--elevation-sm)" }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1767903622388-4949aad2bd93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBmaXRuZXNzJTIwYXBwJTIwbW9iaWxlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3MzczNjE1NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="브랜딩 목업 예시"
                  className="w-full h-full object-cover"
                />
                {/* Branding overlay */}
                <div
                  className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 bg-white/90"
                  style={{ borderRadius: "var(--radius-button)", boxShadow: "var(--elevation-sm)" }}
                >
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <span className="text-foreground" style={{ fontSize: "10px", fontWeight: 600 }}>내 브랜드 로고</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑥ Process Timeline */}
      <section className="py-20 bg-muted">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-background border border-border mb-4"
              style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-caption)" }}
            >
              <span>🗂️</span>
              <span className="text-accent">제작 프로세스</span>
              <span
                className="px-1.5 py-0.5 bg-chart-2 text-white"
                style={{ borderRadius: "4px", fontSize: "10px" }}
              >
                공개
              </span>
            </div>
            <h2
              className="text-foreground"
              style={{ fontSize: "var(--text-h2)", fontWeight: 700 }}
            >
              5단계 검증된 프로세스
            </h2>
          </div>

          <div className="relative flex flex-col gap-4 max-w-2xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-6 bottom-6 w-0.5 bg-border"
              style={{ left: "23px" }}
            />
            {processSteps.map((step, idx) => (
              <div key={step.step} className="flex gap-4 relative">
                {/* Step circle */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white"
                  style={{ backgroundColor: step.color, zIndex: 1 }}
                >
                  <span
                    className="text-foreground"
                    style={{ fontSize: "var(--text-label)", fontWeight: 700 }}
                  >
                    {step.step}
                  </span>
                </div>
                {/* Content */}
                <div
                  className="flex-1 bg-card border border-border p-4"
                  style={{ borderRadius: "var(--radius-card)" }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4
                      className="text-foreground"
                      style={{ fontSize: "var(--text-label)", fontWeight: 700 }}
                    >
                      {step.title}
                    </h4>
                    <span
                      className="px-2 py-0.5 text-white"
                      style={{
                        backgroundColor: step.accent,
                        borderRadius: "4px",
                        fontSize: "10px",
                      }}
                    >
                      {step.tag}
                    </span>
                  </div>
                  <p
                    className="text-accent"
                    style={{ fontSize: "var(--text-caption)", lineHeight: 1.6 }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button
              onClick={() => navigate("/demo")}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white hover:opacity-90 transition-opacity"
              style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-base)" }}
            >
              프로젝트 등록하기 <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ⑦ Bottom CTA + Footer */}
      <section className="py-20 bg-foreground">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 mb-6"
            style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-caption)" }}
          >
            <span className="text-white/70">하단 CTA</span>
            <span
              className="px-1.5 py-0.5 bg-chart-2 text-white"
              style={{ borderRadius: "4px", fontSize: "10px" }}
            >
              공개
            </span>
          </div>
          <h2
            className="text-white mb-4"
            style={{ fontSize: "var(--text-h2)", fontWeight: 700 }}
          >
            지금 바로 무료로 시작하세요
          </h2>
          <p
            className="text-white/60 mb-8"
            style={{ fontSize: "var(--text-base)" }}
          >
            연수원 앱 시안 1,200개+ · 브랜딩 데모 · 큐레이션 공유
          </p>
          <div className="flex items-center justify-center gap-3 mb-16">
            <button
              onClick={() => navigate("/demo")}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white hover:opacity-90 transition-opacity"
              style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-base)" }}
            >
              무료 체험 시작 <ArrowRight size={16} />
            </button>
            <button
              onClick={() => navigate("/gallery")}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20"
              style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-base)" }}
            >
              갤러리 미리보기
            </button>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-white" style={{ fontSize: "var(--text-label)", fontWeight: 600 }}>
                🏠 Labsfolio
              </span>
            </div>
            <div className="flex items-center gap-6">
              {["이용약관", "개인정보처리방침", "문의하기"].map((link) => (
                <button
                  key={link}
                  className="text-white/50 hover:text-white/80 transition-colors"
                  style={{ fontSize: "var(--text-caption)" }}
                >
                  {link}
                </button>
              ))}
            </div>
            <div
              className="text-white/30"
              style={{ fontSize: "var(--text-caption)" }}
            >
              © 2026 Labsfolio. All rights reserved.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

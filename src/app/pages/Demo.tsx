import { useState } from "react";
import {
  Upload,
  Download,
  Link2,
  Copy,
  CheckCheck,
  Trash2,
  RefreshCw,
  Eye,
  Smartphone,
  Calendar,
  Share2,
  MessageSquare,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const phoneImgs = [
  "https://images.unsplash.com/photo-1767903622388-4949aad2bd93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1586763749650-70d7996310d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1674452631849-0046af680f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
];

const myDemos = [
  {
    id: 1,
    name: "A연수원 헬스케어 데모",
    brand: "A연수원",
    color: "#00BF40",
    created: "2026-03-10",
    views: 89,
    link: "labsfolio.kr/demo/abc",
    imgIdx: 0,
  },
  {
    id: 2,
    name: "B교육센터 커머스 데모",
    brand: "B교육센터",
    color: "#FF9200",
    created: "2026-03-05",
    views: 54,
    link: "labsfolio.kr/demo/def",
    imgIdx: 1,
  },
  {
    id: 3,
    name: "C그룹 금융 데모",
    brand: "C그룹",
    color: "#6541F2",
    created: "2026-02-20",
    views: 127,
    link: "labsfolio.kr/demo/ghi",
    imgIdx: 2,
  },
];

type TabType = "create" | "manage" | "viewer";

export function Demo() {
  const [activeTab, setActiveTab] = useState<TabType>("create");
  const [brandName, setBrandName] = useState("내 브랜드");
  const [primaryColor, setPrimaryColor] = useState("#0066FF");
  const [subColor, setSubColor] = useState("#00BF40");
  const [logoUploaded, setLogoUploaded] = useState(false);
  const [bgUploaded, setBgUploaded] = useState(false);
  const [copied, setCopied] = useState<number | null>(null);
  const [selectedDemo, setSelectedDemo] = useState(myDemos[0]);
  const [previewImg, setPreviewImg] = useState(0);

  const handleCopy = (id: number) => {
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const tabs = [
    { id: "create" as TabType, label: "데모 제작" },
    { id: "manage" as TabType, label: "링크 관리" },
    { id: "viewer" as TabType, label: "데모 뷰어 (공개)" },
  ];

  return (
    <div className="h-[calc(100vh-56px)] flex flex-col">
      {/* Page Header */}
      <div className="border-b border-border px-6 pt-5 pb-0">
        <div className="flex items-center gap-2 mb-1">
          <h2 className="text-foreground" style={{ fontSize: "var(--text-h3)", fontWeight: 700 }}>
            데모 체험
          </h2>
          <span
            className="px-2 py-0.5 bg-primary/10 text-primary"
            style={{ borderRadius: "4px", fontSize: "var(--text-caption)", fontWeight: 600 }}
          >
            Sales
          </span>
          <span
            className="px-2 py-0.5 bg-chart-5/10 text-chart-5"
            style={{ borderRadius: "4px", fontSize: "var(--text-caption)", fontWeight: 600 }}
          >
            Admin
          </span>
        </div>
        <p className="text-accent mb-3" style={{ fontSize: "var(--text-caption)" }}>
          브랜딩이 적용된 목업 데모를 제작하고 클라이언트에게 공유하세요
        </p>
        {/* Tabs */}
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-accent hover:text-foreground"
              }`}
              style={{ fontSize: "var(--text-label)" }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Tab: Create Demo */}
        {activeTab === "create" && (
          <div className="flex h-full">
            {/* Left: Form */}
            <div className="w-80 flex-shrink-0 border-r border-border overflow-y-auto p-5 flex flex-col gap-5">
              <div>
                <div
                  className="text-foreground mb-3"
                  style={{ fontSize: "var(--text-label)", fontWeight: 600 }}
                >
                  브랜딩 입력
                </div>

                {/* Logo upload */}
                <div className="mb-4">
                  <label className="text-accent block mb-1.5" style={{ fontSize: "var(--text-caption)" }}>
                    로고 업로드 (PNG/SVG)
                  </label>
                  <button
                    onClick={() => setLogoUploaded(!logoUploaded)}
                    className={`w-full h-20 flex flex-col items-center justify-center gap-1.5 border-2 border-dashed transition-colors ${
                      logoUploaded
                        ? "border-chart-2 bg-chart-2/5"
                        : "border-border hover:border-primary/50 hover:bg-primary/3"
                    }`}
                    style={{ borderRadius: "var(--radius)" }}
                  >
                    {logoUploaded ? (
                      <>
                        <div
                          className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white"
                          style={{ fontSize: "var(--text-caption)", fontWeight: 700 }}
                        >
                          {brandName.charAt(0)}
                        </div>
                        <span className="text-chart-2" style={{ fontSize: "var(--text-caption)" }}>업로드됨</span>
                      </>
                    ) : (
                      <>
                        <Upload size={18} className="text-accent" />
                        <span className="text-accent" style={{ fontSize: "var(--text-caption)" }}>클릭하여 업로드</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Brand name */}
                <div className="mb-4">
                  <label className="text-accent block mb-1.5" style={{ fontSize: "var(--text-caption)" }}>
                    브랜드명
                  </label>
                  <input
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full px-3 py-2 bg-input-background border border-border text-foreground outline-none focus:border-primary transition-colors"
                    style={{ borderRadius: "var(--radius)", fontSize: "var(--text-label)" }}
                    placeholder="브랜드명 입력"
                  />
                </div>

                {/* Primary color */}
                <div className="mb-4">
                  <label className="text-accent block mb-1.5" style={{ fontSize: "var(--text-caption)" }}>
                    Primary 컬러
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-10 h-8 rounded cursor-pointer border border-border bg-transparent p-0.5"
                      style={{ borderRadius: "var(--radius)" }}
                    />
                    <input
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="flex-1 px-3 py-2 bg-input-background border border-border text-foreground outline-none focus:border-primary transition-colors"
                      style={{ borderRadius: "var(--radius)", fontSize: "var(--text-label)" }}
                    />
                  </div>
                </div>

                {/* Sub color */}
                <div className="mb-4">
                  <label className="text-accent block mb-1.5" style={{ fontSize: "var(--text-caption)" }}>
                    Sub 컬러
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={subColor}
                      onChange={(e) => setSubColor(e.target.value)}
                      className="w-10 h-8 rounded cursor-pointer border border-border bg-transparent p-0.5"
                      style={{ borderRadius: "var(--radius)" }}
                    />
                    <input
                      value={subColor}
                      onChange={(e) => setSubColor(e.target.value)}
                      className="flex-1 px-3 py-2 bg-input-background border border-border text-foreground outline-none focus:border-primary transition-colors"
                      style={{ borderRadius: "var(--radius)", fontSize: "var(--text-label)" }}
                    />
                  </div>
                </div>

                {/* Background image */}
                <div>
                  <label className="text-accent block mb-1.5" style={{ fontSize: "var(--text-caption)" }}>
                    배경 이미지 (선택)
                  </label>
                  <button
                    onClick={() => setBgUploaded(!bgUploaded)}
                    className={`w-full h-16 flex flex-col items-center justify-center gap-1 border-2 border-dashed transition-colors ${
                      bgUploaded
                        ? "border-chart-2 bg-chart-2/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    style={{ borderRadius: "var(--radius)" }}
                  >
                    <Upload size={14} className={bgUploaded ? "text-chart-2" : "text-accent"} />
                    <span className={bgUploaded ? "text-chart-2" : "text-accent"} style={{ fontSize: "10px" }}>
                      {bgUploaded ? "업로드됨" : "배경 이미지 업로드"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Template selector */}
              <div>
                <div className="text-foreground mb-2" style={{ fontSize: "var(--text-label)", fontWeight: 600 }}>
                  목업 템플릿
                </div>
                <div className="flex gap-2">
                  {phoneImgs.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setPreviewImg(i)}
                      className={`flex-1 aspect-[3/4] overflow-hidden border-2 transition-all ${
                        previewImg === i ? "border-primary" : "border-border"
                      }`}
                      style={{ borderRadius: "var(--radius)" }}
                    >
                      <ImageWithFallback src={img} alt={`템플릿 ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Generate button */}
              <button
                className="w-full py-3 bg-primary text-white hover:opacity-90 transition-opacity"
                style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-base)" }}
              >
                데모 생성하기
              </button>
            </div>

            {/* Right: Live Preview */}
            <div className="flex-1 bg-muted flex flex-col items-center justify-center gap-4 p-8">
              <div
                className="text-foreground mb-2"
                style={{ fontSize: "var(--text-label)", fontWeight: 600 }}
              >
                실시간 미리보기
              </div>
              {/* Phone frame */}
              <div
                className="relative"
                style={{
                  width: "220px",
                  height: "420px",
                  background: "#fff",
                  borderRadius: "36px",
                  border: "6px solid #171719",
                  boxShadow: "0 32px 64px -16px rgba(0,0,0,0.25)",
                  overflow: "hidden",
                }}
              >
                {/* Status bar */}
                <div
                  className="w-full flex justify-between items-center px-4 pt-3 pb-2"
                  style={{ backgroundColor: primaryColor }}
                >
                  <span className="text-white" style={{ fontSize: "8px" }}>9:41 AM</span>
                  <div
                    className="w-16 h-4 rounded-full"
                    style={{ backgroundColor: "#000", margin: "0 auto" }}
                  />
                  <span className="text-white" style={{ fontSize: "8px" }}>●●●</span>
                </div>

                {/* Header bar */}
                <div
                  className="w-full px-3 py-2 flex items-center gap-1.5"
                  style={{ backgroundColor: primaryColor }}
                >
                  <div
                    className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center text-white"
                    style={{ fontSize: "8px", fontWeight: 700 }}
                  >
                    {brandName.charAt(0)}
                  </div>
                  <span className="text-white" style={{ fontSize: "9px", fontWeight: 600 }}>
                    {brandName}
                  </span>
                </div>

                {/* App content */}
                <div className="flex-1 overflow-hidden relative" style={{ height: "calc(100% - 80px)" }}>
                  <ImageWithFallback
                    src={phoneImgs[previewImg]}
                    alt="데모 미리보기"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Branding overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-8 flex items-center justify-center"
                    style={{ backgroundColor: subColor + "CC" }}
                  >
                    <span className="text-white" style={{ fontSize: "9px" }}>
                      Powered by {brandName}
                    </span>
                  </div>
                </div>
              </div>

              {/* Color chips */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: primaryColor }} />
                  <span className="text-accent" style={{ fontSize: "var(--text-caption)" }}>Primary</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: subColor }} />
                  <span className="text-accent" style={{ fontSize: "var(--text-caption)" }}>Sub</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  className="flex items-center gap-1.5 px-4 py-2 bg-background border border-border text-accent hover:bg-muted transition-colors"
                  style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-caption)" }}
                >
                  <Download size={13} /> PNG 캡처
                </button>
                <button
                  className="flex items-center gap-1.5 px-4 py-2 bg-primary text-white hover:opacity-90 transition-opacity"
                  style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-caption)" }}
                >
                  <Share2 size={13} /> 링크 생성
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Manage */}
        {activeTab === "manage" && (
          <div className="p-6 max-w-3xl flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-foreground" style={{ fontSize: "var(--text-h4)", fontWeight: 700 }}>
                생성된 데모 목록
              </h3>
            </div>
            {myDemos.map((demo) => (
              <div
                key={demo.id}
                className="bg-card border border-border p-4"
                style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--elevation-sm)" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-16 h-24 overflow-hidden flex-shrink-0"
                    style={{ borderRadius: "var(--radius)" }}
                  >
                    <ImageWithFallback
                      src={phoneImgs[demo.imgIdx]}
                      alt={demo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: demo.color }}
                      />
                      <span
                        className="text-foreground"
                        style={{ fontSize: "var(--text-label)", fontWeight: 600 }}
                      >
                        {demo.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-accent mb-3" style={{ fontSize: "var(--text-caption)" }}>
                      <span className="flex items-center gap-1"><Calendar size={10} />{demo.created}</span>
                      <span className="flex items-center gap-1"><Eye size={10} />{demo.views}회</span>
                    </div>
                    <div
                      className="flex items-center gap-2 px-3 py-2 bg-muted border border-border mb-3"
                      style={{ borderRadius: "var(--radius)" }}
                    >
                      <Link2 size={12} className="text-accent flex-shrink-0" />
                      <span className="flex-1 text-accent truncate" style={{ fontSize: "var(--text-caption)" }}>
                        {demo.link}
                      </span>
                      <button
                        onClick={() => handleCopy(demo.id)}
                        className="flex items-center gap-1 text-primary flex-shrink-0"
                        style={{ fontSize: "var(--text-caption)" }}
                      >
                        {copied === demo.id ? <CheckCheck size={12} /> : <Copy size={12} />}
                        {copied === demo.id ? "복사됨" : "복사"}
                      </button>
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="flex items-center gap-1 px-3 py-1.5 bg-muted border border-border text-accent hover:bg-border transition-colors"
                        style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-caption)" }}
                      >
                        <RefreshCw size={11} /> 수정
                      </button>
                      <button
                        className="flex items-center gap-1 px-3 py-1.5 bg-muted border border-border text-accent hover:bg-border transition-colors"
                        style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-caption)" }}
                      >
                        <Link2 size={11} /> 링크 재발급
                      </button>
                      <button
                        className="flex items-center gap-1 px-3 py-1.5 border border-border text-destructive hover:bg-destructive/5 transition-colors"
                        style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-caption)" }}
                      >
                        <Trash2 size={11} /> 삭제
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Demo Viewer (Public) */}
        {activeTab === "viewer" && (
          <div className="flex flex-col h-full">
            {/* Viewer banner */}
            <div
              className="mx-6 mt-4 px-4 py-2 bg-chart-2/10 border border-chart-2/20 flex items-center gap-2"
              style={{ borderRadius: "var(--radius)" }}
            >
              <Smartphone size={13} className="text-chart-2" />
              <span className="text-chart-2" style={{ fontSize: "var(--text-caption)" }}>
                공유받은 데모 체험 화면입니다. 로그인 없이 열람 가능합니다.
              </span>
            </div>

            <div className="flex-1 flex items-center justify-center p-8 gap-16">
              {/* Phone preview */}
              <div
                style={{
                  width: "240px",
                  height: "480px",
                  background: "#fff",
                  borderRadius: "40px",
                  border: "6px solid #171719",
                  boxShadow: "0 32px 64px -16px rgba(0,0,0,0.25)",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                {/* Status bar */}
                <div className="flex justify-between items-center px-4 py-2" style={{ backgroundColor: "#00BF40" }}>
                  <span className="text-white" style={{ fontSize: "8px" }}>9:41 AM</span>
                  <div className="w-16 h-4 rounded-full bg-black/20" />
                  <span className="text-white" style={{ fontSize: "8px" }}>●●●</span>
                </div>
                <div className="px-3 py-2 flex items-center gap-1.5" style={{ backgroundColor: "#00BF40" }}>
                  <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center text-white" style={{ fontSize: "8px", fontWeight: 700 }}>A</div>
                  <span className="text-white" style={{ fontSize: "9px", fontWeight: 600 }}>A연수원 앱</span>
                </div>
                <div className="flex-1 overflow-hidden" style={{ height: "calc(100% - 70px)" }}>
                  <ImageWithFallback
                    src={phoneImgs[0]}
                    alt="데모 뷰어"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* CTA area */}
              <div className="max-w-xs">
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-muted border border-border mb-4"
                  style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-caption)" }}
                >
                  <span>✨</span>
                  <span className="text-accent">브랜딩 적용 목업</span>
                  <span
                    className="px-1.5 py-0.5 bg-chart-2 text-white"
                    style={{ borderRadius: "4px", fontSize: "10px" }}
                  >
                    공개
                  </span>
                </div>
                <h2
                  className="text-foreground mb-3"
                  style={{ fontSize: "var(--text-h3)", fontWeight: 700 }}
                >
                  A연수원
                  <br />
                  헬스케어 앱 데모
                </h2>
                <p
                  className="text-accent mb-6"
                  style={{ fontSize: "var(--text-label)", lineHeight: 1.7 }}
                >
                  실제 브랜드 컬러와 로고가 적용된 앱 목업입니다.
                  프로젝트 진행을 원하시면 아래 버튼으로 문의해 주세요.
                </p>
                <button
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-white hover:opacity-90 transition-opacity"
                  style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-base)" }}
                >
                  <MessageSquare size={16} /> 문의하기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

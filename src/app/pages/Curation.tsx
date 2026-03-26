import { useState } from "react";
import {
  Plus,
  Link2,
  Eye,
  Edit3,
  Trash2,
  Copy,
  CheckCheck,
  GripVertical,
  Calendar,
  Share2,
  Download,
  ExternalLink,
  Lock,
  Globe,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const galleryImgs = [
  "https://images.unsplash.com/photo-1767903622388-4949aad2bd93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1586763749650-70d7996310d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1757301714935-c8127a21abc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1657727534685-36b09f84e193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1578960281840-cb36759fb109?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1674452631849-0046af680f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
];

const collections = [
  {
    id: 1,
    title: "A연수원 제안 시안",
    desc: "헬스케어 & 교육 특화 UI 시안 모음",
    count: 6,
    views: 342,
    createdAt: "2026-03-10",
    expiry: "2026-04-10",
    active: true,
    link: "labsfolio.kr/share/abc123",
    memo: "A사 IT기획팀 김팀장님께 공유 예정. 헬스케어 중심으로 구성.",
    designs: [0, 1, 2, 3, 4, 5],
  },
  {
    id: 2,
    title: "B교육센터 DX 시안",
    desc: "디지털 전환 관련 인터페이스 시안",
    count: 4,
    views: 198,
    createdAt: "2026-03-05",
    expiry: "2026-03-30",
    active: false,
    link: "labsfolio.kr/share/def456",
    memo: "만료됨 - 재발급 필요",
    designs: [3, 4, 5, 0],
  },
  {
    id: 3,
    title: "C그룹 ERP UI 시안",
    desc: "제조·생산 업종 대시보드 위주",
    count: 5,
    views: 567,
    createdAt: "2026-02-20",
    expiry: "2026-05-20",
    active: true,
    link: "labsfolio.kr/share/ghi789",
    memo: "C그룹 3개 계열사 담당자에게 각각 공유",
    designs: [2, 3, 1, 4, 0],
  },
];

type TabType = "list" | "detail" | "viewer";

export function Curation() {
  const [activeTab, setActiveTab] = useState<TabType>("list");
  const [selectedCollection, setSelectedCollection] = useState(collections[0]);
  const [copied, setCopied] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [collectionTitle, setCollectionTitle] = useState(collections[0].title);
  const [collectionDesc, setCollectionDesc] = useState(collections[0].desc);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { id: "list" as TabType, label: "컬렉션 목록" },
    { id: "detail" as TabType, label: "컬렉션 상세" },
    { id: "viewer" as TabType, label: "공유 뷰어 (공개)" },
  ];

  return (
    <div className="h-[calc(100vh-56px)] flex flex-col">
      {/* Page Header */}
      <div className="border-b border-border px-6 pt-5 pb-0 flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-foreground" style={{ fontSize: "var(--text-h3)", fontWeight: 700 }}>맞춤 레퍼런스 </h2>
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
            컬렉션을 만들고 공유 링크로 클라이언트에게 전달하세요
          </p>
        </div>
        <button
          className="flex items-center gap-1.5 px-4 py-2 bg-primary text-white hover:opacity-90 transition-opacity mb-3"
          style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-label)" }}
        >
          <Plus size={14} /> 컬렉션 만들기
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-border flex px-6">
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

      <div className="flex-1 overflow-y-auto">
        {/* Tab: List */}
        {activeTab === "list" && (
          <div className="p-6 flex flex-col gap-3">
            {collections.map((col) => (
              <div
                key={col.id}
                className="bg-card border border-border p-4 cursor-pointer hover:border-primary/40 transition-all"
                style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--elevation-sm)" }}
                onClick={() => {
                  setSelectedCollection(col);
                  setCollectionTitle(col.title);
                  setCollectionDesc(col.desc);
                  setActiveTab("detail");
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-foreground"
                        style={{ fontSize: "var(--text-label)", fontWeight: 600 }}
                      >
                        {col.title}
                      </span>
                      {col.active ? (
                        <span
                          className="flex items-center gap-1 px-1.5 py-0.5 bg-chart-2/10 text-chart-2"
                          style={{ borderRadius: "4px", fontSize: "10px" }}
                        >
                          <Globe size={9} /> 활성
                        </span>
                      ) : (
                        <span
                          className="flex items-center gap-1 px-1.5 py-0.5 bg-muted text-accent"
                          style={{ borderRadius: "4px", fontSize: "10px" }}
                        >
                          <Lock size={9} /> 만료
                        </span>
                      )}
                    </div>
                    <p className="text-accent mb-2" style={{ fontSize: "var(--text-caption)" }}>
                      {col.desc}
                    </p>
                    <div className="flex items-center gap-3 text-accent" style={{ fontSize: "var(--text-caption)" }}>
                      <span>시안 {col.count}개</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Eye size={11} />{col.views}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Calendar size={11} />{col.expiry} 만료</span>
                    </div>
                  </div>
                  {/* Preview thumbnails */}
                  <div className="flex -space-x-2">
                    {col.designs.slice(0, 3).map((imgIdx, i) => (
                      <div
                        key={i}
                        className="w-9 h-12 overflow-hidden border-2 border-white"
                        style={{ borderRadius: "var(--radius)" }}
                      >
                        <ImageWithFallback
                          src={galleryImgs[imgIdx]}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    {col.count > 3 && (
                      <div
                        className="w-9 h-12 bg-muted border-2 border-white flex items-center justify-center"
                        style={{ borderRadius: "var(--radius)", fontSize: "10px" }}
                      >
                        <span className="text-accent">+{col.count - 3}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Detail */}
        {activeTab === "detail" && (
          <div className="p-6 max-w-3xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <h3
                  className="text-foreground"
                  style={{ fontSize: "var(--text-h4)", fontWeight: 700 }}
                >
                  컬렉션 상세
                </h3>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEditMode(!editMode)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 border border-border transition-colors ${
                    editMode ? "bg-primary text-white border-primary" : "text-accent hover:bg-muted"
                  }`}
                  style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-caption)" }}
                >
                  <Edit3 size={12} /> {editMode ? "저장" : "편집"}
                </button>
                <button
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-border text-destructive hover:bg-destructive/5 transition-colors"
                  style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-caption)" }}
                >
                  <Trash2 size={12} /> 삭제
                </button>
              </div>
            </div>

            {/* Edit fields */}
            <div
              className="bg-card border border-border p-4 mb-4"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <div className="flex flex-col gap-3">
                <div>
                  <label
                    className="text-accent block mb-1"
                    style={{ fontSize: "var(--text-caption)" }}
                  >
                    제목
                  </label>
                  {editMode ? (
                    <input
                      value={collectionTitle}
                      onChange={(e) => setCollectionTitle(e.target.value)}
                      className="w-full px-3 py-2 bg-muted border border-border text-foreground outline-none focus:border-primary transition-colors"
                      style={{ borderRadius: "var(--radius)", fontSize: "var(--text-label)" }}
                    />
                  ) : (
                    <p className="text-foreground" style={{ fontSize: "var(--text-label)", fontWeight: 600 }}>
                      {collectionTitle}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-accent block mb-1" style={{ fontSize: "var(--text-caption)" }}>
                    설명
                  </label>
                  {editMode ? (
                    <textarea
                      value={collectionDesc}
                      onChange={(e) => setCollectionDesc(e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 bg-muted border border-border text-foreground outline-none focus:border-primary transition-colors resize-none"
                      style={{ borderRadius: "var(--radius)", fontSize: "var(--text-label)" }}
                    />
                  ) : (
                    <p className="text-accent" style={{ fontSize: "var(--text-label)" }}>
                      {collectionDesc}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-accent block mb-1" style={{ fontSize: "var(--text-caption)" }}>
                    메모 (내부용)
                  </label>
                  <p className="text-accent" style={{ fontSize: "var(--text-caption)" }}>
                    {selectedCollection.memo}
                  </p>
                </div>
              </div>
            </div>

            {/* Share Link */}
            <div
              className="bg-card border border-border p-4 mb-4"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-foreground"
                  style={{ fontSize: "var(--text-label)", fontWeight: 600 }}
                >
                  공유 링크
                </span>
                <div className="flex items-center gap-2 text-accent" style={{ fontSize: "var(--text-caption)" }}>
                  <Eye size={12} /> 조회 {selectedCollection.views}회
                </div>
              </div>
              <div
                className="flex items-center gap-2 px-3 py-2 bg-muted border border-border mb-3"
                style={{ borderRadius: "var(--radius)" }}
              >
                <Link2 size={13} className="text-accent flex-shrink-0" />
                <span className="flex-1 text-accent truncate" style={{ fontSize: "var(--text-caption)" }}>
                  {selectedCollection.link}
                </span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-primary hover:opacity-80 flex-shrink-0"
                  style={{ fontSize: "var(--text-caption)" }}
                >
                  {copied ? <CheckCheck size={12} /> : <Copy size={12} />}
                  {copied ? "복사됨" : "복사"}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={12} className="text-accent" />
                <span className="text-accent" style={{ fontSize: "var(--text-caption)" }}>
                  만료일: {selectedCollection.expiry}
                </span>
                <span
                  className={`px-1.5 py-0.5 ${selectedCollection.active ? "bg-chart-2/10 text-chart-2" : "bg-muted text-accent"}`}
                  style={{ borderRadius: "4px", fontSize: "10px" }}
                >
                  {selectedCollection.active ? "활성" : "만료"}
                </span>
              </div>
            </div>

            {/* Designs (Draggable) */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-foreground" style={{ fontSize: "var(--text-label)", fontWeight: 600 }}>
                  시안 순서 {editMode && <span className="text-accent font-normal">(드래그로 변경)</span>}
                </span>
                <span className="text-accent" style={{ fontSize: "var(--text-caption)" }}>
                  {selectedCollection.count}개
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {selectedCollection.designs.map((imgIdx, i) => (
                  <div
                    key={i}
                    className={`relative aspect-[3/4] overflow-hidden border border-border bg-muted ${editMode ? "cursor-grab" : ""}`}
                    style={{ borderRadius: "var(--radius-card)" }}
                  >
                    <ImageWithFallback
                      src={galleryImgs[imgIdx]}
                      alt={`시안 ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {editMode && (
                      <div className="absolute top-1.5 left-1.5 p-1 bg-white/80 rounded">
                        <GripVertical size={10} className="text-accent" />
                      </div>
                    )}
                    <div
                      className="absolute bottom-1.5 right-1.5 w-5 h-5 bg-foreground/80 text-white flex items-center justify-center rounded-full"
                      style={{ fontSize: "10px" }}
                    >
                      {i + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab: Public Viewer */}
        {activeTab === "viewer" && (
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-52 flex-shrink-0 border-r border-border flex flex-col overflow-y-auto">
              <div className="p-4 border-b border-border">
                <div
                  className="text-foreground mb-0.5"
                  style={{ fontSize: "var(--text-label)", fontWeight: 600 }}
                >
                  A연수원 제안 시안
                </div>
                <div className="text-accent" style={{ fontSize: "var(--text-caption)" }}>
                  헬스케어 & 교육 특화 UI 시안
                </div>
              </div>
              <div className="flex flex-col gap-0 overflow-y-auto">
                {collections[0].designs.map((imgIdx, i) => (
                  <div
                    key={i}
                    className={`p-2 cursor-pointer hover:bg-muted transition-colors ${i === 0 ? "bg-primary/5 border-l-2 border-primary" : ""}`}
                  >
                    <div
                      className="aspect-[3/4] overflow-hidden bg-muted mb-1.5"
                      style={{ borderRadius: "var(--radius)" }}
                    >
                      <ImageWithFallback
                        src={galleryImgs[imgIdx]}
                        alt={`시안 ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-accent" style={{ fontSize: "10px" }}>
                      시안 {i + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main viewer */}
            <div className="flex-1 flex flex-col">
              {/* Viewer toolbar */}
              <div className="h-10 border-b border-border flex items-center justify-between px-4 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <Globe size={12} className="text-chart-2" />
                  <span className="text-accent" style={{ fontSize: "var(--text-caption)" }}>
                    로그인 없이 열람 가능
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="flex items-center gap-1.5 px-3 py-1 bg-muted border border-border text-accent hover:bg-border transition-colors"
                    style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-caption)" }}
                  >
                    <Download size={11} /> 전체 ZIP
                  </button>
                  <button
                    className="flex items-center gap-1.5 px-3 py-1 bg-primary text-white hover:opacity-90 transition-opacity"
                    style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-caption)" }}
                  >
                    <Share2 size={11} /> 문의하기
                  </button>
                </div>
              </div>
              {/* Viewer content */}
              <div className="flex-1 bg-muted overflow-y-auto flex items-center justify-center p-8">
                <div
                  className="bg-card border border-border overflow-hidden"
                  style={{
                    borderRadius: "var(--radius-card)",
                    boxShadow: "var(--elevation-sm)",
                    maxWidth: "360px",
                    width: "100%",
                  }}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <ImageWithFallback
                      src={galleryImgs[0]}
                      alt="시안 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div
                      className="text-foreground mb-1"
                      style={{ fontSize: "var(--text-label)", fontWeight: 600 }}
                    >
                      스마트 헬스케어 앱
                    </div>
                    <div className="text-accent" style={{ fontSize: "var(--text-caption)" }}>
                      의료·헬스 · 미니멀 스타일 · 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

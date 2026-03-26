import { useState } from "react";
import {
  Search,
  LayoutGrid,
  List,
  SlidersHorizontal,
  ChevronDown,
  Heart,
  Plus,
  Eye,
  X,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const industryFilters = [
  "전체", "제조·생산", "금융·보험", "의료·헬스", "IT·테크", "유통·물류", "교육·연수", "공공·정부",
];
const styleFilters = ["전체", "미니멀", "다크", "컬러풀", "플랫", "그라데이션"];
const colorFilters = [
  { name: "블루", color: "#0066FF" },
  { name: "그린", color: "#00BF40" },
  { name: "오렌지", color: "#FF9200" },
  { name: "퍼플", color: "#6541F2" },
  { name: "레드", color: "#FA2E43" },
  { name: "다크", color: "#171719" },
];

const mockDesigns = [
  {
    id: 1,
    title: "스마트 헬스케어 앱",
    industry: "의료·헬스",
    style: "미니멀",
    year: 2024,
    views: 1240,
    likes: 87,
    color: "#00BF40",
    img: "https://images.unsplash.com/photo-1767903622388-4949aad2bd93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    tags: ["헬스", "트래킹", "대시보드"],
  },
  {
    id: 2,
    title: "커머스 쇼핑 앱",
    industry: "유통·물류",
    style: "컬러풀",
    year: 2024,
    views: 980,
    likes: 64,
    color: "#FF9200",
    img: "https://images.unsplash.com/photo-1586763749650-70d7996310d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    tags: ["쇼핑", "커머스", "카드형"],
  },
  {
    id: 3,
    title: "금융 대시보드",
    industry: "금융·보험",
    style: "다크",
    year: 2023,
    views: 2100,
    likes: 156,
    color: "#6541F2",
    img: "https://images.unsplash.com/photo-1757301714935-c8127a21abc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    tags: ["금융", "다크", "차트"],
  },
  {
    id: 4,
    title: "엔터프라이즈 ERP",
    industry: "IT·테크",
    style: "플랫",
    year: 2024,
    views: 1560,
    likes: 112,
    color: "#0066FF",
    img: "https://images.unsplash.com/photo-1657727534685-36b09f84e193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    tags: ["ERP", "대시보드", "비즈니스"],
  },
  {
    id: 5,
    title: "식품 배달 앱",
    industry: "유통·물류",
    style: "컬러풀",
    year: 2023,
    views: 890,
    likes: 73,
    color: "#FA2E43",
    img: "https://images.unsplash.com/photo-1578960281840-cb36759fb109?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    tags: ["배달", "푸드", "지도"],
  },
  {
    id: 6,
    title: "AI 학습 플랫폼",
    industry: "교육·연수",
    style: "미니멀",
    year: 2024,
    views: 1870,
    likes: 143,
    color: "#0066FF",
    img: "https://images.unsplash.com/photo-1674452631849-0046af680f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    tags: ["교육", "AI", "학습"],
  },
  {
    id: 7,
    title: "제조 현장 관리",
    industry: "제조·생산",
    style: "다크",
    year: 2023,
    views: 654,
    likes: 45,
    color: "#171719",
    img: "https://images.unsplash.com/photo-1657727534685-36b09f84e193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    tags: ["스마트팩토리", "MES", "모니터링"],
  },
  {
    id: 8,
    title: "공공 민원 서비스",
    industry: "공공·정부",
    style: "플랫",
    year: 2024,
    views: 740,
    likes: 52,
    color: "#00BF40",
    img: "https://images.unsplash.com/photo-1586763749650-70d7996310d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    tags: ["공공", "민원", "접근성"],
  },
  {
    id: 9,
    title: "물류 트래킹 앱",
    industry: "유통·물류",
    style: "미니멀",
    year: 2023,
    views: 1120,
    likes: 88,
    color: "#FF9200",
    img: "https://images.unsplash.com/photo-1767903622388-4949aad2bd93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    tags: ["물류", "배송", "지도"],
  },
];

export function Gallery() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedIndustry, setSelectedIndustry] = useState("전체");
  const [selectedStyle, setSelectedStyle] = useState("전체");
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("최신순");
  const [showFilterPanel, setShowFilterPanel] = useState(true);
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null);
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const filtered = mockDesigns.filter((d) => {
    if (selectedIndustry !== "전체" && d.industry !== selectedIndustry) return false;
    if (selectedStyle !== "전체" && d.style !== selectedStyle) return false;
    if (searchQuery && !d.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "최신순") return b.year - a.year;
    if (sortBy === "인기순") return b.likes - a.likes;
    return 0;
  });

  const toggleLike = (id: number) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const selectedDesignData = mockDesigns.find((d) => d.id === selectedDesign);

  return (
    <div className="flex h-[calc(100vh-56px)]">
      {/* Filter Sidebar */}
      {showFilterPanel && (
        <aside
          className="w-56 flex-shrink-0 border-r border-border bg-background overflow-y-auto p-4 flex flex-col gap-6"
        >
          <div>
            <div
              className="text-foreground mb-3"
              style={{ fontSize: "var(--text-label)", fontWeight: 600 }}
            >
              업종
            </div>
            <div className="flex flex-col gap-1">
              {industryFilters.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`text-left px-2 py-1.5 transition-colors ${
                    selectedIndustry === ind
                      ? "bg-primary/10 text-primary"
                      : "text-accent hover:bg-muted"
                  }`}
                  style={{ borderRadius: "var(--radius)", fontSize: "var(--text-caption)" }}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div
              className="text-foreground mb-3"
              style={{ fontSize: "var(--text-label)", fontWeight: 600 }}
            >
              스타일
            </div>
            <div className="flex flex-col gap-1">
              {styleFilters.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedStyle(s)}
                  className={`text-left px-2 py-1.5 transition-colors ${
                    selectedStyle === s
                      ? "bg-primary/10 text-primary"
                      : "text-accent hover:bg-muted"
                  }`}
                  style={{ borderRadius: "var(--radius)", fontSize: "var(--text-caption)" }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div
              className="text-foreground mb-3"
              style={{ fontSize: "var(--text-label)", fontWeight: 600 }}
            >
              컬러
            </div>
            <div className="flex flex-wrap gap-2">
              {colorFilters.map((c) => (
                <button
                  key={c.name}
                  onClick={() =>
                    setSelectedColor(selectedColor === c.name ? null : c.name)
                  }
                  className={`w-7 h-7 rounded-full border-2 transition-all ${
                    selectedColor === c.name ? "border-foreground scale-110" : "border-transparent"
                  }`}
                  style={{ backgroundColor: c.color }}
                  title={c.name}
                />
              ))}
            </div>
          </div>
        </aside>
      )}

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Toolbar */}
        <div className="h-12 border-b border-border flex items-center px-4 gap-3 flex-shrink-0">
          <button
            onClick={() => setShowFilterPanel(!showFilterPanel)}
            className={`p-1.5 rounded transition-colors ${showFilterPanel ? "bg-primary/10 text-primary" : "text-accent hover:bg-muted"}`}
          >
            <SlidersHorizontal size={15} />
          </button>
          <div
            className="flex items-center gap-2 flex-1 max-w-xs px-3 py-1.5 bg-muted border border-border"
            style={{ borderRadius: "var(--radius)" }}
          >
            <Search size={13} className="text-muted-foreground flex-shrink-0" />
            <input
              type="text"
              placeholder="시안 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none min-w-0"
              style={{ fontSize: "var(--text-caption)" }}
            />
          </div>
          <div className="flex items-center gap-1 ml-auto">
            <span className="text-accent mr-2" style={{ fontSize: "var(--text-caption)" }}>
              {sorted.length}개
            </span>
            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none px-3 py-1.5 pr-7 bg-muted border border-border text-accent outline-none cursor-pointer"
                style={{ borderRadius: "var(--radius)", fontSize: "var(--text-caption)" }}
              >
                <option>최신순</option>
                <option>인기순</option>
              </select>
              <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-accent pointer-events-none" />
            </div>
            {/* View toggle */}
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded transition-colors ${viewMode === "grid" ? "bg-primary/10 text-primary" : "text-accent hover:bg-muted"}`}
            >
              <LayoutGrid size={15} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded transition-colors ${viewMode === "list" ? "bg-primary/10 text-primary" : "text-accent hover:bg-muted"}`}
            >
              <List size={15} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {sorted.map((d) => (
                <div
                  key={d.id}
                  className="group bg-card border border-border overflow-hidden cursor-pointer hover:border-primary/40 transition-all"
                  style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--elevation-sm)" }}
                  onClick={() => setSelectedDesign(d.id)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <ImageWithFallback
                      src={d.img}
                      alt={d.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    {/* Actions */}
                    <div className="absolute top-2 right-2 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleLike(d.id); }}
                        className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow"
                      >
                        <Heart
                          size={13}
                          className={likedItems.includes(d.id) ? "text-destructive fill-destructive" : "text-accent"}
                        />
                      </button>
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow"
                      >
                        <Plus size={13} className="text-accent" />
                      </button>
                    </div>
                    {/* Color tag */}
                    <div
                      className="absolute bottom-2 left-2 w-4 h-4 rounded-full border-2 border-white"
                      style={{ backgroundColor: d.color }}
                    />
                  </div>
                  <div className="p-3">
                    <div
                      className="text-foreground mb-1 truncate"
                      style={{ fontSize: "var(--text-label)", fontWeight: 600 }}
                    >
                      {d.title}
                    </div>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-accent"
                        style={{ fontSize: "var(--text-caption)" }}
                      >
                        {d.industry} · {d.style}
                      </span>
                      <div className="flex items-center gap-2 text-accent" style={{ fontSize: "var(--text-caption)" }}>
                        <span className="flex items-center gap-0.5">
                          <Eye size={10} /> {d.views}
                        </span>
                        <span className="flex items-center gap-0.5">
                          <Heart size={10} /> {d.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {sorted.map((d) => (
                <div
                  key={d.id}
                  className="flex items-center gap-4 bg-card border border-border p-3 cursor-pointer hover:border-primary/40 transition-all"
                  style={{ borderRadius: "var(--radius-card)" }}
                  onClick={() => setSelectedDesign(d.id)}
                >
                  <div
                    className="w-16 h-20 overflow-hidden bg-muted flex-shrink-0"
                    style={{ borderRadius: "var(--radius)" }}
                  >
                    <ImageWithFallback src={d.img} alt={d.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-foreground mb-1" style={{ fontSize: "var(--text-label)", fontWeight: 600 }}>
                      {d.title}
                    </div>
                    <div className="flex gap-2 flex-wrap mb-2">
                      {d.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 bg-muted text-accent"
                          style={{ borderRadius: "4px", fontSize: "10px" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-accent" style={{ fontSize: "var(--text-caption)" }}>
                      {d.industry} · {d.style} · {d.year}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-accent" style={{ fontSize: "var(--text-caption)" }}>
                    <span className="flex items-center gap-1"><Eye size={12} />{d.views}</span>
                    <span className="flex items-center gap-1"><Heart size={12} />{d.likes}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Detail Panel */}
      {selectedDesign && selectedDesignData && (
        <div className="w-72 flex-shrink-0 border-l border-border bg-background overflow-y-auto flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <span className="text-foreground" style={{ fontSize: "var(--text-label)", fontWeight: 600 }}>
              시안 상세
            </span>
            <button
              onClick={() => setSelectedDesign(null)}
              className="p-1 hover:bg-muted rounded transition-colors"
            >
              <X size={14} className="text-accent" />
            </button>
          </div>
          <div className="aspect-[3/4] overflow-hidden bg-muted">
            <ImageWithFallback
              src={selectedDesignData.img}
              alt={selectedDesignData.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex flex-col gap-4">
            <h3
              className="text-foreground"
              style={{ fontSize: "var(--text-h4)", fontWeight: 700 }}
            >
              {selectedDesignData.title}
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { label: "업종", value: selectedDesignData.industry },
                { label: "스타일", value: selectedDesignData.style },
                { label: "연도", value: `${selectedDesignData.year}` },
                { label: "조회수", value: `${selectedDesignData.views}` },
              ].map((meta) => (
                <div key={meta.label} className="flex items-center justify-between">
                  <span className="text-accent" style={{ fontSize: "var(--text-caption)" }}>
                    {meta.label}
                  </span>
                  <span className="text-foreground" style={{ fontSize: "var(--text-caption)", fontWeight: 600 }}>
                    {meta.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1">
              {selectedDesignData.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-muted text-accent"
                  style={{ borderRadius: "4px", fontSize: "var(--text-caption)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <button
                className="w-full py-2 bg-primary text-white hover:opacity-90 transition-opacity"
                style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-label)" }}
              >
                컬렉션에 추가
              </button>
              <button
                className="w-full py-2 bg-muted text-foreground hover:bg-border transition-colors"
                style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-label)" }}
              >
                유사 시안 보기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

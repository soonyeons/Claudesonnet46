import { useState } from "react";
import {
  Upload,
  Edit3,
  Trash2,
  Tag,
  ArrowUpDown,
  Users,
  UserPlus,
  Shield,
  UserX,
  Link2,
  Eye,
  XCircle,
  BarChart2,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Search,
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

const designs = [
  { id: 1, title: "스마트 헬스케어 앱", industry: "의료·헬스", style: "미니멀", year: 2024, order: 1, imgIdx: 0 },
  { id: 2, title: "커머스 쇼핑 앱", industry: "유통·물류", style: "컬러풀", year: 2024, order: 2, imgIdx: 1 },
  { id: 3, title: "금융 대시보드", industry: "금융·보험", style: "다크", year: 2023, order: 3, imgIdx: 2 },
  { id: 4, title: "엔터프라이즈 ERP", industry: "IT·테크", style: "플랫", year: 2024, order: 4, imgIdx: 3 },
  { id: 5, title: "식품 배달 앱", industry: "유통·물류", style: "컬러풀", year: 2023, order: 5, imgIdx: 4 },
  { id: 6, title: "AI 학습 플랫폼", industry: "교육·연수", style: "미니멀", year: 2024, order: 6, imgIdx: 5 },
];

const users = [
  { id: 1, name: "김민준", email: "minjun.kim@corp.com", role: "Sales", active: true, lastLogin: "2026-03-17", collections: 3 },
  { id: 2, name: "이수정", email: "sujung.lee@corp.com", role: "Admin", active: true, lastLogin: "2026-03-16", collections: 7 },
  { id: 3, name: "박지훈", email: "jihoon.park@corp.com", role: "Sales", active: true, lastLogin: "2026-03-15", collections: 2 },
  { id: 4, name: "최영서", email: "youngseo.choi@corp.com", role: "Sales", active: false, lastLogin: "2026-02-20", collections: 1 },
  { id: 5, name: "정다은", email: "daeun.jung@corp.com", role: "Admin", active: true, lastLogin: "2026-03-17", collections: 5 },
];

const links = [
  { id: 1, title: "A연수원 제안 시안", user: "김민준", created: "2026-03-10", expiry: "2026-04-10", views: 342, active: true, type: "컬렉션" },
  { id: 2, title: "B교육센터 DX 시안", user: "박지훈", created: "2026-03-05", expiry: "2026-03-30", views: 198, active: false, type: "컬렉션" },
  { id: 3, title: "A연수원 헬스케어 데모", user: "김민준", created: "2026-03-10", expiry: "2026-04-10", views: 89, active: true, type: "데모" },
  { id: 4, title: "C그룹 ERP UI 시안", user: "이수정", created: "2026-02-20", expiry: "2026-05-20", views: 567, active: true, type: "컬렉션" },
  { id: 5, title: "C그룹 금융 데모", user: "이수정", created: "2026-02-20", expiry: "2026-03-20", views: 127, active: false, type: "데모" },
];

type TabType = "designs" | "users" | "links";

export function Admin() {
  const [activeTab, setActiveTab] = useState<TabType>("designs");
  const [searchUser, setSearchUser] = useState("");

  const tabs = [
    { id: "designs" as TabType, label: "시안 관리", icon: Tag },
    { id: "users" as TabType, label: "사용자 관리", icon: Users },
    { id: "links" as TabType, label: "공유 링크 현황", icon: Link2 },
  ];

  const filteredUsers = users.filter(
    (u) =>
      u.name.includes(searchUser) || u.email.includes(searchUser)
  );

  return (
    <div className="h-[calc(100vh-56px)] flex flex-col">
      {/* Page Header */}
      <div className="border-b border-border px-6 pt-5 pb-0">
        <div className="flex items-center gap-2 mb-1">
          <h2 className="text-foreground" style={{ fontSize: "var(--text-h3)", fontWeight: 700 }}>
            관리자
          </h2>
          <span
            className="px-2 py-0.5 bg-chart-5/10 text-chart-5"
            style={{ borderRadius: "4px", fontSize: "var(--text-caption)", fontWeight: 600 }}
          >
            Admin only
          </span>
        </div>
        <p className="text-accent mb-3" style={{ fontSize: "var(--text-caption)" }}>
          시안 업로드, 사용자 관리, 링크 모니터링을 한 곳에서 관리합니다
        </p>

        {/* Tabs */}
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2.5 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-accent hover:text-foreground"
              }`}
              style={{ fontSize: "var(--text-label)" }}
            >
              <tab.icon size={14} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Tab: Design Management */}
        {activeTab === "designs" && (
          <div className="p-6">
            {/* Action bar */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-foreground" style={{ fontSize: "var(--text-h4)", fontWeight: 700 }}>
                시안 관리
              </h3>
              <div className="flex gap-2">
                <button
                  className="flex items-center gap-1.5 px-4 py-2 bg-muted border border-border text-accent hover:bg-border transition-colors"
                  style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-caption)" }}
                >
                  <Upload size={13} /> 일괄 업로드
                </button>
                <button
                  className="flex items-center gap-1.5 px-4 py-2 bg-primary text-white hover:opacity-90 transition-opacity"
                  style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-caption)" }}
                >
                  <Upload size={13} /> 시안 업로드
                </button>
              </div>
            </div>

            {/* Design table */}
            <div
              className="bg-card border border-border overflow-hidden"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <div className="grid grid-cols-[40px_60px_1fr_120px_120px_80px_100px] border-b border-border">
                {["순서", "미리보기", "제목", "업종", "스타일", "연도", "액션"].map((h) => (
                  <div
                    key={h}
                    className="px-3 py-2.5 text-accent"
                    style={{ fontSize: "var(--text-caption)", fontWeight: 600 }}
                  >
                    {h}
                  </div>
                ))}
              </div>
              {designs.map((d, idx) => (
                <div
                  key={d.id}
                  className={`grid grid-cols-[40px_60px_1fr_120px_120px_80px_100px] items-center border-b border-border last:border-0 hover:bg-muted/50 transition-colors`}
                >
                  <div
                    className="px-3 py-2.5 flex items-center gap-1 cursor-grab text-accent"
                    style={{ fontSize: "var(--text-caption)" }}
                  >
                    <ArrowUpDown size={11} />
                    {d.order}
                  </div>
                  <div className="px-3 py-2">
                    <div
                      className="w-8 h-10 overflow-hidden"
                      style={{ borderRadius: "var(--radius)" }}
                    >
                      <ImageWithFallback
                        src={galleryImgs[d.imgIdx]}
                        alt={d.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="px-3 py-2">
                    <span className="text-foreground" style={{ fontSize: "var(--text-caption)", fontWeight: 600 }}>
                      {d.title}
                    </span>
                  </div>
                  <div className="px-3 py-2">
                    <span
                      className="px-2 py-0.5 bg-muted text-accent"
                      style={{ borderRadius: "4px", fontSize: "10px" }}
                    >
                      {d.industry}
                    </span>
                  </div>
                  <div className="px-3 py-2">
                    <span className="text-accent" style={{ fontSize: "var(--text-caption)" }}>
                      {d.style}
                    </span>
                  </div>
                  <div className="px-3 py-2">
                    <span className="text-accent" style={{ fontSize: "var(--text-caption)" }}>
                      {d.year}
                    </span>
                  </div>
                  <div className="px-3 py-2 flex items-center gap-1.5">
                    <button className="p-1 hover:bg-muted rounded transition-colors" title="메타 태그 편집">
                      <Tag size={13} className="text-accent" />
                    </button>
                    <button className="p-1 hover:bg-muted rounded transition-colors" title="편집">
                      <Edit3 size={13} className="text-accent" />
                    </button>
                    <button className="p-1 hover:bg-destructive/10 rounded transition-colors" title="삭제">
                      <Trash2 size={13} className="text-destructive" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: User Management */}
        {activeTab === "users" && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-foreground" style={{ fontSize: "var(--text-h4)", fontWeight: 700 }}>
                사용자 관리
              </h3>
              <button
                className="flex items-center gap-1.5 px-4 py-2 bg-primary text-white hover:opacity-90 transition-opacity"
                style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-caption)" }}
              >
                <UserPlus size={13} /> 초대 링크 발송
              </button>
            </div>

            {/* Search */}
            <div
              className="flex items-center gap-2 px-3 py-2 bg-muted border border-border mb-4 max-w-xs"
              style={{ borderRadius: "var(--radius)" }}
            >
              <Search size={13} className="text-accent" />
              <input
                type="text"
                placeholder="이름 또는 이메일 검색"
                value={searchUser}
                onChange={(e) => setSearchUser(e.target.value)}
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
                style={{ fontSize: "var(--text-caption)" }}
              />
            </div>

            {/* Summary stats */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: "전체 사용자", value: users.length, color: "var(--primary)" },
                { label: "활성 계정", value: users.filter((u) => u.active).length, color: "var(--chart-2)" },
                { label: "비활성 계정", value: users.filter((u) => !u.active).length, color: "var(--accent)" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-card border border-border p-3 text-center"
                  style={{ borderRadius: "var(--radius-card)" }}
                >
                  <div className="text-foreground" style={{ fontSize: "var(--text-h3)", fontWeight: 700, color: s.color }}>
                    {s.value}
                  </div>
                  <div className="text-accent" style={{ fontSize: "var(--text-caption)" }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* User table */}
            <div
              className="bg-card border border-border overflow-hidden"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <div className="grid grid-cols-[1fr_1fr_100px_120px_100px_120px] border-b border-border">
                {["이름", "이메일", "역할", "마지막 로그인", "컬렉션", "액션"].map((h) => (
                  <div
                    key={h}
                    className="px-3 py-2.5 text-accent"
                    style={{ fontSize: "var(--text-caption)", fontWeight: 600 }}
                  >
                    {h}
                  </div>
                ))}
              </div>
              {filteredUsers.map((u) => (
                <div
                  key={u.id}
                  className="grid grid-cols-[1fr_1fr_100px_120px_100px_120px] items-center border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                >
                  <div className="px-3 py-3 flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-white ${u.active ? "bg-primary" : "bg-accent"}`}
                      style={{ fontSize: "var(--text-caption)", fontWeight: 700 }}
                    >
                      {u.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-foreground" style={{ fontSize: "var(--text-caption)", fontWeight: 600 }}>
                        {u.name}
                      </div>
                      {!u.active && (
                        <div className="text-accent" style={{ fontSize: "10px" }}>비활성</div>
                      )}
                    </div>
                  </div>
                  <div className="px-3 py-3 text-accent truncate" style={{ fontSize: "var(--text-caption)" }}>
                    {u.email}
                  </div>
                  <div className="px-3 py-3">
                    <div className="relative">
                      <select
                        defaultValue={u.role}
                        className={`appearance-none px-2 py-0.5 pr-5 text-white border-0 outline-none cursor-pointer ${
                          u.role === "Admin" ? "bg-chart-5" : "bg-primary"
                        }`}
                        style={{ borderRadius: "4px", fontSize: "10px" }}
                      >
                        <option value="Sales">Sales</option>
                        <option value="Admin">Admin</option>
                      </select>
                      <ChevronDown size={9} className="absolute right-1 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
                    </div>
                  </div>
                  <div className="px-3 py-3 text-accent" style={{ fontSize: "var(--text-caption)" }}>
                    {u.lastLogin}
                  </div>
                  <div className="px-3 py-3 text-accent" style={{ fontSize: "var(--text-caption)" }}>
                    {u.collections}개
                  </div>
                  <div className="px-3 py-3 flex items-center gap-1">
                    <button
                      className="p-1 hover:bg-muted rounded transition-colors"
                      title="역할 변경"
                    >
                      <Shield size={13} className="text-accent" />
                    </button>
                    <button
                      className="p-1 hover:bg-destructive/10 rounded transition-colors"
                      title="계정 비활성화"
                    >
                      <UserX size={13} className="text-destructive" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Links */}
        {activeTab === "links" && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-foreground" style={{ fontSize: "var(--text-h4)", fontWeight: 700 }}>
                공유 링크 현황
              </h3>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-4 gap-3 mb-5">
              {[
                { label: "전체 링크", value: links.length, color: "var(--primary)", icon: Link2 },
                { label: "활성 링크", value: links.filter((l) => l.active).length, color: "var(--chart-2)", icon: CheckCircle2 },
                { label: "만료 링크", value: links.filter((l) => !l.active).length, color: "var(--accent)", icon: AlertCircle },
                { label: "총 조회수", value: links.reduce((a, l) => a + l.views, 0), color: "var(--chart-3)", icon: BarChart2 },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-card border border-border p-3 flex items-center gap-3"
                  style={{ borderRadius: "var(--radius-card)" }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${s.color}18` }}
                  >
                    <s.icon size={15} style={{ color: s.color }} />
                  </div>
                  <div>
                    <div className="text-foreground" style={{ fontSize: "var(--text-h4)", fontWeight: 700 }}>
                      {s.value}
                    </div>
                    <div className="text-accent" style={{ fontSize: "var(--text-caption)" }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Links table */}
            <div
              className="bg-card border border-border overflow-hidden"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <div className="grid grid-cols-[1fr_80px_100px_100px_80px_80px_80px] border-b border-border">
                {["링크명", "유형", "생성자", "만료일", "조회수", "상태", "액션"].map((h) => (
                  <div
                    key={h}
                    className="px-3 py-2.5 text-accent"
                    style={{ fontSize: "var(--text-caption)", fontWeight: 600 }}
                  >
                    {h}
                  </div>
                ))}
              </div>
              {links.map((link) => (
                <div
                  key={link.id}
                  className="grid grid-cols-[1fr_80px_100px_100px_80px_80px_80px] items-center border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                >
                  <div className="px-3 py-3">
                    <div className="text-foreground" style={{ fontSize: "var(--text-caption)", fontWeight: 600 }}>
                      {link.title}
                    </div>
                    <div className="text-accent" style={{ fontSize: "10px" }}>
                      생성: {link.created}
                    </div>
                  </div>
                  <div className="px-3 py-3">
                    <span
                      className={`px-1.5 py-0.5 ${link.type === "컬렉션" ? "bg-primary/10 text-primary" : "bg-chart-5/10 text-chart-5"}`}
                      style={{ borderRadius: "4px", fontSize: "10px" }}
                    >
                      {link.type}
                    </span>
                  </div>
                  <div className="px-3 py-3 text-accent" style={{ fontSize: "var(--text-caption)" }}>
                    {link.user}
                  </div>
                  <div className="px-3 py-3 text-accent" style={{ fontSize: "var(--text-caption)" }}>
                    {link.expiry}
                  </div>
                  <div className="px-3 py-3">
                    <span className="flex items-center gap-1 text-accent" style={{ fontSize: "var(--text-caption)" }}>
                      <Eye size={10} />{link.views}
                    </span>
                  </div>
                  <div className="px-3 py-3">
                    {link.active ? (
                      <span
                        className="px-1.5 py-0.5 bg-chart-2/10 text-chart-2"
                        style={{ borderRadius: "4px", fontSize: "10px" }}
                      >
                        활성
                      </span>
                    ) : (
                      <span
                        className="px-1.5 py-0.5 bg-muted text-accent"
                        style={{ borderRadius: "4px", fontSize: "10px" }}
                      >
                        만료
                      </span>
                    )}
                  </div>
                  <div className="px-3 py-3 flex items-center gap-1">
                    <button
                      className="p-1 hover:bg-muted rounded transition-colors"
                      title="조회 통계"
                    >
                      <BarChart2 size={13} className="text-accent" />
                    </button>
                    {link.active && (
                      <button
                        className="p-1 hover:bg-destructive/10 rounded transition-colors"
                        title="강제 만료"
                      >
                        <XCircle size={13} className="text-destructive" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

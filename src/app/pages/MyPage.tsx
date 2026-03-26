import { useState } from "react";
import {
  Layers,
  Smartphone,
  Settings,
  Link2,
  Eye,
  Calendar,
  Globe,
  Lock,
  RefreshCw,
  Trash2,
  Bell,
  User,
  KeyRound,
  Mail,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const phoneImgs = [
  "https://images.unsplash.com/photo-1767903622388-4949aad2bd93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1586763749650-70d7996310d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  "https://images.unsplash.com/photo-1674452631849-0046af680f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
];

const myCollections = [
  {
    id: 1,
    title: "A연수원 제안 시안",
    count: 6,
    views: 342,
    link: "labsfolio.kr/share/abc123",
    active: true,
    expiry: "2026-04-10",
    history: [120, 80, 45, 97],
  },
  {
    id: 2,
    title: "B교육센터 DX 시안",
    count: 4,
    views: 198,
    link: "labsfolio.kr/share/def456",
    active: false,
    expiry: "2026-03-30",
    history: [45, 90, 63],
  },
  {
    id: 3,
    title: "C그룹 ERP UI 시안",
    count: 5,
    views: 567,
    link: "labsfolio.kr/share/ghi789",
    active: true,
    expiry: "2026-05-20",
    history: [200, 167, 200],
  },
];

const myDemos = [
  {
    id: 1,
    name: "A연수원 헬스케어 데모",
    color: "#00BF40",
    created: "2026-03-10",
    views: 89,
    imgIdx: 0,
  },
  {
    id: 2,
    name: "B교육센터 커머스 데모",
    color: "#FF9200",
    created: "2026-03-05",
    views: 54,
    imgIdx: 1,
  },
  {
    id: 3,
    name: "C그룹 AI 데모",
    color: "#6541F2",
    created: "2026-02-20",
    views: 127,
    imgIdx: 2,
  },
];

type TabType = "collections" | "demos" | "settings";

export function MyPage() {
  const [activeTab, setActiveTab] = useState<TabType>("collections");
  const [name, setName] = useState("김민준");
  const [email, setEmail] = useState("minjun.kim@labsfolio.kr");
  const [editingProfile, setEditingProfile] = useState(false);
  const [notifications, setNotifications] = useState({
    linkView: true,
    newDesign: false,
    expiry: true,
  });

  const tabs = [
    { id: "collections" as TabType, label: "내 컬렉션", icon: Layers },
    { id: "demos" as TabType, label: "내 데모", icon: Smartphone },
    { id: "settings" as TabType, label: "계정 설정", icon: Settings },
  ];

  return (
    <div className="h-[calc(100vh-56px)] flex flex-col">
      {/* Page Header */}
      <div className="border-b border-border px-6 pt-5 pb-0">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white"
            style={{ fontSize: "var(--text-base)", fontWeight: 700 }}
          >
            김
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-foreground" style={{ fontSize: "var(--text-h4)", fontWeight: 700 }}>
                김민준
              </span>
              <span
                className="px-2 py-0.5 bg-primary/10 text-primary"
                style={{ borderRadius: "4px", fontSize: "var(--text-caption)", fontWeight: 600 }}
              >
                Sales
              </span>
            </div>
            <div className="text-accent" style={{ fontSize: "var(--text-caption)" }}>
              minjun.kim@labsfolio.kr
            </div>
          </div>
        </div>

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
        {/* Tab: My Collections */}
        {activeTab === "collections" && (
          <div className="p-6 max-w-3xl flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-foreground" style={{ fontSize: "var(--text-h4)", fontWeight: 700 }}>
                내 컬렉션 · 생성 이력 & 링크 현황
              </h3>
              <span className="text-accent" style={{ fontSize: "var(--text-caption)" }}>
                총 {myCollections.length}개
              </span>
            </div>

            {myCollections.map((col) => (
              <div
                key={col.id}
                className="bg-card border border-border p-5"
                style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--elevation-sm)" }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-foreground"
                        style={{ fontSize: "var(--text-label)", fontWeight: 600 }}
                      >
                        {col.title}
                      </span>
                      {col.active ? (
                        <span
                          className="flex items-center gap-0.5 px-1.5 py-0.5 bg-chart-2/10 text-chart-2"
                          style={{ borderRadius: "4px", fontSize: "10px" }}
                        >
                          <Globe size={9} /> 활성
                        </span>
                      ) : (
                        <span
                          className="flex items-center gap-0.5 px-1.5 py-0.5 bg-muted text-accent"
                          style={{ borderRadius: "4px", fontSize: "10px" }}
                        >
                          <Lock size={9} /> 만료
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-accent" style={{ fontSize: "var(--text-caption)" }}>
                      <span>시안 {col.count}개</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Eye size={10} />{col.views}회</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Calendar size={10} />{col.expiry}</span>
                    </div>
                  </div>
                  <button className="text-primary hover:opacity-80" style={{ fontSize: "var(--text-caption)" }}>
                    상세 보기 <ChevronRight size={12} className="inline" />
                  </button>
                </div>

                {/* Link */}
                <div
                  className="flex items-center gap-2 px-3 py-2 bg-muted border border-border mb-3"
                  style={{ borderRadius: "var(--radius)" }}
                >
                  <Link2 size={12} className="text-accent flex-shrink-0" />
                  <span className="flex-1 text-accent truncate" style={{ fontSize: "var(--text-caption)" }}>
                    {col.link}
                  </span>
                </div>

                {/* View history sparkline */}
                <div>
                  <div className="text-accent mb-2" style={{ fontSize: "var(--text-caption)" }}>
                    링크 조회수 이력
                  </div>
                  <div className="flex items-end gap-1 h-8">
                    {col.history.map((v, i) => {
                      const max = Math.max(...col.history);
                      const pct = (v / max) * 100;
                      return (
                        <div
                          key={i}
                          className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors cursor-pointer relative group"
                          style={{ height: `${pct}%`, minHeight: "4px", borderRadius: "2px 2px 0 0" }}
                          title={`${v}회`}
                        >
                          <div
                            className="absolute -top-5 left-1/2 -translate-x-1/2 bg-foreground text-white px-1 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                            style={{ borderRadius: "4px", fontSize: "9px" }}
                          >
                            {v}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: My Demos */}
        {activeTab === "demos" && (
          <div className="p-6 max-w-3xl flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-foreground" style={{ fontSize: "var(--text-h4)", fontWeight: 700 }}>
                내 데모 · 제작 이력
              </h3>
              <span className="text-accent" style={{ fontSize: "var(--text-caption)" }}>
                총 {myDemos.length}개
              </span>
            </div>

            {myDemos.map((demo) => (
              <div
                key={demo.id}
                className="bg-card border border-border p-4 flex items-center gap-4"
                style={{ borderRadius: "var(--radius-card)", boxShadow: "var(--elevation-sm)" }}
              >
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
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: demo.color }} />
                    <span className="text-foreground" style={{ fontSize: "var(--text-label)", fontWeight: 600 }}>
                      {demo.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-accent mb-3" style={{ fontSize: "var(--text-caption)" }}>
                    <span className="flex items-center gap-1"><Calendar size={10} />{demo.created}</span>
                    <span className="flex items-center gap-1"><Eye size={10} />{demo.views}회</span>
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
            ))}
          </div>
        )}

        {/* Tab: Settings */}
        {activeTab === "settings" && (
          <div className="p-6 max-w-xl flex flex-col gap-5">
            {/* Profile */}
            <div
              className="bg-card border border-border p-5"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <User size={15} className="text-accent" />
                  <span className="text-foreground" style={{ fontSize: "var(--text-label)", fontWeight: 600 }}>
                    프로필
                  </span>
                </div>
                <button
                  onClick={() => setEditingProfile(!editingProfile)}
                  className="text-primary hover:opacity-80"
                  style={{ fontSize: "var(--text-caption)" }}
                >
                  {editingProfile ? "저장" : "편집"}
                </button>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <label className="text-accent block mb-1" style={{ fontSize: "var(--text-caption)" }}>이름</label>
                  {editingProfile ? (
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 bg-muted border border-border text-foreground outline-none focus:border-primary"
                      style={{ borderRadius: "var(--radius)", fontSize: "var(--text-label)" }}
                    />
                  ) : (
                    <div className="text-foreground" style={{ fontSize: "var(--text-label)" }}>{name}</div>
                  )}
                </div>
                <div>
                  <label className="text-accent block mb-1" style={{ fontSize: "var(--text-caption)" }}>
                    <Mail size={11} className="inline mr-1" />이메일
                  </label>
                  {editingProfile ? (
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-muted border border-border text-foreground outline-none focus:border-primary"
                      style={{ borderRadius: "var(--radius)", fontSize: "var(--text-label)" }}
                    />
                  ) : (
                    <div className="text-foreground" style={{ fontSize: "var(--text-label)" }}>{email}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Password */}
            <div
              className="bg-card border border-border p-5"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <KeyRound size={15} className="text-accent" />
                <span className="text-foreground" style={{ fontSize: "var(--text-label)", fontWeight: 600 }}>
                  비밀번호
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {["현재 비밀번호", "새 비밀번호", "새 비밀번호 확인"].map((label) => (
                  <div key={label}>
                    <label className="text-accent block mb-1" style={{ fontSize: "var(--text-caption)" }}>{label}</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-3 py-2 bg-muted border border-border text-foreground outline-none focus:border-primary"
                      style={{ borderRadius: "var(--radius)", fontSize: "var(--text-label)" }}
                    />
                  </div>
                ))}
                <button
                  className="w-full py-2 bg-primary text-white hover:opacity-90 transition-opacity mt-1"
                  style={{ borderRadius: "var(--radius-button)", fontSize: "var(--text-label)" }}
                >
                  비밀번호 변경
                </button>
              </div>
            </div>

            {/* Notifications */}
            <div
              className="bg-card border border-border p-5"
              style={{ borderRadius: "var(--radius-card)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Bell size={15} className="text-accent" />
                <span className="text-foreground" style={{ fontSize: "var(--text-label)", fontWeight: 600 }}>
                  알림 설정
                </span>
              </div>
              {[
                { key: "linkView" as const, label: "링크 조회 알림", desc: "공유 링크가 열람될 때 알림" },
                { key: "newDesign" as const, label: "새 시안 등록 알림", desc: "새 UI 시안이 업로드될 때 알림" },
                { key: "expiry" as const, label: "링크 만료 알림", desc: "공유 링크 만료 3일 전 알림" },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
                  <div>
                    <div className="text-foreground" style={{ fontSize: "var(--text-label)" }}>{item.label}</div>
                    <div className="text-accent" style={{ fontSize: "var(--text-caption)" }}>{item.desc}</div>
                  </div>
                  <button
                    onClick={() => setNotifications((prev) => ({ ...prev, [item.key]: !prev[item.key] }))}
                    className={`w-10 h-6 rounded-full transition-colors relative ${
                      notifications[item.key] ? "bg-primary" : "bg-border"
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        notifications[item.key] ? "translate-x-4" : "translate-x-0.5"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { createContext, useContext, useState } from "react";

export type Language = "en" | "ja";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    // Navigation
    about: "About",
    experience: "Experience",
    projects: "Projects",
    tools: "Tools",
    education: "Education",
    contact: "Contact",

    // Hero Section
    heroTitle: "Joseph Allen",
    heroSubtitle:
      "Front-End Developer with 8 years of experience in Product Development and Startups, seeking immediate opportunities in Japan.",
    careerObjective: "CAREER OBJECTIVE",
    careerObjectiveText:
      "Front-End Developer with 8 years of experience in startups and products. Seeking a role in Japan to grow into Full-Stack development and take on leadership responsibilities. Previously lived in Japan; JLPT N5 certified.",
    portfolio: "linkedin.com/in/josephrossallen/",
    getInTouch: "Get in touch",
    downloadCV: "Download CV",

    // About Section
    aboutTitle: "Professional Summary",
    aboutText:
      "Expertise with React, Next.js, TypeScript, and modern Developer stacks.\nDesire to grow into Full-Stack development and leadership roles.\nStrong background in Python and data science, with experience delivering training, live-coding sessions, and webinars.\n Experience living in Japan, JLPT N5 certified.",

    // Experience Section
    experienceTitle: "Work Experience",
    current: "Present",

    // Experience Companies
    avocadogreenRole: "Freelance Full-stack developer, Self-employed",
    avocadogreenDesc:
      "Worked as a Project Manager and Software Developer on a range of technical projects, from static sites to production applications.",
    nbrownRole: "Senior Front-end Developer",
    nbrownDesc:
      "Built and maintained credit application features within a large-scale e-commerce platform. Worked on a production Credit Application, handling hundreds of daily applications for micro-loans. Organised and led internal developer guilds.",
    manchesterRole: "Research Associate",
    manchesterDesc:
      "Designed and delivered technical training and research outputs for the UK Data Service. Built a Codecademy-style interactive training platform using React. Conducted research on ethical data use.",
    lateroomsRole: "Junior Front-end Developer / Junior Data Scientist",
    lateroomsDesc:
      "Contributed to front-end and data science projects enhancing the travel booking experience. Built a React dashboard for data science experiments. Implemented a Flask API applying Analytic Hierarchy Process increasing revenue by 20%.",

    // Projects
    roadaiDesc:
      "Built a responsive interface for analysing road surface quality using AI-driven image classification. Designed a performant React front-end for heavy geospatial data.",
    moreliquidDesc:
      "Led technical direction for a Web3 platform tokenising real-world assets. World's first tokenised Money Market Euro fund, launching days before Blackrock.",
    billidropDesc:
      "Developed a lottery app template used across 30+ white-label domains. Built scalable architecture handling tens of thousands of US Dollars in transactions.",
    paragonDesc:
      "Led a team of 6 developers building a platform to automate video production workflow over two years. Introduced AGILE, retrospectives, and mastery culture.",
    ortomDesc:
      "Created a fast, modern website for a data consultancy. Built with static site generation and improved traffic tenfold through improved UX and SEO.",
    redmetersDesc:
      "Built software for a mining sensor company reducing ML prediction error. Created dashboards for sensor data experimentation, improving model accuracy from 44% to 2.6%.",

    // Project Types
    aiml: "AI/ML",
    fintech: "Fintech",
    ecommerce: "E-commerce",
    videoproduction: "Video Production",
    corporatewebsite: "Corporate Website",
    datascience: "Data Science",

    // Tool Categories
    programmingFrameworks: "Programming Languages & Frameworks",
    testingQA: "Testing & QA",
    htmlcss: "HTML/CSS & Styling",
    databases: "Databases & Backend",
    cloud: "Cloud Platforms & Infrastructure",
    projectManagement: "Project Management & Leadership",

    // Education
    universityName: "University of Manchester",
    degree:
      "2:1 BSc Computer Science and Mathematics with Industrial Experience",
    graduated: "Graduated 2017",
    location: "Manchester, UK",
    educationDesc:
      'Mainly focused on Graph Theory, Discrete Mathematics as well as Computer Vision, Artificial Intelligence and User Experience. My final project was "Change Detection in Live Video".',

    // Contact
    contactTitle: "Get in Touch",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Your message",
    send: "Send",

    // Projects
    projectsTitle: "Projects",
    toolsTitle: "Skills",
    educationTitle: "Education",
  },
  ja: {
    // Navigation
    about: "概要",
    experience: "経験",
    projects: "プロジェクト",
    tools: "ツール",
    education: "教育",
    contact: "連絡先",

    // Hero Section
    heroTitle: "ジョセフ・アレン",
    heroSubtitle:
      "日本でフルスタック開発の機会を求める8年の経験を持つフロントエンド開発者。",
    careerObjective: "キャリア目標",
    careerObjectiveText:
      "スタートアップと製品における8年の経験を持つフロントエンド開発者。日本でフルスタック開発に成長し、リーダーシップの責任を担う役割を求めています。日本在住歴あり；JLPT N5認定。",
    portfolio: "https://www.linkedin.com/in/josephrossallen/",
    getInTouch: "お問い合わせ",
    downloadCV: "履歴書をダウンロード",

    // About Section
    aboutTitle: "専門要約",
    aboutText:
      "React、Next.js、TypeScript、Firebase、モダンDevOpsスタックの専門知識。\nフルスタック開発への成長とチームリーダーシップ役割への進歩に情熱。\nPythonとデータサイエンスの強固な背景、トレーニング、ライブコーディングセッション、ウェビナーの提供経験。",

    // Experience Section
    experienceTitle: "職歴",
    current: "現在",

    // Experience Companies
    avocadogreenRole: "フリーランス フルスタック開発者、自営業",
    avocadogreenDesc:
      "静的サイトから本格的なアプリケーションまで、様々な技術プロジェクトでプロジェクトマネージャーとソフトウェア開発者として従事。",
    nbrownRole: "シニア フロントエンド開発者",
    nbrownDesc:
      "大規模なEコマースプラットフォーム内でクレジット申請機能の構築・保守。日々数百件のマイクロローン申請を処理する本格的なクレジット申請システムに従事。社内開発者ギルドの組織・リーダーシップ。",
    manchesterRole: "研究アソシエイト",
    manchesterDesc:
      "UK Data Service向けの技術トレーニングと研究成果の設計・提供。Reactを使用したCodecademyスタイルのインタラクティブ トレーニング プラットフォームを構築。倫理的データ使用に関する研究を実施。",
    lateroomsRole:
      "ジュニア フロントエンド開発者 / ジュニア データサイエンティスト",
    lateroomsDesc:
      "旅行予約体験を向上させるフロントエンドとデータサイエンス プロジェクトに貢献。データサイエンス実験用のReactダッシュボードを構築。売上を20%向上させる階層分析プロセスを適用したFlask APIを実装。",

    // Projects
    roadaiDesc:
      "AI駆動画像分類を使用した道路表面品質分析用レスポンシブインターフェイスを構築。重い地理空間データ用の高性能Reactフロントエンドを設計。",
    moreliquidDesc:
      "実世界資産をトークン化するWeb3プラットフォームの技術方向性をリード。BlackRockの数日前にローンチした世界初のトークン化マネーマーケット ユーロファンド。",
    billidropDesc:
      "30以上のホワイトラベル ドメインで使用される宝くじアプリテンプレートを開発。数万米ドルの取引を処理するスケーラブルなアーキテクチャを構築。",
    paragonDesc:
      "2年間にわたってビデオ制作ワークフローを自動化するプラットフォームを構築する6人の開発者チームをリード。AGILE、振り返り、習熟文化を導入。",
    ortomDesc:
      "データコンサルタンシー向けの高速でモダンなウェブサイトを作成。静的サイト生成で構築し、UXとSEOの改善により トラフィックを10倍向上。",
    redmetersDesc:
      "鉱業センサー会社向けにML予測エラーを削減するソフトウェアを構築。センサーデータ実験用のダッシュボードを作成し、モデル精度を44%から2.6%に改善。",

    // Project Types
    aiml: "AI/ML",
    fintech: "フィンテック",
    ecommerce: "Eコマース",
    videoproduction: "ビデオ制作",
    corporatewebsite: "企業ウェブサイト",
    datascience: "データサイエンス",

    // Tool Categories
    programmingFrameworks: "プログラミング言語・フレームワーク",
    testingQA: "テスト・QA",
    htmlcss: "HTML/CSS・スタイリング",
    databases: "データベース・バックエンド",
    cloud: "クラウドプラットフォーム・インフラ",
    projectManagement: "プロジェクト管理・リーダーシップ",

    // Education
    universityName: "マンチェスター大学",
    degree: "コンピュータサイエンス・数学学士（産業経験付き）2:1",
    graduated: "2017年卒業",
    location: "マンチェスター、英国",
    educationDesc:
      "主にグラフ理論、離散数学、コンピュータビジョン、人工知能、ユーザーエクスペリエンスに焦点。最終プロジェクトは「ライブビデオでの変化検出」。",

    // Contact
    contactTitle: "お問い合わせ",
    emailPlaceholder: "メールアドレス",
    messagePlaceholder: "メッセージ",
    send: "送信",

    // Projects
    projectsTitle: "主要プロジェクト",
    toolsTitle: "技術スキル",
    educationTitle: "教育",
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

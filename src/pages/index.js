import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.heroGradient1} />
        <div className={styles.heroGradient2} />
      </div>
      <div className={styles.heroContent}>
        <img
          src="/img/iic-logo.png"
          alt="IIC Logo"
          className={styles.heroLogo}
        />
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>
          주문, 출고, 반품, 교환, 재고 관리를 위한 통합 운영 매뉴얼
        </p>
        <div className={styles.heroButtons}>
          <Link className={styles.btnPrimary} to="/docs/">
            시작하기 →
          </Link>
          <Link className={styles.btnSecondary} to="/docs/tutorials/overview">
            튜토리얼 보기
          </Link>
        </div>
      </div>
    </header>
  );
}

const mainFeatures = [
  {
    title: '주문 관리',
    icon: '📦',
    description: '주문 조회, 필터링, 상태 관리 및 엑셀 다운로드',
    link: '/docs/how-to/order-search-filter-download',
  },
  {
    title: '출고 관리',
    icon: '🚚',
    description: '출고 요청, 부분 출고, 배송 추적 및 취소 처리',
    link: '/docs/how-to/cancel-shipment-partial-shipment',
  },
  {
    title: '반품/교환',
    icon: '🔄',
    description: '반품 승인/거부, 교환 처리, 환불 관리',
    link: '/docs/how-to/return-approve-reject-refund',
  },
  {
    title: '재고 관리',
    icon: '📊',
    description: '재고 조회, 필터링, 수량 조정 및 동기화',
    link: '/docs/how-to/inventory-search-filter-adjust',
  },
];

const guideCategories = [
  {
    title: '튜토리얼',
    description: '단계별 학습 가이드',
    items: [
      { label: 'OMS 개요', to: '/docs/tutorials/overview' },
      { label: '단건 주문 처리', to: '/docs/tutorials/process-single-order' },
      { label: '단건 클레임 처리', to: '/docs/tutorials/process-single-claim' },
    ],
  },
  {
    title: '실무 시나리오',
    description: '실제 운영 사례 모음',
    items: [
      { label: '배송 분실', to: '/docs/use-cases/delivery-lost' },
      { label: '수거 거부 & 재발송', to: '/docs/use-cases/shipment-rejection-reshipment' },
      { label: '부분 출고', to: '/docs/use-cases/partial-shipment-split-delivery' },
      { label: '매장 수령', to: '/docs/use-cases/store-pickup' },
      { label: '교환 시나리오', to: '/docs/use-cases/exchange-scenarios' },
      { label: '재고 불일치', to: '/docs/use-cases/inventory-mismatch-sync-delay' },
    ],
  },
  {
    title: '레퍼런스',
    description: '상세 참조 문서',
    items: [
      { label: '상태 코드', to: '/docs/reference/status-codes' },
      { label: '필드 정의', to: '/docs/reference/field-definitions' },
      { label: '에러 메시지', to: '/docs/reference/error-messages' },
      { label: '용어 사전', to: '/docs/glossary' },
    ],
  },
];

const quickLinks = [
  { label: '상태 전이 규칙', to: '/docs/explanation/state-transition-rules' },
  { label: '운영 정책', to: '/docs/explanation/policies' },
  { label: '변경 이력', to: '/docs/ops/changelog' },
  { label: '클레임 등록', to: '/docs/how-to/register-claim' },
];

function FeatureCard({title, icon, description, link}) {
  return (
    <Link to={link} className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
      <p className={styles.featureDesc}>{description}</p>
      <span className={styles.featureArrow}>→</span>
    </Link>
  );
}

function GuideSection({title, description, items}) {
  return (
    <div className={styles.guideSection}>
      <Heading as="h3" className={styles.guideSectionTitle}>{title}</Heading>
      <p className={styles.guideSectionDesc}>{description}</p>
      <div className={styles.guidePills}>
        {items.map((item, idx) => (
          <Link key={idx} to={item.to} className={styles.guidePill}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="홈"
      description="IIC OMS 운영 매뉴얼 — 주문, 출고, 반품, 교환, 재고 관리">
      <HeroSection />
      <main className={styles.main}>
        {/* Main Feature Cards */}
        <section className={styles.section}>
          <div className={styles.container}>
            <Heading as="h2" className={styles.sectionTitle}>
              주요 기능
            </Heading>
            <p className={styles.sectionDesc}>
              OMS의 핵심 기능별 사용 가이드를 확인하세요
            </p>
            <div className={styles.featureGrid}>
              {mainFeatures.map((feature, idx) => (
                <FeatureCard key={idx} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Guide Categories */}
        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className={styles.container}>
            <Heading as="h2" className={styles.sectionTitle}>
              문서 카테고리
            </Heading>
            <p className={styles.sectionDesc}>
              목적에 맞는 문서를 빠르게 찾아보세요
            </p>
            <div className={styles.guideGrid}>
              {guideCategories.map((cat, idx) => (
                <GuideSection key={idx} {...cat} />
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className={styles.section}>
          <div className={styles.container}>
            <Heading as="h2" className={styles.sectionTitle}>
              추가 리소스
            </Heading>
            <div className={styles.quickLinks}>
              {quickLinks.map((link, idx) => (
                <Link key={idx} to={link.to} className={styles.quickLink}>
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

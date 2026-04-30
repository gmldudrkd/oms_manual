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
      </main>
    </Layout>
  );
}

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const homeContent = {
  ko: {
    pageTitle: '홈',
    metaDescription: 'IIC OMS 운영 매뉴얼 — 주문, 출고, 반품, 교환, 재고 관리',
    heroSubtitle: '주문, 출고, 반품, 교환, 재고 관리를 위한 통합 운영 매뉴얼',
    getStarted: '시작하기 →',
    sectionTitle: '주요 기능',
    sectionDescription: 'OMS의 핵심 기능별 사용 가이드를 확인하세요',
    mainFeatures: [
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
    ],
  },
  en: {
    pageTitle: 'Home',
    metaDescription:
      'IIC OMS operations manual for orders, shipments, returns, exchanges, and inventory management',
    heroSubtitle:
      'An integrated operations manual for orders, shipments, returns, exchanges, and inventory management',
    getStarted: 'Get started →',
    sectionTitle: 'Key Features',
    sectionDescription: 'Browse guides for core OMS workflows.',
    mainFeatures: [
      {
        title: 'Order Management',
        icon: '📦',
        description: 'Search and filter orders, manage statuses, and download Excel files',
        link: '/docs/how-to/order-search-filter-download',
      },
      {
        title: 'Shipment Management',
        icon: '🚚',
        description: 'Request shipments, process partial shipments, track deliveries, and cancel shipments',
        link: '/docs/how-to/cancel-shipment-partial-shipment',
      },
      {
        title: 'Returns/Exchanges',
        icon: '🔄',
        description: 'Approve or reject returns, process exchanges, and manage refunds',
        link: '/docs/how-to/return-approve-reject-refund',
      },
      {
        title: 'Inventory Management',
        icon: '📊',
        description: 'Search and filter inventory, adjust quantities, and sync stock',
        link: '/docs/how-to/inventory-search-filter-adjust',
      },
    ],
  },
};

function getHomeContent(locale) {
  return homeContent[locale] ?? homeContent.ko;
}

function HeroSection({content}) {
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
          {content.heroSubtitle}
        </p>
        <div className={styles.heroButtons}>
          <Link className={styles.btnPrimary} to="/docs/">
            {content.getStarted}
          </Link>
        </div>
      </div>
    </header>
  );
}

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
  const {i18n} = useDocusaurusContext();
  const content = getHomeContent(i18n.currentLocale);

  return (
    <Layout
      title={content.pageTitle}
      description={content.metaDescription}>
      <HeroSection content={content} />
      <main className={styles.main}>
        {/* Main Feature Cards */}
        <section className={styles.section}>
          <div className={styles.container}>
            <Heading as="h2" className={styles.sectionTitle}>
              {content.sectionTitle}
            </Heading>
            <p className={styles.sectionDesc}>
              {content.sectionDescription}
            </p>
            <div className={styles.featureGrid}>
              {content.mainFeatures.map((feature, idx) => (
                <FeatureCard key={idx} {...feature} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

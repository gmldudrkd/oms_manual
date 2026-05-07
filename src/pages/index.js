import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const homeContent = {
  ko: {
    pageTitle: '홈',
    metaDescription: 'IIC OMS 운영 매뉴얼 — 마이그레이션 가이드 및 변경 이력',
    heroSubtitle: 'IIC OMS 마이그레이션 가이드 및 변경 이력',
    getStarted: '마이그레이션 가이드 →',
    getStartedLink: '/docs/migration/GM_CA',
    sectionTitle: '문서',
    sectionDescription: '마이그레이션 가이드와 변경 이력을 확인하세요',
    mainFeatures: [
      {
        title: 'Core Operations',
        icon: '📘',
        description: '기존 시스템 기능을 신규 시스템에서 어디서 수행하는지 안내',
        link: '/docs/migration/GM_CA',
      },
      {
        title: 'New Features',
        icon: '✨',
        description: '신규 시스템에 추가된 기능 사용 가이드',
        link: '/docs/migration/GM_US',
      },
      {
        title: '변경 이력',
        icon: '🗒️',
        description: '버전별 업데이트 내역 확인',
        link: '/docs/changelog/26-03-25',
      },
    ],
  },
  en: {
    pageTitle: 'Home',
    metaDescription:
      'IIC OMS operations manual — migration guides and changelog',
    heroSubtitle:
      'IIC OMS migration guides and changelog',
    getStarted: 'Migration guide →',
    getStartedLink: '/docs/migration/GM_CA',
    sectionTitle: 'Docs',
    sectionDescription: 'Browse migration guides and the changelog.',
    mainFeatures: [
      {
        title: 'Core Operations',
        icon: '📘',
        description: 'Where to perform existing-system tasks in the new system',
        link: '/docs/migration/GM_CA',
      },
      {
        title: 'New Features',
        icon: '✨',
        description: 'How to use newly added features in the new system',
        link: '/docs/migration/GM_US',
      },
      {
        title: 'Changelog',
        icon: '🗒️',
        description: 'Per-version update history',
        link: '/docs/changelog/26-03-25',
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
          <Link className={styles.btnPrimary} to={content.getStartedLink}>
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

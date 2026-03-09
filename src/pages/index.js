import { useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const steps = [
  {
    eyebrow: 'Introduction',
    label: 'Bienvenue sur Nomu',
    desc: "Vue d'ensemble de la plateforme, de ses fonctionnalités clés et du plan de ce guide — le bon point de départ.",
    to: '/docs/intro',
    featured: true,
  },
  {
    num: '01',
    label: 'Le Concept Nomu',
    desc: "Comprendre ce qui rend Nomu unique et comment l'algorithme vous connecte avec les bonnes personnes.",
    to: '/docs/guide/01-concept',
  },
  {
    num: '02',
    label: 'Premiers pas',
    desc: "Créez votre compte, choisissez vos passions et configurez le profil qui vous ressemble.",
    to: '/docs/guide/02-premiers-pas',
  },
  {
    num: '03',
    label: 'Navigation',
    desc: "Un tour complet des 5 onglets pour naviguer dans l'application.",
    to: '/docs/guide/03-navigation',
  },
  {
    num: '04',
    label: 'Explorer',
    desc: "Trouvez le local idéal grâce au moteur de recherche intelligent et aux filtres avancés.",
    to: '/docs/guide/04-explorer',
  },
  {
    num: '05',
    label: 'Messagerie & Réservations',
    desc: "Discutez en temps réel et planifiez votre rencontre avec le système de réservation intégré.",
    to: '/docs/guide/05-messagerie',
  },
  {
    num: '06',
    label: 'Gérer son compte',
    desc: "Mettez à jour vos informations, vos intérêts et gérez votre visibilité sur la plateforme.",
    to: '/docs/guide/06-compte',
  },
  {
    num: '07',
    label: 'Sécurité & Signalement',
    desc: "Comment protéger la communauté et signaler un comportement inapproprié.",
    to: '/docs/guide/07-securite',
  },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M5 12h14m-6 6 6-6-6-6" />
  </svg>
);

export default function Home() {
  const badgeRef    = useRef(null);
  const titleRef    = useRef(null);
  const subRef      = useRef(null);
  const ctasRef     = useRef(null);
  const heroRef     = useRef(null);
  const guideRef    = useRef(null);
  const timelineRef = useRef(null);
  const lineRef     = useRef(null);

  useEffect(() => {
    let ctx;

    const init = async () => {
      const { gsap }          = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {

        /* ── Hero entrance ─────────────────────────────── */
        const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        heroTl
          .from(badgeRef.current, {
            opacity: 0, y: 18, filter: 'blur(8px)', duration: 0.65,
          }, 0.2)
          .from(titleRef.current.querySelectorAll('[data-line]'), {
            yPercent: 115, opacity: 0, stagger: 0.14, duration: 0.9,
          }, 0.46)
          .from(subRef.current, {
            opacity: 0, y: 24, duration: 0.72,
          }, 0.82)
          .from(Array.from(ctasRef.current.children), {
            opacity: 0, y: 14, stagger: 0.13, duration: 0.6,
          }, 1.05);

        // Parallax hero au scroll
        gsap.to(heroRef.current.querySelector('[data-hero-content]'), {
          yPercent: -12, ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top', end: 'bottom top', scrub: 1.2,
          },
        });

        /* ── Guide header ───────────────────────────────── */
        gsap.from(guideRef.current.querySelectorAll('[data-anim-header]'), {
          opacity: 0, x: -32, stagger: 0.16, duration: 0.75, ease: 'power2.out',
          scrollTrigger: { trigger: guideRef.current, start: 'top 82%' },
        });

        /* ── Timeline ───────────────────────────────────── */
        const items = timelineRef.current.querySelectorAll('[data-item]');
        const dots  = timelineRef.current.querySelectorAll('[data-dot]');

        const tlTl = gsap.timeline({
          scrollTrigger: { trigger: timelineRef.current, start: 'top 80%' },
        });

        // Ligne qui se dessine du haut vers le bas
        tlTl.from(lineRef.current, {
          scaleY: 0, transformOrigin: 'top center',
          duration: 1.4, ease: 'power2.inOut',
        }, 0);

        // Items glissent depuis la gauche
        tlTl.from(Array.from(items), {
          opacity: 0, x: -28, stagger: 0.11, duration: 0.65, ease: 'power2.out',
        }, 0.12);

        // Dots qui poppent avec un ressort
        tlTl.from(Array.from(dots), {
          scale: 0, stagger: 0.11, duration: 0.45, ease: 'back.out(2.2)',
        }, 0.12);

      });
    };

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <Layout
      title="Guide d'utilisation"
      description="Nomu connecte voyageurs et locaux basés sur leurs vraies affinités. Découvrez comment utiliser la plateforme."
    >
      <div className={styles.page}>

        {/* ── Hero photo ── */}
        <div ref={heroRef} className={styles.heroWrap}>
          <div data-hero-content className={styles.heroContent}>
            <span ref={badgeRef} className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              Guide d'utilisation
            </span>

            <h1 ref={titleRef} className={styles.heroTitle}>
              <span className={styles.titleLineWrap}>
                <span data-line className={styles.titleLine}>Partagez votre ville.</span>
              </span>
              <span className={styles.titleLineWrap}>
                <span data-line className={`${styles.titleLine} ${styles.heroTitleMuted}`}>
                  Explorez la leur.
                </span>
              </span>
            </h1>

            <p ref={subRef} className={styles.heroSub}>
              Nomu connecte voyageurs et locaux basés sur leurs vraies affinités.
              Fini les guides génériques — des rencontres humaines, authentiques.
            </p>

            <div ref={ctasRef} className={styles.heroCtas}>
              <Link to="/docs/intro" className={styles.ctaPrimary}>
                Commencer le guide
                <ArrowIcon />
              </Link>
              <Link to="/docs/guide/02-premiers-pas" className={styles.ctaSecondary}>
                Créer mon compte
              </Link>
            </div>
          </div>
        </div>

        {/* ── Guide ── */}
        <div ref={guideRef} className={styles.cardsWrap}>
          <div className={styles.cardsHeader}>
            <span data-anim-header className={styles.cardsSectionLabel}>Le guide</span>
            <h2 data-anim-header className={styles.cardsSectionTitle}>
              7 chapitres pour tout maîtriser.
            </h2>
          </div>

          <div ref={timelineRef} className={styles.timeline}>
            <div ref={lineRef} className={styles.timelineLine} />

            {steps.map((s, i) => (
              <Link
                key={s.to}
                to={s.to}
                data-item
                className={`${styles.timelineItem} ${s.featured ? styles.timelineItemFeatured : ''}`}
              >
                <div
                  data-dot
                  className={`${styles.timelineDot} ${s.featured ? styles.timelineDotFeatured : ''}`}
                />
                <div className={styles.timelineBody}>
                  {s.featured
                    ? <span className={styles.timelineEyebrow}>{s.eyebrow}</span>
                    : <span className={styles.timelineNum}>{s.num}</span>
                  }
                  <h3 className={styles.timelineTitle}>{s.label}</h3>
                  <p className={styles.timelineDesc}>{s.desc}</p>
                </div>
                <span className={styles.timelineArrow}>
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </Layout>
  );
}

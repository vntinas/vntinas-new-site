// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "My research explores how memristive devices can power a new generation of computing for the edge. I build physics-based models that capture how these devices really behave, including their noise and variability, and I study how stochastic effects in resistive switching can be turned into a computational advantage. Much of my work centers on Cellular Nonlinear Networks and neuromorphic circuits, where I look for ways to compute that are inspired by physics and biology rather than by conventional digital logic.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Academic CV including education, appointments, skills, and research profile.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "I teach across the BSc and MSc programmes in the Department of Electronic Systems at Aalborg University, Copenhagen, from the foundations of computer engineering and embedded programming to numerical and scientific computing. Alongside lecturing, I supervise semester and thesis projects in problem-based, project-organised teams, spanning embedded systems, communication systems, and cyber security.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-two-journal-papers-published-in-late-2024-noise-induced-homeostasis-in-memristor-based-neuromorphic-systems-in-ieee-electron-device-letters-vol-45-pp-1524-1527-and-stochastic-resonance-in-hfo-based-memristors-impact-of-external-noise-on-the-binary-stdp-protocol-in-ieee-transactions-on-electron-devices-vol-71-pp-5761-5766-both-in-collaboration-with-colleagues-from-universitat-autònoma-de-barcelona",
          title: 'Two journal papers published in late 2024: “Noise-Induced Homeostasis in Memristor-Based Neuromorphic Systems”...',
          description: "",
          section: "News",},{id: "news-paper-published-in-advanced-electronic-materials-edge-of-chaos-theory-unveils-the-first-and-simplest-ever-reported-hodgkin-huxley-neuristor-ascoli-demirkol-messaris-ntinas-et-al-vol-11-no-8-2400789-the-work-demonstrates-a-minimal-two-element-circuit-that-reproduces-the-full-three-bifurcation-cascade-of-the-hodgkin-huxley-model-using-a-single-nbox-threshold-switch-doi-10-1002-aelm-202400789",
          title: 'Paper published in Advanced Electronic Materials: “Edge of Chaos Theory Unveils the First...',
          description: "",
          section: "News",},{id: "news-six-papers-co-authored-with-colleagues-from-tu-dresden-and-beyond-were-presented-at-the-2025-ieee-international-symposium-on-circuits-and-systems-iscas-covering-topics-from-memristive-cnn-cell-topologies-and-threshold-switch-neuron-circuits-to-pcm-based-in-memory-computing-and-a-live-4-4-m-cnn-edge-detection-demonstration",
          title: 'Six papers co-authored with colleagues from TU Dresden and beyond were presented at...',
          description: "",
          section: "News",},{id: "news-two-new-articles-published-in-ieee-transactions-on-nanotechnology-1-dynamic-analysis-of-the-effect-of-device-to-device-variability-of-real-world-memristors-on-uncoupled-m-cnns-wang-et-al-vol-24-pp-121-128-and-2-stochastic-templates-and-noise-dynamics-in-memristor-cellular-nonlinear-networks-prousalis-ntinas-et-al-vol-24-pp-282-292",
          title: 'Two new articles published in IEEE Transactions on Nanotechnology: (1) “Dynamic Analysis of...',
          description: "",
          section: "News",},{id: "news-i-was-an-invited-speaker-at-the-neuromorphic-computing-and-emerging-technologies-one-day-course-organized-by-cátedra-chip-upc-at-the-universitat-politècnica-de-catalunya-in-barcelona-where-i-presented-on-memristor-based-cellular-nonlinear-networks-cellnns-alongside-speakers-from-nus-delft-imse-cnm-ini-zurich-and-politecnico-di-milano",
          title: 'I was an invited speaker at the Neuromorphic Computing and Emerging Technologies one-day...',
          description: "",
          section: "News",},{id: "news-new-journal-paper-accepted-in-ieee-transactions-on-circuits-and-systems-i-a-fast-and-compact-threshold-switch-based-cellular-nonlinear-network-cell-demirkol-ascoli-messaris-ntinas-prousalis-tetzlaff-doi-10-1109-tcsi-2025-3583799",
          title: 'New journal paper accepted in IEEE Transactions on Circuits and Systems I: “A...',
          description: "",
          section: "News",},{id: "news-i-joined-aalborg-university-in-copenhagen-as-an-assistant-professor-tenure-track-in-the-department-of-electronic-systems-affiliated-with-the-edge-computing-and-networking-group-and-the-communication-media-and-information-technologies-cmi-section",
          title: 'I joined Aalborg University in Copenhagen as an Assistant Professor (Tenure-Track) in the...',
          description: "",
          section: "News",},{id: "news-i-gave-an-invited-talk-a-phoenix-in-the-making-memristors-and-the-resurgence-of-cellular-nonlinear-networks-at-the-2nd-international-online-conference-on-biomimetics-iocb-2025-held-online-on-16-18-september-2025",
          title: 'I gave an invited talk, “A Phoenix in the Making: Memristors and the...',
          description: "",
          section: "News",},{id: "news-the-technology-roadmap-of-bioinspired-computing-hardware-is-now-online-in-acs-nano-this-community-roadmap-brings-together-researchers-from-across-the-field-to-chart-the-future-of-memristive-neuromorphic-and-bio-inspired-computing-technologies-doi-10-1021-acsnano-5c17087",
          title: 'The Technology Roadmap of Bioinspired Computing Hardware is now online in ACS Nano....',
          description: "",
          section: "News",},{id: "news-congratulations-to-adnan-haidar-on-his-new-paper-drift-resilient-pcm-based-analog-in-memory-computing-for-tactile-sensing-in-human-robot-interaction-efficient-feature-extraction-now-available-in-early-access-in-the-ieee-journal-on-emerging-and-selected-topics-in-circuits-and-systems-jetcas-excellent-work-adnan-a-great-contribution-to-robust-analog-in-memory-computing-for-robotics-doi-10-1109-jetcas-2026-3701542",
          title: 'Congratulations to Adnan Haidar on his new paper, “Drift-Resilient PCM-Based Analog In-Memory Computing...',
          description: "",
          section: "News",},{id: "projects-memristive-cellular-nonlinear-networks-mem-cnn",
          title: 'Memristive Cellular Nonlinear Networks (Mem²CNN)',
          description: "Design and experimental validation of memristive CNN arrays, funded by the German Research Foundation (DFG) within SPP 2262.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-memristor-device-modeling-amp-stochasticity",
          title: 'Memristor Device Modeling &amp;amp; Stochasticity',
          description: "Variability-aware and probabilistic models of resistive switching devices, including stochastic resonance and Markov jump process frameworks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-edge-intelligence-amp-neuromorphic-computing",
          title: 'Edge Intelligence &amp;amp; Neuromorphic Computing',
          description: "In-memory computing with PCM and memristor crossbars for edge AI, threshold switch neuron circuits, and bio-inspired spiking architectures.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%6E%74%69%6E%61%73@%65%73.%61%61%75.%64%6B", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=RCeprCUAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-2367-5567", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/vasileios-ntinas-0a09bab6", "_blank");
        },
      },{
        id: 'social-mastodon',
        title: 'Mastodon',
        section: 'Socials',
        handler: () => {
          window.open("https://fediscience.org/@vntinas", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Vasileios_Ntinas2/", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=56943437100", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

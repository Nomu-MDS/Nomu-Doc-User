// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guideSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Bienvenue',
    },
    {
      type: 'category',
      label: "Guide d'utilisation",
      collapsed: false,
      items: [
        'guide/01-concept',
        'guide/02-premiers-pas',
        'guide/03-navigation',
        'guide/04-explorer',
        'guide/05-messagerie',
        'guide/06-compte',
        'guide/07-securite',
      ],
    },
  ],
};

export default sidebars;

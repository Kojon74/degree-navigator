const Courses: {
  [key: string]: {
    name: string;
    preReqs?: Array<string | { num: number; courses: Array<string> }>;
  };
} = {
  AardSignMagic: {
    name: "Aard Sign Magic",
    preReqs: ["IntroductionToElementalMagic", "CombatMagic1"],
  },
  Alchemy1: {
    name: "Alchemy 1",
    preReqs: ["Potions1", "Herbology1", "HistoryOfMagic1"],
  },
  Alchemy2: {
    name: "Alchemy 2",
    preReqs: [
      "Alchemy1",
      { num: 1, courses: ["Arithmancy1", "Potions2", "Herbology2"] },
    ],
  },
  Alchemy3: {
    name: "Alchemy 3",
    preReqs: [
      "Alchemy2",
      {
        num: 2,
        courses: ["Arithmancy1", "Potions3", "Herbology3", "MuggleMath3"],
      },
    ],
  },
  AncientStudies: { name: "Ancient Studies" },
  Apparation1: { name: "Apparation 1", preReqs: ["Astronomy1", "Charms2"] },
  Apparation2: {
    name: "Apparation 2",
    preReqs: [
      "Apparation1",
      { num: 1, courses: ["Divination1", "CombatMagic1"] },
    ],
  },
  Aquakinesis: {
    name: "Aquakinesis",
    preReqs: ["IntroductionToElementalMagic", "CombatMagic1"],
  },
  Arithmancy1: {
    name: "Arithmancy 1",
    preReqs: ["MuggleMath2", "MuggleScience1", "ComputerScience1"],
  },
  Arithmancy2: {
    name: "Arithmancy 2",
    preReqs: [
      "Arithmancy1",
      { num: 1, courses: ["MuggleMath3", "MuggleScience3"] },
    ],
  },
  Art1: { name: "Art 1" },
  Art2: { name: "Art 2", preReqs: ["Art1"] },
  Astronomy1: { name: "Astronomy 1" },
  Astronomy2: {
    name: "Astronomy 2",
    preReqs: ["Astronomy1", "IntroductionToMuggleMath", "Charms1"],
  },
  Astronomy3: { name: "Astronomy 3", preReqs: ["Astronomy2", "Charms2"] },
  AxiiSignMagic: { name: "AAxii Sign Magic", preReqs: ["Telempathy"] },
  CareOfMagicalCreatures: {
    name: "Care of Magical Creatures",
    preReqs: ["Herbology1", "Potions1"],
  },
  Charms1: { name: "Charms 1" },
  Charms2: { name: "Charms 2", preReqs: ["Charms1"] },
  Charms3: { name: "Charms 3", preReqs: ["Charms2"] },
  CombatMagic1: {
    name: "Combat Magic 1",
    preReqs: ["Charms1", "DarkArts1", "DefenseAgainstTheDarkArts1"],
  },
  CombatMagic2: {
    name: "Combat Magic 2",
    preReqs: [
      "CombatMagic1",
      {
        num: 2,
        courses: [
          "Apparation1",
          "Divination1",
          "Arithmancy1",
          "HealingMagic1",
          "AardSignMagic",
          "IgniSignMagic",
          "QuenSignMagic",
          "YrdenSignMagic",
        ],
      },
    ],
  },
  ComputerScience1: { name: "Computer Science 1" },
  ComputerScience2: {
    name: "Computer Science 2",
    preReqs: ["ComputerScience1"],
  },
  ComputerScience3: {
    name: "Computer Science 3",
    preReqs: ["ComputerScience2"],
  },
  Cooking: { name: "Cooking" },
  DarkArts1: { name: "Dark Arts 1" },
  DarkArts2: { name: "Dark Arts 2", preReqs: ["DarkArts1", "Charms1"] },
  DarkArts3: { name: "Dark Arts 3", preReqs: ["DarkArts2"] },
  DefenseAgainstTheDarkArts1: { name: "Defense Against the Dark Arts 1" },
  DefenseAgainstTheDarkArts2: {
    name: "Defense Against the Dark Arts 2",
    preReqs: ["DefenseAgainstTheDarkArts1", "DarkArts1"],
  },
  Divination1: {
    name: "Divination 1",
    preReqs: ["Astronomy1", "Herbology1", "HistoryOfMagic1"],
  },
  Divination2: {
    name: "Divination 2",
    preReqs: [
      "Divination1",
      "Astronomy2",
      { num: 1, courses: ["Arithmancy1", "Xylomancy1"] },
    ],
  },
  Ethics: { name: "Ethics", preReqs: ["MuggleEtiquetteAndTraditions"] },
  ExplorationOfNewMagic: {
    name: "Exploration of New Magic",
    preReqs: [
      "HistoryOfMagic1",
      "Astronomy2",
      { num: 1, courses: ["MagicalTheory", "IntroductionToElementalMagic"] },
    ],
  },
  Flying1: { name: "Flying 1" },
  Flying2: { name: "Flying 2", preReqs: ["Flying1"] },
  FieldStudiesOfMagicalCreatures: {
    name: "Field Studies of Magical Creatures",
  },
  GhoulStudies: { name: "Ghoul Studies" },
  HealingMagic1: { name: "Healing Magic 1", preReqs: ["Charms2"] },
  HealingMagic2: {
    name: "Healing Magic 2",
    preReqs: ["HealingMagic1", { num: 1, courses: ["Potions2", "Herbology2"] }],
  },
  Herbology1: { name: "Herbology 1" },
  Herbology2: { name: "Herbology 2", preReqs: ["Herbology1"] },
  Herbology3: { name: "Herbology 3", preReqs: ["Herbology2", "Potions1"] },
  HistoryOfMagic1: { name: "History of Magic 1" },
  HistoryOfMagic2: { name: "History of Magic 2", preReqs: ["HistoryOfMagic1"] },
  IgniSignMagic: {
    name: "Igni Sign Magic",
    preReqs: ["IntroductionToElementalMagic", "CombatMagic1"],
  },
  IntroductionToElementalMagic: { name: "Introduction to Elemental Magic" },
  IntroductionToMuggleMath: { name: "Introduction to Muggle Math" },
  MagicalTheory: { name: "Magical Theory" },
  MuggleArt: { name: "Muggle Art" },
  MuggleComputerInterface: {
    name: "Muggle Computer Interface",
    preReqs: ["MuggleMath1", "MuggleScience1", "ComputerScience1"],
  },
  MuggleEtiquetteAndTraditions: { name: "Muggle Etiquette and Traditions" },
  MuggleEconomics1: { name: "Muggle Econnomics 1" },
  MuggleEconomics2: {
    name: "Muggle Econnomics 2",
    preReqs: ["MuggleEconomics1", "MuggleMath1"],
  },
  MuggleEconomics3: {
    name: "Muggle Econnomics 3",
    preReqs: ["MuggleEconomics2"],
  },
  MuggleFinancialManagement1: { name: "Muggle Financial Management 1" },
  MuggleFinancialManagement2: {
    name: "Muggle Financial Management 2",
    preReqs: ["MuggleFinancialManagement1", "MuggleEconomics1"],
  },
  MuggleLiterature: { name: "Muggle Literature" },
  MuggleMath1: { name: "Muggle Math 1", preReqs: ["IntroductionToMuggleMath"] },
  MuggleMath2: { name: "Muggle Math 2", preReqs: ["MuggleMath1"] },
  MuggleMath3: { name: "Muggle Math 3", preReqs: ["MuggleMath2"] },
  MuggleMusic: { name: "Muggle Music" },
  MuggleScience1: {
    name: "Muggle Science 1",
    preReqs: ["IntroductionToMuggleMath"],
  },
  MuggleScience2: { name: "Muggle Science 2", preReqs: ["MuggleScience1"] },
  MuggleScience3: { name: "Muggle Science 3", preReqs: ["MuggleScience2"] },
  MuggleStudies: { name: "Muggle Studies" },
  Music: { name: "Music" },
  Photography: { name: "Photography" },
  Potions1: { name: "Potions 1" },
  Potions2: { name: "Potions 2", preReqs: ["Potions1", "Herbology1"] },
  Potions3: { name: "Potions 3", preReqs: ["Potions2", "Herbology2"] },
  Pottery: { name: "Pottery" },
  QuenSignMagic: {
    name: "Quen Sign Magic",
    preReqs: [
      "IntroductionToElementalMagic",
      "CombatMagic1",
      "DefenseAgainstTheDarkArts2",
    ],
  },
  StudyOfAncientRunes: {
    name: "Study of Ancient Runes",
    preReqs: ["HistoryOfMagic1"],
  },
  Telempathy: { name: "Telempathy", preReqs: ["Telepathy", "Divination1"] },
  Telepathy: { name: "Telepathy", preReqs: ["Potions1"] },
  Transfiguration1: { name: "Transfiguration 1", preReqs: ["Potions1"] },
  Transfiguration2: {
    name: "Transfiguration 2",
    preReqs: ["Transfiguration1"],
  },
  Xylomancy1: { name: "Xylomancy 1" },
  Xylomancy2: { name: "Xylomancy 2", preReqs: ["Xylomancy1", "Charms1"] },
  YrdenSignMagic: {
    name: "Yrden Sign Magic",
    preReqs: ["IntroductionToElementalMagic"],
  },
};

const Electives: {
  [key: string]: {
    name: string;
    courses: Array<string>;
  };
} = {
  CoreMagicStudies: {
    name: "Core Magic Studies",
    courses: [
      Courses.Astronomy1.name,
      Courses.Charms1.name,
      Courses.Charms2.name,
      Courses.DarkArts1.name,
      Courses.DefenseAgainstTheDarkArts1.name,
      Courses.Herbology1.name,
      Courses.Herbology2.name,
      Courses.Potions1.name,
      Courses.HistoryOfMagic1.name,
      Courses.HistoryOfMagic2.name,
    ],
  },
  CoreMagicTheoryAndPractices: {
    name: "Core Magic Theory and Practices",
    courses: [
      Courses.Astronomy1.name,
      Courses.Astronomy2.name,
      Courses.Astronomy3.name,
      Courses.Herbology2.name,
      Courses.Herbology3.name,
      Courses.Potions2.name,
      Courses.Potions3.name,
      Courses.Charms3.name,
      Courses.HistoryOfMagic1.name,
      Courses.HealingMagic2.name,
    ],
  },
  CoreCombatStudies: {
    name: "Core Combat Studies",
    courses: [
      Courses.DarkArts2.name,
      Courses.DarkArts3.name,
      Courses.DefenseAgainstTheDarkArts2.name,
      Courses.Transfiguration1.name,
      Courses.Transfiguration2.name,
    ],
  },
  CoreMuggleStudies: {
    name: "Core Muggle Studies",
    courses: [
      Courses.ComputerScience1.name,
      Courses.IntroductionToMuggleMath.name,
      Courses.MuggleEtiquetteAndTraditions.name,
      Courses.Ethics.name,
    ],
  },
  CommonMuggleElectives: {
    name: "Common Muggle Electives",
    courses: [
      Courses.MuggleMath1.name,
      Courses.MuggleMath2.name,
      Courses.MuggleScience1.name,
      Courses.MuggleScience2.name,
      Courses.MuggleEconomics1.name,
      Courses.MuggleEconomics2.name,
      Courses.MuggleFinancialManagement1.name,
      Courses.MuggleFinancialManagement2.name,
      Courses.ComputerScience2.name,
    ],
  },
  AdvancedMuggleElectives: {
    name: "Advanced Muggle Electives",
    courses: [
      Courses.MuggleMath3.name,
      Courses.MuggleScience3.name,
      Courses.MuggleEconomics3.name,
      Courses.ComputerScience3.name,
      Courses.MuggleComputerInterface.name,
    ],
  },
  IntroCombatElectives: {
    name: "Intro Combat Electives",
    courses: [
      Courses.Apparation1.name,
      Courses.HealingMagic1.name,
      Courses.IntroductionToElementalMagic.name,
      Courses.CombatMagic1.name,
      Courses.Divination1.name,
      Courses.Flying1.name,
    ],
  },
  AdvancedCombatElectives: {
    name: "Advanced Combat Electives",
    courses: [
      Courses.CombatMagic2.name,
      Courses.AardSignMagic.name,
      Courses.IgniSignMagic.name,
      Courses.QuenSignMagic.name,
      Courses.YrdenSignMagic.name,
      Courses.HealingMagic2.name,
      Courses.Aquakinesis.name,
      Courses.Flying2.name,
    ],
  },
  MagicStudiesElectives: {
    name: "Magic Studies Electives",
    courses: [
      Courses.Arithmancy1.name,
      Courses.Alchemy1.name,
      Courses.Alchemy2.name,
      Courses.Divination1.name,
      Courses.MuggleStudies.name,
      Courses.StudyOfAncientRunes.name,
      Courses.CareOfMagicalCreatures.name,
      Courses.FieldStudiesOfMagicalCreatures.name,
      Courses.Telepathy.name,
    ],
  },
  AdvancedMagicTheoryAndPractices: {
    name: "Advanced Magic Theory and Practices",
    courses: [
      Courses.Arithmancy2.name,
      Courses.Alchemy3.name,
      Courses.Apparation2.name,
      Courses.Divination2.name,
      Courses.ExplorationOfNewMagic.name,
      Courses.Telempathy.name,
      Courses.AxiiSignMagic.name,
    ],
  },
  ExtraCurricularSubjects: {
    name: "Extra Curricular Subjects",
    courses: [
      Courses.AncientStudies.name,
      Courses.Art1.name,
      Courses.Art2.name,
      Courses.MuggleArt.name,
      Courses.Flying1.name,
      Courses.Flying2.name,
      Courses.GhoulStudies.name,
      Courses.MagicalTheory.name,
      Courses.Music.name,
      Courses.MuggleMusic.name,
      Courses.MuggleLiterature.name,
      Courses.Cooking.name,
      Courses.Pottery.name,
      Courses.Xylomancy1.name,
      Courses.Xylomancy2.name,
      Courses.Photography.name,
    ],
  },
};

const Requirements1 = [
  [
    {
      type: "elective",
      name: Electives.CoreMagicStudies.name,
      numCourses: 6,
    },
  ],
  [
    {
      type: "elective",
      name: Electives.CoreMagicTheoryAndPractices.name,
      numCourses: 6,
    },
  ],
  [
    {
      type: "elective",
      name: Electives.CoreMuggleStudies.name,
      numCourses: 4,
    },
  ],
  [
    {
      type: "course",
      name: Courses.MuggleMath1.name,
    },
    {
      type: "course",
      name: Courses.MuggleScience1.name,
    },
    {
      type: "elective",
      name: Electives.CommonMuggleElectives.name,
      numCourses: 3,
    },
  ],
  [
    {
      type: "elective",
      name: Electives.AdvancedMuggleElectives.name,
      numCourses: 1,
    },
  ],
  [
    {
      type: "elective&courses",
      bound: "least",
      elective: Electives.MagicStudiesElectives.name,
      courses: [
        Courses.Arithmancy1.name,
        Courses.Alchemy1.name,
        Courses.Alchemy2.name,
        Courses.Divination1.name,
        Courses.Telepathy.name,
      ],
      numCourses: 6,
      numSubCourses: 4,
    },
  ],
  [
    {
      type: "elective",
      name: Electives.ExtraCurricularSubjects.name,
      numCourses: 2,
    },
  ],
];

const Requirements2 = [
  [
    {
      type: "elective",
      name: Electives.CoreMagicStudies.name,
      numCourses: 6,
    },
  ],
  [
    {
      type: "elective",
      name: Electives.CoreCombatStudies.name,
      numCourses: 5,
    },
  ],
  [
    {
      type: "elective",
      name: Electives.CoreMagicTheoryAndPractices.name,
      numCourses: 2,
    },
  ],
  [
    {
      type: "elective",
      name: Electives.CoreMuggleStudies.name,
      numCourses: 4,
    },
  ],
  [
    {
      type: "elective",
      name: Electives.IntroCombatElectives.name,
      numCourses: 4,
    },
  ],
  [
    {
      type: "course",
      name: Courses.MuggleMath1.name,
    },
    {
      type: "course",
      name: Courses.MuggleScience1.name,
    },
    {
      type: "elective",
      name: Electives.CommonMuggleElectives.name,
      numCourses: 2,
    },
  ],
  [
    {
      type: "elective",
      name: Electives.AdvancedCombatElectives.name,
      numCourses: 2,
    },
  ],
  [
    {
      type: "elective&courses",
      bound: "most",
      elective: Electives.MagicStudiesElectives.name,
      courses: [
        Courses.MuggleStudies.name,
        Courses.CareOfMagicalCreatures.name,
        Courses.FieldStudiesOfMagicalCreatures.name,
      ],
      numCourses: 2,
      numSubCourses: 1,
    },
  ],
  [
    {
      type: "elective",
      name: Electives.ExtraCurricularSubjects.name,
      numCourses: 1,
    },
  ],
];

export { Courses, Electives, Requirements1, Requirements2 };

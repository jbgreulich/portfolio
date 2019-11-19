const projects = [
  {
    name: "color library",
    shortDesc: "color manipulation library",
    longDesc: "a random HSL color value generator and color manipulation library - calculates complementary and analagous HSL color values. The following conversions are included: HSL to Hex, HSL to HSV, HSL to RGB, HSV to HSL, RGB to Hex.",
    demo: "https://jbgreulich.github.io/color/",
    code: "https://github.com/jbgreulich/color",
    tech: [
      "javascript",
      "npm",
      "babel",
      "webpack",
    ],
  },
  {
    name: "color scheme",
    shortDesc: "random color generator + color scheme",
    longDesc: "generates a random HSL color value then calculates and displays a five-part complementary color scheme based on the generated color. uses my color library.",
    demo: "https://jbgreulich.github.io/random_color/",
    code: "https://github.com/jbgreulich/random_color",
    tech: [
      "html5",
      "css3",
      "javascript",
      "babel",
      "webpack",
    ],
  },
  {
    name: "ravenous",
    shortDesc: "search for restaurants using the Yelp API",
    longDesc: "a start-to-finish, Yelp-like clone uses react to build the UI and fetch() to consume the Yelp API.",
    demo: "https://jbgreulich.github.io/ravenous/",
    code: "https://github.com/jbgreulich/ravenous",
    tech: [
      "html5",
      "css3",
      "javascript",
      "react",
    ],
  },
  {
    name: "boss machine",
    shortDesc: "an API to serve info to a management app",
    longDesc: "created server, API, and middleware, built routes, and used helper functions to communicate with database for an existing UI.",
    demo: "",
    code: "https://github.com/jbgreulich/bossMachine/tree/master/server",
    tech: [
      "javascript",
      "expressjs",
      "nodejs",
      "mocha"
    ],
  },
  {
    name: "choreBot",
    shortDesc: "a simple .js game",
    longDesc: "a single page, dynamic website using vanilla javascript that plays a fully functional game.",
    demo: "https://jbgreulich.github.io/choreBot/",
    code: "https://github.com/jbgreulich/choreBot",
    tech: [
      "html5",
      "css3",
      "javascript",
    ],
  },
  {
    name: "lodash capstone",
    shortDesc: "re-create methods from the lodash library",
    longDesc: "reimplemented ten methods from lodash for the major data types: numbers, strings, arrays, and objects",
    demo: "",
    code: "https://github.com/jbgreulich/LodashCapstone",
    tech: [
      "javascript",
    ],
  },
  {
    name: "colmar academy",
    shortDesc: "html and css final project",
    longDesc: "a responsive landing page for fictional academy - design and responsiveness implemented from wireframes.",
    demo: "https://jbgreulich.github.io/colmarAcademy/",
    code: "https://github.com/jbgreulich/colmarAcademy",
    tech: [
      "html5",
      "css3"
    ],
  },
  {
    name: "personal portfolio",
    shortDesc: "a site to host my projects",
    longDesc: "thanks for looking!",
    demo: "",
    code: "https://github.com/jbgreulich/portfolio",
    tech: [
      "html5",
      "css3",
      "javascript",
      "react",
      "webpack",
      "babel",
    ],
  }
];

export default projects;
// Storage objects for locales and styles
var kcite_locales = {
  "en-US": `<?xml version="1.0" encoding="utf-8"?>
<locale xmlns="http://purl.org/net/xbiblio/csl" version="1.0" xml:lang="en-US">
  <info>
    <translator>
      <name>Andrew Dunning</name>
    </translator>
  </info>
  <style-options punctuation-in-quote="false"/>
  <date form="text">
    <date-part name="month" suffix=" "/>
    <date-part name="day" suffix=", "/>
    <date-part name="year"/>
  </date>
  <date form="numeric">
    <date-part name="month" form="numeric-leading-zeros" suffix="/"/>
    <date-part name="day" form="numeric-leading-zeros" suffix="/"/>
    <date-part name="year"/>
  </date>
  <terms>
    <term name="accessed">accessed</term>
    <term name="and">and</term>
    <term name="and others">and others</term>
    <term name="anonymous">anonymous</term>
    <term name="anonymous" form="short">anon</term>
    <term name="at">at</term>
    <term name="available at">available at</term>
    <term name="by">by</term>
    <term name="circa">circa</term>
    <term name="circa" form="short">c</term>
    <term name="cited">cited</term>
    <term name="edition">
      <single>edition</single>
      <multiple>editions</multiple>
    </term>
    <term name="edition" form="short">ed</term>
    <term name="et-al">et al.</term>
    <term name="forthcoming">forthcoming</term>
    <term name="from">from</term>
    <term name="ibid">ibid.</term>
    <term name="in">in</term>
    <term name="in press">in press</term>
    <term name="internet">internet</term>
    <term name="interview">interview</term>
    <term name="letter">letter</term>
    <term name="no date">no date</term>
    <term name="no date" form="short">n.d.</term>
    <term name="online">online</term>
    <term name="presented at">presented at the</term>
    <term name="reference">
      <single>reference</single>
      <multiple>references</multiple>
    </term>
    <term name="reference" form="short">
      <single>ref</single>
      <multiple>refs</multiple>
    </term>
    <term name="retrieved">retrieved</term>
    <term name="scale">scale</term>
    <term name="version">version</term>
    <term name="ad">AD</term>
    <term name="bc">BC</term>
    <term name="ordinal">th</term>
    <term name="ordinal-01">st</term>
    <term name="ordinal-02">nd</term>
    <term name="ordinal-03">rd</term>
    <term name="ordinal-11">th</term>
    <term name="ordinal-12">th</term>
    <term name="ordinal-13">th</term>
    <term name="long-ordinal-01">first</term>
    <term name="long-ordinal-02">second</term>
    <term name="long-ordinal-03">third</term>
    <term name="long-ordinal-04">fourth</term>
    <term name="long-ordinal-05">fifth</term>
    <term name="long-ordinal-06">sixth</term>
    <term name="long-ordinal-07">seventh</term>
    <term name="long-ordinal-08">eighth</term>
    <term name="long-ordinal-09">ninth</term>
    <term name="long-ordinal-10">tenth</term>
    <term name="category-label">
      <single>section</single>
      <multiple>sections</multiple>
    </term>
    <term name="category-label" form="short">
      <single>sec</single>
      <multiple>secs</multiple>
    </term>
    <term name="chapter">
      <single>chapter</single>
      <multiple>chapters</multiple>
    </term>
    <term name="chapter" form="short">
      <single>chap</single>
      <multiple>chaps</multiple>
    </term>
    <term name="column">
      <single>column</single>
      <multiple>columns</multiple>
    </term>
    <term name="column" form="short">
      <single>col</single>
      <multiple>cols</multiple>
    </term>
    <term name="figure">
      <single>figure</single>
      <multiple>figures</multiple>
    </term>
    <term name="figure" form="short">
      <single>fig</single>
      <multiple>figs</multiple>
    </term>
    <term name="folio">
      <single>folio</single>
      <multiple>folios</multiple>
    </term>
    <term name="folio" form="short">
      <single>fol</single>
      <multiple>fols</multiple>
    </term>
    <term name="issue">
      <single>number</single>
      <multiple>numbers</multiple>
    </term>
    <term name="issue" form="short">
      <single>no</single>
      <multiple>nos</multiple>
    </term>
    <term name="line">
      <single>line</single>
      <multiple>lines</multiple>
    </term>
    <term name="line" form="short">
      <single>l</single>
      <multiple>ll</multiple>
    </term>
    <term name="note">
      <single>note</single>
      <multiple>notes</multiple>
    </term>
    <term name="note" form="short">
      <single>n</single>
      <multiple>nn</multiple>
    </term>
    <term name="opus">
      <single>opus</single>
      <multiple>opera</multiple>
    </term>
    <term name="opus" form="short">
      <single>op</single>
      <multiple>opp</multiple>
    </term>
    <term name="page">
      <single>page</single>
      <multiple>pages</multiple>
    </term>
    <term name="page" form="short">
      <single>p</single>
      <multiple>pp</multiple>
    </term>
    <term name="number-of-pages">
      <single>page</single>
      <multiple>pages</multiple>
    </term>
    <term name="number-of-pages" form="short">
      <single>p</single>
      <multiple>pp</multiple>
    </term>
    <term name="paragraph">
      <single>paragraph</single>
      <multiple>paragraphs</multiple>
    </term>
    <term name="paragraph" form="short">
      <single>para</single>
      <multiple>paras</multiple>
    </term>
    <term name="part">
      <single>part</single>
      <multiple>parts</multiple>
    </term>
    <term name="part" form="short">
      <single>pt</single>
      <multiple>pts</multiple>
    </term>
    <term name="section">
      <single>section</single>
      <multiple>sections</multiple>
    </term>
    <term name="section" form="short">
      <single>sec</single>
      <multiple>secs</multiple>
    </term>
    <term name="sub verbo">
      <single>sub verbo</single>
      <multiple>sub verbis</multiple>
    </term>
    <term name="sub verbo" form="short">
      <single>s.v.</single>
      <multiple>s.vv.</multiple>
    </term>
    <term name="verse">
      <single>verse</single>
      <multiple>verses</multiple>
    </term>
    <term name="verse" form="short">
      <single>v</single>
      <multiple>vv</multiple>
    </term>
    <term name="volume">
      <single>volume</single>
      <multiple>volumes</multiple>
    </term>
    <term name="volume" form="short">
      <single>vol</single>
      <multiple>vols</multiple>
    </term>
    <term name="book">
      <single>book</single>
      <multiple>books</multiple>
    </term>
    <term name="book" form="short">
      <single>bk</single>
      <multiple>bks</multiple>
    </term>
    <term name="opus">
      <single>opus</single>
      <multiple>opera</multiple>
    </term>
    <term name="opus" form="short">
      <single>op</single>
      <multiple>opp</multiple>
    </term>
    <term name="container-title" form="short">in</term>
    <term name="et-al">et al.</term>
  </terms>
</locale>`,
};
var kcite_styles = {
  apa: null, // Will be loaded on demand
};

// Default settings - will be overridden by WordPress settings if available
var kcite_default_style = "apa";
var kcite_default_locale = "en-US";

// Load WordPress settings if available
if (typeof window.kciteSettings !== "undefined") {
  kcite_default_style =
    window.kciteSettings.defaultStyle || kcite_default_style;
  kcite_default_locale =
    window.kciteSettings.defaultLocale || kcite_default_locale;
}

// Helper function to get script path
function getScriptPath() {
  var scriptPath = "";
  var scripts = document.getElementsByTagName("script");
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].src && scripts[i].src.indexOf("kcite") !== -1) {
      scriptPath = scripts[i].src.substring(
        0,
        scripts[i].src.lastIndexOf("/") + 1
      );
      break;
    }
  }
  return scriptPath;
}

// Locale loading functions
async function loadLocaleFromFile(localeName, filePath) {
  var fullPath = getScriptPath() + filePath;

  try {
    const response = await fetch(fullPath);
    if (response.ok) {
      const localeContent = await response.text();
      kcite_locales[localeName] = localeContent;
      console.log(`Successfully loaded locale: ${localeName} from ${fullPath}`);
      return localeContent;
    } else {
      throw new Error(`Failed to load locale file: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error loading locale file ${fullPath}:`, error);
    throw error;
  }
}

// Function to load multiple locale files
async function loadAllLocales() {
  const localesToLoad = [
    "de-DE",
    "en-GB",
    "en-US",
    "es-ES",
    "fr-FR",
    "it-IT",
    "ja-JP",
    "pt-BR",
    "zh-CN",
  ];

  for (const localeName of localesToLoad) {
    try {
      await loadLocaleFromFile(localeName, "locales-" + localeName + ".xml");
      console.log(`Loaded locale: ${localeName}`);
    } catch (error) {
      console.warn(`Failed to load locale ${localeName}:`, error);
    }
  }
}

// Function to get available locales
function getAvailableLocales() {
  return Object.keys(kcite_locales);
}

// Function to check if a locale is available
function isLocaleAvailable(localeName) {
  return localeName in kcite_locales;
}

// Function to set the current locale
async function setCurrentLocale(localeName) {
  if (isLocaleAvailable(localeName)) {
    kcite_default_locale = localeName;
    return true;
  }

  // Try to load the locale if not available
  var fileName = "locales-" + localeName + ".xml";
  try {
    var locale = await loadLocaleFromFile(localeName, fileName);
    kcite_default_locale = localeName;
    return true;
  } catch (error) {
    console.warn(
      `Locale "${localeName}" is not available and could not be loaded`
    );
    return false;
  }
}

// Function to get the current locale
function getCurrentLocale() {
  return kcite_default_locale || "en-US";
}

// Enhanced locale retrieval function that can load locales on demand
async function getLocale(localeName) {
  // If no locale specified, use current locale
  if (!localeName) {
    localeName = getCurrentLocale();
  }

  // If locale is already loaded, return it
  if (kcite_locales[localeName]) {
    return kcite_locales[localeName];
  }

  // Try to load it asynchronously if not available
  var fileName = "locales-" + localeName + ".xml";
  try {
    var locale = await loadLocaleFromFile(localeName, fileName);
    return locale;
  } catch (error) {
    // Fallback to default locale
    return kcite_locales[kcite_default_locale] || kcite_locales["en-US"];
  }
}

// Synchronous locale retrieval for CSL Engine compatibility
function getLocaleSync(localeName) {
  // If no locale specified, use current locale
  if (!localeName) {
    localeName = getCurrentLocale();
  }

  // Return already loaded locale or null
  return (
    kcite_locales[localeName] ||
    kcite_locales[kcite_default_locale] ||
    kcite_locales["en-US"] ||
    null
  );
}

// Function to get available styles
function getAvailableStyles() {
  return {
    "american-chemical-society": "ACS",
    apa: "APA",
    "chicago-author-date": "Chicago Manual of Style (Author-Date)",
    "harvard-cite-them-right": "Harvard",
    ieee: "IEEE",
    "modern-language-association": "MLA",
    nature: "Nature",
    vancouver: "Vancouver",
  };
}

// Function to get all loaded styles
function getLoadedStyles() {
  return Object.keys(kcite_styles);
}

// Function to check if a style is available
function isStyleAvailable(styleName) {
  // Check if style is already loaded
  if (styleName in kcite_styles) {
    return true;
  }
  // Check if style is in the list of known styles
  return styleName in getAvailableStyles();
}

// Function to set the current style
async function setCurrentStyle(styleName) {
  if (isStyleAvailable(styleName)) {
    kcite_default_style = styleName;
    return true;
  }

  // Try to load the style if not available
  var fileName = styleName + ".csl";
  try {
    var style = await loadCSLStyleFromFile(styleName, fileName);
    kcite_default_style = styleName;
    return true;
  } catch (error) {
    console.warn(
      `Style "${styleName}" is not available and could not be loaded`
    );
    return false;
  }
}

// Function to get the current style
function getCurrentStyle() {
  return kcite_default_style || "apa";
}

// Enhanced style retrieval function that can load styles on demand
async function getStyle(styleName) {
  // If no style specified, use current style
  if (!styleName) {
    styleName = getCurrentStyle();
  }

  // If style is already loaded, return it
  if (kcite_styles[styleName]) {
    return kcite_styles[styleName];
  }

  // Try to load it asynchronously if not available
  var fileName = styleName + ".csl";
  try {
    var style = await loadCSLStyleFromFile(styleName, fileName);
    return style;
  } catch (error) {
    // Fallback to default style
    return kcite_styles[kcite_default_style] || kcite_styles["apa"];
  }
}

// Function to load CSL style from local file
async function loadCSLStyleFromFile(styleName, filePath) {
  var fullPath = getScriptPath() + filePath;

  try {
    const response = await fetch(fullPath);
    if (response.ok) {
      const styleContent = await response.text();
      kcite_styles[styleName] = styleContent;
      console.log(`Successfully loaded style: ${styleName} from ${fullPath}`);
      return styleContent;
    } else {
      throw new Error(`Failed to load CSL file: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error loading CSL file ${fullPath}:`, error);
    throw error;
  }
}

// Function to load multiple CSL files
async function loadAllCSLStyles() {
  const stylesToLoad = [
    "american-chemical-society",
    "apa",
    "chicago-author-date",
    "harvard-cite-them-right",
    "ieee",
    "modern-language-association",
    "nature",
    "vancouver",
  ];

  for (const styleName of stylesToLoad) {
    try {
      await loadCSLStyleFromFile(styleName, styleName + ".csl");
      console.log(`Loaded style: ${styleName}`);
    } catch (error) {
      console.warn(`Failed to load style ${styleName}:`, error);
    }
  }
}

// Function to preload all available locales
async function loadAllLocales() {
  const localesToLoad = [
    "de-DE",
    "en-GB",
    "en-US",
    "es-ES",
    "fr-FR",
    "it-IT",
    "ja-JP",
    "pt-BR",
    "zh-CN",
  ];

  for (const localeName of localesToLoad) {
    try {
      await loadLocaleFromFile(localeName, `locales-${localeName}.xml`);
      console.log(`Loaded locale: ${localeName}`);
    } catch (error) {
      console.warn(`Failed to load locale ${localeName}:`, error);
    }
  }
}

// Load CSL styles and locales when the page loads
if (typeof window !== "undefined") {
  window.addEventListener("load", async function () {
    try {
      // Load styles and locales in parallel
      await Promise.all([loadAllCSLStyles(), loadAllLocales()]);
      console.log("All styles and locales loaded successfully");
    } catch (error) {
      console.error("Error loading styles or locales:", error);
    }
  });
}

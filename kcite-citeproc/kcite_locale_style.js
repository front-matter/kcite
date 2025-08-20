// Storage objects for locales and styles
var kcite_locales = {
  "en-US": null, // Will be loaded on demand or from embedded data
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

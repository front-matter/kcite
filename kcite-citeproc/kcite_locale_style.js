// Storage objects for locales and styles
var kcite_locales = {
  "en-US": null, // Will be loaded on demand or from embedded data
};
var kcite_styles = {
  apa: null, // Will be loaded on demand
};

// Default settings - can be overridden by WordPress settings
var kcite_default_style = "apa";
var kcite_default_locale = "en-US";

// Locale loading functions
function loadLocaleFromFile(localeName, filePath) {
  return new Promise((resolve, reject) => {
    // Try to construct the full path relative to the current script location
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

    var fullPath = scriptPath + filePath;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", fullPath, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // Add the loaded locale to kcite_locales
          kcite_locales[localeName] = xhr.responseText;
          console.log(
            `Successfully loaded locale: ${localeName} from ${fullPath}`
          );
          resolve(xhr.responseText);
        } else {
          reject(new Error(`Failed to load locale file: ${xhr.status}`));
        }
      }
    };
    xhr.send();
  });
}

function loadLocaleSync(localeName, filePath) {
  // Try to construct the full path relative to the current script location
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

  var fullPath = scriptPath + filePath;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", fullPath, false); // Synchronous request
  try {
    xhr.send();
    if (xhr.status === 200) {
      kcite_locales[localeName] = xhr.responseText;
      console.log(`Successfully loaded locale: ${localeName} from ${fullPath}`);
      return xhr.responseText;
    } else {
      console.error(`Failed to load locale file ${fullPath}: ${xhr.status}`);
      return null;
    }
  } catch (error) {
    console.error(`Error loading locale file ${fullPath}:`, error);
    return null;
  }
}

// Function to load multiple locale files
async function loadAllLocales() {
  const localesToLoad = ["de-DE", "fr-FR", "es-ES", "en-US"];

  for (const localeName of localesToLoad) {
    try {
      await loadLocaleFromFile(
        localeName,
        "locale_" + localeName.toLowerCase() + ".xml"
      );
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
function setCurrentLocale(localeName) {
  if (isLocaleAvailable(localeName)) {
    kcite_default_locale = localeName;
    return true;
  }

  // Try to load the locale if not available
  var fileName = "locale_" + localeName.toLowerCase() + ".xml";
  var locale = loadLocaleSync(localeName, fileName);
  if (locale) {
    kcite_default_locale = localeName;
    return true;
  }

  console.warn(
    `Locale "${localeName}" is not available and could not be loaded`
  );
  return false;
}

// Function to get the current locale
function getCurrentLocale() {
  return kcite_default_locale || "en-US";
}

// Enhanced locale retrieval function that can load locales on demand
function getLocale(localeName) {
  // If no locale specified, use current locale
  if (!localeName) {
    localeName = getCurrentLocale();
  }

  // If locale is already loaded, return it
  if (kcite_locales[localeName]) {
    return kcite_locales[localeName];
  }

  // Try to load it synchronously if not available
  var fileName = "locale_" + localeName.toLowerCase() + ".xml";
  var locale = loadLocaleSync(localeName, fileName);

  return (
    locale || kcite_locales[kcite_default_locale] || kcite_locales["en-US"]
  ); // Fallback to default locale
}

// Function to load CSL style synchronously (for immediate use)
function loadCSLStyleSync(styleName, filePath) {
  // Try to construct the full path relative to the current script location
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

  var fullPath = scriptPath + filePath;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", fullPath, false); // Synchronous request
  try {
    xhr.send();
    if (xhr.status === 200) {
      kcite_styles[styleName] = xhr.responseText;
      console.log(`Successfully loaded style: ${styleName} from ${fullPath}`);
      return xhr.responseText;
    } else {
      console.error(`Failed to load CSL file ${fullPath}: ${xhr.status}`);
      return null;
    }
  } catch (error) {
    console.error(`Error loading CSL file ${fullPath}:`, error);
    return null;
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
function setCurrentStyle(styleName) {
  if (isStyleAvailable(styleName)) {
    kcite_default_style = styleName;
    return true;
  }

  // Try to load the style if not available
  var fileName = styleName + ".csl";
  var style = loadCSLStyleSync(styleName, fileName);
  if (style) {
    kcite_default_style = styleName;
    return true;
  }

  console.warn(`Style "${styleName}" is not available and could not be loaded`);
  return false;
}

// Function to get the current style
function getCurrentStyle() {
  return kcite_default_style || "apa";
}

// Enhanced style retrieval function that can load styles on demand
function getStyle(styleName) {
  // If no style specified, use current style
  if (!styleName) {
    styleName = getCurrentStyle();
  }

  // If style is already loaded, return it
  if (kcite_styles[styleName]) {
    return kcite_styles[styleName];
  }

  // Try to load it synchronously if not available
  var fileName = styleName + ".csl";
  var style = loadCSLStyleSync(styleName, fileName);

  return style || kcite_styles[kcite_default_style] || kcite_styles["apa"]; // Fallback to default style
}

// Function to load CSL style from local file
function loadCSLStyleFromFile(styleName, filePath) {
  return new Promise((resolve, reject) => {
    // Try to construct the full path relative to the current script location
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

    var fullPath = scriptPath + filePath;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", fullPath, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          // Add the loaded style to kcite_styles
          kcite_styles[styleName] = xhr.responseText;
          console.log(
            `Successfully loaded style: ${styleName} from ${fullPath}`
          );
          resolve(xhr.responseText);
        } else {
          reject(new Error(`Failed to load CSL file: ${xhr.status}`));
        }
      }
    };
    xhr.send();
  });
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

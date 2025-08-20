/*
  Copyright (c) 2011.
  Phillip Lord (phillip.lord@newcastle.ac.uk) and
  Newcastle University. 

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

// ====================================================================
// LOCALE AND STYLE MANAGEMENT SYSTEM
// ====================================================================

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
      await loadLocaleFromFile(
        localeName,
        "locales/locales-" + localeName + ".xml"
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
async function setCurrentLocale(localeName) {
  if (isLocaleAvailable(localeName)) {
    kcite_default_locale = localeName;
    return true;
  }

  // Try to load the locale if not available
  var fileName = "locales/locales-" + localeName + ".xml";
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
  var fileName = "locales/locales-" + localeName + ".xml";
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

// Synchronous style retrieval for immediate access
function getStyleSync(styleName) {
  // If no style specified, use current style
  if (!styleName) {
    styleName = getCurrentStyle();
  }

  // Return already loaded style or null
  return (
    kcite_styles[styleName] ||
    kcite_styles[kcite_default_style] ||
    kcite_styles["apa"] ||
    null
  );
}

// Legacy function name for compatibility
function loadCSLStyleSync(styleName, fileName) {
  return getStyleSync(styleName);
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
  var fileName = "styles/" + styleName + ".csl";
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
  var fileName = "styles/" + styleName + ".csl";
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
      await loadCSLStyleFromFile(styleName, "styles/" + styleName + ".csl");
      console.log(`Loaded style: ${styleName}`);
    } catch (error) {
      console.warn(`Failed to load style ${styleName}:`, error);
    }
  }
}

// Function to preload all available locales
async function loadAllLocalesAsync() {
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
      await loadLocaleFromFile(localeName, `locales/locales-${localeName}.xml`);
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
      await Promise.all([loadAllCSLStyles(), loadAllLocalesAsync()]);
      console.log("All styles and locales loaded successfully");
    } catch (error) {
      console.error("Error loading styles or locales:", error);
    }
  });
}

// ====================================================================
// KCITE CITATION PROCESSING AND OUTPUT
// ====================================================================

// modify the HTML output format so that the bibliography hyperlinks
CSL.Output.Formats.kcite = CSL.Output.Formats.html;
CSL.Output.Formats.kcite["@bibliography/entry"] = function (state, str) {
  return (
    '  <div class="csl-entry">' +
    '<a name="' +
    this.item_id +
    '"></a>' +
    str +
    "\n"
  );
};

// kcite output is not hyperlinked or any such. These functions apply filters
// to make it better. As these are style specific they don't need to be
// clever, and can depend on the style details
var kcite_style_cleaner = {};
kcite_style_cleaner["apa"] = function (bib_item) {
  // URL linkify here - supports both http and https
  var httpPos = bib_item.lastIndexOf("http://");
  var httpsPos = bib_item.lastIndexOf("https://");
  var urlStart = Math.max(httpPos, httpsPos);

  if (urlStart === -1) {
    return bib_item;
  }

  var url = bib_item.substring(urlStart, bib_item.length);

  // Validate that we have a reasonable URL
  if (url.length < 10 || !url.match(/^https?:\/\/.+\..+/)) {
    return bib_item;
  }

  // Replace the URL with a clickable link
  return (
    bib_item.substring(0, urlStart) + '<a href="' + url + '">' + url + "</a>"
  );
};

kcite_style_cleaner["nature"] = function (bib_item) {
  //return bib_item;
  var start_url = bib_item.lastIndexOf("&#60;");
  var end_url = bib_item.lastIndexOf("&#62;");
  if (start_url == -1 || end_url == -1) {
    return bib_item;
  }
  // skip entity
  var start_url = start_url + 5;
  var url = bib_item.substring(start_url, end_url);
  return (
    bib_item.substring(0, start_url) +
    '<a href="' +
    url +
    '">' +
    url +
    "</a>" +
    bib_item.substring(end_url)
  );
};

jQuery.noConflict();
jQuery(document).ready(function ($) {
  var kcite_controls_shown = false;

  var current_style = function (style) {
    if (style) {
      kcite_default_style = style;
    } else {
      style = kcite_default_style;
    }

    return style;
  };

  var get_style = function () {
    var styleName = current_style();
    var style = kcite_styles[styleName];

    // If style is not loaded or is null, try to load from CSL file
    if (!style) {
      var cslFileName = "styles/" + styleName + ".csl";
      style = loadCSLStyleSync(styleName, cslFileName);
    }

    // If still no style, try fallback styles
    if (!style) {
      console.warn("Style '" + styleName + "' not found, trying fallbacks...");
      style = kcite_styles[kcite_default_style] || kcite_styles["apa"] || null;

      if (!style) {
        console.error(
          "No fallback styles available. Please ensure at least one CSL style is loaded."
        );
      }
    }

    return style;
  };

  var render = function (citation_data, kcite_section, kcite_section_id) {
    var task_queue = [];

    var section_contains_unresolved = false;
    var section_contains_timeout = false;

    var sys = {
      retrieveItem: function (id) {
        return citation_data[id];
      },

      retrieveLocale: function (lang) {
        return getLocaleSync(lang) || kcite_locales[lang] || null;
      },
    };

    // instantiate the citeproc object
    var style = get_style();
    if (!style) {
      console.error("No valid CSL style available. Cannot create CSL.Engine.");
      return;
    }
    var citeproc = new CSL.Engine(sys, style);

    // set the modified output format
    citeproc.setOutputFormat("kcite");

    // store all the ids that we are going to use. We register these with
    // citeproc, which should mean that references which would otherwise
    // be identical, can be disambiguated ("2011a, 2011b").
    var cite_ids = [];

    // select all of the kcite citations
    kcite_section.find(".kcite").each(function (index) {
      var cite_id = $(this).attr("kcite-id");
      var cite = sys.retrieveItem(cite_id);
      // not sure about closure semantics with jquery -- this might not be necessary
      var kcite_element = $(this);

      if (cite["resolved"]) {
        cite_ids.shift(cite_id);
        //console.log( "push cite_id" + cite_id );
        // check here whether resolved == true before proceeding.
        var citation_object = {
          citationItems: [
            {
              id: $(this).attr("kcite-id"),
            },
          ],
          properties: {
            noteIndex: index - 1,
          },
        };

        // add in the citation and bibliography fetch the citation. In
        // this case, the citation to be included is hard coded.

        // TODO the citation object returned may include errors which we
        // haven't checked for here.
        task_queue.push(function () {
          var cite_id = kcite_element.attr("kcite-id");
          var cite = sys.retrieveItem(cite_id);

          // the true here should mean that citeproc always
          // returns only a single element array. It doesn't
          // seem to work, as ambiguous cases still return more.
          //console.log( "appending cite" );
          var citation = citeproc.appendCitationCluster(citation_object, true);
          //console.log( citation );
          // citeproc's wierd return values. Last element is citation we want.
          // last element again is the HTML.
          var citation_string = citation.pop().pop();

          var citation =
            '<a href="#' +
            cite_id +
            '">' +
            citation_string +
            "</a>" +
            '<a href="' +
            cite["URL"] +
            '">*</a>';

          kcite_element.html(citation);
        });
      }
      // so we have an unresolved element
      else {
        var cite = sys.retrieveItem(cite_id);
        var url = cite["URL"];
        var link = '(<a href="' + url + '">' + url + "</a>)";

        // if this is a simple timeout
        if (cite["timeout"]) {
          task_queue.push(function () {
            kcite_element.html(link + '<a href="#kcite-timeout">*</a>');
          });
          section_contains_timeout = true;
        }
        // there is some other error
        else {
          task_queue.push(function () {
            kcite_element.html(link + '<a href="#kcite-unresolved">*</a>');
          });
          section_contains_unresolved = true;
        }
      }
    });

    // we have all the IDs now, but haven't calculated the in text
    // citations. So, we need to update citeproc to get the disambiguation
    // correct.
    task_queue.unshift(function () {
      // update citeproc with all the ids we will use (which will happen
      // when we tail recurse). this method call is a little problematic and
      // can cause timeout with large numbers of references

      //console.log( "update items with true" );
      citeproc.updateItems(cite_ids, true);
    });

    var kcite_bib_element = kcite_section;

    task_queue.push(function () {
      // make the bibliography, and add all the items in.
      var bib_string = "";

      $.each(citeproc.makeBibliography()[1], function (index, item) {
        if (kcite_style_cleaner[current_style()]) {
          bib_string = bib_string + kcite_style_cleaner[current_style()](item);
        } else {
          bib_string = bib_string + item;
        }
      });

      if (section_contains_timeout) {
        bib_string =
          bib_string +
          '<p><a name="kcite-timeout"></a>' +
          '<a href="http://knowledgeblog.org/kcite-plugin/">Kcite</a> was unable to ' +
          "retrieve citation information for all the references, due to a timeout. This " +
          "is done to prevent an excessive number of requests to the services providing " +
          "this information. More references should appear on subsequent page views.</p>";
      }
      if (section_contains_unresolved) {
        bib_string =
          bib_string +
          '<p><a name="kcite-unresolved"></a>' +
          '<a href="http://knowledgeblog.org/kcite-plugin/">Kcite</a> was unable to ' +
          "retrieve citation information for all the references. This could be because " +
          "the wrong identifier has been used, or it is not present in the remote " +
          "databases.</p>";
      }

      // dump the bibliography into the document
      kcite_bib_element.find(".kcite-bibliography").html(bib_string);
      var section_id;

      // switch on or off from kcite.php
      if (citeproc_controls) {
        // set up main div elements
        var control_outer = $(
          '<div class="kcite-bibliography-control-outer"></div>'
        );
        var control_inner = $(
          '<div class="kcite-bibliography-control-inner"></div>'
        );

        control_inner.toggle(kcite_controls_shown);
        control_inner.appendTo(control_outer);

        var control = $("<button>Control</button>");
        control.button();
        control.click(function () {
          kcite_controls_shown = !kcite_controls_shown;
          control_inner.toggle(kcite_controls_shown);
        });
        control.prependTo(control_outer);

        var reload = $("<button>Reload</button>");
        reload.button();
        reload.click(function () {
          load_bibliography();
        });
        reload.appendTo(control_inner);

        var style = $(
          '<div class="kcite-style">\
<input type="radio" name="kcite-style' +
            kcite_section_id +
            '">Author</input>\
<input type="radio" name="kcite-style' +
            kcite_section_id +
            '">Numeric</input>\
<input type="radio" name="kcite-style' +
            kcite_section_id +
            '">Numeric 2</input>\
</div>'
        );
        style.buttonset();

        style
          .find(":radio")
          .eq(0)
          .click(function () {
            current_style("apa");
          });

        if (current_style() == "apa") {
          style.find(":radio").eq(0).prop("checked", "true");
        }

        style
          .find(":radio")
          .eq(1)
          .click(function () {
            current_style("numeric");
          });

        if (current_style() == "numeric") {
          style.find(":radio").eq(1).prop("checked", "true");
        }

        style
          .find(":radio")
          .eq(2)
          .click(function () {
            current_style("numeric2");
          });

        if (current_style() == "numeric2") {
          style.find(":radio").eq(2).prop("checked", "true");
        }

        style.appendTo(control_inner);

        // insert into page
        control_outer.prependTo(kcite_bib_element.find(".kcite-bibliography"));
      } // end citeproc controls
    });

    // now we have all the work in place, just need to run everything.
    var iter = function () {
      if (task_queue.length == 0) {
        return;
      }

      // run next event
      task_queue.shift()();

      // tail-end recurse with timeout 100 gap is a compromise. If
      // this is set higher rendering takes longer on all machines, too
      // low, and we get unresponsive script errors.
      setTimeout(iter, 200);
    };

    iter();
  };

  var broken = function (kcite_section) {
    // dump the bibliography into the document
    kcite_section.find(".kcite-bibliography").html(
      '<p><a href="http://knowledgeblog.org/kcite-plugin/">Kcite</a> is unable \
to generate the references due to an internal error.</p>'
    );
  };

  var load_bibliography = function () {
    $(".kcite-section")
      .has(".kcite-bibliography")
      .each(function () {
        var kcite_section = $(this);
        var kcite_section_id = $(this).attr("kcite-section-id");
        $.ajax({
          // hmm, security trap here if we serve from localhost
          url: blog_home_url,
          data: { "kcite-p": kcite_section_id, "kcite-format": "json" },
          type: "GET",
          dataType: "json",
          success: function (data) {
            render(data, kcite_section, kcite_section_id);
          },
          error: function (xhr, status) {
            broken(kcite_section);
          },
        });
      });
  };

  load_bibliography();
});

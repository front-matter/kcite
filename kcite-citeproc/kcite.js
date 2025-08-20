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
  apa: `<?xml version="1.0" encoding="utf-8"?>
<style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0" demote-non-dropping-particle="never" page-range-format="expanded">
  <info>
    <title>American Psychological Association 7th edition</title>
    <title-short>APA</title-short>
    <id>http://www.zotero.org/styles/apa</id>
    <link href="http://www.zotero.org/styles/apa" rel="self"/>
    <link href="http://www.zotero.org/styles/apa-6th-edition" rel="template"/>
    <link href="https://apastyle.apa.org/style-grammar-guidelines/references/examples" rel="documentation"/>
    <author>
      <name>Brenton M. Wiernik</name>
      <email>zotero@wiernik.org</email>
    </author>
    <category citation-format="author-date"/>
    <category field="psychology"/>
    <category field="generic-base"/>
    <updated>2024-07-09T20:08:41+00:00</updated>
    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>
  </info>
  <locale xml:lang="en">
    <terms>
      <term name="editortranslator" form="short">
        <single>ed. &amp; trans.</single>
        <multiple>eds. &amp; trans.</multiple>
      </term>
      <term name="editor-translator" form="short">
        <single>ed. &amp; trans.</single>
        <multiple>eds. &amp; trans.</multiple>
      </term>
      <term name="translator" form="short">trans.</term>
      <term name="interviewer" form="short">
        <single>interviewer</single>
        <multiple>interviewers</multiple>
      </term>
      <term name="collection-editor" form="short">
        <single>ed.</single>
        <multiple>eds.</multiple>
      </term>
      <term name="performer" form="verb">recorded by</term>
      <term name="circa" form="short">ca.</term>
      <term name="bc"> B.C.E.</term>
      <term name="ad"> C.E.</term>
      <term name="issue" form="long">
        <single>issue</single>
        <multiple>issues</multiple>
      </term>
      <term name="software">computer software</term>
      <term name="at" form="long">before the</term>
      <term name="collection">archival collection</term>
      <term name="post">online post</term>
      <term name="at" form="long">before the</term>
      <term name="hearing" form="verb">testimony of</term>
      <term name="review-of" form="long">review of the</term>
      <term name="review-of" form="short">review of</term>
    </terms>
  </locale>
  <locale xml:lang="da">
    <terms>
      <term name="et-al">et al.</term>
    </terms>
  </locale>
  <locale xml:lang="de">
    <terms>
      <term name="et-al">et al.</term>
    </terms>
  </locale>
  <locale xml:lang="es">
    <terms>
      <term name="from">de</term>
    </terms>
  </locale>
  <locale xml:lang="fr">
    <terms>
      <term name="editor" form="short">
        <single>éd.</single>
        <multiple>éds.</multiple>
      </term>
    </terms>
  </locale>
  <locale xml:lang="nb">
    <terms>
      <term name="et-al">et al.</term>
    </terms>
  </locale>
  <locale xml:lang="nl">
    <terms>
      <term name="et-al">et al.</term>
    </terms>
  </locale>
  <locale xml:lang="nn">
    <terms>
      <term name="et-al">et al.</term>
    </terms>
  </locale>
  <locale xml:lang="ro">
    <terms>
      <term name="et-al">et al.</term>
    </terms>
  </locale>
  <!-- For Indigeneous Knowledge, assume the item is stored as document or speech
       and that Nation/Community, treaty, where the Elder lives, 
       and topic are all stored in title
       cf. https://libguides.norquest.ca/c.php?g=314831&p=5188823.
       If the item is stored as interview, assume that Nation/Community, treat, and topic
       are stored in title, 'Oral teaching' or similar is stored in archive, and where
       the Elder lives is stored in archive-place. 
  -->
  <!-- Reviews are detected if an item has type review or review-book or if it has any of the variables
       reviewed-title, reviewed-author, or reviewed-genre. For the latter case, reviews are commonly 
       stored as types article-journal, article-magazine, article-newspaper, post-weblog, or webpage 
  -->
  <!-- General categories of item types:
       Periodical: article-journal article-magazine article-newspaper periodical post-weblog review review-book
       Periodical or Booklike: paper-conference
       Booklike: article book broadcast chapter classic collection dataset document
                 entry entry-dictionary entry-encyclopedia event figure
                 graphic interview manuscript map motion_picture musical_score
                 pamphlet patent performance personal_communication post report
                 software song speech standard thesis webpage
       Legal: bill hearing legal_case legislation regulation treaty
  -->
  <!-- Equivalencies:
       classic == book
       document == report, but give full date
       standard == report
       performance == speech
       event == speech
       collection == book, but give full date
  -->
  <!-- Role equivalencies:
       compiler == editor
       organizer, curator == chair
       script-writer == director
       producer == director (but don't print both)
       guest, host == director
       series-creator, executive-producer == editor
  -->
  <!-- APA references contain four parts: author, date, title, source -->
  <macro name="author-bib">
    <group delimiter=" ">
      <names variable="composer" delimiter=", &amp; ">
        <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
        <substitute>
          <names variable="author"/>
          <!-- Note: narrator only cited in secondary-contributors -->
          <names variable="illustrator"/>
          <!-- TODO: Replace delimiter with collapse to combine names variables when that becomes available. -->
          <choose>
            <if type="broadcast">
              <names variable="script-writer director">
                <!-- Note: Actors/performers and producers [not executive] not cited in APA style. -->
                <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
                <label form="long" prefix=" (" suffix=")" text-case="title"/>
              </names>
            </if>
          </choose>
          <names variable="director">
            <!-- For non-broadcast items, APA only cites directors and not writers. -->
            <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
            <label form="long" prefix=" (" suffix=")" text-case="title"/>
          </names>
          <!-- TODO: Replace delimiter with collapse to combine names variables when that becomes available. -->
          <names variable="guest host">
            <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
            <label form="long" prefix=" (" suffix=")" text-case="title"/>
          </names>
          <names variable="producer">
            <!-- Note: Producers not cited if there is a writer/director, but use if they are the principle creator. -->
            <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
            <label form="long" prefix=" (" suffix=")" text-case="title"/>
          </names>
          <choose>
            <if variable="container-title">
              <choose>
                <if type="book classic collection entry entry-dictionary entry-encyclopedia" match="any">
                  <!-- Items with book-like container-title substitute with their title and parenthetical, 
                       but leave bracketed after container-title. This mimics the container-booklike formatting. -->
                  <choose>
                    <if variable="title">
                      <group delimiter=" ">
                        <text macro="title"/>
                        <text macro="parenthetical"/>
                      </group>
                    </if>
                    <else>
                      <text macro="title-and-descriptions"/>
                    </else>
                  </choose>
                </if>
              </choose>
            </if>
          </choose>
          <names variable="executive-producer">
            <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
            <label form="long" prefix=" (" suffix=")" text-case="title"/>
          </names>
          <names variable="series-creator">
            <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
            <label form="long" prefix=" (" suffix=")" text-case="title"/>
          </names>
          <names variable="editor-translator">
            <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
            <label form="short" prefix=" (" suffix=")" text-case="title"/>
          </names>
          <!-- Note: Translator is not cited as a primary creator (only as Ed. & Trans.). -->
          <names variable="editor">
            <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
            <label form="short" prefix=" (" suffix=")" text-case="title"/>
          </names>
          <names variable="editorial-director">
            <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
            <label form="short" prefix=" (" suffix=")" text-case="title"/>
          </names>
          <names variable="compiler">
            <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
            <label form="long" prefix=" (" suffix=")" text-case="title"/>
          </names>
          <choose>
            <if type="event performance speech" match="any">
              <names variable="chair">
                <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
                <label form="long" prefix=" (" suffix=")" text-case="title"/>
              </names>
              <names variable="organizer">
                <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
                <label form="long" prefix=" (" suffix=")" text-case="title"/>
              </names>
            </if>
          </choose>
          <names variable="curator">
            <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
            <label form="long" prefix=" (" suffix=")" text-case="title"/>
          </names>
          <names variable="collection-editor">
            <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
            <label form="short" prefix=" (" suffix=")" text-case="title"/>
          </names>
          <choose>
            <if variable="title">
              <!-- If an item has a title, substitute missing author with title and parenthetical, but leave bracketed 
                   after the date (in the 'title' position). -->
              <group delimiter=" ">
                <text macro="title"/>
                <text macro="parenthetical"/>
              </group>
            </if>
            <else>
              <!-- If an item has no title, substitute with bracketed followed by parenthetical. -->
              <text macro="title-and-descriptions"/>
            </else>
          </choose>
        </substitute>
      </names>
      <choose>
        <!-- Print "with" contributor for books, but not for other types that commonly have them (eg, thesis, software) -->
        <if type="book classic collection" match="any">
          <names variable="contributor" prefix="(" suffix=")">
            <label form="verb" suffix=" "/>
            <name name-as-sort-order="all" and="symbol" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
          </names>
        </if>
      </choose>
    </group>
  </macro>
  <macro name="author-intext">
    <choose>
      <if type="bill hearing legal_case legislation regulation treaty" match="any">
        <text macro="title-intext"/>
      </if>
      <else-if type="interview personal_communication" match="any">
        <choose>
          <!-- These variables indicate that the letter is retrievable by the reader.
                If not, then use the APA in-text-only personal communication format -->
          <if variable="archive container-title DOI publisher URL" match="none">
            <group delimiter=", ">
              <names variable="author">
                <name and="symbol" delimiter=", " initialize-with=". "/>
                <substitute>
                  <text macro="title-intext"/>
                </substitute>
              </names>
              <text term="personal-communication"/>
            </group>
          </if>
          <else>
            <names variable="author" delimiter=", ">
              <name form="short" and="symbol" delimiter=", " initialize-with=". "/>
              <substitute>
                <text macro="title-intext"/>
              </substitute>
            </names>
          </else>
        </choose>
      </else-if>
      <else>
        <names variable="composer" delimiter=" &amp; ">
          <name form="short" and="symbol" delimiter=", " initialize-with=". "/>
          <substitute>
            <names variable="author"/>
            <names variable="illustrator"/>
            <!-- TODO: Replace delimiter with collapse to combine names variables when that becomes available. -->
            <choose>
              <if type="broadcast">
                <names variable="script-writer director"/>
              </if>
            </choose>
            <names variable="director"/>
            <!-- TODO: Replace delimiter with collapse to combine names variables when that becomes available. -->
            <names variable="guest host"/>
            <names variable="producer"/>
            <choose>
              <if variable="container-title">
                <choose>
                  <if type="book classic collection entry entry-dictionary entry-encyclopedia" match="any">
                    <text macro="title-intext"/>
                  </if>
                </choose>
              </if>
            </choose>
            <names variable="executive-producer"/>
            <names variable="series-creator"/>
            <names variable="editor"/>
            <names variable="editorial-director"/>
            <names variable="compiler"/>
            <choose>
              <if type="event performance speech" match="any">
                <names variable="chair"/>
                <names variable="organizer"/>
              </if>
            </choose>
            <names variable="curator"/>
            <text macro="title-intext"/>
          </substitute>
        </names>
      </else>
    </choose>
  </macro>
  <macro name="author-sort">
    <choose>
      <if type="bill hearing legal_case legislation regulation treaty" match="any">
        <text macro="title-legal"/>
      </if>
      <else>
        <text macro="author-bib"/>
      </else>
    </choose>
  </macro>
  <macro name="date-bib">
    <group delimiter=" " prefix="(" suffix=")">
      <choose>
        <if is-uncertain-date="issued">
          <text term="circa" form="short"/>
        </if>
      </choose>
      <group>
        <choose>
          <if variable="issued">
            <group delimiter=", ">
              <group>
                <date variable="issued" date-parts="year" form="numeric"/>
                <text variable="year-suffix"/>
              </group>
              <choose>
                <if type="article-magazine article-newspaper broadcast collection document event interview motion_picture pamphlet performance personal_communication post post-weblog song speech webpage" match="any">
                  <!-- Many video and audio examples in manual give full dates. Err on the side of too much information. -->
                  <date variable="issued">
                    <date-part name="month"/>
                    <date-part name="day" prefix=" "/>
                  </date>
                </if>
                <else-if type="paper-conference">
                  <!-- Capture 'speech' stored as 'paper-conference' -->
                  <choose>
                    <if variable="collection-editor compiler editor editorial-director issue page volume" match="none">
                      <date variable="issued">
                        <date-part name="month"/>
                        <date-part name="day" prefix=" "/>
                      </date>
                    </if>
                  </choose>
                </else-if>
                <!-- Only year: article article-journal book chapter classic entry entry-dictionary entry-encyclopedia dataset figure graphic
                     manuscript map musical_score paper-conference[published] patent periodical report review review-book software standard thesis -->
              </choose>
            </group>
          </if>
          <else-if variable="status">
            <group>
              <!-- We print the status variable directly rather than using in-press, etc. terms. -->
              <text variable="status" text-case="lowercase"/>
              <text variable="year-suffix" prefix="-"/>
            </group>
          </else-if>
          <else>
            <text term="no date" form="short"/>
            <text variable="year-suffix" prefix="-"/>
          </else>
        </choose>
      </group>
    </group>
  </macro>
  <macro name="date-sort">
    <!-- This is necessary to ensure that citeproc sorts all item types chonologically in the same list. -->
    <choose>
      <if type="article article-journal book chapter entry entry-dictionary entry-encyclopedia dataset figure graphic manuscript map musical_score patent report review review-book thesis" match="any">
        <date variable="issued" date-parts="year" form="numeric"/>
      </if>
      <else-if type="paper-conference">
        <!-- Capture 'speech' stored as 'paper-conference' -->
        <choose>
          <if variable="collection-editor compiler editor editorial-director issue page volume" match="any">
            <date variable="issued" date-parts="year" form="numeric"/>
          </if>
          <else>
            <date variable="issued">
              <date-part name="year" form="long"/>
              <date-part name="month" form="numeric-leading-zeros"/>
              <date-part name="day" form="numeric-leading-zeros"/>
            </date>
          </else>
        </choose>
      </else-if>
      <else>
        <date variable="issued">
          <date-part name="year" form="long"/>
          <date-part name="month" form="numeric-leading-zeros"/>
          <date-part name="day" form="numeric-leading-zeros"/>
        </date>
      </else>
    </choose>
  </macro>
  <macro name="date-sort-group">
    <!-- APA sorts 1. no-date items, 2. items with dates, 3. in-press (status) items -->
    <choose>
      <if variable="issued">
        <text value="1"/>
      </if>
      <else-if variable="status">
        <text value="2"/>
      </else-if>
      <else>
        <text value="0"/>
      </else>
    </choose>
  </macro>
  <macro name="date-intext">
    <choose>
      <if variable="issued">
        <group delimiter="/">
          <group delimiter=" ">
            <choose>
              <if is-uncertain-date="original-date">
                <text term="circa" form="short"/>
              </if>
            </choose>
            <date variable="original-date">
              <date-part name="year"/>
            </date>
          </group>
          <group delimiter=" ">
            <choose>
              <if is-uncertain-date="issued">
                <text term="circa" form="short"/>
              </if>
            </choose>
            <group>
              <choose>
                <if type="interview personal_communication" match="any">
                  <choose>
                    <if variable="archive container-title DOI publisher URL" match="none">
                      <!-- These variables indicate that the communication is retrievable by the reader.
                           If not, then use the in-text-only personal communication format -->
                      <date variable="issued" form="text"/>
                    </if>
                    <else>
                      <date variable="issued">
                        <date-part name="year"/>
                      </date>
                    </else>
                  </choose>
                </if>
                <else>
                  <date variable="issued">
                    <date-part name="year"/>
                  </date>
                </else>
              </choose>
              <text variable="year-suffix"/>
            </group>
          </group>
        </group>
      </if>
      <else-if variable="status">
        <!-- We print the status variable directly rather than using in-press, etc. terms. -->
        <text variable="status" text-case="lowercase"/>
        <text variable="year-suffix" prefix="-"/>
      </else-if>
      <else>
        <text term="no date" form="short"/>
        <text variable="year-suffix" prefix="-"/>
      </else>
    </choose>
  </macro>
  <!-- APA has two description elements following the title:
       title (parenthetical) [bracketed] -->
  <macro name="title-and-descriptions">
    <choose>
      <if variable="title">
        <group delimiter=" ">
          <text macro="title"/>
          <text macro="parenthetical"/>
          <text macro="bracketed"/>
        </group>
      </if>
      <else>
        <choose>
          <if type="bill report" match="any">
            <!-- Bills, resolutions, and congressional reports are not italicized and substitute bill number if no title. -->
            <!-- Can't distinguish congressional reports from other reports, 
                 but giving the genre and number seems fine for other reports too. -->
            <text macro="number"/>
            <text macro="bracketed"/>
            <text macro="parenthetical"/>
          </if>
          <else>
            <group delimiter=" ">
              <text macro="bracketed"/>
              <text macro="parenthetical"/>
            </group>
          </else>
        </choose>
      </else>
    </choose>
  </macro>
  <macro name="title">
    <choose>
      <if type="post webpage" match="any">
        <!-- Webpages are always italicized -->
        <text macro="title-plus-part-title" font-style="italic"/>
      </if>
      <!-- Other types are italicized based on presence of container-title.
             Assume that review and review-book are published in periodicals/blogs,
             not just on a web page (ex. 69) -->
      <else-if type="article-journal article-magazine article-newspaper periodical post-weblog review review-book" match="any">
        <text macro="periodical-title"/>
      </else-if>
      <else-if type="paper-conference">
        <!-- Treat paper-conference as book-like if it has an editor, otherwise as periodical-like -->
        <choose>
          <if variable="collection-editor compiler editor editorial-director" match="any">
            <text macro="booklike-title"/>
          </if>
          <else>
            <text macro="periodical-title"/>
          </else>
        </choose>
      </else-if>
      <else>
        <text macro="booklike-title"/>
      </else>
    </choose>
  </macro>
  <macro name="title-plus-part-title">
    <choose>
      <if variable="reviewed-author reviewed-genre reviewed-title" type="review review-book" match="any">
        <!-- If a review has no reviewed-title, assume that title contains the title of the reviewed work
             and omit it here; it is printed in the reviewed-item macro. -->
        <choose>
          <if variable="reviewed-title" match="none"/>
          <else>
            <group delimiter=": ">
              <text variable="title"/>
              <text macro="part-title"/>
            </group>
          </else>
        </choose>
      </if>
      <else>
        <group delimiter=": ">
          <text variable="title"/>
          <text macro="part-title"/>
        </group>
      </else>
    </choose>
  </macro>
  <macro name="part-title">
    <group delimiter=". ">
      <group delimiter=" ">
        <label variable="part-number" form="short" text-case="capitalize-first"/>
        <text variable="part-number"/>
      </group>
      <text variable="part-title" text-case="capitalize-first"/>
    </group>
  </macro>
  <macro name="periodical-title">
    <!-- For periodicals, assume that part-number and part-title refer to the article and append to title -->
    <choose>
      <if variable="container-title" match="any">
        <text macro="title-plus-part-title"/>
      </if>
      <else>
        <!-- for periodical items without container titles, don't append volume-title to title -->
        <text macro="title-plus-part-title" font-style="italic"/>
      </else>
    </choose>
  </macro>
  <macro name="booklike-title">
    <!-- For book-like items, assume part-number and part-title refer to the book/volume. -->
    <choose>
      <if variable="container-title" match="any">
        <text variable="title"/>
      </if>
      <else>
        <!-- For book-like items without container titles and with volume-title, append volume-title to title (ex. 30) -->
        <text macro="title-plus-volume-title" font-style="italic"/>
      </else>
    </choose>
  </macro>
  <macro name="title-plus-volume-title">
    <group delimiter=": ">
      <text variable="title"/>
      <text macro="volume-title"/>
    </group>
  </macro>
  <macro name="volume-title">
    <group delimiter=": ">
      <choose>
        <if variable="volume-title">
          <group delimiter=" ">
            <group delimiter=". ">
              <group delimiter=" ">
                <label variable="volume" form="short" text-case="capitalize-first"/>
                <text variable="volume"/>
              </group>
              <text variable="volume-title"/>
            </group>
          </group>
        </if>
        <else-if is-numeric="volume" match="none">
          <group delimiter=" ">
            <label variable="volume" form="short" text-case="capitalize-first"/>
            <text variable="volume"/>
          </group>
        </else-if>
      </choose>
      <!-- For book-like items, assume part-number and part-title refer to the book/volume. -->
      <text macro="part-title"/>
    </group>
  </macro>
  <macro name="title-intext">
    <choose>
      <if type="bill report">
        <!-- Bills, resolutions, and congressional reports are not italicized and substitute bill number if no title. -->
        <!-- Can't distinguish congressional reports from other reports, 
             but giving the genre and number seems fine for other reports too. -->
        <choose>
          <if variable="title">
            <text variable="title" form="short" text-case="title"/>
          </if>
          <else>
            <group delimiter=" ">
              <text variable="genre"/>
              <group delimiter=" ">
                <choose>
                  <if variable="chapter-number container-title" match="none">
                    <label variable="number" form="short" text-case="capitalize-first"/>
                  </if>
                </choose>
                <text variable="number"/>
              </group>
            </group>
          </else>
        </choose>
      </if>
      <else>
        <choose>
          <if variable="title" match="none">
            <text macro="bracketed-intext"/>
          </if>
          <else-if type="hearing">
            <!-- Hearings are italicized -->
            <text variable="title" form="short" font-style="italic" text-case="title"/>
          </else-if>
          <else-if type="legal_case" match="any">
            <!-- Cases are italicized -->
            <text variable="title" font-style="italic"/>
          </else-if>
          <else-if type="legislation regulation treaty" match="any">
            <!-- Legislation, regulations, and treaties not italicized or quoted -->
            <text variable="title" form="short" text-case="title"/>
          </else-if>
          <else-if type="post webpage" match="any">
            <!-- Webpages are always italicized -->
            <text variable="title" form="short" font-style="italic" text-case="title"/>
          </else-if>
          <else-if variable="container-title" match="any">
            <!-- Other types are italicized or quoted based on presence of container-title. As in title macro. -->
            <text variable="title" form="short" quotes="true" text-case="title"/>
          </else-if>
          <else>
            <text variable="title" form="short" font-style="italic" text-case="title"/>
          </else>
        </choose>
      </else>
    </choose>
  </macro>
  <macro name="parenthetical">
    <!-- (Secondary contributors; Database location; Genre no. 123; Report Series 123, Version, Edition, Volume, Page) -->
    <group prefix="(" suffix=")">
      <choose>
        <if type="patent">
          <!-- authority: U.S. ; genre: patent ; number: 123,445 -->
          <group delimiter=" ">
            <text variable="authority" form="short"/>
            <choose>
              <if variable="genre">
                <text variable="genre" text-case="capitalize-first"/>
              </if>
              <else>
                <text term="patent" text-case="capitalize-first"/>
              </else>
            </choose>
            <group delimiter=" ">
              <label variable="number" form="short" text-case="capitalize-first"/>
              <text variable="number"/>
            </group>
          </group>
        </if>
        <else-if type="post webpage" match="any">
          <!-- For post webpage, container-title is treated as publisher -->
          <group delimiter="; ">
            <text macro="secondary-contributors"/>
            <text macro="database-location"/>
            <text macro="number"/>
            <text macro="locators-booklike"/>
          </group>
        </else-if>
        <else-if type="report" match="any">
          <choose>
            <if variable="title" match="none">
              <!-- If there is no title, then genre and number are already printed as the title. -->
              <group delimiter="; ">
                <text macro="secondary-contributors"/>
                <text macro="database-location"/>
                <text macro="locators-booklike"/>
              </group>
            </if>
            <!-- If the report is a chapter in a larger report, then most parenthetical information is printed after the container. -->
            <else-if variable="container-title">
              <text macro="secondary-contributors"/>
            </else-if>
            <else>
              <group delimiter="; ">
                <text macro="secondary-contributors"/>
                <text macro="database-location"/>
                <text macro="number"/>
                <text macro="locators-booklike"/>
              </group>
            </else>
          </choose>
        </else-if>
        <else-if variable="container-title">
          <group delimiter="; ">
            <text macro="secondary-contributors"/>
            <choose>
              <if type="broadcast graphic map motion_picture song" match="any">
                <!-- For audiovisual media, number information comes after title, not container-title (ex. 94) -->
                <text macro="number"/>
              </if>
            </choose>
          </group>
        </else-if>
        <else>
          <group delimiter="; ">
            <text macro="secondary-contributors"/>
            <text macro="database-location"/>
            <text macro="number"/>
            <text macro="locators-booklike"/>
          </group>
        </else>
      </choose>
    </group>
  </macro>
  <macro name="bracketed">
    <!-- [Descriptive information] -->
    <!-- If there is a number, genre is already printed in macro="number" -->
    <group prefix="[" suffix="]">
      <choose>
        <if variable="reviewed-author reviewed-genre reviewed-title" type="review review-book" match="any">
          <text macro="reviewed-item"/>
        </if>
        <else-if type="thesis">
          <!-- Thesis type and institution -->
          <group delimiter="; ">
            <choose>
              <if variable="number" match="none">
                <group delimiter=", ">
                  <text variable="genre" text-case="capitalize-first"/>
                  <choose>
                    <if variable="archive DOI URL" match="any">
                      <!-- Include the university in brackets if thesis is published -->
                      <text variable="publisher"/>
                    </if>
                  </choose>
                </group>
              </if>
            </choose>
            <text variable="medium" text-case="capitalize-first"/>
          </group>
        </else-if>
        <else-if variable="interviewer" type="interview" match="any">
          <!-- Interview information -->
          <choose>
            <if variable="title">
              <text macro="format"/>
            </if>
            <else-if variable="genre">
              <group delimiter="; ">
                <group delimiter=" ">
                  <text variable="genre" text-case="capitalize-first"/>
                  <group delimiter=" ">
                    <text term="container-author" form="verb"/>
                    <names variable="interviewer">
                      <name and="symbol" initialize-with=". " delimiter=", "/>
                    </names>
                  </group>
                </group>
              </group>
            </else-if>
            <else-if variable="interviewer">
              <group delimiter="; ">
                <names variable="interviewer">
                  <label form="verb" suffix=" " text-case="capitalize-first"/>
                  <name and="symbol" initialize-with=". " delimiter=", "/>
                </names>
                <text variable="medium" text-case="capitalize-first"/>
              </group>
            </else-if>
            <else>
              <text macro="format"/>
            </else>
          </choose>
        </else-if>
        <else-if variable="container-title" match="none">
          <!-- Other description -->
          <text macro="format"/>
        </else-if>
        <else>
          <!-- For conference presentations/performances/events, chapters in reports/standards/generic documents, software, 
               place bracketed after the container title -->
          <choose>
            <if type="event paper-conference performance speech" match="any">
              <choose>
                <if variable="collection-editor compiler editor editorial-director issue page volume" match="any">
                  <text macro="format"/>
                </if>
              </choose>
            </if>
            <else-if type="document report software standard" match="none">
              <text macro="format"/>
            </else-if>
          </choose>
        </else>
      </choose>
    </group>
  </macro>
  <macro name="bracketed-intext">
    <group prefix="[" suffix="]">
      <choose>
        <if variable="reviewed-title" match="any">
          <group delimiter=" ">
            <text term="review-of" text-case="capitalize-first"/>
            <text macro="reviewed-title-intext"/>
          </group>
        </if>
        <else-if variable="interviewer" type="interview" match="any">
          <names variable="interviewer">
            <label form="verb" suffix=" " text-case="capitalize-first"/>
            <name and="symbol" initialize-with=". " delimiter=", "/>
            <substitute>
              <text macro="format-intext"/>
            </substitute>
          </names>
        </else-if>
        <else>
          <text macro="format-intext"/>
        </else>
      </choose>
    </group>
  </macro>
  <macro name="secondary-contributors">
    <choose>
      <if type="article-journal article-magazine article-newspaper periodical post-weblog review review-book" match="any">
        <text macro="secondary-contributors-periodical"/>
      </if>
      <else-if type="paper-conference">
        <choose>
          <if variable="collection-editor compiler editor editorial-director" match="any">
            <text macro="secondary-contributors-booklike"/>
          </if>
          <else>
            <text macro="secondary-contributors-periodical"/>
          </else>
        </choose>
      </else-if>
      <else>
        <text macro="secondary-contributors-booklike"/>
      </else>
    </choose>
  </macro>
  <macro name="secondary-contributors-periodical">
    <group delimiter="; ">
      <choose>
        <if variable="title">
          <names variable="interviewer" delimiter="; ">
            <name and="symbol" initialize-with=". " delimiter=", "/>
            <label form="short" prefix=", " text-case="title"/>
          </names>
        </if>
      </choose>
      <names variable="translator narrator" delimiter="; ">
        <name and="symbol" initialize-with=". " delimiter=", "/>
        <label form="short" prefix=", " text-case="title"/>
      </names>
    </group>
  </macro>
  <macro name="secondary-contributors-booklike">
    <group delimiter="; ">
      <choose>
        <if variable="title">
          <names variable="interviewer">
            <name and="symbol" initialize-with=". " delimiter=", "/>
            <label form="short" prefix=", " text-case="title"/>
          </names>
        </if>
      </choose>
      <choose>
        <if type="post webpage" match="none">
          <!-- Webpages treat container-title like publisher -->
          <group delimiter="; ">
            <names variable="illustrator narrator" delimiter="; ">
              <name and="symbol" initialize-with=". " delimiter=", "/>
              <label form="short" prefix=", " text-case="title"/>
            </names>
            <choose>
              <if variable="container-title" match="none">
                <group delimiter="; ">
                  <names variable="container-author">
                    <label form="verb-short" suffix=" " text-case="title"/>
                    <name and="symbol" initialize-with=". " delimiter=", "/>
                  </names>
                  <names variable="editor translator" delimiter="; ">
                    <name and="symbol" initialize-with=". " delimiter=", "/>
                    <label form="short" prefix=", " text-case="title"/>
                  </names>
                  <names variable="compiler chair organizer curator series-creator executive-producer" delimiter="; ">
                    <name and="symbol" initialize-with=". " delimiter=", "/>
                    <label form="long" prefix=", " text-case="title"/>
                  </names>
                </group>
              </if>
              <else>
                <choose>
                  <!-- TODO: Check logic once processors start to automatically populate editor-translator. -->
                  <if variable="editor-translator" match="none">
                    <names variable="translator" delimiter="; ">
                      <name and="symbol" initialize-with=". " delimiter=", "/>
                      <label form="short" prefix=", " text-case="title"/>
                    </names>
                  </if>
                </choose>
              </else>
            </choose>
          </group>
        </if>
        <else>
          <group delimiter="; ">
            <names variable="container-author">
              <label form="verb-short" suffix=" " text-case="title"/>
              <name and="symbol" initialize-with=". " delimiter=", "/>
            </names>
            <names variable="editor translator" delimiter="; ">
              <name and="symbol" initialize-with=". " delimiter=", "/>
              <label form="short" prefix=", " text-case="title"/>
            </names>
            <names variable="illustrator narrator" delimiter="; ">
              <name and="symbol" initialize-with=". " delimiter=", "/>
              <label form="short" prefix=", " text-case="title"/>
            </names>
            <names variable="compiler chair organizer curator series-creator executive-producer" delimiter="; ">
              <name and="symbol" initialize-with=". " delimiter=", "/>
              <label form="long" prefix=", " text-case="title"/>
            </names>
          </group>
        </else>
      </choose>
    </group>
  </macro>
  <macro name="database-location">
    <choose>
      <if variable="archive-place" match="none">
        <!-- With archive-place: physical archives. Without: online archives. -->
        <text variable="archive_location"/>
      </if>
    </choose>
  </macro>
  <macro name="number">
    <choose>
      <if variable="number">
        <group delimiter=", ">
          <group delimiter=" ">
            <text variable="genre" text-case="title"/>
            <group delimiter=" ">
              <label variable="number" form="short" text-case="capitalize-first"/>
              <text variable="number"/>
            </group>
          </group>
          <choose>
            <if type="thesis">
              <choose>
                <!-- Include the university in brackets if thesis is published -->
                <if variable="archive DOI URL" match="any">
                  <text variable="publisher"/>
                </if>
              </choose>
            </if>
          </choose>
        </group>
      </if>
    </choose>
  </macro>
  <macro name="locators-booklike">
    <choose>
      <if type="article-journal article-magazine article-newspaper broadcast event interview patent performance periodical post post-weblog review review-book speech webpage" match="any"/>
      <else-if type="paper-conference">
        <choose>
          <if variable="collection-editor compiler editor editorial-director" match="any">
            <group delimiter=", ">
              <text macro="version"/>
              <text macro="edition"/>
              <text macro="volume-booklike"/>
            </group>
          </if>
        </choose>
      </else-if>
      <else>
        <group delimiter=", ">
          <text macro="version"/>
          <text macro="edition"/>
          <text macro="volume-booklike"/>
        </group>
      </else>
    </choose>
  </macro>
  <macro name="version">
    <group delimiter=" ">
      <label variable="version" text-case="capitalize-first"/>
      <text variable="version"/>
    </group>
  </macro>
  <macro name="edition">
    <choose>
      <if is-numeric="edition">
        <group delimiter=" ">
          <number variable="edition" form="ordinal"/>
          <label variable="edition" form="short"/>
        </group>
      </if>
      <else>
        <text variable="edition"/>
      </else>
    </choose>
  </macro>
  <macro name="volume-booklike">
    <group delimiter=", ">
      <!-- Report series [ex. 52] -->
      <choose>
        <if type="document report standard">
          <group delimiter=" ">
            <text variable="collection-title" text-case="title"/>
            <text variable="collection-number"/>
          </group>
        </if>
      </choose>
      <group delimiter=" ">
        <label variable="supplement-number" text-case="capitalize-first"/>
        <text variable="supplement-number"/>
      </group>
      <choose>
        <if variable="volume" match="any">
          <choose>
            <!-- Non-numeric volumes are already printed as part of the book title -->
            <if variable="volume-title"/>
            <else-if is-numeric="volume" match="none"/>
            <else>
              <group delimiter=" ">
                <label variable="volume" form="short" text-case="capitalize-first"/>
                <number variable="volume" form="numeric"/>
              </group>
            </else>
          </choose>
        </if>
        <else>
          <group>
            <label variable="number-of-volumes" form="short" text-case="capitalize-first" suffix=" "/>
            <text term="page-range-delimiter" prefix="1"/>
            <number variable="number-of-volumes" form="numeric"/>
          </group>
        </else>
      </choose>
      <group delimiter=" ">
        <label variable="issue" text-case="capitalize-first"/>
        <text variable="issue"/>
      </group>
      <group delimiter=" ">
        <label variable="page" form="short" suffix=" "/>
        <text variable="page"/>
      </group>
    </group>
  </macro>
  <macro name="reviewed-item">
    <!-- Reviewed item -->
    <group delimiter="; ">
      <group delimiter=", ">
        <group delimiter=" ">
          <choose>
            <if variable="reviewed-genre">
              <group delimiter=" ">
                <text term="review-of" form="long" text-case="capitalize-first"/>
                <text variable="reviewed-genre" text-case="lowercase"/>
              </group>
            </if>
            <!-- If no reviewed-genre, assume that genre or medium is entered as 'Review of the book' or similar -->
            <else-if variable="number" match="none">
              <choose>
                <if variable="genre">
                  <text variable="genre" text-case="capitalize-first"/>
                </if>
                <else-if variable="medium">
                  <text variable="medium" text-case="capitalize-first"/>
                </else-if>
                <else-if type="review-book">
                  <group delimiter=" ">
                    <text term="review-of" form="long" text-case="capitalize-first"/>
                    <text term="book" form="long" text-case="lowercase"/>
                  </group>
                </else-if>
                <else>
                  <text term="review-of" form="short" text-case="capitalize-first"/>
                </else>
              </choose>
            </else-if>
            <else>
              <choose>
                <if variable="medium">
                  <text variable="medium" text-case="capitalize-first"/>
                </if>
                <else-if type="review-book">
                  <group delimiter=" ">
                    <text term="review-of" form="long" text-case="capitalize-first"/>
                    <text term="book" form="long" text-case="lowercase"/>
                  </group>
                </else-if>
                <else>
                  <text term="review-of" form="short" text-case="capitalize-first"/>
                </else>
              </choose>
            </else>
          </choose>
          <text macro="reviewed-title"/>
        </group>
        <names variable="reviewed-author">
          <label form="verb-short" suffix=" "/>
          <name and="symbol" initialize-with=". " delimiter=", "/>
        </names>
      </group>
      <choose>
        <if variable="genre" match="any">
          <choose>
            <if variable="number" match="none">
              <text variable="medium" text-case="capitalize-first"/>
            </if>
          </choose>
        </if>
      </choose>
    </group>
  </macro>
  <macro name="reviewed-title">
    <choose>
      <if variable="reviewed-title">
        <!-- Not possible to distinguish TV series episode from other reviewed
             works without reviewed-container-title [Ex. 69] -->
        <!-- Adapt for reviewed-container-title if that becomes available -->
        <text variable="reviewed-title" font-style="italic"/>
      </if>
      <else>
        <!-- Assume title is title of reviewed work -->
        <text variable="title" font-style="italic"/>
      </else>
    </choose>
  </macro>
  <macro name="reviewed-title-intext">
    <choose>
      <if variable="reviewed-title">
        <!-- Not possible to distinguish TV series episode from other reviewed
             works without reviewed-container-title [Ex. 69] -->
        <!-- Adapt for reviewed-container-title if that becomes available -->
        <text variable="reviewed-title" form="short" font-style="italic" text-case="title"/>
      </if>
      <else>
        <!-- Assume title is title of reviewed work -->
        <text variable="title" form="short" font-style="italic" text-case="title"/>
      </else>
    </choose>
  </macro>
  <macro name="format">
    <choose>
      <if variable="genre medium" match="any">
        <group delimiter="; ">
          <choose>
            <if variable="number" match="none">
              <text variable="genre" text-case="capitalize-first"/>
            </if>
          </choose>
          <text variable="medium" text-case="capitalize-first"/>
        </group>
      </if>
      <else>
        <text macro="generic-type-label"/>
      </else>
    </choose>
  </macro>
  <macro name="format-intext">
    <choose>
      <if variable="genre" match="any">
        <text variable="genre" text-case="capitalize-first"/>
      </if>
      <else-if variable="medium">
        <text variable="medium" text-case="capitalize-first"/>
      </else-if>
      <else>
        <text macro="generic-type-label"/>
      </else>
    </choose>
  </macro>
  <macro name="generic-type-label">
    <!-- Generic labels for specific types -->
    <choose>
      <if type="dataset">
        <text term="dataset" text-case="capitalize-first"/>
      </if>
      <else-if type="software">
        <text term="software" text-case="capitalize-first"/>
      </else-if>
      <else-if type="interview personal_communication" match="any">
        <choose>
          <if variable="archive container-title DOI publisher URL" match="none">
            <text term="personal-communication" text-case="capitalize-first"/>
          </if>
          <else-if type="interview">
            <text term="interview" text-case="capitalize-first"/>
          </else-if>
        </choose>
      </else-if>
      <else-if type="map">
        <text term="map" text-case="capitalize-first"/>
      </else-if>
      <else-if type="collection">
        <text term="collection" text-case="capitalize-first"/>
      </else-if>
      <else-if type="song">
        <text term="song" text-case="capitalize-first"/>
      </else-if>
      <else-if type="motion_picture">
        <text term="motion_picture" text-case="capitalize-first"/>
      </else-if>
      <else-if type="post">
        <text term="post" text-case="capitalize-first"/>
      </else-if>
      <else-if type="review">
        <text term="review" text-case="capitalize-first"/>
      </else-if>
      <else-if type="review-book">
        <text term="review-book" text-case="capitalize-first"/>
      </else-if>
      <else-if type="broadcast">
        <text term="broadcast" text-case="capitalize-first"/>
      </else-if>
      <else-if type="figure">
        <text term="figure" text-case="capitalize-first"/>
      </else-if>
      <else-if type="graphic">
        <text term="graphic" text-case="capitalize-first"/>
      </else-if>
    </choose>
  </macro>
  <!-- APA 'source' element contains four parts:
       container, event, publisher, access -->
  <macro name="container">
    <choose>
      <if type="article-journal article-magazine article-newspaper periodical post-weblog review review-book" match="any">
        <!-- Periodical items -->
        <text macro="container-periodical"/>
      </if>
      <else-if type="paper-conference">
        <!-- Determine if paper-conference is a periodical- or book-like -->
        <choose>
          <if variable="editor editorial-director collection-editor container-author" match="any">
            <text macro="container-booklike"/>
          </if>
          <else>
            <text macro="container-periodical"/>
          </else>
        </choose>
      </else-if>
      <else-if type="post webpage" match="none">
        <!-- post and webpage treat container-title like publisher -->
        <text macro="container-booklike"/>
      </else-if>
    </choose>
  </macro>
  <macro name="container-periodical">
    <group delimiter=". ">
      <group delimiter=", ">
        <text variable="container-title" font-style="italic" text-case="title"/>
        <choose>
          <if variable="volume">
            <group>
              <text variable="volume" font-style="italic"/>
              <text variable="issue" prefix="(" suffix=")"/>
            </group>
          </if>
          <else>
            <text variable="issue" font-style="italic"/>
          </else>
        </choose>
        <choose>
          <if variable="number">
            <!-- Ex. 6: Journal article with article number or eLocator -->
            <group delimiter=" ">
              <text term="article-locator" text-case="capitalize-first"/>
              <text variable="number"/>
            </group>
          </if>
          <else>
            <text variable="page"/>
          </else>
        </choose>
      </group>
      <choose>
        <if variable="issued">
          <choose>
            <if variable="issue number page volume" match="none">
              <!-- We print the status variable directly rather than using in-press, etc. terms. -->
              <text variable="status" text-case="capitalize-first"/>
            </if>
          </choose>
        </if>
      </choose>
    </group>
  </macro>
  <macro name="container-booklike">
    <choose>
      <if variable="container-title" match="any">
        <group delimiter=" ">
          <choose>
            <if type="song">
              <text term="on" text-case="capitalize-first"/>
            </if>
            <else>
              <text term="in" text-case="capitalize-first"/>
            </else>
          </choose>
          <group delimiter=", ">
            <names variable="executive-producer">
              <name and="symbol" initialize-with=". " delimiter=", "/>
              <label form="long" text-case="title" prefix=" (" suffix=")"/>
              <substitute>
                <names variable="series-creator"/>
                <names variable="editor-translator">
                  <name and="symbol" initialize-with=". " delimiter=", "/>
                  <label form="short" text-case="title" prefix=" (" suffix=")"/>
                </names>
                <!-- TODO: Translator omitted here on the assumption that editor-translators are uncommon 
                           for chapter citations. If needed, direct entry or automatic population of
                           editor-translator can produce combined labels. -->
                <names variable="editor">
                  <name and="symbol" initialize-with=". " delimiter=", "/>
                  <label form="short" text-case="title" prefix=" (" suffix=")"/>
                </names>
                <names variable="editorial-director">
                  <name and="symbol" initialize-with=". " delimiter=", "/>
                  <label form="short" text-case="title" prefix=" (" suffix=")"/>
                </names>
                <names variable="compiler"/>
                <choose>
                  <if type="event performance speech" match="any">
                    <names variable="chair"/>
                    <names variable="organizer"/>
                  </if>
                </choose>
                <names variable="curator"/>
                <names variable="collection-editor">
                  <name and="symbol" initialize-with=". " delimiter=", "/>
                  <label form="short" text-case="title" prefix=" (" suffix=")"/>
                </names>
                <names variable="container-author"/>
              </substitute>
            </names>
            <group delimiter=": " font-style="italic">
              <text variable="container-title"/>
              <text macro="volume-title"/>
            </group>
          </group>
          <text macro="parenthetical-container"/>
          <text macro="bracketed-container"/>
        </group>
      </if>
    </choose>
  </macro>
  <macro name="parenthetical-container">
    <choose>
      <if variable="container-title" match="any">
        <group prefix="(" suffix=")">
          <group delimiter="; ">
            <text macro="database-location"/>
            <choose>
              <if type="broadcast graphic map motion_picture song" match="none">
                <!-- For audiovisual media, number information comes after title, not container-title (ex. 94) -->
                <text macro="number"/>
              </if>
            </choose>
            <text macro="locators-booklike"/>
          </group>
        </group>
      </if>
    </choose>
  </macro>
  <macro name="bracketed-container">
    <group prefix="[" suffix="]">
      <choose>
        <if type="event paper-conference performance speech" match="any">
          <!-- Conference presentations should describe the session [container] in bracketed unless published in a proceedings -->
          <choose>
            <if variable="collection-editor compiler editor editorial-director issue page volume" match="none">
              <text macro="format"/>
            </if>
          </choose>
        </if>
        <else-if type="software" match="all">
          <!-- For entries in mobile app reference works, place bracketed after the container-title -->
          <text macro="format"/>
        </else-if>
        <else-if type="document report standard">
          <!-- For chapters in report, standards, and generic documents, place bracketed after the container title -->
          <text macro="format"/>
        </else-if>
      </choose>
    </group>
  </macro>
  <macro name="publisher">
    <group delimiter="; ">
      <choose>
        <if type="thesis">
          <choose>
            <if variable="archive DOI URL" match="none">
              <text variable="publisher"/>
            </if>
          </choose>
        </if>
        <else-if type="post webpage" match="any">
          <!-- For websites, treat container title like publisher -->
          <group delimiter="; ">
            <text variable="container-title" text-case="title"/>
            <text variable="publisher"/>
          </group>
        </else-if>
        <else-if type="paper-conference">
          <!-- For paper-conference, don't print publisher if in a journal-like proceedings -->
          <choose>
            <if variable="collection-editor compiler editor editorial-director" match="any">
              <text variable="publisher"/>
            </if>
          </choose>
        </else-if>
        <else-if type="article-journal article-magazine article-newspaper periodical post-weblog review review-book" match="none">
          <text variable="publisher"/>
        </else-if>
      </choose>
      <group delimiter=", ">
        <choose>
          <if variable="archive-place">
            <!-- With archive-place: physical archives. Without: online archives. -->
            <!-- For physical archives, print the location before the archive name.
                For electronic archives, these are printed in macro="description". -->
            <!-- Must test for archive_collection:
                With collection: archive_collection (archive_location), archive, archive-place
                No collection: archive (archive_location), archive-place
            -->
            <choose>
              <if variable="archive_collection">
                <group delimiter=" ">
                  <text variable="archive_collection"/>
                  <text variable="archive_location" prefix="(" suffix=")"/>
                </group>
                <text variable="archive"/>
                <text variable="archive-place"/>
              </if>
              <else>
                <group delimiter=" ">
                  <text variable="archive"/>
                  <text variable="archive_location" prefix="(" suffix=")"/>
                </group>
                <text variable="archive-place"/>
              </else>
            </choose>
          </if>
          <else>
            <text variable="archive"/>
          </else>
        </choose>
      </group>
    </group>
  </macro>
  <macro name="access">
    <choose>
      <if variable="DOI" match="any">
        <text variable="DOI" prefix="https://doi.org/"/>
      </if>
      <else-if variable="URL">
        <group delimiter=" ">
          <choose>
            <if variable="issued status" match="none">
              <group delimiter=" ">
                <text term="retrieved" text-case="capitalize-first"/>
                <date variable="accessed" form="text" suffix=","/>
                <text term="from"/>
              </group>
            </if>
          </choose>
          <text variable="URL"/>
        </group>
      </else-if>
    </choose>
  </macro>
  <macro name="event">
    <choose>
      <if variable="event event-title" match="any">
        <!-- To prevent Zotero from printing event-place due to its double-mapping of all 'place' to
             both publisher-place and event-place. Remove this 'choose' when that is changed. -->
        <choose>
          <if type="paper-conference">
            <choose>
              <if variable="collection-editor compiler editor editorial-director issue page volume" match="none">
                <!-- Don't print event info for conference papers published in a proceedings -->
                <group delimiter=", ">
                  <text macro="event-title"/>
                  <text variable="event-place"/>
                </group>
              </if>
            </choose>
          </if>
          <else>
            <!-- For other item types, print event info even if published (e.g., for collection catalogs, performance programs.
                 These items aren't given explicit examples in the APA manual, so err on the side of providing too much information. -->
            <group delimiter=", ">
              <text macro="event-title"/>
              <text variable="event-place"/>
            </group>
          </else>
        </choose>
      </if>
    </choose>
  </macro>
  <macro name="event-title">
    <choose>
      <!-- TODO: We expect "event-title" to be used,
           but processors and applications may not be updated yet.
           This macro ensures that either "event" or "event-title" can be accpeted.
           Remove if procesor logic and application adoption can handle this. -->
      <if variable="event-title">
        <text variable="event-title"/>
      </if>
      <else>
        <text variable="event"/>
      </else>
    </choose>
  </macro>
  <!-- After 'source', APA also prints publication history (original publication, reprint info, retraction info) -->
  <macro name="publication-history">
    <choose>
      <if type="patent">
        <text variable="references" prefix="(" suffix=")"/>
      </if>
      <else>
        <group delimiter="; " prefix="(" suffix=")">
          <!-- Print status here for things like "retracted" if it's not printed elsewhere already. -->
          <choose>
            <if variable="issued">
              <choose>
                <if variable="issue number page volume" match="any">
                  <text variable="status" text-case="capitalize-first"/>
                </if>
              </choose>
            </if>
          </choose>
          <choose>
            <if variable="references">
              <!-- This provides the option for more elaborate description
                    of publication history, such as full "reprinted" references
                    (examples 11, 43, 44) -->
              <text variable="references"/>
            </if>
            <else>
              <group delimiter=" ">
                <text term="original-work-published" text-case="capitalize-first"/>
                <choose>
                  <if is-uncertain-date="original-date">
                    <text term="circa" form="short"/>
                  </if>
                </choose>
                <date variable="original-date">
                  <date-part name="year"/>
                </date>
              </group>
            </else>
          </choose>
        </group>
      </else>
    </choose>
  </macro>
  <!-- Legal citations have their own rules -->
  <macro name="legal-cites">
    <!-- treaty: for treaties -->
    <!-- legal_case: for all legal and court cases -->
    <!-- bill: for bills, resolutions, federal reports -->
    <!-- hearing: for hearings and testimony -->
    <!-- legislation: for statutes, constitutional items, and charters -->
    <!-- regulation: codified regulations, uncodified regulations, executive orders -->
    <group delimiter=" ">
      <choose>
        <if type="treaty">
          <group delimiter=", " suffix=".">
            <!-- APA generally defers to Bluebook for legal citations, but diverges without
                explanation for treaty items. We follow the Bluebook format that was used 
                in APA 6th ed. -->
            <!-- APA manual omits treaty parties/authors, but per Bluebook 
                they should be included at least for bilateral treaties. -->
            <names variable="author">
              <name initialize-with="." form="short" delimiter="-"/>
            </names>
            <text macro="date-legal"/>
            <!-- APA manual omits treaty source/report called for by Bluebook in favor of just URL. 
                Both are included here, following the APA style used for all other item types 
                to end the reference with a period, then give the URL afterward. -->
            <text macro="container-legal"/>
          </group>
        </if>
        <else>
          <group delimiter=" " suffix=".">
            <group delimiter=", ">
              <text macro="title-legal"/>
              <text macro="container-legal"/>
            </group>
            <text macro="date-legal"/>
            <text macro="parenthetical-legal"/>
          </group>
        </else>
      </choose>
      <text variable="references"/>
      <text macro="access"/>
    </group>
  </macro>
  <macro name="title-legal">
    <choose>
      <if type="bill legal_case legislation regulation treaty" match="any">
        <text variable="title" text-case="title"/>
      </if>
      <else-if type="hearing">
        <!-- APA uses a comma delimiter and omits "hearing before the" for hearings with testimony, 
             but follows Bluebook rules (colon delimiter, prefix before the committee name) for
             references to the whole hearing. We simply follow the Bluebook rules for both, but
             use APA style capitalization (not capitalizing "Before" or the title of the hearing). -->
        <group delimiter=": " font-style="italic">
          <text variable="title" text-case="capitalize-first"/>
          <group delimiter=" ">
            <text term="hearing" form="long" text-case="capitalize-first"/>
            <group delimiter=" ">
              <group delimiter=" ">
                <!-- APA manual omits the bill number, but it should be included per Bluebook if relevant -->
                <text term="on"/>
                <text variable="number"/>
              </group>
              <group delimiter=" ">
                <!-- Use the at term to hold "before the" -->
                <text term="at" form="long"/>
                <text variable="section"/>
              </group>
            </group>
          </group>
        </group>
      </else-if>
    </choose>
  </macro>
  <macro name="date-legal">
    <choose>
      <if type="treaty">
        <date variable="issued" form="text"/>
      </if>
      <else-if type="legal_case">
        <group prefix="(" suffix=")" delimiter=" ">
          <text variable="authority"/>
          <choose>
            <if variable="container-title" match="any">
              <!-- Print only year for cases published in reporters-->
              <date variable="issued" form="numeric" date-parts="year"/>
            </if>
            <else>
              <!-- APA manual doesn't include examples of cases not yet
                   published in a reporter, but this is Bluebook style. -->
              <date variable="issued" form="text"/>
            </else>
          </choose>
        </group>
      </else-if>
      <else-if type="bill hearing legislation regulation" match="any">
        <group prefix="(" suffix=")" delimiter=" ">
          <group delimiter=" ">
            <date variable="original-date">
              <date-part name="year"/>
            </date>
            <text term="and" form="symbol"/>
          </group>
          <choose>
            <if variable="issued">
              <!-- APA manual includes "rev." before the revision year, 
                   but this isn't part of the Bluebook rules. -->
              <date variable="issued">
                <date-part name="year"/>
              </date>
            </if>
            <else>
              <!-- Show proposal date for uncodified regualtions. 
                   Assume date is entered literally ala "proposed May 23, 2016".
                   TODO: Add 'proposed' term here if that becomes available -->
              <date variable="submitted" form="text"/>
            </else>
          </choose>
        </group>
      </else-if>
    </choose>
  </macro>
  <macro name="container-legal">
    <!-- Expect legal item container-titles to be stored in short form -->
    <choose>
      <if type="treaty">
        <group delimiter=" ">
          <number variable="volume"/>
          <text variable="container-title"/>
          <choose>
            <if variable="page page-first" match="any">
              <text variable="page-first"/>
            </if>
            <else>
              <group delimiter=" ">
                <label variable="number" form="short" text-case="capitalize-first"/>
                <text variable="number"/>
              </group>
            </else>
          </choose>
        </group>
      </if>
      <else-if type="legal_case">
        <group delimiter=" ">
          <choose>
            <if variable="container-title">
              <group delimiter=" ">
                <text variable="volume"/>
                <text variable="container-title"/>
                <group delimiter=" ">
                  <label variable="section" form="symbol"/>
                  <text variable="section"/>
                </group>
                <choose>
                  <if variable="page page-first" match="any">
                    <text variable="page-first"/>
                  </if>
                  <else>
                    <text value="___"/>
                  </else>
                </choose>
              </group>
            </if>
            <else>
              <group delimiter=" ">
                <label variable="number" form="short" text-case="capitalize-first"/>
                <text variable="number"/>
              </group>
            </else>
          </choose>
        </group>
      </else-if>
      <else-if type="bill">
        <group delimiter=", ">
          <group delimiter=" ">
            <text variable="genre"/>
            <group delimiter=" ">
              <choose>
                <!-- If there is no session number or code/record title, assume
                     assume the item is a congressional report and include 'No.' term. -->
                <if variable="chapter-number container-title" match="none">
                  <!-- The item is a congressional report, rather than a bill or resultion. -->
                  <label variable="number" form="short" text-case="capitalize-first"/>
                </if>
              </choose>
              <text variable="number"/>
            </group>
          </group>
          <group delimiter=" ">
            <text variable="authority"/>
            <!-- 'session' is chapter-number -->
            <text variable="chapter-number"/>
          </group>
          <group delimiter=" ">
            <text variable="volume"/>
            <text variable="container-title"/>
            <text variable="page-first"/>
          </group>
        </group>
      </else-if>
      <else-if type="hearing">
        <group delimiter=" ">
          <text variable="authority"/>
          <!-- 'session' is chapter-number -->
          <text variable="chapter-number"/>
        </group>
      </else-if>
      <else-if type="legislation">
        <choose>
          <if variable="number">
            <!-- There's a public law number. -->
            <group delimiter=", ">
              <text variable="number" prefix="Pub. L. No. "/>
              <group delimiter=" ">
                <text variable="volume"/>
                <text variable="container-title"/>
                <text variable="page-first"/>
              </group>
            </group>
          </if>
          <else>
            <group delimiter=" ">
              <text variable="volume"/>
              <text variable="container-title"/>
              <choose>
                <if variable="section">
                  <group delimiter=" ">
                    <label variable="section" form="symbol"/>
                    <text variable="section"/>
                  </group>
                </if>
                <else>
                  <text variable="page-first"/>
                </else>
              </choose>
            </group>
          </else>
        </choose>
      </else-if>
      <else-if type="regulation">
        <group delimiter=", ">
          <group delimiter=" ">
            <text variable="genre"/>
            <group delimiter=" ">
              <label variable="number" form="short" text-case="capitalize-first"/>
              <text variable="number"/>
            </group>
          </group>
          <group delimiter=" ">
            <text variable="volume"/>
            <text variable="container-title"/>
            <choose>
              <if variable="section">
                <group delimiter=" ">
                  <label variable="section" form="symbol"/>
                  <text variable="section"/>
                </group>
              </if>
              <else>
                <text variable="page-first"/>
              </else>
            </choose>
          </group>
        </group>
      </else-if>
    </choose>
  </macro>
  <macro name="parenthetical-legal">
    <choose>
      <if type="hearing">
        <group prefix="(" suffix=")" delimiter=" ">
          <!-- Use the 'verb' form of the hearing term to hold 'testimony of' -->
          <text term="hearing" form="verb"/>
          <names variable="author">
            <name and="symbol" delimiter=", "/>
          </names>
        </group>
      </if>
      <else-if type="bill legislation regulation" match="any">
        <!-- For uncodified regulations, assume future code section is in status. -->
        <text variable="status" prefix="(" suffix=")"/>
      </else-if>
    </choose>
  </macro>
  <macro name="citation-locator">
    <!-- Abbreviate page and paragraph, leave other locator labels in long form, cf. Rule 8.13 -->
    <group delimiter=" ">
      <choose>
        <if locator="page paragraph" match="any">
          <label variable="locator" form="short"/>
        </if>
        <else>
          <label variable="locator" text-case="capitalize-first"/>
        </else>
      </choose>
      <text variable="locator"/>
    </group>
  </macro>
  <citation et-al-min="3" et-al-use-first="1" disambiguate-add-year-suffix="true" disambiguate-add-names="true" disambiguate-add-givenname="true" collapse="year" givenname-disambiguation-rule="primary-name-with-initials">
    <sort>
      <key macro="author-sort" names-min="3" names-use-first="1"/>
      <key macro="date-sort-group" sort="ascending"/>
      <key macro="date-sort" sort="ascending"/>
      <key variable="status"/>
    </sort>
    <layout prefix="(" suffix=")" delimiter="; ">
      <group delimiter=", ">
        <text macro="author-intext"/>
        <text macro="date-intext"/>
        <text macro="citation-locator"/>
      </group>
    </layout>
  </citation>
  <bibliography hanging-indent="true" et-al-min="21" et-al-use-first="19" et-al-use-last="true" entry-spacing="0" line-spacing="2">
    <sort>
      <key macro="author-sort"/>
      <key macro="date-sort-group" sort="ascending"/>
      <key macro="date-sort" sort="ascending"/>
      <key variable="status"/>
      <key macro="title"/>
    </sort>
    <layout>
      <choose>
        <if type="bill hearing legal_case legislation regulation treaty" match="any">
          <!-- Legal items have different orders and delimiters -->
          <text macro="legal-cites"/>
        </if>
        <else>
          <group delimiter=" ">
            <group delimiter=". " suffix=".">
              <text macro="author-bib"/>
              <text macro="date-bib"/>
              <text macro="title-and-descriptions"/>
              <text macro="container"/>
              <text macro="event"/>
              <text macro="publisher"/>
            </group>
            <text macro="access"/>
            <text macro="publication-history"/>
          </group>
        </else>
      </choose>
    </layout>
  </bibliography>
</style>`,
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

// ====================================================================
// KCITE CITATION PROCESSING AND OUTPUT
// ====================================================================

// modify the HTML output format so that the bibliography hyperlinks
CSL.Output.Formats.kcite = CSL.Output.Formats.html;
CSL.Output.Formats.kcite["@bibliography/body"] = function (state, str) {
  return '<ol class="csl-bib-body">\n' + str + "</ol>";
};
CSL.Output.Formats.kcite["@bibliography/entry"] = function (state, str) {
  // Use item_id directly for anchor name
  var anchorName = this.item_id || "";

  return '  <li class="csl-entry" id="' + anchorName + '">' + str;
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

// ====================================================================
// STYLE MANAGEMENT FUNCTIONS
// ====================================================================

jQuery.noConflict();
jQuery(document).ready(function ($) {
  var kcite_controls_shown = false;

  var render = function (citation_data, kcite_section, kcite_section_id) {
    var task_queue = [];

    var section_contains_unresolved = false;
    var section_contains_timeout = false;

    var sys = {
      retrieveItem: function (id) {
        return citation_data[id];
      },

      retrieveLocale: function (lang) {
        // Return the locale from our embedded locales
        return kcite_locales[lang] || kcite_locales[kcite_default_locale];
      },
    };

    // instantiate the citeproc object with the default style
    var style_xml = kcite_styles[kcite_default_style];
    var citeproc = new CSL.Engine(sys, style_xml);

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
          var bibindex = cite_id.split("-").pop();

          // the true here should mean that citeproc always
          // returns only a single element array. It doesn't
          // seem to work, as ambiguous cases still return more.
          //console.log( "appending cite" );
          var citation = citeproc.appendCitationCluster(citation_object, true);
          //console.log( citation );
          // citeproc's wierd return values. Last element is citation we want.
          // last element again is the HTML.

          var citation =
            '<a href="#' +
            cite_id +
            '">[' +
            bibindex +
            "]</a>" +
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
        if (kcite_style_cleaner[kcite_default_style]) {
          bib_string =
            bib_string + kcite_style_cleaner[kcite_default_style](item);
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
            '" checked="checked">APA</input>\
</div>'
        );
        style.buttonset();

        // APA is the default and only style now
        style.find(":radio").eq(0).prop("checked", "true");

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

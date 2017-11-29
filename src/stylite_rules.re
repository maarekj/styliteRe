type selector = string;

type declaration = ..;

type declaration +=
  | Azimuth (string)
  | Background (string)
  | BackgroundAttachment (string)
  | BackgroundColor (string)
  | BackgroundImage (string)
  | BackgroundPosition (string)
  | BackgroundRepeat (string)
  | Border (string)
  | BorderCollapse (string)
  | BorderColor (string)
  | BorderSpacing (string)
  | BorderStyle (string)
  | BorderTop (string)
  | BorderRight (string)
  | BorderBottom (string)
  | BorderLeft (string)
  | BorderTopColor (string)
  | BorderRightColor (string)
  | BorderBottomColor (string)
  | BorderLeftColor (string)
  | BorderTopStyle (string)
  | BorderRightStyle (string)
  | BorderBottomStyle (string)
  | BorderLeftStyle (string)
  | BorderTopWidth (string)
  | BorderRightWidth (string)
  | BorderBottomWidth (string)
  | BorderLeftWidth (string)
  | BorderWidth (string)
  | Bottom (string)
  | CaptionSide (string)
  | Clear (string)
  | Color (string)
  | Content (string)
  | CounterIncrement (string)
  | CounterReset (string)
  | Cue (string)
  | CueAfter (string)
  | CueBefore (string)
  | Cursor (string)
  | Direction (string)
  | Display (string)
  | Elevation (string)
  | EmptyCells (string)
  | Float (string)
  | Font (string)
  | FontFamily (string)
  | FontSize (string)
  | FontSizeAdjust (string)
  | FontStretch (string)
  | FontStyle (string)
  | FontVariant (string)
  | FontWeight (string)
  | Height (string)
  | Left (string)
  | LetterSpacing (string)
  | LineHeight (string)
  | ListStyle (string)
  | ListStyleImage (string)
  | ListStylePosition (string)
  | ListStyleType (string)
  | Margin (string)
  | MarginTop (string)
  | MarginRight (string)
  | MarginBottom (string)
  | MarginLeft (string)
  | MarkerOffset (string)
  | Marks (string)
  | MaxHeight (string)
  | MaxWidth (string)
  | MinHeight (string)
  | MinWidth (string)
  | Orphans (string)
  | Outline (string)
  | OutlineColor (string)
  | OutlineStyle (string)
  | OutlineWidth (string)
  | Overflow (string)
  | OverflowX (string)
  | OverflowY (string)
  | Padding (string)
  | PaddingTop (string)
  | PaddingRight (string)
  | PaddingBottom (string)
  | PaddingLeft (string)
  | Page (string)
  | PageBreakAfter (string)
  | PageBreakBefore (string)
  | PageBreakInside (string)
  | Pause (string)
  | PauseAfter (string)
  | PauseBefore (string)
  | Pitch (string)
  | PitchRange (string)
  | PlayDuring (string)
  | Position (string)
  | Quotes (string)
  | Richness (string)
  | Right (string)
  | Size (string)
  | Speak (string)
  | SpeakHeader (string)
  | SpeakNumeral (string)
  | SpeakPunctuation (string)
  | SpeechRate (string)
  | Stress (string)
  | TableLayout (string)
  | TextAlign (string)
  | TextDecoration (string)
  | TextIndent (string)
  | TextShadow (string)
  | TextTransform (string)
  | Top (string)
  | UnicodeBidi (string)
  | VerticalAlign (string)
  | Visibility (string)
  | VoiceFamily (string)
  | Volume (string)
  | WhiteSpace (string)
  | Widows (string)
  | Width (string)
  | WordSpacing (string)
  | ZIndex (string)
  | Opacity (string)
  | BackgroundOrigin (string)
  | BackgroundSize (string)
  | BackgroundClip (string)
  | BorderRadius (string)
  | BorderTopLeftRadius (string)
  | BorderTopRightRadius (string)
  | BorderBottomLeftRadius (string)
  | BorderBottomRightRadius (string)
  | BorderImage (string)
  | BorderImageSource (string)
  | BorderImageSlice (string)
  | BorderImageWidth (string)
  | BorderImageOutset (string)
  | BorderImageRepeat (string)
  | BoxShadow (string)
  | Columns (string)
  | ColumnCount (string)
  | ColumnFill (string)
  | ColumnGap (string)
  | ColumnRule (string)
  | ColumnRuleColor (string)
  | ColumnRuleStyle (string)
  | ColumnRuleWidth (string)
  | ColumnSpan (string)
  | ColumnWidth (string)
  | BreakAfter (string)
  | BreakBefore (string)
  | BreakInside (string)
  | Rest (string)
  | RestAfter (string)
  | RestBefore (string)
  | SpeakAs (string)
  | VoiceBalance (string)
  | VoiceDuration (string)
  | VoicePitch (string)
  | VoiceRange (string)
  | VoiceRate (string)
  | VoiceStress (string)
  | VoiceVolume (string)
  | ObjectFit (string)
  | ObjectPosition (string)
  | ImageResolution (string)
  | ImageOrientation (string)
  | AlignContent (string)
  | AlignItems (string)
  | AlignSelf (string)
  | Flex (string)
  | FlexBasis (string)
  | FlexDirection (string)
  | FlexFlow (string)
  | FlexGrow (string)
  | FlexShrink (string)
  | FlexWrap (string)
  | JustifyContent (string)
  | Order (string)
  | TextDecorationColor (string)
  | TextDecorationLine (string)
  | TextDecorationSkip (string)
  | TextDecorationStyle (string)
  | TextEmphasis (string)
  | TextEmphasisColor (string)
  | TextEmphasisPosition (string)
  | TextEmphasisStyle (string)
  | TextUnderlinePosition (string)
  | FontFeatureSettings (string)
  | FontKerning (string)
  | FontLanguageOverride (string)
  | FontSynthesis (string)
  | ForntVariantAlternates (string)
  | FontVariantCaps (string)
  | FontVariantEastAsian (string)
  | FontVariantLigatures (string)
  | FontVariantNumeric (string)
  | FontVariantPosition (string)
  | All (string)
  | TextCombineUpright (string)
  | TextOrientation (string)
  | WritingMode (string)
  | ShapeImageThreshold (string)
  | ShapeMargin (string)
  | ShapeOutside (string)
  | Mask (string)
  | MaskBorder (string)
  | MaskBorderMode (string)
  | MaskBorderOutset (string)
  | MaskBorderRepeat (string)
  | MaskBorderSlice (string)
  | MaskBorderSource (string)
  | MaskBorderWidth (string)
  | MaskClip (string)
  | MaskComposite (string)
  | MaskImage (string)
  | MaskMode (string)
  | MaskOrigin (string)
  | MaskPosition (string)
  | MaskRepeat (string)
  | MaskSize (string)
  | MaskType (string)
  | BackgroundBlendMode (string)
  | Isolation (string)
  | MixBlendMode (string)
  | BoxDecorationBreak (string)
  | BoxSizing (string)
  | CaretColor (string)
  | NavDown (string)
  | NavLeft (string)
  | NavRight (string)
  | NavUp (string)
  | OutlineOffset (string)
  | Resize (string)
  | TextOverflow (string)
  | Grid (string)
  | GridArea (string)
  | GridAutoColumns (string)
  | GridAutoFlow (string)
  | GridAutoRows (string)
  | GridColumn (string)
  | GridColumnEnd (string)
  | GridColumnGap (string)
  | GridColumnStart (string)
  | GridGap (string)
  | GridRow (string)
  | GridRowEnd (string)
  | GridRowGap (string)
  | GridRowStart (string)
  | GridTemplate (string)
  | GridTempalteAreas (string)
  | GridTemplateColumns (string)
  | GridTemplateRows (string)
  | WillChange (string)
  | HangingPunctuation (string)
  | Hyphens (string)
  | LineBreak (string)
  | OverflowWrap (string)
  | TabSize (string)
  | TextAlignLast (string)
  | TextJustify (string)
  | WordBreak (string)
  | WordWrap (string)
  | Animation (string)
  | AnimationDelay (string)
  | AnimationDirection (string)
  | AnimationDuration (string)
  | AnimationFillMode (string)
  | AnimationIterationCount (string)
  | AnimationName (string)
  | AnimationPlayState (string)
  | AnimationTimingFunction (string)
  | Transition (string)
  | TransitionDelay (string)
  | TransitionDuration (string)
  | TransitionProperty (string)
  | TransitionTimingFunction (string)
  | BackfaceVisibility (string)
  | Perspective (string)
  | PerspectiveOrigin (string)
  | Transform (string)
  | TransformOrigin (string)
  | TransformStyle (string)
  | JustifyItems (string)
  | JustifySelf (string)
  | PlaceContent (string)
  | PlaceItems (string)
  | PlaceSelf (string)
  | Appearance (string)
  | Caret (string)
  | CaretAnimation (string)
  | CaretShape (string)
  | UserSelect (string)
  | MaxLines (string)
  | MarqueeDirection (string)
  | MarqueeLoop (string)
  | MarqueeSpeed (string)
  | MarqueeStyle (string)
  | OverflowStyle (string)
  | Rotation (string)
  | RotationPoint (string)
  | AlignmentBaseline (string)
  | BaselineShift (string)
  | Clip (string)
  | ClipPath (string)
  | ClipRule (string)
  | ColorInterpolation (string)
  | ColorInterpolationFilters (string)
  | ColorProfile (string)
  | ColorRendering (string)
  | DominantBaseline (string)
  | Fill (string)
  | FillOpacity (string)
  | FillRule (string)
  | Filter (string)
  | FloodColor (string)
  | FloodOpacity (string)
  | GlyphOrientationHorizontal (string)
  | GlyphOrientationVertical (string)
  | ImageRendering (string)
  | Kerning (string)
  | LightingColor (string)
  | MarkerEnd (string)
  | MarkerMid (string)
  | MarkerStart (string)
  | PointerEvents (string)
  | ShapeRendering (string)
  | StopColor (string)
  | StopOpacity (string)
  | Stroke (string)
  | StrokeDasharray (string)
  | StrokeDashoffset (string)
  | StrokeLinecap (string)
  | StrokeLinejoin (string)
  | StrokeMiterlimit (string)
  | StrokeOpacity (string)
  | StrokeWidth (string)
  | TextAnchor (string)
  | TextRendering (string)
  | RubyAlign (string)
  | RubyMerge (string)
  | RubyPosition (string)
  | CustomProperty (string, string)
  | CustomRule (string);

type rule = (list(selector), list(declaration));

let print_declaration = (declaration) =>
  switch declaration {
  | Azimuth(value) => "azimuth: " ++ value ++ ";"
  | Background(value) => "background: " ++ value ++ ";"
  | BackgroundAttachment(value) => "background-attachment: " ++ value ++ ";"
  | BackgroundColor(value) => "background-color: " ++ value ++ ";"
  | BackgroundImage(value) => "background-image: " ++ value ++ ";"
  | BackgroundPosition(value) => "background-position: " ++ value ++ ";"
  | BackgroundRepeat(value) => "background-repeat: " ++ value ++ ";"
  | Border(value) => "border: " ++ value ++ ";"
  | BorderCollapse(value) => "border-collapse: " ++ value ++ ";"
  | BorderColor(value) => "border-color: " ++ value ++ ";"
  | BorderSpacing(value) => "border-spacing: " ++ value ++ ";"
  | BorderStyle(value) => "border-style: " ++ value ++ ";"
  | BorderTop(value) => "border-top: " ++ value ++ ";"
  | BorderRight(value) => "border-right: " ++ value ++ ";"
  | BorderBottom(value) => "border-bottom: " ++ value ++ ";"
  | BorderLeft(value) => "border-left: " ++ value ++ ";"
  | BorderTopColor(value) => "border-top-color: " ++ value ++ ";"
  | BorderRightColor(value) => "border-right-color: " ++ value ++ ";"
  | BorderBottomColor(value) => "border-bottom-color: " ++ value ++ ";"
  | BorderLeftColor(value) => "border-left-color: " ++ value ++ ";"
  | BorderTopStyle(value) => "border-top-style: " ++ value ++ ";"
  | BorderRightStyle(value) => "border-right-style: " ++ value ++ ";"
  | BorderBottomStyle(value) => "border-bottom-style: " ++ value ++ ";"
  | BorderLeftStyle(value) => "border-left-style: " ++ value ++ ";"
  | BorderTopWidth(value) => "border-top-width: " ++ value ++ ";"
  | BorderRightWidth(value) => "border-right-width: " ++ value ++ ";"
  | BorderBottomWidth(value) => "border-bottom-width: " ++ value ++ ";"
  | BorderLeftWidth(value) => "border-left-width: " ++ value ++ ";"
  | BorderWidth(value) => "border-width: " ++ value ++ ";"
  | Bottom(value) => "bottom: " ++ value ++ ";"
  | CaptionSide(value) => "caption-side: " ++ value ++ ";"
  | Clear(value) => "clear: " ++ value ++ ";"
  | Color(value) => "color: " ++ value ++ ";"
  | Content(value) => "content: " ++ value ++ ";"
  | CounterIncrement(value) => "counter-increment: " ++ value ++ ";"
  | CounterReset(value) => "counter-reset : " ++ value ++ ";"
  | Cue(value) => "cue: " ++ value ++ ";"
  | CueAfter(value) => "cue-after: " ++ value ++ ";"
  | CueBefore(value) => "cue-before: " ++ value ++ ";"
  | Cursor(value) => "cursor: " ++ value ++ ";"
  | Direction(value) => "direction: " ++ value ++ ";"
  | Display(value) => "display: " ++ value ++ ";"
  | Elevation(value) => "elevation: " ++ value ++ ";"
  | EmptyCells(value) => "empty-cells: " ++ value ++ ";"
  | Float(value) => "float: " ++ value ++ ";"
  | Font(value) => "font: " ++ value ++ ";"
  | FontFamily(value) => "font-family: " ++ value ++ ";"
  | FontSize(value) => "font-size: " ++ value ++ ";"
  | FontSizeAdjust(value) => "font-size-adjust: " ++ value ++ ";"
  | FontStretch(value) => "font-stretch: " ++ value ++ ";"
  | FontStyle(value) => "font-style: " ++ value ++ ";"
  | FontVariant(value) => "font-variant: " ++ value ++ ";"
  | FontWeight(value) => "font-weight: " ++ value ++ ";"
  | Height(value) => "height: " ++ value ++ ";"
  | Left(value) => "left: " ++ value ++ ";"
  | LetterSpacing(value) => "letter-spacing: " ++ value ++ ";"
  | LineHeight(value) => "line-height: " ++ value ++ ";"
  | ListStyle(value) => "list-style: " ++ value ++ ";"
  | ListStyleImage(value) => "list-style-image: " ++ value ++ ";"
  | ListStylePosition(value) => "list-style-position: " ++ value ++ ";"
  | ListStyleType(value) => "list-style-type: " ++ value ++ ";"
  | Margin(value) => "margin: " ++ value ++ ";"
  | MarginTop(value) => "margin-top: " ++ value ++ ";"
  | MarginRight(value) => "margin-right: " ++ value ++ ";"
  | MarginBottom(value) => "margin-bottom: " ++ value ++ ";"
  | MarginLeft(value) => "margin-left: " ++ value ++ ";"
  | MarkerOffset(value) => "marker-offset: " ++ value ++ ";"
  | Marks(value) => "marks: " ++ value ++ ";"
  | MaxHeight(value) => "max-height: " ++ value ++ ";"
  | MaxWidth(value) => "max-width: " ++ value ++ ";"
  | MinHeight(value) => "min-height: " ++ value ++ ";"
  | MinWidth(value) => "min-width: " ++ value ++ ";"
  | Orphans(value) => "orphans: " ++ value ++ ";"
  | Outline(value) => "outline: " ++ value ++ ";"
  | OutlineColor(value) => "outline-color: " ++ value ++ ";"
  | OutlineStyle(value) => "outline-style: " ++ value ++ ";"
  | OutlineWidth(value) => "outline-width: " ++ value ++ ";"
  | Overflow(value) => "overflow: " ++ value ++ ";"
  | OverflowX(value) => "overflow-x: " ++ value ++ ";"
  | OverflowY(value) => "overflow-y: " ++ value ++ ";"
  | Padding(value) => "padding: " ++ value ++ ";"
  | PaddingTop(value) => "padding-top: " ++ value ++ ";"
  | PaddingRight(value) => "padding-right: " ++ value ++ ";"
  | PaddingBottom(value) => "padding-bottom: " ++ value ++ ";"
  | PaddingLeft(value) => "padding-left: " ++ value ++ ";"
  | Page(value) => "page: " ++ value ++ ";"
  | PageBreakAfter(value) => "page-break-after: " ++ value ++ ";"
  | PageBreakBefore(value) => "page-break-before: " ++ value ++ ";"
  | PageBreakInside(value) => "page-break-inside: " ++ value ++ ";"
  | Pause(value) => "pause: " ++ value ++ ";"
  | PauseAfter(value) => "pause-after: " ++ value ++ ";"
  | PauseBefore(value) => "pause-before: " ++ value ++ ";"
  | Pitch(value) => "pitch: " ++ value ++ ";"
  | PitchRange(value) => "pitch-range: " ++ value ++ ";"
  | PlayDuring(value) => "play-during: " ++ value ++ ";"
  | Position(value) => "position: " ++ value ++ ";"
  | Quotes(value) => "quotes: " ++ value ++ ";"
  | Richness(value) => "richness: " ++ value ++ ";"
  | Right(value) => "right: " ++ value ++ ";"
  | Size(value) => "size: " ++ value ++ ";"
  | Speak(value) => "speak: " ++ value ++ ";"
  | SpeakHeader(value) => "speak-header: " ++ value ++ ";"
  | SpeakNumeral(value) => "speak-numeral: " ++ value ++ ";"
  | SpeakPunctuation(value) => "speak-punctuation: " ++ value ++ ";"
  | SpeechRate(value) => "speech-rate: " ++ value ++ ";"
  | Stress(value) => "stress: " ++ value ++ ";"
  | TableLayout(value) => "table-layout: " ++ value ++ ";"
  | TextAlign(value) => "text-align: " ++ value ++ ";"
  | TextDecoration(value) => "text-decoration: " ++ value ++ ";"
  | TextIndent(value) => "text-indent: " ++ value ++ ";"
  | TextShadow(value) => "text-shadow: " ++ value ++ ";"
  | TextTransform(value) => "text-transform: " ++ value ++ ";"
  | Top(value) => "top: " ++ value ++ ";"
  | UnicodeBidi(value) => "unicode-bidi: " ++ value ++ ";"
  | VerticalAlign(value) => "vertical-align: " ++ value ++ ";"
  | Visibility(value) => "visibility: " ++ value ++ ";"
  | VoiceFamily(value) => "voice-family: " ++ value ++ ";"
  | Volume(value) => "volume: " ++ value ++ ";"
  | WhiteSpace(value) => "white-space: " ++ value ++ ";"
  | Widows(value) => "widows: " ++ value ++ ";"
  | Width(value) => "width: " ++ value ++ ";"
  | WordSpacing(value) => "word-spacing: " ++ value ++ ";"
  | ZIndex(value) => "z-index: " ++ value ++ ";"
  | Opacity(value) => "opacity: " ++ value ++ ";"
  | BackgroundOrigin(value) => "background-origin: " ++ value ++ ";"
  | BackgroundSize(value) => "background-size: " ++ value ++ ";"
  | BackgroundClip(value) => "background-clip: " ++ value ++ ";"
  | BorderRadius(value) => "border-radius: " ++ value ++ ";"
  | BorderTopLeftRadius(value) => "border-top-left-radius: " ++ value ++ ";"
  | BorderTopRightRadius(value) => "border-top-right-radius: " ++ value ++ ";"
  | BorderBottomLeftRadius(value) => "border-bottom-left-radius: " ++ value ++ ";"
  | BorderBottomRightRadius(value) => "border-bottom-right-radius: " ++ value ++ ";"
  | BorderImage(value) => "border-image: " ++ value ++ ";"
  | BorderImageSource(value) => "border-image-source: " ++ value ++ ";"
  | BorderImageSlice(value) => "border-image-slice: " ++ value ++ ";"
  | BorderImageWidth(value) => "border-image-width: " ++ value ++ ";"
  | BorderImageOutset(value) => "border-image-outset: " ++ value ++ ";"
  | BorderImageRepeat(value) => "border-image-repeat: " ++ value ++ ";"
  | BoxShadow(value) => "box-shadow: " ++ value ++ ";"
  | Columns(value) => "columns: " ++ value ++ ";"
  | ColumnCount(value) => "column-count: " ++ value ++ ";"
  | ColumnFill(value) => "column-fill: " ++ value ++ ";"
  | ColumnGap(value) => "column-gap: " ++ value ++ ";"
  | ColumnRule(value) => "column-rule: " ++ value ++ ";"
  | ColumnRuleColor(value) => "column-rule-color: " ++ value ++ ";"
  | ColumnRuleStyle(value) => "column-rule-style: " ++ value ++ ";"
  | ColumnRuleWidth(value) => "column-rule-width: " ++ value ++ ";"
  | ColumnSpan(value) => "column-span: " ++ value ++ ";"
  | ColumnWidth(value) => "column-width: " ++ value ++ ";"
  | BreakAfter(value) => "break-after: " ++ value ++ ";"
  | BreakBefore(value) => "break-before: " ++ value ++ ";"
  | BreakInside(value) => "break-inside: " ++ value ++ ";"
  | Rest(value) => "rest: " ++ value ++ ";"
  | RestAfter(value) => "rest-after: " ++ value ++ ";"
  | RestBefore(value) => "rest-before: " ++ value ++ ";"
  | SpeakAs(value) => "speak-as: " ++ value ++ ";"
  | VoiceBalance(value) => "voice-balance: " ++ value ++ ";"
  | VoiceDuration(value) => "voice-duration: " ++ value ++ ";"
  | VoicePitch(value) => "voice-pitch: " ++ value ++ ";"
  | VoiceRange(value) => "voice-range: " ++ value ++ ";"
  | VoiceRate(value) => "voice-rate: " ++ value ++ ";"
  | VoiceStress(value) => "voice-stress: " ++ value ++ ";"
  | VoiceVolume(value) => "voice-volume: " ++ value ++ ";"
  | ObjectFit(value) => "object-fit: " ++ value ++ ";"
  | ObjectPosition(value) => "object-position: " ++ value ++ ";"
  | ImageResolution(value) => "image-resolution: " ++ value ++ ";"
  | ImageOrientation(value) => "image-orientation: " ++ value ++ ";"
  | AlignContent(value) => "align-content: " ++ value ++ ";"
  | AlignItems(value) => "align-items: " ++ value ++ ";"
  | AlignSelf(value) => "align-self: " ++ value ++ ";"
  | Flex(value) => "flex: " ++ value ++ ";"
  | FlexBasis(value) => "flex-basis: " ++ value ++ ";"
  | FlexDirection(value) => "flex-direction: " ++ value ++ ";"
  | FlexFlow(value) => "flex-flow: " ++ value ++ ";"
  | FlexGrow(value) => "flex-grow: " ++ value ++ ";"
  | FlexShrink(value) => "flex-shrink: " ++ value ++ ";"
  | FlexWrap(value) => "flex-wrap: " ++ value ++ ";"
  | JustifyContent(value) => "justify-content: " ++ value ++ ";"
  | Order(value) => "order: " ++ value ++ ";"
  | TextDecorationColor(value) => "text-decoration-color: " ++ value ++ ";"
  | TextDecorationLine(value) => "text-decoration-line: " ++ value ++ ";"
  | TextDecorationSkip(value) => "text-decoration-skip: " ++ value ++ ";"
  | TextDecorationStyle(value) => "text-decoration-style: " ++ value ++ ";"
  | TextEmphasis(value) => "text-emphasis: " ++ value ++ ";"
  | TextEmphasisColor(value) => "text-emphasis-color: " ++ value ++ ";"
  | TextEmphasisPosition(value) => "text-emphasis-position: " ++ value ++ ";"
  | TextEmphasisStyle(value) => "text-emphasis-style: " ++ value ++ ";"
  | TextUnderlinePosition(value) => "text-underline-position: " ++ value ++ ";"
  | FontFeatureSettings(value) => "font-feature-settings: " ++ value ++ ";"
  | FontKerning(value) => "font-kerning: " ++ value ++ ";"
  | FontLanguageOverride(value) => "font-language-override: " ++ value ++ ";"
  | FontSynthesis(value) => "font-synthesis: " ++ value ++ ";"
  | ForntVariantAlternates(value) => "fornt-variant-alternates: " ++ value ++ ";"
  | FontVariantCaps(value) => "font-variant-caps: " ++ value ++ ";"
  | FontVariantEastAsian(value) => "font-variant-east-asian: " ++ value ++ ";"
  | FontVariantLigatures(value) => "font-variant-ligatures: " ++ value ++ ";"
  | FontVariantNumeric(value) => "font-variant-numeric: " ++ value ++ ";"
  | FontVariantPosition(value) => "font-variant-position: " ++ value ++ ";"
  | All(value) => "all: " ++ value ++ ";"
  | TextCombineUpright(value) => "text-combine-upright: " ++ value ++ ";"
  | TextOrientation(value) => "text-orientation: " ++ value ++ ";"
  | WritingMode(value) => "writing-mode: " ++ value ++ ";"
  | ShapeImageThreshold(value) => "shape-image-threshold: " ++ value ++ ";"
  | ShapeMargin(value) => "shape-margin: " ++ value ++ ";"
  | ShapeOutside(value) => "shape-outside: " ++ value ++ ";"
  | Mask(value) => "mask: " ++ value ++ ";"
  | MaskBorder(value) => "mask-border: " ++ value ++ ";"
  | MaskBorderMode(value) => "mask-border-mode: " ++ value ++ ";"
  | MaskBorderOutset(value) => "mask-border-outset: " ++ value ++ ";"
  | MaskBorderRepeat(value) => "mask-border-repeat: " ++ value ++ ";"
  | MaskBorderSlice(value) => "mask-border-slice: " ++ value ++ ";"
  | MaskBorderSource(value) => "mask-border-source: " ++ value ++ ";"
  | MaskBorderWidth(value) => "mask-border-width: " ++ value ++ ";"
  | MaskClip(value) => "mask-clip: " ++ value ++ ";"
  | MaskComposite(value) => "mask-composite: " ++ value ++ ";"
  | MaskImage(value) => "mask-image: " ++ value ++ ";"
  | MaskMode(value) => "mask-mode: " ++ value ++ ";"
  | MaskOrigin(value) => "mask-origin: " ++ value ++ ";"
  | MaskPosition(value) => "mask-position: " ++ value ++ ";"
  | MaskRepeat(value) => "mask-repeat: " ++ value ++ ";"
  | MaskSize(value) => "mask-size: " ++ value ++ ";"
  | MaskType(value) => "mask-type: " ++ value ++ ";"
  | BackgroundBlendMode(value) => "background-blend-mode: " ++ value ++ ";"
  | Isolation(value) => "isolation: " ++ value ++ ";"
  | MixBlendMode(value) => "mix-blend-mode: " ++ value ++ ";"
  | BoxDecorationBreak(value) => "box-decoration-break: " ++ value ++ ";"
  | BoxSizing(value) => "box-sizing: " ++ value ++ ";"
  | CaretColor(value) => "caret-color: " ++ value ++ ";"
  | NavDown(value) => "nav-down: " ++ value ++ ";"
  | NavLeft(value) => "nav-left: " ++ value ++ ";"
  | NavRight(value) => "nav-right: " ++ value ++ ";"
  | NavUp(value) => "nav-up: " ++ value ++ ";"
  | OutlineOffset(value) => "outline-offset: " ++ value ++ ";"
  | Resize(value) => "resize: " ++ value ++ ";"
  | TextOverflow(value) => "text-overflow: " ++ value ++ ";"
  | Grid(value) => "grid: " ++ value ++ ";"
  | GridArea(value) => "grid-area: " ++ value ++ ";"
  | GridAutoColumns(value) => "grid-auto-columns: " ++ value ++ ";"
  | GridAutoFlow(value) => "grid-auto-flow: " ++ value ++ ";"
  | GridAutoRows(value) => "grid-auto-rows: " ++ value ++ ";"
  | GridColumn(value) => "grid-column: " ++ value ++ ";"
  | GridColumnEnd(value) => "grid-column-end: " ++ value ++ ";"
  | GridColumnGap(value) => "grid-column-gap: " ++ value ++ ";"
  | GridColumnStart(value) => "grid-column-start: " ++ value ++ ";"
  | GridGap(value) => "grid-gap: " ++ value ++ ";"
  | GridRow(value) => "grid-row: " ++ value ++ ";"
  | GridRowEnd(value) => "grid-row-end: " ++ value ++ ";"
  | GridRowGap(value) => "grid-row-gap: " ++ value ++ ";"
  | GridRowStart(value) => "grid-row-start: " ++ value ++ ";"
  | GridTemplate(value) => "grid-template: " ++ value ++ ";"
  | GridTempalteAreas(value) => "grid-tempalte-areas: " ++ value ++ ";"
  | GridTemplateColumns(value) => "grid-template-columns: " ++ value ++ ";"
  | GridTemplateRows(value) => "grid-template-rows: " ++ value ++ ";"
  | WillChange(value) => "will-change: " ++ value ++ ";"
  | HangingPunctuation(value) => "hanging-punctuation: " ++ value ++ ";"
  | Hyphens(value) => "hyphens: " ++ value ++ ";"
  | LineBreak(value) => "line-break: " ++ value ++ ";"
  | OverflowWrap(value) => "overflow-wrap: " ++ value ++ ";"
  | TabSize(value) => "tab-size: " ++ value ++ ";"
  | TextAlignLast(value) => "text-align-last: " ++ value ++ ";"
  | TextJustify(value) => "text-justify: " ++ value ++ ";"
  | WordBreak(value) => "word-break: " ++ value ++ ";"
  | WordWrap(value) => "word-wrap: " ++ value ++ ";"
  | Animation(value) => "animation: " ++ value ++ ";"
  | AnimationDelay(value) => "animation-delay: " ++ value ++ ";"
  | AnimationDirection(value) => "animation-direction: " ++ value ++ ";"
  | AnimationDuration(value) => "animation-duration: " ++ value ++ ";"
  | AnimationFillMode(value) => "animation-fill-mode: " ++ value ++ ";"
  | AnimationIterationCount(value) => "animation-iteration-count: " ++ value ++ ";"
  | AnimationName(value) => "animation-name: " ++ value ++ ";"
  | AnimationPlayState(value) => "animation-play-state: " ++ value ++ ";"
  | AnimationTimingFunction(value) => "animation-timing-function: " ++ value ++ ";"
  | Transition(value) => "transition: " ++ value ++ ";"
  | TransitionDelay(value) => "transition-delay: " ++ value ++ ";"
  | TransitionDuration(value) => "transition-duration: " ++ value ++ ";"
  | TransitionProperty(value) => "transition-property: " ++ value ++ ";"
  | TransitionTimingFunction(value) => "transition-timing-function: " ++ value ++ ";"
  | BackfaceVisibility(value) => "backface-visibility: " ++ value ++ ";"
  | Perspective(value) => "perspective: " ++ value ++ ";"
  | PerspectiveOrigin(value) => "perspective-origin: " ++ value ++ ";"
  | Transform(value) => "transform: " ++ value ++ ";"
  | TransformOrigin(value) => "transform-origin: " ++ value ++ ";"
  | TransformStyle(value) => "transform-style: " ++ value ++ ";"
  | JustifyItems(value) => "justify-items: " ++ value ++ ";"
  | JustifySelf(value) => "justify-self: " ++ value ++ ";"
  | PlaceContent(value) => "place-content: " ++ value ++ ";"
  | PlaceItems(value) => "place-items: " ++ value ++ ";"
  | PlaceSelf(value) => "place-self: " ++ value ++ ";"
  | Appearance(value) => "appearance: " ++ value ++ ";"
  | Caret(value) => "caret: " ++ value ++ ";"
  | CaretAnimation(value) => "caret-animation: " ++ value ++ ";"
  | CaretShape(value) => "caret-shape: " ++ value ++ ";"
  | UserSelect(value) => "user-select: " ++ value ++ ";"
  | MaxLines(value) => "max-lines: " ++ value ++ ";"
  | MarqueeDirection(value) => "marquee-direction: " ++ value ++ ";"
  | MarqueeLoop(value) => "marquee-loop: " ++ value ++ ";"
  | MarqueeSpeed(value) => "marquee-speed: " ++ value ++ ";"
  | MarqueeStyle(value) => "marquee-style: " ++ value ++ ";"
  | OverflowStyle(value) => "overflow-style: " ++ value ++ ";"
  | Rotation(value) => "rotation: " ++ value ++ ";"
  | RotationPoint(value) => "rotation-point: " ++ value ++ ";"
  | AlignmentBaseline(value) => "alignment-baseline: " ++ value ++ ";"
  | BaselineShift(value) => "baseline-shift: " ++ value ++ ";"
  | Clip(value) => "clip: " ++ value ++ ";"
  | ClipPath(value) => "clip-path: " ++ value ++ ";"
  | ClipRule(value) => "clip-rule: " ++ value ++ ";"
  | ColorInterpolation(value) => "color-interpolation: " ++ value ++ ";"
  | ColorInterpolationFilters(value) => "color-interpolation-filters: " ++ value ++ ";"
  | ColorProfile(value) => "color-profile: " ++ value ++ ";"
  | ColorRendering(value) => "color-rendering: " ++ value ++ ";"
  | DominantBaseline(value) => "dominant-baseline: " ++ value ++ ";"
  | Fill(value) => "fill: " ++ value ++ ";"
  | FillOpacity(value) => "fill-opacity: " ++ value ++ ";"
  | FillRule(value) => "fill-rule: " ++ value ++ ";"
  | Filter(value) => "filter: " ++ value ++ ";"
  | FloodColor(value) => "flood-color: " ++ value ++ ";"
  | FloodOpacity(value) => "flood-opacity: " ++ value ++ ";"
  | GlyphOrientationHorizontal(value) => "glyph-orientation-horizontal: " ++ value ++ ";"
  | GlyphOrientationVertical(value) => "glyph-orientation-vertical: " ++ value ++ ";"
  | ImageRendering(value) => "image-rendering: " ++ value ++ ";"
  | Kerning(value) => "kerning: " ++ value ++ ";"
  | LightingColor(value) => "lighting-color: " ++ value ++ ";"
  | MarkerEnd(value) => "marker-end: " ++ value ++ ";"
  | MarkerMid(value) => "marker-mid: " ++ value ++ ";"
  | MarkerStart(value) => "marker-start: " ++ value ++ ";"
  | PointerEvents(value) => "pointer-events: " ++ value ++ ";"
  | ShapeRendering(value) => "shape-rendering: " ++ value ++ ";"
  | StopColor(value) => "stop-color: " ++ value ++ ";"
  | StopOpacity(value) => "stop-opacity: " ++ value ++ ";"
  | Stroke(value) => "stroke: " ++ value ++ ";"
  | StrokeDasharray(value) => "stroke-dasharray: " ++ value ++ ";"
  | StrokeDashoffset(value) => "stroke-dashoffset: " ++ value ++ ";"
  | StrokeLinecap(value) => "stroke-linecap: " ++ value ++ ";"
  | StrokeLinejoin(value) => "stroke-linejoin: " ++ value ++ ";"
  | StrokeMiterlimit(value) => "stroke-miterlimit: " ++ value ++ ";"
  | StrokeOpacity(value) => "stroke-opacity: " ++ value ++ ";"
  | StrokeWidth(value) => "stroke-width: " ++ value ++ ";"
  | TextAnchor(value) => "text-anchor: " ++ value ++ ";"
  | TextRendering(value) => "text-rendering: " ++ value ++ ";"
  | RubyAlign(value) => "ruby-align: " ++ value ++ ";"
  | RubyMerge(value) => "ruby-merge: " ++ value ++ ";"
  | RubyPosition(value) => "ruby-position: " ++ value ++ ";"
  | CustomProperty(property, value) => property ++ ": " ++ value ++ ";"
  | CustomRule(rule) => rule
  | _ => "unknown: unknown;"
  };

let print_declarations = (declarations) => {
  let rec print_declarations_aux = (list, acc) =>
    switch list {
    | [] => acc
    | [decl, ...l] => print_declarations_aux(l, acc ++ "  " ++ print_declaration(decl) ++ "\n")
    };
  print_declarations_aux(declarations, "")
};

let print_selectors = (selectors) => Stylite_utils.join(", ", selectors);

let print_rule = (rule) =>
  switch rule {
  | (selectors, declarations) =>
    print_selectors(selectors) ++ " {\n" ++ print_declarations(declarations) ++ "}"
  };

let print_rules = (rules: list(rule)) => Stylite_utils.join("\n", List.map(print_rule, rules));
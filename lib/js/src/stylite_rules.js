'use strict';

var List            = require("bs-platform/lib/js/list.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var Azimuth = Caml_exceptions.create("Stylite_rules.Azimuth");

var Background = Caml_exceptions.create("Stylite_rules.Background");

var BackgroundAttachment = Caml_exceptions.create("Stylite_rules.BackgroundAttachment");

var BackgroundColor = Caml_exceptions.create("Stylite_rules.BackgroundColor");

var BackgroundImage = Caml_exceptions.create("Stylite_rules.BackgroundImage");

var BackgroundPosition = Caml_exceptions.create("Stylite_rules.BackgroundPosition");

var BackgroundRepeat = Caml_exceptions.create("Stylite_rules.BackgroundRepeat");

var Border = Caml_exceptions.create("Stylite_rules.Border");

var BorderCollapse = Caml_exceptions.create("Stylite_rules.BorderCollapse");

var BorderColor = Caml_exceptions.create("Stylite_rules.BorderColor");

var BorderSpacing = Caml_exceptions.create("Stylite_rules.BorderSpacing");

var BorderStyle = Caml_exceptions.create("Stylite_rules.BorderStyle");

var BorderTop = Caml_exceptions.create("Stylite_rules.BorderTop");

var BorderRight = Caml_exceptions.create("Stylite_rules.BorderRight");

var BorderBottom = Caml_exceptions.create("Stylite_rules.BorderBottom");

var BorderLeft = Caml_exceptions.create("Stylite_rules.BorderLeft");

var BorderTopColor = Caml_exceptions.create("Stylite_rules.BorderTopColor");

var BorderRightColor = Caml_exceptions.create("Stylite_rules.BorderRightColor");

var BorderBottomColor = Caml_exceptions.create("Stylite_rules.BorderBottomColor");

var BorderLeftColor = Caml_exceptions.create("Stylite_rules.BorderLeftColor");

var BorderTopStyle = Caml_exceptions.create("Stylite_rules.BorderTopStyle");

var BorderRightStyle = Caml_exceptions.create("Stylite_rules.BorderRightStyle");

var BorderBottomStyle = Caml_exceptions.create("Stylite_rules.BorderBottomStyle");

var BorderLeftStyle = Caml_exceptions.create("Stylite_rules.BorderLeftStyle");

var BorderTopWidth = Caml_exceptions.create("Stylite_rules.BorderTopWidth");

var BorderRightWidth = Caml_exceptions.create("Stylite_rules.BorderRightWidth");

var BorderBottomWidth = Caml_exceptions.create("Stylite_rules.BorderBottomWidth");

var BorderLeftWidth = Caml_exceptions.create("Stylite_rules.BorderLeftWidth");

var BorderWidth = Caml_exceptions.create("Stylite_rules.BorderWidth");

var Bottom = Caml_exceptions.create("Stylite_rules.Bottom");

var CaptionSide = Caml_exceptions.create("Stylite_rules.CaptionSide");

var Clear = Caml_exceptions.create("Stylite_rules.Clear");

var Color = Caml_exceptions.create("Stylite_rules.Color");

var Content = Caml_exceptions.create("Stylite_rules.Content");

var CounterIncrement = Caml_exceptions.create("Stylite_rules.CounterIncrement");

var CounterReset = Caml_exceptions.create("Stylite_rules.CounterReset");

var Cue = Caml_exceptions.create("Stylite_rules.Cue");

var CueAfter = Caml_exceptions.create("Stylite_rules.CueAfter");

var CueBefore = Caml_exceptions.create("Stylite_rules.CueBefore");

var Cursor = Caml_exceptions.create("Stylite_rules.Cursor");

var Direction = Caml_exceptions.create("Stylite_rules.Direction");

var Display = Caml_exceptions.create("Stylite_rules.Display");

var Elevation = Caml_exceptions.create("Stylite_rules.Elevation");

var EmptyCells = Caml_exceptions.create("Stylite_rules.EmptyCells");

var Float = Caml_exceptions.create("Stylite_rules.Float");

var Font = Caml_exceptions.create("Stylite_rules.Font");

var FontFamily = Caml_exceptions.create("Stylite_rules.FontFamily");

var FontSize = Caml_exceptions.create("Stylite_rules.FontSize");

var FontSizeAdjust = Caml_exceptions.create("Stylite_rules.FontSizeAdjust");

var FontStretch = Caml_exceptions.create("Stylite_rules.FontStretch");

var FontStyle = Caml_exceptions.create("Stylite_rules.FontStyle");

var FontVariant = Caml_exceptions.create("Stylite_rules.FontVariant");

var FontWeight = Caml_exceptions.create("Stylite_rules.FontWeight");

var Height = Caml_exceptions.create("Stylite_rules.Height");

var Left = Caml_exceptions.create("Stylite_rules.Left");

var LetterSpacing = Caml_exceptions.create("Stylite_rules.LetterSpacing");

var LineHeight = Caml_exceptions.create("Stylite_rules.LineHeight");

var ListStyle = Caml_exceptions.create("Stylite_rules.ListStyle");

var ListStyleImage = Caml_exceptions.create("Stylite_rules.ListStyleImage");

var ListStylePosition = Caml_exceptions.create("Stylite_rules.ListStylePosition");

var ListStyleType = Caml_exceptions.create("Stylite_rules.ListStyleType");

var Margin = Caml_exceptions.create("Stylite_rules.Margin");

var MarginTop = Caml_exceptions.create("Stylite_rules.MarginTop");

var MarginRight = Caml_exceptions.create("Stylite_rules.MarginRight");

var MarginBottom = Caml_exceptions.create("Stylite_rules.MarginBottom");

var MarginLeft = Caml_exceptions.create("Stylite_rules.MarginLeft");

var MarkerOffset = Caml_exceptions.create("Stylite_rules.MarkerOffset");

var Marks = Caml_exceptions.create("Stylite_rules.Marks");

var MaxHeight = Caml_exceptions.create("Stylite_rules.MaxHeight");

var MaxWidth = Caml_exceptions.create("Stylite_rules.MaxWidth");

var MinHeight = Caml_exceptions.create("Stylite_rules.MinHeight");

var MinWidth = Caml_exceptions.create("Stylite_rules.MinWidth");

var Orphans = Caml_exceptions.create("Stylite_rules.Orphans");

var Outline = Caml_exceptions.create("Stylite_rules.Outline");

var OutlineColor = Caml_exceptions.create("Stylite_rules.OutlineColor");

var OutlineStyle = Caml_exceptions.create("Stylite_rules.OutlineStyle");

var OutlineWidth = Caml_exceptions.create("Stylite_rules.OutlineWidth");

var Overflow = Caml_exceptions.create("Stylite_rules.Overflow");

var Padding = Caml_exceptions.create("Stylite_rules.Padding");

var PaddingTop = Caml_exceptions.create("Stylite_rules.PaddingTop");

var PaddingRight = Caml_exceptions.create("Stylite_rules.PaddingRight");

var PaddingBottom = Caml_exceptions.create("Stylite_rules.PaddingBottom");

var PaddingLeft = Caml_exceptions.create("Stylite_rules.PaddingLeft");

var Page = Caml_exceptions.create("Stylite_rules.Page");

var PageBreakAfter = Caml_exceptions.create("Stylite_rules.PageBreakAfter");

var PageBreakBefore = Caml_exceptions.create("Stylite_rules.PageBreakBefore");

var PageBreakInside = Caml_exceptions.create("Stylite_rules.PageBreakInside");

var Pause = Caml_exceptions.create("Stylite_rules.Pause");

var PauseAfter = Caml_exceptions.create("Stylite_rules.PauseAfter");

var PauseBefore = Caml_exceptions.create("Stylite_rules.PauseBefore");

var Pitch = Caml_exceptions.create("Stylite_rules.Pitch");

var PitchRange = Caml_exceptions.create("Stylite_rules.PitchRange");

var PlayDuring = Caml_exceptions.create("Stylite_rules.PlayDuring");

var Position = Caml_exceptions.create("Stylite_rules.Position");

var Quotes = Caml_exceptions.create("Stylite_rules.Quotes");

var Richness = Caml_exceptions.create("Stylite_rules.Richness");

var Right = Caml_exceptions.create("Stylite_rules.Right");

var Size = Caml_exceptions.create("Stylite_rules.Size");

var Speak = Caml_exceptions.create("Stylite_rules.Speak");

var SpeakHeader = Caml_exceptions.create("Stylite_rules.SpeakHeader");

var SpeakNumeral = Caml_exceptions.create("Stylite_rules.SpeakNumeral");

var SpeakPunctuation = Caml_exceptions.create("Stylite_rules.SpeakPunctuation");

var SpeechRate = Caml_exceptions.create("Stylite_rules.SpeechRate");

var Stress = Caml_exceptions.create("Stylite_rules.Stress");

var TableLayout = Caml_exceptions.create("Stylite_rules.TableLayout");

var TextAlign = Caml_exceptions.create("Stylite_rules.TextAlign");

var TextDecoration = Caml_exceptions.create("Stylite_rules.TextDecoration");

var TextIndent = Caml_exceptions.create("Stylite_rules.TextIndent");

var TextShadow = Caml_exceptions.create("Stylite_rules.TextShadow");

var TextTransform = Caml_exceptions.create("Stylite_rules.TextTransform");

var Top = Caml_exceptions.create("Stylite_rules.Top");

var UnicodeBidi = Caml_exceptions.create("Stylite_rules.UnicodeBidi");

var VerticalAlign = Caml_exceptions.create("Stylite_rules.VerticalAlign");

var Visibility = Caml_exceptions.create("Stylite_rules.Visibility");

var VoiceFamily = Caml_exceptions.create("Stylite_rules.VoiceFamily");

var Volume = Caml_exceptions.create("Stylite_rules.Volume");

var WhiteSpace = Caml_exceptions.create("Stylite_rules.WhiteSpace");

var Widows = Caml_exceptions.create("Stylite_rules.Widows");

var Width = Caml_exceptions.create("Stylite_rules.Width");

var WordSpacing = Caml_exceptions.create("Stylite_rules.WordSpacing");

var ZIndex = Caml_exceptions.create("Stylite_rules.ZIndex");

var Opacity = Caml_exceptions.create("Stylite_rules.Opacity");

var BackgroundOrigin = Caml_exceptions.create("Stylite_rules.BackgroundOrigin");

var BackgroundSize = Caml_exceptions.create("Stylite_rules.BackgroundSize");

var BackgroundClip = Caml_exceptions.create("Stylite_rules.BackgroundClip");

var BorderRadius = Caml_exceptions.create("Stylite_rules.BorderRadius");

var BorderTopLeftRadius = Caml_exceptions.create("Stylite_rules.BorderTopLeftRadius");

var BorderTopRightRadius = Caml_exceptions.create("Stylite_rules.BorderTopRightRadius");

var BorderBottomLeftRadius = Caml_exceptions.create("Stylite_rules.BorderBottomLeftRadius");

var BorderBottomRightRadius = Caml_exceptions.create("Stylite_rules.BorderBottomRightRadius");

var BorderImage = Caml_exceptions.create("Stylite_rules.BorderImage");

var BorderImageSource = Caml_exceptions.create("Stylite_rules.BorderImageSource");

var BorderImageSlice = Caml_exceptions.create("Stylite_rules.BorderImageSlice");

var BorderImageWidth = Caml_exceptions.create("Stylite_rules.BorderImageWidth");

var BorderImageOutset = Caml_exceptions.create("Stylite_rules.BorderImageOutset");

var BorderImageRepeat = Caml_exceptions.create("Stylite_rules.BorderImageRepeat");

var BoxShadow = Caml_exceptions.create("Stylite_rules.BoxShadow");

var Columns = Caml_exceptions.create("Stylite_rules.Columns");

var ColumnCount = Caml_exceptions.create("Stylite_rules.ColumnCount");

var ColumnFill = Caml_exceptions.create("Stylite_rules.ColumnFill");

var ColumnGap = Caml_exceptions.create("Stylite_rules.ColumnGap");

var ColumnRule = Caml_exceptions.create("Stylite_rules.ColumnRule");

var ColumnRuleColor = Caml_exceptions.create("Stylite_rules.ColumnRuleColor");

var ColumnRuleStyle = Caml_exceptions.create("Stylite_rules.ColumnRuleStyle");

var ColumnRuleWidth = Caml_exceptions.create("Stylite_rules.ColumnRuleWidth");

var ColumnSpan = Caml_exceptions.create("Stylite_rules.ColumnSpan");

var ColumnWidth = Caml_exceptions.create("Stylite_rules.ColumnWidth");

var BreakAfter = Caml_exceptions.create("Stylite_rules.BreakAfter");

var BreakBefore = Caml_exceptions.create("Stylite_rules.BreakBefore");

var BreakInside = Caml_exceptions.create("Stylite_rules.BreakInside");

var Rest = Caml_exceptions.create("Stylite_rules.Rest");

var RestAfter = Caml_exceptions.create("Stylite_rules.RestAfter");

var RestBefore = Caml_exceptions.create("Stylite_rules.RestBefore");

var SpeakAs = Caml_exceptions.create("Stylite_rules.SpeakAs");

var VoiceBalance = Caml_exceptions.create("Stylite_rules.VoiceBalance");

var VoiceDuration = Caml_exceptions.create("Stylite_rules.VoiceDuration");

var VoicePitch = Caml_exceptions.create("Stylite_rules.VoicePitch");

var VoiceRange = Caml_exceptions.create("Stylite_rules.VoiceRange");

var VoiceRate = Caml_exceptions.create("Stylite_rules.VoiceRate");

var VoiceStress = Caml_exceptions.create("Stylite_rules.VoiceStress");

var VoiceVolume = Caml_exceptions.create("Stylite_rules.VoiceVolume");

var ObjectFit = Caml_exceptions.create("Stylite_rules.ObjectFit");

var ObjectPosition = Caml_exceptions.create("Stylite_rules.ObjectPosition");

var ImageResolution = Caml_exceptions.create("Stylite_rules.ImageResolution");

var ImageOrientation = Caml_exceptions.create("Stylite_rules.ImageOrientation");

var AlignContent = Caml_exceptions.create("Stylite_rules.AlignContent");

var AlignItems = Caml_exceptions.create("Stylite_rules.AlignItems");

var AlignSelf = Caml_exceptions.create("Stylite_rules.AlignSelf");

var Flex = Caml_exceptions.create("Stylite_rules.Flex");

var FlexBasis = Caml_exceptions.create("Stylite_rules.FlexBasis");

var FlexDirection = Caml_exceptions.create("Stylite_rules.FlexDirection");

var FlexFlow = Caml_exceptions.create("Stylite_rules.FlexFlow");

var FlexGrow = Caml_exceptions.create("Stylite_rules.FlexGrow");

var FlexShrink = Caml_exceptions.create("Stylite_rules.FlexShrink");

var FlexWrap = Caml_exceptions.create("Stylite_rules.FlexWrap");

var JustifyContent = Caml_exceptions.create("Stylite_rules.JustifyContent");

var Order = Caml_exceptions.create("Stylite_rules.Order");

var TextDecorationColor = Caml_exceptions.create("Stylite_rules.TextDecorationColor");

var TextDecorationLine = Caml_exceptions.create("Stylite_rules.TextDecorationLine");

var TextDecorationSkip = Caml_exceptions.create("Stylite_rules.TextDecorationSkip");

var TextDecorationStyle = Caml_exceptions.create("Stylite_rules.TextDecorationStyle");

var TextEmphasis = Caml_exceptions.create("Stylite_rules.TextEmphasis");

var TextEmphasisColor = Caml_exceptions.create("Stylite_rules.TextEmphasisColor");

var TextEmphasisPosition = Caml_exceptions.create("Stylite_rules.TextEmphasisPosition");

var TextEmphasisStyle = Caml_exceptions.create("Stylite_rules.TextEmphasisStyle");

var TextUnderlinePosition = Caml_exceptions.create("Stylite_rules.TextUnderlinePosition");

var FontFeatureSettings = Caml_exceptions.create("Stylite_rules.FontFeatureSettings");

var FontKerning = Caml_exceptions.create("Stylite_rules.FontKerning");

var FontLanguageOverride = Caml_exceptions.create("Stylite_rules.FontLanguageOverride");

var FontSynthesis = Caml_exceptions.create("Stylite_rules.FontSynthesis");

var ForntVariantAlternates = Caml_exceptions.create("Stylite_rules.ForntVariantAlternates");

var FontVariantCaps = Caml_exceptions.create("Stylite_rules.FontVariantCaps");

var FontVariantEastAsian = Caml_exceptions.create("Stylite_rules.FontVariantEastAsian");

var FontVariantLigatures = Caml_exceptions.create("Stylite_rules.FontVariantLigatures");

var FontVariantNumeric = Caml_exceptions.create("Stylite_rules.FontVariantNumeric");

var FontVariantPosition = Caml_exceptions.create("Stylite_rules.FontVariantPosition");

var All = Caml_exceptions.create("Stylite_rules.All");

var TextCombineUpright = Caml_exceptions.create("Stylite_rules.TextCombineUpright");

var TextOrientation = Caml_exceptions.create("Stylite_rules.TextOrientation");

var WritingMode = Caml_exceptions.create("Stylite_rules.WritingMode");

var ShapeImageThreshold = Caml_exceptions.create("Stylite_rules.ShapeImageThreshold");

var ShapeMargin = Caml_exceptions.create("Stylite_rules.ShapeMargin");

var ShapeOutside = Caml_exceptions.create("Stylite_rules.ShapeOutside");

var Mask = Caml_exceptions.create("Stylite_rules.Mask");

var MaskBorder = Caml_exceptions.create("Stylite_rules.MaskBorder");

var MaskBorderMode = Caml_exceptions.create("Stylite_rules.MaskBorderMode");

var MaskBorderOutset = Caml_exceptions.create("Stylite_rules.MaskBorderOutset");

var MaskBorderRepeat = Caml_exceptions.create("Stylite_rules.MaskBorderRepeat");

var MaskBorderSlice = Caml_exceptions.create("Stylite_rules.MaskBorderSlice");

var MaskBorderSource = Caml_exceptions.create("Stylite_rules.MaskBorderSource");

var MaskBorderWidth = Caml_exceptions.create("Stylite_rules.MaskBorderWidth");

var MaskClip = Caml_exceptions.create("Stylite_rules.MaskClip");

var MaskComposite = Caml_exceptions.create("Stylite_rules.MaskComposite");

var MaskImage = Caml_exceptions.create("Stylite_rules.MaskImage");

var MaskMode = Caml_exceptions.create("Stylite_rules.MaskMode");

var MaskOrigin = Caml_exceptions.create("Stylite_rules.MaskOrigin");

var MaskPosition = Caml_exceptions.create("Stylite_rules.MaskPosition");

var MaskRepeat = Caml_exceptions.create("Stylite_rules.MaskRepeat");

var MaskSize = Caml_exceptions.create("Stylite_rules.MaskSize");

var MaskType = Caml_exceptions.create("Stylite_rules.MaskType");

var BackgroundBlendMode = Caml_exceptions.create("Stylite_rules.BackgroundBlendMode");

var Isolation = Caml_exceptions.create("Stylite_rules.Isolation");

var MixBlendMode = Caml_exceptions.create("Stylite_rules.MixBlendMode");

var BoxDecorationBreak = Caml_exceptions.create("Stylite_rules.BoxDecorationBreak");

var BoxSizing = Caml_exceptions.create("Stylite_rules.BoxSizing");

var CaretColor = Caml_exceptions.create("Stylite_rules.CaretColor");

var NavDown = Caml_exceptions.create("Stylite_rules.NavDown");

var NavLeft = Caml_exceptions.create("Stylite_rules.NavLeft");

var NavRight = Caml_exceptions.create("Stylite_rules.NavRight");

var NavUp = Caml_exceptions.create("Stylite_rules.NavUp");

var OutlineOffset = Caml_exceptions.create("Stylite_rules.OutlineOffset");

var Resize = Caml_exceptions.create("Stylite_rules.Resize");

var TextOverflow = Caml_exceptions.create("Stylite_rules.TextOverflow");

var Grid = Caml_exceptions.create("Stylite_rules.Grid");

var GridArea = Caml_exceptions.create("Stylite_rules.GridArea");

var GridAutoColumns = Caml_exceptions.create("Stylite_rules.GridAutoColumns");

var GridAutoFlow = Caml_exceptions.create("Stylite_rules.GridAutoFlow");

var GridAutoRows = Caml_exceptions.create("Stylite_rules.GridAutoRows");

var GridColumn = Caml_exceptions.create("Stylite_rules.GridColumn");

var GridColumnEnd = Caml_exceptions.create("Stylite_rules.GridColumnEnd");

var GridColumnGap = Caml_exceptions.create("Stylite_rules.GridColumnGap");

var GridColumnStart = Caml_exceptions.create("Stylite_rules.GridColumnStart");

var GridGap = Caml_exceptions.create("Stylite_rules.GridGap");

var GridRow = Caml_exceptions.create("Stylite_rules.GridRow");

var GridRowEnd = Caml_exceptions.create("Stylite_rules.GridRowEnd");

var GridRowGap = Caml_exceptions.create("Stylite_rules.GridRowGap");

var GridRowStart = Caml_exceptions.create("Stylite_rules.GridRowStart");

var GridTemplate = Caml_exceptions.create("Stylite_rules.GridTemplate");

var GridTempalteAreas = Caml_exceptions.create("Stylite_rules.GridTempalteAreas");

var GridTemplateColumns = Caml_exceptions.create("Stylite_rules.GridTemplateColumns");

var GridTemplateRows = Caml_exceptions.create("Stylite_rules.GridTemplateRows");

var WillChange = Caml_exceptions.create("Stylite_rules.WillChange");

var HangingPunctuation = Caml_exceptions.create("Stylite_rules.HangingPunctuation");

var Hyphens = Caml_exceptions.create("Stylite_rules.Hyphens");

var LineBreak = Caml_exceptions.create("Stylite_rules.LineBreak");

var OverflowWrap = Caml_exceptions.create("Stylite_rules.OverflowWrap");

var TabSize = Caml_exceptions.create("Stylite_rules.TabSize");

var TextAlignLast = Caml_exceptions.create("Stylite_rules.TextAlignLast");

var TextJustify = Caml_exceptions.create("Stylite_rules.TextJustify");

var WordBreak = Caml_exceptions.create("Stylite_rules.WordBreak");

var WordWrap = Caml_exceptions.create("Stylite_rules.WordWrap");

var Animation = Caml_exceptions.create("Stylite_rules.Animation");

var AnimationDelay = Caml_exceptions.create("Stylite_rules.AnimationDelay");

var AnimationDirection = Caml_exceptions.create("Stylite_rules.AnimationDirection");

var AnimationDuration = Caml_exceptions.create("Stylite_rules.AnimationDuration");

var AnimationFillMode = Caml_exceptions.create("Stylite_rules.AnimationFillMode");

var AnimationIterationCount = Caml_exceptions.create("Stylite_rules.AnimationIterationCount");

var AnimationName = Caml_exceptions.create("Stylite_rules.AnimationName");

var AnimationPlayState = Caml_exceptions.create("Stylite_rules.AnimationPlayState");

var AnimationTimingFunction = Caml_exceptions.create("Stylite_rules.AnimationTimingFunction");

var Transition = Caml_exceptions.create("Stylite_rules.Transition");

var TransitionDelay = Caml_exceptions.create("Stylite_rules.TransitionDelay");

var TransitionDuration = Caml_exceptions.create("Stylite_rules.TransitionDuration");

var TransitionProperty = Caml_exceptions.create("Stylite_rules.TransitionProperty");

var TransitionTimingFunction = Caml_exceptions.create("Stylite_rules.TransitionTimingFunction");

var BackfaceVisibility = Caml_exceptions.create("Stylite_rules.BackfaceVisibility");

var Perspective = Caml_exceptions.create("Stylite_rules.Perspective");

var PerspectiveOrigin = Caml_exceptions.create("Stylite_rules.PerspectiveOrigin");

var Transform = Caml_exceptions.create("Stylite_rules.Transform");

var TransformOrigin = Caml_exceptions.create("Stylite_rules.TransformOrigin");

var TransformStyle = Caml_exceptions.create("Stylite_rules.TransformStyle");

var JustifyItems = Caml_exceptions.create("Stylite_rules.JustifyItems");

var JustifySelf = Caml_exceptions.create("Stylite_rules.JustifySelf");

var PlaceContent = Caml_exceptions.create("Stylite_rules.PlaceContent");

var PlaceItems = Caml_exceptions.create("Stylite_rules.PlaceItems");

var PlaceSelf = Caml_exceptions.create("Stylite_rules.PlaceSelf");

var Appearance = Caml_exceptions.create("Stylite_rules.Appearance");

var Caret = Caml_exceptions.create("Stylite_rules.Caret");

var CaretAnimation = Caml_exceptions.create("Stylite_rules.CaretAnimation");

var CaretShape = Caml_exceptions.create("Stylite_rules.CaretShape");

var UserSelect = Caml_exceptions.create("Stylite_rules.UserSelect");

var MaxLines = Caml_exceptions.create("Stylite_rules.MaxLines");

var MarqueeDirection = Caml_exceptions.create("Stylite_rules.MarqueeDirection");

var MarqueeLoop = Caml_exceptions.create("Stylite_rules.MarqueeLoop");

var MarqueeSpeed = Caml_exceptions.create("Stylite_rules.MarqueeSpeed");

var MarqueeStyle = Caml_exceptions.create("Stylite_rules.MarqueeStyle");

var OverflowStyle = Caml_exceptions.create("Stylite_rules.OverflowStyle");

var Rotation = Caml_exceptions.create("Stylite_rules.Rotation");

var RotationPoint = Caml_exceptions.create("Stylite_rules.RotationPoint");

var AlignmentBaseline = Caml_exceptions.create("Stylite_rules.AlignmentBaseline");

var BaselineShift = Caml_exceptions.create("Stylite_rules.BaselineShift");

var Clip = Caml_exceptions.create("Stylite_rules.Clip");

var ClipPath = Caml_exceptions.create("Stylite_rules.ClipPath");

var ClipRule = Caml_exceptions.create("Stylite_rules.ClipRule");

var ColorInterpolation = Caml_exceptions.create("Stylite_rules.ColorInterpolation");

var ColorInterpolationFilters = Caml_exceptions.create("Stylite_rules.ColorInterpolationFilters");

var ColorProfile = Caml_exceptions.create("Stylite_rules.ColorProfile");

var ColorRendering = Caml_exceptions.create("Stylite_rules.ColorRendering");

var DominantBaseline = Caml_exceptions.create("Stylite_rules.DominantBaseline");

var Fill = Caml_exceptions.create("Stylite_rules.Fill");

var FillOpacity = Caml_exceptions.create("Stylite_rules.FillOpacity");

var FillRule = Caml_exceptions.create("Stylite_rules.FillRule");

var Filter = Caml_exceptions.create("Stylite_rules.Filter");

var FloodColor = Caml_exceptions.create("Stylite_rules.FloodColor");

var FloodOpacity = Caml_exceptions.create("Stylite_rules.FloodOpacity");

var GlyphOrientationHorizontal = Caml_exceptions.create("Stylite_rules.GlyphOrientationHorizontal");

var GlyphOrientationVertical = Caml_exceptions.create("Stylite_rules.GlyphOrientationVertical");

var ImageRendering = Caml_exceptions.create("Stylite_rules.ImageRendering");

var Kerning = Caml_exceptions.create("Stylite_rules.Kerning");

var LightingColor = Caml_exceptions.create("Stylite_rules.LightingColor");

var MarkerEnd = Caml_exceptions.create("Stylite_rules.MarkerEnd");

var MarkerMid = Caml_exceptions.create("Stylite_rules.MarkerMid");

var MarkerStart = Caml_exceptions.create("Stylite_rules.MarkerStart");

var PointerEvents = Caml_exceptions.create("Stylite_rules.PointerEvents");

var ShapeRendering = Caml_exceptions.create("Stylite_rules.ShapeRendering");

var StopColor = Caml_exceptions.create("Stylite_rules.StopColor");

var StopOpacity = Caml_exceptions.create("Stylite_rules.StopOpacity");

var Stroke = Caml_exceptions.create("Stylite_rules.Stroke");

var StrokeDasharray = Caml_exceptions.create("Stylite_rules.StrokeDasharray");

var StrokeDashoffset = Caml_exceptions.create("Stylite_rules.StrokeDashoffset");

var StrokeLinecap = Caml_exceptions.create("Stylite_rules.StrokeLinecap");

var StrokeLinejoin = Caml_exceptions.create("Stylite_rules.StrokeLinejoin");

var StrokeMiterlimit = Caml_exceptions.create("Stylite_rules.StrokeMiterlimit");

var StrokeOpacity = Caml_exceptions.create("Stylite_rules.StrokeOpacity");

var StrokeWidth = Caml_exceptions.create("Stylite_rules.StrokeWidth");

var TextAnchor = Caml_exceptions.create("Stylite_rules.TextAnchor");

var TextRendering = Caml_exceptions.create("Stylite_rules.TextRendering");

var RubyAlign = Caml_exceptions.create("Stylite_rules.RubyAlign");

var RubyMerge = Caml_exceptions.create("Stylite_rules.RubyMerge");

var RubyPosition = Caml_exceptions.create("Stylite_rules.RubyPosition");

function print_declaration(declaration) {
  if (declaration[0] === Azimuth) {
    return "azimuth: " + (declaration[1] + ";");
  } else if (declaration[0] === Background) {
    return "background: " + (declaration[1] + ";");
  } else if (declaration[0] === BackgroundAttachment) {
    return "background-attachment: " + (declaration[1] + ";");
  } else if (declaration[0] === BackgroundColor) {
    return "background-color: " + (declaration[1] + ";");
  } else if (declaration[0] === BackgroundImage) {
    return "background-image: " + (declaration[1] + ";");
  } else if (declaration[0] === BackgroundPosition) {
    return "background-position: " + (declaration[1] + ";");
  } else if (declaration[0] === BackgroundRepeat) {
    return "background-repeat: " + (declaration[1] + ";");
  } else if (declaration[0] === Border) {
    return "border: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderCollapse) {
    return "border-collapse: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderColor) {
    return "border-color: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderSpacing) {
    return "border-spacing: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderStyle) {
    return "border-style: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderTop) {
    return "border-top: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderRight) {
    return "border-right: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderBottom) {
    return "border-bottom: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderLeft) {
    return "border-left: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderTopColor) {
    return "border-top-color: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderRightColor) {
    return "border-right-color: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderBottomColor) {
    return "border-bottom-color: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderLeftColor) {
    return "border-left-color: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderTopStyle) {
    return "border-top-style: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderRightStyle) {
    return "border-right-style: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderBottomStyle) {
    return "border-bottom-style: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderLeftStyle) {
    return "border-left-style: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderTopWidth) {
    return "border-top-width: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderRightWidth) {
    return "border-right-width: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderBottomWidth) {
    return "border-bottom-width: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderLeftWidth) {
    return "border-left-width: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderWidth) {
    return "border-width: " + (declaration[1] + ";");
  } else if (declaration[0] === Bottom) {
    return "bottom: " + (declaration[1] + ";");
  } else if (declaration[0] === CaptionSide) {
    return "caption-side: " + (declaration[1] + ";");
  } else if (declaration[0] === Clear) {
    return "clear: " + (declaration[1] + ";");
  } else if (declaration[0] === Color) {
    return "color: " + (declaration[1] + ";");
  } else if (declaration[0] === Content) {
    return "content: " + (declaration[1] + ";");
  } else if (declaration[0] === CounterIncrement) {
    return "counter-increment: " + (declaration[1] + ";");
  } else if (declaration[0] === CounterReset) {
    return "counter-reset : " + (declaration[1] + ";");
  } else if (declaration[0] === Cue) {
    return "cue: " + (declaration[1] + ";");
  } else if (declaration[0] === CueAfter) {
    return "cue-after: " + (declaration[1] + ";");
  } else if (declaration[0] === CueBefore) {
    return "cue-before: " + (declaration[1] + ";");
  } else if (declaration[0] === Cursor) {
    return "cursor: " + (declaration[1] + ";");
  } else if (declaration[0] === Direction) {
    return "direction: " + (declaration[1] + ";");
  } else if (declaration[0] === Display) {
    return "display: " + (declaration[1] + ";");
  } else if (declaration[0] === Elevation) {
    return "elevation: " + (declaration[1] + ";");
  } else if (declaration[0] === EmptyCells) {
    return "empty-cells: " + (declaration[1] + ";");
  } else if (declaration[0] === Float) {
    return "float: " + (declaration[1] + ";");
  } else if (declaration[0] === Font) {
    return "font: " + (declaration[1] + ";");
  } else if (declaration[0] === FontFamily) {
    return "font-family: " + (declaration[1] + ";");
  } else if (declaration[0] === FontSize) {
    return "font-size: " + (declaration[1] + ";");
  } else if (declaration[0] === FontSizeAdjust) {
    return "font-size-adjust: " + (declaration[1] + ";");
  } else if (declaration[0] === FontStretch) {
    return "font-stretch: " + (declaration[1] + ";");
  } else if (declaration[0] === FontStyle) {
    return "font-style: " + (declaration[1] + ";");
  } else if (declaration[0] === FontVariant) {
    return "font-variant: " + (declaration[1] + ";");
  } else if (declaration[0] === FontWeight) {
    return "font-weight: " + (declaration[1] + ";");
  } else if (declaration[0] === Height) {
    return "height: " + (declaration[1] + ";");
  } else if (declaration[0] === Left) {
    return "left: " + (declaration[1] + ";");
  } else if (declaration[0] === LetterSpacing) {
    return "letter-spacing: " + (declaration[1] + ";");
  } else if (declaration[0] === LineHeight) {
    return "line-height: " + (declaration[1] + ";");
  } else if (declaration[0] === ListStyle) {
    return "list-style: " + (declaration[1] + ";");
  } else if (declaration[0] === ListStyleImage) {
    return "list-style-image: " + (declaration[1] + ";");
  } else if (declaration[0] === ListStylePosition) {
    return "list-style-position: " + (declaration[1] + ";");
  } else if (declaration[0] === ListStyleType) {
    return "list-style-type: " + (declaration[1] + ";");
  } else if (declaration[0] === Margin) {
    return "margin: " + (declaration[1] + ";");
  } else if (declaration[0] === MarginTop) {
    return "margin-top: " + (declaration[1] + ";");
  } else if (declaration[0] === MarginRight) {
    return "margin-right: " + (declaration[1] + ";");
  } else if (declaration[0] === MarginBottom) {
    return "margin-bottom: " + (declaration[1] + ";");
  } else if (declaration[0] === MarginLeft) {
    return "margin-left: " + (declaration[1] + ";");
  } else if (declaration[0] === MarkerOffset) {
    return "marker-offset: " + (declaration[1] + ";");
  } else if (declaration[0] === Marks) {
    return "marks: " + (declaration[1] + ";");
  } else if (declaration[0] === MaxHeight) {
    return "max-height: " + (declaration[1] + ";");
  } else if (declaration[0] === MaxWidth) {
    return "max-width: " + (declaration[1] + ";");
  } else if (declaration[0] === MinHeight) {
    return "min-height: " + (declaration[1] + ";");
  } else if (declaration[0] === MinWidth) {
    return "min-width: " + (declaration[1] + ";");
  } else if (declaration[0] === Orphans) {
    return "orphans: " + (declaration[1] + ";");
  } else if (declaration[0] === Outline) {
    return "outline: " + (declaration[1] + ";");
  } else if (declaration[0] === OutlineColor) {
    return "outline-color: " + (declaration[1] + ";");
  } else if (declaration[0] === OutlineStyle) {
    return "outline-style: " + (declaration[1] + ";");
  } else if (declaration[0] === OutlineWidth) {
    return "outline-width: " + (declaration[1] + ";");
  } else if (declaration[0] === Overflow) {
    return "overflow: " + (declaration[1] + ";");
  } else if (declaration[0] === Padding) {
    return "padding: " + (declaration[1] + ";");
  } else if (declaration[0] === PaddingTop) {
    return "padding-top: " + (declaration[1] + ";");
  } else if (declaration[0] === PaddingRight) {
    return "padding-right: " + (declaration[1] + ";");
  } else if (declaration[0] === PaddingBottom) {
    return "padding-bottom: " + (declaration[1] + ";");
  } else if (declaration[0] === PaddingLeft) {
    return "padding-left: " + (declaration[1] + ";");
  } else if (declaration[0] === Page) {
    return "page: " + (declaration[1] + ";");
  } else if (declaration[0] === PageBreakAfter) {
    return "page-break-after: " + (declaration[1] + ";");
  } else if (declaration[0] === PageBreakBefore) {
    return "page-break-before: " + (declaration[1] + ";");
  } else if (declaration[0] === PageBreakInside) {
    return "page-break-inside: " + (declaration[1] + ";");
  } else if (declaration[0] === Pause) {
    return "pause: " + (declaration[1] + ";");
  } else if (declaration[0] === PauseAfter) {
    return "pause-after: " + (declaration[1] + ";");
  } else if (declaration[0] === PauseBefore) {
    return "pause-before: " + (declaration[1] + ";");
  } else if (declaration[0] === Pitch) {
    return "pitch: " + (declaration[1] + ";");
  } else if (declaration[0] === PitchRange) {
    return "pitch-range: " + (declaration[1] + ";");
  } else if (declaration[0] === PlayDuring) {
    return "play-during: " + (declaration[1] + ";");
  } else if (declaration[0] === Position) {
    return "position: " + (declaration[1] + ";");
  } else if (declaration[0] === Quotes) {
    return "quotes: " + (declaration[1] + ";");
  } else if (declaration[0] === Richness) {
    return "richness: " + (declaration[1] + ";");
  } else if (declaration[0] === Right) {
    return "right: " + (declaration[1] + ";");
  } else if (declaration[0] === Size) {
    return "size: " + (declaration[1] + ";");
  } else if (declaration[0] === Speak) {
    return "speak: " + (declaration[1] + ";");
  } else if (declaration[0] === SpeakHeader) {
    return "speak-header: " + (declaration[1] + ";");
  } else if (declaration[0] === SpeakNumeral) {
    return "speak-numeral: " + (declaration[1] + ";");
  } else if (declaration[0] === SpeakPunctuation) {
    return "speak-punctuation: " + (declaration[1] + ";");
  } else if (declaration[0] === SpeechRate) {
    return "speech-rate: " + (declaration[1] + ";");
  } else if (declaration[0] === Stress) {
    return "stress: " + (declaration[1] + ";");
  } else if (declaration[0] === TableLayout) {
    return "table-layout: " + (declaration[1] + ";");
  } else if (declaration[0] === TextAlign) {
    return "text-align: " + (declaration[1] + ";");
  } else if (declaration[0] === TextDecoration) {
    return "text-decoration: " + (declaration[1] + ";");
  } else if (declaration[0] === TextIndent) {
    return "text-indent: " + (declaration[1] + ";");
  } else if (declaration[0] === TextShadow) {
    return "text-shadow: " + (declaration[1] + ";");
  } else if (declaration[0] === TextTransform) {
    return "text-transform: " + (declaration[1] + ";");
  } else if (declaration[0] === Top) {
    return "top: " + (declaration[1] + ";");
  } else if (declaration[0] === UnicodeBidi) {
    return "unicode-bidi: " + (declaration[1] + ";");
  } else if (declaration[0] === VerticalAlign) {
    return "vertical-align: " + (declaration[1] + ";");
  } else if (declaration[0] === Visibility) {
    return "visibility: " + (declaration[1] + ";");
  } else if (declaration[0] === VoiceFamily) {
    return "voice-family: " + (declaration[1] + ";");
  } else if (declaration[0] === Volume) {
    return "volume: " + (declaration[1] + ";");
  } else if (declaration[0] === WhiteSpace) {
    return "white-space: " + (declaration[1] + ";");
  } else if (declaration[0] === Widows) {
    return "widows: " + (declaration[1] + ";");
  } else if (declaration[0] === Width) {
    return "width: " + (declaration[1] + ";");
  } else if (declaration[0] === WordSpacing) {
    return "word-spacing: " + (declaration[1] + ";");
  } else if (declaration[0] === ZIndex) {
    return "z-index: " + (declaration[1] + ";");
  } else if (declaration[0] === Opacity) {
    return "opacity: " + (declaration[1] + ";");
  } else if (declaration[0] === BackgroundOrigin) {
    return "background-origin: " + (declaration[1] + ";");
  } else if (declaration[0] === BackgroundSize) {
    return "background-size: " + (declaration[1] + ";");
  } else if (declaration[0] === BackgroundClip) {
    return "background-clip: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderRadius) {
    return "border-radius: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderTopLeftRadius) {
    return "border-top-left-radius: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderTopRightRadius) {
    return "border-top-right-radius: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderBottomLeftRadius) {
    return "border-bottom-left-radius: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderBottomRightRadius) {
    return "border-bottom-right-radius: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderImage) {
    return "border-image: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderImageSource) {
    return "border-image-source: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderImageSlice) {
    return "border-image-slice: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderImageWidth) {
    return "border-image-width: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderImageOutset) {
    return "border-image-outset: " + (declaration[1] + ";");
  } else if (declaration[0] === BorderImageRepeat) {
    return "border-image-repeat: " + (declaration[1] + ";");
  } else if (declaration[0] === BoxShadow) {
    return "box-shadow: " + (declaration[1] + ";");
  } else if (declaration[0] === Columns) {
    return "columns: " + (declaration[1] + ";");
  } else if (declaration[0] === ColumnCount) {
    return "column-count: " + (declaration[1] + ";");
  } else if (declaration[0] === ColumnFill) {
    return "column-fill: " + (declaration[1] + ";");
  } else if (declaration[0] === ColumnGap) {
    return "column-gap: " + (declaration[1] + ";");
  } else if (declaration[0] === ColumnRule) {
    return "column-rule: " + (declaration[1] + ";");
  } else if (declaration[0] === ColumnRuleColor) {
    return "column-rule-color: " + (declaration[1] + ";");
  } else if (declaration[0] === ColumnRuleStyle) {
    return "column-rule-style: " + (declaration[1] + ";");
  } else if (declaration[0] === ColumnRuleWidth) {
    return "column-rule-width: " + (declaration[1] + ";");
  } else if (declaration[0] === ColumnSpan) {
    return "column-span: " + (declaration[1] + ";");
  } else if (declaration[0] === ColumnWidth) {
    return "column-width: " + (declaration[1] + ";");
  } else if (declaration[0] === BreakAfter) {
    return "break-after: " + (declaration[1] + ";");
  } else if (declaration[0] === BreakBefore) {
    return "break-before: " + (declaration[1] + ";");
  } else if (declaration[0] === BreakInside) {
    return "break-inside: " + (declaration[1] + ";");
  } else if (declaration[0] === Rest) {
    return "rest: " + (declaration[1] + ";");
  } else if (declaration[0] === RestAfter) {
    return "rest-after: " + (declaration[1] + ";");
  } else if (declaration[0] === RestBefore) {
    return "rest-before: " + (declaration[1] + ";");
  } else if (declaration[0] === SpeakAs) {
    return "speak-as: " + (declaration[1] + ";");
  } else if (declaration[0] === VoiceBalance) {
    return "voice-balance: " + (declaration[1] + ";");
  } else if (declaration[0] === VoiceDuration) {
    return "voice-duration: " + (declaration[1] + ";");
  } else if (declaration[0] === VoicePitch) {
    return "voice-pitch: " + (declaration[1] + ";");
  } else if (declaration[0] === VoiceRange) {
    return "voice-range: " + (declaration[1] + ";");
  } else if (declaration[0] === VoiceRate) {
    return "voice-rate: " + (declaration[1] + ";");
  } else if (declaration[0] === VoiceStress) {
    return "voice-stress: " + (declaration[1] + ";");
  } else if (declaration[0] === VoiceVolume) {
    return "voice-volume: " + (declaration[1] + ";");
  } else if (declaration[0] === ObjectFit) {
    return "object-fit: " + (declaration[1] + ";");
  } else if (declaration[0] === ObjectPosition) {
    return "object-position: " + (declaration[1] + ";");
  } else if (declaration[0] === ImageResolution) {
    return "image-resolution: " + (declaration[1] + ";");
  } else if (declaration[0] === ImageOrientation) {
    return "image-orientation: " + (declaration[1] + ";");
  } else if (declaration[0] === AlignContent) {
    return "align-content: " + (declaration[1] + ";");
  } else if (declaration[0] === AlignItems) {
    return "align-items: " + (declaration[1] + ";");
  } else if (declaration[0] === AlignSelf) {
    return "align-self: " + (declaration[1] + ";");
  } else if (declaration[0] === Flex) {
    return "flex: " + (declaration[1] + ";");
  } else if (declaration[0] === FlexBasis) {
    return "flex-basis: " + (declaration[1] + ";");
  } else if (declaration[0] === FlexDirection) {
    return "flex-direction: " + (declaration[1] + ";");
  } else if (declaration[0] === FlexFlow) {
    return "flex-flow: " + (declaration[1] + ";");
  } else if (declaration[0] === FlexGrow) {
    return "flex-grow: " + (declaration[1] + ";");
  } else if (declaration[0] === FlexShrink) {
    return "flex-shrink: " + (declaration[1] + ";");
  } else if (declaration[0] === FlexWrap) {
    return "flex-wrap: " + (declaration[1] + ";");
  } else if (declaration[0] === JustifyContent) {
    return "justify-content: " + (declaration[1] + ";");
  } else if (declaration[0] === Order) {
    return "order: " + (declaration[1] + ";");
  } else if (declaration[0] === TextDecorationColor) {
    return "text-decoration-color: " + (declaration[1] + ";");
  } else if (declaration[0] === TextDecorationLine) {
    return "text-decoration-line: " + (declaration[1] + ";");
  } else if (declaration[0] === TextDecorationSkip) {
    return "text-decoration-skip: " + (declaration[1] + ";");
  } else if (declaration[0] === TextDecorationStyle) {
    return "text-decoration-style: " + (declaration[1] + ";");
  } else if (declaration[0] === TextEmphasis) {
    return "text-emphasis: " + (declaration[1] + ";");
  } else if (declaration[0] === TextEmphasisColor) {
    return "text-emphasis-color: " + (declaration[1] + ";");
  } else if (declaration[0] === TextEmphasisPosition) {
    return "text-emphasis-position: " + (declaration[1] + ";");
  } else if (declaration[0] === TextEmphasisStyle) {
    return "text-emphasis-style: " + (declaration[1] + ";");
  } else if (declaration[0] === TextUnderlinePosition) {
    return "text-underline-position: " + (declaration[1] + ";");
  } else if (declaration[0] === FontFeatureSettings) {
    return "font-feature-settings: " + (declaration[1] + ";");
  } else if (declaration[0] === FontKerning) {
    return "font-kerning: " + (declaration[1] + ";");
  } else if (declaration[0] === FontLanguageOverride) {
    return "font-language-override: " + (declaration[1] + ";");
  } else if (declaration[0] === FontSynthesis) {
    return "font-synthesis: " + (declaration[1] + ";");
  } else if (declaration[0] === ForntVariantAlternates) {
    return "fornt-variant-alternates: " + (declaration[1] + ";");
  } else if (declaration[0] === FontVariantCaps) {
    return "font-variant-caps: " + (declaration[1] + ";");
  } else if (declaration[0] === FontVariantEastAsian) {
    return "font-variant-east-asian: " + (declaration[1] + ";");
  } else if (declaration[0] === FontVariantLigatures) {
    return "font-variant-ligatures: " + (declaration[1] + ";");
  } else if (declaration[0] === FontVariantNumeric) {
    return "font-variant-numeric: " + (declaration[1] + ";");
  } else if (declaration[0] === FontVariantPosition) {
    return "font-variant-position: " + (declaration[1] + ";");
  } else if (declaration[0] === All) {
    return "all: " + (declaration[1] + ";");
  } else if (declaration[0] === TextCombineUpright) {
    return "text-combine-upright: " + (declaration[1] + ";");
  } else if (declaration[0] === TextOrientation) {
    return "text-orientation: " + (declaration[1] + ";");
  } else if (declaration[0] === WritingMode) {
    return "writing-mode: " + (declaration[1] + ";");
  } else if (declaration[0] === ShapeImageThreshold) {
    return "shape-image-threshold: " + (declaration[1] + ";");
  } else if (declaration[0] === ShapeMargin) {
    return "shape-margin: " + (declaration[1] + ";");
  } else if (declaration[0] === ShapeOutside) {
    return "shape-outside: " + (declaration[1] + ";");
  } else if (declaration[0] === Mask) {
    return "mask: " + (declaration[1] + ";");
  } else if (declaration[0] === MaskBorder) {
    return "mask-border: " + (declaration[1] + ";");
  } else if (declaration[0] === MaskBorderMode) {
    return "mask-border-mode: " + (declaration[1] + ";");
  } else if (declaration[0] === MaskBorderOutset) {
    return "mask-border-outset: " + (declaration[1] + ";");
  } else if (declaration[0] === MaskBorderRepeat) {
    return "mask-border-repeat: " + (declaration[1] + ";");
  } else if (declaration[0] === MaskBorderSlice) {
    return "mask-border-slice: " + (declaration[1] + ";");
  } else if (declaration[0] === MaskBorderSource) {
    return "mask-border-source: " + (declaration[1] + ";");
  } else if (declaration[0] === MaskBorderWidth) {
    return "mask-border-width: " + (declaration[1] + ";");
  } else if (declaration[0] === MaskClip) {
    return "mask-clip: " + (declaration[1] + ";");
  } else if (declaration[0] === MaskComposite) {
    return "mask-composite: " + (declaration[1] + ";");
  } else if (declaration[0] === MaskImage) {
    return "mask-image: " + (declaration[1] + ";");
  } else if (declaration[0] === MaskMode) {
    return "mask-mode: " + (declaration[1] + ";");
  } else if (declaration[0] === MaskOrigin) {
    return "mask-origin: " + (declaration[1] + ";");
  } else if (declaration[0] === MaskPosition) {
    return "mask-position: " + (declaration[1] + ";");
  } else if (declaration[0] === MaskRepeat) {
    return "mask-repeat: " + (declaration[1] + ";");
  } else if (declaration[0] === MaskSize) {
    return "mask-size: " + (declaration[1] + ";");
  } else if (declaration[0] === MaskType) {
    return "mask-type: " + (declaration[1] + ";");
  } else if (declaration[0] === BackgroundBlendMode) {
    return "background-blend-mode: " + (declaration[1] + ";");
  } else if (declaration[0] === Isolation) {
    return "isolation: " + (declaration[1] + ";");
  } else if (declaration[0] === MixBlendMode) {
    return "mix-blend-mode: " + (declaration[1] + ";");
  } else if (declaration[0] === BoxDecorationBreak) {
    return "box-decoration-break: " + (declaration[1] + ";");
  } else if (declaration[0] === BoxSizing) {
    return "box-sizing: " + (declaration[1] + ";");
  } else if (declaration[0] === CaretColor) {
    return "caret-color: " + (declaration[1] + ";");
  } else if (declaration[0] === NavDown) {
    return "nav-down: " + (declaration[1] + ";");
  } else if (declaration[0] === NavLeft) {
    return "nav-left: " + (declaration[1] + ";");
  } else if (declaration[0] === NavRight) {
    return "nav-right: " + (declaration[1] + ";");
  } else if (declaration[0] === NavUp) {
    return "nav-up: " + (declaration[1] + ";");
  } else if (declaration[0] === OutlineOffset) {
    return "outline-offset: " + (declaration[1] + ";");
  } else if (declaration[0] === Resize) {
    return "resize: " + (declaration[1] + ";");
  } else if (declaration[0] === TextOverflow) {
    return "text-overflow: " + (declaration[1] + ";");
  } else if (declaration[0] === Grid) {
    return "grid: " + (declaration[1] + ";");
  } else if (declaration[0] === GridArea) {
    return "grid-area: " + (declaration[1] + ";");
  } else if (declaration[0] === GridAutoColumns) {
    return "grid-auto-columns: " + (declaration[1] + ";");
  } else if (declaration[0] === GridAutoFlow) {
    return "grid-auto-flow: " + (declaration[1] + ";");
  } else if (declaration[0] === GridAutoRows) {
    return "grid-auto-rows: " + (declaration[1] + ";");
  } else if (declaration[0] === GridColumn) {
    return "grid-column: " + (declaration[1] + ";");
  } else if (declaration[0] === GridColumnEnd) {
    return "grid-column-end: " + (declaration[1] + ";");
  } else if (declaration[0] === GridColumnGap) {
    return "grid-column-gap: " + (declaration[1] + ";");
  } else if (declaration[0] === GridColumnStart) {
    return "grid-column-start: " + (declaration[1] + ";");
  } else if (declaration[0] === GridGap) {
    return "grid-gap: " + (declaration[1] + ";");
  } else if (declaration[0] === GridRow) {
    return "grid-row: " + (declaration[1] + ";");
  } else if (declaration[0] === GridRowEnd) {
    return "grid-row-end: " + (declaration[1] + ";");
  } else if (declaration[0] === GridRowGap) {
    return "grid-row-gap: " + (declaration[1] + ";");
  } else if (declaration[0] === GridRowStart) {
    return "grid-row-start: " + (declaration[1] + ";");
  } else if (declaration[0] === GridTemplate) {
    return "grid-template: " + (declaration[1] + ";");
  } else if (declaration[0] === GridTempalteAreas) {
    return "grid-tempalte-areas: " + (declaration[1] + ";");
  } else if (declaration[0] === GridTemplateColumns) {
    return "grid-template-columns: " + (declaration[1] + ";");
  } else if (declaration[0] === GridTemplateRows) {
    return "grid-template-rows: " + (declaration[1] + ";");
  } else if (declaration[0] === WillChange) {
    return "will-change: " + (declaration[1] + ";");
  } else if (declaration[0] === HangingPunctuation) {
    return "hanging-punctuation: " + (declaration[1] + ";");
  } else if (declaration[0] === Hyphens) {
    return "hyphens: " + (declaration[1] + ";");
  } else if (declaration[0] === LineBreak) {
    return "line-break: " + (declaration[1] + ";");
  } else if (declaration[0] === OverflowWrap) {
    return "overflow-wrap: " + (declaration[1] + ";");
  } else if (declaration[0] === TabSize) {
    return "tab-size: " + (declaration[1] + ";");
  } else if (declaration[0] === TextAlignLast) {
    return "text-align-last: " + (declaration[1] + ";");
  } else if (declaration[0] === TextJustify) {
    return "text-justify: " + (declaration[1] + ";");
  } else if (declaration[0] === WordBreak) {
    return "word-break: " + (declaration[1] + ";");
  } else if (declaration[0] === WordWrap) {
    return "word-wrap: " + (declaration[1] + ";");
  } else if (declaration[0] === Animation) {
    return "animation: " + (declaration[1] + ";");
  } else if (declaration[0] === AnimationDelay) {
    return "animation-delay: " + (declaration[1] + ";");
  } else if (declaration[0] === AnimationDirection) {
    return "animation-direction: " + (declaration[1] + ";");
  } else if (declaration[0] === AnimationDuration) {
    return "animation-duration: " + (declaration[1] + ";");
  } else if (declaration[0] === AnimationFillMode) {
    return "animation-fill-mode: " + (declaration[1] + ";");
  } else if (declaration[0] === AnimationIterationCount) {
    return "animation-iteration-count: " + (declaration[1] + ";");
  } else if (declaration[0] === AnimationName) {
    return "animation-name: " + (declaration[1] + ";");
  } else if (declaration[0] === AnimationPlayState) {
    return "animation-play-state: " + (declaration[1] + ";");
  } else if (declaration[0] === AnimationTimingFunction) {
    return "animation-timing-function: " + (declaration[1] + ";");
  } else if (declaration[0] === Transition) {
    return "transition: " + (declaration[1] + ";");
  } else if (declaration[0] === TransitionDelay) {
    return "transition-delay: " + (declaration[1] + ";");
  } else if (declaration[0] === TransitionDuration) {
    return "transition-duration: " + (declaration[1] + ";");
  } else if (declaration[0] === TransitionProperty) {
    return "transition-property: " + (declaration[1] + ";");
  } else if (declaration[0] === TransitionTimingFunction) {
    return "transition-timing-function: " + (declaration[1] + ";");
  } else if (declaration[0] === BackfaceVisibility) {
    return "backface-visibility: " + (declaration[1] + ";");
  } else if (declaration[0] === Perspective) {
    return "perspective: " + (declaration[1] + ";");
  } else if (declaration[0] === PerspectiveOrigin) {
    return "perspective-origin: " + (declaration[1] + ";");
  } else if (declaration[0] === Transform) {
    return "transform: " + (declaration[1] + ";");
  } else if (declaration[0] === TransformOrigin) {
    return "transform-origin: " + (declaration[1] + ";");
  } else if (declaration[0] === TransformStyle) {
    return "transform-style: " + (declaration[1] + ";");
  } else if (declaration[0] === JustifyItems) {
    return "justify-items: " + (declaration[1] + ";");
  } else if (declaration[0] === JustifySelf) {
    return "justify-self: " + (declaration[1] + ";");
  } else if (declaration[0] === PlaceContent) {
    return "place-content: " + (declaration[1] + ";");
  } else if (declaration[0] === PlaceItems) {
    return "place-items: " + (declaration[1] + ";");
  } else if (declaration[0] === PlaceSelf) {
    return "place-self: " + (declaration[1] + ";");
  } else if (declaration[0] === Appearance) {
    return "appearance: " + (declaration[1] + ";");
  } else if (declaration[0] === Caret) {
    return "caret: " + (declaration[1] + ";");
  } else if (declaration[0] === CaretAnimation) {
    return "caret-animation: " + (declaration[1] + ";");
  } else if (declaration[0] === CaretShape) {
    return "caret-shape: " + (declaration[1] + ";");
  } else if (declaration[0] === UserSelect) {
    return "user-select: " + (declaration[1] + ";");
  } else if (declaration[0] === MaxLines) {
    return "max-lines: " + (declaration[1] + ";");
  } else if (declaration[0] === MarqueeDirection) {
    return "marquee-direction: " + (declaration[1] + ";");
  } else if (declaration[0] === MarqueeLoop) {
    return "marquee-loop: " + (declaration[1] + ";");
  } else if (declaration[0] === MarqueeSpeed) {
    return "marquee-speed: " + (declaration[1] + ";");
  } else if (declaration[0] === MarqueeStyle) {
    return "marquee-style: " + (declaration[1] + ";");
  } else if (declaration[0] === OverflowStyle) {
    return "overflow-style: " + (declaration[1] + ";");
  } else if (declaration[0] === Rotation) {
    return "rotation: " + (declaration[1] + ";");
  } else if (declaration[0] === RotationPoint) {
    return "rotation-point: " + (declaration[1] + ";");
  } else if (declaration[0] === AlignmentBaseline) {
    return "alignment-baseline: " + (declaration[1] + ";");
  } else if (declaration[0] === BaselineShift) {
    return "baseline-shift: " + (declaration[1] + ";");
  } else if (declaration[0] === Clip) {
    return "clip: " + (declaration[1] + ";");
  } else if (declaration[0] === ClipPath) {
    return "clip-path: " + (declaration[1] + ";");
  } else if (declaration[0] === ClipRule) {
    return "clip-rule: " + (declaration[1] + ";");
  } else if (declaration[0] === ColorInterpolation) {
    return "color-interpolation: " + (declaration[1] + ";");
  } else if (declaration[0] === ColorInterpolationFilters) {
    return "color-interpolation-filters: " + (declaration[1] + ";");
  } else if (declaration[0] === ColorProfile) {
    return "color-profile: " + (declaration[1] + ";");
  } else if (declaration[0] === ColorRendering) {
    return "color-rendering: " + (declaration[1] + ";");
  } else if (declaration[0] === DominantBaseline) {
    return "dominant-baseline: " + (declaration[1] + ";");
  } else if (declaration[0] === Fill) {
    return "fill: " + (declaration[1] + ";");
  } else if (declaration[0] === FillOpacity) {
    return "fill-opacity: " + (declaration[1] + ";");
  } else if (declaration[0] === FillRule) {
    return "fill-rule: " + (declaration[1] + ";");
  } else if (declaration[0] === Filter) {
    return "filter: " + (declaration[1] + ";");
  } else if (declaration[0] === FloodColor) {
    return "flood-color: " + (declaration[1] + ";");
  } else if (declaration[0] === FloodOpacity) {
    return "flood-opacity: " + (declaration[1] + ";");
  } else if (declaration[0] === GlyphOrientationHorizontal) {
    return "glyph-orientation-horizontal: " + (declaration[1] + ";");
  } else if (declaration[0] === GlyphOrientationVertical) {
    return "glyph-orientation-vertical: " + (declaration[1] + ";");
  } else if (declaration[0] === ImageRendering) {
    return "image-rendering: " + (declaration[1] + ";");
  } else if (declaration[0] === Kerning) {
    return "kerning: " + (declaration[1] + ";");
  } else if (declaration[0] === LightingColor) {
    return "lighting-color: " + (declaration[1] + ";");
  } else if (declaration[0] === MarkerEnd) {
    return "marker-end: " + (declaration[1] + ";");
  } else if (declaration[0] === MarkerMid) {
    return "marker-mid: " + (declaration[1] + ";");
  } else if (declaration[0] === MarkerStart) {
    return "marker-start: " + (declaration[1] + ";");
  } else if (declaration[0] === PointerEvents) {
    return "pointer-events: " + (declaration[1] + ";");
  } else if (declaration[0] === ShapeRendering) {
    return "shape-rendering: " + (declaration[1] + ";");
  } else if (declaration[0] === StopColor) {
    return "stop-color: " + (declaration[1] + ";");
  } else if (declaration[0] === StopOpacity) {
    return "stop-opacity: " + (declaration[1] + ";");
  } else if (declaration[0] === Stroke) {
    return "stroke: " + (declaration[1] + ";");
  } else if (declaration[0] === StrokeDasharray) {
    return "stroke-dasharray: " + (declaration[1] + ";");
  } else if (declaration[0] === StrokeDashoffset) {
    return "stroke-dashoffset: " + (declaration[1] + ";");
  } else if (declaration[0] === StrokeLinecap) {
    return "stroke-linecap: " + (declaration[1] + ";");
  } else if (declaration[0] === StrokeLinejoin) {
    return "stroke-linejoin: " + (declaration[1] + ";");
  } else if (declaration[0] === StrokeMiterlimit) {
    return "stroke-miterlimit: " + (declaration[1] + ";");
  } else if (declaration[0] === StrokeOpacity) {
    return "stroke-opacity: " + (declaration[1] + ";");
  } else if (declaration[0] === StrokeWidth) {
    return "stroke-width: " + (declaration[1] + ";");
  } else if (declaration[0] === TextAnchor) {
    return "text-anchor: " + (declaration[1] + ";");
  } else if (declaration[0] === TextRendering) {
    return "text-rendering: " + (declaration[1] + ";");
  } else if (declaration[0] === RubyAlign) {
    return "ruby-align: " + (declaration[1] + ";");
  } else if (declaration[0] === RubyMerge) {
    return "ruby-merge: " + (declaration[1] + ";");
  } else if (declaration[0] === RubyPosition) {
    return "ruby-position: " + (declaration[1] + ";");
  } else {
    return "unknown: unknown;";
  }
}

function print_declarations(declarations) {
  var _list = declarations;
  var _acc = "";
  while(true) {
    var acc = _acc;
    var list = _list;
    if (list) {
      _acc = acc + ("  " + (print_declaration(list[0]) + "\n"));
      _list = list[1];
      continue ;
      
    } else {
      return acc;
    }
  };
}

function join(glue, list) {
  var _list = list;
  var _acc = "";
  while(true) {
    var acc = _acc;
    var list$1 = _list;
    if (list$1) {
      var rest = list$1[1];
      var a = list$1[0];
      if (rest) {
        _acc = acc + (a + glue);
        _list = rest;
        continue ;
        
      } else {
        return acc + a;
      }
    } else {
      return acc;
    }
  };
}

function print_selectors(selectors) {
  return join(", ", selectors);
}

function print_rule(rule) {
  return join(", ", rule[0]) + (" {\n" + (print_declarations(rule[1]) + "}"));
}

function print_rules(rules) {
  return join("\n", List.map(print_rule, rules));
}

exports.Azimuth                    = Azimuth;
exports.Background                 = Background;
exports.BackgroundAttachment       = BackgroundAttachment;
exports.BackgroundColor            = BackgroundColor;
exports.BackgroundImage            = BackgroundImage;
exports.BackgroundPosition         = BackgroundPosition;
exports.BackgroundRepeat           = BackgroundRepeat;
exports.Border                     = Border;
exports.BorderCollapse             = BorderCollapse;
exports.BorderColor                = BorderColor;
exports.BorderSpacing              = BorderSpacing;
exports.BorderStyle                = BorderStyle;
exports.BorderTop                  = BorderTop;
exports.BorderRight                = BorderRight;
exports.BorderBottom               = BorderBottom;
exports.BorderLeft                 = BorderLeft;
exports.BorderTopColor             = BorderTopColor;
exports.BorderRightColor           = BorderRightColor;
exports.BorderBottomColor          = BorderBottomColor;
exports.BorderLeftColor            = BorderLeftColor;
exports.BorderTopStyle             = BorderTopStyle;
exports.BorderRightStyle           = BorderRightStyle;
exports.BorderBottomStyle          = BorderBottomStyle;
exports.BorderLeftStyle            = BorderLeftStyle;
exports.BorderTopWidth             = BorderTopWidth;
exports.BorderRightWidth           = BorderRightWidth;
exports.BorderBottomWidth          = BorderBottomWidth;
exports.BorderLeftWidth            = BorderLeftWidth;
exports.BorderWidth                = BorderWidth;
exports.Bottom                     = Bottom;
exports.CaptionSide                = CaptionSide;
exports.Clear                      = Clear;
exports.Color                      = Color;
exports.Content                    = Content;
exports.CounterIncrement           = CounterIncrement;
exports.CounterReset               = CounterReset;
exports.Cue                        = Cue;
exports.CueAfter                   = CueAfter;
exports.CueBefore                  = CueBefore;
exports.Cursor                     = Cursor;
exports.Direction                  = Direction;
exports.Display                    = Display;
exports.Elevation                  = Elevation;
exports.EmptyCells                 = EmptyCells;
exports.Float                      = Float;
exports.Font                       = Font;
exports.FontFamily                 = FontFamily;
exports.FontSize                   = FontSize;
exports.FontSizeAdjust             = FontSizeAdjust;
exports.FontStretch                = FontStretch;
exports.FontStyle                  = FontStyle;
exports.FontVariant                = FontVariant;
exports.FontWeight                 = FontWeight;
exports.Height                     = Height;
exports.Left                       = Left;
exports.LetterSpacing              = LetterSpacing;
exports.LineHeight                 = LineHeight;
exports.ListStyle                  = ListStyle;
exports.ListStyleImage             = ListStyleImage;
exports.ListStylePosition          = ListStylePosition;
exports.ListStyleType              = ListStyleType;
exports.Margin                     = Margin;
exports.MarginTop                  = MarginTop;
exports.MarginRight                = MarginRight;
exports.MarginBottom               = MarginBottom;
exports.MarginLeft                 = MarginLeft;
exports.MarkerOffset               = MarkerOffset;
exports.Marks                      = Marks;
exports.MaxHeight                  = MaxHeight;
exports.MaxWidth                   = MaxWidth;
exports.MinHeight                  = MinHeight;
exports.MinWidth                   = MinWidth;
exports.Orphans                    = Orphans;
exports.Outline                    = Outline;
exports.OutlineColor               = OutlineColor;
exports.OutlineStyle               = OutlineStyle;
exports.OutlineWidth               = OutlineWidth;
exports.Overflow                   = Overflow;
exports.Padding                    = Padding;
exports.PaddingTop                 = PaddingTop;
exports.PaddingRight               = PaddingRight;
exports.PaddingBottom              = PaddingBottom;
exports.PaddingLeft                = PaddingLeft;
exports.Page                       = Page;
exports.PageBreakAfter             = PageBreakAfter;
exports.PageBreakBefore            = PageBreakBefore;
exports.PageBreakInside            = PageBreakInside;
exports.Pause                      = Pause;
exports.PauseAfter                 = PauseAfter;
exports.PauseBefore                = PauseBefore;
exports.Pitch                      = Pitch;
exports.PitchRange                 = PitchRange;
exports.PlayDuring                 = PlayDuring;
exports.Position                   = Position;
exports.Quotes                     = Quotes;
exports.Richness                   = Richness;
exports.Right                      = Right;
exports.Size                       = Size;
exports.Speak                      = Speak;
exports.SpeakHeader                = SpeakHeader;
exports.SpeakNumeral               = SpeakNumeral;
exports.SpeakPunctuation           = SpeakPunctuation;
exports.SpeechRate                 = SpeechRate;
exports.Stress                     = Stress;
exports.TableLayout                = TableLayout;
exports.TextAlign                  = TextAlign;
exports.TextDecoration             = TextDecoration;
exports.TextIndent                 = TextIndent;
exports.TextShadow                 = TextShadow;
exports.TextTransform              = TextTransform;
exports.Top                        = Top;
exports.UnicodeBidi                = UnicodeBidi;
exports.VerticalAlign              = VerticalAlign;
exports.Visibility                 = Visibility;
exports.VoiceFamily                = VoiceFamily;
exports.Volume                     = Volume;
exports.WhiteSpace                 = WhiteSpace;
exports.Widows                     = Widows;
exports.Width                      = Width;
exports.WordSpacing                = WordSpacing;
exports.ZIndex                     = ZIndex;
exports.Opacity                    = Opacity;
exports.BackgroundOrigin           = BackgroundOrigin;
exports.BackgroundSize             = BackgroundSize;
exports.BackgroundClip             = BackgroundClip;
exports.BorderRadius               = BorderRadius;
exports.BorderTopLeftRadius        = BorderTopLeftRadius;
exports.BorderTopRightRadius       = BorderTopRightRadius;
exports.BorderBottomLeftRadius     = BorderBottomLeftRadius;
exports.BorderBottomRightRadius    = BorderBottomRightRadius;
exports.BorderImage                = BorderImage;
exports.BorderImageSource          = BorderImageSource;
exports.BorderImageSlice           = BorderImageSlice;
exports.BorderImageWidth           = BorderImageWidth;
exports.BorderImageOutset          = BorderImageOutset;
exports.BorderImageRepeat          = BorderImageRepeat;
exports.BoxShadow                  = BoxShadow;
exports.Columns                    = Columns;
exports.ColumnCount                = ColumnCount;
exports.ColumnFill                 = ColumnFill;
exports.ColumnGap                  = ColumnGap;
exports.ColumnRule                 = ColumnRule;
exports.ColumnRuleColor            = ColumnRuleColor;
exports.ColumnRuleStyle            = ColumnRuleStyle;
exports.ColumnRuleWidth            = ColumnRuleWidth;
exports.ColumnSpan                 = ColumnSpan;
exports.ColumnWidth                = ColumnWidth;
exports.BreakAfter                 = BreakAfter;
exports.BreakBefore                = BreakBefore;
exports.BreakInside                = BreakInside;
exports.Rest                       = Rest;
exports.RestAfter                  = RestAfter;
exports.RestBefore                 = RestBefore;
exports.SpeakAs                    = SpeakAs;
exports.VoiceBalance               = VoiceBalance;
exports.VoiceDuration              = VoiceDuration;
exports.VoicePitch                 = VoicePitch;
exports.VoiceRange                 = VoiceRange;
exports.VoiceRate                  = VoiceRate;
exports.VoiceStress                = VoiceStress;
exports.VoiceVolume                = VoiceVolume;
exports.ObjectFit                  = ObjectFit;
exports.ObjectPosition             = ObjectPosition;
exports.ImageResolution            = ImageResolution;
exports.ImageOrientation           = ImageOrientation;
exports.AlignContent               = AlignContent;
exports.AlignItems                 = AlignItems;
exports.AlignSelf                  = AlignSelf;
exports.Flex                       = Flex;
exports.FlexBasis                  = FlexBasis;
exports.FlexDirection              = FlexDirection;
exports.FlexFlow                   = FlexFlow;
exports.FlexGrow                   = FlexGrow;
exports.FlexShrink                 = FlexShrink;
exports.FlexWrap                   = FlexWrap;
exports.JustifyContent             = JustifyContent;
exports.Order                      = Order;
exports.TextDecorationColor        = TextDecorationColor;
exports.TextDecorationLine         = TextDecorationLine;
exports.TextDecorationSkip         = TextDecorationSkip;
exports.TextDecorationStyle        = TextDecorationStyle;
exports.TextEmphasis               = TextEmphasis;
exports.TextEmphasisColor          = TextEmphasisColor;
exports.TextEmphasisPosition       = TextEmphasisPosition;
exports.TextEmphasisStyle          = TextEmphasisStyle;
exports.TextUnderlinePosition      = TextUnderlinePosition;
exports.FontFeatureSettings        = FontFeatureSettings;
exports.FontKerning                = FontKerning;
exports.FontLanguageOverride       = FontLanguageOverride;
exports.FontSynthesis              = FontSynthesis;
exports.ForntVariantAlternates     = ForntVariantAlternates;
exports.FontVariantCaps            = FontVariantCaps;
exports.FontVariantEastAsian       = FontVariantEastAsian;
exports.FontVariantLigatures       = FontVariantLigatures;
exports.FontVariantNumeric         = FontVariantNumeric;
exports.FontVariantPosition        = FontVariantPosition;
exports.All                        = All;
exports.TextCombineUpright         = TextCombineUpright;
exports.TextOrientation            = TextOrientation;
exports.WritingMode                = WritingMode;
exports.ShapeImageThreshold        = ShapeImageThreshold;
exports.ShapeMargin                = ShapeMargin;
exports.ShapeOutside               = ShapeOutside;
exports.Mask                       = Mask;
exports.MaskBorder                 = MaskBorder;
exports.MaskBorderMode             = MaskBorderMode;
exports.MaskBorderOutset           = MaskBorderOutset;
exports.MaskBorderRepeat           = MaskBorderRepeat;
exports.MaskBorderSlice            = MaskBorderSlice;
exports.MaskBorderSource           = MaskBorderSource;
exports.MaskBorderWidth            = MaskBorderWidth;
exports.MaskClip                   = MaskClip;
exports.MaskComposite              = MaskComposite;
exports.MaskImage                  = MaskImage;
exports.MaskMode                   = MaskMode;
exports.MaskOrigin                 = MaskOrigin;
exports.MaskPosition               = MaskPosition;
exports.MaskRepeat                 = MaskRepeat;
exports.MaskSize                   = MaskSize;
exports.MaskType                   = MaskType;
exports.BackgroundBlendMode        = BackgroundBlendMode;
exports.Isolation                  = Isolation;
exports.MixBlendMode               = MixBlendMode;
exports.BoxDecorationBreak         = BoxDecorationBreak;
exports.BoxSizing                  = BoxSizing;
exports.CaretColor                 = CaretColor;
exports.NavDown                    = NavDown;
exports.NavLeft                    = NavLeft;
exports.NavRight                   = NavRight;
exports.NavUp                      = NavUp;
exports.OutlineOffset              = OutlineOffset;
exports.Resize                     = Resize;
exports.TextOverflow               = TextOverflow;
exports.Grid                       = Grid;
exports.GridArea                   = GridArea;
exports.GridAutoColumns            = GridAutoColumns;
exports.GridAutoFlow               = GridAutoFlow;
exports.GridAutoRows               = GridAutoRows;
exports.GridColumn                 = GridColumn;
exports.GridColumnEnd              = GridColumnEnd;
exports.GridColumnGap              = GridColumnGap;
exports.GridColumnStart            = GridColumnStart;
exports.GridGap                    = GridGap;
exports.GridRow                    = GridRow;
exports.GridRowEnd                 = GridRowEnd;
exports.GridRowGap                 = GridRowGap;
exports.GridRowStart               = GridRowStart;
exports.GridTemplate               = GridTemplate;
exports.GridTempalteAreas          = GridTempalteAreas;
exports.GridTemplateColumns        = GridTemplateColumns;
exports.GridTemplateRows           = GridTemplateRows;
exports.WillChange                 = WillChange;
exports.HangingPunctuation         = HangingPunctuation;
exports.Hyphens                    = Hyphens;
exports.LineBreak                  = LineBreak;
exports.OverflowWrap               = OverflowWrap;
exports.TabSize                    = TabSize;
exports.TextAlignLast              = TextAlignLast;
exports.TextJustify                = TextJustify;
exports.WordBreak                  = WordBreak;
exports.WordWrap                   = WordWrap;
exports.Animation                  = Animation;
exports.AnimationDelay             = AnimationDelay;
exports.AnimationDirection         = AnimationDirection;
exports.AnimationDuration          = AnimationDuration;
exports.AnimationFillMode          = AnimationFillMode;
exports.AnimationIterationCount    = AnimationIterationCount;
exports.AnimationName              = AnimationName;
exports.AnimationPlayState         = AnimationPlayState;
exports.AnimationTimingFunction    = AnimationTimingFunction;
exports.Transition                 = Transition;
exports.TransitionDelay            = TransitionDelay;
exports.TransitionDuration         = TransitionDuration;
exports.TransitionProperty         = TransitionProperty;
exports.TransitionTimingFunction   = TransitionTimingFunction;
exports.BackfaceVisibility         = BackfaceVisibility;
exports.Perspective                = Perspective;
exports.PerspectiveOrigin          = PerspectiveOrigin;
exports.Transform                  = Transform;
exports.TransformOrigin            = TransformOrigin;
exports.TransformStyle             = TransformStyle;
exports.JustifyItems               = JustifyItems;
exports.JustifySelf                = JustifySelf;
exports.PlaceContent               = PlaceContent;
exports.PlaceItems                 = PlaceItems;
exports.PlaceSelf                  = PlaceSelf;
exports.Appearance                 = Appearance;
exports.Caret                      = Caret;
exports.CaretAnimation             = CaretAnimation;
exports.CaretShape                 = CaretShape;
exports.UserSelect                 = UserSelect;
exports.MaxLines                   = MaxLines;
exports.MarqueeDirection           = MarqueeDirection;
exports.MarqueeLoop                = MarqueeLoop;
exports.MarqueeSpeed               = MarqueeSpeed;
exports.MarqueeStyle               = MarqueeStyle;
exports.OverflowStyle              = OverflowStyle;
exports.Rotation                   = Rotation;
exports.RotationPoint              = RotationPoint;
exports.AlignmentBaseline          = AlignmentBaseline;
exports.BaselineShift              = BaselineShift;
exports.Clip                       = Clip;
exports.ClipPath                   = ClipPath;
exports.ClipRule                   = ClipRule;
exports.ColorInterpolation         = ColorInterpolation;
exports.ColorInterpolationFilters  = ColorInterpolationFilters;
exports.ColorProfile               = ColorProfile;
exports.ColorRendering             = ColorRendering;
exports.DominantBaseline           = DominantBaseline;
exports.Fill                       = Fill;
exports.FillOpacity                = FillOpacity;
exports.FillRule                   = FillRule;
exports.Filter                     = Filter;
exports.FloodColor                 = FloodColor;
exports.FloodOpacity               = FloodOpacity;
exports.GlyphOrientationHorizontal = GlyphOrientationHorizontal;
exports.GlyphOrientationVertical   = GlyphOrientationVertical;
exports.ImageRendering             = ImageRendering;
exports.Kerning                    = Kerning;
exports.LightingColor              = LightingColor;
exports.MarkerEnd                  = MarkerEnd;
exports.MarkerMid                  = MarkerMid;
exports.MarkerStart                = MarkerStart;
exports.PointerEvents              = PointerEvents;
exports.ShapeRendering             = ShapeRendering;
exports.StopColor                  = StopColor;
exports.StopOpacity                = StopOpacity;
exports.Stroke                     = Stroke;
exports.StrokeDasharray            = StrokeDasharray;
exports.StrokeDashoffset           = StrokeDashoffset;
exports.StrokeLinecap              = StrokeLinecap;
exports.StrokeLinejoin             = StrokeLinejoin;
exports.StrokeMiterlimit           = StrokeMiterlimit;
exports.StrokeOpacity              = StrokeOpacity;
exports.StrokeWidth                = StrokeWidth;
exports.TextAnchor                 = TextAnchor;
exports.TextRendering              = TextRendering;
exports.RubyAlign                  = RubyAlign;
exports.RubyMerge                  = RubyMerge;
exports.RubyPosition               = RubyPosition;
exports.print_declaration          = print_declaration;
exports.print_declarations         = print_declarations;
exports.join                       = join;
exports.print_selectors            = print_selectors;
exports.print_rule                 = print_rule;
exports.print_rules                = print_rules;
/* No side effect */

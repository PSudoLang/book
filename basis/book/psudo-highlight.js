const TYPES = Array.concat(
  // Signed Types
  ["i8", "i16", "i32", "i64"],
  // Unsigned Types
  ["u8", "u16", "u32", "u64"],
  // Floating Point Types
  ["f32", "f64"],
  // Other Types
  ["str", "bool"],
  // Array Types
  ["Array", "2dArray", "3dArray", "4dArray", "5dArray"]
);

const KEYWORDS = Array.concat(
  // Control Flow
  ["if", "else", "for", "while", "break", "continue", "loop", "return"],
  // Unknown
  [
    "as",
    "const",
    "enum",
    "extern",
    "fn",
    "impl",
    "let",
    "match",
    "move",
    "ref",
    "self",
    "Self",
    "static",
    "struct",
    "super",
    "trait",
    "type",
    "where"
  ],
  // PS Specific
  ["input", "output", "log"]
);

const KEYWORD_LIKE_OPERATORS = ["in", "is", "!in", "!is"];

const LITERALS = ["true", "false"];

hljs.registerLanguage("psudo", () => ({
  case_insensitive: true,
  keywords: {
    keyword: Array.concat(TYPES, KEYWORDS, KEYWORD_LIKE_OPERATORS).join(" "),
    literal: LITERALS.join(" ")
  },
  contains: [
    {
      className: "string",
      begin: '"',
      end: '"'
    },
    hljs.COMMENT(
      "/\\*", // begin
      "\\*/" // end
    )
  ]
}));

// !! mdbook doesn't support to insert this script before book.js loading.
Array.from(document.querySelectorAll("code")).forEach(function(block) {
  hljs.highlightBlock(block);
});

# The PSudo Books

This repository contains the source code of three books: "The PSudo Guidebook", "The PSudo Reference Book", and "The PSudonomicon".

These books are available on our website. You can see "The PSudo Guidebook" from [here](https://psudolang.github.io/book/guide), "The PSudo Reference" from [here](https://psudolang.github.io/book/reference), and "The PSudonomicon" from [here](https://psudolang.github.io/book/nomicon).

## Requirements

- [mdBook](https://github.com/rust-lang-nursery/mdBook) - Build a book from Markdown files.

## Build

Just type following command on the directory of a book you want to build.

```sh
mdbook build
```

Compiled output will be available at `./book` folder. If you want to see the output on browser, just open `./book/index.html` with your most loved browser.

## Watch

When writing the book, the build command is so verbose because we need to type on every edit. However, we can use the following command to write documents more comfortably.

```sh
# It just compile on every edit. Browser requires refresh.
mdbook watch

# Same to watch, but open https://localhost:3000 (port is changelabe) which reload browser on every edit.
mdbook serve
```

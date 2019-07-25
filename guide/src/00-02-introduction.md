# Introduction

Welcome to the _PSudo Guidebook_, an introductory book about PSudo.
This book helps you to write better PSudo code faster.
In _Problem Solving_, It is always hard to handle I/O and to implement a data structure.
We couldn't use other modern languages in the ecosystem what uses C++, Python or Java as a standard language.
Created based on our experiences so far, PSudo will be the first step to make up better Problem Solving Ecosystem for ourselves.

## Targets

We wrote texts assuming you had programming experiences.
Surely, we've minimized programming backgrounds.
But this book didn't aimed _to teach programming_.
We don't spend a lot of time talking about what programming is or how to think about it.

## Reading Guide

In general, books are read from front to back sequentially.
The later story builds on contents in an earlier story.
And the earlier story might not give you details,
we typically meet the topic again in a later story.

This book holds two stories per each stuff: _Concept Story_ and _Try Story_.
in Concept Story, we will explain the background behind, targets, and technical form about the stuff.
in Try Story, we will introduce a situation the stuff can be used, and give an example code which tests the stuff from the situation.

Moreover, at the end of this book, there is some appendix which contains useful information in the more reference-like format.
"Appendix A" is talking about characters and token processing on PSudo.
"Appendix B" is talking about **_TODO_**.
"Appendix C" is talking about a lot of useful things on the standard library.
"Appendix D" is talking about development tools provided officially or community provided.
"Appendix E" is talking about the version of PSudo...?

Actually, there is no wrong way and the right way to read this book.
If you want to skip ahead then skip. When you're confused, go back.
Just read it what you want to for you.

Finally, a really important part remains, the way to read errors on the sample code.
Error codes will lead you to write working code. So, we wrote a lot of error codes.
Therefore, Read the main text carefully, check whether the code works, then run.
Check is there any marker exists is the good way to check is the code works.
Remember those markers.

| Marker | Meaning                            |
| ------ | ---------------------------------- |
| 🤔     | This code doesn't compile          |
| 😱     | This code will panic               |
| 💀     | This code contains unsafe-code     |
| 🙄     | This code doesn't work as expected |

Most of the cases, we've written code which works as expected after the error code.

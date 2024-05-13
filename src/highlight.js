import {styleTags, tags as t} from "@lezer/highlight"

export const arithmeticHighlighting = styleTags({
  Float: t.float,
  Integer: t.integer,
})

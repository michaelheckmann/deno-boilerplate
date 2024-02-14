import file from "./version.json" with { type: "json" }

import { assertEquals } from "$std/assert/mod.ts"

Deno.test("json  test", () => {
  assertEquals(file.version, "1.0.0")
})

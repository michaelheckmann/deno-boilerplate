import { red } from "$std/fmt/colors.ts"

const text = await Deno.readTextFile("./src/version.json")
const json = JSON.parse(text) as { version: string }
console.log(red(json.version))

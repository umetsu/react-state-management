import { configure } from "@storybook/react"
import requireContext from "require-context.macro"

// automatically import all files ending in *.stories.js
configure(requireContext("../src", true, /\.stories\.tsx?$/), module)

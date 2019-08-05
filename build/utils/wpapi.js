import Wpapi from "wpapi"


const options = window.wue || wue
if (typeof options === "undefined") {
  throw new Error("`wue` not founded.")
}
if (typeof options.wpapi === "undefined") {
  throw new Error("`wue.wpapi` not founded.")
}

export default new Wpapi(options.wpapi)
import {getEntry} from "./model.js";
import { viewData } from "./view.js";

function main() {
    const dataEntry = getEntry();

    dataEntry.then(r => viewData(r))
}

main();
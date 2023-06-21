import { readBlockConfig } from '../../scripts/lib-franklin.js';

export default async function decorate(block) {
    const config = readBlockConfig(block);
    const hr = document.createElement('hr');

    if (config.style) {
        hr.classList.add("flower");
    }

    block.innerHTML = "";
    block.append(hr);
}

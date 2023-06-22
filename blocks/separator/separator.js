import { readBlockConfig } from '../../scripts/lib-franklin.js';

export default async function decorate(block) {
    const hr = document.createElement('hr');
    block.innerHTML = "";
    block.append(hr);
}

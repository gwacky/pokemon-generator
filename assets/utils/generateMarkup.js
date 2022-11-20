export function generateMarkup(data) {
    return `<div class="p-8 m-8 rounded bg-blue-100 flex">
    <div class="w-1/2 md:w-1/2">
        <img src="${data.img}" alt="${data.name}" class="w-full h-full ">
    </div>
    <div class="w-1/2 md:w-1/2">
        <h2 class="font-bold text-3x1">${data.name}</h2>
        <hr class="p-2 border-gray-800">
        <ul class="list-disc pl-4">
            ${getStats(data.stats)}
        </ul>
    </div>
</div>`
}

function getStats(stats) {
    let statsStr = "";

    for (const [key, value] of Object.entries(stats)) {
        statsStr += `<li>${key}: ${value}</li>`;
    }

    return statsStr;
}
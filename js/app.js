const vendorList = document.querySelector('.vendor_list');

window.addEventListener('load', e => {
    updateVendor();
});

async function updateVendor() {
    const res = await fetch('https://creaseart.com/wtemplate/itf_vendor_list.php');
    const json = res.json;

    vendorList.innerHTML = json.vendor_list.map(createList).join('\n');
}

function createList(vendor_list) {
    return `
        <div class="vendor_card">
            <h4>${vendor_list.company_name}</h4>
            <p>${vendor_list.rating}</p>
            <h5>${vendor_list.tagline}</h5>
            <p>${vendor_list.pricing}</p>
            <p>${vendor_list.delivery}</p>
            <img src="${vendor_list.company_logo}"/>
        </div>
    `;
}
const services = [
    { name: "Check Tool", lead: "Ali", resources: ["Lamma Alhazmi"] },
    { name: "E-Invoices", lead: "Ali", resources: ["Ali Baghazal"] },
    { name: "Individuals", lead: "Ali", resources: ["Amirian Lenkiewicz", "Anna Borgosz", "Sarah Elsherif"] },
    { name: "SSO", lead: "Ali", resources: ["Kamal Aljabari", "Vladislav Alekseyev"] },
    { name: "Workspaces", lead: "Ali", resources: ["Kamal Aljabari", "Vladislav Alekseyev"] },
    { name: "Dashboard", lead: "Nader Hussein", resources: ["Mohammed Mostafa"] },
    { name: "Notifications Hub", lead: "Nader Hussein", resources: ["Nader Hussein"] }
];

const container = document.getElementById("services-container");

//search Function
services.forEach(service => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.service = service.name.toLowerCase();
    card.dataset.teamLead = service.lead.toLowerCase();
    card.dataset.resources = service.resources.join(", ").toLowerCase();

    card.innerHTML = `
        <div class="card-header">${service.name}</div>
    `;

    card.addEventListener("click", () => {
        showPopup(service.name, service.lead, service.resources.map(r => `<li>${r}</li>`).join(""));
    });

    container.appendChild(card);
});

//Filter Function for the resources and team lead and service name
function filterCards() {
    const search = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.dataset.service;
        const teamLead = card.dataset.teamLead;
        const resources = card.dataset.resources;

        if (title.includes(search) || teamLead.includes(search) || resources.includes(search)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

//Popup Function for the services details
function showPopup(name, lead, resources) {
    document.getElementById('popup-content').innerHTML = `
        <h2>${name}</h2>
        <p><strong>Team Lead:</strong> ${lead}</p>
        <p><strong>Resources:</strong><ul>${resources}</ul></p>
    `;
    document.getElementById('popup').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closePopup() {
    document.getElementById('popup').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}
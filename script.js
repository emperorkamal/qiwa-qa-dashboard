const services = [
    { name: "Absent", lead: "Ismail", resources: ["Amulya A"] },
    { name: "Check Tool", lead: "Ali", resources: ["Lamma Alhazmi"] },
    { name: "Contract Management", lead: "Ismail", resources: ["Marcin Malecki", "Michal Snakowski", "Yara Samir"] },
    { name: "Dashboard", lead: "Nader Hussein", resources: ["Mohammed Mostafa"] },
    { name: "Data Lens", lead: "Elayyan", resources: ["Sidrah Abbasi"] },
    { name: "Data Portal", lead: "Elayyan", resources: ["Abdullah Omar"] },
    { name: "Deceased Employee Entitlement", lead: "Nader Hussein", resources: ["Mohammed Mostafa"] },
    { name: "Disbursement Of Wage Deductions", lead: "Nader Hussein", resources: ["Hrvoje Pavlovic"] },
    { name: "DWH", lead: "Elayyan", resources: ["Abdullah Omar", "Sidrah Abbasi"] },
    { name: "E-Invoices", lead: "Ali", resources: ["Ali Baghazal"] },
    { name: "Employee Management", lead: "Ismail", resources: ["Ahmed Kamal"] },
    { name: "Employee Transfer", lead: "Ismail", resources: ["Dawid Jagoda", "Mostafa Gamal"] },
    { name: "End Of Services Calculator", lead: "Nader Hussein", resources: ["Mohammed Mostafa"] },
    { name: "Error Translation Service", lead: "Nader Hussein", resources: ["Antonio Jarnjak", "Hrvoje Pavlovic"] },
    { name: "Establishment File Management", lead: "Ali", resources: ["Hamza Bsoul", "Mohammed Fahel", "Pawel Larysz"] },
    { name: "Establishment Location Management", lead: "Ali", resources: ["Hamza Bsoul", "Pawel Larysz"] },
    { name: "Exception System", lead: "Ismail", resources: ["Ahmed Kamal"] },
    { name: "Government Contract", lead: "Ismail", resources: ["Yara Samir"] },
    { name: "Indicators", lead: "Nader Hussein", resources: ["Mohammed Mostafa"] },
    { name: "Individuals", lead: "Ali", resources: ["Amirian Lenkiewicz", "Anna Borgosz", "Sarah Elsherif"] },
    { name: "Infrastructure Projects", lead: "Elayyan", resources: ["Elayyan"] },
    { name: "Kayan", lead: "Ali", resources: ["Kamal Aljabari", "Vladislav Alekseyev"] },
    { name: "Kiosk", lead: "Elayyan", resources: ["Abdullah Omar"] },
    { name: "Knowledge Center - BE", lead: "Ali", resources: ["Lamma Alhazmi"] },
    { name: "Knowledge Center - FE", lead: "Nader Hussein", resources: ["Michal Salata"] },
    { name: "Labor Office", lead: "Nader Hussein", resources: ["Alina Molokoiedova", "Doaa Khairy"] },
    { name: "Matrix Management", lead: "Ismail", resources: ["Ahmed Kamal"] },
    { name: "Nitaqat", lead: "Elayyan", resources: ["Abdullah Omar"] },
    { name: "Notifications Center", lead: "Nader Hussein", resources: ["Mohammed Mostafa"] },
    { name: "Notifications Hub", lead: "Nader Hussein", resources: ["Nader Hussein"] },
    { name: "Occupation Management", lead: "Ismail", resources: ["Ahmed Kamal"] },
    { name: "Payment Gateways", lead: "Ali", resources: ["Ali Baghazal", "Mykyta Rudniev"] },
    { name: "Qiwa Certificate", lead: "Ali", resources: ["Hamza Bsoul", "Lamma Alhazmi"] },
    { name: "Qiwa Design System", lead: "Ali", resources: ["Kseniia Sokolova"] },
    { name: "Qiwa Knowledge Repository", lead: "Ismail", resources: ["Marcin Malecki", "Mostafa Gamal"] },
    { name: "Qiwa Mobile App", lead: "Ali", resources: ["Kamal Aljabari", "Marta Lukaszczyk", "Mohammed Fahel", "Sarah Elsherif"] },
    { name: "Query Center", lead: "Elayyan", resources: ["Sidrah Abbasi"] },
    { name: "Quota", lead: "Ali", resources: ["Ali Baghazal"] },
    { name: "React Starter", lead: "Nader Hussein", resources: ["Michal Salata"] },
    { name: "RoboAgent", lead: "Elayyan", resources: ["Sidrah Abbasi"] },
    { name: "Salary Certificate", lead: "Ali", resources: ["Amulya A", "Lamma Alhazmi"] },
    { name: "Seasonal Visa", lead: "Ali", resources: ["Sarah Elsherif", "Dmitriy Khvorostyanoy"] },
    { name: "Services Panel", lead: "Ali", resources: ["Ali Baghazal"] },
    { name: "Shareable Services", lead: "Ismail", resources: ["Michal Snakowski"] },
    { name: "Source Data Testing Activity", lead: "Elayyan", resources: ["Abdullah Omar", "Sidrah Abbasi"] },
    { name: "SSO", lead: "Ali", resources: ["Kamal Aljabari", "Vladislav Alekseyev"] },
    { name: "Staffing Marketplace", lead: "Ismail", resources: ["Ahmed Kamal", "Dawid Jagoda"] },
    { name: "TIP", lead: "Ali", resources: ["Hamza Bsoul", "Mohammed Fahel"] },
    { name: "Training Management", lead: "Nader Hussein", resources: ["Mohammed Mostafa"] },
    { name: "Unified Portals", lead: "Ali", resources: ["Kamal Aljabari", "Vladislav Alekseyev"] },
    { name: "User Management", lead: "Ali", resources: ["Kamal Aljabari", "Mykyta Rudniev"] },
    { name: "Violations", lead: "Ismail", resources: ["Ahmed Kamal"] },
    { name: "Visit Visa", lead: "Ali", resources: ["Dmitriy Khvorostyanoy", "Sarah Elsherif"] },
    { name: "Work Permits", lead: "Nader Hussein", resources: ["Mohammed Mostafa", "Tomislav Levak"] },
    { name: "Work Policy", lead: "Ali", resources: ["Amulya A", "Sarah Elsherif"] },
    { name: "Work Visa", lead: "Ali", resources: ["Dmitriy Khvorostyanoy", "Lamma Alhazmi", "Sarah Elsherif"] },
    { name: "Workspaces", lead: "Ali", resources: ["Kamal Aljabari", "Vladislav Alekseyev"] }
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
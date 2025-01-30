const services = [
    { name: "Absent", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Amulya A"] },
    { name: "Check Tool", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Lamma Alhazmi"] },
    { name: "Contract Management", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Marcin Malecki", "Michal Snakowski", "Yara Samir"] },
    { name: "Dashboard", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Mohammed Mostafa"] },
    { name: "Data Lens", lead: "Elayyan", resources: ["Sidrah Abbasi"] },
    { name: "Data Portal", lead: "Elayyan", resources: ["Abdullah Omar"] },
    { name: "Deceased Employee Entitlement", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Mohammed Mostafa"] },
    { name: "Disbursement Of Wage Deductions (DWD)", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Hrvoje Pavlovic"] },
    { name: "DWH", lead: "Elayyan", resources: ["Abdullah Omar", "Sidrah Abbasi"] },
    { name: "E-Invoices", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Ali Baghazal"] },
    { name: "Employee Management", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Ahmed Kamal"] },
    { name: "Employee Transfer", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Dawid Jagoda", "Mostafa Gamal"] },
    { name: "End Of Services Calculator (EOS)", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Mohammed Mostafa"] },
    { name: "Error Translation Service (ETS)", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Antonio Jarnjak", "Hrvoje Pavlovic"] },
    { name: "Establishment File Management", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Hamza Bsoul", "Mohammed Fahel", "Pawel Larysz"] },
    { name: "Establishment Location Management", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Hamza Bsoul", "Pawel Larysz"] },
    { name: "Exception System", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Ahmed Kamal"] },
    { name: "Government Contract", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Yara Samir"] },
    { name: "Indicators", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Mohammed Mostafa"] },
    { name: "Individuals", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Amirian Lenkiewicz", "Anna Borgosz", "Sarah Elsherif"] },
    { name: "Infrastructure Projects", lead: "Elayyan", resources: ["Elayyan"] },
    { name: "Kayan", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Kamal Aljabari", "Vladislav Alekseyev"] },
    { name: "Kiosk", lead: "Elayyan", resources: ["Abdullah Omar"] },
    { name: "Knowledge Center - BE", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Lamma Alhazmi"] },
    { name: "Knowledge Center - FE", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Michal Salata"] },
    { name: "Labor Office", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Alina Molokoiedova", "Doaa Khairy"] },
    { name: "Matrix Management", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Ahmed Kamal"] },
    { name: "Nitaqat", lead: "Elayyan", resources: ["Abdullah Omar"] },
    { name: "Notifications Center", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Mohammed Mostafa"] },
    { name: "Notifications Hub", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Nader Hussein (N.Hussein@takamol.com.sa)"] },
    { name: "Occupation Management", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Ahmed Kamal"] },
    { name: "Payment Gateways", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Ali Baghazal", "Mykyta Rudniev"] },
    { name: "Qiwa Certificate", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Hamza Bsoul", "Lamma Alhazmi"] },
    { name: "Qiwa Design System", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Kseniia Sokolova"] },
    { name: "Qiwa Knowledge Repository", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Marcin Malecki", "Mostafa Gamal"] },
    { name: "Qiwa Mobile App", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Kamal Aljabari", "Marta Lukaszczyk", "Mohammed Fahel", "Sarah Elsherif"] },
    { name: "Query Center", lead: "Elayyan", resources: ["Sidrah Abbasi"] },
    { name: "Quota", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Ali Baghazal"] },
    { name: "React Starter", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Michal Salata"] },
    { name: "RoboAgent", lead: "Elayyan", resources: ["Sidrah Abbasi"] },
    { name: "Salary Certificate", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Amulya A", "Lamma Alhazmi"] },
    { name: "Seasonal Visa", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Sarah Elsherif", "Dmitriy Khvorostyanoy"] },
    { name: "Services Panel", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Ali Baghazal"] },
    { name: "Shareable Services", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Michal Snakowski"] },
    { name: "Source Data Testing Activity", lead: "Elayyan", resources: ["Abdullah Omar", "Sidrah Abbasi"] },
    { name: "SSO", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Kamal Aljabari", "Vladislav Alekseyev"] },
    { name: "Staffing Marketplace", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Ahmed Kamal", "Dawid Jagoda"] },
    { name: "TIP", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Hamza Bsoul", "Mohammed Fahel"] },
    { name: "Training Management", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Mohammed Mostafa"] },
    { name: "Unified Portals", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Kamal Aljabari", "Vladislav Alekseyev"] },
    { name: "User Management", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Kamal Aljabari", "Mykyta Rudniev"] },
    { name: "Violations", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Ahmed Kamal"] },
    { name: "Visit Visa", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Dmitriy Khvorostyanoy", "Sarah Elsherif"] },
    { name: "Work Permits", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Mohammed Mostafa", "Tomislav Levak"] },
    { name: "Work Policy", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Amulya A", "Sarah Elsherif"] },
    { name: "Work Visa", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Dmitriy Khvorostyanoy", "Lamma Alhazmi", "Sarah Elsherif"] },
    { name: "Workspaces", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Kamal Aljabari", "Vladislav Alekseyev"] }
];

const container = document.getElementById("servicesContainer");

services.forEach(service => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-service", service.name);
    card.setAttribute("data-team-lead", service.lead);
    card.setAttribute("data-resources", service.resources.join(", "));

    card.innerHTML = `
        <div class="card-header">${service.name}</div>
    `;

    card.addEventListener("click", () => {
        showPopup(service.name, service.lead, service.resources);
    });

    container.appendChild(card);
});

function filterCards() {
    const search = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.getAttribute('data-service').toLowerCase();
        const teamLead = card.getAttribute('data-team-lead').toLowerCase();
        const resources = card.getAttribute('data-resources').toLowerCase();

        if (title.includes(search) || teamLead.includes(search) || resources.includes(search)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function showPopup(name, lead, resources) {
    document.getElementById('popup-content').innerHTML = `
        <h2>${name}</h2>
        <p><strong>Team Lead:</strong> ${lead}</p>
        <p><strong>Resources:</strong> <ul>${resources.map(r => `<li>${r}</li>`).join("")}</ul></p>
    `;
    document.getElementById('popup').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closePopup() {
    document.getElementById('popup').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

// Initialize Particles.js
window.onload = function () {
  Particles.init({ selector: ".background" });
};

const particles = Particles.init({
  selector: ".background",
  color: ["#03dac6", "#ff0266", "#000000"],
  connectParticles: true,
  responsive: [
      {
          breakpoint: 768,
          options: {
              color: ["#faebd7", "#03dac6", "#ff0266"],
              maxParticles: 43,
              connectParticles: false
          }
      }
  ]
});

// Services data
const services = [
  { name: "Absent", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Amulya A"] },
  { name: "Check Tool", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Lamma Alhazmi"] },
  { name: "Contract Management", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Marcin Malecki", "Michal Snakowski", "Yara Samir"] },
  { name: "Dashboard", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Mohammed Mostafa"] },
  { name: "Data Lens", lead: "Mohammed Elayyan (M.Elayyan@takamol.com.sa)", resources: ["Sidrah Abbasi"] },
  { name: "Data Portal", lead: "Mohammed Elayyan (M.Elayyan@takamol.com.sa)", resources: ["Abdullah Omar"] },
  { name: "Deceased Employee Entitlement", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Mohammed Mostafa"] },
  { name: "Disbursement Of Wage Deductions (DWD)", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Hrvoje Pavlovic"] },
  { name: "Data Ware House (DWH)", lead: "Mohammed Elayyan (M.Elayyan@takamol.com.sa)", resources: ["Abdullah Omar", "Sidrah Abbasi"] },
  { name: "E-Invoices", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Ali Baghazal"] },
  { name: "Employee Management", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Ahmed Kamal"] },
  { name: "Employee Transfer", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Dawid Jagoda", "Mostafa Gamal"] },
  { name: "End Of Services Calculator (EOS)", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Mohammed Mostafa"] },
  { name: "Error Translation Service (ETS)", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Antonio Jarnjak", "Hrvoje Pavlovic"] },
  { name: "Establishment File Management", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Hamza Bsoul", "Mohammed Fahel", "Pawel Larysz"] },
  { name: "Establishment Location Management", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Hamza Bsoul", "Pawel Larysz"] },
  { name: "Exception System", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Ahmed Kamal"] },
  { name: "Government Contract", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Yara Samir"] },
  { name: "Individuals", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Amirian Lenkiewicz", "Anna Borgosz", "Sarah Elsherif"] },
  { name: "Infrastructure Projects", lead: "Mohammed Elayyan (M.Elayyan@takamol.com.sa)", resources: ["Elayyan (M.Elayyan@takamol.com.sa)"] },
  { name: "Kayan", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Kamal Aljabari", "Vladislav Alekseyev"] },
  { name: "Kiosk", lead: "Mohammed Elayyan (M.Elayyan@takamol.com.sa)", resources: ["Abdullah Omar"] },
  { name: "Knowledge Center", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Michal Salata"] },
  { name: "Labor Office", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Alina Molokoiedova", "Doaa Khairy"] },
  { name: "Matrix Management", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Ahmed Kamal"] },
  { name: "Nitaqat", lead: "Mohammed Elayyan (M.Elayyan@takamol.com.sa)", resources: ["Abdullah Omar"] },
  { name: "Notifications Hub", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Mohammed Mostafa"] },
  { name: "Occupation Management", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Ahmed Kamal"] },
  { name: "Payment Gateways", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Ali Baghazal", "Mykyta Rudniev"] },
  { name: "Qiwa Certificate", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Hamza Bsoul", "Lamma Alhazmi"] },
  { name: "Qiwa Design System", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Kseniia Sokolova"] },
  { name: "Qiwa Knowledge Repository", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Marcin Malecki", "Mostafa Gamal"] },
  { name: "Qiwa Mobile App", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Kamal Aljabari", "Marta Lukaszczyk", "Mohammed Fahel", "Sarah Elsherif"] },
  { name: "Query Center", lead: "Mohammed Elayyan (M.Elayyan@takamol.com.sa)", resources: ["Sidrah Abbasi"] },
  { name: "Quota", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Ali Baghazal"] },
  { name: "React Starter", lead: "Nader Hussein (N.Hussein@takamol.com.sa)", resources: ["Michal Salata"] },
  { name: "RoboAgent", lead: "Mohammed Elayyan (M.Elayyan@takamol.com.sa)", resources: ["Sidrah Abbasi"] },
  { name: "Salary Certificate", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Amulya A", "Lamma Alhazmi"] },
  { name: "Seasonal Visa", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Sarah Elsherif", "Dmitriy Khvorostyanoy"] },
  { name: "Services Panel", lead: "Ali (a.bagzal@takamol.com.sa)", resources: ["Ali Baghazal"] },
  { name: "Shareable Services", lead: "Ismail (I.AbuHamda@takamol.com.sa)", resources: ["Michal Snakowski"] },
  { name: "Source Data Testing Activity", lead: "Mohammed Elayyan (M.Elayyan@takamol.com.sa)", resources: ["Abdullah Omar", "Sidrah Abbasi"] },
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



// Cache DOM elements
const container = document.getElementById("servicesContainer");
const searchInput = document.getElementById('search');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');
const mouseIndicator = document.querySelector(".mouse");

// Event delegation for card clicks
container.addEventListener("click", (event) => {
  const card = event.target.closest('.card');
  if (card) {
      const name = card.getAttribute('data-service');
      const lead = card.getAttribute('data-team-lead');
      const resources = card.getAttribute('data-resources').split(', ');
      showPopup(name, lead, resources);
  }
});

// Debounce function to delay the search
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Filter cards based on search input
const filterCards = debounce(() => {
  const search = searchInput.value.toLowerCase();
  const cards = container.querySelectorAll('.card');

  requestAnimationFrame(() => {
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
  });
}, 300); // 300ms delay

// Event listener for search input
searchInput.addEventListener('input', filterCards);

// Show popup with service details
function showPopup(name, lead, resources) {
  popupContent.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Team Lead:</strong> ${lead}</p>
      <p><strong>Resources:</strong></p>
      <ul>${resources.map(r => `<li>${r}</li>`).join("")}</ul>
  `;

  // Show the overlay and popup
  overlay.classList.add('active');
  popup.classList.add('active');
}

// Close popup
function closePopup() {
  overlay.classList.remove('active');
  popup.classList.remove('active');
}

// Initial rendering of cards
function renderCards() {
  const fragment = document.createDocumentFragment(); // Use a document fragment for batch DOM updates
  services.forEach(service => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("data-service", service.name);
      card.setAttribute("data-team-lead", service.lead);
      card.setAttribute("data-resources", service.resources.join(", "));

      card.innerHTML = `
          <div class="card-header">${service.name}</div>
      `;

      fragment.appendChild(card);
  });
  container.appendChild(fragment); // Append all cards at once
}

// Hide mouse indicator on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
      mouseIndicator.classList.add("hidden");
  } else {
      mouseIndicator.classList.remove("hidden");
  }
});

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  renderCards(); // Render cards on page load
});
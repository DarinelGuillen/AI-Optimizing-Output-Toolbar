// Importing necessary modules and declaring global variables
const data = [
  {
    id: 1,
    nombre: "dev",
    opciones: [
      { name: "Debug", value: "I am encountering an error message in my code and I am not sure what is causing it. Can you help me understand what the error means and how I can resolve it? I can share my code and any related error messages, logs or stack traces." },
      { name: "SpeedUp", value: "I have an application that is running slow and I need to improve its performance. Can you help me identify the bottlenecks and suggest ways to optimize the performance? I can provide more details about the technology stack and any performance metrics or reports that might be relevant." },
      { name: "APIUse", value: "I need to integrate a new API or library into my project and I am not sure how to get started. Can you help me understand the API documentation and provide guidance on how to use it effectively in my project? I can share my project code and any relevant requirements or specifications." },
      { name: "Understand", value: "I am trying to understand a specific software concept or design pattern, but I am having trouble wrapping my head around it. Can you explain it to me in a clear and concise manner and provide relevant examples? I can provide more context or specific questions that I have." },
      { name: "Algorithm", value: "I am trying to solve a specific programming problem and I need help writing an efficient algorithm or data structure to solve it. Can you help me understand the problem requirements and suggest a suitable solution? I can share the problem statement and any constraints or limitations." },
      { name: "Compat", value: "I am trying to integrate two different software systems, but I am encountering compatibility issues. Can you help me understand the cause of the issue and suggest ways to resolve it? I can provide more details about the software systems and any error messages or logs that might be relevant." },
      { name: "FeatureAdd", value: "I need to implement a specific feature or functionality in my project as requested by a client or end user. Can you help me understand the requirements and provide guidance on how to implement it effectively? I can share the requirements or specifications and any related code or design documents." },
      { name: "SetupDev", value: "I need to set up a development environment for a new project, but I am not sure how to get started. Can you help me understand the tools and technologies required and provide step-by-step instructions on how to set them up? I can provide more details about the project and any specific requirements or constraints." },
      { name: "ThirdParty", value: "I am using a third-party library or system in my project and I am not sure how it works. Can you help me understand its behavior and provide guidance on how to use it effectively in my project? I can provide more details about the library or system and any relevant code or documentation." },
      { name: "Docs", value: "I need help writing and maintaining documentation for my project or codebase. Can you help me understand the best practices and tools for writing effective documentation? I can provide more details about the project and any specific requirements or constraints for the documentation." }
    ]
  },
  {
    id: 2,
    nombre: "EnhanceCodePlus",
    opciones: [
      { name: "CodeReview", value: "Based on the complete code I have provided, avoid using comments to omit code. Only omit code if it contains multiple blocks (e.g., functions), and you are modifying only one of these. Even then, do not omit any part of the function you've altered. Ensure full visibility for the revised sections." },
      { name: "Optimize", value: "Analyze my code and provide specific values or strategies to enhance performance, such as separating responsibilities or optimizing logic flow." },
      { name: "NoComments", value: "Refrain from adding any comments within the code, whether for explanation, function separation, specifications, or any other purpose." },
      { name: "CleanCode", value: "Format my code by removing all comments, organizing code, imports, and variables in alphanumeric order, and eliminating unnecessary spaces. Additionally, rename variables and functions to more descriptive names using appropriate naming conventions (e.g., camelCase) based on the language. Please make these modifications without jeopardizing the logic or altering the primary functionality of the code." },
      { name: "ErrorFix", value: "Provide only the specific line of code or section that requires modification to resolve the identified error, without additional commentary or explanation. Utilize comments solely to ensure full visibility for the revised sections or blocks, making it clear what changes have been made and why they are necessary for resolving the error." }
    ]
  },
  {
    id: 3,
    nombre: "ExampleButton3",
    opciones: [
      { name: "ExampleOption7", value: "Este es un ejemplo de valor para la opción 7, insertado en text area." },
      { name: "ExampleOption8", value: "Este es otro ejemplo de valor para la opción 8, aplicado al contexto específico." }
    // Añade más opciones según sea necesario para el botón 3
    ]
  }
  // Puedes continuar añadiendo más botones y opciones según las necesidades...
];
window.addEventListener('load', () => {
  const navbarMenu = document.querySelector('.navbar_menu');
  const flipButton = document.getElementById('svg-flip-button');
  const sendButton = document.querySelector('button[data-testid="send-button"]');
  const textarea = document.getElementById('prompt-textarea');
  const introductionText = 'Can you please produce an output with the following guidelines:\n';
  let optionCounter = 1;

  if (!textarea) {
    console.warn("Textarea no encontrado");
    return;
  }

  textarea.value = textarea.value === '' ? introductionText : textarea.value;

  const animateSvg = svg => {
    svg.classList.add('flip-animate');
    setTimeout(() => svg.classList.remove('flip-animate'), 600);
  };

  flipButton.addEventListener('click', () => animateSvg(flipButton.querySelector('.flip-svg')));

  const createDropdown = item => {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'relative group';
    groupDiv.id = `group-${item.id}`;

    const buttonHTML = `<span>${item.nombre}</span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" viewBox="0 0 20 20" stroke="currentColor" fill="none" stroke-width="1.5"><circle cx="10" cy="10" r="4"/></svg>`;
    const button = document.createElement('button');
    button.className = 'focus:outline-none rounded-full gap-x-1 p-1 flex items-center justify-center svg-button';
    button.innerHTML = buttonHTML;

    const ul = document.createElement('ul');
    ul.className = 'dropdown-menu fixed hidden w-40 rounded-md shadow-lg mt-1.5 z-200';
    ul.id = `dropdown-${item.id}`;

    item.opciones.forEach(opcion => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.className = 'block px-4 py-2 hover:bg-gray-700';
      a.textContent = opcion.name;
      a.dataset.value = opcion.value;
      li.appendChild(a);
      ul.appendChild(li);
    });

    groupDiv.append(button, ul);
    return groupDiv;
  };

  navbarMenu.append(...data.map(createDropdown));

  document.body.addEventListener('click', event => {
    if (event.target.matches('.svg-button, .svg-button *')) {
      const svg = event.target.closest('.svg-button').querySelector('svg');
      svg.classList.add('animate-svg');
      setTimeout(() => svg.classList.remove('animate-svg'), 500);

      const currentDropdown = document.getElementById(`dropdown-${event.target.closest('.group').id.split('-')[1]}`);
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.id === currentDropdown.id ? currentDropdown.classList.toggle('hidden') : menu.classList.add('hidden');
      });
    } else if (!event.target.matches('.dropdown-menu, .dropdown-menu *')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.add('hidden'));
    }

    if (event.target.matches('.dropdown-menu li a')) {
      event.preventDefault();
      if (!textarea) {
        console.warn('Textarea no encontrado');
        return;
      }

      const valueToInsert = event.target.dataset.value;
      if (optionCounter === 1) {
        textarea.value = `${introductionText}\n1) ${valueToInsert}\n`;
      } else {
        textarea.value += `${optionCounter}) ${valueToInsert}\n`;
      }
      optionCounter++;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
      document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.add('hidden'));
    }
  });

  if (sendButton) {
    sendButton.addEventListener('click', () => {
      optionCounter = 1;
    });
  }
});

// Configuración de las galerías
const galleries = [
    { title: "Iglesia Central", folder: "central", count: 3 },
    { title: "Filial Tekera", folder: "tekera", count: 3 },
    { title: "Filial Pital", folder: "pital", count: 3 },
    { title: "Filial El Sauce", folder: "elsauce", count: 3 },
];

// Contenedor principal
const galleryContainer = document.getElementById("gallery-container");

// Generar galerías dinámicamente
galleries.forEach(({ title, folder, count }) => {
    // Crear contenedor de la galería
    const gallerySection = document.createElement("section");
    gallerySection.classList.add("galeria");

    // Título de la galería
    const galleryTitle = document.createElement("h2");
    galleryTitle.classList.add("gallery-title");
    galleryTitle.textContent = title;
    gallerySection.appendChild(galleryTitle);

    // Contenedor de imágenes
    const galleryDiv = document.createElement("div");
    galleryDiv.classList.add("gallery");

    // Generar imágenes
    for (let i = 1; i <= count; i++) {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");

        const img = document.createElement("img");
        img.src = `images/${folder}/${i}.jpg`;
        img.alt = `Foto ${i} ${title}`;

        const caption = document.createElement("div");
        caption.classList.add("caption");
        caption.textContent = `Foto ${i} ${title}`;

        galleryItem.appendChild(img);
        galleryItem.appendChild(caption);
        galleryDiv.appendChild(galleryItem);
    }

    gallerySection.appendChild(galleryDiv);
    galleryContainer.appendChild(gallerySection);
});

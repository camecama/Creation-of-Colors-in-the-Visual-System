document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const sidebar = document.getElementById("sidebar");
  
    menuButton.addEventListener("click", () => {
      if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        menuButton.classList.remove("open");
      } else {
        sidebar.classList.add("open");
        menuButton.classList.add("open");
      }
    });
  });
  const dynamicContent = document.getElementById("dynamic-content");
  const Introduction = document.getElementById("first-page-content");

  // Hide the first-page content when navigating to another chapter
  introduction.style.display = "none";

  // Update the dynamic content for the selected topic
  dynamicContent.innerHTML = content[topic] || `<p>Content not found!</p>`;

  

// Highlight the active sidebar link and load corresponding content
function loadContent(topic) {
    const links = document.querySelectorAll(".sidebar ul li a");
    const dynamicContent = document.getElementById("dynamic-content");

    // Remove active class from all links
    links.forEach((link) => link.classList.remove("active"));

    // Add active class to the clicked link
    const activeLink = Array.from(links).find((link) => link.dataset.topic === topic);
    if (activeLink) {
        activeLink.classList.add("active");
    }

    // Load dynamic content
    const content = {
        introduction: `<h2>Introduction</h2>
                <p>The creation of colors in the visual system is a fascinating process that allows humans to perceive the world in rich and vibrant hues.</p>
                <div class="image-container">
                    <img src="Know-The-Modes-And-Systems.jpg" alt="Know The Modes And Systems" />
                </div>
            `,

                "role-of-light": `<h2>The Role of Light</h2><p>Color perception begins with light, a form of electromagnetic radiation. The visible spectrum, spanning wavelengths from 400 to 700 nanometers, is a small part of the electromagnetic spectrum. When light hits an object, some wavelengths are absorbed while others are reflected or transmitted, determining the color we perceive. For example, a red object reflects red wavelengths and absorbs the rest. Light enters the eye through the cornea and is focused by the lens onto the retina, where photoreceptor cells rods and cones detect it. Rods handle low-light vision, while cones, sensitive to blue, green, and red wavelengths, are responsible for color perception. The brain combines signals from these cones to create the full spectrum of colors. This process highlights light's critical role in vision, from its physical properties to how it interacts with our eyes and brain.</p>
                <div class="image-container">
                    <img src="vertical-visible-spectrum.webp" alt="vertical visible spectrum" />
                </div>
            `,
                photoreceptors: `<h2>Photoreceptors in the Retina</h2><p>The human retina contains two types of photoreceptors: rods and cones.  Responsible for color vision and detailed sight in bright light, cones are concentrated in the central retina (fovea) and number about 6 million. They come in three types:</p>
                    <ul>
                        <li>Short-wavelength cones (S-cones) Sensitive to blue light (420 nm).</li>
                        <li>Medium-wavelength cones (M-cones) Sensitive to green light (534 nm).</li>
                        <li>Long-wavelength cones (L-cones) Sensitive to red light (564 nm).</li>
                    </ul>
                    <div class="image-container">
                        <img src="Diagram_of_the_opponent_process.webp" alt="Diagram of the opponent process" />
                    </div>
                    <div class="image-container">
                        <img src="color-vision-disorders.webp" alt="color vision disorders" />
                    </div>
            `,
                "color-processing": `<h2>Color Processing in the Brain</h2><p>Color perception begins when signals from the cones in the retina are transmitted via the optic nerve to the brain. These signals are first processed in the lateral geniculate nucleus (LGN) of the thalamus and then sent to the visual cortex in the occipital lobe. In the visual cortex, the brain decodes the signals using opponent-process mechanisms, separating colors into red-green, blue-yellow, and black-white channels. This enables the brain to interpret millions of colors by combining inputs from the three cone types. Higher brain areas integrate these signals with context, memory, and lighting conditions, allowing us to perceive consistent and vibrant colors in different environments.</p>
                    <div class="image-container">
                        <img src="original-1664449894.webp" alt="original 1664449894" />
                    </div>
            `,
                "color-deficiencies": `<h2>Color Deficiencies</h2><p>Color deficiencies occur when one or more types of cone cells in the retina are absent, malfunctioning, or less sensitive to light. The most common form is red-green color blindness, where individuals have difficulty distinguishing between red and green hues. This condition is often inherited and more prevalent in males. Other forms, like blue-yellow deficiencies and total color blindness (achromatopsia), are less common. While these deficiencies affect color perception, most individuals adapt to their condition and navigate the world effectively.</p>
                    <div class="image-container">
                        <img src="Color_Deficiency_Ishihara_Test_AdobeStock_114210620.webp" alt="Color Deficiency Ishihara Test AdobeStock 114210620 " />
                    </div>
            `,
                conclusion: `<h2>Conclusion</h2><p>The creation of colors in the visual system is a fascinating integration of physics, biology, and neuroscience. It begins with the detection of light by specialized photoreceptors in the retina and continues with intricate processing in the brain to interpret and construct the rich spectrum of colors we perceive. This complex system not only enables us to navigate and understand our environment but also highlights the incredible sophistication of human vision, allowing us to experience the world in vibrant and dynamic hues.</p>
                   <div class="image-container">
                        <img src="Color_Classification.webp" alt="Color Classification" />
                    </div>
            `,
    };

    // Show the image only on the first slide
    if (topic === "introduction") {
        firstSlideImage.style.display = "block"; // Ensure it's visible for the introduction
    } else {
        firstSlideImage.style.display = "none"; // Hide it for other chapters
    }

    // Inject content into the dynamic-content section
    dynamicContent.innerHTML = content[topic] || `<p>Content not found!</p>`;
}

// Random Facts Generator
function showRandomFact() {
    const facts = [
        "The human eye can distinguish about 10 million colors.",
        "Colorblindness affects about 8% of men globally.",
        "The retina contains 120 million rods and 6 million cones.",
        "Cones are responsible for color vision, while rods are specialized for low-light vision.",
        "Blue light has the shortest wavelength in the visible spectrum, while red light has the longest.",
        "The human eye perceives green most vividly due to the high sensitivity of medium-wavelength cones.",
        "The visual cortex processes color information in less than 13 milliseconds.",
        "There are three types of cone cells in the human retina: S-cones (blue), M-cones (green), and L-cones (red).",
        "Each cone type is sensitive to a specific range of wavelengths, but their ranges overlap to create the perception of continuous colors.",
        "Color perception can be influenced by surrounding colors due to a phenomenon called simultaneous contrast.",
        "Optical illusions can trick the brain into perceiving colors differently than they actually are.",
        "Bees can see ultraviolet patterns on flowers that guide them to nectar.",
        "Red is the first color a baby can see after birth.",
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    const factDisplay = document.getElementById("fact-display");
    factDisplay.textContent = randomFact;
}

// Open the modal with additional information
function openModal(content) {
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");

    modalContent.innerHTML = content;
    modal.style.display = "block";
}

// Close the modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Event listener for closing the modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Event listener for scroll-based progress bar
window.addEventListener("scroll", () => {
    const progressBar = document.getElementById("progress-bar");
    const scrollTotal = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = (window.scrollY / scrollTotal) * 100;
    progressBar.style.width = `${scrollProgress}%`;
});

const dynamicContent = document.getElementById('dynamic-content');
dynamicContent.innerHTML = content[topic] || `<p>Content not found!</p>`;

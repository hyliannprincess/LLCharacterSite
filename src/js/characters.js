const characters = [
    {
        name: "John",
        charPreview: "../images/characterImages/characterPlaceholder.webp",
        charImage: "../images/characterImages/characterPlaceholder.webp",
        charDesc: "Yoshiko Tsushima, also known as Yohane, is a main character in Love Live! Sunshine!!. She is a first year student at Uranohoshi Girls' High School. She is a member of Guilty Kiss and YYY, two sub-units under Aqours. Her image color is white, though she is also represented with gray, black or blue-gray."
    },
    {
        name: "John",
        charPreview: "../images/characterImages/characterPlaceholder.webp",
        charImage: "../images/characterImages/characterPlaceholder.webp",
        charDesc: "Yoshiko Tsushima, also known as Yohane, is a main character in Love Live! Sunshine!!. She is a first year student at Uranohoshi Girls' High School. She is a member of Guilty Kiss and YYY, two sub-units under Aqours. Her image color is white, though she is also represented with gray, black or blue-gray."
    },
    {
        name: "John",
        charPreview: "../images/characterImages/characterPlaceholder.webp",
        charImage: "../images/characterImages/characterPlaceholder.webp",
        charDesc: "Yoshiko Tsushima, also known as Yohane, is a main character in Love Live! Sunshine!!. She is a first year student at Uranohoshi Girls' High School. She is a member of Guilty Kiss and YYY, two sub-units under Aqours. Her image color is white, though she is also represented with gray, black or blue-gray."
    },
    {
        name: "John",
        charPreview: "../images/characterImages/characterPlaceholder.webp",
        charImage: "../images/characterImages/characterPlaceholder.webp",
        charDesc: "Yoshiko Tsushima, also known as Yohane, is a main character in Love Live! Sunshine!!. She is a first year student at Uranohoshi Girls' High School. She is a member of Guilty Kiss and YYY, two sub-units under Aqours. Her image color is white, though she is also represented with gray, black or blue-gray."
    },
    {
        name: "John",
        charPreview: "../images/characterImages/characterPlaceholder.webp",
        charImage: "../images/characterImages/characterPlaceholder.webp",
        charDesc: "Yoshiko Tsushima, also known as Yohane, is a main character in Love Live! Sunshine!!. She is a first year student at Uranohoshi Girls' High School. She is a member of Guilty Kiss and YYY, two sub-units under Aqours. Her image color is white, though she is also represented with gray, black or blue-gray."
    },
    {
        name: "John",
        charPreview: "../images/characterImages/characterPlaceholder.webp",
        charImage: "../images/characterImages/characterPlaceholder.webp",
        charDesc: "Yoshiko Tsushima, also known as Yohane, is a main character in Love Live! Sunshine!!. She is a first year student at Uranohoshi Girls' High School. She is a member of Guilty Kiss and YYY, two sub-units under Aqours. Her image color is white, though she is also represented with gray, black or blue-gray."
    },
    {
        name: "John",
        charPreview: "../images/characterImages/characterPlaceholder.webp",
        charImage: "../images/characterImages/characterPlaceholder.webp",
        charDesc: "Yoshiko Tsushima, also known as Yohane, is a main character in Love Live! Sunshine!!. She is a first year student at Uranohoshi Girls' High School. She is a member of Guilty Kiss and YYY, two sub-units under Aqours. Her image color is white, though she is also represented with gray, black or blue-gray."
    },
    {
        name: "John",
        charPreview: "../images/characterImages/characterPlaceholder.webp",
        charImage: "../images/characterImages/characterPlaceholder.webp",
        charDesc: "Yoshiko Tsushima, also known as Yohane, is a main character in Love Live! Sunshine!!. She is a first year student at Uranohoshi Girls' High School. She is a member of Guilty Kiss and YYY, two sub-units under Aqours. Her image color is white, though she is also represented with gray, black or blue-gray."
    },
    {
        name: "John",
        charPreview: "../images/characterImages/characterPlaceholder.webp",
        charImage: "../images/characterImages/characterPlaceholder.webp",
        charDesc: "Yoshiko Tsushima, also known as Yohane, is a main character in Love Live! Sunshine!!. She is a first year student at Uranohoshi Girls' High School. She is a member of Guilty Kiss and YYY, two sub-units under Aqours. Her image color is white, though she is also represented with gray, black or blue-gray."
    },
    {
        name: "John",
        charPreview: "../images/characterImages/characterPlaceholder.webp",
        charImage: "../images/characterImages/characterPlaceholder.webp",
        charDesc: "Yoshiko Tsushima, also known as Yohane, is a main character in Love Live! Sunshine!!. She is a first year student at Uranohoshi Girls' High School. She is a member of Guilty Kiss and YYY, two sub-units under Aqours. Her image color is white, though she is also represented with gray, black or blue-gray."
    },
]

const listContainer = document.getElementById("character-list");

function populateList(characters)
{
    characters.forEach((character) => {
        const listElement = document.createElement("li");
        listElement.classList.add("character-preview");
        listElement.id = character.name;

        const imageElement = document.createElement("img");
        imageElement.src = character.charPreview;
        listElement.appendChild(imageElement);

        listElement.addEventListener("click", () => {
            showCharacter(character);
        });

        listContainer.appendChild(listElement);
    });
}

function showCharacter(character)
{
    const charName = document.getElementById("character-name");
    const charInfo = document.getElementById("character-desc");
    const charImg = document.getElementById("character-img");

    charName.innerHTML = character.name;
    charInfo.innerHTML = character.charDesc;
    charImg.src = character.charImage;
}

populateList(characters);
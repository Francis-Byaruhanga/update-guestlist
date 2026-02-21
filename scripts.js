const people = [
    "Chris",
    "Anne",
    "Colin",
    "Terri",
    "Phil",
    "Lola",
    "Sam",
    "Kay",
    "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");

admitted.textContent = "Admitted: ";
refused.textContent = "Refused: ";

for (let i = 0; i < people.length; i++) {
    const person = people[i];
    // Write the logic below
    if (person === "Phil" || person === "Lola") {
        // Add to refused list
    } else {
        // Add to admitted list
    }
}


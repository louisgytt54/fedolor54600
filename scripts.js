function calculateDays() {
    const startDate = new Date(document.getElementById("startDate").value);
    const endDate = new Date(document.getElementById("endDate").value);
    const typeArret = document.getElementById("typeArret").value;
    const classification = document.getElementById("classification").value;
    let totalDays = 0;

    const daysInMonthProfessionnelle = classification === "51" ? 4.25 : 3;
    const daysInMonthNonProfessionnelle = 3;

    let currentDate = new Date(startDate);

    if (typeArret === "professionnelle") {
        while (currentDate <= endDate) {
            let monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            let monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

            if (currentDate.getMonth() === endDate.getMonth() && currentDate.getFullYear() === endDate.getFullYear()) {
                totalDays += (endDate.getDate() - currentDate.getDate() + 1) * (daysInMonthProfessionnelle / 30);
                break;
            } else {
                totalDays += (monthEnd.getDate() - currentDate.getDate() + 1) * (daysInMonthProfessionnelle / 30);
            }

            currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        }
    } else if (typeArret === "classique") {
        const limitDate = new Date(startDate);
        limitDate.setFullYear(startDate.getFullYear() + 1);
        while (currentDate <= endDate) {
            if (currentDate > limitDate) break;

            let monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            let monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

            if (currentDate.getMonth() === endDate.getMonth() && currentDate.getFullYear() === endDate.getFullYear()) {
                totalDays += (endDate.getDate() - currentDate.getDate() + 1) * (daysInMonthNonProfessionnelle / 30);
                break;
            } else {
                totalDays += (monthEnd.getDate() - currentDate.getDate() + 1) * (daysInMonthNonProfessionnelle / 30);
            }

            currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        }
    }

    document.getElementById("totalDays").innerText = totalDays.toFixed(2) + " jours";
    alert("N'oubliez pas d'ajouter les congés acquis avant et après la maladie au résultat.");
}

window.onload = function() {
    const username = prompt("Veuillez entrer votre nom d'utilisateur:");
    const password = prompt("Veuillez entrer votre mot de passe:");
    if (username !== "admin" || password !== "1234") {
        document.getElementById("accessDenied").style.display = "block";
        document.getElementById("mainContent").style.display = "none";
    } else {
        document.getElementById("accessDenied").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    }
}

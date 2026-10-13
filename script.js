function calculateBill() {
    const unitsInput = document.getElementById("units");
    const units = Number(unitsInput.value);
    const consumerType = document.getElementById("consumerType").value;
    const rate = chooseRate(units);
    const baseAmount = calculateBase(units, rate);
    const surchargePercent = consumerType === "Commercial" ? 10 : 0;
    const surcharge = calculateSurcharge(baseAmount, surchargePercent);
    const fixedCharge = 50;
    const total = baseAmount + surcharge + fixedCharge;

    if (!Number.isInteger(units) || units < 1) {
        document.getElementById("result").textContent =
            "Please enter a valid whole number of units (at least 1).";
        document.getElementById("breakdown").textContent = "";
        return;
    }

   

    document.getElementById("result").textContent =
        "Rate: ₹" + rate + "/unit | Base: ₹" + baseAmount +
        " | Surcharge: ₹" + surcharge +
        " | Fixed: ₹" + fixedCharge +
        " | Total: ₹" + total;

    document.getElementById("breakdown").textContent = buildExamples();
}

function calculateSurcharge(amount, percentage) {
    return amount * percentage / 100;
}

function chooseRate(units) {
    if (units <= 100) {
        return 5;
    } else if (units <= 300) {
        return 7;
    } else {
        return 9;
    }
}

function calculateBase(units, rate) {
    return units * rate;
}

function buildExamples() {
    let output = "";

    for (const units of [100, 200, 300, 400, 500]) {
        const rate = chooseRate(units);
        const base = calculateBase(units, rate);
        output += units + " units: Rate ₹" + rate +
            "/unit, Base bill ₹" + base + "\n";
    }

    return output;
}

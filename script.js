document.addEventListener("DOMContentLoaded", () => {
    const devices = [
        { name: "Refrigerador", icon: "❄️" },
        { name: "Estufa", icon: "🔥" },
        { name: "Horno", icon: "🍕" },
        { name: "Microondas", icon: "🍴" },
        { name: "Licuadora", icon: "🥤" },
        { name: "Batidora", icon: "🍰" },
        { name: "Extractor de jugos", icon: "🍹" },
        { name: "Tostadora", icon: "🍞" },
        { name: "Cafetera", icon: "☕" },
        { name: "Olla arrocera", icon: "🍚" },
        { name: "Procesador de alimentos", icon: "🥗" },
        { name: "Sandwichera", icon: "🥪" },
        { name: "Freidora", icon: "🍟" },
        { name: "Plancha eléctrica", icon: "👕" },
        { name: "Hervidor eléctrico", icon: "💧" },
        { name: "Olla a presión", icon: "🍲" },
        { name: "Yogurtera", icon: "🍶" },
        { name: "Máquina de hacer pan", icon: "🍞" },
        { name: "Picadora de carne", icon: "🔪" },
        { name: "Exprimidor de cítricos", icon: "🍋" },
        { name: "Balanza de cocina", icon: "⚖️" },
        { name: "Horno inteligente", icon: "🌐" },
        { name: "Refrigerador inteligente", icon: "📡" },
        { name: "Asistente de cocina", icon: "🤖" },
        { name: "Vitrocerámica", icon: "🔥" },
        { name: "Horno de microondas con grill", icon: "🍖" },
        { name: "Batidora de vaso", icon: "🥤" },
    ];

    const userNameInput = document.getElementById("user-name");
    const welcomeMessage = document.getElementById("welcome-message");
    const deviceList = document.getElementById("device-list");
    const welcomePage = document.getElementById("welcome-page");
    const deviceSelection = document.getElementById("device-selection");
    const deviceStatus = document.getElementById("device-status");

    let selectedDevices = [];

    // Start the app
    window.startApp = () => {
        const userName = userNameInput.value.trim();
        if (userName) {
            welcomeMessage.textContent = `Bienvenido, ${userName}`;
            welcomePage.classList.add("hidden");
            deviceSelection.classList.remove("hidden");
            loadDevices();
        } else {
            alert("Por favor, ingresa tu nombre.");
        }
    };

    // Load devices
    function loadDevices() {
        deviceList.innerHTML = "";
        devices.forEach((device) => {
            const deviceItem = document.createElement("div");
            deviceItem.className = "device-item";
            deviceItem.innerHTML = `<span>${device.icon}</span><br>${device.name}`;
            deviceItem.onclick = () => toggleDeviceSelection(device);
            deviceList.appendChild(deviceItem);
        });
    }

    // Toggle device selection
    function toggleDeviceSelection(device) {
        if (selectedDevices.includes(device)) {
            selectedDevices = selectedDevices.filter((d) => d !== device);
        } else {
            selectedDevices.push(device);
        }
        updateSelectedDevices();
    }

    // Update selected devices
    function updateSelectedDevices() {
        const allDeviceItems = document.querySelectorAll(".device-item");
        allDeviceItems.forEach((item, index) => {
            const device = devices[index];
            if (selectedDevices.includes(device)) {
                item.classList.add("selected");
            } else {
                item.classList.remove("selected");
            }
        });
    }

    // Continue to status
    window.continueToStatus = () => {
        if (selectedDevices.length === 0) {
            alert("Por favor, selecciona al menos un electrodoméstico.");
            return;
        }
        deviceSelection.classList.add("hidden");
        deviceStatus.classList.remove("hidden");
        updateStatusList();
    };

    // Update status list
    function updateStatusList() {
        const statusList = document.getElementById("status-list");
        statusList.innerHTML = "";
        selectedDevices.forEach((device) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${device.icon} ${device.name} <button onclick="disconnectDevice('${device.name}')">Desconectar</button>`;
            statusList.appendChild(listItem);
        });
    }

    // Disconnect device
    window.disconnectDevice = (deviceName) => {
        selectedDevices = selectedDevices.filter((device) => device.name !== deviceName);
        updateStatusList();
    };

    // Disconnect all
    window.disconnectAll = () => {
        selectedDevices = [];
        updateStatusList();
    };

    // Go back
    window.goBack = () => {
        deviceStatus.classList.add("hidden");
        deviceSelection.classList.remove("hidden");
        updateSelectedDevices();
    };
});

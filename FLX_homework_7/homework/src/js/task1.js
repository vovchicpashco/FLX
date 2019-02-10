const presentTime = new Date().getHours();
const login = prompt("Please, enter your login", "");

if (login === null || login === "") {
    alert("Canceled");
} else {
    if (login.length < 4) {
        alert("I don't know any users having name length less than 4 symbols");
    } else if (login === "User") {
        const passkey = prompt("Please, enter your password", "");
        if (passkey === null || passkey === "") {
            alert("Canceled");
        } else {
            if (passkey === "UserPass") {
                alert(
                    presentTime >= 20
                        ? "Good evening, dear User!"
                        : "Good day, dear User!"
                );
            } else {
                alert("Wrong passkey");
            }
        }
    } else if (login === "Admin") {
        const passkey = prompt("Please, enter your password", "");
        if (passkey === null || passkey === "") {
            alert("Canceled");
        } else {
            if (passkey === "RootPass") {
                alert(
                    presentTime >= 20
                        ? "Good evening, dear Admin!"
                        : "Good day, dear Admin!"
                );
            } else {
                alert("Wrong password");
            }
        }
    } else {
        alert("I don't know you!");
    }
}
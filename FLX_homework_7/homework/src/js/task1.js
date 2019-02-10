const presentTime = new Date().getHours();
const login = prompt("Please, enter your login");

if (login === null || login === "") {
    alert("Canceled");
} else {
    if (login.length < 4) {
        alert("I don't know any users having name length less than 4 symbols");
    } else if (login === "User") {
        const password = prompt("Enter your password");
        if (password === null || password === "") {
            alert("Canceled");
        } else {
            if (password === "UserPass") {
                alert(
                    presentTime >= 20
                        ? "Good evening, dear User!"
                        : "Good day, dear User!"
                );
            } else {
                alert("Wrong password");
            }
        }
    } else if (login === "Admin") {
        const password = prompt("Enter your password");
        if (password === null || password === "") {
            alert("Canceled");
        } else {
            if (password === "RootPass") {
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
const hosts_local = {
    primes_service: "http://localhost:8080"
};

const hosts_remote = {
    primes_service: "https://practicum1-tannovak.onrender.com"
};

const mode = 0;

function getHosts() {
    return (mode == 0) ? hosts_local : hosts_remote;
}

let authentication = { loggedIn: false, hosts: getHosts(), token: "" };

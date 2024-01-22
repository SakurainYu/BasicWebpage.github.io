
document.querySelector("#appName").textContent = "appNamne: " + window.navigator.appName
document.querySelector("#product").textContent = "product: " + window.navigator.product
document.querySelector("#appVersion").textContent = "appVersion: " + window.navigator.appVersion
document.querySelector("#userAgent").textContent = "userAgent: " + window.navigator.userAgent
document.querySelector("#platform").textContent = "platform: " + window.navigator.platform
document.querySelector("#language").textContent = "language: " + window.navigator.language

document.querySelector("#innerHeight").textContent = "innerHeight: " + window.innerHeight
document.querySelector("#innerWidth").textContent = "innerWidth: " + window.innerWidth

document.querySelector("#width").textContent = "width: " + screen.width
document.querySelector("#height").textContent = "height: " + screen.height
document.querySelector("#availWidth").textContent = "availWidth: " + screen.availWidth
document.querySelector("#availHeight").textContent = "availHeight: " + screen.availHeight
document.querySelector("#colorDepth").textContent = "colorDepth: " + screen.colorDepth
document.querySelector("#pixelDepth").textContent = "pixelDepth: " + screen.pixelDepth

document.querySelector("#href").textContent = "href: " + location.href
document.querySelector("#hostname").textContent = "hostname: " + location.hostname
document.querySelector("#pathname").textContent = "pathname: " + location.pathname
document.querySelector("#protocol").textContent = "protocol: " + location.protocol

document.querySelector("#Latitude").textContent = "Latitude: " + Geolocation.latitude
document.querySelector("#Longitude").textContent = "Longitude: " + Geolocation.longitude



function showTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


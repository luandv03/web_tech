// load home page
fetch("/home.html")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        return response.text();
    })
    .then((data) => {
        document.getElementById("main__content").innerHTML = data;
    })
    .catch((error) => {
        console.error("Error loading content:", error);
    });

// handle menu
// Lấy phần tử mySidebar
var mySidebar = document.getElementById("mySidebar");

const menuItems = [
    {
        parent: "/home.html",
        items: [
            {
                itemId: "I001",
                itemName: "Giới thiệu",
                itemLink: "home__introduce",
            },
            {
                itemId: "I002",
                itemName: "Mạng lưới tổ chức hợp tác",
                itemLink: "home__cooperate",
            },
        ],
    },
    {
        parent: "/course.html",
        items: [
            {
                itemId: "I001",
                itemName: "Tổng quan",
                itemLink: "course__overview",
            },
            {
                itemId: "I002",
                itemName: "Mục tiêu",
                itemLink: "course__target",
            },
            {
                itemId: "I003",
                itemName: "Nội dung",
                itemLink: "course__content",
            },
        ],
    },
    {
        parent: "/web_tech.html",
        items: [
            {
                itemId: "I001",
                itemName: "HTML",
                itemLink: "web__tech__html",
            },
            {
                itemId: "I002",
                itemName: "CSS",
                itemLink: "web__tech__css",
            },
            {
                itemId: "I003",
                itemName: "Javascript",
                itemLink: "web__tech__javascript",
            },
        ],
    },
    {
        parent: "/profile.html",
        items: [
            {
                itemId: "I001",
                itemName: "Thông tin sinh viên",
                itemLink: "profile__introduce",
            },
        ],
    },
];

renderMenu(menuItems[0].items);

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

const headerItemListElements = document.querySelectorAll(".header__item");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if (mySidebar.style.display === "block") {
        mySidebar.style.display = "none";
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = "block";
        overlayBg.style.display = "block";
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}

headerItemListElements.forEach((item) => {
    item.addEventListener("click", function (e) {
        e.preventDefault();

        headerItemListElements.forEach((el) => el.classList.remove("w3-white"));

        this.classList.add("w3-white");

        // Lấy URL từ href của item được click
        const url =
            this.getAttribute("href") === "/"
                ? "/home.html"
                : this.getAttribute("href");

        // Kiểm tra xem có href không (tránh các item không có URL)
        if (url) {
            // Tải nội dung HTML từ file và render vào div#mainContent
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Error: ${response.statusText}`);
                    }
                    return response.text();
                })
                .then((data) => {
                    document.getElementById("main__content").innerHTML = data;
                })
                .catch((error) => {
                    console.error("Error loading content:", error);
                });

            const menuItemELements = menuItems.filter(
                (item) => item.parent == url
            );

            if (menuItemELements.length > 0) {
                renderMenu(menuItemELements[0].items);
            }
        }
    });
});

function renderMenu(items) {
    let html = ` <a
                href="javascript:void(0)"
                onclick="w3_close()"
                class="w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large"
                title="Close Menu"
            >
                <i class="fa fa-remove"></i>
            </a>
            <h4 class="w3-bar-item"><b>Menu</b></h4>`;

    const string = items
        .map(
            (item) =>
                `<a class="w3-bar-item w3-button w3-hover-black" href="javascript:void(0);" onclick="scrollToSection('${item.itemLink}')">${item.itemName}</a>`
        )
        .join("");

    html += string;

    mySidebar.innerHTML = html;
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}

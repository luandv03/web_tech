var headerList = [
    {
        name: `Trang chủ`,
        leftMenuHeader: "Menu",
        leftMenuList: [
            {
                label: "Thông tin khai giảng",
                href: "classInfo",
            },
            {
                label: "Thông tin Seminar",
                href: "seminar",
            },
            {
                label: "Thông tin công ty quan tâm",
                href: "company",
            },
        ],
        containerId: "courseInfo",
    },
    {
        name: "Thông tin môn học",
        leftMenuHeader: "Thông tin môn học",
        leftMenuList: [
            {
                label: "Mô tả tóm tắt học phần (tiếng Việt) (*)",
                href: "summaryVN",
            },
            {
                label: "Mô tả tóm tắt học phần (tiếng Anh) (*)",
                href: "summaryEN",
            },
            {
                label: "Nội dung tóm tắt học phần (tiếng Việt) (*)",
                href: "contentVN",
            },
            {
                label: "Nội dung tóm tắt học phần (tiếng Anh) (*)",
                href: "contentEN",
            },
            {
                label: "Sách tham khảo",
                href: "reference",
            },
        ],
        containerId: "info",
    },
    {
        name: "Các công nghệ web",
        leftMenuHeader: "Công nghệ Web",
        leftMenuList: [
            {
                label: "1. Frontend (Giao diện người dùng)",
                href: "frontend",
            },
            {
                label: "2. Backend (Máy chủ và xử lý dữ liệu)",
                href: "backend",
            },
            {
                label: "3. Cơ sở dữ liệu",
                href: "database",
            },
            {
                label: "4. API và Tích hợp dịch vụ",
                href: "api",
            },
            {
                label: "5. DevOps và Triển khai",
                href: "devops",
            },
            {
                label: "6. Bảo mật",
                href: "security",
            },
            {
                label: "7. Testing và Debugging",
                href: "testing",
            },
            {
                label: "8. Performance Optimization",
                href: "optimization",
            },
            {
                label: "9. User Authentication & Authorization",
                href: "authentication",
            },
        ],
        containerId: "web-tech",
    },
    {
        name: "Thông tin sinh viên",
        leftMenuHeader: "Thông tin sinh viên",
        leftMenuList: [
            {
                label: "Thông tin học tập",
                href: "academic-info",
            },
            {
                label: "Kĩ năng",
                href: "skills-info",
            },
            {
                label: "Dự án",
                href: "projects-info",
            },
            {
                label: "Sở thích",
                href: "hobbies-info",
            },
        ],
        containerId: "student-info",
    },
    {
        name: "Admin page",
        leftMenuList: [],
        containerId: "admin-page",
    },
];

var ItemContent = [];
var header = 0;
while (header < 4) {
    const ItemListLength = headerList[header].leftMenuList.length;
    ItemContent.push(new Array());

    var item = 0;
    while (item < ItemListLength) {
        ItemContent[header][item] = [];
        var childElement = document.getElementById(
            headerList[header].leftMenuList[item].href
        ).children;
        Array.from(childElement).forEach((element, index) => {
            ItemContent[header][item].push({
                name: `Section ${index}`,
                style: element.getAttribute("style"),
                content: element.outerHTML,
            });
        });
        item++;
    }
    header++;
}

var studentDefaultInfor = [
    {
        name: "CV",
        href: "CV",
        content: `
      <div class="header">Thông tin cá nhân</div>
      <div class="student-info" style="height: 50%">
              <div class="left">
                  <img src="./assets/avatar.jpg" alt="Student Photo" class="profile-photo" >
              </div>
        <div class="right">
          <div class="details"><span>Họ và tên:</span>Đinh Văn Luận</div>
          <div class="details"><span>Năm vào trường:</span> 2021</div>
          <div class="details"><span>Bậc đào tạo:</span> KSCLC-TN-TT-VNVP-ICT</div>
          <div class="details"><span>Chương trình:</span> Công nghệ thông tin Việt-Nhật 2021</div>
          <div class="details"><span>MSSV:</span> 20215083</div>
          <div class="details"><span>Giới tính:</span> Nam</div>
          <div class="details"><span>Lớp:</span> Việt-Nhật 01-K66</div>
          <div class="details"><span>Khóa học:</span> 66</div>
          <div class="details"><span>Email:</span> Luan.DV215083@sis.hust.edu.vn</div>
        </div>
      </div>
      `,
    },
    {
        name: "Các dự án đã tham gia",
        href: "projects-info",
        content: `
      <div class="section-header">Các dự án đã tham gia</div>
        <div class="project">
          <table class="table-info">
            <tr>
              <th>Ứng dụng Quản lý Dân số</th>
              <td>Nhóm 4 người <br>
                Nhiệm vụ: Thiết kế giao diện người dùng, phát triển các tính năng front-end <br>
                Công nghệ sử dụng: Java, MySQL <br>
                Mục tiêu: Tạo giao diện người dùng cho hệ thống</td>
            </tr>
            <tr>
              <th>Hệ thống mạng xã hội</th>
              <td>Nhóm 4 người <br>
                Nhiệm vụ: Phát triển front-end <br>
                Công nghệ sử dụng: HTML, CSS, JavaScript, MySQL, PHP <br>
                Mục tiêu: Tạo giao diện người dùng cho hệ thống</td>
            </tr>
          </table>
      </div>
      `,
    },
    {
        name: "Sinh hoạt cộng đồng",
        href: "activity-infor",
        content: `
      <div class="section-header">Sinh hoạt cộng đồng</div>
        <div class="project">
          <table class="table-info">
            <tr>
              <th>Đội sinh viên tình nguyện trường bách khoa</th>
              <td>6/2021 - 3/2022 <br>
                Làm sinh viên tình nguyện và tham gia các hoạt động tình nguyện</td>
            </tr>
            <tr>
              <th>Hiến máu cứu trợ</th>
              <td>2022 <br>
                Đi hiến máu vì cộng đồng</td>
            </tr>
          </table>
      </div>`,
    },
];

var editing = false;

function toCamelCase(str) {
    return str
        .replace(/[^a-zA-Z0-9\s]/g, "") // Remove non-alphanumeric characters
        .split(" ") // Split by spaces
        .map((word, index) => {
            // Capitalize first letter of each word except the first one
            if (index === 0) {
                return word.toLowerCase(); // Lowercase for the first word
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize others
        })
        .join(""); // Join them back together
}

var sectionEditing = false;
const adminTable = document.getElementById("admin-table");
var mySidebar = document.getElementById("mySidebar");
var overlayBg = document.getElementById("myOverlay");

function w3_open() {
    if (mySidebar.style.display === "block") {
        mySidebar.style.display = "none";
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = "block";
        overlayBg.style.display = "block";
    }
}

function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}

function showContent(header) {
    // Hide all sections
    const sections = document.querySelectorAll(".w3-container");
    sections.forEach((section) => section.classList.add("hidden"));

    // Remove active class from all buttons
    const buttons = document.querySelectorAll(".w3-bar-item");
    buttons.forEach((button) => button.classList.remove("active"));

    const showButtons = document.querySelectorAll(".show-button");
    showButtons.forEach((button) => {
        button.classList.remove("active");
    });

    // Show selected section
    document.getElementById(header.containerId).classList.remove("hidden");
    renderSidebar(header);
    if (header.containerId === "admin-page") {
        const adminHeader = document.getElementById("admin-header");
        adminHeader.innerHTML = `Admin menu top: Chỉnh sửa menu top`;
        renderTopMenuTable();
    }

    // Add active class to clicked button
    event.target.classList.add("active");
    editing = false;
}

function renderTopMenuTable() {
    adminTable.innerHTML = "";
    const firstRow = document.createElement("tr");
    firstRow.innerHTML = `
     <td class="tab-name">Trang chủ</td>
                <td class="show-button" onclick="renderAdminLeft(0)"><i class="fa fa-eye"></i></td>
                <td class="edit-button" colspan="2"></td>
                <td class="add-page-button" onclick="handleClickAdd(-1)"><i class="fa fa-add"></i></td>`;
    adminTable.appendChild(firstRow);
    headerList.slice(1, headerList.length - 1).forEach((header, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td class="tab-name">${header.name}</td> 
      <td class="show-button" onClick="renderAdminLeft(${
          index + 1
      })"><i class="fa fa-eye"></i></td>
      <td class="edit-button" onClick="handleClickEdit(${index})"><i class="fa-solid fa-pen-to-square"></i></td>
      <td class="delete-button" onClick="handleClickDelete(${index})"><i class="fa-solid fa-trash"></i></td>
      <td class="add-page-button" onClick="handleClickAdd(${index})"><i class="fa fa-add"></i></td>
    `;
        adminTable.appendChild(row);
    });
    document.getElementById("preview-layout").classList.add("hidden");
    document.getElementById("edit-container").classList.add("hidden");
    document.getElementById("searchApi-container").classList.add("hidden");
    document.getElementById("tagsApi-container").classList.add("hidden");
    document.getElementById("usercontribApi-container").classList.add("hidden");
    document.getElementById("type-item-content").classList.add("hidden");
}

function renderTopMenu() {
    const navBar = document.getElementById("nav-bar");
    navBar.innerHTML = `<a class="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1"
      href="javascript:void(0)" onclick="w3_open()"><i class="fa fa-bars"></i></a>`;
    headerList.forEach((header) => {
        const newLink = document.createElement("a");
        newLink.href = "javascript:void(0)";
        newLink.innerHTML = header.name;
        newLink.classList.add("w3-bar-item", "w3-button");
        newLink.onclick = () => showContent(header);
        navBar.appendChild(newLink);
    });
}

function renderSidebar(header) {
    const sidebar = document.getElementById("mySidebar");
    sidebar.innerHTML = "";
    if (header.leftMenuHeader) {
        const sidebarHeader = document.createElement("h4");
        sidebarHeader.classList.add("w3-bar-item");
        sidebarHeader.innerHTML = `<b>${header.leftMenuHeader}</b>`;
        sidebar.appendChild(sidebarHeader);
    }
    header.leftMenuList.forEach((item) => {
        const leftNav = document.createElement("a");

        leftNav.href = "#" + item.href;
        leftNav.innerHTML = item.label;
        leftNav.classList.add("w3-bar-item", "w3-button", "w3-hover-black");
        sidebar.appendChild(leftNav);
    });
}

function renderAdminLeft(headerIndex) {
    // Remove active class from all buttons
    const buttons = document.querySelectorAll(".w3-bar-item");
    buttons.forEach((button) => button.classList.remove("active"));
    renderSidebar(headerList[headerIndex]);
    renderLeftMenuTable(headerIndex);
    const adminIndex = headerList.length - 1;
    const adminHeader = document.getElementById("admin-header");
    if (headerList[headerIndex].containerId == "student-info") {
        adminHeader.innerHTML = `
      <i class="fa-solid fa-arrow-left back-btn" onClick="showContent(headerList[${adminIndex}])"></i>
      Admin menu left: ${headerList[headerIndex].name}
      <i class="fa fa-add back-btn" style="margin-left: 10px" onClick="handleClickAdd(${headerIndex},-1)"></i>
      <i class="fa-solid fa-rotate-right back-btn" style="margin-left: 10px" onClick="reloadStudentInfor(${headerIndex})"></i>
      `;
    } else {
        adminHeader.innerHTML = `<i class="fa-solid fa-arrow-left back-btn" onClick="showContent(headerList[${adminIndex}])"></i>
      Admin menu left: ${headerList[headerIndex].name}
      <i class="fa fa-add back-btn" style="margin-left: 10px" onClick="handleClickAdd(${headerIndex},-1)"></i>
      `;
    }
    const sidebarItems = Array.from(mySidebar.children);
    for (let i = 1; i < sidebarItems.length; i++) {
        sidebarItems[i].onclick = () =>
            renderAdminContentLayout(headerIndex, i);
    }
    editing = false;
}

function renderAdminContentLayout(HeaderIndex, ItemIndex) {
    const adminHeader = document.getElementById("admin-header");
    adminHeader.innerHTML = `<i class="fa-solid fa-arrow-left back-btn" onClick="renderAdminLeft(${HeaderIndex})"></i>
  Admin contents layout: ${headerList[HeaderIndex].name} / ${
        headerList[HeaderIndex].leftMenuList[ItemIndex - 1].label
    }
  <i class="fa fa-add back-btn" style="margin-left: 10px" onClick="handleClickAddSection(${HeaderIndex},${
        ItemIndex - 1
    }, -1)"></i>
  <i class="fa-solid fa-circle-info back-btn" style="margin-left: 10px; margin-top: 1px" onClick="popUpHelper()"></i>`;
    mySidebar.childNodes.forEach((child) => {
        child.classList.remove("active-sidebar-item");
    });
    mySidebar.childNodes[ItemIndex].classList.add("active-sidebar-item");
    const preview = document.getElementById("preview-layout");
    adminTable.innerHTML = "";
    if (ItemContent[HeaderIndex][ItemIndex - 1].length) {
        ItemContent[HeaderIndex][ItemIndex - 1].forEach((item, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
      <td class="tab-name">${item.name}</td> 
      <td class="show-button" onClick="renderSectionEdit(${HeaderIndex},${ItemIndex}, ${
                index + 1
            })"><i class="fa fa-eye"></i></td>
      <td class="edit-button" onClick="handleClickEditSection(${HeaderIndex},${
                ItemIndex - 1
            }, ${index})"><i class="fa-solid fa-pen-to-square"></i></td>
      <td class="delete-button" onClick="handleClickDeleteSection(${HeaderIndex},${
                ItemIndex - 1
            },${index})"><i class="fa-solid fa-trash"></i></td>
      <td class="add-page-button" onClick="handleClickAddSection(${HeaderIndex},${
                ItemIndex - 1
            },${index})"><i class="fa fa-add"></i></td>
          <td class="add-page-button"> <i class="fa-solid fa-circle-info back-btn" style="margin-left: 10px; margin-top: 1px" onClick="popUpHelper()"></i></td>
      `;
            adminTable.appendChild(row);
        });
        preview.classList.remove("hidden");
    } else {
        const Emptyrow = document.createElement("tr");
        Emptyrow.innerHTML = "this section is empty";
        adminTable.appendChild(Emptyrow);
        if (!preview.classList.contains("hidden")) {
            preview.classList.add("hidden");
        }
    }
    const sidebarItems = Array.from(mySidebar.children);
    for (let i = 1; i < sidebarItems.length; i++) {
        sidebarItems[i].onclick = () =>
            renderAdminContentLayout(HeaderIndex, i);
    }
    document.getElementById("edit-container").classList.add("hidden");
    document.getElementById("searchApi-container").classList.add("hidden");
    document.getElementById("tagsApi-container").classList.add("hidden");
    document.getElementById("usercontribApi-container").classList.add("hidden");
    document.getElementById("type-item-content").classList.add("hidden");

    preview.innerHTML = document.getElementById(
        headerList[HeaderIndex].leftMenuList[ItemIndex - 1].href
    ).innerHTML;
}

function renderSectionEdit(HeaderIndex, ItemIndex, SectionIndex) {
    console.log(HeaderIndex, ItemIndex, SectionIndex);
    document.getElementById("preview-layout").classList.add("hidden");

    // Mở phong ấn selection type items content
    document.getElementById("type-item-content").classList.remove("hidden");

    // document.getElementById("type-names").value = "edit-container";
    // renderHtmlEditor(HeaderIndex, ItemIndex, SectionIndex);

    // display dropdown select type items content
    document.getElementById("type-item-content").classList.remove("hidden");

    const selectElement = document.getElementById("type-names");

    const options = selectElement.options;
    const optionValues = [];

    for (let i = 0; i < options.length; i++) {
        optionValues.push(options[i].value);
    }

    selectElement.addEventListener("change", function () {
        let typeItemContent = this.value;
        console.log("Selected value:", typeItemContent);

        optionValues.forEach((optionValue) => {
            if (
                document.getElementById(optionValue) &&
                optionValue != typeItemContent
            ) {
                console.log(
                    "item remove:::",
                    document.getElementById(optionValue)
                );
                document.getElementById(optionValue).classList.add("hidden");
            }
        });

        switch (typeItemContent) {
            case "edit-container":
                renderHtmlEditor(HeaderIndex, ItemIndex, SectionIndex);
                break;
            case "searchApi-container":
                renderWikipediaSearch(HeaderIndex, ItemIndex, SectionIndex);
                break;
            case "tagsApi-container":
                renderWikipediaTags(HeaderIndex, ItemIndex, SectionIndex);
                break;
            case "usercontribApi-container":
                renderWikipediaUserContribs(
                    HeaderIndex,
                    ItemIndex,
                    SectionIndex
                );
                break;
        }
        // You can add more logic here to handle the selected value
    });
}

function renderHtmlEditor(HeaderIndex, ItemIndex, SectionIndex) {
    const editContainer = document.getElementById("edit-container");
    editContainer.classList.remove("hidden");

    // Remove the element with id "submit-content" if it exists
    const submitContentElement = document.getElementById("submit-content");
    if (submitContentElement) {
        submitContentElement.remove();
    }

    const saveBtn = document.createElement("button");
    saveBtn.id = "submit-content";
    saveBtn.onclick = () =>
        submitEditorContent(HeaderIndex, ItemIndex - 1, SectionIndex - 1);
    saveBtn.innerText = "Save";
    editContainer.appendChild(saveBtn);

    const editorElement = document.getElementById("editor");
    const defaultContent =
        ItemContent[HeaderIndex][ItemIndex - 1][SectionIndex - 1].content;

    // Initialize Quill if it hasn’t been initialized yet
    if (!editorElement.classList.contains("quill-initialized")) {
        const toolbarOptions = [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],
            ["link", "image", "video", "formula"],

            [{ header: 1 }, { header: 2 }, { header: 3 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }], // text direction

            [{ size: ["small", false, "large", "huge"] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            [{ align: [] }],
            ["clean"], // remove formatting button
        ];
        const quill = new Quill("#editor", {
            theme: "snow",
            placeholder: "Enter section content...",
            modules: {
                // Equivalent to { toolbar: { container: '#toolbar' }}
                container: "#toolbar",
                toolbar: toolbarOptions,
            },
        });
        editorElement.classList.add("quill-initialized");
    }

    // Set the default content in the editor
    const quill = Quill.find(editorElement); // Find the existing Quill instance
    quill.clipboard.dangerouslyPasteHTML(defaultContent);
    quill.on("text-change", () => {
        console.log(quill.getSemanticHTML());
        preview.innerHTML = quill.getSemanticHTML();
    });
}

function renderWikipediaSearch(HeaderIndex, ItemIndex, SectionIndex) {
    const searchApiContainer = document.getElementById("searchApi-container");
    searchApiContainer.classList.remove("hidden");

    const searchTermElem = document.querySelector("#searchTerm");
    const searchResultElem = document.querySelector("#searchResult");
    let html = "";
    searchTermElem.focus();
    searchTermElem.addEventListener("input", function (event) {
        search(event.target.value);
    });
    const debounce = (fn, delay = 500) => {
        let timeoutId;
        return (...args) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                fn.apply(null, args);
            }, delay);
        };
    };
    const search = debounce(async (searchTerm) => {
        if (!searchTerm) {
            // reset the search result
            searchResultElem.innerHTML = "";
            return;
        }
        try {
            // make an API request
            const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=jso
n&origin=*&srlimit=10&srsearch=${searchTerm}`;
            const response = await fetch(url);
            const searchResults = await response.json();
            const searchResultHtml = generateSearchResultHTML(
                searchResults.query.search,
                searchTerm
            );
            searchResultElem.innerHTML = searchResultHtml;

            html = searchResultHtml;
        } catch (error) {
            console.log(error);
        } finally {
            // Remove the element with id "submit-content" if it exists
            const submitContentElement =
                document.getElementById("submit-content");
            if (submitContentElement) {
                submitContentElement.remove();
            }
            const saveBtn = document.createElement("button");
            saveBtn.id = "submit-content";

            saveBtn.onclick = () => {
                // reset input search value
                searchTermElem.value = "";

                // reset DOM
                searchResultElem.innerHTML = "";

                submitWikipediaContent(
                    HeaderIndex,
                    ItemIndex - 1,
                    SectionIndex - 1,
                    html
                );
            };
            saveBtn.innerText = "Save";
            searchApiContainer.appendChild(saveBtn);
        }
    });
    const stripHtml = (html) => {
        let div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent;
    };
    const highlight = (str, keyword, className = "highlight") => {
        const hl = `<span class="${className}">${keyword}</span>`;
        return str.replace(new RegExp(keyword, "gi"), hl);
    };
    const generateSearchResultHTML = (results, searchTerm) => {
        return results
            .map((result) => {
                const title = highlight(stripHtml(result.title), searchTerm);
                const snippet = highlight(
                    stripHtml(result.snippet),
                    searchTerm
                );
                return `<article>
 <a href="https://en.wikipedia.org/?curid=${result.pageid}">
 <h2>${title}</h2>
 </a>
 <div class="summary">${snippet}...</div>
 </article>`;
            })
            .join("");
    };
}

async function renderWikipediaTags(HeaderIndex, ItemIndex, SectionIndex) {
    const tagsApiContainer = document.getElementById("tagsApi-container");
    tagsApiContainer.classList.remove("hidden");
    var url = "https://en.wikipedia.org/w/api.php";

    const tgLimitInput = document.querySelector("#tgLimitInput");

    document.getElementById("get-tag").addEventListener("click", function () {
        const limit = tgLimitInput.value;

        var params = {
            action: "query",
            format: "json",
            list: "tags",
            tgprop: "displayname|description|hitcount|defined|source|active",
            tglimit: limit,
        };

        url = url + "?origin=*";
        Object.keys(params).forEach(function (key) {
            url += "&" + key + "=" + params[key];
        });

        // const prevGetTagHtml = document.getElementById("get-tag").innerHTML;

        const prevGetTagHtml = `<span>Get tags</span>`;

        console.log("prevGetTagHtml", prevGetTagHtml);

        document.getElementById(
            "get-tag"
        ).innerHTML = `<span class="loader"></span>`;

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                // reset tags result
                document.getElementById("tagsResult").innerHTML = "";

                var tags = response.query.tags;
                tags.forEach(function (tag) {
                    // Create a div element for each tag
                    var tagElement = document.createElement("div");
                    tagElement.className = "tag";

                    // Assign the tag details to the div element
                    tagElement.innerHTML = `
                        <h3>Tag name: ${tag.displayname}</h3>
                        ${
                            tag.description
                                ? `<p>Description: ${tag.description}</p>`
                                : ""
                        }
                        <p>Hitcount: ${tag.hitcount}</p>
                        ${
                            tag.source.length > 0
                                ? `<p>Source: ${tag.source.join(", ")}</p>`
                                : ""
                        }
                    `;

                    // Append the tag element to the content page element
                    document
                        .getElementById("tagsResult")
                        .appendChild(tagElement);
                });
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => {
                document.getElementById("get-tag").innerHTML = prevGetTagHtml;
                console.log("reset loading");

                // Remove the element with id "submit-content" if it exists
                const submitContentElement =
                    document.getElementById("submit-content");
                if (submitContentElement) {
                    submitContentElement.remove();
                }
                const saveBtn = document.createElement("button");
                saveBtn.id = "submit-content";
                const html = document.getElementById("tagsResult").innerHTML;

                saveBtn.onclick = () => {
                    tgLimitInput.value = "";
                    document.getElementById("tagsResult").innerHTML = "";

                    submitWikipediaContent(
                        HeaderIndex,
                        ItemIndex - 1,
                        SectionIndex - 1,
                        html
                    );
                };
                saveBtn.innerText = "Save";
                tagsApiContainer.appendChild(saveBtn);
            });
    });
}

function renderWikipediaUserContribs(HeaderIndex, ItemIndex, SectionIndex) {
    /*
        get_usercontribs.js

        MediaWiki API Demos
        Demo of `Usercontribs` module: List user contributions.

        MIT License
    */
    const usercontribsContainer = document.getElementById(
        "usercontribApi-container"
    );
    usercontribsContainer.classList.remove("hidden");

    const ucuserInputElement = document.querySelector("#ucuser-input");

    document
        .getElementById("ucuser-btn")
        .addEventListener("click", function () {
            const ucuser = ucuserInputElement.value;

            var url = "https://en.wikipedia.org/w/api.php";

            var params = {
                action: "query",
                format: "json",
                list: "usercontribs",
                ucuser: ucuser,
            };

            url = url + "?origin=*";
            Object.keys(params).forEach(function (key) {
                url += "&" + key + "=" + params[key];
            });

            const prevUcuserBtnHtml = `<span>Search</span>`;
            // document.getElementById("ucuser-btn").innerHTML;

            document.getElementById(
                "ucuser-btn"
            ).innerHTML = `<span class="loader"></span>`;

            fetch(url)
                .then(function (response) {
                    return response.json();
                })
                .then(function (response) {
                    document.getElementById("usercontribResult").innerHTML = "";

                    var usercontrib = response.query.usercontribs;

                    usercontrib.forEach(function (uc) {
                        // Create a div element for each user contribution
                        var contribElement = document.createElement("div");
                        contribElement.className = "user-contrib";

                        // Convert timestamp to YYYY:MM:DD hh:mm:ss format
                        var date = new Date(uc.timestamp);
                        var formattedTimestamp = `${date.getFullYear()}:${String(
                            date.getMonth() + 1
                        ).padStart(2, "0")}:${String(date.getDate()).padStart(
                            2,
                            "0"
                        )} ${String(date.getHours()).padStart(2, "0")}:${String(
                            date.getMinutes()
                        ).padStart(2, "0")}:${String(
                            date.getSeconds()
                        ).padStart(2, "0")}`;

                        // Assign the user contribution details to the div element
                        contribElement.innerHTML = `
                    <h3>Title: ${uc.title}</h3>
                    <p>User: ${uc.user}</p>
                    <p>Comment: ${uc.comment}</p>
                    <p>Timestamp: ${formattedTimestamp}</p>
                    <p>Size: ${uc.size}</p>
                `;

                        // Append the contribution element to the container
                        document
                            .getElementById("usercontribResult")
                            .appendChild(contribElement);
                    });
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(() => {
                    document.getElementById("ucuser-btn").innerHTML =
                        prevUcuserBtnHtml;

                    // Remove the element with id "submit-content" if it exists
                    const submitContentElement =
                        document.getElementById("submit-content");
                    if (submitContentElement) {
                        submitContentElement.remove();
                    }
                    const saveBtn = document.createElement("button");
                    saveBtn.id = "submit-content";
                    const html =
                        document.getElementById("usercontribResult").innerHTML;
                    saveBtn.onclick = () => {
                        ucuserInputElement.value = "";
                        document.getElementById("usercontribResult").innerHTML =
                            "";

                        submitWikipediaContent(
                            HeaderIndex,
                            ItemIndex - 1,
                            SectionIndex - 1,
                            html
                        );
                    };
                    saveBtn.innerText = "Save";
                    usercontribsContainer.appendChild(saveBtn);
                });
        });
}

function renderLeftMenuTable(headerIndex) {
    adminTable.innerHTML = ``;
    if (headerList[headerIndex].leftMenuList.length) {
        headerList[headerIndex].leftMenuList.forEach((item, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
          <td class="tab-name">${item.label}</td> 
          <td class="show-button" onClick="renderAdminContentLayout(${headerIndex},${
                index + 1
            })"><i class="fa fa-eye"></i></td>
          <td class="edit-button" onClick="handleClickEdit(${headerIndex},${index})"><i class="fa-solid fa-pen-to-square"></i></td>
          <td class="delete-button" onClick="handleClickDelete(${headerIndex}, ${index})"><i class="fa-solid fa-trash"></i></td>
          <td class="add-page-button" onClick="handleClickAdd(${headerIndex}, ${index})"><i class="fa fa-add"></i></td>
          `;
            adminTable.appendChild(row);
        });
    } else {
        const emptyNoti = document.createElement("tr");
        emptyNoti.innerHTML = `
          <td class="tab-name" style="fon-style: italic">There isn't any left menu item in this header yet</td>
          <td class="save-button"><button onClick="handleClickAdd(${headerIndex},0)">Add</button></td>
      `;
        adminTable.appendChild(emptyNoti);
    }
    document.getElementById("preview-layout").classList.add("hidden");
    document.getElementById("edit-container").classList.add("hidden");
    document.getElementById("searchApi-container").classList.add("hidden");
    document.getElementById("tagsApi-container").classList.add("hidden");
    document.getElementById("usercontribApi-container").classList.add("hidden");
    document.getElementById("type-item-content").classList.add("hidden");
}

//handle logic
function handleClickEdit(headerIndex, ItemIndex) {
    console.log(editing);
    if (editing == false) {
        const row =
            ItemIndex !== undefined
                ? adminTable.rows[ItemIndex]
                : adminTable.rows[headerIndex + 1];
        const tabNameCell = row.querySelector(".tab-name");
        const currentText = tabNameCell.textContent.trim();
        tabNameCell.innerHTML = `<input type="text" value="${currentText}" class="edit-input"/>`;
        tabNameCell.querySelector("input").focus();
        const saveButtonCell = document.createElement("td");
        saveButtonCell.classList.add("save-button");
        saveButtonCell.innerHTML = `<button onClick="handleSaveEdit(${headerIndex}, ${ItemIndex})">Save</button>`;

        row.appendChild(saveButtonCell);
        editing = true;
    }
}

function handleSaveEdit(headerIndex, ItemIndex) {
    const row =
        ItemIndex !== undefined
            ? adminTable.rows[ItemIndex]
            : adminTable.rows[headerIndex + 1];
    const tabNameCell = row.querySelector(".tab-name");

    // Get the new value from the input
    const newValue = tabNameCell.querySelector(".edit-input").value;
    tabNameCell.innerHTML = newValue;
    if (ItemIndex === undefined) {
        headerList[headerIndex + 1].name = newValue;
        renderTopMenu();
        renderTopMenuTable();
    } else {
        headerList[headerIndex].leftMenuList[ItemIndex].label = newValue;
        renderSidebar(headerList[headerIndex]);
        renderLeftMenuTable(headerIndex);
    }
    editing = false;
}

function handleClickDelete(headerIndex, ItemIndex) {
    if (ItemIndex !== undefined) {
        const ItemSection = document.querySelector(
            "#" + headerList[headerIndex].leftMenuList[ItemIndex].href
        );
        if (ItemSection) {
            ItemSection.remove();
        }
        headerList[headerIndex].leftMenuList.splice(ItemIndex, 1);
        ItemContent[headerIndex].splice(ItemIndex, 1);
        renderLeftMenuTable(headerIndex);
        renderSidebar(headerList[headerIndex]);
    } else {
        ItemContent.splice(headerIndex + 1, 1);
        headerList.splice(headerIndex + 1, 1);
        renderTopMenu();
        renderTopMenuTable();
    }
}

function handleClickAdd(headerIndex, ItemIndex) {
    if (editing === false) {
        console.log(headerIndex, ItemIndex);
        const row =
            ItemIndex !== undefined
                ? adminTable.rows[ItemIndex + 1]
                : adminTable.rows[headerIndex + 2];
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
        <td class="tab-name"><input type="text" placeholder="Enter the new menu header name..." class="edit-input" colspan="5"/></td>
        <td class="cancel-button"><button onClick="handleCancelAdd(this)">Cancel</button></td>
        <td class="save-button"><button onClick="handleSaveAdd(${headerIndex},${ItemIndex})">Save</button></td>
    `;
        adminTable.insertBefore(newRow, row);
        if (ItemIndex !== undefined) {
            document.getElementById("mySidebar").style.display = `none`;
            console.log(document.getElementById("mySidebar").style.display);
        }
        editing = true;
    }
}

function handleCancelAdd(cancelButtonElement) {
    const rowToRemove = cancelButtonElement.parentElement.parentElement; // Truy cập tới <tr> chứa nút Cancel
    rowToRemove.remove(); // Xóa hàng khỏi DOM
    editing = false; // Đặt lại cờ editing
}

function handleSaveAdd(headerIndex, ItemIndex) {
    const row =
        ItemIndex !== undefined
            ? adminTable.rows[ItemIndex + 1]
            : adminTable.rows[headerIndex + 2];
    const tabNameCell = row.querySelector(".tab-name input");
    const newValue = tabNameCell.value.trim();
    if (ItemIndex !== undefined) {
        headerList[headerIndex].leftMenuList.splice(ItemIndex + 1, 0, {
            label: newValue,
            href: toCamelCase(newValue),
        });
        const ItemSection = document.createElement("div");
        ItemSection.id = toCamelCase(newValue);
        ItemSection.innerHTML = `<h1>${newValue}</h1>`;

        if (
            document.getElementById(
                headerList[headerIndex].leftMenuList[ItemIndex]
            )
        ) {
            const parentElement = document.getElementById(
                headerList[headerIndex].leftMenuList[ItemIndex].href
            ).parentElement;
            parentElement.insertBefore(
                ItemSection,
                document.getElementById(
                    headerList[headerIndex].leftMenuList[ItemIndex].href
                ).nextSibling
            );
        } else {
            console.log(headerList[headerIndex].containerId);
            const parentElement = document.getElementById(
                headerList[headerIndex].containerId
            ).children[0];
            parentElement.appendChild(ItemSection);
        }

        ItemContent[headerIndex].splice(ItemIndex + 1, 0, [
            {
                name: "Section 0",
                content: document.getElementById(toCamelCase(newValue))
                    .innerHTML,
            },
        ]);
        renderLeftMenuTable(headerIndex);
        renderSidebar(headerList[headerIndex]);
    } else {
        headerList.splice(headerIndex + 2, 0, {
            name: newValue,
            leftMenuHeader: newValue,
            leftMenuList: [],
            containerId: toCamelCase(newValue),
        });
        ItemContent.splice(headerIndex + 2, 0, []);
        renderTopMenu();
        renderTopMenuTable();
        const newSection = document.createElement("div");
        newSection.classList.add("w3-container", "w3-padding-64", "hidden");
        newSection.id = toCamelCase(newValue);
        newSection.innerHTML = `
      <div class="container">
        <div class="header">${newValue}</div>
      </div>
    `;
        document
            .getElementById("content-container")
            .insertBefore(newSection, document.getElementById("myFooter"));
    }
    editing = false;
}

function submitEditorContent(HeaderIndex, ItemIndex, SectionIndex) {
    console.log("submitEditorContent", HeaderIndex, ItemIndex, SectionIndex);
    const quill = new Quill("#editor"); // Assuming Quill is initialized here
    const html = quill.root.innerHTML;

    // Check if indices are within bounds
    if (
        ItemContent[HeaderIndex] &&
        ItemContent[HeaderIndex][ItemIndex] &&
        ItemContent[HeaderIndex][ItemIndex][SectionIndex]
    ) {
        // Update the content in the ItemContent array
        ItemContent[HeaderIndex][ItemIndex][SectionIndex].content = html;
        console.log(ItemContent[HeaderIndex][ItemIndex][SectionIndex]);

        // Update the content in the DOM
        const element = document.getElementById(
            headerList[HeaderIndex].leftMenuList[ItemIndex].href
        );
        if (element) {
            const childElements = Array.from(element.children);
            if (childElements[SectionIndex]) {
                childElements[SectionIndex].innerHTML = html;
                console.log(childElements[SectionIndex]);
            } else {
                console.error("SectionIndex out of bounds");
            }
        } else {
            console.error("Element not found for href");
        }

        // Remove the submit button if it exists
        const submitContentElement = document.getElementById("submit-content");
        if (submitContentElement) {
            submitContentElement.remove();
        }

        // Re-render the admin content layout
        renderAdminContentLayout(HeaderIndex, ItemIndex + 1);
    } else {
        console.error("Indices out of bounds");
    }
}

function submitWikipediaContent(HeaderIndex, ItemIndex, SectionIndex, html) {
    console.log("submitWikipediaContent", HeaderIndex, ItemIndex, SectionIndex);
    console.log("html", html);

    // Check if indices are within bounds
    if (
        ItemContent[HeaderIndex] &&
        ItemContent[HeaderIndex][ItemIndex] &&
        ItemContent[HeaderIndex][ItemIndex][SectionIndex]
    ) {
        // Update the content in the ItemContent array
        ItemContent[HeaderIndex][ItemIndex][SectionIndex].content = html;
        console.log(ItemContent[HeaderIndex][ItemIndex][SectionIndex]);

        // Update the content in the DOM
        const element = document.getElementById(
            headerList[HeaderIndex].leftMenuList[ItemIndex].href
        );
        if (element) {
            const childElements = Array.from(element.children);
            if (childElements[SectionIndex]) {
                childElements[SectionIndex].innerHTML += html;
                console.log(childElements[SectionIndex]);
            } else {
                console.error("SectionIndex out of bounds");
            }
        } else {
            console.error("Element not found for href");
        }

        // Remove the submit button if it exists
        const submitContentElement = document.getElementById("submit-content");
        if (submitContentElement) {
            submitContentElement.remove();
        }

        // Re-render the admin content layout
        renderAdminContentLayout(HeaderIndex, ItemIndex + 1);
    } else {
        console.error("Indices out of bounds");
    }
}

function reloadStudentInfor(HeaderIndex) {
    headerList[HeaderIndex].leftMenuList = [
        {
            label: studentDefaultInfor[0].name,
            href: studentDefaultInfor[0].href,
        },
        {
            label: studentDefaultInfor[1].name,
            href: studentDefaultInfor[1].href,
        },
        {
            label: studentDefaultInfor[2].name,
            href: studentDefaultInfor[2].href,
        },
    ];
    const parentElement = document.getElementById(
        headerList[HeaderIndex].containerId
    ).children[0];
    parentElement.innerHTML = ``;
    for (var i = 0; i < 3; i++) {
        ItemContent[HeaderIndex][i] = [
            {
                name: "Main Content",
                style: "",
                content: studentDefaultInfor[i].content,
            },
        ];
        const newSection = document.createElement("div");
        newSection.id = studentDefaultInfor[i].href;
        newSection.style = "margin-top: 20px;";
        newSection.innerHTML = studentDefaultInfor[i].content;
        parentElement.appendChild(newSection);
    }
    renderAdminLeft(HeaderIndex);
}

function handleClickEditSection(headerIndex, ItemIndex, SectionIndex) {
    const row = adminTable.rows[SectionIndex];
    const tabNameCell = row.querySelector(".tab-name");
    const currentText = tabNameCell.textContent.trim();

    row.innerHTML = `<th>Section name</th><td><input type="text" value="${currentText}" class="edit-input"/></td>`;
    row.querySelector("td input").focus();
    const styleInput = document.createElement("tr");
    styleInput.innerHTML = `
  <th>Section style</th> 
  <td>
      <textarea type="text" class="edit-input">${
          ItemContent[headerIndex][ItemIndex][SectionIndex].style === null
              ? ""
              : ItemContent[headerIndex][ItemIndex][SectionIndex].style
      }</textarea>
  </td>`;
    const saveBtn = document.createElement("tr");
    saveBtn.innerHTML = `<button class="submit-button" onCLick="handleSaveEditSection(${headerIndex},${ItemIndex},${SectionIndex})">Save</button>`;
    adminTable.insertBefore(styleInput, row.nextSibling);
    adminTable.insertBefore(saveBtn, styleInput.nextSibling);
}

function handleSaveEditSection(headerIndex, ItemIndex, SectionIndex) {
    const nameRow = adminTable.rows[SectionIndex];
    const nameInput = nameRow.querySelector(".edit-input");
    const sectionName = nameInput ? nameInput.value.trim() : "";

    const styleRow = nameRow.nextElementSibling;
    const styleTextarea = styleRow.querySelector(".edit-input");
    const sectionStyle = styleTextarea ? styleTextarea.value.trim() : "";

    ItemContent[headerIndex][ItemIndex][SectionIndex].name = sectionName;
    ItemContent[headerIndex][ItemIndex][SectionIndex].style = sectionStyle;
    const section = Array.from(
        document.getElementById(
            headerList[headerIndex].leftMenuList[ItemIndex].href
        ).children
    )[SectionIndex];
    section.style = sectionStyle;
    renderAdminContentLayout(headerIndex, ItemIndex + 1);
}

function handleClickDeleteSection(headerIndex, ItemIndex, SectionIndex) {
    console.log(headerIndex, ItemIndex);
    ItemContent[headerIndex][ItemIndex].splice(SectionIndex, 1);
    const section = Array.from(
        document.getElementById(
            headerList[headerIndex].leftMenuList[ItemIndex].href
        ).children
    )[SectionIndex];
    section.remove();
    renderAdminContentLayout(headerIndex, ItemIndex + 1);
}

function handleClickAddSection(headerIndex, ItemIndex, SectionIndex) {
    const row =
        SectionIndex == -1 ? adminTable.rows[0] : adminTable.rows[SectionIndex];
    const nameInput = document.createElement("tr");
    nameInput.innerHTML = `<th>Section name</th><td><input type="text" placeholder="Enter new section name..." class="edit-input"/></td>`;
    const styleInput = document.createElement("tr");
    styleInput.innerHTML = `
  <th>Section style</th> 
  <td>
      <textarea type="text" class="edit-input" placeholder="enter new section style.."></textarea>
  </td>`;
    const saveBtn = document.createElement("tr");
    saveBtn.innerHTML = `<button class="submit-button" onCLick="handleSaveAddSection(${headerIndex},${ItemIndex},${SectionIndex})">Save</button>`;
    if (SectionIndex == -1) {
        adminTable.insertBefore(nameInput, row);
    } else {
        adminTable.insertBefore(nameInput, row.nextSibling);
    }
    adminTable.insertBefore(styleInput, nameInput.nextSibling);
    adminTable.insertBefore(saveBtn, styleInput.nextSibling);
}

function handleSaveAddSection(headerIndex, ItemIndex, SectionIndex) {
    const nameRow = adminTable.rows[SectionIndex + 1];
    const nameInput = nameRow.querySelector(".edit-input");
    const sectionName = nameInput ? nameInput.value.trim() : "";

    const styleRow = nameRow.nextElementSibling;
    const styleTextarea = styleRow.querySelector(".edit-input");
    const sectionStyle = styleTextarea ? styleTextarea.value.trim() : "";

    const parentElement = document.getElementById(
        headerList[headerIndex].leftMenuList[ItemIndex].href
    );
    const ChildList = Array.from(
        document.getElementById(
            headerList[headerIndex].leftMenuList[ItemIndex].href
        ).children
    );
    const newSection = document.createElement("div");
    newSection.setAttribute("style", sectionStyle);
    newSection.innerHTML = `<h2>${sectionName}</h2>`;
    if (SectionIndex == -1) {
        parentElement.insertBefore(newSection, ChildList[SectionIndex + 1]);
    } else {
        parentElement.insertBefore(
            newSection,
            ChildList[SectionIndex].nextSibling
        );
    }
    ItemContent[headerIndex][ItemIndex].splice(SectionIndex + 1, 0, {
        name: sectionName,
        style: sectionStyle,
        content: newSection.innerHTML,
    });
    renderAdminContentLayout(headerIndex, ItemIndex + 1);
}

function popUpHelper() {
    window.open(`help.html`, "_blank");
}

renderTopMenu();
showContent(headerList[0]);

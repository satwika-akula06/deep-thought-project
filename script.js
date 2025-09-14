const technicalProjectImg = "./assets/images/technical.svg"; // adjust path if needed
const mainContent = document.getElementById("main-content");
const sidebar = document.getElementById("task-list");

// ---------------- Fetch JSON ----------------
async function fetchProjectData() {
  try {
    const res = await fetch(
      "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json"
    );
    return await res.json();
  } catch (err) {
    console.error("Error fetching project data:", err);
    return null;
  }
}

// ---------------- Render All Cards (Default Layout) ----------------
function renderAllCards() {
  // Remove previous notice board if any
  const existingNotice = mainContent.querySelector(".horizontal-container");
  if (existingNotice) existingNotice.remove();

  mainContent.innerHTML = `
    <div class="task-header">
      <h2 class="heading-blue">Technical Project Management</h2>
      <button class="submit-task-btn">Submit Task</button>
    </div>

    <div class="prompt-box">
      <div class="prompt-title">Explore the world of management</div>
      <div class="prompt-body">
        As a project manager, you play an important role in leading a project through initiation,
        planning, execution, monitoring, controlling and completion.
      </div>
    </div>

    <div class="dashboard-cards">

      <!-- Technical Project Management Card -->
      <div class="card technical-project-management">
        <div class="card-header">
          Technical Project Management
          <button class="info-btn" aria-label="Information">i</button>
        </div>
        <div class="card-desc">
          <strong>Description:</strong> Story of Alignment Scope of Agility Specific Accountable Staggering Approach
        </div>
        <div class="project-media">
          <img src="${technicalProjectImg}" alt="Technical Project" class="technical-img">
        </div>
      </div>

      <!-- Threadbuild Card -->
      <div class="card threadbuild">
        <div class="card-header">
          Threadbuild
          <button class="info-btn" aria-label="Information">i</button>
        </div>
        <div class="card-desc">
          <strong>Description:</strong> Watch the video and threadbuild, jot out key threads while watching the video
        </div>
        <div class="thread-section">
          <div class="thread-bar">Thread A</div>
          <div class="thread-inputs">
            <div class="threadbox" contenteditable="true" aria-label="Sub thread"></div>
            <div class="interpbox" contenteditable="true" aria-label="Sub Interpretation"></div>
          </div>
          <div class="thread-toolbar">
            <img src="https://img.icons8.com/ios-filled/24/000000/idea.png" alt="Idea" />
            <img src="https://img.icons8.com/ios-filled/24/000000/topic.png" alt="Notes" />
            <img src="https://img.icons8.com/ios-filled/24/000000/help.png" alt="Help" />
            <img src="https://img.icons8.com/ios-filled/24/000000/plant-under-sun.png" alt="Growth" />
            <select>
              <option>Select Category</option>
              <option>Category 1</option>
              <option>Category 2</option>
            </select>
            <select>
              <option>Select Process</option>
              <option>Process 1</option>
              <option>Process 2</option>
            </select>
          </div>
          <button class="blue-btn">+ Sub-thread</button>
          <div class="summary-label">Summary for Thread A</div>
          <div class="summary-box" contenteditable="true" aria-label="Summary for Thread A"></div>
        </div>
      </div>

      <!-- Structure Your Pointers Card -->
      <div class="card structure-pointer">
        <div class="card-header">
          Structure Your Pointers
          <button class="info-btn" aria-label="Information">i</button>
        </div>
        <div class="card-desc">
          <strong>Description :</strong> Write a 300 - 400 word article from your thread. Publish your understanding.
        </div>
        <hr class="divider">
        <div class="form-section">
          <label class="form-label" for="pointer-title">Title</label>
          <input type="text" id="pointer-title" class="form-input"/>
          <label class="form-label" for="pointer-content">Content</label>
          <div class="editor-toolbar">
            <div class="toolbar-menu">
              <span>File</span>
              <span>Edit</span>
              <span>View</span>
              <span>Insert</span>
              <span>Format</span>
              <span>Tools</span>
              <span>Table</span>
              <span>Help</span>
            </div>
            <div class="toolbar-actions">
              <button title="Undo">&#8630;</button>
              <button title="Redo">&#8631;</button>
              <button class="paragraph-select">Paragraph</button>
              <span class="ellipsis">&#8942;</span>
            </div>
          </div>
          <textarea id="pointer-content" class="form-textarea"></textarea>
        </div>
      </div>

      <!-- 4SA Method Card -->
      <div class="card sa4method">
        <div class="card-header">
          4SA Method
          <button class="info-btn" aria-label="Information">i</button>
        </div>
        <div class="card-desc">
          <strong>Description :</strong> To Explore more read more
        </div>
        <hr class="divider">

        <div class="collapsible-section">
          <button class="collapsible-btn active">
            <span class="caret">&#9660;</span> Introduction
          </button>
          <div class="collapsible-panel" style="max-height:160px;">
            <div class="panel-content-wrapper">
              <div class="panel-text">The 4SA Method, How to bring a idea into progress?</div>
              <a href="javascript:void(0)" class="see-more-link">See More</a>
            </div>
          </div>
        </div>

        <div class="collapsible-section">
          <button class="collapsible-btn active">
            <span class="caret">&#9660;</span> Thread A
          </button>
          <div class="collapsible-panel" style="max-height:220px;">
            <div class="panel-content-wrapper">
              <div class="panel-text">How are you going to develop your strategy? Which method are you going to use?</div>
              <a href="javascript:void(0)" class="see-more-link">See More</a>
            </div>
            <div class="example-box">
              <strong>Example 1</strong>
            </div>

              <p>You have a concept, How will you put into progress?</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating icons -->
    <div class="floating-icons">
      <div class="icon-circle"><img src="assets/images/questionmark.svg" alt="Help" /></div>
      <div class="icon-circle"><img src="assets/images/meeting.svg" alt="Meeting" /></div>
      <div class="icon-circle"><img src="assets/images/schedule.svg" alt="Calendar" /></div>
    </div>

    <!-- Notice board layout -->
    <div class="horizontal-container">
      <div class="right-sidebar-border">
        <div class="close-icon">&times;</div>
        <div class="notice-text">Notice Board
        </div>
      </div>
      <div class="white-rectangle"></div>
    </div>
  `;

  // --- Collapsible sections
  const collapsibles = mainContent.querySelectorAll(".collapsible-btn");
  collapsibles.forEach(btn => {
    btn.onclick = () => {
      btn.classList.toggle("active");
      const panel = btn.nextElementSibling;
      panel.style.maxHeight =
        panel.style.maxHeight && panel.style.maxHeight !== "0px"
          ? null
          : panel.scrollHeight + "px";
    };
  });

// --- See More links functionality
  const seeMoreLinks = mainContent.querySelectorAll(".see-more-link");
  seeMoreLinks.forEach(link => {
    link.addEventListener("click", () => {
      const panel = link.closest(".collapsible-panel");
      panel.style.maxHeight = panel.scrollHeight + "px"; // expand fully
      link.style.display = "none"; // hide the link after expansion
    });
  });

  // --- Subthread add
  const addSubThreadBtn = mainContent.querySelector(".blue-btn");
  if (addSubThreadBtn) {
    addSubThreadBtn.onclick = () => {
      const threadSection = mainContent.querySelector(".thread-section");
      const newInputs = document.createElement("div");
      newInputs.className = "thread-inputs";
      newInputs.innerHTML = `
        <div class="threadbox" contenteditable="true" aria-label="Sub thread"></div>
        <div class="interpbox" contenteditable="true" aria-label="Sub Interpretation"></div>
      `;
      addSubThreadBtn.parentNode.insertBefore(newInputs, addSubThreadBtn);
    };
  }

observeThreadbuildHeight();
}

   // --- Adjust notice board dynamically ---
  function observeThreadbuildHeight() {
  const threadbuildCard = document.querySelector(".card.threadbuild");
  const whiteRect = document.querySelector(".white-rectangle");
  const sidebarBorder = document.querySelector(".right-sidebar-border");
  const horizontalContainer = document.querySelector(".horizontal-container");
  const submitBtn = document.querySelector(".submit-task-btn");

  if (!threadbuildCard || !whiteRect || !sidebarBorder || !submitBtn || !horizontalContainer) return;

  const setHeight = () => {
    const containerTop = mainContent.getBoundingClientRect().top;
    const submitBottom = submitBtn.getBoundingClientRect().bottom - containerTop;
    const threadbuildBottom = threadbuildCard.getBoundingClientRect().bottom - containerTop;

    const fullHeight = threadbuildBottom - submitBottom;
    const reducedHeight = fullHeight * 0.55; // adjust dynamically

    // Apply height and position
    whiteRect.style.top = submitBottom + "px";
    whiteRect.style.height = reducedHeight + "px";

    sidebarBorder.style.top = submitBottom + "px";
    sidebarBorder.style.height = reducedHeight + "px";

    horizontalContainer.style.right = "20px"; // optional tweak
  };

  setHeight();

  const resizeObserver = new ResizeObserver(() => setHeight());
  resizeObserver.observe(threadbuildCard);
  resizeObserver.observe(submitBtn);
}



  

  

// ---------------- Sidebar ----------------
function loadSidebar() {
  sidebar.innerHTML = "";

  const ul = document.createElement("ul");
  ul.className = "sidebar-bullet-list";

  const introLi = document.createElement("li");
  introLi.textContent = "Explore the world of management";
  introLi.className = "task-item";
  ul.appendChild(introLi);

  const taskData = [
    "Technical Project Management",
    "Threadbuild",
    "Structure Your Pointers",
    "4SA Method",
  ];

  taskData.forEach((task, idx) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.className = "task-item";
    li.dataset.task = idx + 1;
    if (idx === 0) li.classList.add("active");
    ul.appendChild(li);
  });

  sidebar.appendChild(ul);

  sidebar.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      sidebar.querySelectorAll("li").forEach((el) =>
        el.classList.remove("active")
      );
      li.classList.add("active");
    });
  });
}

// ---------------- Init ----------------
loadSidebar();
renderAllCards();


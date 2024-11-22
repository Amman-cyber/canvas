document.addEventListener("DOMContentLoaded", () => {
    const API_URL = "https://canvas.instructure.com/api/v1/assignments";
    const token = "YOUR_CANVAS_TOKEN_HERE"; // Replace with the user's token or OAuth2 implementation
  
    const fetchAssignments = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const assignments = await response.json();
        displayAssignments(assignments);
      } catch (error) {
        console.error("Failed to fetch assignments:", error);
      }
    };
  
    const displayAssignments = (assignments) => {
      const container = document.getElementById("assignment-list");
      container.innerHTML = ""; // Clear previous data
      assignments.forEach((assignment) => {
        const card = document.createElement("div");
        card.className = "assignment-card";
        card.innerHTML = `
          <div class="card-header">
            <h3>${assignment.name}</h3>
            <span class="due-date">Due: ${new Date(
              assignment.due_at
            ).toLocaleString()}</span>
          </div>
          <div class="card-body">
            <p>Course: ${assignment.course_id}</p>
            <button class="mark-complete">Mark Complete</button>
          </div>
        `;
        container.appendChild(card);
      });
    };
  
    fetchAssignments();
  });
  
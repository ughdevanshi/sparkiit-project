// ===== Spark IIT FAQ Chatbot =====
// Rule-based chatbot: click a question, get an instant answer. No API needed.

const sparkIitFaqData = [
  {
    q: "What courses do you offer?",
    a: "We offer CCC (Computer Concepts Course), Diploma in Computer Applications (DCA), Tally with GST, Web Designing, Python Programming, Desktop Publishing (DTP), Advanced Excel, and Digital Marketing Basics."
  },
  {
    q: "What is the duration of each course?",
    a: "Course durations range from 1 month to 6 months depending on the course. Check our Syllabus page for the exact duration of each course."
  },
  {
    q: "What are the fees for the courses?",
    a: "Fees vary by course. Please visit our Courses page or contact us directly for the latest fee structure and available installment options."
  },
  {
    q: "Do you provide installment options?",
    a: "Yes, we offer installment plans for most courses. Contact our admission desk for details."
  },
  {
    q: "What are the eligibility criteria?",
    a: "Most of our courses require a minimum of 10th or 12th pass. Specific eligibility is mentioned on each course's page."
  },
  {
    q: "How do I apply for admission?",
    a: "You can fill out our online Admission Form on the website, or visit our branch in person with your documents."
  },
  {
    q: "What documents are required?",
    a: "You'll need your educational certificates, ID proof (Aadhar card), and passport-size photographs. Additional documents may be required based on the course."
  },
  {
    q: "Do you provide a certificate after completion?",
    a: "Yes, all students receive a certificate upon successful completion of their course and final assessment."
  },
  {
    q: "What are the class timings?",
    a: "We offer Morning, Afternoon, and Evening batches to suit different schedules."
  },
  {
    q: "Do you provide placement assistance?",
    a: "Yes, we provide placement assistance and guidance to help students find job opportunities after course completion."
  },
  {
    q: "How can I contact you?",
    a: "You can reach us through our Contact Us page, call our institute number, or message us on WhatsApp."
  }
];

document.addEventListener("DOMContentLoaded", function () {
  // Build widget HTML and inject into page
  const widget = document.createElement("div");
  widget.innerHTML = `
    <button id="spark-iit-chatbot-toggle" aria-label="Open chat">💬</button>
    <div id="spark-iit-chatbot-window">
      <div id="spark-iit-chatbot-header">
        <span>Spark IIT Help Desk</span>
        <button id="spark-iit-chatbot-close" aria-label="Close chat">&times;</button>
      </div>
      <div id="spark-iit-chatbot-body"></div>
      <div id="spark-iit-chatbot-options"></div>
    </div>
  `;
  document.body.appendChild(widget);

  const toggleBtn = document.getElementById("spark-iit-chatbot-toggle");
  const closeBtn = document.getElementById("spark-iit-chatbot-close");
  const chatWindow = document.getElementById("spark-iit-chatbot-window");
  const chatBody = document.getElementById("spark-iit-chatbot-body");
  const chatOptions = document.getElementById("spark-iit-chatbot-options");

  function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.className = "spark-iit-chat-msg " + sender;
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function showQuestionList() {
    chatOptions.innerHTML = "";
    sparkIitFaqData.forEach(function (item) {
      const btn = document.createElement("button");
      btn.className = "spark-iit-option-btn";
      btn.textContent = item.q;
      btn.addEventListener("click", function () {
        addMessage(item.q, "user");
        setTimeout(function () {
          addMessage(item.a, "bot");
        }, 300);
      });
      chatOptions.appendChild(btn);
    });
  }

  function startChat() {
    chatBody.innerHTML = "";
    addMessage("Hi! 👋 I'm the Spark IIT Help Desk bot. Pick a question below and I'll answer instantly.", "bot");
    showQuestionList();
  }

  toggleBtn.addEventListener("click", function () {
    chatWindow.classList.toggle("open");
    if (chatWindow.classList.contains("open") && chatBody.children.length === 0) {
      startChat();
    }
  });

  closeBtn.addEventListener("click", function () {
    chatWindow.classList.remove("open");
  });
});
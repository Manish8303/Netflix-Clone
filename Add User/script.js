const memberDiv = document.querySelector('.memberDiv');

// Get users from localStorage or set default users
let users = JSON.parse(localStorage.getItem('users')) || ['vinod', 'thapa', 'bahadur'];

const userIcons = () => {
    memberDiv.innerHTML = ''; // Clear old buttons

    users.forEach((user, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.style.backgroundImage = `url('./images/user${index + 1}.png')`;
        btn.innerHTML = `<span>${user}</span>`;

        // Add click event to redirect with user image
        btn.addEventListener('click', () => {
            // Send the user name and image to MainPage.html via URL
            window.location.href = `../MainPage.html?user=${user}&image=user${index + 1}.png`;
        });

        memberDiv.appendChild(btn);
    });

    // Add "Add Profile" button
    const addBtn = document.createElement('button');
    addBtn.className = 'addIcon';
    addBtn.innerHTML = `<i class="fas fa-plus-circle"></i> <span>Add Profile</span>`;
    addBtn.addEventListener('click', addUser);
    memberDiv.appendChild(addBtn);
};

const addUser = () => {
    const userName = prompt("Please enter your name");

    if (userName && !users.includes(userName.toLowerCase())) {
        users.push(userName.toLowerCase());
        localStorage.setItem('users', JSON.stringify(users)); // Save to localStorage
        userIcons(); // refresh UI
    } else {
        alert("Invalid name or already exists");
    }
};

userIcons();

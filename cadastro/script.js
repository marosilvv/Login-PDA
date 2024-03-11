
        // Array para armazenar os dados dos usuários
        let userDataList = [];

        // Função para listar os dados cadastrados
        function listUserData() {
            const userDataListDiv = document.getElementById('userDataList');
            userDataListDiv.innerHTML = '';
            userDataList.forEach((userData, index) => {
                const userDataDiv = document.createElement('div');
                userDataDiv.innerHTML = `
                    <p><strong>Nome de Usuário:</strong> ${userData.username}</p>
                    <p><strong>Senha:</strong> ${userData.password}</p>
                    <button onclick="editUserData(${index})">Editar</button>
                    <button onclick="deleteUserData(${index})">Deletar</button>
                `;
                userDataListDiv.appendChild(userDataDiv);
            });
        }

        // Função para cadastrar um novo dado
        function addUserData() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username && password) {
                userDataList.push({ username, password });
                listUserData();
                document.getElementById('username').value = '';
                document.getElementById('password').value = '';
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        }

        // Função para editar um dado cadastrado
        function editUserData(index) {
            const newUsername = prompt('Digite o novo nome de usuário:');
            const newPassword = prompt('Digite a nova senha:');
            if (newUsername && newPassword) {
                userDataList[index].username = newUsername;
                userDataList[index].password = newPassword;
                listUserData();
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        }

        // Função para deletar um dado cadastrado
        function deleteUserData(index) {
            if (confirm('Tem certeza que deseja deletar este usuário?')) {
                userDataList.splice(index, 1);
                listUserData();
            }
        }

        // Evento de clique no botão de login
        document.getElementById('loginBtn').addEventListener('click', addUserData);
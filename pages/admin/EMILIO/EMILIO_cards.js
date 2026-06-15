import CardsService from "../../../shared/services/EMILIO_services/EMILIO_card.service.js";

const cardsService = new CardsService();

async function getCardById(id) {
    return await cardsService.getCardById(id);
}

async function getLabelById(id) {
    const labels = await cardsService.getLabelById(id);
    return labels;
}

async function getLabelIdWrapper(id) {
    return await cardsService.getLabelIdWrapper(id);
}

async function deleteLabelFromCard(cardId, labelId) {
    await cardsService.deleteLabelFromCard(cardId, labelId);
}


async function loadSampleCards() {
    const sampleIds = [1, 2, 3];
    const cards = [];
    for (const id of sampleIds) {
        try {
            const card = await getCardById(id);
            if (card) cards.push(card);
        } catch (e) {
            console.warn(`Card ${id} not found or error:`, e);
        }
    }
    return cards;
}

async function buildTable() {
    const cards = await loadSampleCards();
    const tableBody = document.getElementById('cards-table-body');
    tableBody.innerHTML = '';

    cards.forEach(card => {
        const row = document.createElement('tr');

        const labelsCell = document.createElement('td');
        if (card.labels && card.labels.length > 0) {
            card.labels.forEach(label => {
                const labelDiv = document.createElement('div');
                labelDiv.style.display = 'flex';
                labelDiv.style.alignItems = 'center';
                labelDiv.style.marginBottom = '4px';

                const labelText = document.createElement('span');
                labelText.textContent = `${label.name} (${label.color})`;
                labelText.style.marginRight = '8px';

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', async () => {
                    if (confirm(`Remove label "${label.name}" from card ${card.id}?`)) {
                        await deleteLabelFromCard(card.id, label.id);
                        buildTable();
                    }
                });

                labelDiv.appendChild(labelText);
                labelDiv.appendChild(deleteBtn);
                labelsCell.appendChild(labelDiv);
            });
        } else {
            labelsCell.textContent = 'No labels';
        }
        
        row.innerHTML = `
            <td>${card.id}</td>
            <td>${card.title}</td>
            <td>${card.description}</td>
            <td>${card.order}</td>
        `;
        row.appendChild(labelsCell);
        tableBody.appendChild(row);
    });
}

document.getElementById('getCardBtn').addEventListener('click', async () => {
    const id = document.getElementById('cardIdInput').value;
    if (!id) return alert('Enter a card ID');
    const card = await getCardById(parseInt(id));
    document.getElementById('cardDetail').textContent = JSON.stringify(card, null, 2);
});

document.getElementById('getLabelBtn').addEventListener('click', async () => {
    const id = document.getElementById('labelIdInput').value;
    if (!id) return alert('Enter a label ID');
    const labels = await getLabelById(parseInt(id));
    document.getElementById('labelDetail').textContent = JSON.stringify(labels, null, 2);
});

buildTable();
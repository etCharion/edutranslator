let currentFile = null;
let allStrings = [];
let originalContent = '';

function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById('fileUpload').style.background = '#f0f2ff';
}

function handleDragLeave(e) {
    e.preventDefault();
    document.getElementById('fileUpload').style.background = '#f8f9ff';
}

function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        processFile(files[0]);
    }
    document.getElementById('fileUpload').style.background = '#f8f9ff';
}

function handleFileSelect(e) {
    const files = e.target.files;
    if (files.length > 0) {
        processFile(files[0]);
    }
}

function processFile(file) {
    currentFile = file;
    const reader = new FileReader();
    
    reader.onload = function(event) {
        originalContent = event.target.result;
        extractStrings(originalContent);
        displayStrings();
    };
    
    reader.readAsText(file);
}

function extractStrings(content) {
    allStrings = [];
    const regex = /"([^"\\]*(?:\\.[^"\\]*)*)"/g;
    let match;
    
    while ((match = regex.exec(content)) !== null) {
        allStrings.push({
            original: match[1],
            modified: match[1],
            fullMatch: match[0]
        });
    }
}

function displayStrings() {
    const stringsList = document.getElementById('stringsList');
    stringsList.innerHTML = '';
    
    if (allStrings.length === 0) {
        stringsList.innerHTML = '<p style="color: #999; text-align: center; padding: 20px;">Nenalezeny žádné texty v uvozovkách.</p>';
    } else {
        allStrings.forEach((str, index) => {
            const item = document.createElement('div');
            item.className = 'string-item';
            item.innerHTML = `
                <label>Část ${index + 1} z ${allStrings.length}</label>
                <div class="original">Původní: "${escapeHtml(str.original)}"</div>
                <textarea id="string-${index}" placeholder="Napiš upravenou verzi...">${escapeHtml(str.modified)}</textarea>
                <div class="string-counter"><span id="count-${index}">${str.modified.length}</span> znaků</div>
            `;
            stringsList.appendChild(item);
            
            document.getElementById(`string-${index}`).addEventListener('input', function(e) {
                allStrings[index].modified = e.target.value;
                document.getElementById(`count-${index}`).textContent = e.target.value.length;
            });
        });
    }
    
    document.getElementById('processingSection').style.display = 'block';
    document.getElementById('fileUpload').parentElement.style.display = 'none';
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

function downloadModified() {
    let modifiedContent = originalContent;
    
    allStrings.forEach((str) => {
        const oldString = '"' + str.original.replace(/\\/g, '\\\\') + '"';
        const newString = '"' + str.modified.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
        modifiedContent = modifiedContent.replace(new RegExp(escapeRegex(oldString), 'g'), newString);
    });
    
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(modifiedContent));
    element.setAttribute('download', currentFile.name.replace(/(.*)(\.\w+)$/, '$1_upraveny$2'));
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function escapeRegex(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function resetAll() {
    currentFile = null;
    allStrings = [];
    originalContent = '';
    document.getElementById('processingSection').style.display = 'none';
    document.getElementById('fileUpload').parentElement.style.display = 'block';
    document.getElementById('fileInput').value = '';
    document.getElementById('fileUpload').style.background = '#f8f9ff';
}

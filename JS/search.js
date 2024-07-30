document.addEventListener('DOMContentLoaded', function() {
    // Obtener el parámetro de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const activeTab = urlParams.get('tab');

    // Mostrar la pestaña correcta
    if (activeTab === 'celulares') {
        document.getElementById('celulares-tab').click();
    } else if (activeTab === 'computadoras') {
        document.getElementById('computadoras-tab').click();
    }
});
// script.js
document.getElementById('quizForm')?.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener respuestas
    const mood = document.querySelector('select[name="mood"]').value;
    const need = document.querySelector('select[name="need"]').value;

    // Crear CSV
    const csvContent = `Respuesta,Mood,Need\n1,${mood},${need}`;
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    // Forzar descarga del CSV
    const a = document.createElement('a');
    a.href = url;
    a.download = 'respuesta_sleepwave.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Redirigir a player.html con el sonido seleccionado
    let soundFile = '';
    if (need === 'Relajación') soundFile = 'relax.mp3';
    if (need === 'Sueño') soundFile = 'sleep.mp3';
    if (need === 'Enfoque') soundFile = 'focus.mp3';
    if (need === 'Energía') soundFile = 'energy.mp3';

    window.location.href = `player.html?sound=${soundFile}`;
});

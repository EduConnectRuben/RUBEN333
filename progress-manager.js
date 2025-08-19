// --- SISTEMA CENTRAL DE PROGRESO DE LA GALACTIC ARCADE ---

// Función para obtener los datos actuales desde localStorage
function getProgress() {
    // Intenta leer los datos. Si no existen, crea un objeto por defecto.
    const progress = localStorage.getItem('galacticArcadeProgress');
    if (progress) {
        return JSON.parse(progress);
    } else {
        return {
            correctAnswers: 0,
            totalQuestions: 0,
            totalScore: 0
        };
    }
}

// Función para guardar los datos actualizados en localStorage
function saveProgress(progressData) {
    localStorage.setItem('galacticArcadeProgress', JSON.stringify(progressData));
}

// Función principal que llamarán los juegos para actualizar el progreso
// isCorrect: booleano (true si la respuesta fue correcta)
// points: número (puntos ganados por la respuesta, ej: 10)
function updateProgress(isCorrect, points = 0) {
    const progress = getProgress();

    // Siempre se incrementa el total de preguntas respondidas
    progress.totalQuestions++;

    if (isCorrect) {
        progress.correctAnswers++;
        progress.totalScore += points;
    }

    saveProgress(progress);
}

// (Opcional) Función para resetear todo el progreso
function resetAllProgress() {
    const defaultProgress = {
        correctAnswers: 0,
        totalQuestions: 0,
        totalScore: 0
    };
    saveProgress(defaultProgress);
    console.log("¡Progreso galáctico reseteado!");
}
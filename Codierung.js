const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// Funktion zum Codieren von Text
function encodeText(text, encodingType) {
    // Trimmen von Leerzeichen am Anfang und Ende
    text = text.trim();

    // Festlegen der Codierungsfunktion basierend auf dem Argument
    let encodingFunction;
    switch (encodingType) {
        case '-e':
            encodingFunction = encodeURIComponent;
            break;
        case '-u':
            encodingFunction = encodeURL;
            break;
        default:
            encodingFunction = (text) => text; // Keine Codierung für ungültige Argumente
            break;
    }

    // Codieren des Texts mit der ausgewählten Funktion
    return encodingFunction(text);
}

// Ereignis-Handler für die Eingabezeile
rl.once('line', input => {
    // Extrahieren von Text und Codierungstyp aus der Eingabe
    const [text, encodingType] = input.split(' ');

    // Codieren des Texts
    const encodedText = encodeText(text, encodingType);

    // Ausgabe des codierten Texts
    console.log(encodedText);

    // Schließen der Schnittstelle
    rl.close();
});

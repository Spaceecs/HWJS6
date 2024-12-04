class Style {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

const styles = [
    new Style("color", "red"),
    new Style("font-size", "20px"),
    new Style("text-align", "center"),
    new Style("text-decoration", "underline"),
    new Style("font-weight", "bold")
];

function applyStyles(stylesArray, text) {
    let styleString = stylesArray.map(style => `${style.name}: ${style.value}`).join("; ");
    document.write(`<p style="${styleString}">${text}</p>`);
}

applyStyles(styles, "This is a styled paragraph.");

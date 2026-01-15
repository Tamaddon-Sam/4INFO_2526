const toUpperCaseAscii = (char) => {
    let code = char.charCodeAt(0);
    return code > 96 && code < 123 ? String.fromCharCode(code - 32) : char;

}
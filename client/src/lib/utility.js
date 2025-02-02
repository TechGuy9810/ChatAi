export default function formatGeminiText(text) {
    // 1. Replace triple asterisks with bold and italics
    text = text.replace(/\*\*\*([^*]+)\*\*\*/g, "<b><i>$1</i></b>");
  
    // 2. Replace double asterisks with bold
    text = text.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
  
    // 3. Convert newline characters to <br> tags for HTML display
    text = text.replace(/\n/g, "<br>");
  
    // 4. Handle lists (if needed - Gemini might use *, -, or numbers)
    // This example handles unordered lists starting with * or -
    text = text.replace(/^(\*|\-)\s+(.+)$/gm, "<ul><li>$2</li></ul>"); //This is an attempt, not a perfect solution.  List formatting is complex.
  
      //Improve list handling (a better approach)
      text = text.replace(/^(\*|\-)\s+(.+)$/gm, "<li>$2</li>"); //Convert to list items
      text = text.replace(/(^<li>.+<\/li>\n*)+/gm, "<ul>$1</ul>"); //Wrap consecutive list items in a <ul>
  
    return text;
  }
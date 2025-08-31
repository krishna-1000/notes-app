import { toast } from "react-toastify";
import jsPDF from "jspdf";
export const downloadPlainText = (text) => {
    const file = new Blob([text],{type:'text/plain'});
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = 'note.txt';
    link.click();
    
}

export const downloadPDF = (content) =>{
    const doc = new jsPDF();
    const splitContent = doc.splitTextToSize(content,180);
    doc.setFontSize(16);
    doc.text(splitContent,20,20);
    doc.save('note.pdf');
}
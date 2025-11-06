// File: src/parser/TaskDataVisitor.js
import SmartTodoVisitor from './SmartTodoVisitor.js'; // Import class cơ sở được ANTLR tạo ra

// Tạo class tùy chỉnh KẾ THỪA từ class cơ sở
export class TaskDataVisitor extends SmartTodoVisitor {

    constructor() {
        super();
        this.taskData = {
            titleParts: [],
            tags: [],
            priority: null, 
            dueDate: null, 
        };
    }

    visitStartRule(ctx) {
        this.visitChildren(ctx); 

        this.taskData.title = this.taskData.titleParts.join(' ').trim();
        delete this.taskData.titleParts; 

        if (this.taskData.dueDate === 'tomorrow') {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(23, 59, 59, 999); 
            this.taskData.dueDate = tomorrow;
        } else if (this.taskData.dueDate) {
            try {
                 const parsedDate = new Date(this.taskData.dueDate);
                 if (!isNaN(parsedDate)) {
                     parsedDate.setHours(23, 59, 59, 999);
                     this.taskData.dueDate = parsedDate;
                 } else {
                     console.warn(`Could not parse due date: ${this.taskData.dueDate}`);
                     this.taskData.dueDate = null; 
                 }
            } catch(e) {
                 console.warn(`Error parsing due date: ${this.taskData.dueDate}`, e);
                 this.taskData.dueDate = null;
            }
        }

         if (this.taskData.priority !== null) {
             if (this.taskData.priority >= 1 && this.taskData.priority <= 3) {
             } else {
                console.warn(`Invalid priority value: ${this.taskData.priority}. Setting to Low.`);
                this.taskData.priority = 3; 
             }
         } else {
             this.taskData.priority = 3; 
         }

        return this.taskData; 
    }

    visitTag(ctx) {
        const tagText = ctx.WORD().getText(); 
        if (tagText) {
            this.taskData.tags.push(tagText);
        }
    }

    visitPriority(ctx) {
        const numText = ctx.NUMBER().getText(); 
        if (numText) {
            this.taskData.priority = parseInt(numText, 10);
        }
    }

    visitDueDate(ctx) {
        const dateText = ctx.WORD().getText(); 
        if (dateText) {
            this.taskData.dueDate = dateText.toLowerCase();
        }
    }

    visitText(ctx) {
        const wordText = ctx.WORD().getText(); 
        if (wordText) {
            this.taskData.titleParts.push(wordText);
        }
    }
}
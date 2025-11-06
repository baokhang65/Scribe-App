grammar SmartTodo;

startRule
    : (part)+ EOF;

part
    : tag
    | priority
    | dueDate
    | text
    ;

    : TAG_PREFIX WORD;  

    : PRIORITY_PREFIX NUMBER; 

    : DUE_PREFIX WORD;  

    : WORD;            

TAG_PREFIX
    : '#';

PRIORITY_PREFIX
    : '!';

DUE_PREFIX
    : 'due:';

NUMBER
    : [0-9]+;      

WORD
    : [a-zA-Z0-9À-ỹ]+; 
                     
WS
    : [ \t\r\n]+ -> skip; 
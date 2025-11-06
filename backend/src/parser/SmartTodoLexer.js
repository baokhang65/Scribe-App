// Generated from src/parser/SmartTodo.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\b)\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0006\u0005\u001a",
    "\n\u0005\r\u0005\u000e\u0005\u001b\u0003\u0006\u0006\u0006\u001f\n\u0006",
    "\r\u0006\u000e\u0006 \u0003\u0007\u0006\u0007$\n\u0007\r\u0007\u000e",
    "\u0007%\u0003\u0007\u0003\u0007\u0002\u0002\b\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u0003\u0002\u0005\u0003\u00022",
    ";\u0006\u00022;C\\c|\u00c2\u1efb\u0005\u0002\u000b\f\u000f\u000f\"\"",
    "\u0002+\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0003\u000f\u0003\u0002\u0002\u0002\u0005\u0011\u0003\u0002",
    "\u0002\u0002\u0007\u0013\u0003\u0002\u0002\u0002\t\u0019\u0003\u0002",
    "\u0002\u0002\u000b\u001e\u0003\u0002\u0002\u0002\r#\u0003\u0002\u0002",
    "\u0002\u000f\u0010\u0007%\u0002\u0002\u0010\u0004\u0003\u0002\u0002",
    "\u0002\u0011\u0012\u0007#\u0002\u0002\u0012\u0006\u0003\u0002\u0002",
    "\u0002\u0013\u0014\u0007f\u0002\u0002\u0014\u0015\u0007w\u0002\u0002",
    "\u0015\u0016\u0007g\u0002\u0002\u0016\u0017\u0007<\u0002\u0002\u0017",
    "\b\u0003\u0002\u0002\u0002\u0018\u001a\t\u0002\u0002\u0002\u0019\u0018",
    "\u0003\u0002\u0002\u0002\u001a\u001b\u0003\u0002\u0002\u0002\u001b\u0019",
    "\u0003\u0002\u0002\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c\n",
    "\u0003\u0002\u0002\u0002\u001d\u001f\t\u0003\u0002\u0002\u001e\u001d",
    "\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002\u0002 \u001e\u0003",
    "\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!\f\u0003\u0002\u0002\u0002",
    "\"$\t\u0004\u0002\u0002#\"\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002",
    "\u0002%#\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&\'\u0003",
    "\u0002\u0002\u0002\'(\b\u0007\u0002\u0002(\u000e\u0003\u0002\u0002\u0002",
    "\u0006\u0002\u001b %\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class SmartTodoLexer extends antlr4.Lexer {

    static grammarFileName = "SmartTodo.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'#'", "'!'", "'due:'" ];
	static symbolicNames = [ null, "TAG_PREFIX", "PRIORITY_PREFIX", "DUE_PREFIX", 
                          "NUMBER", "WORD", "WS" ];
	static ruleNames = [ "TAG_PREFIX", "PRIORITY_PREFIX", "DUE_PREFIX", "NUMBER", 
                      "WORD", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

SmartTodoLexer.EOF = antlr4.Token.EOF;
SmartTodoLexer.TAG_PREFIX = 1;
SmartTodoLexer.PRIORITY_PREFIX = 2;
SmartTodoLexer.DUE_PREFIX = 3;
SmartTodoLexer.NUMBER = 4;
SmartTodoLexer.WORD = 5;
SmartTodoLexer.WS = 6;



